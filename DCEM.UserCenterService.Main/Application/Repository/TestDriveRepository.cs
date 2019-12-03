using DCEM.UserCenterService.Main.Application.Repository.Contrac;
using DCEM.UserCenterService.Main.ViewModel.Request;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.UserCenterService.Main.Application.Repository
{
    public class TestDriveRepository: ITestDriveRepository
    {
        #region 我的试乘试驾预约xml
        /// <summary>
        /// 我的试乘试驾预约xml
        /// </summary>
        /// <param name="vehorderRequest"></param>
        /// <returns></returns>
        public string GetDriveRecordList(TestDriveRequest Request)
        {
            var filter = string.Empty;
            //if (!string.IsNullOrWhiteSpace(vehorderRequest.SearchKey))
            //{
            //    filter += $"<filter type='or'>";
            //    filter += $"<condition attribute='mcs_contactname' operator='like' value='%{vehorderRequest.SearchKey}%' />";
            //    filter += $"<condition attribute='mcs_contactphone' operator='like' value='%{vehorderRequest.SearchKey}%' />";
            //    filter += $"<condition attribute='mcs_code' operator='like' value='%{vehorderRequest.SearchKey}%' />";
            //    filter += $"</filter>";
            //}
         
            var fetchString = $@"<fetch version='1.0' count='{Request.PageSize}' page='{Request.PageIndex}' output-format='xml-platform' mapping='logical' distinct='false'>
                <entity name='mcs_driverecord'>
                <attribute name='mcs_driverecordid' />
                <attribute name='mcs_fullname' />
                <attribute name='mcs_mobilephone' />
                <attribute name='mcs_carmodel' />
                <attribute name='mcs_businesstype' />
                <attribute name='mcs_dealerid' />
                <attribute name='mcs_ordertime' />
                <attribute name='mcs_testdrivetime' />
                <attribute name='mcs_drivestatus' />
                <order attribute='createdon' descending='true' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                  <condition attribute='ownerid' operator='eq-userid' />
                    {filter}
                </filter>
              </entity>
            </fetch>";

            return fetchString;
        }
        #endregion
    }
}
