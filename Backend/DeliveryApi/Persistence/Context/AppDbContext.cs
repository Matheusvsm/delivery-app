using Microsoft.EntityFrameworkCore;
using DeliveryApi.Models;

namespace DeliveryApi.Persistence.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext() { }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }

         protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            //Tabela Users
            builder.Entity<User>().ToTable("Users");
            builder.Entity<User>().HasKey(p => p.Id);
            builder.Entity<User>().Property(p => p.Id).IsRequired().ValueGeneratedOnAdd();
            builder.Entity<User>().Property(p => p.Login).IsRequired().HasMaxLength(50);
            builder.Entity<User>().Property(p => p.Password).IsRequired().HasMaxLength(10);

            //Popular Users
            builder.Entity<User>().HasData
            (
                new User {Id = 100, Login = "vini", Password = "12345"}                
            );
        }
    }
}