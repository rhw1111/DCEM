using System;
using System.Collections.Generic;
using System.Text;
using MSLibrary.Xrm;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    public class CustomerQueryInfoResponse
    {

        //
        public CrmEntity Carserviceadvisor { get; set; }

        public CrmEntity Vehowner { get; set; }

        public List<CrmEntity> CustomerfollowuplogList { get; set; }
    }
}
