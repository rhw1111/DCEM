using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    public class TechnicalSupportRequest
    {
        public Guid Id { get; set; }
        public string EntityName { get; set; }
        public Guid mcs_supportorderid{ get; set; }
        public string mcs_name{ get; set; }
        public DateTime? mcs_repairdate{ get; set; }
        public int mcs_orderstatus { get; set; }
        public string mcs_title { get; set; }
    }
}
