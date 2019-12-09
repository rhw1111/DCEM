using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 商品全量查询请求参数
    /// </summary>   
    public class QueryProductAllRequest : RequestBase
    {

        /// <summary>
        /// 开始时间:修改时间(闭区间)格式：yyyy-MM-dd HH:mm:ss
        /// </summary>
        public DateTime StartDateTime { get; set; }
        /// <summary>
        /// 结束时间:修改时间(开区间) 格式：yyyy-MM-dd HH:mm:ss
        /// </summary>
        public DateTime EndDateTime { get; set; }
        /// <summary>
        /// 发布渠道,1手机端APP 2:微信小程序 3：PC官网
        /// </summary>
        public string PubulishChanel { get; set; }
        /// <summary>
        /// 每页几条,默认10条
        /// </summary>
        public int PageSize { get; set; }
        /// <summary>
        /// 当前页,默认1
        /// </summary>
        public int PageIndex { get; set; }
    }
    public class QueryDealerRequest : RequestBase
    {

        /// <summary>
        /// 省份编码
        /// </summary>
        public  string ProvinceCode { get; set; }
        /// <summary>
        /// 市编码
        /// </summary>
        public string CityCode { get; set; }
        /// <summary>
        /// 区/县编码
        /// </summary>
        public string DistrictCode { get; set; }
        /// <summary>
        /// 经度
        /// </summary>
        public string X { get; set; }
        /// <summary>
        /// 纬度
        /// </summary>
        public string Y { get; set; }
        /// <summary>
        /// 厅店编码
        /// </summary>
        public string DealerCode { get; set; }

    }

    public class QueryStockQuantityRequest
    {
        /// <summary>
        /// 商品编码
        /// </summary>
        public string ProductCode { get; set; }
        /// <summary>
        /// 商品SKU
        /// </summary>
        public string ProductSkuCode { get; set; }
    }
}
