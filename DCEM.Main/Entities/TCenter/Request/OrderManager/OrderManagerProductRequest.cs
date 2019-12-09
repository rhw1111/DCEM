/**************************************************************************
*   
*   =======================================================================
*   CLR 版本    ：4.0.30319.42000
*   命名空间    ：DCEM.Main.Entities.Request.OrderManager
*   文件名称    ：OrderManagerProductRequest.cs
*   =======================================================================
*   创 建 者    ：李廷礼
*   创建日期    ：2019/9/10 11:24:59 
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


using System.Collections.Generic;

namespace DCEM.Main.Entities.Request.OrderManager
{
    /// <summary>
    /// 订单管理-创建订单-产品列表
    /// </summary>
    public class OrderManagerProductRequest
    {
        ///<summary>
        ///	商品编号
        ///</summary> 
        public string ProductCode { get; set; }

        ///<summary>
        ///	订购属性唯一编码(SKU)   
        ///</summary> 
        public string SkuCode { get; set; }

        ///<summary>
        ///	数量
        ///</summary> 
        public int OrderQty { get; set; }

        ///<summary>
        ///积分	
        ///</summary> 
        public int Integral { get; set; }

        ///<summary>
        ///总积分数	
        ///</summary> 
        public int Totalintegral { get; set; }

        ///<summary>
        ///单价	
        ///</summary> 
        public decimal UnitPrice { get; set; }

        /////<summary>
        /////结算单价	
        /////</summary> 
        //public decimal ListPrice { get; set; }

        ///<summary>
        ///	商品(SKU)对应图片地址   
        ///</summary> 
        public string ImageUrl { get; set; }

        ///<summary>
        ///	总价格
        ///</summary> 
        public decimal TotalPrice { get; set; }

        ///<summary>
        ///	交货方式（1自提，2配送）	
        ///</summary> 
        public int DeliveryType { get; set; }

        ///<summary>
        ///	订单履约属性信息	
        ///</summary> 
        public ICollection<OrderManagerProviderRquest> ProviderParams { get; set; }
    }
}