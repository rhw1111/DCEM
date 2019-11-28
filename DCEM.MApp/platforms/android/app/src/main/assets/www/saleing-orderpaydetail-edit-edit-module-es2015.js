(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-orderpaydetail-edit-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/orderpaydetail/edit/edit.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/orderpaydetail/edit/edit.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"返回\" defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>新增收款记录</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-card>\r\n      <ion-card-content>\r\n        <ion-item-divider color=\"primary\">\r\n          <ion-label>基本信息</ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>交易流水号</h2>\r\n          </ion-label>\r\n          <ion-input type=\"text\" name=\"mobile\" [(ngModel)]=\"model.info.batchcode\">\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-text color=\"danger\">*</ion-text>\r\n          <ion-label>\r\n            <h2>收款类型</h2>\r\n          </ion-label>\r\n          <ion-select name=\"score\" okText=\"确认\" cancelText=\"取消\" [(ngModel)]=\"model.info.paycategory\">\r\n            <ion-select-option *ngFor=\"let item of model.paycategoryoption\" value=\"{{item.value}}\">{{item.name}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-text color=\"danger\">*</ion-text>\r\n          <ion-label>\r\n            <h2>付款金额</h2>\r\n          </ion-label>\r\n          <ion-input type=\"number\" name=\"mobile\" [(ngModel)]=\"model.info.amountstr\">\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-text color=\"danger\">*</ion-text>\r\n          <ion-label>\r\n            <h2>付款时间</h2>\r\n          </ion-label>\r\n          <ion-datetime cancelText=\"取消\" doneText=\"确定\" [(ngModel)]=\"model.info.payon\" placeholder=\"请选择付款时间\"\r\n            display-format=\"YYYY-MM-DD HH:mm:ss\"></ion-datetime>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              备注\r\n            </h2>\r\n          </ion-label>\r\n          <ion-textarea [(ngModel)]=\"model.info.remark\" name=\"describe\"></ion-textarea>\r\n        </ion-item>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-button expand=\"block\" color=\"danger\" (click)=\"saveOnClick()\">确定</ion-button>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/saleing/orderpaydetail/edit/edit.module.ts":
/*!************************************************************!*\
  !*** ./src/app/saleing/orderpaydetail/edit/edit.module.ts ***!
  \************************************************************/
/*! exports provided: EditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/saleing/orderpaydetail/edit/edit.page.ts");







const routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]
    }
];
let EditPageModule = class EditPageModule {
};
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



/***/ }),

/***/ "./src/app/saleing/orderpaydetail/edit/edit.page.scss":
/*!************************************************************!*\
  !*** ./src/app/saleing/orderpaydetail/edit/edit.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvb3JkZXJwYXlkZXRhaWwvZWRpdC9lZGl0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/saleing/orderpaydetail/edit/edit.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/saleing/orderpaydetail/edit/edit.page.ts ***!
  \**********************************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _base_base_ser_optionset_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../base/base.ser/optionset.service */ "./src/app/base/base.ser/optionset.service.ts");





let EditPage = class EditPage {
    constructor(_http, _page, activeRoute, _valid, _optionset) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this._valid = _valid;
        this._optionset = _optionset;
        this.model = {
            apiUrlDetail: '/api/delivery/addorderpay',
            id: "",
            paycategoryoption: [],
            info: {
                delivery: "",
                paycategory: -1,
                amountstr: "",
                amount: 0,
                payon: "",
                batchcode: "",
                remark: ""
            }
        };
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((data) => {
            if (data['id'] != null && data['id'] != undefined) {
                this.model.id = data['id'];
                this.model.info.delivery = data['id'];
                this.model.paycategoryoption = this._optionset.Get("mcs_paycategory");
            }
        });
    }
    saveOnClick() {
        if (!this._valid.isNumber(this.model.info.amountstr)) {
            this._page.alert("消息提示", "请输入正确的金额");
            return;
        }
        this.model.info.amount = parseInt(this.model.info.amountstr);
        if (this.model.info.amount <= 0) {
            this._page.alert("消息提示", "请输入大于0的金额");
            return;
        }
        if (this._valid.isNullOrEmpty(this.model.info.payon)) {
            this._page.alert("消息提示", "请选择收款时间");
            return;
        }
        this._page.loadingShow();
        this._http.postForToaken(this.model.apiUrlDetail, this.model.info, (res) => {
            if (res !== null) {
                if (res.Result) {
                    this._page.alert("消息提示", "新建收款记录成功", () => {
                        this._page.goto("/saleing/delivery/detail", { 'id': this.model.id });
                    });
                }
                else {
                    this._page.alert("消息提示", res.Description);
                }
            }
            else {
                this._page.alert("消息提示", "新建收款记录失败");
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "原始线索编辑信息加载异常");
            this._page.loadingHide();
        });
    }
};
EditPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Valid"] },
    { type: _base_base_ser_optionset_service__WEBPACK_IMPORTED_MODULE_4__["OptionSetService"] }
];
EditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/orderpaydetail/edit/edit.page.html"),
        styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/saleing/orderpaydetail/edit/edit.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Valid"],
        _base_base_ser_optionset_service__WEBPACK_IMPORTED_MODULE_4__["OptionSetService"]])
], EditPage);



/***/ })

}]);
//# sourceMappingURL=saleing-orderpaydetail-edit-edit-module-es2015.js.map