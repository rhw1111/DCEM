using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using MSLibrary;
using MSLibrary.Xrm;

namespace DCEM.SalesAssistant.Main.Application.App
{
    public class AppVehorder : IAppVehorder
    {

        private IVehorderService _vehorderService;

        public AppVehorder(IVehorderService vehorderService)
        {
            _vehorderService = vehorderService;
        }


        /// <summary>
        /// 整车订单列表查询
        /// </summary>
        /// <param name="vehorderRequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> GetVehorderList(VehorderRequest vehorderRequest)
        {
            return await _vehorderService.GetVehorderList(vehorderRequest);
        }

        /// <summary>
        /// 根据主键id获取厅店整车订单明细
        /// </summary>
        /// <param name="mcs_vehorderid"></param>
        /// <returns></returns>
        public async Task<VehorderDetailModel> GetVehorderDetail(string mcs_vehorderid)
        {
            return await _vehorderService.GetVehorderDetail(mcs_vehorderid);
        }

    }
}
