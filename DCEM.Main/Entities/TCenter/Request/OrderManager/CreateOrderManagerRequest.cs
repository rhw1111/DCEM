/**************************************************************************
*   
*   =======================================================================
*   CLR 版本    ：4.0.30319.42000
*   命名空间    ：DCEM.Main.Entities.Request.OrderManager
*   文件名称    ：CreateOrderManagerRequest.cs
*   =======================================================================
*   创 建 者    ：李廷礼
*   创建日期    ：2019/9/10 11:16:27 
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


using DCEM.Main.Entities.Request.OrderManager;
using System.Collections.Generic;

namespace DCEM.Main.Entities.Request
{
    /// <summary>
    /// 创建订单请求参数
    /// </summary>
    public class CreateOrderManagerRequest : RequestBase
    {
        ///<summary>
        ///	订单主信息
        ///</summary> 
        public OrderManagerDataRequest OrderData { get; set; }

        ///<summary>
        ///订单包含商品集合信息	
        ///</summary> 
        public List<OrderManagerProductRequest> Products { get; set; }

        /// <summary>
        /// 支付记录列表
        /// </summary>
        public List<Payment.SyncPayedRecordsRequest> PayRecordsList { get; set; }
    }
}