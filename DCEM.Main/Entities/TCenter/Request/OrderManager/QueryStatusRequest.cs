﻿/**************************************************************************
*   
*   =======================================================================
*   CLR 版本    ：4.0.30319.42000
*   命名空间    ：DCEM.Main.Entities.Request.OrderManager
*   文件名称    ：QueryStatusRequest.cs
*   =======================================================================
*   创 建 者    ：李廷礼
*   创建日期    ：2019/9/20 15:56:03 
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


namespace DCEM.Main.Entities.Request.OrderManager
{
    /// <summary>
    /// 订单状态查询请求参数
    /// </summary>
    public class QueryStatusRequest
    {
        /// <summary>
        /// 订单编号
        /// 备注
        ///     综合订单编号或商城订单编号
        /// </summary>
        public string OrderCode { get; set; }
    }
}