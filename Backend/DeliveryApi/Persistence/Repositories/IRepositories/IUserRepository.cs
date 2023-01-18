using DeliveryApi.Models;

namespace DeliveryApi.Persistence.Repositories.IRepositories
{
    public interface IUserRepository
    {
        Task<User> FirstOrDefaultAsync(String login, String password);  
    }
}