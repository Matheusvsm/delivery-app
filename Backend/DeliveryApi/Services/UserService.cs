using DeliveryApi.Models;
using DeliveryApi.Persistence.Repositories.IRepositories;
using DeliveryApi.Services.IServices;
using DeliveryApi.Services.Communication;

namespace DeliveryApi.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<User> FirstOrDefaultAsync(String login, String password)
        {
            return await _userRepository.FirstOrDefaultAsync(login, password);
        }
    }
}