using System;
using System.Collections.Generic;
using System.Text;
using DCEM.ServiceAssistantService.Main.DTOModel;

namespace DCEM.ServiceAssistantService.Main.Application.Repository
{
    public interface IBaseDataRepository
    {
        /// <summary>
        /// 维修类别基础数据
        /// </summary>
        /// <param name="repairItemTypeRequest"></param>
        /// <returns></returns>
        string QueryRepairItemType(RepairItemTypeRequest repairItemTypeRequest);

        /// <summary>
        /// 维修项目基础数据
        /// </summary>
        /// <param name="repairItemInfoRequest"></param>
        /// <returns></returns>
        string QueryRepairItemInfo(RepairItemInfoRequest repairItemInfoRequest);
    }
}
