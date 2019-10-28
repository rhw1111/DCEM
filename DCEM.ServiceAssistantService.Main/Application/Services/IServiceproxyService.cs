﻿using MSLibrary.Xrm;
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


    }
}
