/**************************************************************************
*   
*   =======================================================================
*   CLR 版本    ：4.0.30319.42000
*   命名空间    ：DCEM.Main.Entities.Response.OrderManager
*   文件名称    ：CreateOrderManagerResponse.cs
*   =======================================================================
*   创 建 者    ：李廷礼
*   创建日期    ：2019/9/10 11:36:58 
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

namespace DCEM.Main.Entities.Response.OrderManager
{
    /// <summary>
    /// 订单管理-创建订单-返回结果
    /// </summary>
    public class CreateOrderManagerResponse : ExcuteResutResponse
    {
        /// <summary>
        /// 订单Id
        /// </summary>
        public Guid? OrderId { get; set; }

        /// <summary>
        /// 订单编号
        /// </summary>
        public string OrderCode { set; get; }
    }
}