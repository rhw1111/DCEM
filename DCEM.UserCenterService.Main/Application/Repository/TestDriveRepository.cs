using DCEM.UserCenterService.Main.Application.Repository.Contrac;
using DCEM.UserCenterService.Main.ViewModel.Request;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.UserCenterService.Main.Application.Repository
{
    public class TestDriveRepository: ITestDriveRepository
    {
        #region 我的试乘试驾预约xml
        /// <summary>
        /// 我的试乘试驾预约xml
        /// </summary>
        /// <param name="Request"></param>
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
            if (!string.IsNullOrWhiteSpace(Request.mcs_driverecordid))
            {
                filter += $"<condition attribute='mcs_driverecordid' operator='eq' value='{Request.mcs_driverecordid}' />";
            }
            if (!string.IsNullOrWhiteSpace(Request.UserId))
            {
                filter += $"<condition attribute='mcs_userid' operator='eq' value='{Request.UserId}' />";
            }

            var fetchString = $@"<fetch version='1.0' count='{Request.PageSize}' page='{Request.PageIndex}' output-format='xml-platform' mapping='logical' distinct='false'>
                <entity name='mcs_driverecord'>
                <attribute name='mcs_driverecordid' />
                <attribute name='mcs_name' />
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
                    {filter}
                </filter>
                <link-entity name='mcs_reservationconfiguration' from='mcs_reservationconfigurationid' to='mcs_testdrivetime' visible='false' link-type='outer' >
                  <attribute name='mcs_name' />
                </link-entity>
                <link-entity name='mcs_carmodel' from='mcs_carmodelid' to='mcs_carmodel' visible='false' link-type='outer' >
                  <attribute name='mcs_name' />
                </link-entity>
               <link-entity name='mcs_dealer' from='mcs_dealerid' to='mcs_dealerid' visible='false' link-type='outer' >
                <attribute name='mcs_name' />
               </link-entity>
              </entity>
            </fetch>";

            return fetchString;
        }
        #endregion

        #region 我的试乘试驾反馈xml
        /// <summary>
        ///  我的试乘试驾反馈xml
        /// </summary>
        /// <param name="Request"></param>
        /// <returns></returns>
        public string GetDriveFeedbackList(TestDriveFeedbackRequest Request)
        {
            var filter = string.Empty;          
          
            var fetchString = $@"<fetch version='1.0' count='{Request.PageSize}' page='{Request.PageIndex}' output-format='xml-platform' mapping='logical' distinct='false'>
                <entity name='mcs_testdrivefeedbackmaster'>
                <attribute name='mcs_testdrivefeedbackmasterid' />
                <attribute name='mcs_name' />
                <attribute name='mcs_surveytime' />
                <attribute name='mcs_score' />
                <attribute name='mcs_averagescore' />
                <attribute name='mcs_driverecordid' />   
                <attribute name='createdon' />        
                <order attribute='createdon' descending='true' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                  <condition attribute='ownerid' operator='eq-userid' />   
                </filter>
                   <link-entity name='mcs_driverecord' from='mcs_driverecordid' to='mcs_driverecordid' visible='false' link-type='outer' >
                     <attribute name='mcs_name' />
                   </link-entity>                   
              </entity>
            </fetch>";

            return fetchString;
        }

        #endregion


        #region 我的试乘试驾反馈问题项xml
        /// <summary>
        ///  我的试乘试驾反馈问题项xml
        /// </summary>
        /// <param name="Request"></param>
        /// <returns></returns>
        public string GetDriveFeedbackItemList(string testdrivefeedbackmasterid)
        {
            var filter = string.Empty;
            if (!string.IsNullOrEmpty(testdrivefeedbackmasterid))
            {
                filter += $"<condition attribute='mcs_testdrivefeedbackmasterid' operator='eq' value='{testdrivefeedbackmasterid}' />";
            }

            var fetchString = $@"<fetch version='1.0'  output-format='xml-platform' mapping='logical' distinct='false'>
                <entity name='mcs_testdrivefeedback'>
                <attribute name='mcs_testdrivefeedbackid' />
                <attribute name='mcs_name' />
                <attribute name='mcs_surveyquestion' />
                <attribute name='mcs_suveryanswer' />           
                <attribute name='mcs_testdrivefeedbackmasterid' />   
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


        #region 根据编码查询用户行为xml
        /// <summary>
        ///  根据编码查询用户行为xml
        /// </summary>
        /// <param name="mcs_code"></param>
        /// <returns></returns>
        public string GetDriveBehavior(string mcs_code)
        {
            var filter = string.Empty;
            if (!string.IsNullOrEmpty(mcs_code))
            {
                filter += $"<condition attribute='mcs_code' operator='eq' value='{mcs_code}' />";
            }
            var fetchString = $@"<fetch version='1.0'  output-format='xml-platform' mapping='logical' distinct='false'>
                <entity name='mcs_behavior'>
                <attribute name='mcs_behaviorid'/>
                <attribute name='mcs_name' />
                <attribute name='mcs_code' />        
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

        public async Task<XDocument> GetDriveFeedbackByRecordId(string testdriveid)
        {
            var filter = string.Empty;
            if (!string.IsNullOrEmpty(testdriveid))
            {
                filter += $"<condition attribute='mcs_driverecordid' operator='eq'  value='{testdriveid}' />";
            }

            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"<fetch version='1.0'  output-format='xml-platform' mapping='logical' distinct='false'>
                <entity name='mcs_testdrivefeedbackmaster'>
                 <all-attributes />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                  {filter}   
                </filter>                              
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            });
        }

        #endregion


    }
}
