/**************************************************************************
*   
*   =======================================================================
*   CLR 版本    ：4.0.30319.42000
*   命名空间    ：MSCRM.Common.MarketingCloud
*   文件名称    ：MarketingCloudConfigModel.cs
*   =======================================================================
*   创 建 者    ：李廷礼
*   创建日期    ：2019/10/15 16:18:48 
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

using System;

namespace DCEM.Main.Entities.TCenter.MktCloud
{
    /// <summary>
    /// 营销云配置信息模型
    /// </summary>
    public class MktCloudConfigModel
    {
        /// <summary>
        /// 接口基础地址
        /// </summary>
        public string BaseApiUrl { get; set; }

        /// <summary>
        /// 接口版本号
        /// </summary>
        public string ApiVersion { get; set; }

        /// <summary>
        /// Token过期小时数
        /// </summary>
        public int ExpireHours { get; set; }

        /// <summary>
        /// Token的过期时间
        /// </summary>
        public DateTime? ExpireTime { get; set; }

        /// <summary>
        /// 鉴权的Token值
        /// </summary>
        public string AccessToken { get; set; }

        /// <summary>
        /// 账户信息
        /// </summary>
        public string Account { get; set; }

        /// <summary>
        /// 渠道Id
        /// </summary>
        public string ChannelId { get; set; }

        /// <summary>
        /// 客户端Id
        /// </summary>
        public string ClientId { get; set; }

        /// <summary>
        /// 鉴权密钥
        /// </summary>
        public string SecretKey { get; set; }

        /// <summary>
        /// 范围
        /// </summary>
        public string Scope { get; set; }

        /// <summary>
        /// 预授权类型
        /// </summary>
        public string GrantType { get; set; }
    }
}