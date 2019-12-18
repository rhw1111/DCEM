///**************************************************************************
//*   
//*   =======================================================================
//*   CLR 版本    ：4.0.30319.42000
//*   命名空间    ：MSCRM.Common.MarketingCloud
//*   文件名称    ：MarketingCloudApiUtil.cs
//*   =======================================================================
//*   创 建 者    ：李廷礼
//*   创建日期    ：2019/10/15 16:14:13 
//*   邮    箱    ：litingxian@live.cn
//*   个人主站    ：https://github.com/tingli1991
//*   功能描述    ：
//*   使用说明    ：
//*   ========================================================================
//*   修改者      ：
//*   修改日期    ：
//*   修改内容    ：
//*   ========================================================================
//*  
//***************************************************************************/


//using log4net;
//using Newtonsoft.Json;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;

//namespace DCEM.Main.Entities.TCenter.MktCloud
//{
//    /// <summary>
//    /// 营销云接口工具类
//    /// </summary>
//    public class MktCloudHttpClientUtil
//    {
//        /// <summary>
//        /// 日志记录器
//        /// </summary>
//        private static readonly ILog _log = LogManager.GetLogger(typeof(MktCloudHttpClientUtil));

//        #region 异步请求方法
//        /// <summary>
//        /// 接口请求
//        /// </summary>
//        /// <param name="param"></param>
//        /// <param name="posturl"></param>
//        /// <param name="accesstoken"></param>
//        /// <returns></returns>
//        public static async Task<MktCloudDataContract> PostAsync(string controller, string action, object param)
//        {
//            return await Task.Run(() => Post(controller, action, param));
//        }

//        /// <summary>
//        /// 接口请求
//        /// </summary>
//        /// <param name="param"></param>
//        /// <param name="posturl"></param>
//        /// <param name="accesstoken"></param>
//        /// <returns></returns>
//        public static async Task<MktCloudDataContract<T>> PostAsync<T>(string controller, string action, object param)
//        {
//            return await Task.Run(() => Post<T>(controller, action, param));
//        }
//        #endregion

//        #region 同步请求方法
//        /// <summary>
//        /// 接口请求
//        /// </summary>
//        /// <param name="param"></param>
//        /// <param name="posturl"></param>
//        /// <param name="accesstoken"></param>
//        /// <returns></returns>
//        public static MktCloudDataContract Post(string controller, string action, object param)
//        {
//            return HttpPost<MktCloudDataContract>(controller, action, param);
//        }

//        /// <summary>
//        /// 接口请求
//        /// </summary>
//        /// <param name="param"></param>
//        /// <param name="posturl"></param>
//        /// <param name="accesstoken"></param>
//        /// <returns></returns>
//        public static MktCloudDataContract<T> Post<T>(string controller, string action, object param)
//        {
//            return HttpPost<MktCloudDataContract<T>>(controller, action, param);
//        }
//        #endregion

//        #region 基础方法
//        /// <summary>
//        /// 接口请求
//        /// </summary>
//        /// <param name="param"></param>
//        /// <param name="posturl"></param>
//        /// <param name="accesstoken"></param>
//        /// <returns></returns>
//        private static T HttpPost<T>(string controller, string action, object param)
//        {
//            T result = default(T);
//            try
//            {
//                string configKey = "CEP_Key_MktApiAuthConfigJson";
//                MktCloudConfigModel mktConfig = GetMktCloudTokenConfigValue(configKey);
//                string accessToken = GetAccessToken(configKey, mktConfig);//获取授权的Token
//                Dictionary<string, string> headers = new Dictionary<string, string> { { "Authorization", $"bearer {accessToken}" } };
//                string apiUrl = GetApiUrl(mktConfig, controller, action);//接口地址
//                result = MktCloudHttpClient.Post<T>(apiUrl, param, headers);
//            }
//            catch (Exception ex)
//            {
//                _log.Error($"【营销云接口调用】发生未经处理的异常：{ex}");
//            }
//            return result;
//        }

//        /// <summary>
//        /// 获取Token
//        /// </summary>
//        /// <param name="configKey"></param>
//        /// <param name="mktConfig"></param>
//        /// <returns></returns>
//        private static string GetAccessToken(string configKey, MktCloudConfigModel mktConfig)
//        {
//            string accessToken = "";
//            if (mktConfig.ExpireTime.HasValue && DateTime.Now < mktConfig.ExpireTime.Value)
//            {
//                //上一次生成的Token有效
//                accessToken = mktConfig.AccessToken;
//            }
//            else
//            {
//                var paramters = new
//                {
//                    scope = mktConfig.Scope,
//                    secret = mktConfig.SecretKey,
//                    account = mktConfig.Account,
//                    channel = mktConfig.ChannelId,
//                    clientId = mktConfig.ClientId,
//                    grantType = mktConfig.GrantType
//                };
//                var apiUrl = GetApiUrl(mktConfig, "user", "oauth2/getToken");//授权地址
//                var accessTokenResult = MktCloudHttpClient.Post<MktCloudDataContract<MktCloudAuthrespModel>>(apiUrl, paramters);
//                if (accessTokenResult.Success.Equals("true", StringComparison.CurrentCultureIgnoreCase))
//                {
//                    mktConfig.ExpireTime = DateTime.Now.AddHours(mktConfig.ExpireHours).AddSeconds(-1);
//                    mktConfig.AccessToken = accessTokenResult.Data?.FirstOrDefault()?.AccessToken;
//                    string configValue = JsonConvert.SerializeObject(mktConfig);
//                    //ConfigUtil.SetConfig(configKey, configValue);
//                    accessToken = mktConfig.AccessToken;
//                }
//            }
//            return accessToken;
//        }

//        /// <summary>
//        /// 获取接口地址
//        /// </summary>
//        /// <param name="controller">控制器路径</param>
//        /// <param name="actionPath">接口路径</param>
//        /// <returns></returns>
//        private static string GetApiUrl(MktCloudConfigModel config, string controller, string actionPath)
//        {
//            return $"{config.BaseApiUrl}/{controller ?? ""}/{config.ApiVersion}/{actionPath ?? ""}";
//        }

//        /// <summary>
//        /// 获取营销云接口配置参数
//        /// </summary>
//        /// <param name="configKey">配置key</param>
//        /// <returns></returns>
//        private static MktCloudConfigModel GetMktCloudTokenConfigValue(string configKey)
//        {
//            return null;
//            //return ConfigUtil.GetConfigValue<MktCloudConfigModel>(configKey);
//        }
//        #endregion
//    }
//}