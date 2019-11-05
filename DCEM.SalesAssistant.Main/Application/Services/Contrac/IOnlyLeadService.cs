using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using MSLibrary;
using MSLibrary.Xrm;

namespace DCEM.SalesAssistant.Main.Application.Services.Contrac
{
    public interface IOnlyLeadService
    {
        /// <summary>
        /// 唯一线索列表查询
        /// </summary>
        /// <param name="onlyLeadRequest"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> QueryList(OnlyLeadRequest onlyLeadRequest);
    }
}
