using MSLibrary.Xrm;
using System.Threading.Tasks;
using MSLibrary;
using DCEM.ServiceAssistantService.Main.DTOModel;
namespace DCEM.ServiceAssistantService.Main.Application
{
    public interface IVehownerService
    {
        #region 查询车辆档案列表
        /// <summary>
        /// 查询车辆档案
        /// </summary>
        Task<QueryResult<CrmEntity>> QueryList(int pageindex, string search,string dealeridGuid);
        #endregion

        #region 查询车型列表
        Task<QueryResult<CrmEntity>> QueryCarmodelList();
        #endregion
    }
}
