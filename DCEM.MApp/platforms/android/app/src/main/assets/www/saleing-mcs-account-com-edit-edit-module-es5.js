(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-mcs-account-com-edit-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-account.com/edit/edit.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/mcs-account.com/edit/edit.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/saleing/account/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{shareData.viewTitle}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-list lines=\"full\">\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                客户信息\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                <ion-icon name=\"lock\"></ion-icon>\r\n                机会编号\r\n            </ion-label>\r\n            <p>{{mod.displayData.accountnumber}}&nbsp;</p>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                姓名\r\n                <ion-text color=\"danger\">*</ion-text>\r\n            </ion-label>\r\n            <ion-input placeholder=\"请输入姓名\" [(ngModel)]=\"shareData.account['name']\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                手机\r\n            </ion-label>\r\n            <ion-input placeholder=\"请输入手机\" [(ngModel)]=\"shareData.account['mcs_mobilephone']\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                称呼\r\n            </ion-label>\r\n            <ion-select placeholder=\"请选择称呼\" cancelText=\"取消\" okText=\"确定\" [(ngModel)]=\"shareData.account['mcs_gender']\">\r\n                <ion-select-option *ngFor=\"let item of mod.initData.genderArray\" value=\"{{item.value}}\">\r\n                    {{item.name}}\r\n                </ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                引荐车主\r\n            </ion-label>\r\n            <ion-input placeholder=\"请输入引荐车主\" maxlength=\"12\" [(ngModel)]=\"shareData.account['mcs_introducecarowner']\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                <ion-icon name=\"lock\"></ion-icon>\r\n                大订单号\r\n            </ion-label>\r\n            <p>{{mod.displayData.order_Formatted}}&nbsp;</p>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                <ion-icon name=\"lock\"></ion-icon>\r\n                小订单号\r\n            </ion-label>\r\n            <p>{{mod.displayData.smallorderid_FormattedValue}}&nbsp;</p>\r\n        </ion-item>\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                购车意向\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                意向等级\r\n            </ion-label>\r\n            <ion-select placeholder=\"请选择意向登记\" cancelText=\"取消\" okText=\"确定\" [(ngModel)]=\"shareData.account['mcs_level']\">\r\n                <ion-select-option *ngFor=\"let item of mod.initData.levelArray\" value=\"{{item.value}}\">\r\n                    {{item.name}}\r\n                </ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                预测成交日期\r\n            </ion-label>\r\n            <ion-datetime placeholder=\"请选择预测成交日期\" cancelText=\"取消\" doneText=\"确定\" display-format=\"YYYY-MM-DD HH:mm\" [(ngModel)]=\"shareData.account['mcs_estimatedtransactiondate']\"></ion-datetime>\r\n        </ion-item>\r\n        <ion-item (click)=\"vehcolorModal()\">\r\n            <ion-label position=\"stacked\">\r\n                <ion-icon name=\"search\"></ion-icon>\r\n                意向颜色\r\n            </ion-label>\r\n            <p>{{mod.displayData.mcs_vehcolorid}}&nbsp;</p>\r\n        </ion-item>\r\n        <ion-item (click)=\"vehtypeModal()\">\r\n            <ion-label position=\"stacked\">\r\n                <ion-icon name=\"search\"></ion-icon>\r\n                意向车型\r\n            </ion-label>\r\n            <p>{{mod.displayData.mcs_vehtypeid}}&nbsp;</p>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                购车用途\r\n            </ion-label>\r\n            <ion-select placeholder=\"请选择购车用途\" cancelText=\"取消\" okText=\"确定\" [(ngModel)]=\"shareData.account['mcs_purchasepurpose']\">\r\n                <ion-select-option *ngFor=\"let item of mod.initData.purchasepurposeArray\" value=\"{{item.value}}\">\r\n                    {{item.name}}\r\n                </ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                车辆使用人\r\n            </ion-label>\r\n            <ion-select placeholder=\"请选择车辆使用人\" cancelText=\"取消\" okText=\"确定\" [(ngModel)]=\"shareData.account['mcs_vehicleusers']\">\r\n                <ion-select-option *ngFor=\"let item of mod.initData.vehicleusersArray\" value=\"{{item.value}}\">\r\n                    {{item.name}}\r\n                </ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                购车关注\r\n            </ion-label>\r\n            <ion-input placeholder=\"请输入购车关注\" maxlength=\"50\" [(ngModel)]=\"shareData.account['mcs_carattention']\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                年龄段\r\n            </ion-label>\r\n            <ion-select placeholder=\"请选择年龄段\" cancelText=\"取消\" okText=\"确定\" [(ngModel)]=\"shareData.account['mcs_generation']\">\r\n                <ion-select-option *ngFor=\"let item of mod.initData.generationArray\" value=\"{{item.value}}\">\r\n                    {{item.name}}\r\n                </ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                购买方式\r\n            </ion-label>\r\n            <ion-select placeholder=\"请选择购买方式\" cancelText=\"取消\" okText=\"确定\" [(ngModel)]=\"shareData.account['mcs_purchaseway']\">\r\n                <ion-select-option *ngFor=\"let item of mod.initData.purchasewayArray\" value=\"{{item.value}}\">\r\n                    {{item.name}}\r\n                </ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                竞品车型\r\n            </ion-label>\r\n            <ion-input placeholder=\"请输入竞品车型\" [(ngModel)]=\"shareData.account['mcs_competingtype']\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                关注原因\r\n            </ion-label>\r\n            <ion-select placeholder=\"请选择关注原因\" cancelText=\"取消\" okText=\"确定\" [(ngModel)]=\"shareData.account['mcs_carereason']\">\r\n                    <ion-select-option *ngFor=\"let item of mod.initData.carereasonArray\" value=\"{{item.value}}\">\r\n                        {{item.name}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n        </ion-item>\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                其它\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">特殊备注</ion-label>\r\n            <ion-textarea placeholder=\"请输入特殊备注\" [(ngModel)]=\"shareData.account['description']\"></ion-textarea>\r\n        </ion-item>\r\n    </ion-list>\r\n\r\n    <section style=\"text-align:center;\">\r\n        <ion-button style=\"width:40%\" color=\"danger\" (click)=\"saveOnClick()\">保存</ion-button>\r\n    </section>\r\n    <br />\r\n    <br />\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/saleing/mcs-account.com/edit/edit.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/saleing/mcs-account.com/edit/edit.module.ts ***!
  \*************************************************************/
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
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/saleing/mcs-account.com/edit/edit.page.ts");







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

/***/ "./src/app/saleing/mcs-account.com/edit/edit.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/saleing/mcs-account.com/edit/edit.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvbWNzLWFjY291bnQuY29tL2VkaXQvZWRpdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/saleing/mcs-account.com/edit/edit.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/saleing/mcs-account.com/edit/edit.page.ts ***!
  \***********************************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_saleing_saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/saleing/saleing.ser/optionset.service */ "./src/app/saleing/saleing.ser/optionset.service.ts");
/* harmony import */ var app_saleing_saleing_ser_components_select_vehicletype_select_vehicletype_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/saleing/saleing.ser/components/select-vehicletype/select-vehicletype.component */ "./src/app/saleing/saleing.ser/components/select-vehicletype/select-vehicletype.component.ts");
/* harmony import */ var app_saleing_saleing_ser_components_select_vehiclecolor_select_vehiclecolor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/saleing/saleing.ser/components/select-vehiclecolor/select-vehiclecolor.component */ "./src/app/saleing/saleing.ser/components/select-vehiclecolor/select-vehiclecolor.component.ts");








var EditPage = /** @class */ (function () {
    function EditPage(_modalCtrl, _navCtrl, _toastCtrl, _http, _page, _shareData, _valid, _activeRoute, _optionSetService) {
        this._modalCtrl = _modalCtrl;
        this._navCtrl = _navCtrl;
        this._toastCtrl = _toastCtrl;
        this._http = _http;
        this._page = _page;
        this._shareData = _shareData;
        this._valid = _valid;
        this._activeRoute = _activeRoute;
        this._optionSetService = _optionSetService;
        this.mod = {
            queryUrl: '/Api/account/GetDetail',
            postApiUrl: '/Api/account/AddOrEdit',
            OnlyLead: {
                detailUrl: '/api/only-lead/GetOnlyLeadDetail',
                mcs_onlyleadid: ''
            },
            onlyLeadDetailUrl: '/Api/account/GetDetail',
            data: {},
            initData: {
                genderArray: [],
                levelArray: [],
                vehicleusersArray: [],
                purchasepurposeArray: [],
                carattentionArray: [],
                generationArray: [],
                purchasewayArray: [],
                carereasonArray: []
            },
            displayData: {
                mcs_vehtypeid: "",
                mcs_vehcolorid: "",
                smallorderid_FormattedValue: "",
                order_Formatted: "",
                accountnumber: ""
            },
            postData: {},
            shareDataKey: "accountEditData",
        };
        //定义共享数据
        this.shareData = {
            actioncode: 1,
            viewTitle: "",
            account: {}
        };
    }
    EditPage.prototype.ngOnInit = function () {
        this.mod.initData.genderArray = this._optionSetService.Get('mcs_gender');
        this.mod.initData.levelArray = this._optionSetService.Get('mcs_level');
        this.mod.initData.vehicleusersArray = this._optionSetService.Get('mcs_vehicleusers');
        this.mod.initData.purchasepurposeArray = this._optionSetService.Get('mcs_purchasepurpose');
        this.mod.initData.carattentionArray = this._optionSetService.Get('mcs_carattention');
        this.mod.initData.generationArray = this._optionSetService.Get('mcs_generation');
        this.mod.initData.purchasewayArray = this._optionSetService.Get('mcs_purchaseway');
        this.mod.initData.carereasonArray = this._optionSetService.Get('mcs_carereason');
        //const that = this;
        //this.ionBackButtonDelegate.onClick = function (event) {
        //    that._shareData.delete(that.mod.shareDataKey);
        //    that._page.navigateRoot("/serving/ri/list", null, "back");
        //}
    };
    EditPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this._activeRoute.queryParams.subscribe(function (params) {
            if (!_this._valid.isNull(params['id']) && !_this._valid.isNull(params['actionCode'])) {
                _this.shareData.actioncode = Number(params['actionCode']);
                _this.shareData.account["accountid"] = params['id'];
            }
            if (_this.shareData.actioncode === 2) {
                if (!_this._shareData.has(_this.mod.shareDataKey)) {
                    _this.shareData.viewTitle = "编辑销售机会";
                    _this.pageOnBind(_this.shareData.account["accountid"]);
                }
            }
            else {
                _this.shareData.viewTitle = "新增销售机会";
                if (!_this._valid.isNull(params['onlyleadid'])) {
                    _this.mod.OnlyLead.mcs_onlyleadid = params['onlyleadid'];
                    _this.createDataBind();
                }
            }
        });
    };
    //选择意向颜色
    EditPage.prototype.vehcolorModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalCtrl.create({
                            component: app_saleing_saleing_ser_components_select_vehiclecolor_select_vehiclecolor_component__WEBPACK_IMPORTED_MODULE_7__["SelectVehiclecolorComponent"]
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
                                this.shareData.account["mcs_vehcolorid"] = data.id;
                                this.mod.displayData.mcs_vehcolorid = data.name;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //选择意向车型
    EditPage.prototype.vehtypeModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalCtrl.create({
                            component: app_saleing_saleing_ser_components_select_vehicletype_select_vehicletype_component__WEBPACK_IMPORTED_MODULE_6__["SelectVehicletypeComponent"]
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
                                this.shareData.account["mcs_vehtypeid"] = data.id;
                                this.mod.displayData.mcs_vehtypeid = data.name;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //唯一线索创建销售机会数据绑定
    EditPage.prototype.createDataBind = function () {
        var _this = this;
        this._page.loadingShow();
        this._http.get(this.mod.OnlyLead.detailUrl, {
            params: {
                entityid: this.mod.OnlyLead.mcs_onlyleadid,
            }
        }, function (res) {
            if (res !== null) {
                console.log(res["Attributes"]);
                _this.shareData.account["name"] = res["Attributes"]["mcs_name"]; //姓名
                _this.shareData.account["mcs_mobilephone"] = res["Attributes"]["mcs_mobilephone"]; //手机
                _this.shareData.account["mcs_gender"] = String(res["Attributes"]["mcs_gender"]);
            }
            else {
                _this._page.alert("消息提示", "基础数据加载异常");
            }
            _this._page.loadingHide();
        }, function (err) {
            _this._page.alert("消息提示", "数据加载异常");
            _this._page.loadingHide();
        });
    };
    //编辑初始化页面
    EditPage.prototype.pageOnBind = function (id) {
        var _this = this;
        this._page.loadingShow();
        this._http.get(this.mod.queryUrl, {
            params: {
                id: id,
            }
        }, function (res) {
            console.log(res);
            _this.mod.displayData.accountnumber = res["Attributes"]["accountnumber"];
            _this.shareData.account["name"] = res["Attributes"]["name"];
            _this.shareData.account["mcs_mobilephone"] = res["Attributes"]["mcs_mobilephone"];
            _this.shareData.account["mcs_gender"] = String(res["Attributes"]["mcs_gender"]);
            _this.shareData.account["mcs_introducecarowner"] = res["Attributes"]["mcs_introducecarowner"];
            _this.mod.displayData.order_Formatted = res["Attributes"]["_mcs_tc_order_value@OData.Community.Display.V1.FormattedValue"];
            _this.mod.displayData.smallorderid_FormattedValue = res["Attributes"]["_mcs_smallorderid_value@OData.Community.Display.V1.FormattedValue"];
            _this.shareData.account["mcs_level"] = String(res["Attributes"]["mcs_level"]);
            //this.shareData.account["level"] = String(res["Attributes"]["mcs_level"]);
            _this._page.loadingHide();
            console.log(_this.shareData.account);
        }, function (err) {
            var that = _this;
            _this._page.alert("消息提示", "数据加载异常", function () {
                that._page.goBack();
            });
            _this._page.loadingHide();
        });
    };
    //public customerOnClick() {
    //    this.presentModal();
    //}
    EditPage.prototype.saveOnClick = function () {
        var _this = this;
        this._page.loadingShow();
        //数据请求
        var errMessage = "";
        if (this._valid.isNullOrEmpty(this.shareData.account["name"])) {
            errMessage += "请输入客户名称<br>";
        }
        if (errMessage !== "") {
            this._page.presentToastError(errMessage);
            return;
        }
        else {
            //请求
            this.mod.postData = this.shareData.account;
            this.mod.postData["mcs_gender"] = Number(this.mod.postData["mcs_gender"]);
            this.mod.postData["mcs_level"] = Number(this.mod.postData["mcs_level"]);
            this.mod.postData["mcs_purchasepurpose"] = Number(this.mod.postData["mcs_purchasepurpose"]);
            this.mod.postData["mcs_vehicleusers"] = Number(this.mod.postData["mcs_vehicleusers"]);
            this.mod.postData["mcs_carattention"] = Number(this.mod.postData["mcs_carattention"]);
            this.mod.postData["mcs_generation"] = Number(this.mod.postData["mcs_generation"]);
            this.mod.postData["mcs_purchaseway"] = Number(this.mod.postData["mcs_purchaseway"]);
            this._http.postForToaken(this.mod.postApiUrl, this.mod.postData, function (res) {
                if (res != "") {
                    _this._page.alert("消息提示", "保存成功！");
                    _this._page.goto("/saling/account/success", { guid: res });
                }
                else {
                    _this._page.alert("消息提示", "保存失败！");
                }
                _this._page.loadingHide();
            }, function (err) {
                debugger;
                _this._page.alert("消息提示", "请求异常");
                _this._page.loadingHide();
            });
        }
    };
    EditPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_ShareData"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Valid"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_saleing_saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"] }
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
            template: __webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-account.com/edit/edit.page.html"),
            styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/saleing/mcs-account.com/edit/edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_ShareData"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Valid"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_saleing_saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"]])
    ], EditPage);
    return EditPage;
}());



/***/ })

}]);
//# sourceMappingURL=saleing-mcs-account-com-edit-edit-module-es5.js.map