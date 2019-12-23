import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ModalController, NavController, ToastController, IonBackButton, IonBackButtonDelegate } from '@ionic/angular';
import { SelectCustomerComponent } from 'app/serving/serving.ser/components/select-customer/select-customer.component';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute } from '@angular/router';
import { SelectAppointmentinfoComponent } from 'app/serving/serving.ser/components/select-appointmentinfo/select-appointmentinfo.component';
let EditPage = class EditPage {
    constructor(_modalCtrl, _navCtrl, _toastCtrl, _http, _page, _shareData, _valid, _activeRoute) {
        this._modalCtrl = _modalCtrl;
        this._navCtrl = _navCtrl;
        this._toastCtrl = _toastCtrl;
        this._http = _http;
        this._page = _page;
        this._shareData = _shareData;
        this._valid = _valid;
        this._activeRoute = _activeRoute;
        this.mod = {
            queryUrl: '/Api/Serviceproxy/GetInfo',
            queryAppointmentcodeUrl: '/api/appointment-info/GetDetail',
            data: {},
            shareDataKey: "riEditData",
        };
        //定义共享数据
        this.shareData = {
            actioncode: 1,
            viewTitle: "",
            serviceproxy: {},
            vehcheckresultMap: {},
        };
    }
    ngOnInit() {
        const that = this;
        this.ionBackButtonDelegate.onClick = function (event) {
            that._shareData.delete(that.mod.shareDataKey);
            that._page.navigateRoot("/serving/ri/list", null, "back");
        };
    }
    ionViewDidEnter() {
        this._activeRoute.queryParams.subscribe((params) => {
            if (this._shareData.has(this.mod.shareDataKey)) {
                this.shareData = this._shareData.get(this.mod.shareDataKey);
            }
            else {
                if (!this._valid.isNull(params['id']) && !this._valid.isNull(params['actionCode'])) {
                    this.shareData.actioncode = Number(params['actionCode']);
                    this.shareData.serviceproxy["serviceproxyid"] = params['id'];
                }
                if (this.shareData.actioncode === 2) {
                    if (!this._shareData.has(this.mod.shareDataKey)) {
                        this.shareData.viewTitle = "编辑问诊单";
                        this.shareData.serviceproxy["serviceproxyid"] = params['id'];
                        this.pageOnBind(this.shareData.serviceproxy["serviceproxyid"]);
                    }
                }
                else if (this.shareData.actioncode === 3) { //从预约单转换服务委托书
                    if (!this._shareData.has(this.mod.shareDataKey)) {
                        this.shareData.viewTitle = "创建问诊单";
                        this.shareData.serviceproxy["appointmentcode"] = params['id'];
                        this.pageOnBindFromAppointmentcode(this.shareData.serviceproxy["appointmentcode"]);
                    }
                }
                else {
                    this.shareData.viewTitle = "创建问诊单";
                }
            }
        });
    }
    //选择客户
    presentModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this._modalCtrl.create({
                component: SelectCustomerComponent
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data != null && typeof data != "undefined") {
                if (data.vehowne != null && typeof data.vehowne != "undefined") {
                    this.shareData.serviceproxy["customerid"] = data.vehowne.vehownerid;
                    this.shareData.serviceproxy["customername"] = data.vehowne.fullname;
                    this.shareData.serviceproxy["carplate"] = data.vehowne.vehplate;
                    this.shareData.serviceproxy["customerphone"] = data.vehowne.mobilephone;
                    this.shareData.serviceproxy["dealerid"] = data.vehowne["model"]["_mcs_dealer_value"];
                    this.shareData.serviceproxy["dealerid_formatted"] = data.vehowne["model"]["_mcs_dealer_value@OData.Community.Display.V1.FormattedValue"];
                }
            }
        });
    }
    //选预约单
    presentAppointmentinfoModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this._modalCtrl.create({
                component: SelectAppointmentinfoComponent
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            if (!this._valid.isNull(data) && !this._valid.isNull(data["model"])) {
                var resAttr = data["model"];
                //加入预约单
                this.shareData.serviceproxy["appointmentcode"] = resAttr["mcs_appointmentinfoid"];
                this.shareData.serviceproxy["appointmentcode_formatted"] = resAttr["mcs_name"];
                //加入带出的信息
                this.shareData.serviceproxy["customerid"] = resAttr["_mcs_customerid_value"];
                this.shareData.serviceproxy["customername"] = resAttr["mcs_customername"];
                this.shareData.serviceproxy["carplate"] = resAttr["mcs_carplate"];
                this.shareData.serviceproxy["customerphone"] = resAttr["mcs_customerphone"];
                this.shareData.serviceproxy["dealerid"] = resAttr["_mcs_dealerid_value"];
                this.shareData.serviceproxy["dealerid_formatted"] = resAttr["_mcs_dealerid_value@OData.Community.Display.V1.FormattedValue"];
            }
        });
    }
    //预约单的初始化页面
    pageOnBindFromAppointmentcode(id) {
        this._page.loadingShow();
        this._http.get(this.mod.queryAppointmentcodeUrl, {
            params: {
                entityid: id,
            }
        }, (res) => {
            if (!this._valid.isNull(res) && !this._valid.isNull(res["Attributes"])) {
                var resAttr = res["Attributes"];
                debugger;
                //加入预约单
                this.shareData.serviceproxy["appointmentcode"] = resAttr["mcs_appointmentinfoid"];
                this.shareData.serviceproxy["appointmentcode_formatted"] = resAttr["mcs_name"];
                //加入带出的信息
                this.shareData.serviceproxy["customerid"] = resAttr["_mcs_customerid_value"];
                this.shareData.serviceproxy["customername"] = resAttr["mcs_customername"];
                this.shareData.serviceproxy["carplate"] = resAttr["mcs_carplate"];
                this.shareData.serviceproxy["customerphone"] = resAttr["mcs_customerphone"];
                this.shareData.serviceproxy["dealerid"] = resAttr["_mcs_dealerid_value"];
                this.shareData.serviceproxy["dealerid_formatted"] = resAttr["_mcs_dealerid_value@OData.Community.Display.V1.FormattedValue"];
            }
            this._page.loadingHide();
        }, (err) => {
            const that = this;
            this._page.alert("消息提示", "数据加载异常", function () {
                that._page.goBack();
            });
            this._page.loadingHide();
        });
    }
    //编辑初始化页面
    pageOnBind(id) {
        this._page.loadingShow();
        this._http.get(this.mod.queryUrl, {
            params: {
                guid: id,
            }
        }, (res) => {
            if (!this._valid.isNull(res.Serviceproxy)) {
                this.shareData.serviceproxy["serviceproxyid"] = id;
                this.shareData.serviceproxy["customerid"] = res["Serviceproxy"]["Attributes"]["_mcs_customerid_value"];
                this.shareData.serviceproxy["customername"] = res["Serviceproxy"]["Attributes"]["mcs_customername"];
                this.shareData.serviceproxy["carplate"] = res["Serviceproxy"]["Attributes"]["mcs_carplate"];
                this.shareData.serviceproxy["customerphone"] = res["Serviceproxy"]["Attributes"]["mcs_customerphone"];
                this.shareData.serviceproxy["dealerid"] = res["Serviceproxy"]["Attributes"]["_mcs_dealerid_value"];
                this.shareData.serviceproxy["dealerid_formatted"] = res["Serviceproxy"]["Attributes"]["_mcs_dealerid_value@OData.Community.Display.V1.FormattedValue"];
                this.shareData.serviceproxy["shuttlename"] = res["Serviceproxy"]["Attributes"]["mcs_shuttlename"];
                this.shareData.serviceproxy["shuttlephone"] = res["Serviceproxy"]["Attributes"]["mcs_shuttlephone"];
                this.shareData.serviceproxy["inpower"] = res["Serviceproxy"]["Attributes"]["mcs_inpower"];
                this.shareData.serviceproxy["mileage"] = res["Serviceproxy"]["Attributes"]["mcs_mileage"];
                this.shareData.serviceproxy["oilquantity"] = String(res["Serviceproxy"]["Attributes"]["mcs_oilquantity"]);
                this.shareData.serviceproxy["arrivalon"] = res["Serviceproxy"]["Attributes"]["mcs_arrivalon"];
                this.shareData.serviceproxy["customercomment"] = res["Serviceproxy"]["Attributes"]["mcs_customercomment"];
                //加入预约单
                this.shareData.serviceproxy["appointmentcode"] = res["Serviceproxy"]["Attributes"]["_mcs_appointmentcode_value"];
                this.shareData.serviceproxy["appointmentcode_formatted"] = res["Serviceproxy"]["Attributes"]["_mcs_appointmentcode_value@OData.Community.Display.V1.FormattedValue"];
            }
            if (!this._valid.isNull(res.ServiceordercheckresultList)) {
                for (var key in res.ServiceordercheckresultList) {
                    var groupKey = res.ServiceordercheckresultList[key]["Attributes"]["mcs_checktype"];
                    if (typeof this.shareData.vehcheckresultMap[groupKey] === "undefined") {
                        this.shareData.vehcheckresultMap[groupKey] = {};
                        this.shareData.vehcheckresultMap[groupKey]["text"] = res.ServiceordercheckresultList[key]["Attributes"]["mcs_checktype@OData.Community.Display.V1.FormattedValue"];
                        this.shareData.vehcheckresultMap[groupKey].data = [];
                    }
                    var obj = {};
                    obj["Id"] = res.ServiceordercheckresultList[key]["Id"];
                    obj["name"] = res.ServiceordercheckresultList[key]["Attributes"]["mcs_name"];
                    obj["checkreult"] = res.ServiceordercheckresultList[key]["Attributes"]["a.mcs_checkreult"];
                    obj["checked"] = true;
                    if (obj["checkreult"] === "异常")
                        obj["checked"] = false;
                    this.shareData.vehcheckresultMap[groupKey].data.push(obj);
                }
            }
            this._page.loadingHide();
        }, (err) => {
            const that = this;
            this._page.alert("消息提示", "数据加载异常", function () {
                that._page.goBack();
            });
            this._page.loadingHide();
        });
    }
    customerOnClick() {
        this.presentModal();
    }
    nextOnClick() {
        var errMessage = "";
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["customerid"])) {
            errMessage += "您尚未选择客户<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["shuttlename"])) {
            errMessage += "您尚未输入送修人<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["shuttlephone"])) {
            errMessage += "您尚未输入送修人手机<br>";
        }
        else if (!this._valid.isPhone(this.shareData.serviceproxy["shuttlephone"])) {
            errMessage += "送修人手机不是正确的手机号码<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["inpower"])) {
            errMessage += "您尚未输入进店电量<br>";
        }
        else if (!this._valid.isNumber(this.shareData.serviceproxy["inpower"])) {
            errMessage += "进店电量不是合法的数字<br>";
        }
        else if (this.shareData.serviceproxy["inpower"] < 0 || this.shareData.serviceproxy["inpower"] > 100) {
            errMessage += "进店电量请输入0-100之间的数字<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["oilquantity"])) {
            errMessage += "您尚未选择进店油量<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["mileage"])) {
            errMessage += "您尚未输入进店里程<br>";
        }
        else if (!this._valid.isNumber(this.shareData.serviceproxy["mileage"])) {
            errMessage += "进店里程不是合法的数字<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["arrivalon"])) {
            errMessage += "您尚未选择到店时间<br>";
        }
        if (errMessage !== "") {
            this._page.presentToastError(errMessage);
            return;
        }
        this._shareData.set(this.mod.shareDataKey, this.shareData);
        this._page.goto("/serving/ri/edit2");
    }
};
tslib_1.__decorate([
    ViewChild(IonBackButton, null),
    tslib_1.__metadata("design:type", IonBackButton)
], EditPage.prototype, "ionBackButton", void 0);
tslib_1.__decorate([
    ViewChild(IonBackButtonDelegate, null),
    tslib_1.__metadata("design:type", IonBackButtonDelegate)
], EditPage.prototype, "ionBackButtonDelegate", void 0);
EditPage = tslib_1.__decorate([
    Component({
        selector: 'app-edit',
        templateUrl: './edit.page.html',
        styleUrls: ['./edit.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController,
        NavController,
        ToastController,
        DCore_Http,
        DCore_Page,
        DCore_ShareData,
        DCore_Valid,
        ActivatedRoute])
], EditPage);
export { EditPage };
//# sourceMappingURL=edit.page.js.map