/**************************************************************************
*   
*   =======================================================================
*   CLR 版本    ：4.0.30319.42000
*   命名空间    ：DCEM.Main.Entities.Request.OrderManager
*   文件名称    ：CancelOrderRequest.cs
*   =======================================================================
*   创 建 者    ：李廷礼
*   创建日期    ：2019/11/7 11:07:24 
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

namespace DCEM.Main.Entities.Request.OrderManager
{
    /// <summary>
    /// 大订订单取消接口请求参数
    /// </summary>
    public class CancelOrderRequest
    {
        ///// <summary>
        ///// 用户Id
        ///// </summary>
        //[JsonProperty("userId")]
        //public string UserId { get; set; }

        /// <summary>
        /// 综合订单编号
        /// </summary>
        public string OrderCode { get; set; }

        ///// <summary>
        ///// 取消原因
        ///// </summary>
        //[JsonProperty("cancelReason")]
        //public string CancelReason { get; set; }
    }
}