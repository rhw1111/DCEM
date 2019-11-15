(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-orderpaydetail-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/orderpaydetail/detail/detail.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/orderpaydetail/detail/detail.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button text=\"返回\" defaultHref=\"/saleing/delivery/list\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n        <ion-label>收款记录详情</ion-label>\r\n      </ion-title>\r\n    </ion-toolbar> \r\n  </ion-header>\r\n\r\n<ion-content>\r\n    <ion-card>\r\n        <ion-card-content>\r\n            <ion-list>\r\n                <ion-item-group>\r\n                    <ion-item-divider color=\"primary\">\r\n                        <ion-label>基本信息</ion-label>\r\n                    </ion-item-divider>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>收款编号</h2>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\">\r\n                            <p>{{model.info.code}}</p>\r\n                        </ion-note>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>收款类型</h2>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\">\r\n                            <p>{{model.info.paycategory}}</p>\r\n                        </ion-note>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>付款金额</h2>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\">\r\n                            <p>{{model.info.amount}}</p>\r\n                        </ion-note>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>付款时间</h2>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\">\r\n                            <p>{{model.info.payon}}</p>\r\n                        </ion-note>\r\n                    </ion-item> \r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>交易流水号</h2>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\">\r\n                            <p>{{model.info.batchcode}}</p>\r\n                        </ion-note>\r\n                    </ion-item> \r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>权益名称</h2>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\">\r\n                            <p>{{model.info.itemname}}</p>\r\n                        </ion-note>\r\n                    </ion-item> \r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>权益编号</h2>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\">\r\n                            <p>{{model.info.itemcode}}</p>\r\n                        </ion-note>\r\n                    </ion-item> \r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>备注</h2>\r\n                        </ion-label>\r\n                        <ion-textarea readonly>{{model.info.remark}}</ion-textarea>\r\n                    </ion-item>\r\n                </ion-item-group>\r\n            </ion-list>\r\n        </ion-card-content>\r\n    </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/saleing/orderpaydetail/detail/detail.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/saleing/orderpaydetail/detail/detail.module.ts ***!
  \****************************************************************/
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
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/saleing/orderpaydetail/detail/detail.page.ts");







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

/***/ "./src/app/saleing/orderpaydetail/detail/detail.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/saleing/orderpaydetail/detail/detail.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvb3JkZXJwYXlkZXRhaWwvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/saleing/orderpaydetail/detail/detail.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/saleing/orderpaydetail/detail/detail.page.ts ***!
  \**************************************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/logininfo.storage */ "./src/app/base/base.ser/logininfo.storage.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let DetailPage = class DetailPage {
    constructor(_http, _page, activeRoute, _userinfo) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this._userinfo = _userinfo;
        this.model = {
            apiUrlDetail: '/api/delivery/getorderpay',
            id: "",
            info: {
                code: "",
                paycategory: "",
                amount: "",
                payon: "",
                batchcode: "",
                itemname: "",
                itemcode: "",
                remark: ""
            }
        };
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((data) => {
            if (data['id'] != null && data['id'] != undefined) {
                this.model.id = data['id'];
                this.pageOnBind(this.model.id);
            }
        });
    }
    pageOnBind(id) {
        this._page.loadingShow();
        this._http.post(this.model.apiUrlDetail, { 'id': this.model.id, 'userid': this._userinfo.GetSystemUserId() }, (res) => {
            if (res !== null) {
                var attr = res["Attributes"];
                this.model.info.amount = attr["mcs_amount@OData.Community.Display.V1.FormattedValue"];
                this.model.info.code = attr["mcs_code"];
                this.model.info.paycategory = attr["mcs_paycategory@OData.Community.Display.V1.FormattedValue"];
                this.model.info.payon = attr["mcs_payon@OData.Community.Display.V1.FormattedValue"];
                this.model.info.batchcode = attr["mcs_batchcode"];
                this.model.info.itemname = attr["mcs_itemname"];
                this.model.info.itemcode = attr["mcs_itemcode"];
                this.model.info.remark = attr["mcs_remark"];
            }
            else {
                this._page.alert("消息提示", "原始线索编辑信息加载异常");
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "原始线索编辑信息加载异常");
            this._page.loadingHide();
        });
    }
};
DetailPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__["Storage_LoginInfo"] }
];
DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/orderpaydetail/detail/detail.page.html"),
        styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/saleing/orderpaydetail/detail/detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__["Storage_LoginInfo"]])
], DetailPage);



/***/ })

}]);
//# sourceMappingURL=saleing-orderpaydetail-detail-detail-module-es2015.js.map