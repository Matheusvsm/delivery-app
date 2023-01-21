using DeliveryApi.Models;
using DeliveryApi.Persistence.Repositories.IRepositories;
using DeliveryApi.Services.IServices;
using DeliveryApi.Services.Communication;

namespace DeliveryApi.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IUnitOfWork _unitOfWork;

        public UserService(IUserRepository userRepository, IUnitOfWork unitOfWork)
        {
            _userRepository = userRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<User> FirstOrDefaultAsync(string email, string password)
        {
            return await _userRepository.FirstOrDefaultAsync(email, password);
        }

        public async Task<UserResponse> FindByEmailAsync(string email)
        {
            var existingUser = await _userRepository.FindByEmailAsync(email);

            if (existingUser == null)
            {
                return new UserResponse("Usuário não encontrado.");
            }
            else 
            {
                return new UserResponse(existingUser);
            }
            
        }

         public async Task<bool> IsAdminAsync(string email)
        {
            var existingUser = await  _userRepository.FindByEmailAsync(email);

            if (existingUser != null && existingUser.IsAdmin) 
            {
                return true;
            }
            else
            {
                return false;
            }
            
        }

        public async Task<IEnumerable<User>> ListAsync()
        {
            return await _userRepository.ListAsync();
        }

        public async Task<UserResponse> SaveAsync(User user)
        {
            var existingUser = await _userRepository.FindByEmailAsync(user.Email);

            if (existingUser != null)
                return new UserResponse("Já existe conta com esse Email");
            
            try
            {
                await _userRepository.AddAsync(user);
                await _unitOfWork.CompleteAsync();

                return new UserResponse(user);
            }
            catch (Exception ex)
            {
                // Do some logging stuff
                return new UserResponse($"Ocorreu um erro ao tentar criar o Usuário: {ex.Message}");
            }
        }

        public async Task<UserResponse> UpdateAsync(string email, User user)
        {

            var existingUser = await _userRepository.FindByEmailAsync(email);

            if (existingUser == null)
                return new UserResponse("Usuário não encontrado.");

            existingUser.Name = user.Name;
            existingUser.Email = user.Email;
            existingUser.Password = user.Password;
            existingUser.Address = user.Address;
            existingUser.AddressComplement = user.AddressComplement;
            existingUser.Phone = user.Phone;
            existingUser.Image = user.Image;

            try
            {
                _userRepository.Update(existingUser);
                await _unitOfWork.CompleteAsync();

                return new UserResponse(existingUser);
            }
            catch (Exception ex)
            {
                // Do some logging stuff
                return new UserResponse($"Ocorreu um erro ao tentar atualizar o Usuário: {ex.Message}");
            }
        }

        public async Task<UserResponse> DeleteAsync(string email)
        {
            var existingUser = await _userRepository.FindByEmailAsync(email);

            if (existingUser == null)
                return new UserResponse("Usuário não encontrado.");

            try
            {
                _userRepository.Remove(existingUser);
                await _unitOfWork.CompleteAsync();

                return new UserResponse(existingUser);
            }
            catch (Exception ex)
            {
                // Do some logging stuff
                return new UserResponse($"Ocorreu um erro ao tentar deletar o Usuário: {ex.Message}");
            }
        }
    }
}