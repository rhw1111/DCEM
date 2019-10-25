using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Xml.Linq;
using DCEM.ServiceAssistantService.Main.Application.Repository;
using DCEM.ServiceAssistantService.Main.DTOModel;
using MSLibrary;
using MSLibrary.Xrm;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;

namespace DCEM.ServiceAssistantService.Main.Application.Services
{
    public class AppointmentInfoService : IAppointmentInfoService
    {
        private ICrmService _crmService;
        private IAppointmentInfoRepository _appointmentInfoRepository;

        public AppointmentInfoService(CrmService crmService, IAppointmentInfoRepository appointmentInfoRepository)
        {
            _crmService = crmService;
            _appointmentInfoRepository = appointmentInfoRepository;
        }
      
        /// <summary>
        /// 预约列表查询
        /// </summary>
        /// <param name="filterstr"></param>
        /// <param name="pageSize"></param>
        /// <param name="pageNum"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryListByPage(AppointmentInfoRequest filterstr)
        {
            try
            {
                var fetchString = _appointmentInfoRepository.QueryListByPage(filterstr);

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_appointmentinfo",
                    FetchXml = fetchXdoc
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = filterstr.page;
                queryResult.TotalCount = 0;
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// 预约记录明细
        /// </summary>
        /// <param name="entityid"></param>
        /// <returns></returns>
        public async Task<CrmEntity> QueryDetail(string entityid)
        {
            //try
            //{
            //    //var fetchString = _appointmentInfoRepository.QueryDetail(entityid);
            //    //var fetchXdoc = XDocument.Parse(fetchString);
            //    //var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            //    //{
            //    //    EntityName = "mcs_appointmentinfo",
            //    //    FetchXml = fetchXdoc
            //    //};
            //    //var fetchResponse = await _crmService.r(fetchRequest);
            //    //var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

            //    //var queryResult = new QueryResult<CrmEntity>();
            //    //queryResult.Results = fetchResponseResult.Value.Results;
           
            //    //return queryResult;

            //}
            //catch (Exception)
            //{

            //    throw;
            //}
            throw new NotImplementedException();
        }

    }
}
