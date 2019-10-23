using System;
using System.Collections.Generic;
using System.Text;
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

        public IList<AppointmentInfoModel> QueryListByPage(string filterstr, int pageSize, int pageNum, string sort, string token = "")
        {
            try
            {
                List<AppointmentInfoModel> list = new List<AppointmentInfoModel>();
                var result = _crmService.RetrieveMultiple("mcs_appointmentinfo", filterstr).Result;
                if (result != null && result.Results != null)
                {
                    foreach (var item in result.Results)
                    {
                        list.Add(new AppointmentInfoModel()
                        {
                            mcs_appointmentinfoid = item.Id,
                            mcs_appointmentat = item.Attributes["mcs_appointmentat"] != null ? item.Attributes["mcs_appointmentat"].ToString() : null,
                            mcs_appointmentconfigid = item.Attributes["_mcs_appointmentconfigid_value"] != null ? item.Attributes["_mcs_appointmentconfigid_value"].ToString() : null,
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
