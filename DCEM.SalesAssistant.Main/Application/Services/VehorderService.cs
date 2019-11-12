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
                var fetchString = _vehorderRepository.GetVehorderList(vehorderRequest);
           
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



        #region 根据主键id获取 厅店整车订单明细

        public async Task<VehorderDetailModel> GetVehorderDetail(string mcs_vehorderid)
        {
            try
            {
                VehorderDetailModel model = new VehorderDetailModel();

                #region 整车订单基本信息
                var dicHead = new Dictionary<string, IEnumerable<string>>();
                dicHead.Add("Prefer", new List<string>() { "odata.include-annotations=\"*\"" });
                var VehorderData = await _crmService.Retrieve("mcs_vehorder", Guid.Parse(mcs_vehorderid), string.Empty, null, dicHead);
                #endregion

                #region 订单透明化状态跟踪mcs_vehordertrack

                var fetchString_One = _vehorderRepository.GetVehordertrackList(mcs_vehorderid);

                var fetchXdoc_One = XDocument.Parse(fetchString_One);
                var fetchRequest_One = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_vehordertrack",
                    FetchXml = fetchXdoc_One                
                };
                var fetchResponse_One = await _crmService.Execute(fetchRequest_One);
                var fetchResponseResult_One = fetchResponse_One as CrmRetrieveMultipleFetchResponseMessage;

                #endregion

                #region 权益项mcs_rightitemuse

                var fetchString_Two = _vehorderRepository.GetRightitemuseList(mcs_vehorderid);

                var fetchXdoc_Two = XDocument.Parse(fetchString_Two);
                var fetchRequest_Two = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_rightitemuse",
                    FetchXml = fetchXdoc_Two
                };
                var fetchResponse_Two = await _crmService.Execute(fetchRequest_Two);
                var fetchResponseResult_Two = fetchResponse_Two as CrmRetrieveMultipleFetchResponseMessage;

                #endregion

                model.VehorderInfo = VehorderData;
                model.Vehordertrack = fetchResponseResult_One.Value.Results;
                model.Rightitemuse = fetchResponseResult_Two.Value.Results;
                return model;
            }
            catch (Exception ex )
            {

                throw ex;
            }
          
        }

        #endregion

    }
}
