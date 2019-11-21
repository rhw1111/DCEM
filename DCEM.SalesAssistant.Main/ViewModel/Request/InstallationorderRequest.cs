//==============================================
//文件名：InstallationorderRequest.cs
//功能描述：安装单接口实体入参实体类
//创建时间：2019年11月21日 09:59:38;作者：张俊秋
//==============================================
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    /// <summary>
    /// 安装单列表查询接口入参实体类
    /// </summary>
    public class InstallationorderRequest: PageBaseRequestModel
    {
        /// <summary>
        /// 查询关键字
        /// </summary>
        public string SearchKey { set; get; }
        /// <summary>
        /// 厅店ID
        /// </summary>
        public string mcs_dealerid { set; get; }
        /// <summary>
        /// 安装状态
        /// </summary>
        public int? mcs_installationstatus { set; get; }
    }

    /// <summary>
    /// 安装单详情查询接口入参实体类
    /// </summary>
    public class InstallationorderDetailRequest 
    {
        public string Guid { get; set; }
        public string UserId { get; set; }
        public string DealerId { get; set; }
    }
}
