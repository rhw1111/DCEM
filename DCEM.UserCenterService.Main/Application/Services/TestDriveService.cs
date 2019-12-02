using DCEM.Main;
using DCEM.Main.Entities;
using DCEM.UserCenterService.Main.Application.Repository.Contrac;
using DCEM.UserCenterService.Main.Application.Services.Contrac;
using DCEM.UserCenterService.Main.ViewModel.Request;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

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
        public async Task<ValidateResult<CrmEntity>> CreateTestDrive(TestDriveRequest request)
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
                    Entity.Attributes.Add("mcs_carmodel", request.mcs_carmodel);
                }


                if (!string.IsNullOrEmpty(request.mcs_businesstype))
                {
                    Entity.Attributes.Add("mcs_businesstype", request.mcs_businesstype);
                }
                if (!string.IsNullOrEmpty(request.mcs_dealerid))
                {
                    Entity.Attributes.Add("mcs_dealerid", request.mcs_dealerid);
                }

                if (request.mcs_ordertime.HasValue)
                {
                    Entity.Attributes.Add("mcs_ordertime", request.mcs_ordertime.Value);
                }
                if (!string.IsNullOrEmpty(request.mcs_testdrivetime))
                {
                    Entity.Attributes.Add("mcs_testdrivetime", request.mcs_testdrivetime);
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


    }
}
