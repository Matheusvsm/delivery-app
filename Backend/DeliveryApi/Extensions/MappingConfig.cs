using AutoMapper;
using DeliveryApi.Models;
using DeliveryApi.Resource;

namespace DeliveryApi.Extensions
{
    public class MappingConfig
    {
        public static MapperConfiguration RegisterMaps()
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                config.CreateMap<SaveUserResource, User>();
                config.CreateMap<User, UserResource>();
            });
            return mappingConfig;
        }
    }
}