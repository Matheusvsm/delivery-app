using DeliveryApi.Models;

namespace DeliveryApi.Services.IServices
{
    public interface IUserService
    {
        Task<User> FirstOrDefaultAsync(String login, String password);
    }
}