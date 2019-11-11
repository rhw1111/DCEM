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
            //if (!string.IsNullOrEmpty(vehorderRequest.mcs_dealerid))
            //{
            //    filter += $"<filter type='and'>";
            //    filter += $"<condition attribute='mcs_dealer' operator='eq' value='{vehorderRequest.mcs_dealerid}' />";
            //    filter += $"</filter>";
            //}

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


    }
}
