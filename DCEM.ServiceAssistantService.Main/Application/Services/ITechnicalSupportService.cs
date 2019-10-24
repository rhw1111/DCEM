using DCEM.ServiceAssistantService.Main.DTOModel;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.ServiceAssistantService.Main.Application
{
    public interface ITechnicalSupportService
    {
        /// <summary>
        /// 分页查询技术支持
        /// </summary>
        Task<QueryResult<CrmEntity>> QueryListByPage(string filterstr, int pageSize, int pageNum, string sort,string token="");
        /// <summary>
        /// 通过Id获取数据
        /// </summary>
        /// <param name="entityId"></param>
        /// <returns></returns>
        Task<CrmEntity> QueryById(Guid entityId);
    }
}
