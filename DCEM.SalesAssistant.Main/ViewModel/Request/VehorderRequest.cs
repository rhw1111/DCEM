using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    #region  厅店整车订单列表查询model
    public class VehorderRequest : PageBaseRequestModel
    {

        /// <summary>
        /// 查询关键字
        /// </summary>
        public string SearchKey { set; get; }
        /// <summary>
        /// 厅店ID
        /// </summary>
        public string mcs_dealerid { set; get; }
        /// <summary>
        /// 整车订单状态
        /// </summary>
        public int? mcs_rostatus { set; get; }
    }
    #endregion

    #region 厅店整车订单详情model
    public class VehorderDetailModel
    {
        public VehorderDetailModel()
        {
            Vehordertrack = new List<CrmEntity>();
            Rightitemuse = new List<CrmEntity>();
        }

        /// <summary>
        /// 整车订单基本信息、客户信息、审核信息 mcs_vehorder
        /// </summary>
        public CrmEntity VehorderInfo { get; set; }

        /// <summary>
        /// 订单透明化状态跟踪mcs_vehordertrack
        /// </summary>
        public List<CrmEntity> Vehordertrack { get; set; }

        /// <summary>
        /// 权益项mcs_rightitemuse
        /// </summary>
        public List<CrmEntity> Rightitemuse { get; set; }
    }
    #endregion

}
