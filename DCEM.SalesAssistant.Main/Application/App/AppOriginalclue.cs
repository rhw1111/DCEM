//shengf,2019.11.05
//移动端原始线索功能
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Application.Services;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.SalesAssistant.Main.Application.App
{
    public class AppOriginalclue: IAppOriginalclue
    {
       
        private IOriginalclueService _service;
        public AppOriginalclue(IOriginalclueService originalclueService)
        {
            _service = originalclueService;
        }
        /// <summary>
        /// 获取原始线索列表数据
        /// </summary>
        public async Task<OriginalclueListResponse> GetOriginalclueList(OriginalclueListRequest originalclueListRequest)
        {
           return await _service.GetOriginalclueList(originalclueListRequest);
        }
        /// <summary>
        /// 获取原始线索详情
        /// </summary>
        public async Task<CrmEntity> Get(OriginalclueDetailRequest originalclueDetailRequest)
        {
            return await _service.Get(originalclueDetailRequest);
        }

    }
}
