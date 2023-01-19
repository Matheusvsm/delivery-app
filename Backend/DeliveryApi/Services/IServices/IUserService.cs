using DeliveryApi.Models;
using DeliveryApi.Services.Communication;

namespace DeliveryApi.Services.IServices
{
    public interface IUserService
    {
        Task<User> FirstOrDefaultAsync(string email, string password);
        Task<UserResponse> FindByEmailAsync(string email);
    }
}