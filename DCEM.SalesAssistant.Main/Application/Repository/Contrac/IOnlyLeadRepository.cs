using System;
using System.Collections.Generic;
using System.Text;
using DCEM.SalesAssistant.Main.ViewModel.Request;

namespace DCEM.SalesAssistant.Main.Application.Repository.Contrac
{
    public interface IOnlyLeadRepository
    {
        string QueryList(OnlyLeadRequest onlyLeadRequest);


        /// <summary>
        /// 唯一线索详情
        /// </summary>
        /// <param name="entityid"></param>
        /// <returns></returns>
        string GetOnlyLeadDetail(string entityid);
    }
}
