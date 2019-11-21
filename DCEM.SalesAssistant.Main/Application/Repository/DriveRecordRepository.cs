using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.SalesAssistant.Main.Application.Repository
{
    public class DriveRecordRepository : IDriveRecordRepository
    {
        /// <summary>
        /// 试乘试驾车辆查询
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public string QueryDriveCarList(TestDriveCarRequest request)
        {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(request.Search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_vehplate' operator='like' value='%{request.Search}%' />";
                filter += $"</filter>";
            }
            var fetchString = $@"<fetch version='1.0' count='{request.PageSize}' page='{request.PageIndex}' output-format='xml-platform' mapping='logical' distinct='false'>
                  <entity name='mcs_testdrivecar'>
                    <all-attributes />
                    <filter type='and'>
                      <condition attribute='statecode' operator='eq' value='0' />
                      {filter}
                    </filter>
                  </entity>
                </fetch>";

            return fetchString;
        }

        /// <summary>
        /// 试乘试驾路线
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public string QueryDriveRouteList(DriveRouteRequest request)
        {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(request.Search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{request.Search}%' />";
                filter += $"<condition attribute='mcs_start' operator='like' value='%{request.Search}%' />";
                filter += $"<condition attribute='mcs_end' operator='like' value='%{request.Search}%' />";
                filter += $"</filter>";
            }
            var fetchString = $@"<fetch version='1.0' count='{request.PageSize}' page='{request.PageIndex}' output-format='xml-platform' mapping='logical' distinct='false'>
                  <entity name='mcs_driveroute'>
                    <all-attributes />
                    <filter type='and'>
                      <condition attribute='statecode' operator='eq' value='0' />
                      {filter}
                    </filter>
                  </entity>
                </fetch>";

            return fetchString;
        }

        /// <summary>
        /// 试乘试驾列表查询接口
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public string QueryList(DriveRecordRequest request)
        {
            var filter = string.Empty;
            if (request.Status!=null && request.Status != 0)
            {
                filter += $"<condition attribute='mcs_drivestatus' operator='eq' value='{request.Status}' />";
            }
            if (request.DealerId != null)
            {
                filter += $"<condition attribute='mcs_dealerid' operator='eq' value='{request.DealerId}' />";
            }
            if (request.OrderTime != null)
            {
                filter += $"<condition attribute='mcs_ordertime' operator='on' value='{request.OrderTime}' />";
            }
            if (!string.IsNullOrWhiteSpace(request.Search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_fullname' operator='like' value='%{request.Search}%' />";
                filter += $"<condition attribute='mcs_mobilephone' operator='like' value='%{request.Search}%' />";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{request.Search}%' />";
                filter += $"</filter>";
            }
            var fetchString = $@"<fetch version='1.0' count='{request.PageSize}' page='{request.PageIndex}' output-format='xml-platform' mapping='logical' distinct='false'>
                  <entity name='mcs_driverecord'>
                    <all-attributes />
                    <order attribute='mcs_ordertime' descending='true' />
                    <filter type='and'>
                      <condition attribute='statecode' operator='eq' value='0' />
                      {filter}
                    </filter>
                  <link-entity name='mcs_reservationconfiguration' from='mcs_reservationconfigurationid' to='mcs_testdrivetime' visible='false' link-type='outer' >
                      <attribute name='mcs_name' alias='reservationname'/> 
                  </link-entity>
                  </entity>
                </fetch>";

            return fetchString;
        }


        /// <summary>
        /// 试乘试驾明细获取
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<XDocument> GetDriveRecordDetaill(Guid id)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='mcs_driverecord'>
     <attribute name='mcs_fullname' />
    <attribute name='mcs_mobilephone' />
    <attribute name='mcs_email' />
    <attribute name='mcs_drivingage' />
    <attribute name='mcs_carmodel' />
    <attribute name='mcs_ordertime' />
    <attribute name='mcs_testdrivetime' />
    <attribute name='mcs_drivestatus' />
    <attribute name='mcs_businesstype' />
    <attribute name='mcs_drivecar' />
    <attribute name='mcs_appointedrouteid' />
    <attribute name='mcs_starton' />
    <attribute name='mcs_endon' />
    <attribute name='mcs_cancelreason' /> 
    <attribute name='mcs_consultantid' /> 
    <filter type='and'> 
      <condition attribute='mcs_driverecordid' operator='eq'   uitype='mcs_driverecord' value='{id}' />
    </filter> 
    <link-entity name='mcs_carmodel' from='mcs_carmodelid' to='mcs_carmodel' visible='false' link-type='outer' >
      <attribute name='mcs_name' alias='carmodelname'/> 
    </link-entity>
   <link-entity name='mcs_driveroute' from='mcs_driverouteid' to='mcs_appointedrouteid' visible='false' link-type='outer' >
      <attribute name='mcs_name' alias='driveroutename'/> 
    </link-entity>
  <link-entity name='mcs_reservationconfiguration' from='mcs_reservationconfigurationid' to='mcs_testdrivetime' visible='false' link-type='outer' >
      <attribute name='mcs_name' alias='reservationname'/> 
    </link-entity>
  <link-entity name='mcs_testdrivecar' from='mcs_testdrivecarid' to='mcs_drivecar' visible='false' link-type='outer' >
      <attribute name='mcs_name' alias='testdrivecarname'/> 
    </link-entity>
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }


        /// <summary>
        /// 附件材料
        /// </summary>
         /// <returns></returns>
        public async Task<XDocument> GetAttachmentDetaillFetchXml(Guid id)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='mcs_attachment'>
    <attribute name='mcs_filetype' />
    <attribute name='mcs_fileurl' />
    <attribute name='mcs_code' />
    <attribute name='mcs_filesize' /> 
    <order attribute='createdon' descending='true' />
    <filter type='and'>  
      <condition attribute='mcs_driverecordid' operator='eq'   uitype='mcs_driverecord' value='{id}' /> 
    </filter> 
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }



        #region 反馈
        
        /// <summary>
        /// 问题反馈
        /// </summary>
        /// <param name="id">试乘试驾记录ID</param>
        /// <returns></returns>
        public async Task<XDocument> GetTestdrivefeedback(Guid id)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='mcs_testdrivefeedbackmaster'>
      <all-attributes />
    <filter type='and'> 
      <condition attribute='mcs_driverecordid' operator='eq'   uitype='mcs_driverecord' value='{id}' />
    </filter>  
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }

        /// <summary>
        /// 问题项
        /// </summary>
        /// <param name="id">反馈id</param>
        /// <returns></returns>
        public async Task<XDocument> GetTestdrivefeedbackDetail(Guid id)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='mcs_testdrivefeedback'>
      <all-attributes />
    <filter type='and'> 
      <condition attribute='mcs_testdrivefeedbackmasterid' operator='eq'   uitype='mcs_testdrivefeedbackmaster' value='{id}' />
    </filter>  
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }
        #endregion
        /// <summary>
        /// 查询试乘试驾各个状态数量
        /// </summary>
        /// <param name="request"></param>
        /// <param name="status"></param>
        /// <returns></returns>
        public string QueryListByCount(DriveRecordRequest request, int status)
        {
            var filter = string.Empty;
            if (status != 0)
            {
                filter += $"<condition attribute='mcs_drivestatus' operator='eq' value='{status}' />";
            }
            if (request.DealerId != null)
            {
                filter += $"<condition attribute='mcs_dealerid' operator='eq' value='{request.DealerId}' />";
            }
            if (request.OrderTime != null)
            {
                filter += $"<condition attribute='mcs_ordertime' operator='on' value='{request.OrderTime}' />";
            }
            if (!string.IsNullOrWhiteSpace(request.Search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_fullname' operator='like' value='%{request.Search}%' />";
                filter += $"<condition attribute='mcs_mobilephone' operator='like' value='%{request.Search}%' />";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{request.Search}%' />";
                filter += $"</filter>";
            }
            var fetchString = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'  aggregate='true'>
                  <entity name='mcs_driverecord'>
                    <attribute name='mcs_driverecordid' aggregate='countcolumn' alias='count'/>
                    <filter type='and'>
                      <condition attribute='statecode' operator='eq' value='0' />
                      {filter}
                    </filter>
                  </entity>
                </fetch>";

            return fetchString;
        }

        /// <summary>
        /// 试乘试驾预约时段查询列表
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public string QueryReservationList(DriveReservationRequest request)
        {
            var filter = string.Empty;
            if (request.CarModelId != null)
            {
                filter += $"<condition attribute='mcs_carmodel' operator='eq' value='{request.CarModelId}' />";
            }
            if (request.ReservationDate != null)
            {
                filter += $"<condition attribute='mcs_reservationdate' operator='on' value='{request.ReservationDate}' />";
            }
           
            var fetchString = $@"<fetch version='1.0' count='{request.PageSize}' page='{request.PageIndex}' output-format='xml-platform' mapping='logical' distinct='false'>
                  <entity name='mcs_reservationconfiguration'>
                    <all-attributes />
                    <order attribute='mcs_reservationdate' descending='false' />
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
