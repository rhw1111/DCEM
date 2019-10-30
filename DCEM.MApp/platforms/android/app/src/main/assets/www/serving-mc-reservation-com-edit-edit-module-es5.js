(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-mc-reservation-com-edit-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/mc-reservation.com/edit/edit.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/mc-reservation.com/edit/edit.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/reservation/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>创建或编辑预约</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list>\r\n        <ion-item-group>\r\n            <ion-item-divider>\r\n                <ion-label>车主资料</ion-label>\r\n            </ion-item-divider>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <ion-text color=\"danger\">*</ion-text>姓名：<!--{{model.mcname}}-->\r\n                </ion-label>\r\n                <ion-avatar slot=\"end\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"search\" (click)=\"presentModal()\"></ion-icon>\r\n                </ion-avatar>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>车牌号</ion-label>\r\n                <ion-note slot=\"end\">渝A100211</ion-note>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>车主手机</ion-label>\r\n                <ion-note slot=\"end\">18027302264</ion-note>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>客户标签</ion-label>\r\n                <ion-note slot=\"end\">汽车达人</ion-note>\r\n            </ion-item>\r\n          \r\n        </ion-item-group>\r\n        <ion-item-group>\r\n            <ion-item-divider>\r\n                <ion-label>预约信息</ion-label>\r\n            </ion-item-divider>\r\n            <ion-item>\r\n                <ion-text color=\"danger\">*</ion-text><ion-label>服务类型</ion-label>\r\n                <ion-select value=\"mode.mcs_ordertype\" okText=\"确认\" cancelText=\"取消\">\r\n                    <ion-select-option value=\"10\">汽车美容</ion-select-option>\r\n                    <ion-select-option value=\"20\">钣金喷漆</ion-select-option>\r\n                    <ion-select-option value=\"30\">常规保养</ion-select-option>\r\n                    <ion-select-option value=\"40\">一般维修</ion-select-option>\r\n                    <ion-select-option value=\"50\">保修</ion-select-option>\r\n                    <ion-select-option value=\"60\">其他</ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <ion-text color=\"danger\">*</ion-text>预约日期\r\n                </ion-label>\r\n                <ion-datetime displayFormat=\"YYYY-MM-DD HH:mm\" min=\"1997\" max=\"2010\" value=\"\"></ion-datetime>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <ion-text color=\"danger\">*</ion-text>预约时段: <!--{{model.mcname}}-->\r\n                </ion-label>\r\n                <ion-avatar slot=\"end\">\r\n                    <ion-icon color=\"primary\" size=\"large\" name=\"search\" (click)=\"presentModal()\"></ion-icon>\r\n                </ion-avatar>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>可预约数量</ion-label>\r\n                <ion-note slot=\"end\">10</ion-note>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"floating\">客户要求</ion-label>\r\n                <ion-textarea></ion-textarea>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"floating\">问题描述</ion-label>\r\n                <ion-textarea></ion-textarea>\r\n            </ion-item>\r\n        </ion-item-group>\r\n        <ion-button expand=\"block\" type=\"button\" (click)=\"save()\">确定</ion-button>\r\n    </ion-list>\r\n</ion-content>"

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


var EditPage = /** @class */ (function () {
    function EditPage() {
    }
    EditPage.prototype.ngOnInit = function () {
    };
    EditPage.prototype.presentModal = function () {
    };
    EditPage.prototype.save = function () {
    };
    EditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/mc-reservation.com/edit/edit.page.html"),
            styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/serving/mc-reservation.com/edit/edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditPage);
    return EditPage;
}());



/***/ })

}]);
//# sourceMappingURL=serving-mc-reservation-com-edit-edit-module-es5.js.map