(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-mc-reservation-com-cancel-cancel-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/mc-reservation.com/cancel/cancel.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/mc-reservation.com/cancel/cancel.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/reservation/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>预约取消</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list>\r\n        <ion-item-group>\r\n            <!--<ion-item-divider color=\"primary\">\r\n                <ion-label>取消原因</ion-label>\r\n            </ion-item-divider>-->\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">取消原因<ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-select [(ngModel)]=\"shareData.appointmentinfo['mcs_cancelreasonnew']\" okText=\"确认\" cancelText=\"取消\">\r\n                    <ion-select-option value=\"10\">待料</ion-select-option>\r\n                    <ion-select-option value=\"20\">价格太高</ion-select-option>\r\n                    <ion-select-option value=\"30\">设备不足</ion-select-option>\r\n                    <ion-select-option value=\"40\">堵车</ion-select-option>\r\n                    <ion-select-option value=\"50\">技术不足</ion-select-option>\r\n                    <ion-select-option value=\"60\">天气不好</ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">取消描述<ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-textarea [(ngModel)]=\"shareData.appointmentinfo['mcs_canceldes']\"></ion-textarea>\r\n            </ion-item>\r\n        </ion-item-group>\r\n    </ion-list>\r\n    <ion-button expand=\"block\" type=\"button\" (click)=\"saveOnClick()\">确定</ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/mc-reservation.com/cancel/cancel.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/cancel/cancel.module.ts ***!
  \********************************************************************/
/*! exports provided: CancelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelPageModule", function() { return CancelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cancel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel.page */ "./src/app/serving/mc-reservation.com/cancel/cancel.page.ts");







const routes = [
    {
        path: '',
        component: _cancel_page__WEBPACK_IMPORTED_MODULE_6__["CancelPage"]
    }
];
let CancelPageModule = class CancelPageModule {
};
CancelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cancel_page__WEBPACK_IMPORTED_MODULE_6__["CancelPage"]]
    })
], CancelPageModule);



/***/ }),

/***/ "./src/app/serving/mc-reservation.com/cancel/cancel.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/cancel/cancel.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvbWMtcmVzZXJ2YXRpb24uY29tL2NhbmNlbC9jYW5jZWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/serving/mc-reservation.com/cancel/cancel.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/serving/mc-reservation.com/cancel/cancel.page.ts ***!
  \******************************************************************/
/*! exports provided: CancelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelPage", function() { return CancelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CancelPage = class CancelPage {
    constructor(_http, _page, activeRoute, _valid) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this._valid = _valid;
        this.model = {
            postApiUrl: '/Api/appointment-info/AddOrEdit',
            data: {},
            postData: {},
            appointmentinfoid: "",
        };
        //定义共享数据
        this.shareData = {
            appointmentinfo: {}
        };
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.model.appointmentinfoid = params['id'];
            }
        });
    }
    saveOnClick() {
        if (this._valid.isNullOrEmpty(this.shareData.appointmentinfo["mcs_cancelreasonnew"])) {
            this._page.presentToastError("请先选择取消原因");
            return;
        }
        if (this._valid.isNullOrEmpty(this.shareData.appointmentinfo["mcs_canceldes"])) {
            this._page.presentToastError("请填写取消描述");
            return;
        }
        this.model.postData["actioncode"] = 2;
        this.model.postData["appointmentinfo"] = this.shareData.appointmentinfo;
        //组装预约单
        this.model.postData["appointmentinfo"] = {};
        this.model.postData["appointmentinfo"]["mcs_appointmentinfoid"] = this.model.appointmentinfoid;
        this.model.postData["appointmentinfo"]["mcs_cancelreasonnew"] = Number(this.shareData.appointmentinfo["mcs_cancelreasonnew"]); //取消原因
        this.model.postData["appointmentinfo"]["mcs_canceldes"] = this.shareData.appointmentinfo["mcs_canceldes"]; //预约日期
        this.model.postData["appointmentinfo"]["mcs_status"] = 50; //预约状态
        console.log(this.shareData);
        console.log(this.model.postData);
        this._page.loadingShow();
        this._http.postForToaken(this.model.postApiUrl, this.model.postData, (res) => {
            this._page.loadingHide();
            if (res.Result == true) {
                var guid = res["Data"]["Id"];
                this._page.goto("/serving/reservation/success", { guid: guid });
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
CancelPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Valid"] }
];
CancelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cancel',
        template: __webpack_require__(/*! raw-loader!./cancel.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/mc-reservation.com/cancel/cancel.page.html"),
        styles: [__webpack_require__(/*! ./cancel.page.scss */ "./src/app/serving/mc-reservation.com/cancel/cancel.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Valid"]])
], CancelPage);



/***/ })

}]);
//# sourceMappingURL=serving-mc-reservation-com-cancel-cancel-module-es2015.js.map