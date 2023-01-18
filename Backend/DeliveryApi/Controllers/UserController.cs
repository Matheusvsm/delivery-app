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
        public async Task<ActionResult> VerifyLogin([FromBody] SaveUserResource resource)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState.GetErrorMessages());

                var user = _mapper.Map<SaveUserResource, User>(resource);
                var result = await _userService.FirstOrDefaultAsync(user.Login, user.Password);

                if (result == null)
                    return BadRequest("Erro ao tentar realizar o login.");

                var token = CryptoFunction.GenerateToken(_configuration, user);

                return Ok(new
                {
                    error = false,
                    result = new
                    {
                        token,
                        user = new { user.Id, user.Login }
                    }
                });

            }

            catch (Exception ex)
            {
                var message = "Erro ao tentar realizar o login.";
                return BadRequest(new { error = true, result = new { message } });
            }

        }
    }
}