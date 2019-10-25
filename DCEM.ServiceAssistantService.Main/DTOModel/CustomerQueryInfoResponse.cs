using System;
using System.Collections.Generic;
using System.Text;
using MSLibrary.Xrm;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    public class CustomerQueryInfoResponse
    {

        //服务顾问分派
        public CrmEntity Carserviceadvisor { get; set; }

        //车辆档案
        public CrmEntity Vehowner { get; set; }

        //客户跟进记录
        public List<CrmEntity> CustomerfollowuplogList { get; set; }
    }
}
