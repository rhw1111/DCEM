using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 订单包含商品集合信息
    /// </summary>
    public class ProductModel
    {
        ///<summary>
        ///	商品编号
        ///</summary> 
        public string ProductCode { get; set; }
        /// <summary>
        /// 商品名称
        /// </summary>
        public string ProductName { get; set; }
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
        ///<summary>
        ///结算单价	
        ///</summary> 
        public decimal ListPrice { get; set; }
        ///<summary>
        ///	商品(SKU)对应图片地址   
        ///</summary> 
        public string ImageUrl { get; set; }
        ///<summary>
        ///	总价格
        ///</summary> 
        public decimal? TotalPrice { get; set; }
        ///<summary>
        ///	交货方式（1自提，2配送）	
        ///</summary> 
        public int DeliveryType { get; set; }
        /// <summary>
        /// 子订单审批状态状态（1正常 2 审批中 3.审批通过 4审批驳回    ）
        /// </summary>
        public int OrderDetailApproverStatus { get; set; }
        ///<summary>
        ///	履约实例编号	
        ///</summary> 
        public string ProviderInstanceCode { get; set; }
        ///<summary>
        ///	订单履约属性信息	
        ///</summary> 
        public ICollection<ProviderParam> ProviderParams { get; set; }
    }

    /// <summary>
    /// 订单履约属性信息
    /// </summary>
    public class ProviderParam
    {
        ///<summary>
        ///	履约参数编号
        ///</summary> 
        public string ProviderCode { get; set; }
        ///<summary>
        ///	履约参数值
        ///</summary> 
        public string ProviderValue { get; set; }
    }

    /// <summary>
    /// 数据库返回商品实体
    /// </summary>
    public class ProductEntityModel : ProductModel
    {
        ///<summary>
        ///	(SKUID)   
        ///</summary> 
        public int ProductSkuId { get; set; }
        ///<summary>
        ///	订单编号
        ///</summary> 
        public string OrderCode { get; set; }
        /// <summary>
        /// 子订单ID
        /// </summary>
        public int OrderDetailId { get; set; }
        
    }
    /// <summary>
    /// 数据库返回商品实体
    /// </summary>
    public class ProductForSubEntityModel : ProductModel
    {
        ///<summary>
        ///	(SKUID)   
        ///</summary> 
        public int ProductSkuId { get; set; }
        ///<summary>
        ///	订单编号
        ///</summary> 
        public string OrderCode { get; set; }
        /// <summary>
        /// 子订单ID
        /// </summary>
        public int OrderDetailId { get; set; }

        public int SuborderId { get; set; }
        public int SuborderType { get; set; }

    }
}
