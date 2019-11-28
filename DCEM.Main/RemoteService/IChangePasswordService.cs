using DCEM.Main.Entities;
using DCEM.Main.Response;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
namespace DCEM.Main.RemoteService
{
    public interface IChangePasswordService
    {
        Task<ResultResponse> UpdatePwd(ChangePasswordModel model);
    }
   
}
