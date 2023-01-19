using DeliveryApi.Models;

namespace DeliveryApi.Persistence.Repositories.IRepositories
{
    public interface IUserRepository
    {
        Task<User> FirstOrDefaultAsync(string email, string password);  
        Task<User> FindByEmailAsync(string email);
        Task<IEnumerable<User>> ListAsync();
        Task AddAsync(User user);
        void Update(User user);
        void Remove(User user);
    }
}