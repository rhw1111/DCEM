using DCEM.ServiceAssistantService.Main.DTOModel;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.ServiceAssistantService.Main.Application
{
    public interface IAppTechnicalSupport
    {
        /// <summary>
        /// 分页获取技术支持
        /// </summary>
        /// <param name="entityId"></param>
        Task<QueryResult<CrmEntity>> QueryListByPage(string filterstr, int pageSize, int pageNum, string sort,string token="");
    }
}
