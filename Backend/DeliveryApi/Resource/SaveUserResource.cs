using System.ComponentModel.DataAnnotations;

namespace DeliveryApi.Resource
{
    public class SaveUserResource
    {

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        [Required]
        [MaxLength(50)]
        public string Email{ get; set; }

        [Required]
        [MaxLength(50)]
        public string Password { get; set; }

        [Required]
        [MaxLength(50)]
        public string Address { get; set; }

        [MaxLength(50)]
        public string AddressComplement { get; set; }

        [Required]
        [MaxLength(20)]
        public string Phone { get; set; }

        [MaxLength(100)]
        public string Image { get; set; }

        [Required]
        public bool IsAdmin { get; set; }
    }
}