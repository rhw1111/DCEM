using System;
using System.Collections.Generic;
using System.Text;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using MSLibrary.Xrm;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using MSLibrary;
using System.Threading.Tasks;
using System.Xml.Linq;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;

namespace DCEM.SalesAssistant.Main.Application.Services
{
    public class VehorderService: IVehorderService
    {
        private CrmService _crmService;
        private IVehorderRepository _vehorderRepository;

        public VehorderService(CrmService crmService, IVehorderRepository vehorderRepository)
        {
            _crmService = crmService;
            _vehorderRepository = vehorderRepository;
        }

        /// <summary>
        /// 整车订单列表查询
        /// </summary>
        /// <param name="vehorderRequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> GetVehorderList(VehorderRequest vehorderRequest)
        {
            try
            {
                //var fetchString = _vehorderRepository.QueryList(vehorderRequest);
                var fetchString = "";

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_vehorder",
                    FetchXml = fetchXdoc,
                    ProxyUserId = Guid.Parse(vehorderRequest.UserId)
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = vehorderRequest.PageIndex;
                queryResult.TotalCount = 0;
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
