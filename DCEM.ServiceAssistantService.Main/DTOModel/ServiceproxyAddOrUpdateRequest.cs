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

        public ServiceproxyAddOrUpdateRequest()
        {
            serviceproxy = new Serviceproxy();
            serviceordercheckresultArray = new List<Serviceordercheckresult>();
        }


    }

    #region 服务委托书对象
    public class Serviceproxy
    {
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


}
