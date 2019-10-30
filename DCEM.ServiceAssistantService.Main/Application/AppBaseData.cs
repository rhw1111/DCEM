/*
    文件名：BaseData.cs
    功能描述：基础接口类  
    创建时间：2019年10月29日
    作者：黄贤顺
*/
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

        public AppBaseData(IBaseDataService baseDataService)
        {
            _baseDataService = baseDataService;
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
        public async Task<CrmEntity> QyerySystemUser(string systemuserid)
        {
            return await _baseDataService.QyerySystemUser(systemuserid);
        }
    }
}
