using System.ComponentModel.DataAnnotations;

namespace DeliveryApi.Resource
{
    public class SaveUserResource
    {
        [Required]
        [MaxLength(50)]
        public string Login { get; set; }

        [Required]
        [MaxLength(10)]
        public string Password { get; set; }
    }
}