(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-mcs-onlylead-com-edit-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-onlylead.com/edit/edit.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/mcs-onlylead.com/edit/edit.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/saleing/onlylead/detail\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>编辑唯一线索</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list>\r\n        <ion-item-group>\r\n            <ion-item-divider>\r\n                <ion-label>基本信息</ion-label>\r\n            </ion-item-divider>\r\n            <ion-item>\r\n                <ion-label>姓名<ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-input type=\"text\" slot=\"end\" [(ngModel)]=\"onlylead['mcs_name']\" required></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>手机<ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-input type=\"tel\" slot=\"end\" [(ngModel)]=\"onlylead['mcs_mobilephone']\" required></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-text color=\"danger\">*</ion-text><ion-label>线索来源</ion-label>\r\n                <ion-select [(ngModel)]=\"onlylead['mcs_leadorigin']\" okText=\"确认\" cancelText=\"取消\" required>\r\n                    <ion-select-option value=\"1\">WEB官网</ion-select-option>\r\n                    <ion-select-option value=\"2\">Event-Online</ion-select-option>\r\n                    <ion-select-option value=\"3\">Event-OffLine</ion-select-option>\r\n                    <ion-select-option value=\"4\">Store展厅</ion-select-option>\r\n                    <ion-select-option value=\"5\">400电话</ion-select-option>\r\n                    <ion-select-option value=\"6\">APP</ion-select-option>\r\n                    <ion-select-option value=\"7\">小程序</ion-select-option>\r\n                    <ion-select-option value=\"8\">车机</ion-select-option>\r\n                    <ion-select-option value=\"9\">H5落地页</ion-select-option>\r\n                    <ion-select-option value=\"10\">3D展厅</ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-text color=\"danger\">*</ion-text><ion-label>称呼</ion-label>\r\n                <ion-select [(ngModel)]=\"onlylead['mcs_gender']\" okText=\"确认\" cancelText=\"取消\" required>\r\n                    <ion-select-option value=\"1\">先生</ion-select-option>\r\n                    <ion-select-option value=\"2\">女士</ion-select-option>\r\n                    <ion-select-option value=\"3\">未知</ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>邮箱</ion-label>\r\n                <ion-input type=\"email\" slot=\"end\" [(ngModel)]=\"onlylead['mcs_emailaddress1']\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-text color=\"danger\">*</ion-text><ion-label>评分</ion-label>\r\n                <ion-select [(ngModel)]=\"onlylead['mcs_accountpoints']\" okText=\"确认\" cancelText=\"取消\">\r\n                    <ion-select-option value=\"1\">1分</ion-select-option>\r\n                    <ion-select-option value=\"2\">2分</ion-select-option>\r\n                    <ion-select-option value=\"3\">3分</ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n            <ion-item (click)=\"provinceOnClick()\">\r\n                <ion-label position=\"stacked\">省<ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <p>{{onlylead[\"provincename\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item (click)=\"cityOnClick()\">\r\n                <ion-label position=\"stacked\">市<ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <p>{{onlylead[\"cityname\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item (click)=\"districtOnClick()\">\r\n                <ion-label position=\"stacked\">区<ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <p>{{onlylead[\"districtname\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>用车省份</ion-label>\r\n                <ion-input type=\"text\" slot=\"end\" [(ngModel)]=\"onlylead['mcs_usecarprovince']\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>用车城市</ion-label>\r\n                <ion-input type=\"text\" slot=\"end\" [(ngModel)]=\"onlylead['mcs_usecarcity']\"></ion-input>\r\n            </ion-item>\r\n        </ion-item-group>\r\n        \r\n        <ion-button expand=\"block\" type=\"button\" (click)=\"saveOnClick()\">确定</ion-button>\r\n    </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/saleing/mcs-onlylead.com/edit/edit.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/saleing/mcs-onlylead.com/edit/edit.module.ts ***!
  \**************************************************************/
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
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/saleing/mcs-onlylead.com/edit/edit.page.ts");







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

/***/ "./src/app/saleing/mcs-onlylead.com/edit/edit.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/saleing/mcs-onlylead.com/edit/edit.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvbWNzLW9ubHlsZWFkLmNvbS9lZGl0L2VkaXQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/saleing/mcs-onlylead.com/edit/edit.page.ts":
/*!************************************************************!*\
  !*** ./src/app/saleing/mcs-onlylead.com/edit/edit.page.ts ***!
  \************************************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var app_saleing_saleing_ser_components_select_sysarea_select_sysarea_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/saleing/saleing.ser/components/select-sysarea/select-sysarea.component */ "./src/app/saleing/saleing.ser/components/select-sysarea/select-sysarea.component.ts");
/* harmony import */ var app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/base/base.ser/logininfo.storage */ "./src/app/base/base.ser/logininfo.storage.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");







var EditPage = /** @class */ (function () {
    function EditPage(_modalCtrl, _navCtrl, _http, _page, _logininfo, activeRoute) {
        this._modalCtrl = _modalCtrl;
        this._navCtrl = _navCtrl;
        this._http = _http;
        this._page = _page;
        this._logininfo = _logininfo;
        this.activeRoute = activeRoute;
        this.model = {
            apiUrl: '/api/only-lead/GetOnlyLeadDetail',
            postApiUrl: '/Api/only-lead/AddOrEdit',
            postData: {},
            systemUserId: "",
            dealerId: "",
            onlyLeadId: null,
            countryId: "",
            provinceId: "",
            cityId: "",
            districtId: "",
            level: null //行政区域级别 0:全球、1:国家、2:省、3:市、4:地区
        };
        //页面绑定对象
        this.onlylead = {};
    }
    EditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParams.subscribe(function (params) {
            if (params['id'] != null && params['id'] != undefined) {
                console.log("记录Id:" + _this.model.onlyLeadId);
                _this.model.onlyLeadId = params['id'];
                _this.pageOnBind(_this.model.onlyLeadId);
            }
        });
    };
    //绑定数据
    EditPage.prototype.pageOnBind = function (id) {
        var _this = this;
        //debugger;
        this._page.loadingShow();
        this._http.get(this.model.apiUrl, {
            params: {
                entityid: id,
            }
        }, function (res) {
            if (res !== null) {
                //ID
                _this.onlylead["mcs_onlyleadid"] = res.Id;
                //姓名
                _this.onlylead["mcs_name"] = res["Attributes"]["mcs_name"];
                //线索来源
                _this.onlylead["mcs_leadorigin"] = res["Attributes"]["mcs_leadorigin"];
                //电话
                _this.onlylead["mcs_mobilephone"] = res["Attributes"]["mcs_mobilephone"];
                //性别
                _this.onlylead["mcs_gender"] = res["Attributes"]["mcs_gender"];
                //邮箱
                _this.onlylead["mcs_emailaddress1"] = res["Attributes"]["mcs_emailaddress1"];
                //评分
                _this.onlylead["mcs_accountpoints"] = res["Attributes"]["mcs_accountpoints"];
                //用车省份
                _this.onlylead["mcs_usecarprovince"] = res["Attributes"]["mcs_usecarprovince"];
                //用车城市
                _this.onlylead["mcs_usecarcity"] = res["Attributes"]["mcs_usecarcity"];
                //省份名称
                _this.onlylead["provincename"] = res["Attributes"]["_mcs_provinceid_value@OData.Community.Display.V1.FormattedValue"];
                //省份ID
                _this.model.provinceId = res["Attributes"]["_mcs_provinceid_value"];
                //城市名称
                _this.onlylead["cityname"] = res["Attributes"]["_mcs_cityid_value@OData.Community.Display.V1.FormattedValue"];
                //城市ID
                _this.model.cityId = res["Attributes"]["_mcs_cityid_value"];
                //区名称
                _this.onlylead["districtname"] = res["Attributes"]["_mcs_districtid_value@OData.Community.Display.V1.FormattedValue"];
                //区ID
                _this.model.districtId = res["Attributes"]["_mcs_districtid_value"];
                console.log(res);
            }
            else {
                _this._page.alert("消息提示", "数据加载异常");
            }
            _this._page.loadingHide();
        }, function (err) {
            _this._page.alert("消息提示", "数据加载异常");
            _this._page.loadingHide();
        });
    };
    //获取省组件
    EditPage.prototype.provinceModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.model.countryId = "7E83801C-795B-E911-A824-B53F780FAC1C";
                        this.model.level = 2;
                        return [4 /*yield*/, this._modalCtrl.create({
                                component: app_saleing_saleing_ser_components_select_sysarea_select_sysarea_component__WEBPACK_IMPORTED_MODULE_3__["SelectSysareaComponent"],
                                componentProps: {
                                    'pid': this.model.countryId,
                                    'level': this.model.level,
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
                            if (data != null && typeof data != "undefined") {
                                console.log(data);
                                if (data.id != "undefined") {
                                    this.onlylead["provinceid"] = data.id;
                                    this.onlylead["provincename"] = data.name;
                                }
                                //重置省市区
                                if (this.model.provinceId != data.id) {
                                    //城市名称
                                    this.onlylead["cityname"] = "--";
                                    //城市ID
                                    this.model.cityId = "";
                                    //区名称
                                    this.onlylead["districtname"] = "--";
                                    //区ID
                                    this.model.districtId = "";
                                    this.model.provinceId = data.id;
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //获取市组件
    EditPage.prototype.cityModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.model.level = 3;
                        return [4 /*yield*/, this._modalCtrl.create({
                                component: app_saleing_saleing_ser_components_select_sysarea_select_sysarea_component__WEBPACK_IMPORTED_MODULE_3__["SelectSysareaComponent"],
                                componentProps: {
                                    'pid': this.model.provinceId,
                                    'level': this.model.level,
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
                            if (data != null && typeof data != "undefined") {
                                console.log(data);
                                if (data.id != "undefined") {
                                    this.onlylead["cityid"] = data.id;
                                    this.onlylead["cityname"] = data.name;
                                }
                                //重置省市区
                                if (this.model.cityId != data.id) {
                                    //区名称
                                    this.onlylead["districtname"] = "--";
                                    //区ID
                                    this.model.districtId = "";
                                    this.model.cityId = data.id;
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //获取区组件
    EditPage.prototype.districtModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.model.level = 4;
                        return [4 /*yield*/, this._modalCtrl.create({
                                component: app_saleing_saleing_ser_components_select_sysarea_select_sysarea_component__WEBPACK_IMPORTED_MODULE_3__["SelectSysareaComponent"],
                                componentProps: {
                                    'pid': this.model.cityId,
                                    'level': this.model.level,
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
                            if (data != null && typeof data != "undefined") {
                                console.log(data);
                                if (data.id != "undefined") {
                                    this.onlylead["districtid"] = data.id;
                                    this.onlylead["districtname"] = data.name;
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //触发省事件
    EditPage.prototype.provinceOnClick = function () {
        this.provinceModal();
    };
    //触发市事件
    EditPage.prototype.cityOnClick = function () {
        this.cityModal();
    };
    //触发区事件
    EditPage.prototype.districtOnClick = function () {
        this.districtModal();
    };
    //保存
    EditPage.prototype.saveOnClick = function () {
    };
    EditPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_6__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_6__["DCore_Page"] },
        { type: app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_4__["Storage_LoginInfo"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    EditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-onlylead.com/edit/edit.page.html"),
            styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/saleing/mcs-onlylead.com/edit/edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_6__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_6__["DCore_Page"],
            app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_4__["Storage_LoginInfo"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], EditPage);
    return EditPage;
}());



/***/ })

}]);
//# sourceMappingURL=saleing-mcs-onlylead-com-edit-edit-module-es5.js.map