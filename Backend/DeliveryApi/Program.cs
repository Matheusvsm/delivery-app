using System.Net.Mail;
using Microsoft.EntityFrameworkCore;
using Swashbuckle.AspNetCore.Swagger;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;
using DeliveryApi.Extensions;
using DeliveryApi.Persistence.Context;
using DeliveryApi.Persistence.Repositories;
using DeliveryApi.Persistence.Repositories.IRepositories;
using DeliveryApi.Services;
using DeliveryApi.Services.IServices;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

        // Add services to the container.
        builder.Services.AddControllers();

        var connection = builder.Configuration["MySQLConnection:MySQLConnectionString"];
        builder.Services.AddDbContext<AppDbContext>(options => options
            .UseMySql(connection, new MySqlServerVersion(new Version(5, 7, 0))));


        builder.Services.AddScoped<IUserRepository, UserRepository>();
        builder.Services.AddScoped<IUserService, UserService>();


        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "NoteOneAPI", Version = "v1"});
        });

        builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(
                opt =>
                {
                    
                    var s = Encoding.UTF8.GetBytes(builder.Configuration["SecurityKey"]);
                    opt.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = builder.Configuration["Issuer"],
                        ValidAudience = builder.Configuration["Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(s)
                    };

                    opt.Events = new JwtBearerEvents
                    {
                        OnAuthenticationFailed = context =>
                        {
                            return Task.CompletedTask;
                        },
                        OnTokenValidated = context =>
                        {
                            return Task.CompletedTask;
                        }
                    };
                });

        var app = builder.Build();

        var scope = app.Services.CreateScope();
        using (var context = scope.ServiceProvider.GetService<AppDbContext>())
        {
            context.Database.EnsureCreated();
        }

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseStaticFiles();

        app.UseCors();

        app.UseRouting();

        app.UseHttpsRedirection();

        app.UseAuthentication();
        
        app.UseAuthorization();

        app.MapControllers();

        app.Run();


    }
}