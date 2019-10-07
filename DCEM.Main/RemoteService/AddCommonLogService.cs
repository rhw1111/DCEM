using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary;
using MSLibrary.DI;
using MSLibrary.RemoteService;
using MSLibrary.LanguageTranslate;

namespace DCEM.Main.RemoteService
{
    [Injection(InterfaceType = typeof(IAddCommonLogService), Scope = InjectionScope.Singleton)]
    public class AddCommonLogService : IAddCommonLogService
    {
        private IRemoteServiceDescriptionRepository _remoteServiceDescriptionRepository;

        public AddCommonLogService(IRemoteServiceDescriptionRepository remoteServiceDescriptionRepository)
        {
            _remoteServiceDescriptionRepository = remoteServiceDescriptionRepository;
        }

        public async Task Add(CommonLogModel model)
        {
            //获取服务描述
            var descriptionRepositoryHelper= RemoteServiceDescriptionRepositoryHelperFactory.Create(_remoteServiceDescriptionRepository);
            var description = await descriptionRepositoryHelper.QueryByName(RemoteServiceNames.AddCommonLog);
            if (description==null)
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundRemoteServiceDescriptionByName,
                    DefaultFormatting = "找不到名称为{0}的远程服务描述",
                    ReplaceParameters = new List<object>() { RemoteServiceNames.AddCommonLog }
                };

                throw new UtilityException((int)Errors.NotFoundRemoteServiceDescriptionByName, fragment);
            }
            //获取认证信息
            var authInfos= await description.GenerateAuthInfo();
            //调用服务
             await HttpClinetHelper.PostAsync(model, description.Address, authInfos);
        }
    }
}
