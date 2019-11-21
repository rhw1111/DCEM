(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-reception-interrogation-com-edit-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/reception-interrogation.com/edit/edit.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/reception-interrogation.com/edit/edit.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/ri/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{shareData.viewTitle}}</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-list lines=\"full\">\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                车主资料\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item (click)=\"customerOnClick()\">\r\n            <ion-label position=\"stacked\">\r\n                <ion-icon name=\"search\"></ion-icon>\r\n                姓名\r\n                <ion-text color=\"danger\">*</ion-text>\r\n            </ion-label>\r\n            <p>{{shareData.serviceproxy[\"customername\"]}}&nbsp;</p>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                <ion-icon name=\"lock\"></ion-icon>\r\n                车牌\r\n                <ion-text color=\"danger\">*</ion-text>\r\n            </ion-label>\r\n            <p>{{shareData.serviceproxy[\"carplate\"]}}&nbsp;</p>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                <ion-icon name=\"lock\"></ion-icon>\r\n                手机\r\n                <ion-text color=\"danger\">*</ion-text>\r\n            </ion-label>\r\n            <p>{{shareData.serviceproxy[\"customerphone\"]}}&nbsp;</p>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                <ion-icon name=\"lock\"></ion-icon>\r\n                厅店\r\n                <ion-text color=\"danger\">*</ion-text>\r\n            </ion-label>\r\n            <p>{{shareData.serviceproxy[\"dealerid_formatted\"]}}&nbsp;</p>\r\n        </ion-item>\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                委托信息\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item (click)=\"presentAppointmentinfoModal()\">\r\n            <ion-label position=\"stacked\">\r\n                <ion-icon name=\"search\"></ion-icon>\r\n                预约单\r\n            </ion-label>\r\n            <p>{{shareData.serviceproxy[\"appointmentcode_formatted\"]}}&nbsp;</p>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                送修人\r\n                <ion-text color=\"danger\">*</ion-text>\r\n            </ion-label>\r\n            <ion-input placeholder=\"请输入送修人姓名\" maxlength=\"12\" [(ngModel)]=\"shareData.serviceproxy['shuttlename']\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                送修人手机\r\n                <ion-text color=\"danger\">*</ion-text>\r\n            </ion-label>\r\n            <ion-input placeholder=\"请输入11位手机号\" type=\"phone\" [(ngModel)]=\"shareData.serviceproxy['shuttlephone']\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                进店电量（%）\r\n                <ion-text color=\"danger\">*</ion-text>\r\n            </ion-label>\r\n            <ion-input placeholder=\"请输入0-100之间的数字\" type=\"number\" [(ngModel)]=\"shareData.serviceproxy['inpower']\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                进店油量\r\n                <ion-text color=\"danger\">*</ion-text>\r\n            </ion-label>\r\n            <ion-select cancelText=\"取消\" okText=\"确定\" placeholder=\"请选择进店油量\" [(ngModel)]=\"shareData.serviceproxy['oilquantity']\">\r\n                <ion-select-option value=\"10\">1/4</ion-select-option>\r\n                <ion-select-option value=\"20\">1/2</ion-select-option>\r\n                <ion-select-option value=\"30\">3/4</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                进店里程\r\n                <ion-text color=\"danger\">*</ion-text>\r\n            </ion-label>\r\n            <ion-input placeholder=\"请输入进店里程\" type=\"number\" [(ngModel)]=\"shareData.serviceproxy['mileage']\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                到店时间\r\n                <ion-text color=\"danger\">*</ion-text>\r\n            </ion-label>\r\n            <ion-datetime cancelText=\"取消\" doneText=\"确定\" placeholder=\"请选择到店时间\" display-format=\"YYYY-MM-DD HH:mm\" [(ngModel)]=\"shareData.serviceproxy['arrivalon']\"></ion-datetime>\r\n        </ion-item>\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                其它\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">客户描述</ion-label>\r\n            <ion-textarea placeholder=\"请输入客户描述信息\" [(ngModel)]=\"shareData.serviceproxy['customercomment']\"></ion-textarea>\r\n        </ion-item>\r\n    </ion-list>\r\n\r\n    <section style=\"text-align:center;\">\r\n        <ion-button style=\"width:40%\" color=\"danger\" (click)=\"nextOnClick()\">下一步</ion-button>\r\n    </section>\r\n    <br />\r\n    <br />\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/reception-interrogation.com/edit/edit.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/serving/reception-interrogation.com/edit/edit.module.ts ***!
  \*************************************************************************/
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
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/serving/reception-interrogation.com/edit/edit.page.ts");







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
            declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]],
            entryComponents: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ]
        })
    ], EditPageModule);
    return EditPageModule;
}());



/***/ }),

/***/ "./src/app/serving/reception-interrogation.com/edit/edit.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/serving/reception-interrogation.com/edit/edit.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvcmVjZXB0aW9uLWludGVycm9nYXRpb24uY29tL2VkaXQvZWRpdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/serving/reception-interrogation.com/edit/edit.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/serving/reception-interrogation.com/edit/edit.page.ts ***!
  \***********************************************************************/
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_serving_serving_ser_components_select_appointmentinfo_select_appointmentinfo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/serving/serving.ser/components/select-appointmentinfo/select-appointmentinfo.component */ "./src/app/serving/serving.ser/components/select-appointmentinfo/select-appointmentinfo.component.ts");







var EditPage = /** @class */ (function () {
    function EditPage(_modalCtrl, _navCtrl, _toastCtrl, _http, _page, _shareData, _valid, _activeRoute) {
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
    EditPage.prototype.ngOnInit = function () {
        var that = this;
        this.ionBackButtonDelegate.onClick = function (event) {
            that._shareData.delete(that.mod.shareDataKey);
            that._page.navigateRoot("/serving/ri/list", null, "back");
        };
    };
    EditPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this._activeRoute.queryParams.subscribe(function (params) {
            if (_this._shareData.has(_this.mod.shareDataKey)) {
                _this.shareData = _this._shareData.get(_this.mod.shareDataKey);
            }
            else {
                if (!_this._valid.isNull(params['id']) && !_this._valid.isNull(params['actionCode'])) {
                    _this.shareData.actioncode = Number(params['actionCode']);
                    _this.shareData.serviceproxy["serviceproxyid"] = params['id'];
                }
                if (_this.shareData.actioncode === 2) {
                    if (!_this._shareData.has(_this.mod.shareDataKey)) {
                        _this.shareData.viewTitle = "编辑问诊单";
                        _this.shareData.serviceproxy["serviceproxyid"] = params['id'];
                        _this.pageOnBind(_this.shareData.serviceproxy["serviceproxyid"]);
                    }
                }
                else if (_this.shareData.actioncode === 3) { //从预约单转换服务委托书
                    if (!_this._shareData.has(_this.mod.shareDataKey)) {
                        _this.shareData.viewTitle = "创建问诊单";
                        _this.shareData.serviceproxy["appointmentcode"] = params['id'];
                        _this.pageOnBindFromAppointmentcode(_this.shareData.serviceproxy["appointmentcode"]);
                    }
                }
                else {
                    _this.shareData.viewTitle = "创建问诊单";
                }
            }
        });
    };
    //选择客户
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
                                this.shareData.serviceproxy["customerid"] = data.vehowne.vehownerid;
                                this.shareData.serviceproxy["customername"] = data.vehowne.fullname;
                                this.shareData.serviceproxy["carplate"] = data.vehowne.vehplate;
                                this.shareData.serviceproxy["customerphone"] = data.vehowne.mobilephone;
                                this.shareData.serviceproxy["dealerid"] = data.vehowne["model"]["_mcs_dealer_value"];
                                this.shareData.serviceproxy["dealerid_formatted"] = data.vehowne["model"]["_mcs_dealer_value@OData.Community.Display.V1.FormattedValue"];
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //选预约单
    EditPage.prototype.presentAppointmentinfoModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data, resAttr;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalCtrl.create({
                            component: app_serving_serving_ser_components_select_appointmentinfo_select_appointmentinfo_component__WEBPACK_IMPORTED_MODULE_6__["SelectAppointmentinfoComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (!this._valid.isNull(data) && !this._valid.isNull(data["model"])) {
                            resAttr = data["model"];
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
                        return [2 /*return*/];
                }
            });
        });
    };
    //预约单的初始化页面
    EditPage.prototype.pageOnBindFromAppointmentcode = function (id) {
        var _this = this;
        this._page.loadingShow();
        this._http.get(this.mod.queryAppointmentcodeUrl, {
            params: {
                entityid: id,
            }
        }, function (res) {
            if (!_this._valid.isNull(res) && !_this._valid.isNull(res["Attributes"])) {
                var resAttr = res["Attributes"];
                debugger;
                //加入预约单
                _this.shareData.serviceproxy["appointmentcode"] = resAttr["mcs_appointmentinfoid"];
                _this.shareData.serviceproxy["appointmentcode_formatted"] = resAttr["mcs_name"];
                //加入带出的信息
                _this.shareData.serviceproxy["customerid"] = resAttr["_mcs_customerid_value"];
                _this.shareData.serviceproxy["customername"] = resAttr["mcs_customername"];
                _this.shareData.serviceproxy["carplate"] = resAttr["mcs_carplate"];
                _this.shareData.serviceproxy["customerphone"] = resAttr["mcs_customerphone"];
                _this.shareData.serviceproxy["dealerid"] = resAttr["_mcs_dealerid_value"];
                _this.shareData.serviceproxy["dealerid_formatted"] = resAttr["_mcs_dealerid_value@OData.Community.Display.V1.FormattedValue"];
            }
            _this._page.loadingHide();
        }, function (err) {
            var that = _this;
            _this._page.alert("消息提示", "数据加载异常", function () {
                that._page.goBack();
            });
            _this._page.loadingHide();
        });
    };
    //编辑初始化页面
    EditPage.prototype.pageOnBind = function (id) {
        var _this = this;
        this._page.loadingShow();
        this._http.get(this.mod.queryUrl, {
            params: {
                guid: id,
            }
        }, function (res) {
            if (!_this._valid.isNull(res.Serviceproxy)) {
                console.log(res.Serviceproxy);
                _this.shareData.serviceproxy["serviceproxyid"] = id;
                _this.shareData.serviceproxy["customerid"] = res["Serviceproxy"]["Attributes"]["_mcs_customerid_value"];
                _this.shareData.serviceproxy["customername"] = res["Serviceproxy"]["Attributes"]["mcs_customername"];
                _this.shareData.serviceproxy["carplate"] = res["Serviceproxy"]["Attributes"]["mcs_carplate"];
                _this.shareData.serviceproxy["customerphone"] = res["Serviceproxy"]["Attributes"]["mcs_customerphone"];
                _this.shareData.serviceproxy["dealerid"] = res["Serviceproxy"]["Attributes"]["_mcs_dealerid_value"];
                _this.shareData.serviceproxy["dealerid_formatted"] = res["Serviceproxy"]["Attributes"]["_mcs_dealerid_value@OData.Community.Display.V1.FormattedValue"];
                _this.shareData.serviceproxy["shuttlename"] = res["Serviceproxy"]["Attributes"]["mcs_shuttlename"];
                _this.shareData.serviceproxy["shuttlephone"] = res["Serviceproxy"]["Attributes"]["mcs_shuttlephone"];
                _this.shareData.serviceproxy["inpower"] = res["Serviceproxy"]["Attributes"]["mcs_inpower"];
                _this.shareData.serviceproxy["mileage"] = res["Serviceproxy"]["Attributes"]["mcs_mileage"];
                _this.shareData.serviceproxy["oilquantity"] = String(res["Serviceproxy"]["Attributes"]["mcs_oilquantity"]);
                _this.shareData.serviceproxy["arrivalon"] = res["Serviceproxy"]["Attributes"]["mcs_arrivalon"];
                _this.shareData.serviceproxy["customercomment"] = res["Serviceproxy"]["Attributes"]["mcs_customercomment"];
                //加入预约单
                _this.shareData.serviceproxy["appointmentcode"] = res["Serviceproxy"]["Attributes"]["_mcs_appointmentcode_value"];
                _this.shareData.serviceproxy["appointmentcode_formatted"] = res["Serviceproxy"]["Attributes"]["_mcs_appointmentcode_value@OData.Community.Display.V1.FormattedValue"];
            }
            if (!_this._valid.isNull(res.ServiceordercheckresultList)) {
                for (var key in res.ServiceordercheckresultList) {
                    var groupKey = res.ServiceordercheckresultList[key]["Attributes"]["mcs_checktype"];
                    if (typeof _this.shareData.vehcheckresultMap[groupKey] === "undefined") {
                        _this.shareData.vehcheckresultMap[groupKey] = {};
                        _this.shareData.vehcheckresultMap[groupKey]["text"] = res.ServiceordercheckresultList[key]["Attributes"]["mcs_checktype@OData.Community.Display.V1.FormattedValue"];
                        _this.shareData.vehcheckresultMap[groupKey].data = [];
                    }
                    var obj = {};
                    obj["Id"] = res.ServiceordercheckresultList[key]["Id"];
                    obj["name"] = res.ServiceordercheckresultList[key]["Attributes"]["mcs_name"];
                    obj["checkreult"] = res.ServiceordercheckresultList[key]["Attributes"]["a_x002e_mcs_checkreult"];
                    obj["checked"] = true;
                    if (obj["checkreult"] === "异常")
                        obj["checked"] = false;
                    _this.shareData.vehcheckresultMap[groupKey].data.push(obj);
                }
            }
            _this._page.loadingHide();
        }, function (err) {
            var that = _this;
            _this._page.alert("消息提示", "数据加载异常", function () {
                that._page.goBack();
            });
            _this._page.loadingHide();
        });
    };
    EditPage.prototype.customerOnClick = function () {
        this.presentModal();
    };
    EditPage.prototype.nextOnClick = function () {
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
    };
    EditPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Page"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_ShareData"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Valid"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"])
    ], EditPage.prototype, "ionBackButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"])
    ], EditPage.prototype, "ionBackButtonDelegate", void 0);
    EditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/reception-interrogation.com/edit/edit.page.html"),
            styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/serving/reception-interrogation.com/edit/edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Page"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_ShareData"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Valid"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], EditPage);
    return EditPage;
}());



/***/ })

}]);
//# sourceMappingURL=serving-reception-interrogation-com-edit-edit-module-es5.js.map