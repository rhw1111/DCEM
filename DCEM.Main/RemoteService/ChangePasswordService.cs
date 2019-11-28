using DCEM.Main.Entities;
using DCEM.Main.Response;
using MSLibrary;
using MSLibrary.Configuration;
using MSLibrary.DI;
using MSLibrary.Logger;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.RemoteService
{
    [Injection(InterfaceType = typeof(IChangePasswordService), Scope = InjectionScope.Singleton)]
    public class ChangePasswordService: IChangePasswordService
    {
        //private ICommonLogInfoGeneratorService _commonLogInfoGeneratorService;
        //private ISystemConfigurationRepository _systemConigurationRepository;
        //public ChangePasswordService(ICommonLogInfoGeneratorService commonLogInfoGeneratorService)
        //{
        //    _commonLogInfoGeneratorService = commonLogInfoGeneratorService;
        //    _systemConigurationRepository = systemConigurationRepository;
        //}


        public async Task<ResultResponse> UpdatePwd(ChangePasswordModel model)
        {
          
            //获取配置服务基地址
            //var serviceAddressConfig = _systemConigurationRepository.QueryByName(SystemConfigurationNames.ConfigurationServiceBaseAddress);
            //var serviceAddress = serviceAddressConfig.GetConfigurationValue<string>();

            var serviceAddress = "https://subcrmuatceo.sokon.com/uc.inapitocrm/swagger/ui/index#!/User/User_UserResetPassWord?UserName=" + model.systemUserName + "&PassWord=" + model.FirstNewPwd + "&OldPassWord="+ model.OldPwd;
            //var headDic = await _commonLogInfoGeneratorService.Generate();
            // headDic.Add("Authorization", "bearer " + accesstoken);
            //调用配置服务中获取服务信息的方法
             var serviceInfo = await HttpClinetHelper.GetAsync<ResultResponse>($"{serviceAddress}");
            return serviceInfo;
        }

    }
}
