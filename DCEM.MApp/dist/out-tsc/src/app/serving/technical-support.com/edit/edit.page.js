import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ScSelectComponent } from 'app/serving/serving.ser/components/sc-select/sc-select.component';
import { SelectCustomerComponent } from 'app/serving/serving.ser/components/select-customer/select-customer.component';
import { SelectSystemuserComponent } from 'app/base/base.ser/components/select-systemuser/select-systemuser.component';
import { SelectMalFunctionTypeComponent } from 'app/serving/serving.ser/components/select-malfunctiontype/select.malfunctiontype.component';
import { SelectFileEditComponent } from 'app/serving/serving.ser/components/select-file-edit/select-file-edit.component';
let EditPage = class EditPage {
    constructor(_http, _page, _valid, _userInfo, modalCtrl, activeRoute) {
        this._http = _http;
        this._page = _page;
        this._valid = _valid;
        this._userInfo = _userInfo;
        this.modalCtrl = modalCtrl;
        this.activeRoute = activeRoute;
        this.model = {
            postApiUrl: '/api/tech-support/AddOrEdit',
            detailApiUrl: '/api/tech-support/GetDetail',
            viewData: {
                mcs_serviceorderid_name: '',
                vin: '',
                mcs_customername: '',
                username: '',
                mcs_repairnameidname: '',
                mcs_cartypeidname: '' //车型名称
            },
            postData: {
                EntityName: "mcs_supportorder",
                Id: '',
                mcs_title: '',
                mcs_repairnameid: '',
                mcs_serviceadvisorid: '',
                mcs_serviceorderid: '',
                mcs_email: '',
                mcs_phone: '',
                mcs_customerid: '',
                mcs_ismodifiedparts: false,
                mcs_malfunctiontypeid: '',
                mcs_diagnosiscontent: '',
                mcs_malfunctioncontent: '',
                mcs_replacedparts: '',
                mcs_techqueries: '',
                mcs_techsystem: 0,
                mcs_batterymodel: '',
                mcs_batteryserialnumber: '',
                mcs_carplate: '',
                mcs_customerphone: '',
                mcs_enginenumber: '',
                mcs_modifiedpartscontent: '',
                mcs_motormodel: '',
                mcs_mileage: 0,
                mcs_repairdate: '',
                mcs_cartypeid: '',
                fileEntityArray: []
            },
            fileArray: []
        };
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.GetDetail(params['id']);
            }
        });
        this.model.postData.mcs_serviceadvisorid = this._userInfo.GetSystemUserId();
        this.model.viewData.username = this._userInfo.GetFirstname() + this._userInfo.GetLastname();
    }
    GetDetail(id) {
        this._page.loadingShow();
        this._http.get(this.model.detailApiUrl, {
            params: {
                id: id,
            }
        }, (res) => {
            if (res.TechnicalSupport != null) {
                this.model.postData.mcs_title = res["TechnicalSupport"]["Attributes"]["mcs_title"];
                this.model.postData.mcs_serviceorderid = res["TechnicalSupport"]["Attributes"]["_mcs_serviceorderid_value"];
                this.model.viewData.mcs_serviceorderid_name = res["TechnicalSupport"]["Attributes"]["_mcs_serviceorderid_value@OData.Community.Display.V1.FormattedValue"];
                this.model.postData.mcs_repairnameid = res["TechnicalSupport"]["Attributes"]["_mcs_repairnameid_value"];
                this.model.viewData.mcs_repairnameidname = res["TechnicalSupport"]["Attributes"]["_mcs_repairnameid_value@OData.Community.Display.V1.FormattedValue"];
                this.model.postData.mcs_repairdate = res["TechnicalSupport"]["Attributes"]["mcs_repairdate@OData.Community.Display.V1.FormattedValue"];
                this.model.postData.mcs_email = res["TechnicalSupport"]["Attributes"]["mcs_email"];
                this.model.postData.mcs_phone = res["TechnicalSupport"]["Attributes"]["mcs_phone"];
                this.model.postData.mcs_customername = res["TechnicalSupport"]["Attributes"]["mcs_customername"];
                this.model.postData.mcs_customerphone = res["TechnicalSupport"]["Attributes"]["mcs_customerphone"];
                this.model.postData.mcs_customerid = res["TechnicalSupport"]["Attributes"]["_mcs_customerid_value"];
                this.model.viewData.vin = res["TechnicalSupport"]["Attributes"]["_mcs_customerid_value@OData.Community.Display.V1.FormattedValue"];
                this.model.postData.mcs_carplate = res["TechnicalSupport"]["Attributes"]["mcs_carplate"];
                this.model.postData.mcs_enginenumber = res["TechnicalSupport"]["Attributes"]["mcs_enginenumber"];
                this.model.postData.mcs_mileage = res["TechnicalSupport"]["Attributes"]["mcs_mileage"];
                this.model.postData.mcs_motormodel = res["TechnicalSupport"]["Attributes"]["mcs_motormodel"];
                this.model.postData.mcs_batteryserialnumber = res["TechnicalSupport"]["Attributes"]["mcs_batteryserialnumber"];
                this.model.postData.mcs_batterymodel = res["TechnicalSupport"]["Attributes"]["mcs_batterymodel"];
                this.model.postData.mcs_ismodifiedparts = res["TechnicalSupport"]["Attributes"]["mcs_ismodifiedparts@OData.Community.Display.V1.FormattedValue"];
                this.model.postData.mcs_modifiedpartscontent = res["TechnicalSupport"]["Attributes"]["mcs_modifiedpartscontent"];
                this.model.postData.mcs_techsystem = res["TechnicalSupport"]["Attributes"]["mcs_techsystem"];
                this.model.postData.mcs_malfunctiontypeid = res["TechnicalSupport"]["Attributes"]["_mcs_malfunctiontypeid_value"];
                this.model.viewData.mcs_malfunctiontype_value = res["TechnicalSupport"]["Attributes"]["_mcs_malfunctiontypeid_value@OData.Community.Display.V1.FormattedValue"];
                this.model.postData.mcs_malfunctiontypecontent = res["TechnicalSupport"]["Attributes"]["mcs_malfunctiontypecontent"];
                this.model.postData.mcs_diagnosiscontent = res["TechnicalSupport"]["Attributes"]["mcs_diagnosiscontent"];
                this.model.postData.mcs_replacedparts = res["TechnicalSupport"]["Attributes"]["mcs_replacedparts"];
                this.model.postData.mcs_malfunctioncontent = res["TechnicalSupport"]["Attributes"]["mcs_malfunctioncontent"];
                this.model.postData.mcs_cartypeid = res["TechnicalSupport"]["Attributes"]["_mcs_cartypeid_value"];
                this.model.viewData.mcs_cartypeid_vale = res["TechnicalSupport"]["Attributes"]["_mcs_mcs_cartypeid_value@OData.Community.Display.V1.FormattedValue"];
                if (this.model.fileArray != null && this.model.fileArray.length > 0) {
                }
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
    //选择服务委托书模式窗口
    presentServiceModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: ScSelectComponent
            });
            yield modal.present();
            //监听销毁的事件
            const { data } = yield modal.onDidDismiss();
            if (data != null && data != undefined) {
                var serviceproxymodel = data.model;
                this.model.postData.mcs_serviceorderid = data.id;
                this.model.viewData.mcs_serviceorderid_name = data.name;
                //绑定车辆信息
                if (serviceproxymodel != null && serviceproxymodel != undefined) {
                    this.model.postData.mcs_customerid = serviceproxymodel._mcs_customerid_value;
                    this.model.viewData.vin = data.vin;
                    if (serviceproxymodel.mcs_batterymodel != undefined) {
                        this.model.postData.mcs_batterymodel = serviceproxymodel.mcs_batterymodel;
                    }
                    if (serviceproxymodel.mcs_motorserialnumber != undefined) {
                        this.model.postData.mcs_batteryserialnumber = serviceproxymodel.mcs_motorserialnumber;
                    }
                    if (serviceproxymodel.mcs_carplate != undefined) {
                        this.model.postData.mcs_carplate = serviceproxymodel.mcs_carplate;
                    }
                    if (serviceproxymodel.mcs_customername != undefined) {
                        this.model.viewData.mcs_customername = serviceproxymodel.mcs_customername;
                    }
                    if (serviceproxymodel.mcs_customerphone != undefined) {
                        this.model.postData.mcs_customerphone = serviceproxymodel.mcs_customerphone;
                    }
                    if (serviceproxymodel.mcs_enginennumber != undefined) {
                        this.model.postData.mcs_enginenumber = serviceproxymodel.mcs_enginennumber;
                    }
                    if (serviceproxymodel.mcs_modifiedpartscontent != undefined) {
                        this.model.postData.mcs_modifiedpartscontent = serviceproxymodel.mcs_modifiedpartscontent;
                    }
                    if (serviceproxymodel.mcs_motormodel != undefined) {
                        this.model.postData.mcs_motormodel = serviceproxymodel.mcs_motormodel;
                    }
                    if (serviceproxymodel.mcs_mileage != undefined) {
                        this.model.postData.mcs_mileage = serviceproxymodel.mcs_mileage;
                    }
                    if (serviceproxymodel.mcs_cartypeid != undefined) {
                        this.model.postData.mcs_cartypeid = serviceproxymodel.mcs_cartypeid;
                        this.model.viewData.mcs_cartypeidname = serviceproxymodel.mcs_cartypeidname;
                    }
                }
            }
        });
    }
    //选择附件模式窗口
    presentFileModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modalWin = yield this.modalCtrl.create({
                component: SelectFileEditComponent
            });
            yield modalWin.present();
            const { data } = yield modalWin.onDidDismiss();
            if (data.command === 1) {
                this.model.postData.fileEntityArray = [];
                this.model.fileArray = data.fileArray;
                for (let file of this.model.fileArray) {
                    var obj = {};
                    obj["mcs_filename"] = file["fileName"];
                    obj["mcs_filesize"] = file["fileSize"];
                    obj["mcs_fileurl"] = file["url"];
                    this.model.postData.fileEntityArray.push(obj);
                }
            }
        });
    }
    //选择客户模式窗口
    presentCustomerModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: SelectCustomerComponent
            });
            yield modal.present();
            //监听销毁的事件
            const { data } = yield modal.onDidDismiss();
            if (data != null && data != undefined) {
                var customerModel = data.vehowne.model;
                if (customerModel != null && customerModel != undefined) {
                    this.model.postData.mcs_customerid = customerModel.mcs_vehownerid;
                    this.model.viewData.vin = customerModel.mcs_name;
                    if (customerModel.mcs_batterymodel != undefined) {
                        this.model.postData.mcs_batterymodel = customerModel.mcs_batterymodel;
                    }
                    if (customerModel.mcs_motorserialnumber != undefined) {
                        this.model.postData.mcs_batteryserialnumber = customerModel.mcs_motorserialnumber;
                    }
                    if (customerModel.mcs_vehplate != undefined) {
                        this.model.postData.mcs_carplate = customerModel.mcs_vehplate;
                    }
                    if (customerModel.mcs_fullname != undefined) {
                        this.model.postData.mcs_customername = customerModel.mcs_fullname;
                    }
                    if (customerModel.mcs_mobilephone != undefined) {
                        this.model.postData.mcs_customerphone = customerModel.mcs_mobilephone;
                    }
                    if (customerModel.mcs_enginennumber != undefined) {
                        this.model.postData.mcs_enginenumber = customerModel.mcs_enginennumber;
                    }
                    if (customerModel.mcs_modifiedpartscontent != undefined) {
                        this.model.postData.mcs_modifiedpartscontent = customerModel.mcs_modifiedpartscontent;
                    }
                    if (customerModel.mcs_motormodel != undefined) {
                        this.model.postData.mcs_motormodel = customerModel.mcs_motormodel;
                    }
                    if (customerModel.mcs_netmileage != undefined) {
                        this.model.postData.mcs_mileage = customerModel.mcs_netmileage;
                    }
                    if (customerModel.mcs_cartypeid != undefined) {
                        this.model.postData.mcs_cartypeid = customerModel.mcs_cartypeid;
                        this.model.viewData.mcs_cartypeidname = customerModel.mcs_cartypeidname;
                    }
                }
            }
        });
    }
    presentMalFunctionTypeModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: SelectMalFunctionTypeComponent
            });
            yield modal.present();
            //监听销毁的事件
            const { data } = yield modal.onDidDismiss();
            if (data != null && data != undefined) {
                this.model.postData.mcs_malfunctiontypeid = data.id;
                this.model.viewData.mcs_malfunctiontype_value = data.name;
            }
        });
    }
    presentSystemUserModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: SelectSystemuserComponent
            });
            yield modal.present();
            //监听销毁的事件
            const { data } = yield modal.onDidDismiss();
            if (data != null && data != undefined) {
                this.model.postData.mcs_repairnameid = data.Id;
                this.model.viewData.mcs_repairnameidname = data.fullname;
            }
        });
    }
    save() {
        //数据验证
        var errMessage = "";
        if (this._valid.isNullOrEmpty(this.model.postData.mcs_title)) {
            errMessage += "请输入主题<br>";
        }
        //if (this._valid.isNullOrEmpty(this.model.viewData.mcs_customername)) {
        //    errMessage += "请选择车主<br>";
        //}
        if (this._valid.isNullOrEmpty(this.model.postData.mcs_techsystem)) {
            errMessage += "请选择技术系统<br>";
        }
        if (this._valid.isNullOrEmpty(this.model.viewData.mcs_malfunctiontype_value)) {
            errMessage += "请选择故障类别代码";
        }
        if (errMessage !== "") {
            this._page.presentToastError(errMessage);
            return;
        }
        //请求
        this._page.loadingShow();
        this._http.post(this.model.postApiUrl, this.model.postData, (res) => {
            if (res != "") {
                this._page.alert("消息提示", "保存成功！");
                this._page.goto("/serving/ts/success", { guid: res });
            }
            else {
                this._page.alert("消息提示", "保存失败！");
            }
            this._page.loadingHide();
        }, (err) => {
            debugger;
            this._page.alert("消息提示", "请求异常");
            this._page.loadingHide();
        });
    }
    changePhone(value) {
        // 去除空格
        if (value != null && value != "") {
            const phone = value.replace(/\s/g, '');
            const ischeck = /^(13[0-9]|14[5|7|9]|15[0|1|2|3|5|6|7|8|9]|16[6]|17[0|1|2|3|5|6|7|8]|18[0-9]|19[8|9])\d{8}$/;
            if (!ischeck.test(phone)) {
                this.model.phone = '';
                //super.showToast(this.toastCtrl, '请输入正确的手机号');
            }
        }
    }
    changeEmail(value) {
        if (value != null && value != "") {
            const ischeck = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value);
            if (!ischeck) {
                this.model.email = '';
                //super.showToast(this.toastCtrl, '请输入正确的邮箱格式');
            }
        }
    }
};
EditPage = tslib_1.__decorate([
    Component({
        selector: 'app-edit',
        templateUrl: './edit.page.html',
        styleUrls: ['./edit.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [DCore_Http,
        DCore_Page,
        DCore_Valid,
        Storage_LoginInfo,
        ModalController,
        ActivatedRoute])
], EditPage);
export { EditPage };
//# sourceMappingURL=edit.page.js.map