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
    }
}
