using System;
using System.Collections.Generic;
using System.Text;
using DCEM.ServiceAssistantService.Main.DTOModel;

namespace DCEM.ServiceAssistantService.Main.Application.Repository
{
    public class BaseDataRepository : IBaseDataRepository
    {
        /// <summary>
        /// 查询个人基础信息
        /// </summary>
        /// <param name="systemuserid"></param>
        /// <returns></returns>
        public string QuerySystemUser(string systemuserid)
        {
            //string strQuery = string.Format($"$select=domainname,fullname,internalemailaddress,isdisabled,jobtitle,_mcs_dealer_value,mcs_post,mcs_sex,mcs_staffid,mcs_usercode,mcs_userid,mobilephone,nickname,systemuserid&$filter=systemuserid eq { systemuserid}");
            //return strQuery;
            var fetchString = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
                  <entity name='systemuser'>
                    <all-attributes />
                    <filter type='and'>
                      <condition attribute='systemuserid' operator='eq' value='{systemuserid}' />
                    </filter>
                  </entity>
                </fetch>";
            return fetchString;
        }

        /// <summary>
        /// 查询故障类别代码基础数据
        /// </summary>
        /// <param name="malFunctionTypeRequest"></param>
        /// <returns></returns>
        public string QueryMalFunctionType(MalFunctionTypeRequest malFunctionTypeRequest)
        {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(malFunctionTypeRequest.search))
            {
                filter += $"<filter type='and'>";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{malFunctionTypeRequest.search}%' />";
                filter += $"</filter>";
            }

            var fetchString = $@"<fetch version='1.0' count='{malFunctionTypeRequest.pageSize}' page='{malFunctionTypeRequest.page}' output-format='xml-platform' mapping='logical' distinct='false'>
                  <entity name='mcs_malfunctiontype'>
                    <attribute name='mcs_name' />
                    <attribute name='createdon' />
                    <attribute name='mcs_malfunctiontypedescription' />
                    <attribute name='mcs_malfunctiontypename' />
                    <attribute name='mcs_vrt' />
                    <attribute name='mcs_vfg' />
                    <attribute name='mcs_malfunctiontypeid' />
                    <order attribute='mcs_name' descending='false' />
                    <filter type='and'>
                      <condition attribute='statecode' operator='eq' value='0' />
                        {filter}
                    </filter>
                    <link-entity name='mcs_vfg' from='mcs_vfgid' to='mcs_vfg' visible='false' link-type='outer' alias='vfg'>
                      <attribute name='mcs_name' />
                    </link-entity>
                    <link-entity name='mcs_vrt' from='mcs_vrtid' to='mcs_vrt' visible='false' link-type='outer' alias='vrt'>
                      <attribute name='mcs_name' />
                    </link-entity>
                  </entity>
                </fetch>";

            return fetchString;
        }


        /// <summary>
        /// 获取车型
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public string QueryVehicletype(VehicleTypeRequest request)
        {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(request.search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_code' operator='like' value='%{request.search}%' />";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{request.search}%' />";
                filter += $"</filter>";
            }

            var fetchString = $@"<fetch version='1.0' count='{request.pageSize}' page='{request.page}' output-format='xml-platform' mapping='logical' distinct='false'>
                  <entity name='mcs_vehicletype'>
                    <attribute name='mcs_name' />
                    <attribute name='createdon' />
                    <attribute name='mcs_effectivestarton' />
                    <attribute name='mcs_effectiveendon' />
                    <attribute name='mcs_saleseffectiveendon' />
                    <attribute name='mcs_saleseffectivestarton' />
                    <attribute name='mcs_salesenable' />
                    <attribute name='mcs_brandid' />
                    <attribute name='mcs_code' />
                    <attribute name='mcs_vehicletypeid' />
                    <order attribute='createdon' descending='true' />
                    <filter type='and'>
                      <condition attribute='statecode' operator='eq' value='0' />
                        {filter}
                    </filter>
                    <link-entity name='mcs_brand' from='mcs_brandid' to='mcs_brandid' visible='false' link-type='inner' >
                      <attribute name='mcs_name' alias='brandname'/>
                    </link-entity> 
                  </entity>
                </fetch>";

            return fetchString;
        }

        /// <summary>
        /// 获取车型颜色
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public string QueryVehicleColor(VehicleColorRequest request)
        {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(request.search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_code' operator='like' value='%{request.search}%' />";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{request.search}%' />";
                filter += $"</filter>";
            }
            if (!string.IsNullOrWhiteSpace(request.carmodel))
                filter += $"<condition attribute='mcs_vehtypeid' operator='eq' value='{request.carmodel}' />";


            var fetchString = $@"<fetch version='1.0' count='{request.pageSize}' page='{request.page}' output-format='xml-platform' mapping='logical' distinct='false'>
                  <entity name='mcs_vehiclecolor'>
                    <attribute name='mcs_name' /> 
                    <attribute name='mcs_code' />  
                    <filter type='and'>
                      <condition attribute='statecode' operator='eq' value='0' />
                        {filter}
                    </filter>
                    <link-entity name='mcs_vehicletype' from='mcs_vehicletypeid' to='mcs_vehtypeid' visible='false' link-type='outer' >
                      <attribute name='mcs_name' alias='vehicletypename'/>
                    </link-entity> 
                  </entity>
                </fetch>";

            return fetchString;
        }


        /// <summary>
        /// 获取试驾时段
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public string QueryReservationconfig(ReservationconfigRequest request)
        {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(request.search))
            { 
                //filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_reservationdate' operator='on' value='{request.search.Split('T')[0]}' />";
                //filter += $"<condition attribute='mcs_name' operator='like' value='%{dt.ToString("HH:mm")}%' />";
                //filter += $"</filter>";
            }
            if (!string.IsNullOrWhiteSpace(request.carmodel))
                filter += $"<condition attribute='mcs_carmodel' operator='eq' value='{request.carmodel}' />";
            if (!string.IsNullOrWhiteSpace(request.dealerid))
                filter += $"<condition attribute='mcs_dealerid' operator='eq' value='{request.dealerid}' />";

            var fetchString = $@"<fetch version='1.0' count='{request.pageSize}' page='{request.page}' output-format='xml-platform' mapping='logical' distinct='false'>
                  <entity name='mcs_reservationconfiguration'> 
                    <attribute name='mcs_name' />  
                    <attribute name='createdon' />  
                    <attribute name='mcs_usednum' />  
                    <attribute name='mcs_reservationdate' />  
                    <attribute name='mcs_begintime' />  
                    <attribute name='mcs_endtime' />  
                    <order attribute='mcs_reservationdate' descending='true' />
                    <order attribute='mcs_begintime' descending='false' />
                    <filter type='and'>
                      <condition attribute='statecode' operator='eq' value='0' />
                        {filter}
                    </filter>
                    <link-entity name='mcs_carmodel' from='mcs_carmodelid' to='mcs_carmodel' visible='false' link-type='outer' >
                      <attribute name='mcs_name' alias='carmodelname'/>
                    </link-entity> 
                  </entity>
                </fetch>";

            return fetchString;
        }
        /// <summary>
        /// 接待专员
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public string QueryReceptioncommissioner(ReceptioncommissionerRequest request)
        {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(request.search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_code' operator='like' value='%{request.search}%' />";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{request.search}%' />";
                filter += $"</filter>";
            }

            var fetchString = $@"<fetch version='1.0' count='{request.pageSize}' page='{request.page}' output-format='xml-platform' mapping='logical' distinct='false'>
                  <entity name='mcs_receptioncommissioner'>
                    <attribute name='mcs_name' /> 
                    <attribute name='mcs_code' />   
                    <filter type='and'>
                      <condition attribute='statecode' operator='eq' value='0' />
                        {filter}
                    </filter> 
                  </entity>
                </fetch>";

            return fetchString;
        }


        /// <summary>
        /// 省市区
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public string QuerySysarea(SysareaRequest request)
        {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(request.search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_code' operator='like' value='%{request.search}%' />";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{request.search}%' />";
                filter += $"</filter>";
            }

            if (!string.IsNullOrWhiteSpace(request.pid))
                filter += $"<condition attribute='mcs_pid' operator='eq' value='{request.pid}' />";

            if (!string.IsNullOrWhiteSpace(request.level))
                filter += $"<condition attribute='mcs_level' operator='eq' value='{request.level}' />";

            var fetchString = $@"<fetch version='1.0' count='{request.pageSize}' page='{request.page}' output-format='xml-platform' mapping='logical' distinct='false'>
                  <entity name='mcs_sysarea'>
                    <attribute name='mcs_name' /> 
                    <attribute name='mcs_code' />   
                    <filter type='and'>
                      <condition attribute='statecode' operator='eq' value='0' />
                        {filter}
                    </filter> 
                  </entity>
                </fetch>";

            return fetchString;
        }




        /// <summary>
        /// 维修项目基础数据
        /// </summary>
        /// <param name="repairItemInfoRequest"></param>
        /// <returns></returns>
        public string QueryRepairItemInfo(RepairItemInfoRequest repairItemInfoRequest)
        {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(repairItemInfoRequest.search))
            {
                filter += $"<filter type='and'>";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{repairItemInfoRequest.search}%' />";
                filter += $"<condition attribute='mcs_pinyincode' operator='like' value='%{repairItemInfoRequest.search}%' />";
                filter += $"</filter>";
            }

            if (!string.IsNullOrWhiteSpace(repairItemInfoRequest.mcs_dealerid))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_dealerid' operator='eq' value='{repairItemInfoRequest.mcs_dealerid}' />";
                filter += $"<condition attribute='mcs_isdealeritem' operator='ne' value='1' />";
                filter += $"</filter>";
            }
            var fetchString = $@"<fetch version='1.0' count='{repairItemInfoRequest.pageSize}' page='{repairItemInfoRequest.page}' output-format='xml-platform' mapping='logical' distinct='false'>
                  <entity name='mcs_repairiteminfo'> 
               <attribute name='mcs_name' /> 
               <attribute name='createdon' /> 
               <attribute name='mcs_pinyincode' /> 
               <attribute name='mcs_price' /> 
               <attribute name='mcs_workinghour' /> 
               <attribute name='mcs_repairitemcode' /> 
               <attribute name='mcs_isbatteryrepairitem' /> 
               <attribute name='mcs_isdealeritem' /> 
               <attribute name='mcs_dealerid' /> 
               <attribute name='mcs_repairiteminfoid' /> 
               <order attribute='createdon' descending='true' /> 
               <filter type='and'> 
                 <condition attribute='statecode' operator='eq' value='0' /> 
                 {filter}
               </filter> 
               <link-entity name='mcs_dealer' from='mcs_dealerid' to='mcs_dealerid' visible='false' link-type='outer' alias='dealer'> 
                 <attribute name='mcs_name' /> 
               </link-entity> 
             </entity> 
           </fetch>";

            return fetchString;
        }

        /// <summary>
        /// 维修配件基础数据
        /// </summary>
        /// <param name="repairItemPartRequest"></param>
        /// <returns></returns>
        public string QueryRepairItemPart(RepairItemPartRequest repairItemPartRequest)
        {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(repairItemPartRequest.search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{repairItemPartRequest.search}%' />";
                filter += $"<condition attribute='mcs_pinyincode' operator='like' value='%{repairItemPartRequest.search}%' />";
                filter += $"</filter>";
            }
            var fetchString = $@"<fetch version='1.0' count='{repairItemPartRequest.pageSize}' page='{repairItemPartRequest.page}' output-format='xml-platform' mapping='logical' distinct='false'>
                <entity name='mcs_repairitempart'> 
                <attribute name='mcs_name' /> 
                <attribute name='createdon' /> 
                <attribute name='mcs_repairitemid' /> 
                <attribute name='mcs_remark' /> 
                <attribute name='mcs_price' /> 
                <attribute name='mcs_partsid' /> 
                <attribute name='mcs_pinyincode' /> 
                <attribute name='mcs_repairitempartid' /> 
                <order attribute='mcs_name' descending='true' /> 
                <filter type='and'> 
                  <condition attribute='statecode' operator='eq' value='0' /> 
                </filter> 
                <link-entity name='mcs_repairiteminfo' from='mcs_repairiteminfoid' to='mcs_repairitemid' visible='false' link-type='outer' alias='repairitem'> 
                  <attribute name='mcs_name' /> 
                </link-entity> 
                <link-entity name='mcs_parts' from='mcs_partsid' to='mcs_partsid' visible='false' link-type='outer' alias='part'> 
                  <attribute name='mcs_name' /> 
                </link-entity> 
              </entity> 
            </fetch>";

            return fetchString;
        }

        /// <summary>
        /// 维修类别基础数据
        /// </summary>
        /// <param name="repairItemTypeRequest"></param>
        /// <returns></returns>
        public string QueryRepairItemType(RepairItemTypeRequest repairItemTypeRequest)
        {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(repairItemTypeRequest.search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{repairItemTypeRequest.search}%' />";
                filter += $"</filter>";
            }
            var fetchString = $@"<fetch version='1.0' count='{repairItemTypeRequest.pageSize}' page='{repairItemTypeRequest.page}' output-format='xml-platform' mapping='logical' distinct='false'>
                   <entity name='mcs_repairitemtype'> 
                <attribute name='mcs_name' /> 
                <attribute name='createdon' /> 
                <attribute name='mcs_remark' /> 
                <attribute name='mcs_type' /> 
                <attribute name='mcs_repairitemtypeid' /> 
                <order attribute='createdon' descending='true' /> 
                <filter type='and'> 
                  <condition attribute='statecode' operator='eq' value='0' /> 
                  {filter}
                </filter> 
              </entity> 
            </fetch>";

            return fetchString;
        }

        /// <summary>
        /// 维修类型基础数据
        /// </summary>
        /// <param name="repairItemTypeDetailRequest"></param>
        /// <returns></returns>
        public string QueryRepairItemTypeDetail(RepairItemTypeDetailRequest repairItemTypeDetailRequest)
        {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(repairItemTypeDetailRequest.search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{repairItemTypeDetailRequest.search}%' />";
                filter += $"</filter>";
            }
            var fetchString = $@"<fetch version='1.0' count='{repairItemTypeDetailRequest.pageSize}' page='{repairItemTypeDetailRequest.page}' output-format='xml-platform' mapping='logical' distinct='false'>
                 <entity name='mcs_repairitemtypedetail'> 
                <attribute name='mcs_name' /> 
                <attribute name='createdon' /> 
                <attribute name='mcs_repairitemtypeid' /> 
                <attribute name='mcs_ismaintenance' /> 
                <attribute name='mcs_repairitemtypedetailid' /> 
                <order attribute='createdon' descending='true' /> 
                <filter type='and'> 
                  <condition attribute='statecode' operator='eq' value='0' /> 
                </filter> 
                <link-entity name='mcs_repairitemtype' from='mcs_repairitemtypeid' to='mcs_repairitemtypeid' visible='false' link-type='outer' alias='repairitemtype'> 
                  <attribute name='mcs_name' /> 
                </link-entity> 
              </entity> 
            </fetch>";

            return fetchString;
        }
    }
}
