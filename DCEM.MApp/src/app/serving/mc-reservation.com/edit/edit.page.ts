import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SelectCustomerComponent } from 'app/serving/serving.ser/components/select-customer/select-customer.component';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { SelectAppointmentconfigComponent } from 'app/serving/serving.ser/components/select-appointmentconfig/select-appointmentconfig.component';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import sd from 'silly-datetime';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.page.html',
    styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

    model = {
        apiUrl: '/api/appointment-info/GetDetail',
        postApiUrl: '/Api/appointment-info/AddOrEdit',
        customerApiUrl: '/Api/Customer/GetCustomerInfo',
        apiConfigUrl: '/api/appointment-info/GetConfig',
        data: {
        },
        postData: {},
        systemuserid: "",//当前用户id
        mcs_dealerid: "",//当前厅店id
        appointmentinfoId: null,//当前记录id
        isOrderTypeChange: false,//是否改变预约类型
        isAppointmentAtChange: false,//是否改变预约日期
        isAppointmentConfigChange: false,//预约时段是否改变
        customerId: "",//客户ID
        appointmentConfigOptionMap: {}//预约时段
    };

    //定义共享数据
    shareData = {
        appointmentinfo: {

        }
    }

    objectKeys = Object.keys;

    constructor(
        public _modalCtrl: ModalController,
        public _navCtrl: NavController,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _logininfo: Storage_LoginInfo,
        private _shareData: DCore_ShareData,
        private _valid: DCore_Valid,
        private activeRoute: ActivatedRoute
    ) { }

    ngOnInit() {

    }

    ionViewWillEnter() {
        this.activeRoute.queryParams.subscribe((params: Params) => {
            //编辑绑定预约单数据
            if (params['id'] != null && params['id'] != undefined) {
                console.log("记录Id:" + this.model.appointmentinfoId);
                this.model.appointmentinfoId = params['id'];
                this.pageOnBind(this.model.appointmentinfoId);
               
            }

            //编辑绑定客户数据
            if (params['customerid'] != null && params['customerid'] != undefined) {
                console.log("记录customerId:" + this.model.customerId);
                this.model.customerId = params['customerid'];
                this.customerOnBind(this.model.customerId);
            }

        });
    }

    //获取预约时段
    public AppointmentConfigOption(ordertype, appointmentat) {
       
        this.model.appointmentConfigOptionMap = {};
        this._http.get(
            this.model.apiConfigUrl,
            {
                params: {
                    mcs_servetype: ordertype,
                    mcs_servedate: appointmentat,
                    //AppointmentConfigId:appointmentconfig
                }
            },
            (res: any) => {
                if (res.Results !== null) {
                    for (var key in res.Results) {
                        var obj = {};
                        var mapkey = res.Results[key]["Attributes"]["mcs_appointmentconfigid"];
                        console.log(res.Results[key]);
                        obj["value"] = res.Results[key]["Attributes"]["mcs_appointmentconfigid"];
                        obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
                        obj["mcs_surplusnum"] = res.Results[key]["Attributes"]["mcs_surplusnum"];
                        this.model.appointmentConfigOptionMap[mapkey] = obj;
                        //this.model.appointmentConfigOption.push(obj);
                    }
                }
                else {
                    this._page.alert("消息提示", "客户数据加载异常");
                }
            },
            (err: any) => {
                this._page.alert("消息提示", "客户数据加载异常");
            }
        );

    }

    //绑定客户信息
    public customerOnBind(customerId) {
        this._page.loadingShow();
        this._http.get(
            this.model.customerApiUrl,
            {
                params: {
                    guid: customerId,
                }
            },
            (res: any) => {
                if (!this._valid.isNull(res.Vehowner)) {
                    this.shareData.appointmentinfo["mcs_customerid"] = res["Vehowner"].Id;
                    this.shareData.appointmentinfo["mcs_customername"] = res["Vehowner"]["Attributes"]["mcs_fullname"];
                    this.shareData.appointmentinfo["mcs_carplate"] = res["Vehowner"]["Attributes"]["mcs_vehplate"];
                    this.shareData.appointmentinfo["mcs_customerphone"] = res["Vehowner"]["Attributes"]["mcs_mobilephone"];
                    this.shareData.appointmentinfo["mcs_cartype"] = res["Vehowner"]["Attributes"]["_mcs_vehtype_value"];
                }
                else {
                    this._page.alert("消息提示", "车主数据加载异常");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "车主数据加载异常");
                this._page.loadingHide();
            }
        );

    }

    //调用选择客户组件
    async presentModal() {
        const modal = await this._modalCtrl.create({
            component: SelectCustomerComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
            if (data.vehowne != null && typeof data.vehowne != "undefined") {
                console.log(data.vehowne);
                this.shareData.appointmentinfo["mcs_customerid"] = data.vehowne.vehownerid;
                this.shareData.appointmentinfo["mcs_customername"] = data.vehowne.fullname;
                this.shareData.appointmentinfo["mcs_carplate"] = data.vehowne.vehplate;
                this.shareData.appointmentinfo["mcs_customerphone"] = data.vehowne.mobilephone;
                this.shareData.appointmentinfo["mcs_cartype"] = data.vehowne.model["_mcs_vehtype_value"];
                //this.shareData.appointmentinfo["mcs_tag"] = "";
            }
        }
    }

    //调用选择时段组件
    async configPresentModal() {
        var mcs_ordertype = this.shareData.appointmentinfo["mcs_ordertype"];
        var mcs_appointmentat = this.FormatToDate(this.shareData.appointmentinfo["mcs_appointmentat"]);
        this.model.systemuserid = this._logininfo.GetSystemUserId();  //"65AD644C-64F7-E811-A81E-9A16184AF7BF"//  
        this.model.mcs_dealerid = this._logininfo.GetDealerid();//"b30fefc4-e9f9-e811-a81e-9a16184af7bf"//
        console.log(mcs_ordertype + " " + mcs_appointmentat + " " + this.model.systemuserid);
        const modal = await this._modalCtrl.create({
            component: SelectAppointmentconfigComponent,
            componentProps: {
                'mcs_dealerid': this.model.mcs_dealerid,
                'mcs_servetype': mcs_ordertype,
                'mcs_servedate': mcs_appointmentat
            }
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
            if (data.appointmentconfig != null && typeof data.appointmentconfig != "undefined") {
                console.log(data.appointmentconfig);
                this.shareData.appointmentinfo["mcs_appointmentconfigid"] = data.appointmentconfig.mcs_appointmentconfigid;
                this.shareData.appointmentinfo["mcs_appointmentconfigname"] = data.appointmentconfig.mcs_name;
                this.shareData.appointmentinfo["mcs_surplusnum"] = data.appointmentconfig.mcs_surplusnum;
            }
        }
    }

    //筛选客户
    public customerOnClick() {
        this.presentModal();
    }

    //选择时段
    public appointmentconfigOnClick() {
        //表单校验
        if (this._valid.isNull(this.shareData.appointmentinfo["mcs_ordertype"])) {
            this._page.presentToastError("请先选择预约类型");
            return;
        }
        if (this._valid.isNull(this.shareData.appointmentinfo["mcs_appointmentat"])) {
            this._page.presentToastError("请先选择预约日期");
            return;
        }
        this.configPresentModal();
    }

    //点击保存
    saveOnClick() {
        //表单校验
        if (this._valid.isNull(this.shareData.appointmentinfo["mcs_customerid"])) {
            this._page.presentToastError("请先选择车主");
            return;
        }
        if (this._valid.isNull(this.shareData.appointmentinfo["mcs_ordertype"])) {
            this._page.presentToastError("请先选择预约类型");
            return;
        }
        if (this._valid.isNull(this.shareData.appointmentinfo["mcs_appointmentat"])) {
            this._page.presentToastError("请先选择预约日期");
            return;
        }
        if (this._valid.isNull(this.shareData.appointmentinfo["mcs_appointmentconfigid"])) {
            this._page.presentToastError("请先选择预约时段");
            return;
        }

        var date = new Date();
        if (this.FormatToDate(date) > this.FormatToDate(this.shareData.appointmentinfo["mcs_appointmentat"])) {
            this._page.presentToastError("预约日期必须大于当天日期");
            return;
        }

        //this.model.postData["actioncode"] = 1;
        this.model.postData["appointmentinfo"] = this.shareData.appointmentinfo;

        //组装预约单
        this.model.postData["appointmentinfo"] = {};
        this.model.postData["appointmentinfo"]["mcs_appointmentinfoid"] = this.model.appointmentinfoId
        //this.model.postData["appointmentinfo"]["mcs_dealerid"] = this.model.mcs_dealerid;// 厅店ID
        //this.model.postData["appointmentinfo"]["mcs_serviceadvisorid"] = this.model.systemuserid;// 服务顾问(当前用户)
        this.model.postData["appointmentinfo"]["mcs_customerid"] = this.shareData.appointmentinfo["mcs_customerid"]; // VIN码关联实体ID
        this.model.postData["appointmentinfo"]["mcs_customername"] = this.shareData.appointmentinfo["mcs_customername"];// 车主
        this.model.postData["appointmentinfo"]["mcs_carplate"] = this.shareData.appointmentinfo["mcs_carplate"];// 车牌
        this.model.postData["appointmentinfo"]["mcs_cartype"] = this.shareData.appointmentinfo["mcs_cartype"];// 车型
        this.model.postData["appointmentinfo"]["mcs_customerphone"] = this.shareData.appointmentinfo["mcs_customerphone"];//手机号
        this.model.postData["appointmentinfo"]["mcs_tag"] = this.shareData.appointmentinfo["mcs_tag"];//客户标签
        this.model.postData["appointmentinfo"]["mcs_ordertype"] = Number(this.shareData.appointmentinfo["mcs_ordertype"]);//预约服务类型
        this.model.postData["appointmentinfo"]["mcs_appointmentat"] = this.shareData.appointmentinfo["mcs_appointmentat"];//预约日期
        this.model.postData["appointmentinfo"]["mcs_appointmentconfigid"] = this.shareData.appointmentinfo["mcs_appointmentconfigid"];//预约时段
        this.model.postData["appointmentinfo"]["mcs_surplusnum"] = Number(this.shareData.appointmentinfo["mcs_surplusnum"]);//可预约数量
        this.model.postData["appointmentinfo"]["mcs_customercomment"] = this.shareData.appointmentinfo["mcs_customercomment"];//客户要求
        this.model.postData["appointmentinfo"]["mcs_appointmendescript"] = this.shareData.appointmentinfo["mcs_appointmendescript"];//问题描述
        //this.model.postData["appointmentinfo"]["mcs_status"] =10;//预约状态

        this._page.loadingShow();
        this._http.post(
            this.model.postApiUrl, this.model.postData,
            (res: any) => {
                this._page.loadingHide();
                if (res.Result == true) {
                    console.log("res");
                    console.log(res);
                    var guid = res["Data"]["Id"];
                    this._page.goto("/serving/reservation/success", { guid: guid });
                }
                else {
                    this._page.alert("消息提示", "操作失败");
                }
            },
            (err: any) => {
                this._page.loadingHide();
                this._page.alert("消息提示", "操作失败");
            }
        );
    }

    //编辑绑定数据
    pageOnBind(id: any) {
        this._page.loadingShow();
        this._http.get(
            this.model.apiUrl,
            {
                params: {
                    entityid: id,
                }
            },
            (res: any) => {
                if (res !== null) {
                    this.shareData.appointmentinfo["mcs_appointmentinfoid"] = res.Id;
                    this.shareData.appointmentinfo["mcs_customername"] = res["Attributes"]["mcs_customername"];
                    this.shareData.appointmentinfo["mcs_carplate"] = res["Attributes"]["mcs_carplate"];
                    this.shareData.appointmentinfo["mcs_customerphone"] = res["Attributes"]["mcs_customerphone"];
                    this.shareData.appointmentinfo["mcs_tag"] = res["Attributes"]["mcs_tag"];
                    this.shareData.appointmentinfo["mcs_ordertype"] = String(res["Attributes"]["mcs_ordertype"]);
                    this.shareData.appointmentinfo["mcs_appointmentat"] = res["Attributes"]["mcs_appointmentat"];
                    this.shareData.appointmentinfo["mcs_appointmentconfigname"] = res["Attributes"]["mcs_appointmentconfigid"] != null ? res["Attributes"]["mcs_appointmentconfigid"]["mcs_name"] : null;
                    this.shareData.appointmentinfo["mcs_surplusnum"] = res["Attributes"]["mcs_appointmentconfigid"] != null ? res["Attributes"]["mcs_appointmentconfigid"]["mcs_surplusnum"] : 0;
                    this.shareData.appointmentinfo["mcs_customercomment"] = res["Attributes"]["mcs_customercomment"];
                    this.shareData.appointmentinfo["mcs_appointmendescript"] = res["Attributes"]["mcs_appointmendescript"];
                    this.shareData.appointmentinfo["mcs_appointmentconfigid"] = res["Attributes"]["_mcs_appointmentconfigid_value"];
                    this.shareData.appointmentinfo["mcs_customerid"] = res["Attributes"]["_mcs_customerid_value"];
                    
                    console.log(res);

                   var ordertype = this.shareData.appointmentinfo["mcs_ordertype"];
                   var appointmentat = this.FormatToDate(this.shareData.appointmentinfo["mcs_appointmentat"]);
                   //this.model.mcs_dealerid = this._logininfo.GetDealerid();
                    //处理预约时段
                    this.AppointmentConfigOption(ordertype, appointmentat);
                }
                else {
                    this._page.alert("消息提示", "预约单加载异常");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );

    }

    //预约类型改变事件
    orderTypeChange() {
        if (this.model.isOrderTypeChange) {
            //this.shareData.appointmentinfo["mcs_appointmentconfigname"] = "";
            //this.shareData.appointmentinfo["mcs_appointmentconfigid"] = null;
            this.model.appointmentConfigOptionMap = {};
            this.shareData.appointmentinfo['mcs_appointmentconfigid'] = null;
            this.shareData.appointmentinfo["mcs_surplusnum"] = null;
            var ordertype = this.shareData.appointmentinfo["mcs_ordertype"];
            var appointmentat = this.FormatToDate(this.shareData.appointmentinfo["mcs_appointmentat"]);
            if (ordertype != undefined && appointmentat != undefined) {
                //处理预约时段
                this.AppointmentConfigOption(ordertype, appointmentat);
            }
        }
        this.model.isOrderTypeChange = true;
    }

    //预约日期改变
    appointmentAtChange() {
        if (this.model.isAppointmentAtChange) {
            debugger;
            var date = new Date();
            if (this.FormatToDate(date) > this.FormatToDate(this.shareData.appointmentinfo["mcs_appointmentat"])) {
                this._page.presentToastError("预约日期必须大于当天日期");
            }
            this.shareData.appointmentinfo["mcs_appointmentconfigid"] = null;
            this.shareData.appointmentinfo["mcs_surplusnum"] = null;
            this.model.appointmentConfigOptionMap = {};

            var ordertype = this.shareData.appointmentinfo["mcs_ordertype"];
            var appointmentat = this.FormatToDate(this.shareData.appointmentinfo["mcs_appointmentat"]);
            if (ordertype != undefined && appointmentat != undefined) {
                //处理预约时段
                this.AppointmentConfigOption(ordertype, appointmentat);
            }
        }
        this.model.isAppointmentAtChange = true;
    }

    //日期格式
    FormatToDate(date) {
        if (date != null && date != undefined) {
            return sd.format(date, 'YYYY-MM-DD');
        }
        else {
            return '';
        }
    }

    //时段获取数量
    public appointmentConfigChange() {
        var key = this.shareData.appointmentinfo["mcs_appointmentconfigid"];
        this.shareData.appointmentinfo["mcs_surplusnum"] = this.model.appointmentConfigOptionMap[key]["mcs_surplusnum"];
    }
}
