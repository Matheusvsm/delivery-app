using AutoMapper;
using DeliveryApi.Models;
using DeliveryApi.Resource;

namespace DeliveryApi.Extensions
{
    public class ResourceToModelProfile : Profile
    {
        public ResourceToModelProfile()
        {
            CreateMap<SaveUserResource, User>();
        }
        
    }
}