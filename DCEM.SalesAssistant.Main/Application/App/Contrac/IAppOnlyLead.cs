using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using MSLibrary;
using MSLibrary.Xrm;

namespace DCEM.SalesAssistant.Main.Application.App.Contrac
{
    public interface IAppOnlyLead
    {
        /// <summary>
        /// 唯一线索列表查询接口
        /// </summary>
        /// <param name="onlyLeadRequest"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> QueryList(OnlyLeadRequest onlyLeadRequest);


        /// <summary>
        /// 唯一线索详情查询接口
        /// </summary>
        /// <param name="entityid"></param>
        /// <returns></returns>
        Task<CrmEntity> GetOnlyLeadDetail(string entityid);

    }
}
