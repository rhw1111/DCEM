/*
    文件名：IBaseData.cs
    功能描述：基础数据接口类  
    创建时间：2019年10月29日
    作者：黄贤顺
*/
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DCEM.ServiceAssistantService.Main.DTOModel;
using MSLibrary;
using MSLibrary.Xrm;

namespace DCEM.ServiceAssistantService.Main.Application
{
    public interface IAppBaseData
    {
        /// <summary>
        /// 获取token
        /// </summary>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        Task<LoginModel> GetAuthToken(string username, string password);
        /// <summary>
        /// 查询维修类别基础
        /// </summary>
        /// <param name="repairItemTypeRequest"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> QueryRepairItemType(RepairItemTypeRequest repairItemTypeRequest);

        /// <summary>
        /// 查询维修项目基础
        /// </summary>
        /// <param name="repairItemInfoRequest"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> QueryRepairItemInfo(RepairItemInfoRequest repairItemInfoRequest);

        /// <summary>
        /// 查询维修配件基础数据
        /// </summary>
        /// <param name="repairItemPartRequest"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> QueryRepairItemPart(RepairItemPartRequest repairItemPartRequest);

        /// <summary>
        /// 查询维修类型基础数据
        /// </summary>
        /// <param name="repairItemTypeDetailRequest"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> QueryRepairItemTypeDetail(RepairItemTypeDetailRequest repairItemTypeDetailRequest);

        /// <summary>
        /// 查询故障类别代码
        /// </summary>
        /// <param name="malFunctionTypeRequest"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> QueryMalFunctionType(MalFunctionTypeRequest malFunctionTypeRequest);



        /// <summary>
        /// 车型
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> QueryVehicletype(VehicleTypeRequest request);


        /// <summary>
        /// 车型颜色
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> QueryVehicleColor(VehicleColorRequest request);

        /// <summary>
        /// 试驾时段
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> QueryReservationconfig(ReservationconfigRequest request);

        /// <summary>
        /// 接待员
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> QueryReceptioncommissioner(ReceptioncommissionerRequest request);

        /// <summary>
        /// 省市区
        /// </summary>
        /// <param name="malFunctionTypeRequest"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> QuerySysarea(SysareaRequest request);


        /// <summary>
        /// 查询用户个人信息
        /// </summary>
        /// <param name="systemuserid"></param>
        /// <returns></returns>
        Task<CrmEntity> QuerySystemUser(string systemuserid);

        /// <summary>
        /// 查询用户列表信息
        /// </summary>
        /// <param name="systemuserid"></param>
        /// <returns></returns>
        Task<QueryResult<CrmEntity>> QuerySystemUserByPage(string searchkey = "", string prxyUserId = "", string dealerId = "", int pageSize = 10, int pageNum = 1, string sort = "");
    }
}
