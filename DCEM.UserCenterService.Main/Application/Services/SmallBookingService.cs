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
    using DCEM.UserCenterService.Main.ViewModel.Response;
    using System.Threading.Tasks;
    using MSLibrary.Xrm;
    using System.Collections.Generic;
    using System;
    using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
    using System.Xml.Linq;
    using System.Linq;
    using Newtonsoft.Json.Linq;

    public class SmallBookingService : ISmallBookingService
    {

        private ICrmService _crmService;
        public ISmallBookingRepository _smallbookingRepository;
        private string dicHeadKey;
        private Dictionary<string, IEnumerable<string>> dicHead;

        public SmallBookingService(ICrmService crmService, ISmallBookingRepository smallbookingRepository)
        {
            _crmService = crmService;
            _smallbookingRepository = smallbookingRepository;
            dicHeadKey = "Prefer";
            dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add(dicHeadKey, new List<string>() { "odata.include-annotations=\"*\"" });
        }

        public async Task<SmallBookingListResponse> QuerySmallBooking(SmallBookingListRequest request)
        {
            var smallBookingListResponse = new SmallBookingListResponse();
            var disSmallBooking = new Dictionary<Guid, SmallBooking>();

            #region 查询所有小订活动
            var fetchSmallBooking = _smallbookingRepository.QuerySmallBooking(request);
            var fetchXdocSmallBooking = XDocument.Parse(fetchSmallBooking);
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_smallbooking",
                FetchXml = fetchXdocSmallBooking
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var smallBookingResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            //存在小订活动才执行小订流程
            if (smallBookingResponse.Value.Results.Count > 0)
            {
                //只返回一条小订活动
                var nowsmallBooking = smallBookingResponse.Value.Results[0];
                #region 查询小订活动图片
                var fetchBookingImage = _smallbookingRepository.QueryBookingImage(nowsmallBooking.Id);
                var fetchXdocBookingImage = XDocument.Parse(fetchBookingImage);
                var fetchBookingImageRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_tc_productimage",
                    FetchXml = fetchXdocBookingImage
                };
                fetchBookingImageRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                var fetchBookingImageResponse = await _crmService.Execute(fetchBookingImageRequest);
                var bookingImageResponse = fetchBookingImageResponse as CrmRetrieveMultipleFetchResponseMessage;
                #endregion

                #region 组装小订活动
                var smallBooking = new SmallBooking();
                //把符合条件的最新一条小订活动返回出去
                var entity = nowsmallBooking;
                smallBooking.SmallBookingInfo = entity.Attributes;
                #endregion

                #region 组装小订活动图片
              
                var host = "https://ceo-oss.oss-cn-hangzhou.aliyuncs.com/";
                foreach (var bookingimage in bookingImageResponse.Value.Results)
                {
                    //var productGuid = Guid.Parse(entity.Attributes.Value<string>("_mcs_product_value"));
                    bookingimage.Attributes.Add("ext_fullurl", host + entity.Attributes.Value<string>("mcs_imagename"));
                    smallBooking.BookingImageArray.Add(bookingimage.Attributes);
                }
                #endregion

                #region 查询小订权益包
                var fetchEquityPackage = _smallbookingRepository.QueryEquityPackage(nowsmallBooking.Id);
                var fetchXdocEquityPackage = XDocument.Parse(fetchEquityPackage);
                var fetchEquityPackageRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_equitypackage",
                    FetchXml = fetchXdocEquityPackage
                };
                fetchEquityPackageRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                var fetchEquityPackageResponse = await _crmService.Execute(fetchEquityPackageRequest);
                var equityPackageResponse = fetchEquityPackageResponse as CrmRetrieveMultipleFetchResponseMessage;
                #endregion

                #region 查询权益包对应的权益项
                var equityResponse = new CrmRetrieveMultipleFetchResponseMessage();
                if (equityPackageResponse.Value.Results.Count > 0)
                {
                    foreach (var item in equityPackageResponse.Value.Results)
                    {
                        var equityPackage = new EquityPackage();
                        var fetchEquity = _smallbookingRepository.QueryEquity(item.Id);
                        var fetchXdocEquity = XDocument.Parse(fetchEquity);
                        var fetchEquityRequest = new CrmRetrieveMultipleFetchRequestMessage()
                        {
                            EntityName = "mcs_equity",
                            FetchXml = fetchXdocEquity
                        };
                        fetchEquityRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                        var fetchEquityResponse = await _crmService.Execute(fetchEquityRequest);
                        equityResponse = fetchEquityResponse as CrmRetrieveMultipleFetchResponseMessage;

                        #region 组装小订权益包与权益项
                        equityPackage.EquityPackageInfo = item.Attributes;
                        if (equityResponse.Value.Results.Count > 0)
                        {
                            foreach (var equity in equityResponse.Value.Results)
                            {
                                equityPackage.EquityArray.Add(equity.Attributes);
                            }
                        }
                        smallBooking.EquityPackageArray.Add(equityPackage);
                        #endregion
                    }
                }
                #endregion

                #region 查询小订选配
                var optionalResponse = new CrmRetrieveMultipleFetchResponseMessage();
                var fetchOptional = _smallbookingRepository.QueryOptional(nowsmallBooking.Id);
                var fetchXdocOptional = XDocument.Parse(fetchOptional);
                var fetchOptionalRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_optional",
                    FetchXml = fetchXdocOptional
                };
                fetchOptionalRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                var fetchOptionalResponse = await _crmService.Execute(fetchOptionalRequest);
                optionalResponse = fetchOptionalResponse as CrmRetrieveMultipleFetchResponseMessage;
                #endregion

                #region 查询选配图片
                foreach (var item in optionalResponse.Value.Results)
                {
                    Optional optional = new Optional();
                    var optionalImageResponse = new CrmRetrieveMultipleFetchResponseMessage();
                    var fetchOptionalImage = _smallbookingRepository.QueryOptionalImage(item.Id);
                    var fetchXdocOptionalImage = XDocument.Parse(fetchOptionalImage);
                    var fetchOptionalImageRequest = new CrmRetrieveMultipleFetchRequestMessage()
                    {
                        EntityName = "mcs_tc_productimage",
                        FetchXml = fetchXdocOptionalImage
                    };
                    fetchOptionalImageRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
                    var fetchOptionalImageResponse = await _crmService.Execute(fetchOptionalImageRequest);
                    optionalImageResponse = fetchOptionalImageResponse as CrmRetrieveMultipleFetchResponseMessage;
                    #region 组装小订选配及选配图片
                    optional.OptionalInfo = item.Attributes;
                    foreach (var optionalimage in optionalImageResponse.Value.Results)
                    {
                        optional.OptionalImageArray.Add(optionalimage.Attributes);
                    }
                    smallBooking.OptionalArray.Add(optional);
                    #endregion
                }
                #endregion

                smallBookingListResponse.SmallBookingList.Add(smallBooking);
            }

            return smallBookingListResponse;
        }
    }
}
