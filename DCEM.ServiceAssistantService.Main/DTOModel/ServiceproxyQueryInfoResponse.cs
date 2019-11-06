using System;
using System.Collections.Generic;
using System.Text;
using MSLibrary.Xrm;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    public class ServiceproxyQueryInfoResponse
    {
        public ServiceproxyQueryInfoResponse() {
            ServiceordercheckresultList = new List<CrmEntity>();
            ServiceorderrepairitemList = new List<CrmEntity>();
            ServiceorderpartList = new List<CrmEntity>();
            ServiceproxyResumeList = new List<CrmEntity>();
        }

        //服务委托书
        public CrmEntity Serviceproxy { get; set; }
        /// <summary>
        /// 环检项
        /// </summary>
        public List<CrmEntity> ServiceordercheckresultList { get; set; }
        /// <summary>
        /// 工时
        /// </summary>
        public List<CrmEntity> ServiceorderrepairitemList { get; set; }
        /// <summary>
        /// 零件
        /// </summary>
        public List<CrmEntity> ServiceorderpartList { get; set; }

        public List<CrmEntity> ServiceproxyResumeList { get; set; }

    }
}
