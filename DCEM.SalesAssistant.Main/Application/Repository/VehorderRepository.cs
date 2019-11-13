using System;
using System.Collections.Generic;
using System.Text;
using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.ViewModel.Request;
namespace DCEM.SalesAssistant.Main.Application.Repository
{
    public class VehorderRepository: IVehorderRepository
    {

        #region 整车订单列表查询xml
        /// <summary>
        /// 整车订单列表查询xml
        /// </summary>
        /// <param name="vehorderRequest"></param>
        /// <returns></returns>
        public string GetVehorderList(VehorderRequest vehorderRequest)
        {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(vehorderRequest.SearchKey))
            {
                filter += $"<filter type='or'>";               
                filter += $"<condition attribute='mcs_contactname' operator='like' value='%{vehorderRequest.SearchKey}%' />";
                filter += $"<condition attribute='mcs_contactphone' operator='like' value='%{vehorderRequest.SearchKey}%' />";
                filter += $"</filter>";
            }
            if (vehorderRequest.mcs_rostatus.HasValue && vehorderRequest.mcs_rostatus.GetValueOrDefault(0) > 0)
            {
                filter += $"<filter type='and'>";
                filter += $"<condition attribute='mcs_rostatus' operator='eq' value='{vehorderRequest.mcs_rostatus}' />";
                filter += $"</filter>";
            }
           
            var fetchString = $@"<fetch version='1.0' count='{vehorderRequest.PageSize}' page='{vehorderRequest.PageIndex}' output-format='xml-platform' mapping='logical' distinct='false'>
                <entity name='mcs_vehorder'>
                <attribute name='mcs_vehorderid' />
                <attribute name='mcs_code' />
                <attribute name='mcs_contactname' />
                <attribute name='mcs_contactphone' />
                <attribute name='mcs_rostatus' />
                <attribute name='mcs_dealer' />
                <order attribute='createdon' descending='true' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                    {filter}
                </filter>
              </entity>
            </fetch>";

            return fetchString;
        }
        #endregion


        #region 订单透明化状态跟踪查询
        /// <summary>
        /// 订单透明化状态跟踪查询
        /// </summary>
        /// <param name="mcs_vehorderid"></param>
        /// <returns></returns>
        public string GetVehordertrackList(string mcs_vehorderid)
        {
            var filter = string.Empty;
           
            if (!string.IsNullOrEmpty( mcs_vehorderid))
            {             
                filter += $"<condition attribute='mcs_vehorder' operator='eq' value='{mcs_vehorderid}' />";             
            }

            var fetchString = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
                   <entity name='mcs_vehordertrack'>
                <attribute name='mcs_code' />
                <attribute name='mcs_vehordertrackid' />                     
                <attribute name='mcs_vehorder' />
                <attribute name='mcs_dealer' />
                <attribute name='mcs_mallordercode' />
                <attribute name='mcs_optionon' />
                <attribute name='mcs_ordertype' />  
                <attribute name='mcs_postatus' />
                <attribute name='mcs_rostatus' />
                <attribute name='mcs_vehpo' />              
                <attribute name='mcs_vin' />               
                <attribute name='createdon' />      
                <order attribute='createdon' descending='true' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                    {filter}
                </filter>
              </entity>
            </fetch>";

            return fetchString;
        }
        #endregion


        #region 权益项查询
        /// <summary>
        /// 权益项查询
        /// </summary>
        /// <param name="mcs_vehorderid"></param>
        /// <returns></returns>
        public string GetRightitemuseList(string mcs_vehorderid)
        {
            var filter = string.Empty;

            if (!string.IsNullOrEmpty(mcs_vehorderid))
            {
                filter += $"<condition attribute='mcs_vehorder' operator='eq' value='{mcs_vehorderid}' />";
            }

            var fetchString = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
                   <entity name='mcs_rightitemuse'>
                <attribute name='mcs_code' />
                <attribute name='mcs_name' />
                <attribute name='mcs_rightitemuseid' />                     
                <attribute name='mcs_vehorder' />              
                <attribute name='mcs_amount' />
                <attribute name='mcs_dealer' />
                <attribute name='mcs_num' />  
                <attribute name='mcs_userid' />
                <attribute name='mcs_vehdelivery' />                      
                <attribute name='createdon' />      
                <order attribute='createdon' descending='true' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                    {filter}
                </filter>
              </entity>
            </fetch>";

            return fetchString;
        }
        #endregion
    }
}
