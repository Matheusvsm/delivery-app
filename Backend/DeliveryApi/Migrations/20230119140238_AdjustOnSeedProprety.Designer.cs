﻿// <auto-generated />
using DeliveryApi.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DeliveryApi.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20230119140238_AdjustOnSeedProprety")]
    partial class AdjustOnSeedProprety
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("DeliveryApi.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("AddressComplement")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Image")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)");

                    b.Property<bool>("IsAdmin")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("varchar(20)");

                    b.HasKey("Id");

                    b.ToTable("Users", (string)null);

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Address = "Rua Marechal Rondon, 399",
                            AddressComplement = "",
                            Email = "biel.dan@hotmail.com",
                            Image = "https://lh3.googleusercontent.com/a/AEdFTp74Twoz8_vESokJkFtZi-7WLh9DPaVa5TZDc8Mp=s96-c-rg-br100",
                            IsAdmin = true,
                            Name = "Gabriel Freitas de Oliveira",
                            Password = "123456",
                            Phone = "85989088651"
                        },
                        new
                        {
                            Id = 2,
                            Address = "Rua Vincente Pinzon, 1400",
                            AddressComplement = "Apt 402, Bloco C",
                            Email = "daniel.fo@hotmail.com",
                            Image = "",
                            IsAdmin = false,
                            Name = "Daniel Freitas de Oliveira",
                            Password = "123321",
                            Phone = "85989081063"
                        },
                        new
                        {
                            Id = 3,
                            Address = "Rua Benjamin Moura, 478",
                            AddressComplement = "",
                            Email = "jstefani-1@hotmail.com",
                            Image = "",
                            IsAdmin = false,
                            Name = "Joana Stefani Lima Vasconcelos",
                            Password = "26241317",
                            Phone = "85988722744"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
