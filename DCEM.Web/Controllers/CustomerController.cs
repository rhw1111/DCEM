using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MSLibrary.Xrm;
using MSLibrary.Xrm.MessageHandle;
using MSLibrary.Xrm.Token;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace DCEM.Web.Controllers
{
    [Route("Api/Customer")]
    [EnableCors("any")]
    [ApiController]
    public class CustomerController : Controller
    {
        public class CrmServiceTokenGenerateServiceSelector : ICrmServiceTokenGenerateServiceSelector
        {
            private ICrmServiceTokenGenerateService _ICrmServiceTokenGenerateService;
            public ICrmServiceTokenGenerateService Choose(string name)
            {
                return _ICrmServiceTokenGenerateService;
            }
        }

        public class CrmMessageHandle : ICrmMessageHandle
        {
            public Task<CrmRequestMessageHandleResult> ExecuteRequest(CrmRequestMessage request)
            {
                return new Task<CrmRequestMessageHandleResult>(() => { return new CrmRequestMessageHandleResult(); });
            }

            public Task<CrmResponseMessage> ExecuteResponse(object extension, string requestUrl, string requestBody, int responseCode, Dictionary<string, IEnumerable<string>> responseHeaders, string responseBody)
            {
                return new Task<CrmResponseMessage>(() => { return new CrmResponseMessage(); });
            }
        }

        public class CrmMessageHandleSelector : ICrmMessageHandleSelector
        {
            public ICrmMessageHandle Choose(string name)
            {
                return new CrmMessageHandle();
            }
        }

        private IHttpClientFactory _httpClientFactory;
        private CrmServiceTokenGenerateServiceSelector _crmServiceTokenGenerateServiceSelector;
        private CrmMessageHandleSelector _crmMessageHandleSelector;
        private ICrmMessageResponseHandle _crmMessageResponseHandle;
        /// <summary>
        /// 获取我的客户列表
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("GetMyCustomerList")]
        public ActionResult<string> GetMyCustomerList()
        {
            _crmServiceTokenGenerateServiceSelector = new CrmServiceTokenGenerateServiceSelector();
            _crmMessageHandleSelector = new CrmMessageHandleSelector();


            var service = new CrmService(_httpClientFactory, _crmServiceTokenGenerateServiceSelector, _crmMessageHandleSelector, _crmMessageResponseHandle);

            service.CrmUrl = "https://subcrmdev.sokon.com/api/data/v8.2/";
            service.CrmApiMaxRetry = 1;
            service.CrmApiVersion = "8.2";
            var o = service.Retrieve("mcs_carserviceadvisor", System.Guid.Parse("54954B85-7DBC-4E1C-969D-999F1D750E4B"), "");


            //var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImFXX2tmMjE3bVlVSkpIWDZXZ0M3cTZENXdHcyJ9.eyJhdWQiOiJodHRwczovL3N1YmNybWRldi5zb2tvbi5jb20vYXBpL2RhdGEvdjguMiIsImlzcyI6Imh0dHA6Ly9zdWJjcm1hZGZzLnNva29uLmNvbS9hZGZzL3NlcnZpY2VzL3RydXN0IiwiaWF0IjoxNTcxNjUxMDY4LCJleHAiOjE1NzE2NTQ2NjgsInByaW1hcnlzaWQiOiJTLTEtNS0yMS00MjIyOTQ5MjAwLTIwNjU2NzQyOTktMjA0ODI2NDk5Mi0xMTA1IiwidXBuIjoic3ViZGV2Y3JtYWRtaW5Ac2Ztb3RvcnMuY29tIiwidW5pcXVlX25hbWUiOiJTRk1PVE9SU1xcc3ViZGV2Y3JtYWRtaW4iLCJhcHB0eXBlIjoiQ29uZmlkZW50aWFsIiwiYXBwaWQiOiJlNWUwMTRjNy1iMWZmLTQ1YTMtOGMwYS05OTFmNWFhN2NlOGYiLCJhdXRobWV0aG9kIjoidXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFjOmNsYXNzZXM6UGFzc3dvcmRQcm90ZWN0ZWRUcmFuc3BvcnQiLCJhdXRoX3RpbWUiOiIyMDE5LTEwLTIxVDA5OjQ0OjI4LjA5MVoiLCJ2ZXIiOiIxLjAifQ.oftW4jzU5DRJpeh1zV_3oBBhSAvUmzamM_5nv69pZHsjZPNszSgH9cI9lzsawv_DRftk2lfo-ePIoS7gM8n2krEh0exqUurFUDZucmVmSe7XDXXgXYWGNPcV__JH4KazConOFNNAdxTKohtkwKmKwvT4AXSe6kl_TQ-D_T4LHd2ZZmUN7E-cS5pPU7QElkZ32i8yFJVusZdQoypF_LTaSuIfKYLjSMnXI4HOgiVuZTuef_aHqXuAmfIZoxwE5IQH0TqVaiSxL2nqCbrh0wbyXDTSavaOp51775J2V2LfjWRARQ1ospIIj8KyKGSoWsBHxi39rxq0fyKJI9GVCp1_TA";

            //var url = "https://subcrmdev.sokon.com/api/data/v8.2/mcs_carserviceadvisors?$select=mcs_name";
            //var client = new HttpClient();
            //client.DefaultRequestHeaders.Accept.Clear();
            //client.DefaultRequestHeaders.Add("Accept", "application/json");
            //client.DefaultRequestHeaders.Add("OData-MaxVersion", "4.0");
            //client.DefaultRequestHeaders.Add("OData-Version", "4.0");
            //client.DefaultRequestHeaders.Add("Authorization", $"Bearer {token}");
            //var content = new StringContent(@$"");
            //var response = client.GetAsync(url).Result;

            return "";
        }





    }
}