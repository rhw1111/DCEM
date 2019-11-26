using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using System.Runtime.Serialization;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using MSLibrary.DI;
using MSLibrary.LanguageTranslate;
using MSLibrary.Serializer;
using MSLibrary.Collections;

namespace MSLibrary.Xrm.Token
{
    /// <summary>
    /// 针对S2S模式的令牌生成
    /// 需要传入的参数：
    /// ApplicationId:string,应用的Id
    /// ApplicationKey:string,应用的密钥
    /// CrmUrl:string,Crm的地址
    /// AADId:string,Application所在的AAD的id
    /// </summary>
    [Injection(InterfaceType = typeof(CrmServiceTokenGenerateServiceForS2S), Scope = InjectionScope.Singleton)]
    public class CrmServiceTokenGenerateServiceForS2S : ICrmServiceTokenGenerateService
    {
        private static Dictionary<string, AuthenticationContextContainer> _authenticationContexts = new Dictionary<string, AuthenticationContextContainer>();

        private static int _limit = 10000;

        private static int _poolLimit = 100;
        /// <summary>
        /// 以连接字符串为键的键值对最大长度
        /// </summary>
        public static int Limit
        {
            set
            {
                _limit = value;
            }
        }
        /// <summary>
        /// 每个键对应的池的最大长度
        /// </summary>
        public static int PoolLimit
        {
            set
            {
                _poolLimit = value;
            }
        }

        public async Task<string> Genereate(Dictionary<string, object> parameters)
        {
            //检查参数
            if (!parameters.ContainsKey(CrmServiceTokenGenerateServiceParameterNames.ApplicationId) || parameters[CrmServiceTokenGenerateServiceParameterNames.ApplicationId] == null)
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundParameterInCrmServiceTokenGenerateService,
                    DefaultFormatting = "在Crm服务令牌生成服务{0}中，找不到名称为{1}的参数",
                    ReplaceParameters = new List<object>() { this.GetType().FullName, CrmServiceTokenGenerateServiceParameterNames.ApplicationId }
                };

                throw new UtilityException((int)Errors.NotFoundParameterInCrmServiceTokenGenerateService, fragment);
            }
            if (!(parameters[CrmServiceTokenGenerateServiceParameterNames.ApplicationId] is string))
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.ParameterTypeNotMatchInCrmServiceTokenGenerateService,
                    DefaultFormatting = "在Crm服务令牌生成服务{0}中，名称为{1}的参数期望类型为{2}，而实际类型为{3}",
                    ReplaceParameters = new List<object>() { this.GetType().FullName, CrmServiceTokenGenerateServiceParameterNames.ApplicationId, typeof(string).FullName, parameters[CrmServiceTokenGenerateServiceParameterNames.ApplicationId].GetType().FullName }
                };

                throw new UtilityException((int)Errors.ParameterTypeNotMatchInCrmServiceTokenGenerateService, fragment);
            }
            string strApplicationId = parameters[CrmServiceTokenGenerateServiceParameterNames.ApplicationId].ToString();

            if (!parameters.ContainsKey(CrmServiceTokenGenerateServiceParameterNames.ApplicationKey) || parameters[CrmServiceTokenGenerateServiceParameterNames.ApplicationKey] == null)
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundParameterInCrmServiceTokenGenerateService,
                    DefaultFormatting = "在Crm服务令牌生成服务{0}中，找不到名称为{1}的参数",
                    ReplaceParameters = new List<object>() { this.GetType().FullName, CrmServiceTokenGenerateServiceParameterNames.ApplicationKey }
                };

                throw new UtilityException((int)Errors.NotFoundParameterInCrmServiceTokenGenerateService, fragment);
            }
            if (!(parameters[CrmServiceTokenGenerateServiceParameterNames.ApplicationKey] is string))
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.ParameterTypeNotMatchInCrmServiceTokenGenerateService,
                    DefaultFormatting = "在Crm服务令牌生成服务{0}中，名称为{1}的参数期望类型为{2}，而实际类型为{3}",
                    ReplaceParameters = new List<object>() { this.GetType().FullName, CrmServiceTokenGenerateServiceParameterNames.ApplicationKey, typeof(string).FullName, parameters[CrmServiceTokenGenerateServiceParameterNames.ApplicationKey].GetType().FullName }
                };

                throw new UtilityException((int)Errors.ParameterTypeNotMatchInCrmServiceTokenGenerateService, fragment);
            }
            string strApplcationKey = parameters[CrmServiceTokenGenerateServiceParameterNames.ApplicationKey].ToString();

            if (!parameters.ContainsKey(CrmServiceTokenGenerateServiceParameterNames.CrmUrl) || parameters[CrmServiceTokenGenerateServiceParameterNames.CrmUrl] == null)
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundParameterInCrmServiceTokenGenerateService,
                    DefaultFormatting = "在Crm服务令牌生成服务{0}中，找不到名称为{1}的参数",
                    ReplaceParameters = new List<object>() { this.GetType().FullName, CrmServiceTokenGenerateServiceParameterNames.CrmUrl }
                };

                throw new UtilityException((int)Errors.NotFoundParameterInCrmServiceTokenGenerateService, fragment);
            }
            if (!(parameters[CrmServiceTokenGenerateServiceParameterNames.CrmUrl] is string))
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.ParameterTypeNotMatchInCrmServiceTokenGenerateService,
                    DefaultFormatting = "在Crm服务令牌生成服务{0}中，名称为{1}的参数期望类型为{2}，而实际类型为{3}",
                    ReplaceParameters = new List<object>() { this.GetType().FullName, CrmServiceTokenGenerateServiceParameterNames.CrmUrl, typeof(string).FullName, parameters[CrmServiceTokenGenerateServiceParameterNames.CrmUrl].GetType().FullName }
                };

                throw new UtilityException((int)Errors.ParameterTypeNotMatchInCrmServiceTokenGenerateService, fragment);
            }
            string strCrmUrl = parameters[CrmServiceTokenGenerateServiceParameterNames.CrmUrl].ToString();

            if (!parameters.ContainsKey(CrmServiceTokenGenerateServiceParameterNames.AADId) || parameters[CrmServiceTokenGenerateServiceParameterNames.AADId] == null)
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundParameterInCrmServiceTokenGenerateService,
                    DefaultFormatting = "在Crm服务令牌生成服务{0}中，找不到名称为{1}的参数",
                    ReplaceParameters = new List<object>() { this.GetType().FullName, CrmServiceTokenGenerateServiceParameterNames.AADId }
                };

                throw new UtilityException((int)Errors.NotFoundParameterInCrmServiceTokenGenerateService, fragment);
            }
            if (!(parameters[CrmServiceTokenGenerateServiceParameterNames.AADId] is string))
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.ParameterTypeNotMatchInCrmServiceTokenGenerateService,
                    DefaultFormatting = "在Crm服务令牌生成服务{0}中，名称为{1}的参数期望类型为{2}，而实际类型为{3}",
                    ReplaceParameters = new List<object>() { this.GetType().FullName, CrmServiceTokenGenerateServiceParameterNames.AADId, typeof(string).FullName, parameters[CrmServiceTokenGenerateServiceParameterNames.AADId].GetType().FullName }
                };

                throw new UtilityException((int)Errors.ParameterTypeNotMatchInCrmServiceTokenGenerateService, fragment);
            }
            string strAADId = parameters[CrmServiceTokenGenerateServiceParameterNames.AADId].ToString();

            string strToken = null;
            await GetAuthenticationContext(strCrmUrl,strApplicationId, strApplcationKey, strAADId,async(context)=>
            {
                ClientCredential clientcred = new ClientCredential(strApplicationId,strApplcationKey);
                AuthenticationResult authenticationResult = await context.AcquireTokenAsync(strCrmUrl, clientcred);
                strToken = authenticationResult.AccessToken;            
            });


            return $"Bearer {strToken}";
        }


        private string GenerateKeyString(string crmUrl, string applicationId, string applicationkey, string aadId)
        {
            return JsonSerializerHelper.Serializer(new InnerKey(crmUrl, applicationId, applicationkey, aadId));
        }

        private AuthenticationContext CreateAuthenticationContext(string aadId)
        {
            AuthenticationContext authenticationContext =
             new AuthenticationContext($"https://login.microsoftonline.com/{aadId}");

            return authenticationContext;
        }

        private async Task GetAuthenticationContext(string crmUrl, string applicationId, string applicationkey, string aadId, Func<AuthenticationContext, Task> action)
        {
            var strKey = GenerateKeyString(crmUrl, applicationId, applicationkey, aadId);
            if (!_authenticationContexts.TryGetValue(strKey, out AuthenticationContextContainer contextContainer))
            {

                SharePool<AuthenticationContext> contextPool = new SharePool<AuthenticationContext>("CrmS2S",
                    () =>
                   {
                       AuthenticationContext newContext = CreateAuthenticationContext(aadId);
                       return newContext;
                   },
                (authcContext) =>
                {
                    return true;
                }
                ,
                (authcContext) =>
                {

                },
                async () =>
                {
                    AuthenticationContext newContext = CreateAuthenticationContext(aadId);
                    return await Task.FromResult(newContext);
                }
                ,
                async (authcContext) =>
                {
                    return await Task.FromResult(true);
                }
                ,
                async (authcContext) =>
                {
                    await Task.FromResult(0);
                }
                ,
                _poolLimit
                );

                contextContainer = new AuthenticationContextContainer() { ContextPool = contextPool, LastTime = DateTime.UtcNow };



                lock (_authenticationContexts)
                {
                    if (_authenticationContexts.Count > _limit)
                    {
                        var deleteItem = (from item in _authenticationContexts
                                          orderby item.Value.LastTime
                                          select item
                                          ).FirstOrDefault();
                        if (deleteItem.Key != null)
                        {
                            _authenticationContexts.Remove(deleteItem.Key);
                        }
                    }

                    _authenticationContexts[strKey] = contextContainer;
                }


            }

            AuthenticationContext context = null;

            context = await contextContainer.ContextPool.GetAsync();
            await action(context);
        }

        [DataContract]
        private class InnerKey
        {
            public InnerKey(string crmUrl,string applicationId,string applicationKey,string aadId)
            {
                CrmUrl = crmUrl;
                ApplicationId = applicationId;
                ApplicationKey = applicationKey;
                AADId = aadId;
            }
            [DataMember]
            public string CrmUrl { get; private set; }

            [DataMember]
            public string ApplicationId { get; private set; }
            [DataMember]
            public string ApplicationKey { get; private set; }
            [DataMember]
            public string AADId { get; private set; }
        }

        private class AuthenticationContextContainer
        {
            public SharePool<AuthenticationContext> ContextPool { get; set; }
            public DateTime LastTime { get; set; }
        }

    }
}
