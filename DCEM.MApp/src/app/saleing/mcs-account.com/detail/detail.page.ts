import { Component, OnInit, ViewChild } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OptionSetService } from '../../../base/base.ser/optionset.service';
import { Dateformat } from '../../../base/base.ser/dateformat';
import { Storage_LoginInfo } from '../../../base/base.ser/logininfo.storage';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SelectSystemuserComponent } from 'app/base/base.ser/components/select-systemuser/select-systemuser.component';

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
        postUrl: '/Api/account/AddOrEdit',
        LogcallModel: {//联络记录
            apiUrl: '/api/only-lead/GetLogCallList',
            list: [],
            isending: false,         
            params: {
                accountid: "",
                Sort: '',
                PageSize:10,
                PageIndex: 1,
                UserId: ""//当前登录用户ID
             }
        },
        ActivityModel: {//培育任务
            apiUrl: '/api/only-lead/GetActivityList',
            list: [],         
            params: {
                accountid: "",
                Sort: '',
                PageSize:10,
                PageIndex: 1,
                UserId: ""//当前登录用户ID
             }
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
        private userInfo: Storage_LoginInfo,
        private modalCtrl: ModalController) {
        this.activeRoute.queryParams.subscribe((params: Params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.mod.data.Account.Id = params['id'];
            }
        });
    }

    ngOnInit() {
        this.mod.LogcallModel.list = [];
        this.mod.LogcallModel.params.PageIndex = 1;
        this.BindInfo(this.mod.data.Account.Id);
    }
    //绑定数据
    BindInfo(id) {
        //this.ionInfiniteScroll.disabled=true;
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
                    this.mod.data.Account.name = res["Attributes"]["name"];
                    this.mod.data.Account.accountnumber = res["Attributes"]["accountnumber"];
                    this.mod.data.Account.mcs_onlyleadid = res["Attributes"]["_mcs_onlyleadid_value"];//唯一线索
                    this.mod.data.Account.mcs_singleperson = res["Attributes"]["_mcs_singleperson_value@OData.Community.Display.V1.FormattedValue"];//成单人
                    this.mod.data.Account.mcs_smallorderid = res["Attributes"]["_mcs_smallorderid_value@OData.Community.Display.V1.FormattedValue"];//小订记录
                    this.mod.data.Account.mcs_storemanagerid = res["Attributes"]["_mcs_storemanagerid_value@OData.Community.Display.V1.FormattedValue"];//店长
                    this.mod.data.Account.mcs_tc_order = res["Attributes"]["_mcs_tc_order_value@OData.Community.Display.V1.FormattedValue"];//商品综合订单
                    this.mod.data.Account.mcs_vehcolorid = res["Attributes"]["_mcs_vehcolorid_value@OData.Community.Display.V1.FormattedValue"];//意向颜色
                    this.mod.data.Account.mcs_vehorderid = res["Attributes"]["_mcs_vehorderid_value@OData.Community.Display.V1.FormattedValue"];//整车订单
                    this.mod.data.Account.mcs_vehtypeid = res["Attributes"]["_mcs_vehtypeid_value@OData.Community.Display.V1.FormattedValue"];//意向车型
                    this.mod.data.Account.mcs_carattention = res["Attributes"]["mcs_carattention"];//购车关注
                    this.mod.data.Account.mcs_competingtype = res["Attributes"]["mcs_competingtype"];//竞品车型
                    this.mod.data.Account.mcs_introducecarowner = res["Attributes"]["mcs_introducecarowner"];//引荐车主
                    this.mod.data.Account.mcs_mobilephone = res["Attributes"]["mcs_mobilephone"];//手机号码
                    this.mod.data.Account.mcs_estimatedtransactiondate = this.dateformat.FormatToDate(res["Attributes"]["mcs_estimatedtransactiondate"]);//预测成交日期
                    this.mod.data.Account.mcs_carereason = this.optionset.GetOptionSetNameByValue("mcs_carereason", res["Attributes"]["mcs_carereason"]);//关注原因
                    this.mod.data.Account.mcs_customerstatus = res["Attributes"]["mcs_customerstatus"];//销售机会状态
                    this.mod.data.Account.mcs_customerstatusname = this.optionset.GetOptionSetNameByValue("mcs_customerstatus", res["Attributes"]["mcs_customerstatus"]);//销售机会状态名称
                    this.mod.data.Account.mcs_depositpaymentstatus = res["Attributes"]["mcs_depositpaymentstatus"];//定金支付状态
                    this.mod.data.Account.mcs_gender = this.optionset.GetOptionSetNameByValue("mcs_gender", res["Attributes"]["mcs_gender"]);//称呼
                    this.mod.data.Account.mcs_generation = this.optionset.GetOptionSetNameByValue("mcs_generation", res["Attributes"]["mcs_generation"]);//年龄段
                    this.mod.data.Account.mcs_idtype = res["Attributes"]["mcs_idtype"];//证件类型
                    this.mod.data.Account.mcs_level = this.optionset.GetOptionSetNameByValue("mcs_level", res["Attributes"]["mcs_level"]);//意向等级
                    this.mod.data.Account.mcs_purchasepurpose = this.optionset.GetOptionSetNameByValue("mcs_purchasepurpose", res["Attributes"]["mcs_purchasepurpose"]);//购买用途
                    this.mod.data.Account.mcs_purchaseway = this.optionset.GetOptionSetNameByValue("mcs_purchaseway", res["Attributes"]["mcs_purchaseway"]);//购买方式
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
        this.mod.LogcallModel.params.PageIndex = 1;
        //this.ionInfiniteScroll.disabled=false;
        this.ionContent.scrollToTop(0);
        this.LoadLogcall();
    }
    //下拉事件
    DownLoadLogcall() {
        this.mod.LogcallModel.params.PageIndex += 1;
        this.LoadLogcall();
    }

    //战败
    Failed() {
        this._page.confirm("确认提示", "您确认要战败此销售机会吗？", () => {
            var postData = {
                Id: this.mod.data.Account.Id,
                mcs_customerstatus: this.optionset.GetOptionSetValueByName("mcs_customerstatus", "已战败")
            };
            this.UpdateOrEdit(postData, "已战败！", "战败失败！");
        });
    }
    //成交
    Success() {
        this._page.confirm("确认提示", "您确认要成交此销售机会吗？", () => {
            var options = this.optionset.Get("mcs_customerstatus");
            var postData = {
                Id: this.mod.data.Account.Id,
                mcs_customerstatus: this.optionset.GetOptionSetValueByName("mcs_customerstatus", "已成交")
            };
            this.UpdateOrEdit(postData, "已成交！", "成交失败！");
        });
    }
    //分配
    async Assign() {
        const modal = await this.modalCtrl.create({
            component: SelectSystemuserComponent
        });
        await modal.present();
        //监听销毁的事件
        const { data } = await modal.onDidDismiss();
        if (data != null && data != undefined) {
            if (data.Id != "" && data.Id != undefined) {
                var postData = {
                    Id: this.mod.data.Account.Id,
                    mcs_customerstatus: this.optionset.GetOptionSetValueByName("mcs_customerstatus", "已指派"),
                    ownerid: data.Id
                };
                this.UpdateOrEdit(postData, "分配成功！", "分配失败！");
            }
        }
    }

    //创建或更新实体数据
    UpdateOrEdit(postData, successMessage, errorMessage, redirectUrl = "") {
        this._page.loadingShow();
        //数据验证
        this._http.post(
            this.mod.postUrl, postData,
            (res: any) => {
                if (res != "") {
                    this._page.alert("消息提示", successMessage);
                    this.mod.data.Account.mcs_customerstatus = postData.mcs_customerstatus;
                    this.mod.data.Account.mcs_customerstatusname = this.optionset.GetOptionSetNameByValue("mcs_customerstatus", postData.mcs_customerstatus);
                    if (redirectUrl !== null && redirectUrl !== "" && redirectUrl !== undefined) {
                        this._page.goto(redirectUrl, { guid: res });
                    }
                }
                else {
                    this._page.alert("消息提示", errorMessage);
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "请求异常");
                this._page.loadingHide();
            }
        );
    }

    /**
     * 加载logcall记录
     */
    LoadLogcall() {
        this.mod.LogcallModel.params.accountid= this.mod.data.Account.Id;
        this.mod.LogcallModel.params.UserId=this.userInfo.GetSystemUserId();//当前登录用户ID
        this._page.loadingShow();
        this._http.postForToaken(
            this.mod.LogcallModel.apiUrl,
            this.mod.LogcallModel.params,           
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
                    // this.ionInfiniteScroll.complete();
                    // //判断是否有新数据
                    // if (res.Results.length < this.mod.LogcallModel.pageSize) {
                    //   this.ionInfiniteScroll.disabled = true;
                    // }
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );
    }

    //加载培育任务列表
    LoadActivitylist() {
     debugger;
     
     this.mod.ActivityModel.params.accountid= this.mod.data.Account.Id;
     this.mod.ActivityModel.params.UserId=this.userInfo.GetSystemUserId();//当前登录用户ID

    this.mod.ActivityModel.list= [];
    this._page.loadingShow();
    this._http.postForToaken(
        this.mod.ActivityModel.apiUrl,
        this.mod.ActivityModel.params,
        (res: any) => {
            debugger;
            if (res !== null) {
                if (res.Results !== null) {
                    for (var key in res.Results) {
                        var obj = {};
                        obj["mcs_thisfollowupcontent"] = res.Results[key]["Attributes"]["mcs_thisfollowupcontent"];
                        obj["createdon"] = this.dateformat.FormatToDateTime(res.Results[key]["Attributes"]["createdon"]);              
                        obj["mcs_activitystatus"] =this.optionset.GetOptionSetNameByValue("mcs_activitystatus",res.Results[key]["Attributes"]["mcs_activitystatus"]);
                        obj["mcs_importantlevel"] =this.optionset.GetOptionSetNameByValue("mcs_importantlevel",res.Results[key]["Attributes"]["mcs_importantlevel"]);
                        obj["mcs_activityid"] = res.Results[key]["Attributes"]["mcs_activityid"];    
                        this.mod.ActivityModel.list.push(obj);
                    }
                    //console.log(res);
                }  //判断是否有新数据
                // if (res.Results.length == 0) {
                //     this.mod.isending2 = true;
                // }
            }
            else {
                this._page.alert("消息提示", "联络记录加载异常");
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
