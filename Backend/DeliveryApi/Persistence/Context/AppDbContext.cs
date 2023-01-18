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
            builder.Entity<User>().Property(p => p.Name).IsRequired().HasMaxLength(50);
            builder.Entity<User>().Property(p => p.Email).IsRequired().HasMaxLength(50);
            builder.Entity<User>().Property(p => p.Password).IsRequired().HasMaxLength(50);
            builder.Entity<User>().Property(p => p.Address).IsRequired().HasMaxLength(50);
            builder.Entity<User>().Property(p => p.AddressComplement).HasMaxLength(50);
            builder.Entity<User>().Property(p => p.Phone).IsRequired().HasMaxLength(20);
            builder.Entity<User>().Property(p => p.Image).HasMaxLength(100);

            //Popular Users
            builder.Entity<User>().HasData
            (
                new User {
                    Id = 1,
                    Name = "Gabriel Freitas de Oliveira",
                    Email = "biel.dan@hotmail.com",
                    Password = "123456",
                    Address = "Rua Marechal Rondon, 399",
                    AddressComplement = "",
                    Phone = "85989088651",
                    Image = "https://lh3.googleusercontent.com/a/AEdFTp74Twoz8_vESokJkFtZi-7WLh9DPaVa5TZDc8Mp=s96-c-rg-br100"
                },
                new User {
                    Id = 2,
                    Name = "Daniel Freitas de Oliveira",
                    Email = "daniel.fo@hotmail.com",
                    Password = "123321",
                    Address = "Rua Vincente Pinzon, 1400",
                    AddressComplement = "Apt 402, Bloco C",
                    Phone = "85989081063",
                    Image = ""
                } ,
                new User {
                    Id = 3,
                    Name = "Joana Stefani Lima Vasconcelos",
                    Email = "jstefani-1@hotmail.com",
                    Password = "26241317",
                    Address = "Rua Benjamin Moura, 478",
                    AddressComplement = "",
                    Phone = "85988722744",
                    Image = ""
                }                   
            );
        }
    }
}