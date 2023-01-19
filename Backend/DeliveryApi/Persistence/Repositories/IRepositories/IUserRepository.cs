using DeliveryApi.Models;

namespace DeliveryApi.Persistence.Repositories.IRepositories
{
    public interface IUserRepository
    {
        Task<User> FirstOrDefaultAsync(string email, string password);  
        Task<User> FindByEmailAsync(string email);
    }
}