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

        public async Task<User> FirstOrDefaultAsync(string email, string password)
        {
            return await _context.Users.FirstOrDefaultAsync(x => x.Email == email && x.Password == password);
        }

        public async Task<User> FindByEmailAsync(string email)
        {
            return await _context.Users
                    .FirstOrDefaultAsync(x => x.Email == email);
        }

        public async Task<IEnumerable<User>> ListAsync()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task AddAsync(User user)
        {
            await _context.Users.AddAsync(user);
        }

        public void Update(User user)
        {
            _context.Users.Update(user);
        }

        public void Remove(User user)
        {
            _context.Users.Remove(user);
        }

    }
}