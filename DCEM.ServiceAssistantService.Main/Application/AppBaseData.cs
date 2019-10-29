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

        public async Task<QueryResult<CrmEntity>> QueryRepairItemInfo(RepairItemInfoRequest repairItemInfoRequest)
        {
            return await _baseDataService.QueryRepairItemInfo(repairItemInfoRequest);
        }

        /// <summary>
        /// 维修类别基础
        /// </summary>
        /// <param name="repairItemTypeRequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryRepairItemType(RepairItemTypeRequest repairItemTypeRequest)
        {
            return await _baseDataService.QueryRepairItemType(repairItemTypeRequest);
        }
    }
}
