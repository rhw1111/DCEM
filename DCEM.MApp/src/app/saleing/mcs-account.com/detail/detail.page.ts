import { Component, OnInit, ViewChild } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OptionSetService } from '../../saleing.ser/optionset.service';
import { Dateformat } from '../../../base/base.ser/dateformat';
import { Storage_LoginInfo } from '../../../base/base.ser/logininfo.storage';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
    @ViewChild(IonContent, null) ionContent: IonContent;
    @ViewChild(IonInfiniteScroll, null) ionInfiniteScroll: IonInfiniteScroll;

    public tab: any = "info";
    mod = {
        apiUrl: '/Api/account/GetDetail',
        LogcallModel: {//联络记录
            apiUrl: '/api/only-lead/GetLogCallList',
            list: [],
            isending: false,
            page: 1,
            pageSize: 10,
            sort: ''
        },
        ActivityModel: {//培育任务
            list: [],
            page: 1,
            pageSize: 10,
            sort: ''
        },
        data: {
            Account: {
                Id: "",
                name: "",//姓名
                accountnumber: "",//销售机会编号
                mcs_cityid: "",//市
                mcs_consultantid: "",//门店体验顾问
                mcs_contactid: "",//潜客
                mcs_countryid: "",//国家
                mcs_cultivatetaskid: "",//培育任务
                mcs_customerid: "",//主机厂销售机会
                mcs_dealerid: "",//所属厅/店
                mcs_districtid: "",//区
                mcs_mediaid: "",//线索媒体
                mcs_onlyleadid: "",//唯一线索
                mcs_productid: "",//产品
                mcs_provinceid: "",//省
                mcs_singleperson: "",//成单人
                mcs_smallorderid: "",//小订记录
                mcs_storemanagerid: "",//店长
                mcs_tc_order: "",//商品综合订单
                mcs_vehcolorid: "",//意向颜色
                mcs_vehorderid: "",//整车订单
                mcs_vehtypeid: "",//意向车型
                mcs_address: "",//身份证所在地
                mcs_areacode: "",//办公电话区号
                mcs_business: "",//单位联系人手机
                mcs_carattention: "",//购车关注
                mcs_company: "",//单位名称
                mcs_competingtype: "",//竞品车型
                mcs_faxareacode: "",//传真区号
                mcs_firstappoint: "",//初始跟进人
                mcs_firstname: "",//名
                mcs_hobby: "",//兴趣爱好
                mcs_homeaddress: "",//家庭地址
                mcs_identitycard: "",//证件号码
                mcs_introducecarowner: "",//引荐车主
                mcs_jobtitle: "",//职务
                mcs_lastname: "",//姓
                mcs_mobilephone: "",//手机号码
                mcs_mobilephonemask: "",//手机号码(Mask)
                mcs_ordernumber: "",//订单编号
                mcs_qq: "",//QQ
                mcs_stagename: "",//阶段名称
                mcs_taxcode: "",//单位税务号
                mcs_updatekey: "",//updatekey
                mcs_userid: "",//渠道用户ID
                mcs_weibo: "",//微博
                mcs_weixin: "",//微信
                mcs_workaddress: "",//工作地址
                mcs_zipcode: "",//邮编
                mcs_topic: "",//主题
                mcs_donotsms: "",//允许短信
                mcs_donotweibo: "",//允许微博
                mcs_donotweixin: "",//允许微信
                mcs_drivefinished: "",//试乘试驾已完成
                mcs_assigneddeadline: "",//分派期限
                mcs_birthdate: "",//生日
                mcs_estimatedtransactiondate: "",//预测成交日期
                mcs_accountpoints: 0,//评分
                mcs_arrival: 0,//到店情况
                mcs_blindorderpaymentstatus: 0,//定金支付状态
                mcs_carereason: -1,//关注原因
                mcs_channel: 0,//渠道
                mcs_constellation: 0,//星座
                mcs_contactlevel: 0,//客户级别
                mcs_customerstatusname: "",//状态名称
                mcs_customerstatus: 0,//销售机会状态
                mcs_depositpaymentstatus: 0,//定金支付状态
                mcs_gender: 0,//称呼
                mcs_generation: 0,//年龄段
                mcs_idtype: 0,//证件类型
                mcs_ishavechildren: 0,//是否有子女
                mcs_ismarry: -1,//婚姻状态
                mcs_level: -1,//意向等级
                mcs_purchasepurpose: 0,//购买用途
                mcs_purchaseway: 0,//购买方式
                mcs_religion: 0,//宗教信仰
                mcs_salesopportunitytype: 0,//下发类型
                mcs_salestype: 0,//销售类型
                mcs_vehicleusers: 0,//车辆使用人
                mcs_familymembernum: 0,//家庭成员数量
                description: "",//特殊备注
            }
        }
    };

    constructor(private _http: DCore_Http,
        private _page: DCore_Page,
        private activeRoute: ActivatedRoute,
        private optionset: OptionSetService,
        private dateformat: Dateformat,
        private userInfo: Storage_LoginInfo) {
        this.activeRoute.queryParams.subscribe((params: Params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.mod.data.Account.Id = params['id'];
            }
        });
    }

    ngOnInit() {
        this.mod.LogcallModel.list = [];
        this.mod.LogcallModel.page = 1;
        this.BindInfo(this.mod.data.Account.Id);
    }
    //绑定数据
    BindInfo(id) {
        this._page.loadingShow();
        this._http.get(
            this.mod.apiUrl,
            {
                params: {
                    id: id,
                }
            },
            (res: any) => {
                if (res != null) {
                    //初始化字段值
                    this.mod.data.Account.Id = id;

                    this.mod.data.Account.name = res["Attributes"]["name"];
                    this.mod.data.Account.accountnumber = res["Attributes"]["accountnumber"];
                    //this.mod.data.Account.mcs_cityid = res["Attributes"]["_mcs_cityid_value@OData.Community.Display.V1.FormattedValue"];//市
                    //this.mod.data.Account.mcs_consultantid = res["Attributes"]["_mcs_consultantid_value@OData.Community.Display.V1.FormattedValue"];//门店体验顾问
                    //this.mod.data.Account.mcs_contactid = res["Attributes"]["_mcs_contactid_value@OData.Community.Display.V1.FormattedValue"];//潜客
                    //this.mod.data.Account.mcs_countryid = res["Attributes"]["_mcs_countryid_value@OData.Community.Display.V1.FormattedValue"];//国家
                    //this.mod.data.Account.mcs_cultivatetaskid = res["Attributes"]["_mcs_cultivatetaskid_value@OData.Community.Display.V1.FormattedValue"];//培育任务
                    //this.mod.data.Account.mcs_customerid = res["Attributes"]["_mcs_customerid_value@OData.Community.Display.V1.FormattedValue"];//主机厂销售机会
                    //this.mod.data.Account.mcs_dealerid = res["Attributes"]["_mcs_dealerid_value@OData.Community.Display.V1.FormattedValue"];//所属厅/店
                    //this.mod.data.Account.mcs_districtid = res["Attributes"]["_mcs_districtid_value@OData.Community.Display.V1.FormattedValue"];//区
                    // this.mod.data.Account.mcs_mediaid = res["Attributes"]["_mcs_mediaid_value@OData.Community.Display.V1.FormattedValue"];//线索媒体
                    this.mod.data.Account.mcs_onlyleadid = res["Attributes"]["_mcs_onlyleadid_value"];//唯一线索
                    // this.mod.data.Account.mcs_productid = res["Attributes"]["_mcs_productid_value@OData.Community.Display.V1.FormattedValue"];//产品
                    // this.mod.data.Account.mcs_provinceid = res["Attributes"]["_mcs_provinceid_value@OData.Community.Display.V1.FormattedValue"];//省
                    this.mod.data.Account.mcs_singleperson = res["Attributes"]["_mcs_singleperson_value@OData.Community.Display.V1.FormattedValue"];//成单人
                    this.mod.data.Account.mcs_smallorderid = res["Attributes"]["_mcs_smallorderid_value@OData.Community.Display.V1.FormattedValue"];//小订记录
                    this.mod.data.Account.mcs_storemanagerid = res["Attributes"]["_mcs_storemanagerid_value@OData.Community.Display.V1.FormattedValue"];//店长
                    this.mod.data.Account.mcs_tc_order = res["Attributes"]["_mcs_tc_order_value@OData.Community.Display.V1.FormattedValue"];//商品综合订单
                    this.mod.data.Account.mcs_vehcolorid = res["Attributes"]["_mcs_vehcolorid_value@OData.Community.Display.V1.FormattedValue"];//意向颜色
                    this.mod.data.Account.mcs_vehorderid = res["Attributes"]["_mcs_vehorderid_value@OData.Community.Display.V1.FormattedValue"];//整车订单
                    this.mod.data.Account.mcs_vehtypeid = res["Attributes"]["_mcs_vehtypeid_value@OData.Community.Display.V1.FormattedValue"];//意向车型
                    // this.mod.data.Account.mcs_address = res["Attributes"]["mcs_address"];//身份证所在地
                    // this.mod.data.Account.mcs_areacode = res["Attributes"]["mcs_areacode"];//办公电话区号
                    // this.mod.data.Account.mcs_business = res["Attributes"]["mcs_business"];//单位联系人手机
                    this.mod.data.Account.mcs_carattention = res["Attributes"]["mcs_carattention"];//购车关注
                    // this.mod.data.Account.mcs_company = res["Attributes"]["mcs_company"];//单位名称
                    this.mod.data.Account.mcs_competingtype = res["Attributes"]["mcs_competingtype"];//竞品车型
                    // this.mod.data.Account.mcs_faxareacode = res["Attributes"]["mcs_faxareacode"];//传真区号
                    // this.mod.data.Account.mcs_firstappoint = res["Attributes"]["mcs_firstappoint"];//初始跟进人
                    // this.mod.data.Account.mcs_firstname = res["Attributes"]["mcs_firstname"];//名
                    // this.mod.data.Account.mcs_hobby = res["Attributes"]["mcs_hobby"];//兴趣爱好
                    // this.mod.data.Account.mcs_homeaddress = res["Attributes"]["mcs_homeaddress"];//家庭地址
                    // this.mod.data.Account.mcs_identitycard = res["Attributes"]["mcs_identitycard"];//证件号码
                    this.mod.data.Account.mcs_introducecarowner = res["Attributes"]["mcs_introducecarowner"];//引荐车主
                    // this.mod.data.Account.mcs_jobtitle = res["Attributes"]["mcs_jobtitle"];//职务
                    // this.mod.data.Account.mcs_lastname = res["Attributes"]["mcs_lastname"];//姓
                    this.mod.data.Account.mcs_mobilephone = res["Attributes"]["mcs_mobilephone"];//手机号码
                    //this.mod.data.Account.mcs_mobilephonemask = res["Attributes"]["mcs_mobilephonemask"];//手机号码(Mask)
                    //this.mod.data.Account.mcs_ordernumber = res["Attributes"]["mcs_ordernumber"];//订单编号
                    // this.mod.data.Account.mcs_qq = res["Attributes"]["mcs_qq"];//QQ
                    // this.mod.data.Account.mcs_stagename = res["Attributes"]["mcs_stagename"];//阶段名称
                    // this.mod.data.Account.mcs_taxcode = res["Attributes"]["mcs_taxcode"];//单位税务号
                    // this.mod.data.Account.mcs_updatekey = res["Attributes"]["mcs_updatekey"];//updatekey
                    // this.mod.data.Account.mcs_userid = res["Attributes"]["mcs_userid"];//渠道用户ID
                    // this.mod.data.Account.mcs_weibo = res["Attributes"]["mcs_weibo"];//微博
                    // this.mod.data.Account.mcs_weixin = res["Attributes"]["mcs_weixin"];//微信
                    // this.mod.data.Account.mcs_workaddress = res["Attributes"]["mcs_workaddress"];//工作地址
                    // this.mod.data.Account.mcs_zipcode = res["Attributes"]["mcs_zipcode"];//邮编
                    // this.mod.data.Account.mcs_topic = res["Attributes"]["mcs_topic"];//主题
                    // this.mod.data.Account.mcs_donotsms = res["Attributes"]["mcs_donotsms"];//允许短信
                    // this.mod.data.Account.mcs_donotweibo = res["Attributes"]["mcs_donotweibo"];//允许微博
                    // this.mod.data.Account.mcs_donotweixin = res["Attributes"]["mcs_donotweixin"];//允许微信
                    // this.mod.data.Account.mcs_drivefinished = res["Attributes"]["mcs_drivefinished"];//试乘试驾已完成
                    // this.mod.data.Account.mcs_assigneddeadline = res["Attributes"]["mcs_assigneddeadline"];//分派期限
                    // this.mod.data.Account.mcs_birthdate = res["Attributes"]["mcs_birthdate"];//生日
                    this.mod.data.Account.mcs_estimatedtransactiondate = this.dateformat.FormatToDate(res["Attributes"]["mcs_estimatedtransactiondate"]);//预测成交日期
                    // this.mod.data.Account.mcs_accountpoints = res["Attributes"]["mcs_accountpoints"];//评分
                    // this.mod.data.Account.mcs_arrival = res["Attributes"]["mcs_arrival"];//到店情况
                    // this.mod.data.Account.mcs_blindorderpaymentstatus = res["Attributes"]["mcs_blindorderpaymentstatus"];//定金支付状态
                    this.mod.data.Account.mcs_carereason = this.optionset.GetOptionSetNameByValue("mcs_carereason", res["Attributes"]["mcs_carereason"]);//关注原因
                    //this.mod.data.Account.mcs_channel = res["Attributes"]["mcs_channel"];//渠道
                    //this.mod.data.Account.mcs_constellation = res["Attributes"]["mcs_constellation"];//星座
                    //this.mod.data.Account.mcs_contactlevel = this.optionset.GetOptionSetNameByValue("mcs_level",res["Attributes"]["mcs_contactlevel"]);//客户级别
                    this.mod.data.Account.mcs_customerstatus = res["Attributes"]["mcs_customerstatus"];//销售机会状态
                    this.mod.data.Account.mcs_customerstatusname = this.optionset.GetOptionSetNameByValue("mcs_customerstatus", res["Attributes"]["mcs_customerstatus"]);//销售机会状态名称
                    this.mod.data.Account.mcs_depositpaymentstatus = res["Attributes"]["mcs_depositpaymentstatus"];//定金支付状态
                    this.mod.data.Account.mcs_gender = this.optionset.GetOptionSetNameByValue("mcs_gender", res["Attributes"]["mcs_gender"]);//称呼
                    this.mod.data.Account.mcs_generation = this.optionset.GetOptionSetNameByValue("mcs_generation", res["Attributes"]["mcs_generation"]);//年龄段
                    this.mod.data.Account.mcs_idtype = res["Attributes"]["mcs_idtype"];//证件类型
                    //this.mod.data.Account.mcs_ishavechildren = this.optionset.GetOptionSetNameByValue("towoption",res["Attributes"]["mcs_ishavechildren"]);//是否有子女
                    //this.mod.data.Account.mcs_ismarry = this.optionset.GetOptionSetNameByValue("mcs_ismarry",res["Attributes"]["mcs_ismarry"]);//婚姻状态
                    this.mod.data.Account.mcs_level = this.optionset.GetOptionSetNameByValue("mcs_level", res["Attributes"]["mcs_level"]);//意向等级
                    this.mod.data.Account.mcs_purchasepurpose = this.optionset.GetOptionSetNameByValue("mcs_purchasepurpose", res["Attributes"]["mcs_purchasepurpose"]);//购买用途
                    this.mod.data.Account.mcs_purchaseway = this.optionset.GetOptionSetNameByValue("mcs_purchaseway", res["Attributes"]["mcs_purchaseway"]);//购买方式
                    //this.mod.data.Account.mcs_religion = this.optionset.GetOptionSetNameByValue("mcs_religion",res["Attributes"]["mcs_religion"]);//宗教信仰
                    //this.mod.data.Account.mcs_salesopportunitytype = this.optionset.GetOptionSetNameByValue("mcs_salesopportunitytype",res["Attributes"]["mcs_salesopportunitytype"]);//下发类型
                    //this.mod.data.Account.mcs_salestype = this.optionset.GetOptionSetNameByValue("mcs_salestype",res["Attributes"]["mcs_salestype"]);//销售类型
                    this.mod.data.Account.mcs_vehicleusers = this.optionset.GetOptionSetNameByValue("mcs_vehicleusers", res["Attributes"]["mcs_vehicleusers"]);//车辆使用人
                    this.mod.data.Account.mcs_familymembernum = res["Attributes"]["mcs_familymembernum"];//家庭成员数量    
                    this.mod.data.Account.description = res["Attributes"]["description"];//特殊备注           
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );
    }
    LogcallTabLoading() {
        this.mod.LogcallModel.list = [];
        this.mod.LogcallModel.page = 1;
        this.ionInfiniteScroll.disabled = false;
        this.ionContent.scrollToTop(0);
        this.LoadLogcall();
    }
    //下拉事件
    DownLoadLogcall() {
        this.mod.LogcallModel.page += 1;
        this.LoadLogcall();
    }

    /**
     * 加载logcall记录
     */
    LoadLogcall() {
        this._page.loadingShow();
        this._http.get(
            this.mod.LogcallModel.apiUrl,
            {
                params: {
                    entityid: this.mod.data.Account.mcs_onlyleadid,//唯一线索Id
                    page: this.mod.LogcallModel.page,
                    pageSize: this.mod.LogcallModel.pageSize,
                    sort: this.mod.LogcallModel.sort,
                    systemuserid: this.userInfo.GetSystemUserId()//当前登录用户ID
                }
            },
            (res: any) => {
                if (res != null) {
                    if (res.Results.length > 0) {
                        res.Results.forEach(item => {
                            var value = item["Attributes"];
                            this.mod.LogcallModel.list.push({
                                "Id": value.mcs_logcallid,
                                "mcs_name": value.mcs_name,
                                "mcs_visittime": this.dateformat.FormatToDateTime(value.mcs_visittime),//回访时间
                                "mcs_content": value.mcs_content,//内容
                                "mcs_results": value.mcs_results//结果备注
                            });
                        });
                    }
                    this.ionInfiniteScroll.complete();
                    //判断是否有新数据
                    if (res.Results.length < this.mod.LogcallModel.pageSize) {
                        this.ionInfiniteScroll.disabled = true;
                    }
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );
    }
}
