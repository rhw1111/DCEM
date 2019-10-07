using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary;
using MSLibrary.DI;
using MSLibrary.Configuration;
using MSLibrary.Logger;

namespace DCEM.Main.RemoteService
{
    [Injection(InterfaceType = typeof(IRemoteServiceInfoManagementService), Scope = InjectionScope.Singleton)]
    public class RemoteServiceInfoManagementService : IRemoteServiceInfoManagementService
    {
        private ICommonLogInfoGeneratorService _commonLogInfoGeneratorService;
        private ISystemConfigurationRepository _systemConigurationRepository;

        public RemoteServiceInfoManagementService(ICommonLogInfoGeneratorService commonLogInfoGeneratorService,ISystemConfigurationRepository systemConigurationRepository)
        {
            _commonLogInfoGeneratorService = commonLogInfoGeneratorService;
            _systemConigurationRepository = systemConigurationRepository;
        }
        public async Task<RemoteServiceDescriptionInfo> GetServiceInfo(string name)
        {
            //获取配置服务基地址
            var serviceAddressConfig=_systemConigurationRepository.QueryByName(SystemConfigurationNames.ConfigurationServiceBaseAddress);
            var serviceAddress=serviceAddressConfig.GetConfigurationValue<string>();
            var logInfos=await _commonLogInfoGeneratorService.Generate();
            //调用配置服务中获取服务信息的方法
            var serviceInfo=await HttpClinetHelper.GetAsync<RemoteServiceDescriptionInfo>($"{serviceAddress}/serviceinfo/byname?name={name.ToUrlEncode()}", logInfos);
            return serviceInfo;
        }
    }
}
