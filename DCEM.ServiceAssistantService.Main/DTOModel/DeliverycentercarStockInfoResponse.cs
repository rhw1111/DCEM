using System;
using System.Collections.Generic;
using System.Text;
using MSLibrary.Xrm;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    public class DeliverycentercarStockInfoResponse
    {
        public CrmEntity Deliverycentercarstock { get; set; }
        public CrmEntity Vehiclematerial { get; set; }
        /// <summary>
        /// 查询整车车辆台帐
        /// </summary>
        public CrmEntity Vehicle { get; set; }

        public CrmEntity Dealercarmovein { get; set; }
    }
}
