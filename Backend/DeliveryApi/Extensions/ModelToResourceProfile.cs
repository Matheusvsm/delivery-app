using AutoMapper;
using DeliveryApi.Models;
using DeliveryApi.Resource;

namespace DeliveryApi.Extensions
{
    public class ModelToResourceProfile : Profile
    {
        public ModelToResourceProfile()
        {
            CreateMap<User, UserResource>();
        }
    }
}