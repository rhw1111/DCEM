//------------------------------------------------------------------------------
// <auto-generated>
//     此代码由工具生成。
//     运行时版本:4.0.30319.42000
//
//     对此文件的更改可能会导致不正确的行为，并且如果
//     重新生成代码，这些更改将会丢失。
// </auto-generated>
//------------------------------------------------------------------------------

namespace DCEM.UserCenterService.Main.Application.Repository
{
    using DCEM.UserCenterService.Main.Application.Repository.Contrac;
    using DCEM.UserCenterService.Main.ViewModel.Request;
    using DCEM.UserCenterService.Main.ViewModel.Response;
    using System.Threading.Tasks;
    using MSLibrary.Xrm;
    using System;

    public class SmallBookingRepository : ISmallBookingRepository
    {
        /// <summary>
        /// 查询厅店
        /// </summary>
        /// <param name="dealerid"></param>
        /// <returns></returns>
        public string GetDealerById(string dealerid)
        {
            var strFetch = string.Format(@"<fetch version=""1.0"" output-format=""xml-platform"" mapping=""logical"" distinct=""false"">
                                <entity name = ""mcs_dealer"" >
                                  <all-attributes /> 
                                  <filter type = ""and"" >
                                  <condition attribute='statecode' operator='eq' value='0' /> 
                                  <condition attribute='mcs_dealerid' operator='eq' value='{0}' /> 
                               </filter>
                                </entity>
                            </fetch>", dealerid);
            return strFetch;
        }

        /// <summary>
        /// 查询门店销售机会
        /// </summary>
        /// <param name="onlyleadid"></param>
        /// <param name="dealerid"></param>
        /// <returns></returns>
        public string QueryAccount(string onlyleadid, Guid dealerid)
        {
            var strFetch = string.Format(@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
              <entity name='account'>
                <attribute name='name' />
                <attribute name='mcs_dealerid' />
                <attribute name='mcs_customerstatus' />
                <attribute name='ownerid' />
                <attribute name='accountid' />
                <order attribute='accountnumber' descending='true' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                  <condition attribute='mcs_onlyleadid' operator='eq'  value='{0}' />
                  <condition attribute='mcs_dealerid' operator='eq' value='{1}' />
                  <condition attribute='mcs_customerstatus' operator='in'>
                    <value>1</value>
                    <value>2</value>
                  </condition>
                </filter>
              </entity>
            </fetch>", onlyleadid, dealerid);
            return strFetch;
        }

        /// <summary>
        /// 查询是否存在销售机会
        /// </summary>
        /// <param name="onlyleadid"></param>
        /// <returns></returns>
        public string QueryAccountMater(string onlyleadid)
        {
            var strFetch = string.Format(@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
              <entity name='account'>
                <attribute name='name' />
                <attribute name='mcs_vehtypeid' />
                <attribute name='mcs_level' />
                <attribute name='mcs_carereason' />
                <attribute name='accountnumber' />
                <attribute name='mcs_dealerid' />
                <attribute name='mcs_customerstatus' />
                <attribute name='ownerid' />
                <attribute name='mcs_gender' />
                <attribute name='modifiedon' />
                <attribute name='mcs_firstappoint' />
                <attribute name='mcs_mobilephone' />
                <attribute name='mcs_tc_order' />
                <attribute name='mcs_singleperson' />
                <attribute name='accountid' />
                <order attribute='accountnumber' descending='true' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                  <condition attribute='mcs_onlyleadid' operator='eq'  value='{0}' />
                  <condition attribute='mcs_customerstatus' operator='in'>
                    <value>1</value>
                    <value>2</value>
                  </condition>
                </filter>
              </entity>
            </fetch>", onlyleadid);
            return strFetch;
        }

        /// <summary>
        /// 查询预约号
        /// </summary>
        /// <param name="blindOrder"></param>
        /// <returns></returns>
        public string QueryBlindOrder(string blindcode)
        {
            string str = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
              <entity name='mcs_blindorder'>
                <attribute name='mcs_name' />
                <attribute name='createdon' />
                <attribute name='mcs_ordertime' />
                <attribute name='mcs_orderstatus' />
                <attribute name='mcs_blindprice' />
                <attribute name='mcs_mobilephone' />
                <attribute name='mcs_fullname' />
                <attribute name='mcs_approvalstatus' />
                <attribute name='mcs_description' />
                <attribute name='mcs_exteriorcolor' />
                <attribute name='mcs_interiorcolor' />
                <attribute name='mcs_paymentchannel' />
                <attribute name='mcs_paymentmethod' />
                <attribute name='mcs_campaignid' />
                <attribute name='mcs_usecarcity' />
                <attribute name='mcs_paymenttime' />
                <attribute name='mcs_vehtype' />
                <attribute name='modifiedon' />
                <attribute name='mcs_blindorderid' />
                <attribute name='mcs_premiumcode' />
                <attribute name='mcs_referrermobilephone' />
                <attribute name='mcs_referrer' />
                <attribute name='mcs_onlyleadid' />
                <order attribute='modifiedon' descending='true' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                  <condition attribute='mcs_name' operator='eq' value='{blindcode}' />
                </filter>
              </entity>
            </fetch>";
            return str;
        }

        /// <summary>
        /// 查询小订活动关联图片
        /// </summary>
        /// <param name="samllbookingid"></param>
        /// <returns></returns>
        public string QueryBookingImage(Guid samllbookingid)
        {
            var strFetch = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
              <entity name='mcs_tc_productimage'>
                <attribute name='mcs_imagetype' />
                <attribute name='mcs_imagename' />
                <attribute name='mcs_imageindex' />
                <attribute name='mcs_tc_productimageid' />
                <attribute name='mcs_smallbooking' />
                <order attribute='mcs_imagetype' descending='false' />
                <order attribute='mcs_imageindex' descending='false' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                  <condition attribute='mcs_smallbooking' operator='eq'  value='{samllbookingid}' />
                </filter>
              </entity>
            </fetch>";

            return strFetch;
        }

        /// <summary>
        /// 查询小订活动关联的权益项
        /// </summary>
        /// <param name="filterequitypackageid"></param>
        /// <returns></returns>
        public string QueryEquity(Guid filterequitypackageid)
        {
            var strFetch = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
                <entity name='mcs_equity'>
                <attribute name='mcs_name' />
                <attribute name='createdon' />
                <attribute name='mcs_description' />
                <attribute name='mcs_code' />
                <attribute name='mcs_sort' />
                <attribute name='mcs_equityid' />
                <order attribute='mcs_sort' descending='true' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                </filter>
                <link-entity name='mcs_mcs_equity_mcs_equitypackage' from='mcs_equityid' to='mcs_equityid' visible='false' intersect='true'>
                  <link-entity name='mcs_equitypackage' from='mcs_equitypackageid' to='mcs_equitypackageid' alias='ep'>
                    <filter type='and'>
                      <condition attribute='mcs_equitypackageid' operator='eq'  value='{filterequitypackageid}' />
                    </filter>
                  </link-entity>
                </link-entity>
              </entity>
            </fetch>";

            return strFetch;
        }

        /// <summary>
        /// 查询小订活动关联的权益包
        /// </summary>
        /// <param name="samllbookingid"></param>
        /// <returns></returns>
        public string QueryEquityPackage(Guid samllbookingid)
        {
            var strFetch = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
               <entity name='mcs_equitypackage'>
                <attribute name='mcs_name' />
                <attribute name='createdon' />
                <attribute name='mcs_description' />
                <attribute name='mcs_code' />
                <attribute name='mcs_originalprice' />
                <attribute name='mcs_limitedtimeprice' />
                <attribute name='mcs_equitypackageid' />
                <order attribute='mcs_code' descending='false' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                </filter>
                <link-entity name='mcs_mcs_equitypackage_mcs_smallbooking' from='mcs_equitypackageid' to='mcs_equitypackageid' visible='false' intersect='true'>
                  <link-entity name='mcs_smallbooking' from='mcs_smallbookingid' to='mcs_smallbookingid' alias='af'>
                    <filter type='and'>
                      <condition attribute='mcs_smallbookingid' operator='eq' value='{samllbookingid}' />
                    </filter>
                  </link-entity>
                </link-entity>
              </entity>
            </fetch>";

            return strFetch;

        }

        /// <summary>
        /// 小订订单明细关联的权益包
        /// </summary>
        /// <param name="samllorderid"></param>
        /// <returns></returns>
        public string QueryEquityPackageByOrder(Guid samllorderid)
        {
            var strFetch = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
               <entity name='mcs_equitypackage'>
                <attribute name='mcs_name' />
                <attribute name='createdon' />
                <attribute name='mcs_description' />
                <attribute name='mcs_code' />
                <attribute name='mcs_originalprice' />
                <attribute name='mcs_limitedtimeprice' />
                <attribute name='mcs_equitypackageid' />
                <order attribute='mcs_code' descending='false' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                </filter>
                <link-entity name='mcs_mcs_smallorder_mcs_equitypackage' from='mcs_equitypackageid' to='mcs_equitypackageid' visible='false' intersect='true'>
                  <link-entity name='mcs_smallorder' from='mcs_smallorderid' to='mcs_smallorderid' alias='so'>
                    <filter type='and'>
                      <condition attribute='mcs_smallorderid' operator='eq' value='{samllorderid}' />
                    </filter>
                  </link-entity>
                </link-entity>
              </entity>
            </fetch>";

            return strFetch;
        }

        /// <summary>
        /// 查询唯一线索
        /// </summary>
        /// <param name="onlyleadid"></param>
        /// <returns></returns>
        public string QueryOnlyLead(string onlyleadid)
        {
            string str = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
              <entity name='mcs_onlylead'>
                <attribute name='mcs_name' />
                <attribute name='createdon' />
                <attribute name='mcs_dealerid' />
                <attribute name='mcs_description' />
                <attribute name='mcs_mobilephone' />
                <attribute name='mcs_gender' />
                <attribute name='mcs_excutestatus' />
                <attribute name='mcs_emailaddress1' />
                <attribute name='mcs_vehcolorid' />
                <attribute name='mcs_vehtypeid' />
                <attribute name='mcs_accountpoints' />
                <attribute name='mcs_provinceid' />
                <attribute name='mcs_cityid' />
                <attribute name='mcs_countryid' />
                <attribute name='mcs_districtid' />
                <attribute name='mcs_capitalist' />
                <attribute name='mcs_intention' />
                <attribute name='mcs_vehicleownerflag' />
                <attribute name='mcs_driveapplication' />
                <attribute name='mcs_onlyleadid' />
                <attribute name='mcs_budget' />
                <attribute name='mcs_spousesname' />
                <attribute name='mcs_zipcode' />
                <attribute name='mcs_vehicleusers' />
                <attribute name='mcs_maincar' />
                <attribute name='mcs_parkingsituations' />
                <attribute name='mcs_cw' />
                <attribute name='mcs_address' />
                <attribute name='mcs_following' />
                <attribute name='mcs_carattention' />
                <attribute name='mcs_purchasepurpose' />
                <attribute name='mcs_purchaseway' />
                <attribute name='mcs_idtype' />
                <attribute name='mcs_identitycard' />
                <attribute name='mcs_competingtype' />
                <attribute name='mcs_competer' />
                <attribute name='mcs_usecarprovince' />
                <attribute name='mcs_usecarcity' />
                <attribute name='mcs_carhabit' />
                <attribute name='mcs_birthdate' />
                <attribute name='mcs_existingmodel' />
                <attribute name='mcs_contactid' />
                <attribute name='mcs_userid' />
                <attribute name='mcs_channel' />
                <attribute name='mcs_nickname' />
                <attribute name='mcs_level' />
                <attribute name='mcs_qq' />
                <order attribute='createdon' descending='true' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                  <condition attribute='mcs_onlyleadid' operator='eq' value='{onlyleadid}' />
                </filter>
              </entity>
            </fetch>";
            return str;
        }
        /// <summary>
        /// 查询推荐人
        /// </summary>
        /// <param name="spare4"></param>
        /// <returns></returns>
        public string QueryOnlyLeadByUserId(string userid)
        {
            string str = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
              <entity name='mcs_onlylead'>
                <attribute name='mcs_name' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                  <condition attribute='mcs_userid' operator='eq' value='{userid}' />
                </filter>
              </entity>
            </fetch>";
            return str;
        }

        /// <summary>
        /// 小订活动选配
        /// </summary>
        /// <param name="samllbookingid"></param>
        /// <returns></returns>
        public string QueryOptional(Guid samllbookingid)
        {
            var strFetch = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
              <entity name='mcs_optional'>
                <attribute name='mcs_optionalid' />
                <attribute name='mcs_name' />
                <attribute name='mcs_limitedtimeprice' />
                <attribute name='mcs_description' />
                <attribute name='mcs_code' />
                <attribute name='mcs_originalprice' />
                <order attribute='mcs_name' descending='false' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                </filter>
                <link-entity name='mcs_mcs_optional_mcs_smallbooking' from='mcs_optionalid' to='mcs_optionalid' visible='false' intersect='true'>
                  <link-entity name='mcs_smallbooking' from='mcs_smallbookingid' to='mcs_smallbookingid' alias='af'>
                    <filter type='and'>
                      <condition attribute='mcs_smallbookingid' operator='eq' value='{samllbookingid}' />
                    </filter>
                  </link-entity>
                </link-entity>
              </entity>
            </fetch>";

            return strFetch;
        }

        /// <summary>
        /// 查询小订订单关联的选配包
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public string QueryOptionalByOrder(Guid samllorderid)
        {
            var strFetch = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
              <entity name='mcs_optional'>
                <attribute name='mcs_optionalid' />
                <attribute name='mcs_name' />
                <attribute name='mcs_limitedtimeprice' />
                <attribute name='mcs_description' />
                <attribute name='mcs_code' />
                <attribute name='mcs_originalprice' />
                <order attribute='mcs_name' descending='false' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                </filter>
                <link-entity name='mcs_mcs_smallorder_mcs_optional' from='mcs_optionalid' to='mcs_optionalid' visible='false' intersect='true'>
                  <link-entity name='mcs_smallorder' from='mcs_smallorderid' to='mcs_smallorderid' alias='af'>
                    <filter type='and'>
                      <condition attribute='mcs_smallorderid' operator='eq' value='{samllorderid}' />
                    </filter>
                  </link-entity>
                </link-entity>
              </entity>
            </fetch>";

            return strFetch;
        }

        /// <summary>
        /// 查询选配图片
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public string QueryOptionalImage(Guid optionalid)
        {
            var strFetch = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
              <entity name='mcs_tc_productimage'>
                <attribute name='mcs_imagetype' />
                <attribute name='mcs_imagename' />
                <attribute name='mcs_imageindex' />
                <attribute name='mcs_tc_productimageid' />
                <attribute name='mcs_optionalimage' />
                <order attribute='mcs_imagetype' descending='false' />
                <order attribute='mcs_imageindex' descending='false' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                  <condition attribute='mcs_optionalimage' operator='eq'  value='{optionalid}' />
                </filter>
              </entity>
            </fetch>";

            return strFetch;
        }

        /// <summary>
        /// 查询小订活动
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public string QuerySmallBooking(SmallBookingListRequest request)
        {
            var filter = string.Empty;
            if (request.mcs_starttime!=null)
            {
                filter += $"<condition attribute='mcs_starttime' operator='ge' value='{request.mcs_starttime}' />";
            }
            if (request.mcs_endtime != null)
            {
                filter += $"<condition attribute='mcs_endtime' operator='le' value='{request.mcs_endtime}' />";
            }
            if (request.mcs_poststatus != null)
            {
                filter += $"<condition attribute='mcs_poststatus' operator='eq' value='{request.mcs_poststatus}' />";
            }
            var fetchString = $@"<fetch version='1.0' count='{request.PageSize}' page='{request.PageIndex}' output-format='xml-platform' mapping='logical' distinct='false'>
                  <entity name='mcs_smallbooking'>
                    <attribute name='mcs_name' />
                    <attribute name='createdon' />
                    <filter type='and'>
                      <condition attribute='statecode' operator='eq' value='0' />
                      {filter}
                    </filter>
                  </entity>
                </fetch>";

            return fetchString;
        }

        /// <summary>
        /// 查询小订订单
        /// </summary>
        /// <param name="orderCode"></param>
        /// <returns></returns>
        public string QuerySmallOrder(string ordercode)
        {
            string str = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
              <entity name='mcs_smallorder'>
                <attribute name='mcs_name' />
                <attribute name='createdon' />
                <attribute name='mcs_blindorderid' />
                <attribute name='mcs_optionalcode' />
                <attribute name='mcs_optionalname' />
                <attribute name='mcs_orderstatus' />
                <attribute name='mcs_totalorder' />
                <attribute name='mcs_availabletotalorder' />
                <attribute name='mcs_mobilephone' />
                <attribute name='mcs_fullname' />
                <attribute name='mcs_equitycode' />
                <attribute name='mcs_equityname' />
                <attribute name='mcs_vehconfigcode' />
                <attribute name='mcs_vehconfigname' />
                <attribute name='mcs_vehtypecode' />
                <attribute name='mcs_vehtypename' />
                <attribute name='mcs_provinceoncard' />
                <attribute name='mcs_cityoncard' />
                <attribute name='mcs_gender' />
                <attribute name='mcs_smallorderid' />
                <order attribute='createdon' descending='true' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                  <condition attribute='mcs_name' operator='eq' value='{ordercode}' />
                </filter>
              </entity>
            </fetch>";
            return str;
        }

        /// <summary>
        /// 查询小订订单
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public string QuerySmallOrder(SmallOrderListRequest request)
        {
            var filter = string.Empty;
            if (request.mcs_userid != null)
            {
                filter += $"<condition attribute='mcs_userid' operator='eq' value='{request.mcs_userid}' />";
            }
            if (request.mcs_smallorderid != null)
            {
                filter += $"<condition attribute='mcs_smallorderid' operator='eq' value='{request.mcs_smallorderid}' />";
            }
            if (request.mcs_mobilephone != null)
            {
                filter += $"<condition attribute='mcs_mobilephone' operator='eq' value='{request.mcs_mobilephone}' />";
            }
            if (request.mcs_name != null)
            {
                filter += $"<condition attribute='mcs_name' operator='eq' value='{request.mcs_name}' />";
            }
            string str = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
              <entity name='mcs_smallorder'>
                <attribute name='mcs_name' />
                <attribute name='createdon' />
                <attribute name='mcs_blindorderid' />
                <attribute name='mcs_optionalcode' />
                <attribute name='mcs_optionalname' />
                <attribute name='mcs_orderstatus' />
                <attribute name='mcs_totalorder' />
                <attribute name='mcs_availabletotalorder' />
                <attribute name='mcs_mobilephone' />
                <attribute name='mcs_fullname' />
                <attribute name='mcs_equitycode' />
                <attribute name='mcs_equityname' />
                <attribute name='mcs_vehconfigcode' />
                <attribute name='mcs_vehconfigname' />
                <attribute name='mcs_vehtypecode' />
                <attribute name='mcs_vehtypename' />
                <attribute name='mcs_provinceoncard' />
                <attribute name='mcs_cityoncard' />
                <attribute name='mcs_gender' />
                <attribute name='mcs_smallorderid' />
                <order attribute='createdon' descending='true' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                  {filter}
                </filter>
              <link-entity name='mcs_onlylead' from='mcs_onlyleadid' to='mcs_onlyleadid' visible='false' link-type='outer' alias='onlylead'>
                  <attribute name='mcs_name' />
                  <attribute name='mcs_mobilephone' />
                </link-entity>
                <link-entity name='mcs_blindorder' from='mcs_blindorderid' to='mcs_blindorderid' visible='false' link-type='outer' alias='blindorder'>
                  <attribute name='mcs_premiumcode' />
                  <attribute name='mcs_name' />
                </link-entity>
              </entity>
            </fetch>";
            return str;
        }

        /// <summary>
        /// 小订订单明细
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public string QuerySmallOrderDetail(SmallOrderRequest request)
        {
            string str = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
              <entity name='mcs_smallorder'>
                <attribute name='mcs_name' />
                <attribute name='createdon' />
                <attribute name='mcs_blindorderid' />
                <attribute name='mcs_optionalcode' />
                <attribute name='mcs_optionalname' />
                <attribute name='mcs_orderstatus' />
                <attribute name='mcs_totalorder' />
                <attribute name='mcs_availabletotalorder' />
                <attribute name='mcs_mobilephone' />
                <attribute name='mcs_fullname' />
                <attribute name='mcs_equitycode' />
                <attribute name='mcs_equityname' />
                <attribute name='mcs_vehconfigcode' />
                <attribute name='mcs_vehconfigname' />
                <attribute name='mcs_vehtypecode' />
                <attribute name='mcs_vehtypename' />
                <attribute name='mcs_provinceoncard' />
                <attribute name='mcs_cityoncard' />
                <attribute name='mcs_gender' />
                <attribute name='mcs_smallorderid' />
                <order attribute='createdon' descending='true' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                  <condition attribute='mcs_smallorderid' operator='eq' value='{request.mcs_smallorderid}' />
                </filter>
              </entity>
            </fetch>";
            return str;
        }
    }
}
