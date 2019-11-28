using DCEM.Main.Response;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.RemoteService
{
   public interface IMemberRightsService
    {
        /// <summary>
        /// 测试权益
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        Task<MemberRightsResponse> GetTest();
    }

}
