(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-technical-support-com-detail-detail-module"],{

/***/ "./node_modules/@ionic-native/full-screen-image/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ionic-native/full-screen-image/index.js ***!
  \***************************************************************/
/*! exports provided: FullScreenImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenImage", function() { return FullScreenImage; });
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FullScreenImageOriginal = /** @class */ (function (_super) {
    __extends(FullScreenImageOriginal, _super);
    function FullScreenImageOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FullScreenImageOriginal.prototype.showImageURL = function (url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "showImageURL", { "sync": true }, arguments); };
    FullScreenImageOriginal.prototype.showImageBase64 = function (base64String, name, type) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "showImageBase64", { "sync": true }, arguments); };
    FullScreenImageOriginal.pluginName = "FullScreenImage";
    FullScreenImageOriginal.plugin = "es.keensoft.fullscreenimage";
    FullScreenImageOriginal.pluginRef = "FullScreenImage";
    FullScreenImageOriginal.repo = "https://github.com/keensoft/FullScreenImage-Cordova-Plugin";
    FullScreenImageOriginal.platforms = ["Android", "iOS"];
    return FullScreenImageOriginal;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["IonicNativePlugin"]));
var FullScreenImage = new FullScreenImageOriginal();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Z1bGwtc2NyZWVuLWltYWdlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW9DbkMsbUNBQWlCOzs7O0lBUXBELHNDQUFZLGFBQUMsR0FBVztJQVl4Qix5Q0FBZSxhQUFDLFlBQW9CLEVBQUUsSUFBYSxFQUFFLElBQWE7Ozs7OzswQkF6RHBFO0VBcUNxQyxpQkFBaUI7U0FBekMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEZ1bGwgU2NyZWVuIEltYWdlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGdWxsU2NyZWVuSW1hZ2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2Z1bGwtc2NyZWVuLWltYWdlJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmdWxsU2NyZWVuSW1hZ2U6IEZ1bGxTY3JlZW5JbWFnZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5mdWxsU2NyZWVuSW1hZ2Uuc2hvd0ltYWdlVVJMKCcvYXNzZXRzLy4uLicpXG4gKiAgIC50aGVuKChkYXRhOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZnVsbFNjcmVlbkltYWdlLnNob3dJbWFnZUJhc2U2NCgnaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQS4uLicpXG4gKiAgIC50aGVuKChkYXRhOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Z1bGxTY3JlZW5JbWFnZScsXG4gIHBsdWdpbjogJ2VzLmtlZW5zb2Z0LmZ1bGxzY3JlZW5pbWFnZScsXG4gIHBsdWdpblJlZjogJ0Z1bGxTY3JlZW5JbWFnZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20va2VlbnNvZnQvRnVsbFNjcmVlbkltYWdlLUNvcmRvdmEtUGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRnVsbFNjcmVlbkltYWdlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBPcGVucyBhbiBpbWFnZSBmcm9tIGEgVVJMIG9yIHBhdGhcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSB1cmwgb3IgaW1hZ2UgcGF0aFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2hvd0ltYWdlVVJMKHVybDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYW4gaW1hZ2UgZnJvbSBhIGJhc2U2NCBzdHJpbmdcbiAgICogQHBhcmFtIGJhc2U2NFN0cmluZyB7c3RyaW5nfSBiYXNlNjQgc3RyaW5nXG4gICAqIEBwYXJhbSBuYW1lPyB7c3RyaW5nfSBpbWFnZSBuYW1lXG4gICAqIEBwYXJhbSB0eXBlPyB7c3RyaW5nfSBpbWFnZSBleHRlbnNpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNob3dJbWFnZUJhc2U2NChiYXNlNjRTdHJpbmc6IHN0cmluZywgbmFtZT86IHN0cmluZywgdHlwZT86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/technical-support.com/detail/detail.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/technical-support.com/detail/detail.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"返回\" defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>技术支持详情页面</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n\r\n  <ion-toolbar>\r\n    <ion-segment [(ngModel)]=\"tab\">\r\n      <ion-segment-button value=\"info\">\r\n        <ion-label>基础信息</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"att\">\r\n        <ion-label>附件信息</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content>\r\n  <div [ngSwitch]=\"tab\">\r\n    <div *ngSwitchCase=\"'info'\">\r\n\r\n      <ion-list lines=\"full\">\r\n        <ion-item-divider color=\"primary\">\r\n          <ion-label>\r\n            基础信息\r\n          </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              主题\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_title}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              服务委托书\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_serviceorderid}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              技术主管\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_repairnameid}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              维修日期\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_repairdate}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              邮箱\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_email}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              电话\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_phone}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n\r\n        <ion-item-divider color=\"primary\">\r\n          <ion-label>\r\n            车辆信息\r\n          </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              车主\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_customername}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              车主电话\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_customerphone}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              车牌号\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_carplate}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              VIN\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_customerid}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              发动机号\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_enginenumber}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              里程数\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_mileage}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              电机型号\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_motormodel}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              电池型号\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_batterymodel}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              电池序列号\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_batteryserialnumber}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              是否加装\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_ismodifiedparts}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              加装描述\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_modifiedpartscontent}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item-divider color=\"primary\">\r\n          <ion-label>\r\n            故障描述\r\n          </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              技术系统\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_techsystem}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              故障类别代码\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_malfunctiontypeid}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              故障描述\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_malfunctiontypecontent}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              检查诊断描述\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_diagnosiscontent}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              已更换零件\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_replacedparts}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              具体故障现象\r\n            </h2>\r\n            <p>{{mod.data.TechnicalSupport.mcs_malfunctioncontent}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n    </div>\r\n\r\n    <div *ngSwitchCase=\"'att'\">\r\n      \r\n      <ion-grid class=\"ionatt\">\r\n     \r\n\r\n        <ion-row *ngIf=\"mod.data.DealerAttachment.length===0\">\r\n            <ion-col>\r\n              <div class=\"ionattbody\">\r\n                当前无附件记录 \r\n              </div>\r\n            </ion-col>\r\n           \r\n          </ion-row>\r\n      </ion-grid>\r\n\r\n      \r\n\r\n\r\n      <!-- <ion-list  >\r\n        \r\n          <ion-item *ngFor=\"let item of mod.data.DealerAttachment\"   >\r\n                <ion-icon name=\"document\" size=\"large\"></ion-icon>\r\n              <ion-label>\r\n                  <h2>{{item.mcs_filename}}</h2>\r\n                  <p>大小：{{item.mcs_filesize}}</p> \r\n              </ion-label>\r\n             \r\n                 <ion-button size=\"default\"  color=\"primary\" class=\"button-outline\" (click)=\"down(item.fileurl)\">\r\n                    下载  <ion-icon color=\"primary\" name=\"arrow-down\"  ></ion-icon> \r\n                  </ion-button>\r\n              \r\n             \r\n              \r\n          </ion-item>\r\n      </ion-list> -->\r\n\r\n      \r\n    <ion-card *ngFor=\"let item of mod.data.DealerAttachment\">\r\n        <ion-item>\r\n          <ion-icon name=\"image\" slot=\"start\"></ion-icon>\r\n          <ion-label>{{item.mcs_filename}}</ion-label>\r\n          <ion-button fill=\"outline\" slot=\"end\" (click)=\"showImage(item.mcs_fileurl)\">查看大图</ion-button>\r\n        </ion-item>\r\n      \r\n        <ion-card-content>\r\n          <img style=\"width:100%; height:100%;\"  [src]=\"item.mcs_fileurl\" />\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n      <ion-fab-button>\r\n          <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-list side=\"top\">\r\n          <ion-fab-button color=\"danger\" [routerLink]=\"['/serving/ts/edit']\" [queryParams]=\"{id:mod.data.TechnicalSupport.Id}\"><ion-icon name=\"create\"></ion-icon></ion-fab-button>\r\n      </ion-fab-list>\r\n  </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/serving/technical-support.com/detail/detail.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/serving/technical-support.com/detail/detail.module.ts ***!
  \***********************************************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/serving/technical-support.com/detail/detail.page.ts");







var routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]
    }
];
var DetailPageModule = /** @class */ (function () {
    function DetailPageModule() {
    }
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
    return DetailPageModule;
}());



/***/ }),

/***/ "./src/app/serving/technical-support.com/detail/detail.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/serving/technical-support.com/detail/detail.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ionatttitle {\n  text-align: center;\n  font-weight: 600; }\n\n.ionattbody {\n  text-align: center; }\n\n.titleborder {\n  border-left: 1px solid #0000006b;\n  border-top: 1px solid #0000006b;\n  border-bottom: 1px solid #0000006b;\n  background-color: #3880ff; }\n\n.titleborders {\n  border-left: 1px solid #0000006b;\n  border-bottom: 1px solid #0000006b; }\n\n.bodyborder {\n  border-right: 1px solid #0000006b; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmluZy90ZWNobmljYWwtc3VwcG9ydC5jb20vZGV0YWlsL0U6XFxBcHBQcm9qZWN0XFxEQ0VNXFxEQ0VNLk1BcHAvc3JjXFxhcHBcXHNlcnZpbmdcXHRlY2huaWNhbC1zdXBwb3J0LmNvbVxcZGV0YWlsXFxkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0Isa0NBQWtDO0VBQ2xDLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLGdDQUFnQztFQUNoQyxrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSxpQ0FBaUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvdGVjaG5pY2FsLXN1cHBvcnQuY29tL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbmF0dHRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uaW9uYXR0Ym9keXsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRpdGxlYm9yZGVye1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwMDAwNmI7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDAwMDZiO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDA2YjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7XHJcbn1cclxuLnRpdGxlYm9yZGVyc3tcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDAwMDZiOyBcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwNmI7XHJcbn1cclxuLmJvZHlib3JkZXJ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwMDAwNmI7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/serving/technical-support.com/detail/detail.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/serving/technical-support.com/detail/detail.page.ts ***!
  \*********************************************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_full_screen_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/full-screen-image */ "./node_modules/@ionic-native/full-screen-image/index.js");





var DetailPage = /** @class */ (function () {
    function DetailPage(_http, _page, activeRoute) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this.tab = "info";
        this.mod = {
            apiUrl: '/Api/tech-support/GetDetail',
            data: {
                TechnicalSupport: {
                    Id: "",
                    mcs_title: "",
                    mcs_serviceorderid: "",
                    mcs_repairnameid: "",
                    mcs_repairdate: "",
                    mcs_email: "",
                    mcs_phone: "",
                    mcs_customername: "",
                    mcs_customerphone: "",
                    mcs_customerid: "",
                    mcs_carplate: "",
                    mcs_enginenumber: "",
                    mcs_mileage: "",
                    mcs_motormodel: "",
                    mcs_batteryserialnumber: "",
                    mcs_batterymodel: "",
                    mcs_ismodifiedparts: "",
                    mcs_modifiedpartscontent: "",
                    mcs_techsystem: "",
                    mcs_malfunctiontypeid: "",
                    mcs_malfunctiontypecontent: "",
                    mcs_diagnosiscontent: "",
                    mcs_replacedparts: "",
                    mcs_malfunctioncontent: "",
                },
                DealerAttachment: [],
                Warrantyattachment: []
            }
        };
    }
    DetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParams.subscribe(function (params) {
            if (params['id'] != null && params['id'] != undefined) {
                _this.mod.data.TechnicalSupport.Id = params['id'];
                _this.pageOnBind(params['id']);
            }
        });
    };
    //下载
    DetailPage.prototype.showImage = function (url) {
        _ionic_native_full_screen_image__WEBPACK_IMPORTED_MODULE_4__["FullScreenImage"].showImageURL(url)
            .then(function (data) { return console.log(data); })
            .catch(function (error) { return console.error(error); });
    };
    DetailPage.prototype.pageOnBind = function (id) {
        var _this = this;
        this._page.loadingShow();
        this._http.get(this.mod.apiUrl, {
            params: {
                id: id,
            }
        }, function (res) {
            if (res.TechnicalSupport != null) {
                _this.mod.data.TechnicalSupport.mcs_title = res["TechnicalSupport"]["Attributes"]["mcs_title"];
                _this.mod.data.TechnicalSupport.mcs_serviceorderid = res["TechnicalSupport"]["Attributes"]["_mcs_serviceorderid_value@OData.Community.Display.V1.FormattedValue"];
                _this.mod.data.TechnicalSupport.mcs_repairnameid = res["TechnicalSupport"]["Attributes"]["_mcs_repairnameid_value@OData.Community.Display.V1.FormattedValue"];
                _this.mod.data.TechnicalSupport.mcs_repairdate = res["TechnicalSupport"]["Attributes"]["mcs_repairdate@OData.Community.Display.V1.FormattedValue"];
                _this.mod.data.TechnicalSupport.mcs_email = res["TechnicalSupport"]["Attributes"]["mcs_email"];
                _this.mod.data.TechnicalSupport.mcs_phone = res["TechnicalSupport"]["Attributes"]["mcs_phone"];
                _this.mod.data.TechnicalSupport.mcs_customername = res["TechnicalSupport"]["Attributes"]["mcs_customername"];
                _this.mod.data.TechnicalSupport.mcs_customerphone = res["TechnicalSupport"]["Attributes"]["mcs_customerphone"];
                _this.mod.data.TechnicalSupport.mcs_customerid = res["TechnicalSupport"]["Attributes"]["_mcs_customerid_value@OData.Community.Display.V1.FormattedValue"];
                _this.mod.data.TechnicalSupport.mcs_carplate = res["TechnicalSupport"]["Attributes"]["mcs_carplate"];
                _this.mod.data.TechnicalSupport.mcs_enginenumber = res["TechnicalSupport"]["Attributes"]["mcs_enginenumber"];
                _this.mod.data.TechnicalSupport.mcs_mileage = res["TechnicalSupport"]["Attributes"]["mcs_mileage"];
                _this.mod.data.TechnicalSupport.mcs_motormodel = res["TechnicalSupport"]["Attributes"]["mcs_motormodel"];
                _this.mod.data.TechnicalSupport.mcs_batteryserialnumber = res["TechnicalSupport"]["Attributes"]["mcs_batteryserialnumber"];
                _this.mod.data.TechnicalSupport.mcs_batterymodel = res["TechnicalSupport"]["Attributes"]["mcs_batterymodel"];
                _this.mod.data.TechnicalSupport.mcs_ismodifiedparts = res["TechnicalSupport"]["Attributes"]["mcs_ismodifiedparts@OData.Community.Display.V1.FormattedValue"];
                _this.mod.data.TechnicalSupport.mcs_modifiedpartscontent = res["TechnicalSupport"]["Attributes"]["mcs_modifiedpartscontent"];
                _this.mod.data.TechnicalSupport.mcs_techsystem = res["TechnicalSupport"]["Attributes"]["mcs_techsystem@OData.Community.Display.V1.FormattedValue"];
                _this.mod.data.TechnicalSupport.mcs_malfunctiontypeid = res["TechnicalSupport"]["Attributes"]["_mcs_malfunctiontypeid_value@OData.Community.Display.V1.FormattedValue"];
                _this.mod.data.TechnicalSupport.mcs_malfunctiontypecontent = res["TechnicalSupport"]["Attributes"]["mcs_malfunctiontypecontent"];
                _this.mod.data.TechnicalSupport.mcs_diagnosiscontent = res["TechnicalSupport"]["Attributes"]["mcs_diagnosiscontent"];
                _this.mod.data.TechnicalSupport.mcs_replacedparts = res["TechnicalSupport"]["Attributes"]["mcs_replacedparts"];
                _this.mod.data.TechnicalSupport.mcs_malfunctioncontent = res["TechnicalSupport"]["Attributes"]["mcs_malfunctioncontent"];
            }
            if (res.DealerAttachment != null) {
                for (var key in res.DealerAttachment) {
                    var obj = {};
                    obj["mcs_filename"] = res.DealerAttachment[key]["Attributes"]["mcs_filename"];
                    obj["mcs_filesize"] = res.DealerAttachment[key]["Attributes"]["mcs_filesize"];
                    obj["mcs_fileurl"] = res.DealerAttachment[key]["Attributes"]["mcs_fileurl"];
                    _this.mod.data.DealerAttachment.push(obj);
                }
            }
            if (res.Warrantyattachment != null) {
                for (var key in res.Warrantyattachment) {
                    var obj = {};
                    obj["mcs_filename"] = res.Warrantyattachment[key]["Attributes"]["mcs_name"];
                    obj["mcs_filesize"] = res.Warrantyattachment[key]["Attributes"]["mcs_filesize"];
                    obj["mcs_fileurl"] = res.Warrantyattachment[key]["Attributes"]["mcs_fileurl"];
                    _this.mod.data.Warrantyattachment.push(obj);
                }
            }
            _this._page.loadingHide();
        }, function (err) {
            _this._page.alert("消息提示", "数据加载异常");
            _this._page.loadingHide();
        });
    };
    DetailPage.ctorParameters = function () { return [
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/technical-support.com/detail/detail.page.html"),
            styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/serving/technical-support.com/detail/detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DetailPage);
    return DetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=serving-technical-support-com-detail-detail-module-es5.js.map