﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DCEM.ServiceAssistantService.Main.Application.Services;
using DCEM.ServiceAssistantService.Main.DTOModel;
using MSLibrary;
using MSLibrary.Xrm;

namespace DCEM.ServiceAssistantService.Main.Application
{
    public class AppAppointmentInfo : IAppAppointmentInfo
    {
        private IAppointmentInfoService _appointmentInfoService;

        public AppAppointmentInfo(IAppointmentInfoService appointmentInfoService)
        {
            _appointmentInfoService = appointmentInfoService;
        }

        /// <summary>
        /// 预约记录查询
        /// </summary>
        /// <param name="entityid"></param>
        /// <returns></returns>
        public async Task<CrmEntity> QueryDetail(string entityid)
        {
            return await _appointmentInfoService.QueryDetail(entityid);
        }

        /// <summary>
        /// 预约记录列表查询
        /// </summary>
        /// <param name="filterstr"></param>
        /// <param name="pageSize"></param>
        /// <param name="pageNum"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryListByPage(AppointmentInfoRequest filterstr, int pageSize, int pageNum)
        {
            return await _appointmentInfoService.QueryListByPage(filterstr, pageSize, pageNum);
        }
    }
}
