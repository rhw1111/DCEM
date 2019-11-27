﻿using MSLibrary;
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
    //[Injection(InterfaceType = typeof(IChangePasswordService), Scope = InjectionScope.Singleton)]
    public class ChangePasswordService: IChangePasswordService
    {
        //private ICommonLogInfoGeneratorService _commonLogInfoGeneratorService;
        //private ISystemConfigurationRepository _systemConigurationRepository;
        //public ChangePasswordService(ICommonLogInfoGeneratorService commonLogInfoGeneratorService)
        //{
        //    _commonLogInfoGeneratorService = commonLogInfoGeneratorService;
        //    _systemConigurationRepository = systemConigurationRepository;
        //}


        public async Task<QueryResult<CrmEntity>> UpdatePwd(ChangePasswordModel model)
        {
            //var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
            //var ProxyUserId = userInfo != null ? userInfo.systemuserid : null;


            //获取配置服务基地址
            //var serviceAddressConfig = _systemConigurationRepository.QueryByName(SystemConfigurationNames.ConfigurationServiceBaseAddress);
            //var serviceAddress = serviceAddressConfig.GetConfigurationValue<string>();

            var primaryActiveCode = "SERES-SF5";
            var userId = "1000004";

            var serviceAddress = "http://mtkprd.seres.cn/mktcloud/order/v1/queryOrderRight?primaryActiveCode=" + primaryActiveCode + "&userId=" + userId + "&orderNo=";
            //var headDic = await _commonLogInfoGeneratorService.Generate();

            //headDic.Add("Authorization", "bearer " + accesstoken);
            //调用配置服务中获取服务信息的方法
           // var serviceInfo = await HttpClinetHelper.GetAsync<MemberRightsResponse>($"{serviceAddress}", headDic);
            return null;
        }

    }
}
