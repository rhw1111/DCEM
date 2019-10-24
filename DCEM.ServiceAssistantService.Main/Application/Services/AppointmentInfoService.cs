using System;
using System.Collections.Generic;
using System.Text;
using System.Web;
using DCEM.ServiceAssistantService.Main.DTOModel;
using MSLibrary.Xrm;

namespace DCEM.ServiceAssistantService.Main.Application.Services
{
    public class AppointmentInfoService : IAppointmentInfoService
    {
        private ICrmService _crmService;

        public AppointmentInfoService(CrmService crmService)
        {
            _crmService = crmService;
        }

        public IList<AppointmentInfoModel> QueryListByPage(AppointmentInfoRequest filterstr, int pageSize, int pageNum, string sort, string token = "")
        {
            try
            {
                var strQuery = new StringBuilder();
                strQuery.Append($"$select=mcs_appointmentat,_mcs_appointmentconfigid_value,mcs_appointmentinfoid,mcs_carplate,mcs_customername,mcs_customerphone,mcs_name,mcs_status&$expand=mcs_appointmentconfigid($select=mcs_name)&$filter=statecode eq 0");
                //预约状态
                if (!string.IsNullOrWhiteSpace(filterstr.mcs_status))
                {
                    strQuery.Append($" and  mcs_status eq {filterstr.mcs_status}");
                }
                if (!string.IsNullOrWhiteSpace(filterstr.search))
                {
                    strQuery.Append($" and (mcs_carplate eq '{ filterstr.search}' or mcs_customerphone eq '{filterstr.search}' or mcs_customername eq '{filterstr.search}')");
                }
                List<AppointmentInfoModel> list = new List<AppointmentInfoModel>();
                var result = _crmService.RetrieveMultiple("mcs_appointmentinfo", strQuery.ToString()).Result;
                if (result != null && result.Results != null)
                {
                    foreach (var item in result.Results)
                    {
                        list.Add(new AppointmentInfoModel()
                        {
                            mcs_appointmentinfoid = item.Id,
                            mcs_appointmentat = item.Attributes["mcs_appointmentat"] != null ? DateTime.Parse(item.Attributes["mcs_appointmentat"].ToString()).ToString("yyyy-MM-dd") : null,
                            mcs_appointmentconfigid = item.Attributes["mcs_appointmentconfigid"].HasValues==true? item.Attributes["mcs_appointmentconfigid"]["mcs_name"].ToString() : null,
                            mcs_carplate = item.Attributes["mcs_carplate"] != null ? item.Attributes["mcs_carplate"].ToString() : null,
                            mcs_customername = item.Attributes["mcs_customername"] != null ? item.Attributes["mcs_customername"].ToString() : null,
                            mcs_name = item.Attributes["mcs_name"] != null ? item.Attributes["mcs_name"].ToString() : null,
                            mcs_status = item.Attributes["mcs_status"] != null ? item.Attributes["mcs_status"].ToString() : null,

                        });
                    }
                }

                return list;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
