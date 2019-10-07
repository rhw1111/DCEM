using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace DCEM.Main.RemoteService
{
    public interface IAddCommonLogService
    {
        Task Add(CommonLogModel model);
    }

    [DataContract]
    public class CommonLogModel
    {
        [DataMember]
        public Guid ParentID { get; set; }
        [DataMember]
        public string ParentActionName { get; set; }
        [DataMember]
        public Guid PreLevelID { get; set; }
        [DataMember]
        public Guid CurrentLevelID { get; set; }
        [DataMember]
        public string ActionName { get; set; }
        [DataMember]
        public string RequestBody { get; set; }
        [DataMember]
        public string ResponseBody { get; set; }
        [DataMember]
        public string RequestUri { get; set; }
        [DataMember]
        public string ContextInfo { get; set; }
        [DataMember]
        public string ParentContextInfo { get; set; }
        [DataMember]
        public bool Root { get; set; }
        [DataMember]
        public string Message { get; set; }

    }


}
