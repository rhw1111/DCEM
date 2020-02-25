//------------------------------------------------------------------------------
// <auto-generated>
//     此代码由工具生成。
//     运行时版本:4.0.30319.42000
//
//     对此文件的更改可能会导致不正确的行为，并且如果
//     重新生成代码，这些更改将会丢失。
// </auto-generated>
//------------------------------------------------------------------------------

namespace DCEM.UserCenterService.Main.Application.Services
{
    using DCEM.UserCenterService.Main.Application.Repository.Contrac;
    using DCEM.UserCenterService.Main.Application.Services.Contrac;
    using DCEM.UserCenterService.Main.ViewModel.Request;
    using System.Threading.Tasks;
    using MSLibrary.Xrm;
    using MSLibrary;
    using System.Xml.Linq;
    using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
    using System;

    public class BlindOrderService : IBlindOrderService
    {
        
        private ICrmService _crmService;
        
        public IBlindOrderRepository _blindorderRepository;
        
        public BlindOrderService(ICrmService crmService, IBlindOrderRepository blindorderRepository)
        {
             _crmService = crmService;
             _blindorderRepository=blindorderRepository;
        }

        public async Task<QueryResult<CrmEntity>> QueryList(BlindOrderListRequest request)
        {
            try
            {
                var fetchString = _blindorderRepository.QueryList(request);

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_blindorder",
                    FetchXml = fetchXdoc
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = request.PageIndex;
                //queryResult.TotalCount = 0;
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}