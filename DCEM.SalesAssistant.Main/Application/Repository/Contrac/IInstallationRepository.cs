//==============================================
//文件名：IInstallationRepository.cs
//功能描述：安装单接口实体xml接口
//创建时间：2019年11月18日 10:08:10;作者：张俊秋
//==============================================
using DCEM.SalesAssistant.Main.ViewModel.Request;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.Application.Repository.Contrac
{
    public interface IInstallationRepository
    {
        string GetSurveyorderList(SurveyorderListRequest _request);
    }
}
