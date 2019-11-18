//==============================================
//文件名：IAppInstallation.cs
//功能描述：安装单接口
//创建时间：2019年11月18日 10:08:10;作者：张俊秋
//==============================================
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using MSLibrary;
using MSLibrary.Xrm;

namespace DCEM.SalesAssistant.Main.Application.App.Contrac
{
    public interface IAppInstallation
    {
        /// <summary>
        /// 勘测单列表查询
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> GetSurveyorderList(SurveyorderListRequest _request);
    }
}
