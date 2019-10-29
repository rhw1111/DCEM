using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    /// <summary>
    /// 技术支持申请明细
    /// </summary>
   public  class TechnicalSupportInfoResponse
    {
        public TechnicalSupportInfoResponse()
        { 
            DealerAttachment = new List<CrmEntity>();
            Warrantyattachment = new List<CrmEntity>();
        }

        /// <summary>
        /// 技术支持申请
        /// </summary>
        public CrmEntity TechnicalSupport { get; set; }
        /// <summary>
        /// 厅店附件材料
        /// </summary>
        public List<CrmEntity> DealerAttachment { get; set; }

        /// <summary>
        /// 主机厂附件材料
        /// </summary>
        public List<CrmEntity> Warrantyattachment { get; set; }
    }
}
