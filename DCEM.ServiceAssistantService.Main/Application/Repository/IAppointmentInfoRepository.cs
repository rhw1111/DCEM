using System;
using System.Collections.Generic;
using System.Text;
using DCEM.ServiceAssistantService.Main.DTOModel;

namespace DCEM.ServiceAssistantService.Main.Application.Repository
{
    public interface IAppointmentInfoRepository
    {
        /// <summary>
        /// 预约跟进列表查询
        /// </summary>
        /// <param name="filterstr"></param>
        /// <param name="pageSize"></param>
        /// <param name="pageNum"></param>
        /// <returns></returns>
        string QueryListByPage(AppointmentInfoRequest filterstr, int pageSize, int pageNum);

        /// <summary>
        /// 预约记录详情
        /// </summary>
        /// <param name="entityid"></param>
        /// <returns></returns>
        string QueryDetail(string entityid);
    }
}
