using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DeliveryApi.Migrations
{
    public partial class InitialUserMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Email = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Password = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Address = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    AddressComplement = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Phone = table.Column<string>(type: "varchar(20)", maxLength: 20, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Image = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Address", "AddressComplement", "Email", "Image", "Name", "Password", "Phone" },
                values: new object[] { 1, "Rua Marechal Rondon, 399", null, "biel.dan@hotmail.com", "https://lh3.googleusercontent.com/a/AEdFTp74Twoz8_vESokJkFtZi-7WLh9DPaVa5TZDc8Mp=s96-c-rg-br100", "Gabriel Freitas de Oliveira", "123456", "85989088651" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Address", "AddressComplement", "Email", "Image", "Name", "Password", "Phone" },
                values: new object[] { 2, "Rua Vincente Pinzon, 1400", "Apt 402, Bloco C", "daniel.fo@hotmail.com", null, "Daniel Freitas de Oliveira", "123321", "85989081063" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Address", "AddressComplement", "Email", "Image", "Name", "Password", "Phone" },
                values: new object[] { 3, "Rua Benjamin Moura, 478", null, "jstefani-1@hotmail.com", null, "Joana Stefani Lima Vasconcelos", "26241317", "85988722744" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
