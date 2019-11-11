using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using MSLibrary;
using MSLibrary.Xrm;

namespace DCEM.SalesAssistant.Main.Application.App.Contrac
{
    public interface IAppVehorder
    {

        /// <summary>
        /// 整车订单列表查询接口
        /// </summary>
        /// <param name="vehorderRequest"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> GetVehorderList(VehorderRequest vehorderRequest);

    }
}
