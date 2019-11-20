(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-mc-reservation-com-edit-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/mc-reservation.com/edit/edit.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/mc-reservation.com/edit/edit.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/reservation/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>创建或编辑预约</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list>\r\n        <ion-item-group>\r\n            <ion-item-divider>\r\n                <ion-label>车主资料</ion-label>\r\n            </ion-item-divider>\r\n            <ion-item (click)=\"customerOnClick()\">\r\n                <ion-label position=\"stacked\">姓名<ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <p>{{shareData.appointmentinfo[\"mcs_customername\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>车牌号</ion-label>\r\n                <ion-note slot=\"end\">{{shareData.appointmentinfo[\"mcs_carplate\"]}}</ion-note>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>车主手机</ion-label>\r\n                <ion-note slot=\"end\">{{shareData.appointmentinfo[\"mcs_customerphone\"]}}</ion-note>\r\n            </ion-item>\r\n            <!--<ion-item>\r\n                <ion-label>客户标签</ion-label>\r\n                <ion-note slot=\"end\">无</ion-note>\r\n            </ion-item>-->\r\n          \r\n        </ion-item-group>\r\n        <ion-item-group>\r\n            <ion-item-divider>\r\n                <ion-label>预约信息</ion-label>\r\n            </ion-item-divider>\r\n            <ion-item>\r\n                <ion-text color=\"danger\">*</ion-text><ion-label>服务类型</ion-label>\r\n                <ion-select [(ngModel)]=\"shareData.appointmentinfo['mcs_ordertype']\" placeholder=\"请选择服务类型\" (ionChange)=\"orderTypeChange()\" okText=\"确认\" cancelText=\"取消\">\r\n                    <ion-select-option value=\"10\">汽车美容</ion-select-option>\r\n                    <ion-select-option value=\"20\">钣金喷漆</ion-select-option>\r\n                    <ion-select-option value=\"30\">常规保养</ion-select-option>\r\n                    <ion-select-option value=\"40\">一般维修</ion-select-option>\r\n                    <ion-select-option value=\"50\">保修</ion-select-option>\r\n                    <ion-select-option value=\"60\">其他</ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n            <ion-item >\r\n                <ion-label>\r\n                    <ion-text color=\"danger\">*</ion-text>预约日期\r\n                </ion-label>\r\n                <ion-datetime displayFormat=\"YYYY-MM-DD\" min=\"1997\"  cancelText=\"取消\" doneText=\"确定\" (ionChange)=\"appointmentAtChange()\"  [(ngModel)]=\"shareData.appointmentinfo['mcs_appointmentat']\"></ion-datetime>\r\n            </ion-item>\r\n          \r\n            <ion-item>\r\n                <ion-label position=\"stacked\">预约时段<ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-select [(ngModel)]=\"shareData.appointmentinfo['mcs_appointmentconfigid']\" (ionChange)=\"appointmentConfigChange()\" placeholder=\"请选择时段\" okText=\"确认\" cancelText=\"取消\">\r\n                    <ion-select-option *ngFor=\"let key of objectKeys(model.appointmentConfigOptionMap)\" value=\"{{model.appointmentConfigOptionMap[key].value}}\">\r\n                        {{model.appointmentConfigOptionMap[key].name}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>可预约数量</ion-label>\r\n                <ion-note slot=\"end\">{{shareData.appointmentinfo[\"mcs_surplusnum\"]}}</ion-note>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"floating\">客户要求</ion-label>\r\n                <ion-textarea [(ngModel)]=\"shareData.appointmentinfo['mcs_customercomment']\"></ion-textarea>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"floating\">问题描述</ion-label>\r\n                <ion-textarea [(ngModel)]=\"shareData.appointmentinfo['mcs_appointmendescript']\"></ion-textarea>\r\n            </ion-item>\r\n        </ion-item-group>\r\n        <ion-button expand=\"block\" type=\"button\" (click)=\"saveOnClick()\">确定</ion-button>\r\n    </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/serving/mc-reservation.com/edit/edit.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/edit/edit.module.ts ***!
  \****************************************************************/
/*! exports provided: EditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/serving/mc-reservation.com/edit/edit.page.ts");







var routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]
    }
];
var EditPageModule = /** @class */ (function () {
    function EditPageModule() {
    }
    EditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
        })
    ], EditPageModule);
    return EditPageModule;
}());



/***/ }),

/***/ "./src/app/serving/mc-reservation.com/edit/edit.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/edit/edit.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvbWMtcmVzZXJ2YXRpb24uY29tL2VkaXQvZWRpdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/serving/mc-reservation.com/edit/edit.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/edit/edit.page.ts ***!
  \**************************************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var app_serving_serving_ser_components_select_customer_select_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/serving/serving.ser/components/select-customer/select-customer.component */ "./src/app/serving/serving.ser/components/select-customer/select-customer.component.ts");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var app_serving_serving_ser_components_select_appointmentconfig_select_appointmentconfig_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/serving/serving.ser/components/select-appointmentconfig/select-appointmentconfig.component */ "./src/app/serving/serving.ser/components/select-appointmentconfig/select-appointmentconfig.component.ts");
/* harmony import */ var app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/base/base.ser/logininfo.storage */ "./src/app/base/base.ser/logininfo.storage.ts");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! silly-datetime */ "./node_modules/silly-datetime/dest/index.js");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(silly_datetime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var EditPage = /** @class */ (function () {
    function EditPage(_modalCtrl, _navCtrl, _http, _page, _logininfo, _shareData, _valid, activeRoute) {
        this._modalCtrl = _modalCtrl;
        this._navCtrl = _navCtrl;
        this._http = _http;
        this._page = _page;
        this._logininfo = _logininfo;
        this._shareData = _shareData;
        this._valid = _valid;
        this.activeRoute = activeRoute;
        this.model = {
            apiUrl: '/api/appointment-info/GetDetail',
            postApiUrl: '/Api/appointment-info/AddOrEdit',
            customerApiUrl: '/Api/Customer/GetCustomerInfo',
            apiConfigUrl: '/api/appointment-info/GetConfig',
            data: {},
            postData: {},
            systemuserid: "",
            mcs_dealerid: "",
            appointmentinfoId: null,
            isOrderTypeChange: false,
            isAppointmentAtChange: false,
            isAppointmentConfigChange: false,
            customerId: "",
            appointmentConfigOptionMap: {} //预约时段
        };
        //定义共享数据
        this.shareData = {
            appointmentinfo: {}
        };
        this.objectKeys = Object.keys;
    }
    EditPage.prototype.ngOnInit = function () {
    };
    EditPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.activeRoute.queryParams.subscribe(function (params) {
            //编辑绑定预约单数据
            if (params['id'] != null && params['id'] != undefined) {
                console.log("记录Id:" + _this.model.appointmentinfoId);
                _this.model.appointmentinfoId = params['id'];
                _this.pageOnBind(_this.model.appointmentinfoId);
            }
            //编辑绑定客户数据
            if (params['customerid'] != null && params['customerid'] != undefined) {
                console.log("记录customerId:" + _this.model.customerId);
                _this.model.customerId = params['customerid'];
                _this.customerOnBind(_this.model.customerId);
            }
        });
    };
    //获取预约时段
    EditPage.prototype.AppointmentConfigOption = function (ordertype, appointmentat) {
        var _this = this;
        this.model.appointmentConfigOptionMap = {};
        this._http.get(this.model.apiConfigUrl, {
            params: {
                mcs_servetype: ordertype,
                mcs_servedate: appointmentat,
            }
        }, function (res) {
            if (res.Results !== null) {
                for (var key in res.Results) {
                    var obj = {};
                    var mapkey = res.Results[key]["Attributes"]["mcs_appointmentconfigid"];
                    console.log(res.Results[key]);
                    obj["value"] = res.Results[key]["Attributes"]["mcs_appointmentconfigid"];
                    obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
                    obj["mcs_surplusnum"] = res.Results[key]["Attributes"]["mcs_surplusnum"];
                    _this.model.appointmentConfigOptionMap[mapkey] = obj;
                    //this.model.appointmentConfigOption.push(obj);
                }
            }
            else {
                _this._page.alert("消息提示", "客户数据加载异常");
            }
        }, function (err) {
            _this._page.alert("消息提示", "客户数据加载异常");
        });
    };
    //绑定客户信息
    EditPage.prototype.customerOnBind = function (customerId) {
        var _this = this;
        this._page.loadingShow();
        this._http.get(this.model.customerApiUrl, {
            params: {
                guid: customerId,
            }
        }, function (res) {
            if (!_this._valid.isNull(res.Vehowner)) {
                _this.shareData.appointmentinfo["mcs_customerid"] = res["Vehowner"].Id;
                _this.shareData.appointmentinfo["mcs_customername"] = res["Vehowner"]["Attributes"]["mcs_fullname"];
                _this.shareData.appointmentinfo["mcs_carplate"] = res["Vehowner"]["Attributes"]["mcs_vehplate"];
                _this.shareData.appointmentinfo["mcs_customerphone"] = res["Vehowner"]["Attributes"]["mcs_mobilephone"];
                _this.shareData.appointmentinfo["mcs_cartype"] = res["Vehowner"]["Attributes"]["_mcs_vehtype_value"];
            }
            else {
                _this._page.alert("消息提示", "车主数据加载异常");
            }
            _this._page.loadingHide();
        }, function (err) {
            _this._page.alert("消息提示", "车主数据加载异常");
            _this._page.loadingHide();
        });
    };
    //调用选择客户组件
    EditPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalCtrl.create({
                            component: app_serving_serving_ser_components_select_customer_select_customer_component__WEBPACK_IMPORTED_MODULE_3__["SelectCustomerComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
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
                        return [2 /*return*/];
                }
            });
        });
    };
    //调用选择时段组件
    EditPage.prototype.configPresentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mcs_ordertype, mcs_appointmentat, modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mcs_ordertype = this.shareData.appointmentinfo["mcs_ordertype"];
                        mcs_appointmentat = this.FormatToDate(this.shareData.appointmentinfo["mcs_appointmentat"]);
                        this.model.systemuserid = this._logininfo.GetSystemUserId(); //"65AD644C-64F7-E811-A81E-9A16184AF7BF"//  
                        this.model.mcs_dealerid = this._logininfo.GetDealerid(); //"b30fefc4-e9f9-e811-a81e-9a16184af7bf"//
                        console.log(mcs_ordertype + " " + mcs_appointmentat + " " + this.model.systemuserid);
                        return [4 /*yield*/, this._modalCtrl.create({
                                component: app_serving_serving_ser_components_select_appointmentconfig_select_appointmentconfig_component__WEBPACK_IMPORTED_MODULE_5__["SelectAppointmentconfigComponent"],
                                componentProps: {
                                    'mcs_dealerid': this.model.mcs_dealerid,
                                    'mcs_servetype': mcs_ordertype,
                                    'mcs_servedate': mcs_appointmentat
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data != null && typeof data != "undefined") {
                            if (data.appointmentconfig != null && typeof data.appointmentconfig != "undefined") {
                                console.log(data.appointmentconfig);
                                this.shareData.appointmentinfo["mcs_appointmentconfigid"] = data.appointmentconfig.mcs_appointmentconfigid;
                                this.shareData.appointmentinfo["mcs_appointmentconfigname"] = data.appointmentconfig.mcs_name;
                                this.shareData.appointmentinfo["mcs_surplusnum"] = data.appointmentconfig.mcs_surplusnum;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //筛选客户
    EditPage.prototype.customerOnClick = function () {
        this.presentModal();
    };
    //选择时段
    EditPage.prototype.appointmentconfigOnClick = function () {
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
    };
    //点击保存
    EditPage.prototype.saveOnClick = function () {
        var _this = this;
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
        this.model.postData["appointmentinfo"]["mcs_appointmentinfoid"] = this.model.appointmentinfoId;
        //this.model.postData["appointmentinfo"]["mcs_dealerid"] = this.model.mcs_dealerid;// 厅店ID
        //this.model.postData["appointmentinfo"]["mcs_serviceadvisorid"] = this.model.systemuserid;// 服务顾问(当前用户)
        this.model.postData["appointmentinfo"]["mcs_customerid"] = this.shareData.appointmentinfo["mcs_customerid"]; // VIN码关联实体ID
        this.model.postData["appointmentinfo"]["mcs_customername"] = this.shareData.appointmentinfo["mcs_customername"]; // 车主
        this.model.postData["appointmentinfo"]["mcs_carplate"] = this.shareData.appointmentinfo["mcs_carplate"]; // 车牌
        this.model.postData["appointmentinfo"]["mcs_cartype"] = this.shareData.appointmentinfo["mcs_cartype"]; // 车型
        this.model.postData["appointmentinfo"]["mcs_customerphone"] = this.shareData.appointmentinfo["mcs_customerphone"]; //手机号
        this.model.postData["appointmentinfo"]["mcs_tag"] = this.shareData.appointmentinfo["mcs_tag"]; //客户标签
        this.model.postData["appointmentinfo"]["mcs_ordertype"] = Number(this.shareData.appointmentinfo["mcs_ordertype"]); //预约服务类型
        this.model.postData["appointmentinfo"]["mcs_appointmentat"] = this.shareData.appointmentinfo["mcs_appointmentat"]; //预约日期
        this.model.postData["appointmentinfo"]["mcs_appointmentconfigid"] = this.shareData.appointmentinfo["mcs_appointmentconfigid"]; //预约时段
        this.model.postData["appointmentinfo"]["mcs_surplusnum"] = Number(this.shareData.appointmentinfo["mcs_surplusnum"]); //可预约数量
        this.model.postData["appointmentinfo"]["mcs_customercomment"] = this.shareData.appointmentinfo["mcs_customercomment"]; //客户要求
        this.model.postData["appointmentinfo"]["mcs_appointmendescript"] = this.shareData.appointmentinfo["mcs_appointmendescript"]; //问题描述
        //this.model.postData["appointmentinfo"]["mcs_status"] =10;//预约状态
        this._page.loadingShow();
        this._http.post(this.model.postApiUrl, this.model.postData, function (res) {
            _this._page.loadingHide();
            if (res.Result == true) {
                console.log("res");
                console.log(res);
                var guid = res["Data"]["Id"];
                _this._page.goto("/serving/reservation/success", { guid: guid });
            }
            else {
                _this._page.alert("消息提示", "操作失败");
            }
        }, function (err) {
            _this._page.loadingHide();
            _this._page.alert("消息提示", "操作失败");
        });
    };
    //编辑绑定数据
    EditPage.prototype.pageOnBind = function (id) {
        var _this = this;
        this._page.loadingShow();
        this._http.get(this.model.apiUrl, {
            params: {
                entityid: id,
            }
        }, function (res) {
            if (res !== null) {
                _this.shareData.appointmentinfo["mcs_appointmentinfoid"] = res.Id;
                _this.shareData.appointmentinfo["mcs_customername"] = res["Attributes"]["mcs_customername"];
                _this.shareData.appointmentinfo["mcs_carplate"] = res["Attributes"]["mcs_carplate"];
                _this.shareData.appointmentinfo["mcs_customerphone"] = res["Attributes"]["mcs_customerphone"];
                _this.shareData.appointmentinfo["mcs_tag"] = res["Attributes"]["mcs_tag"];
                _this.shareData.appointmentinfo["mcs_ordertype"] = String(res["Attributes"]["mcs_ordertype"]);
                _this.shareData.appointmentinfo["mcs_appointmentat"] = res["Attributes"]["mcs_appointmentat"];
                _this.shareData.appointmentinfo["mcs_appointmentconfigname"] = res["Attributes"]["mcs_appointmentconfigid"] != null ? res["Attributes"]["mcs_appointmentconfigid"]["mcs_name"] : null;
                _this.shareData.appointmentinfo["mcs_surplusnum"] = res["Attributes"]["mcs_appointmentconfigid"] != null ? res["Attributes"]["mcs_appointmentconfigid"]["mcs_surplusnum"] : 0;
                _this.shareData.appointmentinfo["mcs_customercomment"] = res["Attributes"]["mcs_customercomment"];
                _this.shareData.appointmentinfo["mcs_appointmendescript"] = res["Attributes"]["mcs_appointmendescript"];
                _this.shareData.appointmentinfo["mcs_appointmentconfigid"] = res["Attributes"]["_mcs_appointmentconfigid_value"];
                _this.shareData.appointmentinfo["mcs_customerid"] = res["Attributes"]["_mcs_customerid_value"];
                console.log(res);
                var ordertype = _this.shareData.appointmentinfo["mcs_ordertype"];
                var appointmentat = _this.FormatToDate(_this.shareData.appointmentinfo["mcs_appointmentat"]);
                //this.model.mcs_dealerid = this._logininfo.GetDealerid();
                //处理预约时段
                _this.AppointmentConfigOption(ordertype, appointmentat);
            }
            else {
                _this._page.alert("消息提示", "预约单加载异常");
            }
            _this._page.loadingHide();
        }, function (err) {
            _this._page.alert("消息提示", "数据加载异常");
            _this._page.loadingHide();
        });
    };
    //预约类型改变事件
    EditPage.prototype.orderTypeChange = function () {
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
    };
    //预约日期改变
    EditPage.prototype.appointmentAtChange = function () {
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
    };
    //日期格式
    EditPage.prototype.FormatToDate = function (date) {
        if (date != null && date != undefined) {
            return silly_datetime__WEBPACK_IMPORTED_MODULE_7___default.a.format(date, 'YYYY-MM-DD');
        }
        else {
            return '';
        }
    };
    //时段获取数量
    EditPage.prototype.appointmentConfigChange = function () {
        var key = this.shareData.appointmentinfo["mcs_appointmentconfigid"];
        this.shareData.appointmentinfo["mcs_surplusnum"] = this.model.appointmentConfigOptionMap[key]["mcs_surplusnum"];
    };
    EditPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Page"] },
        { type: app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_6__["Storage_LoginInfo"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_ShareData"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Valid"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
    ]; };
    EditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/mc-reservation.com/edit/edit.page.html"),
            styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/serving/mc-reservation.com/edit/edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Page"],
            app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_6__["Storage_LoginInfo"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_ShareData"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Valid"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], EditPage);
    return EditPage;
}());



/***/ })

}]);
//# sourceMappingURL=serving-mc-reservation-com-edit-edit-module-es5.js.map