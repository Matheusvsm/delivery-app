using Microsoft.Extensions.Configuration;
using System;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using DeliveryApi.Models;
using DeliveryApi.Services.IServices;
using DeliveryApi.Util;
using DeliveryApi.Resource;
using DeliveryApi.Extensions;

namespace DeliveryApi.Controllers
{
    [Route("/api/[controller]")]
    [AllowAnonymous]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;
        private readonly IConfiguration _configuration;

        public UserController(IUserService userService, IMapper mapper, IConfiguration configuration)
        {
            _userService = userService;
            _mapper = mapper;
            _configuration = configuration;
        }

        [HttpPost]
        public async Task<ActionResult> VerifyLogin([FromBody] UserAuth userAuth)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState.GetErrorMessages());
                }                  
                
                string email = userAuth.Email;
                string password = userAuth.Password;

                var userResponse = await _userService.FindByEmailAsync(email);
                var user = userResponse.User;
                var result = await _userService.FirstOrDefaultAsync(user.Email, user.Password);

                if (result == null)
                    return BadRequest("Erro ao tentar realizar o login.");

                var token = CryptoFunction.GenerateToken(_configuration, user);

                return Ok(new
                {
                    error = false,
                    result = new
                    {
                        token,
                        user = new { user.Id, user.Email}
                    }
                });

            }

            catch (Exception ex)
            {
                var message = "Erro ao tentar realizar o login.";
                return BadRequest(new { error = true, result = new { message } });
            }

        }

        [HttpPost("signin/")]
        public async Task<IActionResult> SignInAsync([FromBody] SaveUserResource resource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState.GetErrorMessages());

            var user = _mapper.Map<SaveUserResource, User>(resource);
            var result = await _userService.SaveAsync(user);

            if (!result.Success)
                return BadRequest(result.Message);

            var userResource = _mapper.Map<User, UserResource>(result.User);
            return Ok(userResource);
        }

        [Authorize()]
        [HttpPut]
        public async Task<IActionResult> PutAsync([FromBody] SaveUserResource resource)
        {
            string isAdmin = await WhoAmIAsync(new UserAuth{Email = resource.Email, Password = resource.Password});
            if(isAdmin == "Cliente")
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState.GetErrorMessages());

                var user = _mapper.Map<SaveUserResource, User>(resource);
                var result = await _userService.UpdateAsync(user.Email, user);

                if (!result.Success)
                    return BadRequest(result.Message);

                var userResource = _mapper.Map<User, UserResource>(result.User);
                return Ok(userResource);
            }
            else
            {
                return BadRequest("Acesso Negado");
            }
            
        }



        [Authorize()]
        [HttpGet]
        public async Task<IEnumerable<UserResource>> GetAllAsync([FromBody] UserAuth userAuth)
        {
            string isAdmin = await WhoAmIAsync(userAuth);
            if(isAdmin == "Admin")
            {
                var users = await _userService.ListAsync();
                var resources = _mapper.Map<IEnumerable<User>, IEnumerable<UserResource>>(users);

                return resources;
            }
            else 
            {
                return null;
            }
        }

        [Authorize()]
        [HttpDelete]
        public async Task<IActionResult> DeleteAsync([FromBody] UserAuth userAuth)
        {
            string isAdmin = await WhoAmIAsync(userAuth);
            if(isAdmin == "Admin")
            {
                string email = userAuth.Email;
                var result = await _userService.DeleteAsync(email);

                if (!result.Success)
                    return BadRequest(result.Message);

                var userResource = _mapper.Map<User, UserResource>(result.User);
                return Ok(userResource);
            }
            else
            {
                return BadRequest("Acesso Negado");
            }
            
        }

        private async Task<string> WhoAmIAsync(UserAuth userAuth)
        {
            string email = userAuth.Email;
            string password = userAuth.Password;

            var userResponse = await _userService.FindByEmailAsync(email);
            var user = userResponse.User;
            var result = await _userService.FirstOrDefaultAsync(user.Email, user.Password);

            if (result == null)
                return "Não Encontrado";

            bool isAdmin = await _userService.IsAdminAsync(user.Email);
            
            if(isAdmin)
            {
                return "Admin";
            }
            else
            {
                return "Cliente";
            }
        }
    }
}