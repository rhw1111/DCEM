using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    #region 1-2.前端类目
    public class FrontCategoryBO
    {
        ///<summary>
        ///	类目编码
        ///</summary> 
        public int ProductCategoryCode { get; set; }
        ///<summary>
        ///	类目名称
        ///</summary> 
        public string Name { get; set; }
    }

    #endregion

    #region 1-2.管理类目
    public class ManageCategoryBO
    {
        ///<summary>
        ///	类目编码
        ///</summary> 
        public int ProductCategoryCode { get; set; }
        ///<summary>
        ///	类目名称
        ///</summary> 
        public string Name { get; set; }
    }

    #endregion


    #region 2.商品规格参数

    public class ProductSpecificatGroupsBO
    {
        ///<summary>
        ///	分组名称
        ///</summary> 
        public string GroupName { get; set; }
        ///<summary>
        ///	分组排序
        ///</summary> 
        public int? GroupIndex { get; set; }

        public int GroupId { get; set; }
        public int ProductId { get; set; }
    }
    public class ProductSpecificatBO
    {
        public int ProductId { get; set; }

        ///<summary>
        ///	分组名称
        ///</summary> 
        public string GroupName { get; set; }
        ///<summary>
        ///	分组排序
        ///</summary> 
        public int? GroupIndex { get; set; }

        public int GroupId { get; set; }
        ///<summary>
        ///	参数名
        ///</summary> 
        public string Key { get; set; }
        ///<summary>
        ///	参数值
        ///</summary> 
        public string Value { get; set; }
        ///<summary>
        ///	参数排序
        ///</summary> 
        public int? Index { get; set; }
    }
    #endregion

    #region 3.商品订购属性

    public class AttrGroupBO
    {
        public int ProductId { get; set; }

        public int ProductAttrId { get; set; }
        ///<summary>
        ///	属性名称
        ///</summary> 
        public string AttrName { get; set; }
        ///<summary>
        ///	属性排序
        ///</summary> 
        public int? AttrIndex { get; set; }
        ///<summary>
        ///	属性值集合
        ///</summary> 
        public ICollection<AttrValueBO> Values { get; set; }

    }
    /// <summary>
    /// 订购属性值
    /// </summary>
    public class AttrValueBO
    {
        public int ProductId { get; set; }
        /// <summary>
        /// 订购属性ID
        /// </summary>
        public int ProductAttrId { get; set; }
        ///<summary>
        ///	属性值
        ///</summary> 
        public string Value { get; set; }
        ///<summary>
        ///	排序
        ///</summary> 
        public int? Index { get; set; }
        ///<summary>
        ///	小图标
        ///</summary> 
        public string Icon { get; set; }
        ///<summary>
        ///	是否默认选中
        ///</summary> 
        public bool DefaultSelect { get; set; }

    }
    #endregion

    #region 4.SKU
    public class SKUBOModel
    {
        public int ProductId { get; set; }
        //<summary>
        ///	SkuID
        ///</summary> 
        public int ProductSkuId { get; set; }

        //<summary>
        ///	Sku编号
        ///</summary> 
        public string SkuCode { get; set; }
        ///<summary>
        ///	积分数
        ///</summary> 
        public int? Integral { get; set; }
        ///<summary>
        ///	市场价格
        ///</summary> 
        public decimal Price { get; set; }
        ///<summary>
        ///	结算价格
        ///</summary> 
        public decimal SettlementPrice { get; set; }
        ///<summary>
        ///	物料编号
        ///</summary> 
        public string MaterielCode { get; set; }
        /// <summary>
        /// 是否是系统自动创建
        /// </summary>
        public bool? IsSys { get; set; }

        ///<summary>
        ///	订购属性集合
        ///</summary> 
        public ICollection<AttrGroupBO> Arrts { get; set; }

    }

    #endregion

    #region 5.商品图片
    public class ImagesBOModel
    {
        public int ProductId { get; set; }
        ///<summary>
        ///	图片名称
        ///</summary> 
        public string Name { get; set; }
        ///<summary>
        ///	图片提示语：鼠标悬浮提示语
        ///</summary> 
        public string AltText { get; set; }
        ///<summary>
        ///	类型
        ///</summary> 
        public int? Category { get; set; }
        ///<summary>
        ///	排序
        ///</summary> 
        public int? Index { get; set; }
        ///<summary>
        ///	图片地址
        ///</summary> 
        public string Url { get; set; }
        ///<summary>
        ///	是否默认主图
        ///</summary> 
        public int? IsPrimary { get; set; }
    }
    #endregion

    #region 6.商品Provider实例 
    public class ProviderInstancesBO
    {
        public int ProductId { get; set; }

        public int providerInstanceId { get; set; }
        ///<summary>
        ///	实例名称
        ///</summary> 
        public string InstanceName { get; set; }
        ///<summary>
        ///	实例编码
        ///</summary> 
        public string InstanceCode { get; set; }
        ///<summary>
        ///	Provider说明
        ///</summary> 
        public string InstanceDes { get; set; }
        ///<summary>
        ///	参数采集方式0：C端采集:1：B端采集
        ///</summary> 
        public int? CollectWay { get; set; }
        ///<summary>
        ///	实例类型：0：自动1：人工
        ///</summary> 
        public int? InstanceType { get; set; }
        ///<summary>
        ///	实例参数
        ///</summary> 
        public ICollection<InstanceParamBO> InstanceParams { get; set; }

    }
    /// <summary>
    /// 履约实例参数
    /// </summary>
    public class InstanceParamBO
    {
        public int ProductId { get; set; }
        /// <summary>
        /// 实例ID
        /// </summary>
        public int providerInstanceId { get; set; }
        public int InstanceParameterId { get; set; }

        ///<summary>
        ///	参数名称
        ///</summary> 
        public string Name { get; set; }
        ///<summary>
        ///	参数代码
        ///</summary> 
        public string Code { get; set; }
        ///<summary>
        ///	参数类型：1:字符串，2:数字，3:日期，4:枚举
        ///</summary> 
        public int? Type { get; set; }
        ///<summary>
        ///	参数长度
        ///</summary> 
        public int? Length { get; set; }
        ///<summary>
        ///	参数精度
        ///</summary> 
        public int? JD { get; set; }
        ///<summary>
        ///	是否必填
        ///</summary> 
        public bool Must { get; set; }
        ///<summary>
        ///	界面显示序号
        ///</summary> 
        public string No { get; set; }
        ///<summary>
        ///	界面输入说明
        ///</summary> 
        public string Desc { get; set; }
        ///<summary>
        ///	枚举值集合List
        ///</summary> 
        public ICollection<InstanceParamEnumValueBO> EnumValues { get; set; }
    }
    /// <summary>
    /// 枚举参数
    /// </summary>
    public class InstanceParamEnumValueBO
    {
        public int ProductId { get; set; }
        /// <summary>
        /// 实例ID
        /// </summary>
        public int providerparamId { get; set; }
        ///<summary>
        ///	枚举编号
        ///</summary> 
        public int? No { get; set; }
        ///<summary>
        ///	枚举名称
        ///</summary> 
        public string Value { get; set; }
        ///<summary>
        ///	枚举编码
        ///</summary> 
        public string Code { get; set; }
    }
    #endregion

    #region 7.商品订购规则
    public class ProductRuleBO
    {
        public int ProductId { get; set; }

        ///<summary>
        ///	产品订购规则ID
        ///</summary> 
        public int? ProductRuleId { get; set; }
        ///<summary>
        ///	产品订购规则名称
        ///</summary> 
        public string RuleName { get; set; }
        ///<summary>
        ///	生效开始时间（闭区间）	
        ///</summary> 
        public DateTime ValidStartTime { get; set; }
        ///<summary>
        ///	结束时间（开区间）	
        ///</summary> 
        public DateTime ValidendTime { get; set; }
        ///<summary>
        ///	规则类型1-产品购买白名单；2-产品购买黑名单3-产品购买数量限制
        ///</summary> 
        public int? RuleType { get; set; }
        ///<summary>
        ///	订购数量
        ///</summary> 
        public int? PurchaseNumber { get; set; }
        public int? WhiteId { get; set; }
        public string WhiteName { get; set; }
        public int? BlackId { get; set; }
        public string BlackName { get; set; }
        ///<summary>
        ///	黑名单用户ID集合
        ///</summary> 
        public ICollection<string> ProductBlacklistRule { get; set; }
        ///<summary>
        ///	白名单用户ID集合
        ///</summary> 
        public ICollection<string> ProductWhitelistRule { get; set; }
    }
    #endregion

    #region 8.商品关联关系
    public class ProductRelatedProductBO
    {
        public int ProductId { get; set; }

        ///<summary>
        ///	商品编号，关联商品时，使用商品编号进行关联
        ///</summary> 
        public string ProductCode { get; set; }
        ///<summary>
        ///	商品Sku,若商品没有启用订购属性则SKUCode为空，若商品启用了订购属性则不为空
        ///</summary> 
        public string SKUCode { get; set; }
        ///<summary>
        ///	关联商品编码，关联商品的商品编码
        ///</summary> 
        public string RelatedProductCode { get; set; }
        ///<summary>
        ///	关联商品sku，若商品没有启用订购属性则SKUCode为空，若商品启用了订购属性则不为空
        ///</summary> 
        public string RelatedSkuCode { get; set; }
        ///<summary>
        ///	排列序号
        ///</summary> 
        public int? SortNumber { get; set; }
    }
    #endregion

    #region 9.商品依赖关系
    public class ProductDependProductBO
    {
        public int ProductId { get; set; }
        ///<summary>
        ///	商品Sku
        ///</summary> 
        public string ProductCode { get; set; }
        ///<summary>
        ///	若商品没有启用订购属性则SKUCode为空，若商品启用了订购属性则不为空
        ///</summary> 
        public string ProductSku { get; set; }
        ///<summary>
        ///	依赖商品编码
        ///</summary> 
        public string DependProductCode { get; set; }
        ///<summary>
        ///	依赖商品Sku，商品没有启用订购属性则SKUCode为空，若商品启用了订购属性则不为空
        ///</summary> 
        public string DependProductSku { get; set; }
    }
    #endregion

    #region 1.商品查询主数据
    /// <summary>
    /// 商品查询业务实体
    /// </summary>
    public class ProductDetailBOModel
    {
        /// <summary>
        /// 产品ID
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

        /// <summary>
        /// 所属前端类目
        /// </summary>
        public string belongedchannelcategory { get; set; }
        /// <summary>
        /// 所属管理类目
        /// </summary>
        public string belongedccategory { get; set; }
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
        ///	订金金额
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
        /// 是否需要审核
        /// </summary>
        public bool IsAuth { get; set; }

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
        /// <summary>
        /// 默认skuId
        /// </summary>
        public int? DefaultSkuId { get; set; }
        ///<summary>
        ///	是否允许积分抵扣
        ///</summary> 
        public bool IsAllowIntegralDeduction { get; set; }
        ///<summary>
        ///	税率
        ///</summary> 
        public Decimal? TaxRate { get; set; }
        /// <summary>
        /// 税率编号
        /// </summary>
        public string TaxRateCode { get; set; }
    }

    #endregion

    /// <summary>
    /// 1-3.商品全量查询分页 BO模型
    /// </summary>
    public class ProductALLPageBOModel
    {
        /// <summary>
        /// 产品ID
        /// </summary>
        public int ProductId { get; set; }
        ///<summary>
        ///	商品编码
        ///</summary> 
        public string ProductCode { get; set; }
        ///<summary>
        ///	商品名称
        ///</summary> 
        public string Name { get; set; }
        ///<summary>
        ///	修改时间
        ///</summary> 
        public DateTime ModifiedTime { get; set; }

    }
}
