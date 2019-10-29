using System;
using System.Collections.Generic;
using System.Text;
using DCEM.ServiceAssistantService.Main.DTOModel;

namespace DCEM.ServiceAssistantService.Main.Application.Repository
{
    public class BaseDataRepository : IBaseDataRepository
    {
        /// <summary>
        /// 维修项目基础数据
        /// </summary>
        /// <param name="repairItemInfoRequest"></param>
        /// <returns></returns>
        public string QueryRepairItemInfo(RepairItemInfoRequest repairItemInfoRequest)
        {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(repairItemInfoRequest.search))
            {
                filter += $"<filter type='and'>";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{repairItemInfoRequest.search}%' />";
                filter += $"</filter>";
            }
           
            if (!string.IsNullOrWhiteSpace(repairItemInfoRequest.mcs_dealerid))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_dealerid' operator='eq' value='{repairItemInfoRequest.mcs_dealerid}' />";
                filter += $"<condition attribute='mcs_isdealeritem' operator='ne' value='1' />";
                filter += $"</filter>";
            }
            var fetchString = $@"<fetch version='1.0' count='{repairItemInfoRequest.pageSize}' page='{repairItemInfoRequest.page}' output-format='xml-platform' mapping='logical' distinct='false'>
                  <entity name='mcs_repairiteminfo'> 
               <attribute name='mcs_name' /> 
               <attribute name='createdon' /> 
               <attribute name='mcs_pinyincode' /> 
               <attribute name='mcs_price' /> 
               <attribute name='mcs_workinghour' /> 
               <attribute name='mcs_repairitemcode' /> 
               <attribute name='mcs_isbatteryrepairitem' /> 
               <attribute name='mcs_isdealeritem' /> 
               <attribute name='mcs_dealerid' /> 
               <attribute name='mcs_repairiteminfoid' /> 
               <order attribute='createdon' descending='true' /> 
               <filter type='and'> 
                 <condition attribute='statecode' operator='eq' value='0' /> 
                 {filter}
               </filter> 
               <link-entity name='mcs_dealer' from='mcs_dealerid' to='mcs_dealerid' visible='false' link-type='outer' alias='dealer'> 
                 <attribute name='mcs_name' /> 
               </link-entity> 
             </entity> 
           </fetch>";

            return fetchString;
        }

        /// <summary>
        /// 维修类别基础数据
        /// </summary>
        /// <param name="repairItemTypeRequest"></param>
        /// <returns></returns>
        public string QueryRepairItemType(RepairItemTypeRequest repairItemTypeRequest)
        {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(repairItemTypeRequest.search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{repairItemTypeRequest.search}%' />";
                filter += $"</filter>";
            }
            var fetchString = $@"<fetch version='1.0' count='{repairItemTypeRequest.pageSize}' page='{repairItemTypeRequest.page}' output-format='xml-platform' mapping='logical' distinct='false'>
                   <entity name='mcs_repairitemtype'> 
                <attribute name='mcs_name' /> 
                <attribute name='createdon' /> 
                <attribute name='mcs_remark' /> 
                <attribute name='mcs_type' /> 
                <attribute name='mcs_repairitemtypeid' /> 
                <order attribute='createdon' descending='true' /> 
                <filter type='and'> 
                  <condition attribute='statecode' operator='eq' value='0' /> 
                  {filter}
                </filter> 
              </entity> 
            </fetch>";

            return fetchString;
        }
    }
}
