using Microsoft.EntityFrameworkCore;
using DeliveryApi.Models;
using DeliveryApi.Persistence.Context;
using DeliveryApi.Persistence.Repositories.IRepositories;

namespace DeliveryApi.Persistence.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<User> FirstOrDefaultAsync(String login, String password)
        {
            return await _context.Users.FirstOrDefaultAsync(x => x.Login == login && x.Password == password);
        }
    }
}