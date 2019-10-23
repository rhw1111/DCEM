using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    public class TechnicalSupportModel
    {
        public Guid Id { set; get; }

        public string mcs_name { set; get; }

        public string mcs_customerphone { set; get; }

        public string mcs_orderstatus { set; get; }

        public string mcs_title { set; get; }
    }
}
