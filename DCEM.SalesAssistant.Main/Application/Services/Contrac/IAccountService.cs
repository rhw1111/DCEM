using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using MSLibrary;
using MSLibrary.Xrm;

namespace DCEM.SalesAssistant.Main.Application.Services.Contrac
{
    public interface IAccountService
    {
        /// <summary>
        /// 销售机会列表查询
        /// </summary>
        /// <param name="accountRequest"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> QueryList(AccountRequest accountRequest);
        /// <summary>
        /// 通过Id获取数据
        /// </summary>
        /// <param name="entityId"></param>
        /// <returns></returns>
        Task<CrmEntity> QueryById(Guid entityId);
        /// <summary>
        /// 创建或编辑
        /// </summary>
        /// <param name="entityId"></param>
        /// <returns></returns>
        Task<Guid> AddOrEditEntity(AccountRequest request);
    }
}
