using System;
using System.Collections.Generic;
using System.Text;
using MSLibrary.Xrm;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    public class CustomerQueryInfoResponse
    {
        public CustomerQueryInfoResponse() {
            CustomerfollowuplogList = new List<CrmEntity>();
            TagList = new List<CrmEntity>();
            ServiceproxyResumeList = new List<CrmEntity>();
        }

        //服务顾问分派
        public CrmEntity Carserviceadvisor { get; set; }

        //车辆档案
        public CrmEntity Vehowner { get; set; }

        //客户跟进记录
        public List<CrmEntity> CustomerfollowuplogList { get; set; }

        //标签
        public List<CrmEntity> TagList { get; set; }
        //维修履历
        public List<CrmEntity> ServiceproxyResumeList { get; set; }
    }
}
