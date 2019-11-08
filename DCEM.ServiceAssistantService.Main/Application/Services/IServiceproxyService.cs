using MSLibrary.Xrm;
using System.Threading.Tasks;
using MSLibrary;
using DCEM.ServiceAssistantService.Main.DTOModel;
namespace DCEM.ServiceAssistantService.Main.Application
{
    public interface IServiceproxyService
    {
        #region 查询服务委托书 问诊单接口
        Task<QueryResult<CrmEntity>> QueryList(int type, int pageindex, string search);
        #endregion

        #region 查询服务委托书 问诊单详细信息
        Task<ServiceproxyQueryInfoResponse> QueryInfo(string guid);
        #endregion

        #region 添加 编辑 服务委托书 问诊单
        Task<ValidateResult<CrmEntity>> AddOrUpdate(ServiceproxyAddOrUpdateRequest request);
        #endregion

        #region 删除 服务委托书 问诊单
        Task<ValidateResult<string>> Delete(string serviceproxyGuid);
        #endregion

        #region 查询环检项 列表
        Task<QueryResult<CrmEntity>> QueryVehcheckList();
        #endregion

        #region 查询厅店工位信息 列表
        Task<QueryResult<CrmEntity>> QueryRepairlocationList();
        #endregion

        #region 查询保养项 列表
        Task<QueryResult<CrmEntity>> QueryMaintenanceList();
        #endregion

        #region 查询服务 保养项 详细信息
        Task<MaintenanceQueryInfoResponse> QueryMaintenanceInfo(string maintenanceGuid, string dealeridGuid);
        #endregion

        #region 查询维修项目
        Task<QueryResult<CrmEntity>> QueryRepairitemList(string dealeridGuid, int pageIndex, string search);
        #endregion

        #region 查询维修配件项目
        Task<QueryResult<CrmEntity>> QueryPartsList(int pageIndex, string search);
        #endregion

    }
}
