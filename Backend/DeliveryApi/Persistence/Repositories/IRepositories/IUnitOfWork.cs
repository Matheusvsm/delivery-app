
namespace DeliveryApi.Persistence.Repositories.IRepositories
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();
    }
}