using System;
using System.Collections.Generic;
using System.Text;
using MSLibrary.Xrm;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    public class MaintenanceQueryInfoResponse
    {
        public MaintenanceQueryInfoResponse() {
            MaintenanceiteminfoList = new List<CrmEntity>();
            RepairitempartList = new List<CrmEntity>();
        }

        //保养项
        public CrmEntity Maintenance { get; set; }
        /// <summary>
        /// 保养项明细
        /// </summary>
        public List<CrmEntity> MaintenanceiteminfoList { get; set; }
        /// <summary>
        /// 维修配件信息
        /// </summary>
        public List<CrmEntity> RepairitempartList { get; set; }

    }
}
