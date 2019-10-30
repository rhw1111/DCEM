using DCEM.ServiceAssistantService.Main.DTOModel;
using Microsoft.AspNetCore.Mvc;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.ServiceAssistantService.Main.Application.Services
{
    public interface IAppointmentInfoService
    {
        /// <summary>
        /// 分页查询
        /// </summary>
        Task<QueryResult<CrmEntity>> QueryListByPage(AppointmentInfoRequest filterstr);
        
        /// <summary>
        /// 预约记录查询
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
