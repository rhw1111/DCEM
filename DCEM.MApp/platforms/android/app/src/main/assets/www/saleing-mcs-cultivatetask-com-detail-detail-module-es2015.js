(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-mcs-cultivatetask-com-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-cultivatetask.com/detail/detail.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/mcs-cultivatetask.com/detail/detail.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button text=\"返回\" defaultHref=\"/saleing/cultivatetask/list\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>培育任务详情</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list lines=\"full\">\r\n        <ion-item-divider color=\"primary\">\r\n          <ion-label>\r\n            线索信息\r\n          </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              姓名\r\n            </h2>\r\n            <p>{{model.onlyLeadData.mcs_name}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              手机\r\n            </h2>\r\n            <p>{{model.onlyLeadData.mcs_mobilephone}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              线索来源\r\n            </h2>\r\n            <p>{{model.onlyLeadData.mcs_leadorigin}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              称呼\r\n            </h2>\r\n            <p>{{model.onlyLeadData.mcs_gender}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              评分\r\n            </h2>\r\n            <p>{{model.onlyLeadData.mcs_accountpoints}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              用车省份\r\n            </h2>\r\n            <p>{{model.onlyLeadData.mcs_usecarprovince}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              用车城市\r\n            </h2>\r\n            <p>{{model.onlyLeadData.mcs_usecarcity}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n       \r\n        <ion-item-divider color=\"primary\">\r\n          <ion-label>\r\n            培育信息\r\n          </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              主题\r\n            </h2>\r\n            <p>{{model.activityData.mcs_name}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              重要级别\r\n            </h2>\r\n            <p>{{model.activityData.mcs_importantlevel}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n              <h2>\r\n                任务状态\r\n              </h2>\r\n              <p>{{model.activityData.mcs_activitystatus}}&nbsp;</p>\r\n            </ion-label>\r\n          </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              结束时间\r\n            </h2>\r\n            <p>{{model.activityData.mcs_endtime}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              本次跟进内容\r\n            </h2>\r\n            <p>{{model.activityData.mcs_thisfollowupcontent}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>  \r\n        <ion-item>\r\n            <ion-label>\r\n              <h2>\r\n                下次跟进时间\r\n              </h2>\r\n              <p>{{model.activityData.mcs_nextfollowuptime}}&nbsp;</p>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>\r\n              <h2>\r\n                  下次跟进内容\r\n              </h2>\r\n              <p>{{model.activityData.mcs_nextfollowupcontent}}&nbsp;</p>\r\n            </ion-label>\r\n          </ion-item>  \r\n      </ion-list>\r\n     \r\n      <ion-fab *ngIf=\"model.activityData.mcs_activitystatus=='open'\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button>\r\n            <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n        </ion-fab-button>\r\n        <ion-fab-list side=\"top\">\r\n            <ion-fab-button [routerLink]=\"['/saleing/cultivatetask/edit']\" [queryParams]=\"{id:model.activityData.mcs_activityid}\" title=\"编辑\" color=\"primary\" >\r\n                编辑\r\n            </ion-fab-button>\r\n            <ion-fab-button  title=\"完成\" color=\"primary\" (click)=\"TaskFinish()\">\r\n                完成\r\n            </ion-fab-button>\r\n           \r\n        </ion-fab-list>\r\n    </ion-fab>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/saleing/mcs-cultivatetask.com/detail/detail.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/saleing/mcs-cultivatetask.com/detail/detail.module.ts ***!
  \***********************************************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/saleing/mcs-cultivatetask.com/detail/detail.page.ts");







const routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]
    }
];
let DetailPageModule = class DetailPageModule {
};
DetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })
], DetailPageModule);



/***/ }),

/***/ "./src/app/saleing/mcs-cultivatetask.com/detail/detail.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/saleing/mcs-cultivatetask.com/detail/detail.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvbWNzLWN1bHRpdmF0ZXRhc2suY29tL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/saleing/mcs-cultivatetask.com/detail/detail.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/saleing/mcs-cultivatetask.com/detail/detail.page.ts ***!
  \*********************************************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_base_ser_dateformat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../base/base.ser/dateformat */ "./src/app/base/base.ser/dateformat.ts");
/* harmony import */ var _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../saleing.ser/optionset.service */ "./src/app/saleing/saleing.ser/optionset.service.ts");






let DetailPage = class DetailPage {
    constructor(_http, _page, activeRoute, optionset, dateformat) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this.optionset = optionset;
        this.dateformat = dateformat;
        this.model = {
            apiUrlInfo: '/api/only-lead/GetAcvitityDetail',
            addoreditUrl: '/api/activity/addoredit',
            activityData: {
                mcs_activityid: "",
                mcs_name: "",
                mcs_importantlevel: "",
                mcs_endtime: "",
                mcs_thisfollowupcontent: "",
                mcs_nextfollowuptime: "",
                mcs_nextfollowupcontent: "",
                mcs_activitystatus: "" //任务状态
            },
            onlyLeadData: {
                mcs_onlyleadid: "",
                mcs_name: "",
                mcs_mobilephone: "",
                mcs_leadorigin: "",
                mcs_gender: "",
                mcs_accountpoints: "",
                mcs_usecarprovince: "",
                mcs_usecarcity: "" //用车城市
            }
        };
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.model.activityData.mcs_activityid = params['id'];
                this.pageOnBind(params['id']);
            }
        });
    }
    //加载培育任务详情
    pageOnBind(id) {
        //debugger;
        this._page.loadingShow();
        this._http.get(this.model.apiUrlInfo, {
            params: {
                mcs_activityid: id,
            }
        }, (res) => {
            //debugger;
            //绑定培育信息
            if (res.ActivityInfo !== null) {
                this.model.activityData.mcs_name = res["ActivityInfo"]["Attributes"]["mcs_name"];
                this.model.activityData.mcs_importantlevel = this.optionset.GetOptionSetNameByValue("mcs_importantlevel", res["ActivityInfo"]["Attributes"]["mcs_importantlevel"]);
                this.model.activityData.mcs_endtime = this.dateformat.FormatToDateTime(res["ActivityInfo"]["Attributes"]["mcs_endtime"]);
                this.model.activityData.mcs_thisfollowupcontent = res["ActivityInfo"]["Attributes"]["mcs_thisfollowupcontent"];
                this.model.activityData.mcs_nextfollowuptime = this.dateformat.FormatToDateTime(res["ActivityInfo"]["Attributes"]["mcs_nextfollowuptime"]);
                this.model.activityData.mcs_nextfollowupcontent = res["ActivityInfo"]["Attributes"]["mcs_nextfollowupcontent"];
                this.model.activityData.mcs_activitystatus = this.optionset.GetOptionSetNameByValue("mcs_activitystatus", res["ActivityInfo"]["Attributes"]["mcs_activitystatus"]);
            }
            //绑定唯一线索信息
            if (res.OnlyLeadInfo != null) {
                this.model.onlyLeadData.mcs_name = res["OnlyLeadInfo"]["Attributes"]["mcs_name"];
                this.model.onlyLeadData.mcs_mobilephone = res["OnlyLeadInfo"]["Attributes"]["mcs_mobilephone"];
                this.model.onlyLeadData.mcs_leadorigin = this.optionset.GetOptionSetNameByValue("mcs_leadorigin", res["OnlyLeadInfo"]["Attributes"]["mcs_leadorigin"]);
                this.model.onlyLeadData.mcs_gender = this.optionset.GetOptionSetNameByValue("mcs_gender", res["OnlyLeadInfo"]["Attributes"]["mcs_gender"]);
                this.model.onlyLeadData.mcs_accountpoints = this.optionset.GetOptionSetNameByValue("lead_mcs_accountpoints", res["OnlyLeadInfo"]["Attributes"]["mcs_accountpoints"]);
                this.model.onlyLeadData.mcs_usecarprovince = res["OnlyLeadInfo"]["Attributes"]["mcs_usecarprovince"];
                this.model.onlyLeadData.mcs_usecarcity = res["OnlyLeadInfo"]["Attributes"]["mcs_usecarcity"];
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
    //任务完成
    TaskFinish() {
        this._page.confirm("确认提示", "确定完成该任务？", () => {
            this.UpdateState();
        });
    }
    UpdateState() {
        debugger;
        var postData = {};
        postData["id"] = this.model.activityData.mcs_activityid;
        postData["mcs_activitystatus"] = 1; //已完成
        postData["mcs_endtime"] = new Date();
        this._page.loadingShow();
        this._http.post(this.model.addoreditUrl, postData, (res) => {
            this._page.loadingHide();
            console.log(res);
            if (res.Result == true) {
                const that = this;
                this._page.alert("消息提示", "操作成功", () => {
                    this.pageOnBind(this.model.activityData.mcs_activityid);
                });
            }
            else {
                this._page.alert("消息提示", "操作失败");
            }
        }, (err) => {
            this._page.loadingHide();
            this._page.alert("消息提示", "操作失败");
        });
    }
};
DetailPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"] },
    { type: _base_base_ser_dateformat__WEBPACK_IMPORTED_MODULE_4__["Dateformat"] }
];
DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-cultivatetask.com/detail/detail.page.html"),
        styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/saleing/mcs-cultivatetask.com/detail/detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"],
        _base_base_ser_dateformat__WEBPACK_IMPORTED_MODULE_4__["Dateformat"]])
], DetailPage);



/***/ })

}]);
//# sourceMappingURL=saleing-mcs-cultivatetask-com-detail-detail-module-es2015.js.map