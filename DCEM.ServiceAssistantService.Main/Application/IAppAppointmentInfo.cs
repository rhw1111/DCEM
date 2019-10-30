/*
    文件名：IAppointmentInfo.cs
    功能描述：预约跟进接口类  
    创建时间：2019年10月21日
    作者：黄贤顺
*/
using DCEM.ServiceAssistantService.Main.DTOModel;
using Microsoft.AspNetCore.Mvc;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.ServiceAssistantService.Main.Application
{
    public interface IAppAppointmentInfo
    {
        /// <summary>
        /// 获取预约跟进记录
        /// </summary>
        /// <param name="entityId"></param>
        Task<QueryResult<CrmEntity>> QueryListByPage(AppointmentInfoRequest filterstr);
        
        /// <summary>
        /// 预约单详情
        /// </summary>
        /// <param name="entityid"></param>
        /// <returns></returns>
        Task<CrmEntity> QueryDetail(string entityid);

        /// <summary>
        /// 预约单跟进记录
        /// </summary>
        /// <param name="appointmentInfoLogRequest"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> GetLog(AppointmentInfoLogRequest appointmentInfoLogRequest);

        /// <summary>
        /// 获取预约时段
        /// </summary>
        /// <param name="appointmentConfiggRequest"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> GetConfig(AppointmentConfiggRequest appointmentConfiggRequest);

        /// <summary>
        /// 预约单创建与修改(包括取消预约)
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<ActionResult<string>> AddOrEdit(AppointmentInfoAddOrEditRequest request);
    }
}
