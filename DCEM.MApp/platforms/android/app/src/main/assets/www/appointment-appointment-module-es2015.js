(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointment-appointment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/appointment/appointment.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/appointment/appointment.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n        <ion-title>全部预约记录</ion-title>\n\n        <ion-buttons slot=\"primary\">\n          <ion-button (click)=\"addAppointment()\">\n            <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-col>\n         \n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n  <div>\n      <ion-tabs>\n          <ion-tab-bar slot=\"top\">\n              <ion-tab-button selected=\"{{IsSelect}}\" (click)=\"enableTemplate()\">\n                  <ion-label color=\"{{spanColor1}}\">全部</ion-label>\n                </ion-tab-button>\n                <ion-tab-button (click)=\"applicationTemplate()\">\n                  <ion-label color=\"{{spanColor2}}\">已预约</ion-label>\n                </ion-tab-button>\n                <ion-tab-button (click)=\"recordTemplate()\">\n                  <ion-label color=\"{{spanColor3}}\">未完成</ion-label>\n                </ion-tab-button>\n                <ion-tab-button (click)=\"recordTemplate()\">\n                    <ion-label color=\"{{spanColor4}}\">已关闭</ion-label>\n                </ion-tab-button>\n          </ion-tab-bar>\n        </ion-tabs>\n  </div>\n<div style=\"margin-top:45px;\">\n    <ion-list *ngIf = \"isTrue == 'true1'\">\n        <ion-item-sliding *ngIf=\"startID==undefined\" #slide  (click)=\"close()\">\n          <ion-item>\n            <ion-label>\n              模板一\n            </ion-label>\n          </ion-item>\n          <ion-item-options >\n            <ion-item-option color=\"primary\" (click)=\"Release()\">\n              <ion-icon slot=\"bottom\" name=\"more\"></ion-icon>\n              发布          \n            </ion-item-option>\n            <ion-item-option color=\"secondary\">\n              <ion-icon slot=\"bottom\" name=\"archive\"></ion-icon>\n              删除\n            </ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n    \n      <ion-list *ngIf = \"isTrue == 'true2'\">\n          <ion-item-sliding *ngIf=\"startID==undefined\" #slide (click)=\"open()\">\n            <ion-item>\n              <ion-label>\n                模板二\n              </ion-label>\n            </ion-item>\n            <ion-item-options>\n              <ion-item-option color=\"primary\" (click)=\"Release2()\">\n                <ion-icon slot=\"bottom\" name=\"more\"></ion-icon>\n                发布          \n              </ion-item-option>\n              <ion-item-option color=\"secondary\">\n                <ion-icon slot=\"bottom\" name=\"archive\"></ion-icon>\n                删除\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n    \n        <ion-list *ngIf=\"isTrue == 'true3'\">\n            <ion-list auto-hide=\"false\" *ngFor=\"let r of appointmentList\">\n                <ion-item (click)=\"showDetail(r)\">\n                    <ion-grid>\n                      <ion-row>\n                        <ion-col size=\"9\">\n                            <ion-label>\n                              <h3><ion-icon name=\"timer\"></ion-icon>  {{r.Date}}</h3>\n                            </ion-label>\n                        </ion-col>\n                        <ion-col size=\"3\">\n                            <ion-label>\n                              <h3 *ngIf=\"r.Status==0\">草稿</h3>\n                              <h3 *ngIf=\"r.Status==1\">已预约</h3>\n                              <h3 *ngIf=\"r.Status==2\">已取消</h3>\n                            </ion-label>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                        <ion-col>\n                              <ion-label>\n                                <h2>{{r.UserName}}</h2>\n                                <h3>预约时间：{{r.StartTime}}-{{r.EndTime}}</h3>\n                                <p>预约车型：{{r.VehicleType}}</p>\n                              </ion-label>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </ion-item>\n              </ion-list>\n        </ion-list>\n</div>\n    \n   \n</ion-content>"

/***/ }),

/***/ "./src/app/appointment/appointment.module.ts":
/*!***************************************************!*\
  !*** ./src/app/appointment/appointment.module.ts ***!
  \***************************************************/
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
/* harmony import */ var _appointment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appointment.page */ "./src/app/appointment/appointment.page.ts");







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

/***/ "./src/app/appointment/appointment.page.scss":
/*!***************************************************!*\
  !*** ./src/app/appointment/appointment.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#btn1 {\n  --background:green; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwb2ludG1lbnQvRTpcXEFwcFByb2plY3RcXERDRU1cXERDRU0uTUFwcC9zcmNcXGFwcFxcYXBwb2ludG1lbnRcXGFwcG9pbnRtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFPLGtCQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHBvaW50bWVudC9hcHBvaW50bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYnRuMSB7LS1iYWNrZ3JvdW5kOmdyZWVufSJdfQ== */"

/***/ }),

/***/ "./src/app/appointment/appointment.page.ts":
/*!*************************************************!*\
  !*** ./src/app/appointment/appointment.page.ts ***!
  \*************************************************/
/*! exports provided: AppointmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentPage", function() { return AppointmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppointmentPage = class AppointmentPage {
    constructor(router) {
        this.router = router;
        this.appointmentList = [
            {
                Id: 1,
                UserName: "张一帆",
                PhoneNumber: "1802890098",
                Date: "2019-11-01",
                StartTime: "14:00:00",
                EndTime: "17:00:00",
                VehicleType: "S01",
                Remark: "试乘试驾",
                Status: 1
            },
            {
                Id: 2,
                UserName: "张一帆",
                PhoneNumber: "1802890098",
                Date: "2019-11-01",
                StartTime: "14:00:00",
                EndTime: "17:00:00",
                VehicleType: "S01",
                Remark: "试乘试驾",
                Status: 0
            },
            {
                Id: 3,
                UserName: "张一帆",
                PhoneNumber: "1802890098",
                Date: "2019-11-01",
                StartTime: "14:00:00",
                EndTime: "17:00:00",
                VehicleType: "S01",
                Remark: "试乘试驾",
                Status: 1
            },
            {
                Id: 4,
                UserName: "张一帆",
                PhoneNumber: "1802890098",
                Date: "2019-11-01",
                StartTime: "14:00:00",
                EndTime: "17:00:00",
                VehicleType: "S01",
                Remark: "试乘试驾",
                Status: 2
            }
        ];
    }
    ngOnInit() {
    }
    addAppointment() {
    }
    showDetail(item) {
        this.router.navigate(['test-drive-detail'], {
            queryParams: {
                Item: JSON.stringify(item)
            }
        });
    }
    enableTemplate(startID) {
        this.isTrue = 'true1';
        this.settabcolor(1);
    }
    applicationTemplate(suspend) {
        this.isTrue = 'true2';
        this.settabcolor(2);
    }
    recordTemplate(record) {
        this.isTrue = 'true3';
        this.settabcolor(3);
    }
    settabcolor(id) {
        this.spanColor1 = "";
        this.spanColor2 = "";
        this.spanColor3 = "";
        this.spanColor4 = "";
        switch (id) {
            case 1:
                this.spanColor1 = "success";
                break;
            case 2:
                this.spanColor2 = "success";
                break;
            case 3:
                this.spanColor3 = "success";
                break;
            case 4:
                this.spanColor4 = "success";
                break;
        }
    }
};
AppointmentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppointmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appointment',
        template: __webpack_require__(/*! raw-loader!./appointment.page.html */ "./node_modules/raw-loader/index.js!./src/app/appointment/appointment.page.html"),
        styles: [__webpack_require__(/*! ./appointment.page.scss */ "./src/app/appointment/appointment.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AppointmentPage);



/***/ })

}]);
//# sourceMappingURL=appointment-appointment-module-es2015.js.map