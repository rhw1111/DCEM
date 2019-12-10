/**************************************************************************
*   
*   =======================================================================
*   CLR 版本    ：4.0.30319.42000
*   命名空间    ：DCEM.Main.Entities.Request.OrderManager
*   文件名称    ：OrderManagerPaymentStatusRequest.cs
*   =======================================================================
*   创 建 者    ：李廷礼
*   创建日期    ：2019/9/10 11:22:27 
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

namespace DCEM.Main.Entities.Request.OrderManager
{
    /// <summary>
    /// 订单管理-创建订单-支付状态集合
    /// </summary>
    public class OrderManagerPaymentStatusRequest
    {
        /// <summary>
        /// 支付状态：不需要支付=0, 等待支付=1 支付成功=3  2019-4-3新增
        /// </summary>
        public int Status { get; set; }

        /// <summary>
        /// 处理时间 时间格式字符串：yyyy-MM-dd HH:mm:ss
        /// </summary>
        public DateTime HandlerTime { get; set; }
    }
}