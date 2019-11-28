(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-lead-com-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/lead.com/detail/detail.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/lead.com/detail/detail.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>留资详情</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n                <ion-menu-button></ion-menu-button>\r\n            </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-card>\r\n        <ion-card-content>\r\n            <ion-list>\r\n                <ion-item-group>\r\n                    <ion-item-divider color=\"primary\">\r\n                        <ion-label>基本信息</ion-label>\r\n                    </ion-item-divider>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>姓名</h2>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\">\r\n                            <p>{{model.info.username}}</p>\r\n                        </ion-note>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>手机号</h2>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\">\r\n                            <p>{{model.info.mobile}}</p>\r\n                        </ion-note>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>线索来源</h2>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\">\r\n                            <p>{{model.info.clues}}</p>\r\n                        </ion-note>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>称呼</h2>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\">\r\n                            <p>{{model.info.gender}}</p>\r\n                        </ion-note>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>邮箱</h2>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\">\r\n                            <p>{{model.info.mail}}</p>\r\n                        </ion-note>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>评分</h2>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\">\r\n                            <p>{{model.info.score}}</p>\r\n                        </ion-note>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>省</h2>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\">\r\n                            <p>{{model.info.province}}</p>\r\n                        </ion-note>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>市</h2>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\">\r\n                            <p>{{model.info.city}}</p>\r\n                        </ion-note>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>区</h2>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\">\r\n                            <p>{{model.info.area}}</p>\r\n                        </ion-note>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>线索描述</h2>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\">\r\n                                <textarea readonly>{{model.info.describe}}</textarea>\r\n                        </ion-note>\r\n                    </ion-item>\r\n                </ion-item-group>\r\n            </ion-list>\r\n        </ion-card-content>\r\n    </ion-card>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/saleing/lead.com/detail/detail.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/saleing/lead.com/detail/detail.module.ts ***!
  \**********************************************************/
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
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/saleing/lead.com/detail/detail.page.ts");







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

/***/ "./src/app/saleing/lead.com/detail/detail.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/saleing/lead.com/detail/detail.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".floatLabel {\n  text-align: right;\n  margin-right: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZWluZy9sZWFkLmNvbS9kZXRhaWwvRTpcXEFwcFByb2plY3RcXERDRU1cXERDRU0uTUFwcC9zcmNcXGFwcFxcc2FsZWluZ1xcbGVhZC5jb21cXGRldGFpbFxcZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVHLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvbGVhZC5jb20vZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxvYXRMYWJlbFxyXG57XHJcbiAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/saleing/lead.com/detail/detail.page.ts":
/*!********************************************************!*\
  !*** ./src/app/saleing/lead.com/detail/detail.page.ts ***!
  \********************************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/logininfo.storage */ "./src/app/base/base.ser/logininfo.storage.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var DetailPage = /** @class */ (function () {
    function DetailPage(_http, _page, activeRoute, _userinfo) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this._userinfo = _userinfo;
        this.model = {
            apiUrlDetail: '/api/Originalclue/get',
            id: "",
            info: {
                username: "",
                mobile: "",
                clues: "",
                gender: "",
                mail: "",
                province: "",
                city: "",
                area: "",
                score: "",
                describe: ""
            }
        };
    }
    DetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParams.subscribe(function (data) {
            if (data['id'] != null && data['id'] != undefined) {
                _this.model.id = data['id'];
                _this.pageOnBind(_this.model.id);
            }
        });
    };
    DetailPage.prototype.pageOnBind = function (id) {
        var _this = this;
        this._page.loadingShow();
        this._http.postForToaken(this.model.apiUrlDetail, { 'id': this.model.id, 'userid': this._userinfo.GetSystemUserId() }, function (res) {
            if (res !== null) {
                var attr = res["Attributes"];
                _this.model.info.username = attr["fullname"];
                _this.model.info.mobile = attr["mobilephone"];
                _this.model.info.clues = attr["mcs_leadorigin@OData.Community.Display.V1.FormattedValue"];
                _this.model.info.gender = attr["mcs_gender@OData.Community.Display.V1.FormattedValue"];
                _this.model.info.mail = attr["emailaddress1"];
                _this.model.info.province = attr["_mcs_provinceid_value@OData.Community.Display.V1.FormattedValue"];
                _this.model.info.city = attr["_mcs_cityid_value@OData.Community.Display.V1.FormattedValue"];
                _this.model.info.area = attr["_mcs_districtid_value@OData.Community.Display.V1.FormattedValue"];
                _this.model.info.describe = attr["description"];
                _this.model.info.score = attr["mcs_accountpoints"];
            }
            else {
                _this._page.alert("消息提示", "原始线索编辑信息加载异常");
            }
            _this._page.loadingHide();
        }, function (err) {
            _this._page.alert("消息提示", "原始线索编辑信息加载异常");
            _this._page.loadingHide();
        });
    };
    DetailPage.ctorParameters = function () { return [
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__["Storage_LoginInfo"] }
    ]; };
    DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/lead.com/detail/detail.page.html"),
            styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/saleing/lead.com/detail/detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__["Storage_LoginInfo"]])
    ], DetailPage);
    return DetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=saleing-lead-com-detail-detail-module-es5.js.map