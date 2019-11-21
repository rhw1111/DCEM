(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-delivery-appointment-appointment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/delivery/appointment/appointment.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/delivery/appointment/appointment.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n        <ion-back-button text=\"返回\"   defaultHref=\"/\">\r\n        </ion-back-button>\r\n    </ion-buttons> \r\n    <ion-title>预约交车</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-item-divider color=\"primary\">\r\n      <ion-label>预约信息</ion-label>\r\n    </ion-item-divider>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item-group>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>交车单号</h2>\r\n                </ion-label>\r\n                <ion-note slot=\"end\">\r\n                    <p>{{model.info.code}}</p>\r\n                </ion-note>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>车辆VIN号</h2>\r\n                </ion-label>\r\n                <ion-note slot=\"end\">\r\n                    <p>{{model.info.vin}}</p>\r\n                </ion-note>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>整车订单号</h2>\r\n                </ion-label>\r\n                <ion-note slot=\"end\">\r\n                    <p>{{model.info.ro}}</p>\r\n                </ion-note>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>交车状态</h2>\r\n                </ion-label>\r\n                <ion-note slot=\"end\">\r\n                    <p>{{model.info.deliverystatus}}</p>\r\n                </ion-note>\r\n            </ion-item> \r\n          <ion-item>\r\n            <ion-label>\r\n              预约时间\r\n            </ion-label>\r\n            <ion-datetime cancelText=\"取消\" doneText=\"确定\" [(ngModel)]=\"appointmentmodel.data.appointmenton\"\r\n              placeholder=\"请选择到店时间\" display-format=\"YYYY-MM-DD HH:mm:ss\"></ion-datetime>\r\n          </ion-item>\r\n          <ion-item>  \r\n            <ion-label>\r\n                客户预定\r\n              </ion-label>\r\n            <ion-textarea [(ngModel)]=\"appointmentmodel.data.customerrequest\"></ion-textarea>\r\n          </ion-item>\r\n        </ion-item-group>\r\n      </ion-list>\r\n      <section style=\"text-align:center;\">\r\n          <ion-button style=\"width:70%\" color=\"danger\" (click)=\"presentAlertAppointment()\">保存</ion-button>\r\n      </section>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/saleing/delivery/appointment/appointment.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/saleing/delivery/appointment/appointment.module.ts ***!
  \********************************************************************/
/*! exports provided: AppointmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentPageModule", function() { return AppointmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _appointment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appointment.page */ "./src/app/saleing/delivery/appointment/appointment.page.ts");







const routes = [
    {
        path: '',
        component: _appointment_page__WEBPACK_IMPORTED_MODULE_6__["AppointmentPage"]
    }
];
let AppointmentPageModule = class AppointmentPageModule {
};
AppointmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_appointment_page__WEBPACK_IMPORTED_MODULE_6__["AppointmentPage"]]
    })
], AppointmentPageModule);



/***/ }),

/***/ "./src/app/saleing/delivery/appointment/appointment.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/saleing/delivery/appointment/appointment.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvZGVsaXZlcnkvYXBwb2ludG1lbnQvYXBwb2ludG1lbnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/saleing/delivery/appointment/appointment.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/saleing/delivery/appointment/appointment.page.ts ***!
  \******************************************************************/
/*! exports provided: AppointmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentPage", function() { return AppointmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/logininfo.storage */ "./src/app/base/base.ser/logininfo.storage.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let AppointmentPage = class AppointmentPage {
    constructor(_http, _page, activeRoute, _userinfo, alertController) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this._userinfo = _userinfo;
        this.alertController = alertController;
        this.appointmentmodel = {
            apiUrl: '/api/delivery/appointment',
            data: {
                id: "",
                appointmenton: "",
                customerrequest: ""
            }
        };
        this.model = {
            apiUrlDetail: '/api/delivery/get',
            id: "",
            status: -1,
            settles: 0,
            info: {
                vin: "",
                code: "",
                deliverystatus: "",
                ro: ""
            }
        };
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((data) => {
            if (data['id'] != null && data['id'] != undefined) {
                this.appointmentmodel.data.id = data['id'];
                this.model.id = data['id'];
                this.pageOnBind(this.model.id);
            }
        });
    }
    //基础信息
    pageOnBind(id) {
        this._page.loadingShow();
        this._http.postForToaken(this.model.apiUrlDetail, { 'id': this.model.id }, (res) => {
            if (res !== null) {
                var attr = res["Attributes"];
                this.model.info.vin = attr["_mcs_vin_value@OData.Community.Display.V1.FormattedValue"];
                this.model.info.code = attr["mcs_code"];
                this.model.info.deliverystatus = attr["mcs_deliverystatus@OData.Community.Display.V1.FormattedValue"];
                this.model.status = attr["mcs_deliverystatus"];
                this.model.settles = attr["mcs_settlestatus"];
                this.model.info.ro = attr["_mcs_vehorder_value@OData.Community.Display.V1.FormattedValue"];
            }
            else {
                this._page.alert("消息提示", "交车单基础信息加载异常");
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "交车单基础信息加载异常");
            this._page.loadingHide();
        });
    }
    presentAlertAppointment() {
        this._page.loadingShow();
        this._http.postForToaken(this.appointmentmodel.apiUrl, this.appointmentmodel.data, (res) => {
            if (res !== null) {
                if (res.Result) {
                    this._page.alert("消息提示", "预约交车成功！", () => {
                        this._page.goto("/saleing/delivery/detail", { 'id': this.model.id });
                    });
                }
                else {
                    this._page.alert("消息提示", res.Description);
                }
            }
            else {
                this._page.alert("消息提示", "预约交车操作失败");
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "预约交车操作失败");
            this._page.loadingHide();
        });
    }
};
AppointmentPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__["Storage_LoginInfo"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
AppointmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appointment',
        template: __webpack_require__(/*! raw-loader!./appointment.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/delivery/appointment/appointment.page.html"),
        styles: [__webpack_require__(/*! ./appointment.page.scss */ "./src/app/saleing/delivery/appointment/appointment.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__["Storage_LoginInfo"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], AppointmentPage);



/***/ })

}]);
//# sourceMappingURL=saleing-delivery-appointment-appointment-module-es2015.js.map