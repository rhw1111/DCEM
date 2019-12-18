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

        #region 问诊单转服务委托书
        Task<ValidateResult<string>> ToServiceproxy(string serviceproxyGuid);
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

        Task<QueryResult<CrmEntity>> QueryPartsListByFilter(int pageIndex, int pageCount, string filter);
        #endregion

        #region 查询维修类别(保修自费)
        Task<QueryResult<CrmEntity>> QueryRepairitemtypeList();
        #endregion

        #region 查询维修类型
        Task<QueryResult<CrmEntity>> QueryRepairitemtypedetailList();
        #endregion

        #region 查询维修履历列表--用于C端
        Task<QueryResult<CrmEntity>> UcQueryList(string phone, int? status, int pageindex, int pagesize);
        #endregion

        #region 查询 问诊单 服务委托书 详情--用于C端
        Task<ServiceproxyQueryInfoResponse> UcQueryInfo(string guid);
        #endregion
    }
}
