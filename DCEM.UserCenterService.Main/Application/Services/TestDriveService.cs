﻿using DCEM.Main;
using DCEM.Main.Entities;
using DCEM.UserCenterService.Main.Application.Repository.Contrac;
using DCEM.UserCenterService.Main.Application.Services.Contrac;
using DCEM.UserCenterService.Main.ViewModel.Request;
using MSLibrary;
using MSLibrary.Xrm;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.UserCenterService.Main.Application.Services
{
   public class TestDriveService: ITestDriveService
    {
        private CrmService _crmService;
        private ITestDriveRepository _Repository;

        public TestDriveService(CrmService crmService, ITestDriveRepository Repository)
        {
            _crmService = crmService;
            _Repository = Repository;
        }


        #region 创建试乘试驾预约
        /// <summary>
        /// 创建试乘试驾预约
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<ValidateResult<CrmEntity>> CreateTestDrive(TestDriveViewModel request)
        {
            var validateResult = new ValidateResult<CrmEntity>();
            var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
            try
            {
                Guid mcs_driverecordid = string.IsNullOrEmpty(request.mcs_driverecordid) ? Guid.NewGuid() : Guid.Parse(request.mcs_driverecordid);
                CrmExecuteEntity Entity = new CrmExecuteEntity("mcs_driverecord", mcs_driverecordid);
                           
                if (!string.IsNullOrEmpty(request.mcs_fullname))
                {
                    Entity.Attributes.Add("mcs_fullname", request.mcs_fullname);
                }
             
                if (!string.IsNullOrEmpty(request.mcs_mobilephone))
                {
                    Entity.Attributes.Add("mcs_mobilephone", request.mcs_mobilephone);
                }
                if (!string.IsNullOrEmpty(request.mcs_carmodel))
                {            
                    Entity.Attributes.Add("mcs_carmodel", new CrmEntityReference("mcs_carmodel", Guid.Parse(request.mcs_carmodel)));
                }
                if (!string.IsNullOrEmpty(request.mcs_businesstype))
                {
                    Entity.Attributes.Add("mcs_businesstype", request.mcs_businesstype);
                }
                if (!string.IsNullOrEmpty(request.mcs_dealerid))
                {
                    Entity.Attributes.Add("mcs_dealerid", new CrmEntityReference("mcs_dealer", Guid.Parse(request.mcs_dealerid)));
                }

                if (request.mcs_ordertime.HasValue)
                {
                    Entity.Attributes.Add("mcs_ordertime", request.mcs_ordertime.Value);
                }
                if (!string.IsNullOrEmpty(request.mcs_testdrivetime))
                {
                    Entity.Attributes.Add("mcs_testdrivetime", new CrmEntityReference("mcs_reservationconfiguration", Guid.Parse(request.mcs_testdrivetime)));
                }

                if (!string.IsNullOrEmpty(request.mcs_driverecordid))
                {
                    await _crmService.Update(Entity, userInfo?.systemuserid);
                }
                else
                {
                    mcs_driverecordid = await _crmService.Create(Entity, userInfo?.systemuserid);
                }

                validateResult.Result = true;
                validateResult.Description = "操作成功";
            }
            catch (Exception ex)
            {
                validateResult.Result = false;
                validateResult.Description = "操作失败，原因：" + ex.Message;
                throw ex;
            }


            return validateResult;
        }
        #endregion


        #region 我的试乘试驾查询
        /// <summary>
        /// 我的试乘试驾查询
        /// </summary>
        /// <param name="GetDriveRecordList"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> GetDriveRecordList(TestDriveRequest Request)
        {
            try
            {
                var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
                var ProxyUserId = userInfo != null ? userInfo.systemuserid : null;

                var fetchString = _Repository.GetDriveRecordList(Request);
                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_driverecord",
                    FetchXml = fetchXdoc,
                    ProxyUserId = ProxyUserId
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = Request.PageIndex;
                queryResult.TotalCount = 0;
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #endregion

    }
}
