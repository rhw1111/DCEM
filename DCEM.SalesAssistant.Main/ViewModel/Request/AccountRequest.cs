using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class AccountRequest : PageBaseRequestModel
    {

        #region 业务字段
        /// <summary>
        ///	家庭成员数量	
        /// </summary>
        public int? mcs_familymembernum { get; set; }

        /// <summary>
        ///	评分
        /// </summary>
        public int? mcs_accountpoints { get; set; }

        /// <summary>
        ///	到店情况	
        /// </summary>
        public int? mcs_arrival { get; set; }

        /// <summary>
        ///	定金支付状态	
        /// </summary>
        public int? mcs_blindorderpaymentstatus { get; set; }

        /// <summary>
        ///	关注原因	
        /// </summary>
        public int? mcs_carereason { get; set; }

        /// <summary>
        ///	渠道	
        /// </summary>
        public int? mcs_channel { get; set; }

        /// <summary>
        ///	星座	
        /// </summary>
        public int? mcs_constellation { get; set; }

        /// <summary>
        ///	客户级别	
        /// </summary>
        public int? mcs_contactlevel { get; set; }

        /// <summary>
        ///	销售机会状态	
        /// </summary>
        public int? mcs_customerstatus { get; set; }

        /// <summary>
        ///	定金支付状态	
        /// </summary>
        public int? mcs_depositpaymentstatus { get; set; }

        /// <summary>
        ///	称呼	
        /// </summary>
        public int? mcs_gender { get; set; }

        /// <summary>
        ///	年龄段	
        /// </summary>
        public int? mcs_generation { get; set; }

        /// <summary>
        ///	证件类型	
        /// </summary>
        public int? mcs_idtype { get; set; }

        /// <summary>
        ///	是否有子女	
        /// </summary>
        public int? mcs_ishavechildren { get; set; }

        /// <summary>
        ///	婚姻状态	
        /// </summary>
        public int? mcs_ismarry { get; set; }

        /// <summary>
        ///	意向等级	
        /// </summary>
        public int? mcs_level { get; set; }

        /// <summary>
        ///	购买用途	
        /// </summary>
        public int? mcs_purchasepurpose { get; set; }

        /// <summary>
        ///	购买方式	
        /// </summary>
        public int? mcs_purchaseway { get; set; }

        /// <summary>
        ///	宗教信仰	
        /// </summary>
        public int? mcs_religion { get; set; }

        /// <summary>
        ///	下发类型	
        /// </summary>
        public int? mcs_salesopportunitytype { get; set; }

        /// <summary>
        ///	销售类型	
        /// </summary>
        public int? mcs_salestype { get; set; }

        /// <summary>
        ///	车辆使用人	
        /// </summary>
        public int? mcs_vehicleusers { get; set; }

        /// <summary>
        ///	分派期限	
        /// </summary>
        public string mcs_assigneddeadline { get; set; }

        /// <summary>
        ///	生日	
        /// </summary>
        public string mcs_birthdate { get; set; }

        /// <summary>
        ///	预测成交日期	
        /// </summary>
        public string mcs_estimatedtransactiondate { get; set; }

        /// <summary>
        ///	允许短信	
        /// </summary>
        public string mcs_donotsms { get; set; }

        /// <summary>
        ///	允许微博	
        /// </summary>
        public string mcs_donotweibo { get; set; }

        /// <summary>
        ///	允许微信	
        /// </summary>
        public string mcs_donotweixin { get; set; }

        /// <summary>
        ///	试乘试驾已完成	
        /// </summary>
        public string mcs_drivefinished { get; set; }

        /// <summary>
        ///	主题	
        /// </summary>
        public string mcs_topic { get; set; }

        /// <summary>
        ///	身份证所在地	
        /// </summary>
        public string mcs_address { get; set; }

        /// <summary>
        ///	办公电话区号	
        /// </summary>
        public string mcs_areacode { get; set; }

        /// <summary>
        ///	单位联系人手机	
        /// </summary>
        public string mcs_business { get; set; }

        /// <summary>
        ///	购车关注	
        /// </summary>
        public string mcs_carattention { get; set; }

        /// <summary>
        ///	单位名称	
        /// </summary>
        public string mcs_company { get; set; }

        /// <summary>
        ///	竞品车型	
        /// </summary>
        public string mcs_competingtype { get; set; }

        /// <summary>
        ///	传真区号	
        /// </summary>
        public string mcs_faxareacode { get; set; }

        /// <summary>
        ///	初始跟进人	
        /// </summary>
        public string mcs_firstappoint { get; set; }

        /// <summary>
        ///	名	
        /// </summary>
        public string mcs_firstname { get; set; }

        /// <summary>
        ///	兴趣爱好	
        /// </summary>
        public string mcs_hobby { get; set; }

        /// <summary>
        ///	家庭地址	
        /// </summary>
        public string mcs_homeaddress { get; set; }

        /// <summary>
        ///	证件号码	
        /// </summary>
        public string mcs_identitycard { get; set; }

        /// <summary>
        ///	引荐车主	
        /// </summary>
        public string mcs_introducecarowner { get; set; }

        /// <summary>
        ///	职务	
        /// </summary>
        public string mcs_jobtitle { get; set; }

        /// <summary>
        ///	姓	
        /// </summary>
        public string mcs_lastname { get; set; }

        /// <summary>
        ///	手机号码	
        /// </summary>
        public string mcs_mobilephone { get; set; }

        /// <summary>
        ///	手机号码(Mask)	
        /// </summary>
        public string mcs_mobilephonemask { get; set; }

        /// <summary>
        ///	订单编号	
        /// </summary>
        public string mcs_ordernumber { get; set; }

        /// <summary>
        ///	QQ	
        /// </summary>
        public string mcs_qq { get; set; }

        /// <summary>
        ///	阶段名称	
        /// </summary>
        public string mcs_stagename { get; set; }

        /// <summary>
        ///	单位税务号	
        /// </summary>
        public string mcs_taxcode { get; set; }

        /// <summary>
        ///	updatekey	
        /// </summary>
        public string mcs_updatekey { get; set; }

        /// <summary>
        ///	渠道用户ID	
        /// </summary>
        public string mcs_userid { get; set; }

        /// <summary>
        ///	微博	
        /// </summary>
        public string mcs_weibo { get; set; }

        /// <summary>
        ///	微信	
        /// </summary>
        public string mcs_weixin { get; set; }

        /// <summary>
        ///	工作地址	
        /// </summary>
        public string mcs_workaddress { get; set; }

        /// <summary>
        ///	邮编	
        /// </summary>
        public string mcs_zipcode { get; set; }

        /// <summary>
        ///	市	
        /// </summary>
        public string mcs_cityid { get; set; }

        /// <summary>
        ///	门店体验顾问	
        /// </summary>
        public string mcs_consultantid { get; set; }

        /// <summary>
        ///	潜客	
        /// </summary>
        public string mcs_contactid { get; set; }

        /// <summary>
        ///	国家	
        /// </summary>
        public string mcs_countryid { get; set; }

        /// <summary>
        ///	培育任务	
        /// </summary>
        public string mcs_cultivatetaskid { get; set; }

        /// <summary>
        ///	主机厂销售机会	
        /// </summary>
        public string mcs_customerid { get; set; }


        /// <summary>
        ///	区	
        /// </summary>
        public string mcs_districtid { get; set; }

        /// <summary>
        ///	线索媒体	
        /// </summary>
        public string mcs_mediaid { get; set; }

        /// <summary>
        ///	唯一线索	
        /// </summary>
        public string mcs_onlyleadid { get; set; }

        /// <summary>
        ///	产品	
        /// </summary>
        public string mcs_productid { get; set; }

        /// <summary>
        ///	省	
        /// </summary>
        public string mcs_provinceid { get; set; }

        /// <summary>
        ///	成单人	
        /// </summary>
        public string mcs_singleperson { get; set; }

        /// <summary>
        ///	小订记录	
        /// </summary>
        public string mcs_smallorderid { get; set; }

        /// <summary>
        ///	店长	
        /// </summary>
        public string mcs_storemanagerid { get; set; }

        /// <summary>
        ///	商品综合订单	
        /// </summary>
        public string mcs_tc_order { get; set; }

        /// <summary>
        ///	意向颜色	
        /// </summary>
        public string mcs_vehcolorid { get; set; }

        /// <summary>
        ///	整车订单	
        /// </summary>
        public string mcs_vehorderid { get; set; }

        /// <summary>
        ///	意向车型	
        /// </summary>
        public string mcs_vehtypeid { get; set; }

        #endregion
        /// <summary>
        /// 搜索框参数
        /// </summary>
        public string search { get; set; }

        /// <summary>
        /// 厅店Id
        /// </summary>
        public Guid? mcs_dealerid { get; set; }

        /// <summary>
        /// ownerId
        /// </summary>
        public Guid? ownerid { get; set; }
    }
    /// <summary>
    /// 列表请求参数
    /// </summary>
    public class AccountSearhRequest: PageBaseRequestModel
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
        /// 销售机会状态
        /// </summary>
        public int? mcs_customerstatus{ set; get; }
}
}
