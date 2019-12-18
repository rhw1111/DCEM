/**************************************************************************
*   
*   =======================================================================
*   CLR 版本    ：4.0.30319.42000
*   命名空间    ：MSCRM.Common.MktCloud
*   文件名称    ：MktCloudAuthrespModel.cs
*   =======================================================================
*   创 建 者    ：李廷礼
*   创建日期    ：2019/10/15 18:22:31 
*   邮    箱    ：litingxian@live.cn
*   个人主站    ：https://github.com/tingli1991
*   功能描述    ：
*   使用说明    ：
*   ========================================================================
*   修改者      ：
*   修改日期    ：
*   修改内容    ：
*   ========================================================================
*  
***************************************************************************/

using Newtonsoft.Json;

namespace DCEM.Main.Entities.TCenter.MktCloud
{
    /// <summary>
    /// 
    /// </summary>
    public class MktCloudAuthrespModel
    {
        /// <summary>
        /// 
        /// </summary>
        [JsonProperty("mobilePhone")]
        public string MobilePhone { get; set; }

        /// <summary>
        /// accessToken
        /// </summary>
        [JsonProperty("accessToken")]
        public string AccessToken { get; set; }
    }
}