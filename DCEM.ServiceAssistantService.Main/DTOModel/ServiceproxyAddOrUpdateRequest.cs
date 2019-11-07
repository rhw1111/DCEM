using System;
using System.Collections.Generic;
using System.Text;
using MSLibrary.Xrm;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    public class ServiceproxyAddOrUpdateRequest
    {
        /// <summary>
        /// 操作编码  1、新增  2、修改
        /// </summary>
        public int actioncode { get; set; }
        public Serviceproxy serviceproxy { get; set; }
        public List<Serviceordercheckresult> serviceordercheckresultArray { get; set; }
        public List<Serviceorderrepairitem> serviceorderrepairitemArray { get; set; }
        public List<Serviceorderpart> serviceorderpartArray { get; set; }
        public ServiceproxyAddOrUpdateRequest()
        {
            serviceproxy = new Serviceproxy();
            serviceordercheckresultArray = new List<Serviceordercheckresult>();
            serviceorderrepairitemArray = new List<Serviceorderrepairitem>();
            serviceorderpartArray = new List<Serviceorderpart>();
        }


    }

    #region 服务委托书对象
    public class Serviceproxy
    {
        /// <summary>
        /// 服务委托书id
        /// </summary>
        public string serviceproxyid { get; set; }
        /// <summary>
        /// 车辆VIN
        /// </summary>
        public string customerid { get; set; }
        /// <summary>
        /// 全名
        /// </summary>
        public string customername { get; set; }
        /// <summary>
        /// 车牌
        /// </summary>
        public string carplate { get; set; }
        /// <summary>
        /// 手机
        /// </summary>
        public string customerphone { get; set; }
        /// <summary>
        /// 送修人
        /// </summary>
        public string shuttlename { get; set; }
        /// <summary>
        /// 送修人手机
        /// </summary>
        public string shuttlephone { get; set; }
        /// <summary>
        /// 进店电量
        /// </summary>
        public double? inpower { get; set; }
        /// <summary>
        /// 进店油量
        /// </summary>
        public int? oilquantity { get; set; }
        /// <summary>
        /// 进店里程
        /// </summary>
        public double? mileage { get; set; }
        /// <summary>
        /// 到店时间
        /// </summary>
        public DateTime? arrivalon { get; set; }
        /// <summary>
        /// 客户描述
        /// </summary>
        public string customercomment { get; set; }
        /// <summary>
        /// 单据类型 10=问诊单  20=服务委托书
        /// </summary>
        public int currenttype { get; set; }
        /// <summary>
        /// 厅店
        /// </summary>
        public string dealerid { get; set; }
    }
    #endregion

    #region 环检项
    public class Serviceordercheckresult
    {
        /// <summary>
        /// 环检项Id
        /// </summary>
        public string checkreultid { get; set; }
        /// <summary>
        /// 环检项名称
        /// </summary>
        public string name { get; set; }
        /// <summary>
        /// 检查结果
        /// </summary>
        public string checkreult { get; set; }

    }
    #endregion

    #region 维修项目
    public class Serviceorderrepairitem
    {
        /// <summary>
        /// 项目代码
        /// </summary>
        public string repairitemid { get; set; }
        /// <summary>
        /// 项目名称
        /// </summary>
        public string name { get; set; }
        /// <summary>
        /// 维修类别
        /// </summary>
        public string repairitemtypeid { get; set; }
        /// <summary>
        /// 维修类型
        /// </summary>
        public string repairitemtypedetailid { get; set; }
        /// <summary>
        /// 工时单价
        /// </summary>
        public decimal price { get; set; }
        /// <summary>
        /// 工时数量
        /// </summary>
        public decimal workinghour { get; set; }
        /// <summary>
        /// 折扣
        /// </summary>
        public decimal discount { get; set; }
        /// <summary>
        /// 维修费用(总价)
        /// </summary>
        public string repairamount { get; set; }

    }
    #endregion

    #region 维修配件
    public class Serviceorderpart
    {
        /// <summary>
        /// 零件代码
        /// </summary>
        public string partsid { get; set; }
        /// <summary>
        /// 零件名称
        /// </summary>
        public string partsname { get; set; }
        /// <summary>
        /// 维修类别
        /// </summary>
        public string repairitemtypeid { get; set; }
        /// <summary>
        /// 维修类型
        /// </summary>
        public string repairitemtypedetailid { get; set; }
        /// <summary>
        /// 零件单价
        /// </summary>
        public decimal price { get; set; }
        /// <summary>
        /// 零件数量
        /// </summary>
        public decimal quantity { get; set; }
        /// <summary>
        /// 折扣
        /// </summary>
        public decimal discount { get; set; }
        /// <summary>
        /// 总金额
        /// </summary>
        public decimal amount { get; set; }

    }
    #endregion

}
