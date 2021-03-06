﻿/*
    文件名：BaseData.cs
    功能描述：基础接口类  
    创建时间：2019年10月29日
    作者：黄贤顺
*/
using DCEM.Main.Entities;
using DCEM.ServiceAssistantService.Main.Application.Services;
using DCEM.ServiceAssistantService.Main.DTOModel;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.ServiceAssistantService.Main.Application
{
    public class AppBaseData : IAppBaseData
    {
        private IBaseDataService _baseDataService;
        private IAuthService _authService;
        private IAdfsEndpointRepository _adfsEndpointRepository;

        public AppBaseData(IBaseDataService baseDataService, IAuthService authService, IAdfsEndpointRepository adfsEndpointRepository)
        {
            _baseDataService = baseDataService;
            _authService = authService;
            _adfsEndpointRepository = adfsEndpointRepository;
        }

        public async Task<LoginModel> GetAuthToken(string username, string password)
        {
            LoginModel loginModel = new LoginModel();
            var token= await _adfsEndpointRepository.GetAuthToken(username, password);
            if (!string.IsNullOrEmpty(token))
            {
                var userInfo =await _adfsEndpointRepository.GetLoginInfo(username, token);
                if (userInfo!=null)
                {
                    loginModel.access_token = token;
                    loginModel.firstname = userInfo.firstname;
                    loginModel.lastname = userInfo.lastname;
                    loginModel.mcs_dealerid = userInfo.mcs_dealerid;
                    loginModel.mcs_dealername = userInfo.mcs_dealername;
                    loginModel.mcs_dealercode = userInfo.mcs_dealercode;
                    loginModel.domainname = userInfo.domainname;
                    loginModel.mcs_staffid = userInfo.mcs_staffid;
                    loginModel.systemuserid = userInfo.systemuserid.GetValueOrDefault().ToString();
                    loginModel.rolenames = await _adfsEndpointRepository.GetUserRole(userInfo.systemuserid.GetValueOrDefault());
                }
            }
            return loginModel;
        }

        /// <summary>
        /// 查询故障类别代码
        /// </summary>
        /// <param name="malFunctionTypeRequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryMalFunctionType(MalFunctionTypeRequest malFunctionTypeRequest)
        {
            return await _baseDataService.QueryMalFunctionType(malFunctionTypeRequest);
        }
        /// <summary>
        /// 车型
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryVehicletype(VehicleTypeRequest request) =>
            await _baseDataService.QueryVehicletype(request);

        /// <summary>
        /// 基本车型
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> GetCarmodel(VehicleTypeRequest request) =>
            await _baseDataService.GetCarmodel(request);

        /// <summary>
        /// 车型颜色
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryVehicleColor(VehicleColorRequest request) =>
            await _baseDataService.QueryVehicleColor(request);

        /// <summary>
        /// 试驾时段
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryReservationconfig(ReservationconfigRequest request) =>
            await _baseDataService.QueryReservationconfig(request);

        /// <summary>
        /// 接待员
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryReceptioncommissioner(ReceptioncommissionerRequest request) =>
            await _baseDataService.QueryReceptioncommissioner(request);

        /// <summary>
        /// 省市区
        /// </summary>
        /// <param name="malFunctionTypeRequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QuerySysarea(SysareaRequest request) =>
            await _baseDataService.QuerySysarea(request);


        /// <summary>
        /// 查询维修项目基础数据
        /// </summary>
        /// <param name="repairItemInfoRequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryRepairItemInfo(RepairItemInfoRequest repairItemInfoRequest)
        {
            return await _baseDataService.QueryRepairItemInfo(repairItemInfoRequest);
        }

        /// <summary>
        /// 查询维修配件基础数据
        /// </summary>
        /// <param name="repairItemPartRequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryRepairItemPart(RepairItemPartRequest repairItemPartRequest)
        {
            return await _baseDataService.QueryRepairItemPart(repairItemPartRequest);
        }

        /// <summary>
        /// 维修类别基础数据
        /// </summary>
        /// <param name="repairItemTypeRequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryRepairItemType(RepairItemTypeRequest repairItemTypeRequest)
        {
            return await _baseDataService.QueryRepairItemType(repairItemTypeRequest);
        }

        /// <summary>
        /// 维修类型基础数据
        /// </summary>
        /// <param name="repairItemTypeDetailRequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryRepairItemTypeDetail(RepairItemTypeDetailRequest repairItemTypeDetailRequest)
        {
            return await _baseDataService.QueryRepairItemTypeDetail(repairItemTypeDetailRequest);
        }

        /// <summary>
        /// 查询用户个人信息
        /// </summary>
        /// <param name="systemuserid"></param>
        /// <returns></returns>
        public async Task<CrmEntity> QuerySystemUser(string systemuserid)
        {
            return await _baseDataService.QuerySystemUser(systemuserid);
        }

        public async Task<QueryResult<CrmEntity>> QuerySystemUserByPage(string searchkey = "", string prxyUserId = "", string dealerId = "", int pageSize = 10, int pageNum = 1, string sort = "")
        {
            return await _baseDataService.QuerySystemUserByPage(searchkey, prxyUserId, dealerId, pageSize, pageNum, sort);
        }

    }
}
