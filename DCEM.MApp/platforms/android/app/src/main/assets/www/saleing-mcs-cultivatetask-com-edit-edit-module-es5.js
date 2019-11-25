(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-mcs-cultivatetask-com-edit-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-cultivatetask.com/edit/edit.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/mcs-cultivatetask.com/edit/edit.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\"  ></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{shareData.viewTitle}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-list lines=\"full\">\r\n        <div *ngIf=\"showcount\">\r\n            <ion-item-divider color=\"primary\">\r\n                <ion-label>\r\n                    销售机会\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    销售机会编号\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.data[\"accountnumber\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    姓名\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.data[\"accountname\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    手机号码\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.data[\"accountphone\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    订单编号\r\n                </ion-label>\r\n                <p>{{shareData.data[\"accountorder\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    创建时间\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.data[\"accountcreatedon\"]}}&nbsp;</p>\r\n            </ion-item>\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"showcontact\">\r\n            <ion-item-divider color=\"primary\">\r\n                <ion-label>\r\n                    潜客\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    编号\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.data[\"contactcode\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    姓名\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.data[\"contactname\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    手机号码\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.data[\"contactphone\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    邮箱\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.data[\"contactemailaddress\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    渠道用户id\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.data[\"contactuserid\"]}}&nbsp;</p>\r\n            </ion-item>\r\n\r\n        </div>\r\n        <div *ngIf=\"showonlylead\">\r\n            <ion-item-divider color=\"primary\">\r\n                <ion-label>\r\n                    唯一线索\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    姓名\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.data[\"onlyleadname\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    邮箱\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.data[\"onlyleademail\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    手机号码\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.data[\"onlyleadphone\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    线索来源\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.data[\"onlyleadorigin\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    称呼\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.data[\"onlyleadgender\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    评分\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.data[\"onlyleadpoints\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    用车省份\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.data[\"onlyleadprovince\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    用车城市\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.data[\"onlyleadcity\"]}}&nbsp;</p>\r\n            </ion-item>\r\n        </div>\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                培育任务\r\n            </ion-label>\r\n        </ion-item-divider>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                主题\r\n                <ion-text color=\"danger\">*</ion-text>\r\n            </ion-label>\r\n            <ion-input placeholder=\"请输入主题\" type=\"text\" [(ngModel)]=\"shareData.edititem['mcs_name']\" required>\r\n            </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                本次跟进内容\r\n                <ion-text color=\"danger\">*</ion-text>\r\n            </ion-label>\r\n            <ion-textarea placeholder=\"请输入本次跟进内容\" [(ngModel)]=\"shareData.edititem['mcs_thisfollowupcontent']\">\r\n            </ion-textarea>\r\n        </ion-item>\r\n        <ion-item >\r\n            <ion-label position=\"stacked\">\r\n                重要级别\r\n            </ion-label>\r\n            <ion-select cancelText=\"取消\" okText=\"确定\" placeholder=\"请选择重要级别\"\r\n                [(ngModel)]=\"shareData.edititem['mcs_importantlevel']\"> \r\n                <ion-select-option  *ngFor=\"let item of shareData.selectimportantlevel\" [value]=\"item.value\"  >{{item.name}}\r\n                </ion-select-option> \r\n            </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                线索状态\r\n            </ion-label>\r\n            <ion-select cancelText=\"取消\" okText=\"确定\" placeholder=\"请选择线索状态\"\r\n                [(ngModel)]=\"shareData.edititem['mcs_excutestatus']\" > \r\n                <ion-select-option [value]=\"item.value\"  *ngFor=\"let item of shareData.selectexcutestatus\">{{item.name}}\r\n                </ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">下次跟进内容</ion-label>\r\n            <ion-textarea placeholder=\"请输入下次跟进内容\" [(ngModel)]=\"shareData.edititem['mcs_nextfollowupcontent']\">\r\n            </ion-textarea>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                下次跟进时间\r\n                <ion-text color=\"danger\">*</ion-text>\r\n            </ion-label>\r\n            <ion-datetime cancelText=\"取消\" doneText=\"确定\" placeholder=\"请选择下次跟进时间\" display-format=\"YYYY-MM-DD HH:mm\"\r\n                [(ngModel)]=\"shareData.edititem['mcs_nextfollowuptime']\"></ion-datetime>\r\n        </ion-item>\r\n    </ion-list>\r\n    <!-- <ion-item *ngIf=\"showactivitystatus\">\r\n            <ion-label position=\"stacked\">\r\n                任务状态\r\n            </ion-label>\r\n            <ion-select cancelText=\"取消\" okText=\"确定\" placeholder=\"请选择任务状态\"\r\n                [(ngModel)]=\"shareData.edititem['mcs_activitystatus']\" > \r\n                <ion-select-option value=\"1\" >close</ion-select-option>\r\n                <ion-select-option value=\"0\" >open</ion-select-option>\r\n            </ion-select>\r\n        </ion-item> -->\r\n    <section style=\"text-align:center;\">\r\n        <ion-button style=\"width:40%\" color=\"danger\" (click)=\"OnPostClick()\">保存</ion-button>\r\n    </section>\r\n    <br />\r\n    <br />\r\n</ion-content>"

/***/ }),

/***/ "./src/app/saleing/mcs-cultivatetask.com/edit/edit.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/saleing/mcs-cultivatetask.com/edit/edit.module.ts ***!
  \*******************************************************************/
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
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/saleing/mcs-cultivatetask.com/edit/edit.page.ts");







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

/***/ "./src/app/saleing/mcs-cultivatetask.com/edit/edit.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/saleing/mcs-cultivatetask.com/edit/edit.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvbWNzLWN1bHRpdmF0ZXRhc2suY29tL2VkaXQvZWRpdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/saleing/mcs-cultivatetask.com/edit/edit.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/saleing/mcs-cultivatetask.com/edit/edit.page.ts ***!
  \*****************************************************************/
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
/* harmony import */ var _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../saleing.ser/optionset.service */ "./src/app/saleing/saleing.ser/optionset.service.ts");






var EditPage = /** @class */ (function () {
    function EditPage(_modalCtrl, _navCtrl, _toastCtrl, _http, _page, _shareData, _valid, _activeRoute, _optionset) {
        this._modalCtrl = _modalCtrl;
        this._navCtrl = _navCtrl;
        this._toastCtrl = _toastCtrl;
        this._http = _http;
        this._page = _page;
        this._shareData = _shareData;
        this._valid = _valid;
        this._activeRoute = _activeRoute;
        this._optionset = _optionset;
        this.showcount = false;
        this.showcontact = false;
        this.showonlylead = false;
        this.showactivitystatus = false;
        this.mod = {
            addoreditUrl: '/api/activity/addoredit',
            querydetailUrl: '/api/activity/GetDetail',
            getContactcDetail: '/api/activity/getcontactdetail',
            getOnlyleadDetail: '/api/activity/getonlyleaddetail',
            getAccountDetail: '/api/activity/getaccountdetail',
            data: {},
            shareDataKey: "riEditData",
        };
        //定义共享数据
        this.shareData = {
            actioncode: 1,
            viewTitle: "",
            selectexcutestatus: {},
            selectimportantlevel: {},
            data: [],
            edititem: []
        };
    }
    EditPage.prototype.ngOnInit = function () {
        var _this = this;
        this._activeRoute.queryParams.subscribe(function (params) {
            _this.shareData.selectexcutestatus = _this._optionset.Get("act_mcs_excutestatus");
            _this.shareData.selectimportantlevel = _this._optionset.Get("mcs_importantlevel");
            if (params['id'] != null && params['id'] != undefined) {
                _this.EditOnBind(params['id']);
            }
            else {
                _this.AddOnBind(params['type'], params['sourid']);
            }
        });
    };
    //新增
    //type   1 来源唯一线索；2来源潜客；3来源销售机会；0 无来源新增修改
    EditPage.prototype.AddOnBind = function (type, sourid) {
        var _this = this;
        this.shareData.viewTitle = '新增';
        this.shareData.edititem["mcs_activitystatus"] = 0;
        this.shareData.edititem["mcs_isaddedtodes"] = false;
        this.shareData.edititem["mcs_ifsystemcreate"] = false;
        this.shareData.edititem["mcs_iffollowed"] = false;
        if (type == '1') {
            this.shareData.edititem["mcs_onlyleadid"] = sourid;
            this._http.get(this.mod.getOnlyleadDetail, {
                params: {
                    id: sourid,
                }
            }, function (res) {
                _this.showonlylead = true;
                if (!_this._valid.isNull(res["Attributes"])) {
                    _this.shareData.data["onlyleadname"] = res["Attributes"]["onlyleadname"];
                    _this.shareData.data["onlyleademail"] = res["Attributes"]["onlyleademail"];
                    _this.shareData.data["onlyleadphone"] = res["Attributes"]["onlyleadphone"];
                    _this.shareData.data["onlyleadprovince"] = res["Attributes"]["onlyleadprovince"];
                    _this.shareData.data["onlyleadcity"] = res["Attributes"]["onlyleadcity"];
                    _this.shareData.data["onlyleadorigin"] = _this._optionset.GetOptionSetNameByValue("lead_mcs_leadorigin", res["Attributes"]["onlyleadorigin"]);
                    _this.shareData.data["onlyleadgender"] = _this._optionset.GetOptionSetNameByValue("lead_mcs_gender", res["Attributes"]["onlyleadgender"]);
                    _this.shareData.data["onlyleadpoints"] = _this._optionset.GetOptionSetNameByValue("lead_mcs_accountpoints", res["Attributes"]["onlyleadpoints"]);
                }
                _this._page.loadingHide();
            }, function (err) {
                var that = _this;
                _this._page.alert("消息提示", "数据加载异常", function () {
                    that._page.goBack();
                });
                _this._page.loadingHide();
            });
        }
        else if (type == '2') {
            this.shareData.edititem["mcs_contactid"] = sourid;
            this._http.get(this.mod.getContactcDetail, {
                params: {
                    id: sourid,
                }
            }, function (res) {
                _this.showcontact = true;
                if (!_this._valid.isNull(res["Attributes"])) {
                    _this.shareData.data["contactcode"] = res["Attributes"]["contactcode"];
                    _this.shareData.data["contactname"] = res["Attributes"]["contactname"];
                    _this.shareData.data["contactphone"] = res["Attributes"]["contactphone"];
                    _this.shareData.data["contactemailaddress"] = res["Attributes"]["contactemailaddress"];
                    _this.shareData.data["contactuserid"] = res["Attributes"]["contactuserid"];
                }
                _this._page.loadingHide();
            }, function (err) {
                var that = _this;
                _this._page.alert("消息提示", "数据加载异常", function () {
                    that._page.goBack();
                });
                _this._page.loadingHide();
            });
        }
        else if (type == '3') {
            this.shareData.edititem["mcs_accountid"] = sourid;
            this._http.get(this.mod.getAccountDetail, {
                params: {
                    id: sourid,
                }
            }, function (res) {
                _this.showcount = true;
                if (!_this._valid.isNull(res["Attributes"])) {
                    _this.shareData.data["accountnumber"] = res["Attributes"]["accountnumber"];
                    _this.shareData.data["accountname"] = res["Attributes"]["accountname"];
                    _this.shareData.data["accountphone"] = res["Attributes"]["accountphone"];
                    _this.shareData.data["accountcreatedon"] = res["Attributes"]["accountcreatedon"];
                    _this.shareData.data["accountorder"] = res["Attributes"]["accountorder"];
                }
                _this._page.loadingHide();
            }, function (err) {
                var that = _this;
                _this._page.alert("消息提示", "数据加载异常", function () {
                    that._page.goBack();
                });
                _this._page.loadingHide();
            });
        }
    };
    //编辑初始化页面
    //type   1 来源唯一线索；2来源潜客；3来源销售机会；0 无来源新增修改
    EditPage.prototype.EditOnBind = function (id) {
        var _this = this;
        this.shareData.viewTitle = '修改';
        this._page.loadingShow();
        this._http.get(this.mod.querydetailUrl, {
            params: {
                id: id,
            }
        }, function (res) {
            if (!_this._valid.isNull(res["Attributes"])) {
                if (res["Attributes"]["_mcs_contactid_value"] != null) {
                    _this.showcontact = true;
                    _this.shareData.data["contactcode"] = res["Attributes"]["contactcode"];
                    _this.shareData.data["contactname"] = res["Attributes"]["contactname"];
                    _this.shareData.data["contactphone"] = res["Attributes"]["contactphone"];
                    _this.shareData.data["contactemailaddress"] = res["Attributes"]["contactemailaddress"];
                    _this.shareData.data["contactuserid"] = res["Attributes"]["contactuserid"];
                }
                if (res["Attributes"]["_mcs_accountid_value"] != null) {
                    _this.showcount = true;
                    _this.shareData.data["accountnumber"] = res["Attributes"]["accountnumber"];
                    _this.shareData.data["accountname"] = res["Attributes"]["accountname"];
                    _this.shareData.data["accountphone"] = res["Attributes"]["accountphone"];
                    _this.shareData.data["accountcreatedon"] = res["Attributes"]["accountcreatedon"];
                    _this.shareData.data["accountorder"] = res["Attributes"]["accountorder"];
                }
                if (res["Attributes"]["_mcs_onlyleadid_value"] != null) {
                    _this.showonlylead = true;
                    _this.shareData.data["onlyleadname"] = res["Attributes"]["onlyleadname"];
                    _this.shareData.data["onlyleademail"] = res["Attributes"]["onlyleademail"];
                    _this.shareData.data["onlyleadphone"] = res["Attributes"]["onlyleadphone"];
                    _this.shareData.data["onlyleadprovince"] = res["Attributes"]["onlyleadprovince"];
                    _this.shareData.data["onlyleadcity"] = res["Attributes"]["onlyleadcity"];
                    _this.shareData.data["onlyleadorigin"] = _this._optionset.GetOptionSetNameByValue("lead_mcs_leadorigin", res["Attributes"]["onlyleadorigin"]);
                    _this.shareData.data["onlyleadgender"] = _this._optionset.GetOptionSetNameByValue("lead_mcs_gender", res["Attributes"]["onlyleadgender"]);
                    _this.shareData.data["onlyleadpoints"] = _this._optionset.GetOptionSetNameByValue("lead_mcs_accountpoints", res["Attributes"]["onlyleadpoints"]);
                }
                _this.shareData.edititem["id"] = id;
                _this.shareData.edititem["mcs_activitystatus"] = res["Attributes"]["mcs_activitystatus"];
                _this.shareData.edititem["mcs_name"] = res["Attributes"]["mcs_name"];
                _this.shareData.edititem["mcs_excutestatus"] = res["Attributes"]["mcs_excutestatus"];
                _this.shareData.edititem["mcs_importantlevel"] = res["Attributes"]["mcs_importantlevel"];
                _this.shareData.edititem["mcs_thisfollowupcontent"] = res["Attributes"]["mcs_thisfollowupcontent"];
                _this.shareData.edititem["mcs_nextfollowupcontent"] = res["Attributes"]["mcs_nextfollowupcontent"];
                _this.shareData.edititem["mcs_nextfollowuptime"] = res["Attributes"]["mcs_nextfollowuptime"];
                //修改状态下状态为开启才显示状态修改框
                if (_this.shareData.edititem["mcs_activitystatus"] == 0) {
                    _this.showactivitystatus = true;
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
    //提交数据保存
    EditPage.prototype.OnPostClick = function () {
        var _this = this;
        var errMessage = "";
        if (this._valid.isNullOrEmpty(this.shareData.edititem["mcs_name"])) {
            errMessage += "您尚未输入姓名<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.edititem["mcs_thisfollowupcontent"])) {
            errMessage += "您尚未输入本次跟进内容<br>";
        }
        if (errMessage !== "") {
            this._page.presentToastError(errMessage);
            return;
        }
        var postData = {};
        //postData["mcs_activitystatus"] = this.shareData.edititem["mcs_activitystatus"];
        postData["mcs_contactid"] = this.shareData.edititem["mcs_contactid"];
        postData["mcs_onlyleadid"] = this.shareData.edititem["mcs_onlyleadid"];
        postData["mcs_accountid"] = this.shareData.edititem["mcs_accountid"];
        postData["id"] = this.shareData.edititem["id"];
        postData["mcs_activitystatus"] = this.shareData.edititem["mcs_activitystatus"];
        postData["mcs_name"] = this.shareData.edititem["mcs_name"];
        postData["mcs_excutestatus"] = this.shareData.edititem["mcs_excutestatus"];
        postData["mcs_importantlevel"] = this.shareData.edititem["mcs_importantlevel"];
        postData["mcs_thisfollowupcontent"] = this.shareData.edititem["mcs_thisfollowupcontent"];
        postData["mcs_nextfollowupcontent"] = this.shareData.edititem["mcs_nextfollowupcontent"];
        postData["mcs_nextfollowuptime"] = this.shareData.edititem["mcs_nextfollowuptime"];
        this._page.loadingShow();
        this._http.post(this.mod.addoreditUrl, postData, function (res) {
            _this._page.loadingHide();
            console.log(res);
            if (res.Result == true) {
                var that_1 = _this;
                _this._page.alert("消息提示", "操作成功", function () {
                    that_1._page.goBack();
                });
            }
            else {
                _this._page.alert("消息提示", "操作失败");
            }
        }, function (err) {
            _this._page.loadingHide();
            _this._page.alert("消息提示", "操作失败");
        });
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
        { type: _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"] }
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
            template: __webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-cultivatetask.com/edit/edit.page.html"),
            styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/saleing/mcs-cultivatetask.com/edit/edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_ShareData"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Valid"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"]])
    ], EditPage);
    return EditPage;
}());



/***/ })

}]);
//# sourceMappingURL=saleing-mcs-cultivatetask-com-edit-edit-module-es5.js.map