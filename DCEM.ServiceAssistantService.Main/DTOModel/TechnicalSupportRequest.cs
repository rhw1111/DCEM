using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    public class TechnicalSupportRequest
    {
        /// <summary>
        /// 主键GUID
        /// </summary>
        public string Id { get; set; }
        /// <summary>
        /// 实体名称
        /// </summary>
        public string EntityName { get; set; }
        /// <summary>
        /// 技术支持申请单ID
        /// </summary>
        public string mcs_supportorderid { get; set; }
        /// <summary>
        /// 服务委托书
        /// </summary>
        public string mcs_serviceorderid { get; set; }
        /// <summary>
        /// 编号
        /// </summary>
        public string mcs_name { get; set; }
        /// <summary>
        /// 技术主管
        /// </summary>
        public string mcs_repairnameid { get; set; }
        /// <summary>
        /// 服务顾问
        /// </summary>
        public string mcs_serviceadvisorid { get; set; }
        /// <summary>
        /// 维修日期
        /// </summary>
        public DateTime? mcs_repairdate { get; set; }
        /// <summary>
        /// 状态
        /// </summary>
        public int mcs_orderstatus { get; set; }
        /// <summary>
        /// 主题
        /// </summary>
        public string mcs_title { get; set; }
        /// <summary>
        /// 邮箱  单行文本
        /// </summary>
        public string mcs_email { get; set; }
        /// <summary>
        /// 电话 单行文本
        /// </summary>
        public string mcs_phone { get; set; }
        /// <summary>
        /// VIN码    查找
        /// </summary>
        public string mcs_customerid { get; set; }
        /// <summary>
        /// 电池型号 单行文本
        /// </summary>
        public string mcs_batterymodel { get; set; }
        /// <summary>
        /// 电池序列号   单行文本
        /// </summary>
        public string mcs_batteryserialnumber { get; set; }
        /// <summary>
        /// 车牌号 单行文本
        /// </summary>
        public string mcs_carplate { get; set; }
        /// <summary>
        /// 车主姓名    单行文本
        /// </summary>
        public string mcs_customername { get; set; }
        /// <summary>
        /// 车主手机 单行文本
        /// </summary>
        public string mcs_customerphone { get; set; }

        /// <summary>
        /// 发动机号    单行文本
        /// </summary>
        public string mcs_enginenumber { get; set; }

        /// <summary>
        /// 加装零件描述 多行文本
        /// </summary>
        public string mcs_modifiedpartscontent { get; set; }

        /// <summary>
        /// 是否加装零件  两个选项
        /// </summary>
        public bool? mcs_ismodifiedparts { get; set; }

        /// <summary>
        /// 里程数（KM)	十进制数
        /// </summary>
        public int? mcs_mileage { get; set; }

        /// <summary>
        /// 故障类别代码 查找
        /// </summary>
        public string mcs_malfunctiontypeid { get; set; }

        /// <summary>
        ///  检查诊断描述  多行文本
        /// </summary>
        public string mcs_diagnosiscontent { get; set; }

        /// <summary>
        /// 具体故障现象及频次 多行文本
        /// </summary>
        public string mcs_malfunctioncontent { get; set; }

        /// <summary>
        ///  已更换零件   多行文本
        /// </summary>
        public string mcs_replacedparts { get; set; }

        /// <summary>
        /// 技师疑问 多行文本
        /// </summary>
        public string mcs_techqueries { get; set; }

        /// <summary>
        /// 技术系统    选项集
        /// </summary>
        public string mcs_techsystem { get; set; }
        /// <summary>
        /// 车型
        /// </summary>
        public string mcs_cartypeid { get; set; }
        

    }
}
