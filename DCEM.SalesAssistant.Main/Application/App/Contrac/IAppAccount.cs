using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using MSLibrary;
using MSLibrary.Xrm;

namespace DCEM.SalesAssistant.Main.Application.App.Contrac
{
    public interface IAppAccount
    {
        /// <summary>
        /// 销售机会列表查询接口
        /// </summary>
        /// <param name="accountRequest"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> QueryList(AccountRequest accountRequest);
        /// <summary>
        /// 通过ID获取详情数据
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<CrmEntity> QueryById(Guid id);
        /// <summary>
        /// 创建或编辑实体
        /// </summary>
        /// <param name="crmEntity"></param>
        /// <returns></returns>
        Task<Guid> AddOrEditEntity(AccountRequest request);
    }
}
