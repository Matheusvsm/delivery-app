using DeliveryApi.Models;
using DeliveryApi.Services.Communication;

namespace DeliveryApi.Services.IServices
{
    public interface IUserService
    {
        Task<User> FirstOrDefaultAsync(string email, string password);
        Task<UserResponse> FindByEmailAsync(string email);
        Task<bool> IsAdminAsync(string email);
        Task<IEnumerable<User>> ListAsync();
        Task<UserResponse> SaveAsync(User user);
        Task<UserResponse> UpdateAsync(string email, User user);
        Task<UserResponse> DeleteAsync(string email);
    }
}