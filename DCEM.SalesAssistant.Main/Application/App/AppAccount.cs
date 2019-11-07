using System;
using System.Threading.Tasks;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using MSLibrary;
using MSLibrary.Xrm;

namespace DCEM.SalesAssistant.Main.Application.App
{
    public class AppAccount : IAppAccount
    {
        private IAccountService _accountService;

        public AppAccount(IAccountService accountService)
        {
            _accountService = accountService;
        }

        /// <summary>
        /// 销售机会列表查询接口
        /// </summary>
        /// <param name="accountRequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryList(AccountSearhRequest accountRequest)
        {
            return await _accountService.QueryList(accountRequest);
        }
        /// <summary>
        /// 获取销售机会详情数据
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<CrmEntity> QueryById(Guid id)
        {
            return await _accountService.QueryById(id);
        }
        /// <summary>
        /// 创建或编辑销售机会
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<Guid> AddOrEditEntity(AccountRequest request)
        {
            return await _accountService.AddOrEditEntity(request);
        }
    }
}
