using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DCEM.ServiceAssistantService.Main.DTOModel;
using MSLibrary;
using MSLibrary.Xrm;

namespace DCEM.ServiceAssistantService.Main.Application.Services
{
    public interface IAuthService
    {
        Task<LoginModel> GetAuthToken(string username, string password);
    }
}
