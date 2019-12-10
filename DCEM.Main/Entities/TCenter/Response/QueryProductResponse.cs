using DCEM.Main.Entities.Response;
using System;
using System.Collections.Generic;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 商品全量查询返回参数
    /// </summary>  
    public class QueryProductByCodeResponse : ResponseBase
    {
        /// <summary>
        /// 商品ID
        /// </summary>
        public int ProductId { get; set; }

        ///<summary>
        ///	商品编码
        ///</summary> 
        public string Code { get; set; }
        ///<summary>
        ///	商品名称
        ///</summary> 
        public string Name { get; set; }
        ///<summary>
        ///	商品类型:类型（1整车：2整车选装件 3：充电桩/枪 4：备件 5：工时 6：卡券类 7业务办理 8施工 9：预约类）	
        ///</summary> 
        public int? ProductType { get; set; }
        ///<summary>
        ///	购买类型:1：c端用户  2：员工 3：试乘试驾/展车
        ///</summary> 
        public int? PurchaseType { get; set; }

        ///<summary>
        ///	税率
        ///</summary> 
        public string TaxCode { get; set; }
        ///<summary>
        ///	所属前端类目
        ///</summary> 
        public ICollection<FrontCategory> FrontCategorys { get; set; }

        ///<summary>
        ///	所属前端类目
        ///</summary> 
        public ICollection<ManageCategory> ManageCategorys { get; set; }
        ///<summary>
        ///	是否需要支付
        ///</summary> 
        public bool IsNeedPay { get; set; }
        ///<summary>
        ///	付款类型：付款类型: 0：积分 1现金
        ///</summary> 
        public int? PaymentType { get; set; }
        ///<summary>
        ///	是否启用订购属性
        ///</summary> 
        public bool IsEnableAttributes { get; set; }
        ///<summary>
        ///	是否需要支付订金
        ///</summary> 
        public bool IsNeedDeposit { get; set; }
        ///<summary>
        ///	支付订金金额
        ///</summary> 
        public decimal Deposit { get; set; }
        ///<summary>
        ///	是否包含服务履约
        ///</summary> 
        public bool IsHasProvider { get; set; }
        ///<summary>
        ///	是否支持配送
        ///</summary> 
        public bool IsSupportDelivery { get; set; }
        ///<summary>
        ///	配送主体类型：1：门店2：备件中心库3：供应商
        ///</summary> 
        public int? DeliveryType { get; set; }
        ///<summary>
        ///	商品零售价格
        ///</summary> 
        public decimal Price { get; set; }
        ///<summary>
        ///	商品兑换所需积分数额
        ///</summary> 
        public int? Integral { get; set; }
        ///<summary>
        ///	物料编号
        ///</summary> 
        public ICollection<string> MateriallCode { get; set; }
        ///<summary>
        ///	商品状态 0:新建 1:上架 可收 2:下架 已回收
        ///</summary> 
        public int? Status { get; set; }
        ///<summary>
        ///	上架时间
        ///</summary> 
        public DateTime UpDateTime { get; set; }
        ///<summary>
        ///	下架时间
        ///</summary> 
        public DateTime DownDateTme { get; set; }

        /// <summary>
        /// 商品简介，一句话描述
        /// </summary>
        public string SaleDescription { get; set; }
        /// <summary>
        /// 商品描述
        /// </summary>
        public string Introduction { get; set; }

        /// <summary>
        /// 售后说明
        /// </summary>
        public string AfterSaleDescription { get; set; }

        /// <summary>
        /// 配送说明
        /// </summary>
        public string ShippingDescription { get; set; }


        /// <summary>
        /// 预约说明
        /// </summary>
        public string BookingDescription { get; set; }



        /// <summary>
        /// 业务办理说明
        /// </summary>
        public string BusinessDescription { get; set; }

        /// <summary>
        /// 交车说明
        /// </summary>
        public string TrafficinStructions { get; set; }
        /// <summary>
        /// 施工说明
        /// </summary>
        public string ConstructDescription { get; set; }

        /// <summary>
        /// 自提办理说明
        /// </summary>
        public string SelfExtraction { get; set; }

        ///<summary>
        ///	是否允许积分抵扣
        ///</summary> 
        public bool IsAllowIntegralDeduction { get; set; }
        ///<summary>
        ///	税率
        ///</summary> 
        public Decimal TaxRate { get; set; }

        ///<summary>
        ///	Sku集合
        ///</summary> 
        public ICollection<sku> SkuData { get; set; }

        ///<summary>
        ///	商品规格集合
        ///</summary> 
        public ICollection<Groups> SpecificationData { get; set; }

        ///<summary>
        ///	商品图片集合
        ///</summary> 
        public ICollection<Images> ImageData { get; set; }

        ///<summary>
        ///	商品订购属性集合
        ///</summary> 
        public ICollection<Attr> AttrData { get; set; }

        ///<summary>
        ///	商品履约集合
        ///</summary> 
        public ICollection<ProviderInstances> ProviderData { get; set; }

        ///<summary>
        ///	订购规则集合
        ///</summary> 
        public ICollection<ProductRule> ProductRules { get; set; }

        ///<summary>
        ///	商品关联关系:商品关联商品Sku集合
        ///</summary> 
        public ICollection<ProductRelatedProduct> ProductRelatedProducts { get; set; }

        ///<summary>
        ///	商品依赖关系，商品依赖商品Sku集合
        ///</summary> 
        public ICollection<ProductDependProduct> ProductDependProducts { get; set; }
    }


    /// <summary>
    /// 商品信息
    /// </summary>
    public class Product
    {
        /// <summary>
        /// 商品ID
        /// </summary>
        public int ProductId { get; set; }

        ///<summary>
        ///	商品编码
        ///</summary> 
        public string Code { get; set; }

        ///<summary>
        ///	商品名称
        ///</summary> 
        public string Name { get; set; }

        ///<summary>
        ///	商品类型:类型（1整车：2整车选装件 3：充电桩/枪 4：备件 5：工时 6：卡券类 7业务办理 8施工 9：预约类）	
        ///</summary> 
        public int? ProductType { get; set; }

        ///<summary>
        ///	购买类型:1：c端用户  2：员工 3：试乘试驾/展车
        ///</summary> 
        public int? PurchaseType { get; set; }

        ///<summary>
        ///	税率
        ///</summary> 
        public string TaxCode { get; set; }

        ///<summary>
        ///	是否需要支付
        ///</summary> 
        public bool IsNeedPay { get; set; }

        ///<summary>
        ///	付款类型：付款类型: 0：积分 1现金
        ///</summary> 
        public int? PaymentType { get; set; }

        /// <summary>
        /// 基础物料编码
        /// </summary>
        public string MaterielBaseCode { get; set; }

        /// <summary>
        /// 基础价格
        /// </summary>
        public decimal BasePrice { get; set; }

        ///<summary>
        ///	是否启用订购属性
        ///</summary> 
        public bool IsEnableAttributes { get; set; }

        ///<summary>
        ///	是否需要支付订金
        ///</summary> 
        public bool IsNeedDeposit { get; set; }

        ///<summary>
        ///	支付订金金额
        ///</summary> 
        public decimal Deposit { get; set; }

        ///<summary>
        ///	是否包含服务履约
        ///</summary> 
        public bool IsHasProvider { get; set; }

        ///<summary>
        ///	是否支持配送
        ///</summary> 
        public bool IsSupportDelivery { get; set; }

        ///<summary>
        ///	配送主体类型：1：门店2：备件中心库3：供应商
        ///</summary> 
        public int? DeliveryType { get; set; }

        ///<summary>
        ///	商品零售价格
        ///</summary> 
        public decimal Price { get; set; }

        ///<summary>
        ///	商品兑换所需积分数额
        ///</summary> 
        public int? Integral { get; set; }

        ///<summary>
        ///	物料编号
        ///</summary> 
        public ICollection<string> MateriallCode { get; set; }

        ///<summary>
        ///	商品状态 0:新建 1:上架 可收 2:下架 已回收
        ///</summary> 
        public int? Status { get; set; }

        ///<summary>
        ///	上架时间
        ///</summary> 
        public DateTime UpDateTime { get; set; }

        ///<summary>
        ///	下架时间
        ///</summary> 
        public DateTime DownDateTme { get; set; }

        /// <summary>
        /// 商品简介，一句话描述
        /// </summary>
        public string SaleDescription { get; set; }
        /// <summary>
        /// 商品描述
        /// </summary>
        public string Introduction { get; set; }

        /// <summary>
        /// 售后说明
        /// </summary>
        public string AfterSaleDescription { get; set; }

        /// <summary>
        /// 配送说明
        /// </summary>
        public string ShippingDescription { get; set; }


        /// <summary>
        /// 预约说明
        /// </summary>
        public string BookingDescription { get; set; }

        /// <summary>
        /// 业务办理说明
        /// </summary>
        public string BusinessDescription { get; set; }

        /// <summary>
        /// 交车说明
        /// </summary>
        public string TrafficinStructions { get; set; }
        /// <summary>
        /// 施工说明
        /// </summary>
        public string ConstructDescription { get; set; }

        /// <summary>
        /// 自提办理说明
        /// </summary>
        public string SelfExtraction { get; set; }

        ///<summary>
        ///	是否允许积分抵扣
        ///</summary> 
        public bool IsAllowIntegralDeduction { get; set; }

        /// <summary>
        /// 是否是全渠道发布
        /// 判断条件：
        /// </summary>
        public bool IsAllChannel { get; set; }

        /// <summary>
        /// 特定渠道列表
        /// </summary>
        public List<PublishChannelResponse> PublishChannelList { get; set; }

        ///<summary>
        ///	税率
        ///</summary> 
        public Decimal TaxRate { get; set; }

        ///<summary>
        ///	Sku集合
        ///</summary> 
        public ICollection<sku> SkuData { get; set; }

        ///<summary>
        ///	商品规格集合
        ///</summary> 
        public ICollection<Groups> SpecificationData { get; set; }

        ///<summary>
        ///	商品图片集合
        ///</summary> 
        public ICollection<Images> ImageData { get; set; }

        ///<summary>
        ///	商品订购属性集合
        ///</summary> 
        public ICollection<Attr> AttrData { get; set; }

        ///<summary>
        ///	商品履约集合
        ///</summary> 
        public ICollection<ProviderInstances> ProviderData { get; set; }

        ///<summary>
        ///	订购规则集合
        ///</summary> 
        public ICollection<ProductRule> ProductRules { get; set; }

        ///<summary>
        ///	商品关联关系:商品关联商品Sku集合
        ///</summary> 
        public ICollection<ProductRelatedProduct> ProductRelatedProducts { get; set; }

        ///<summary>
        ///	商品依赖关系，商品依赖商品Sku集合
        ///</summary> 
        public ICollection<ProductDependProduct> ProductDependProducts { get; set; }

        ///<summary>
        ///	所属前端类目
        ///</summary> 
        public ICollection<FrontCategory> FrontCategorys { get; set; }

        ///<summary>
        ///	所属前端类目
        ///</summary> 
        public ICollection<ManageCategory> ManageCategorys { get; set; }
    }

    public class SkuStock
    {
        /// <summary>
        /// 商品SKU
        /// </summary>
        public string SkuCode { get; set; }
        /// <summary>
        /// 数量
        /// </summary>
        public int Count { get; set; }
    }

    public class SkuStockModel
    {
        /// <summary>
        /// 商品SKU
        /// </summary>
        public string SkuCode { get; set; }
        /// <summary>
        /// 物料码
        /// </summary>
        public string MaterielCode { get; set; }
        /// <summary>
        /// 商品编码
        /// </summary>
        public string ProductCode { get; set; }
    }
}
