using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DCEM.Main.Entities;
using MSLibrary;
using MSLibrary.Xrm;

namespace DCEM.Main.Services
{
    public interface IAuthService
    {
        Task<string> GetAuthToken(string username, string password);

        Task<UserInfo> GetLoginInfo(string username);

        Task<Dictionary<string, AdfsEndpoint>> getData();

        Task<string> GetUserRole(Guid systemuserid);

    }
}
