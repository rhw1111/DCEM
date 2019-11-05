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

        /// <summary>
        /// 维修配件基础数据
        /// </summary>
        /// <param name="repairItemPartRequest"></param>
        /// <returns></returns>
        string QueryRepairItemPart(RepairItemPartRequest repairItemPartRequest);

        /// <summary>
        /// 故障类别代码
        /// </summary>
        /// <param name="malFunctionTypeRequest"></param>
        /// <returns></returns>
        string QueryMalFunctionType(MalFunctionTypeRequest malFunctionTypeRequest);


        /// <summary>
        /// 车型
        /// </summary>
        /// <param name="VehicleTypeRequest"></param>
        /// <returns></returns>
        string QueryVehicletype(VehicleTypeRequest request);
        string QueryVehicleColor(VehicleColorRequest request);
        string QueryReservationconfig(ReservationconfigRequest request);
        string QueryReceptioncommissioner(ReceptioncommissionerRequest request);
        string QuerySysarea(SysareaRequest request);

        /// <summary>
        /// 维修类型基础数据
        /// </summary>
        /// <param name="repairItemTypeDetailRequest"></param>
        /// <returns></returns>
        string QueryRepairItemTypeDetail(RepairItemTypeDetailRequest repairItemTypeDetailRequest);
        
        /// <summary>
        /// 查询个人用户信息
        /// </summary>
        /// <param name="systemuserid"></param>
        /// <returns></returns>
        string QuerySystemUser(string systemuserid);
    }
}
