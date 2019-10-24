/*
    文件名：IAppointmentInfo.cs
    功能描述：预约跟进接口类  
    创建时间：2019年10月21日
    作者：黄贤顺
*/
using DCEM.ServiceAssistantService.Main.DTOModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.ServiceAssistantService.Main.Application
{
    public interface IAppAppointmentInfo
    {
        /// <summary>
        /// 获取预约跟进记录
        /// </summary>
        /// <param name="entityId"></param>
        IList<AppointmentInfoModel> QueryListByPage(AppointmentInfoRequest filterstr, int pageSize, int pageNum, string sort, string token = "");
    }
}
