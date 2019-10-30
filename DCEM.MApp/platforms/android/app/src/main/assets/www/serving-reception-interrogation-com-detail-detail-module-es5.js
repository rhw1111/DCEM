(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-reception-interrogation-com-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/reception-interrogation.com/detail/detail.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/reception-interrogation.com/detail/detail.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/ri/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <ion-label>问诊单明细</ion-label>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list lines=\"full\">\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                车主资料\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    姓名\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.customername}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    车牌号\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.carplate}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    手机\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.customerphone}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                委托信息\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    问诊单号\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.name}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    送修人\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.shuttlename}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    送修人\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.shuttlename}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    送修人手机\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.shuttlephone}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    进店电量\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.inpower}}%&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    进店里程\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.mileage}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    到店时间\r\n                </h2>\r\n                <p>{{mod.data.serviceproxy.arrivalon}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    客户描述\r\n                </h2>\r\n                <p text-wrap>{{mod.data.serviceproxy.customercomment}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                环检项\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item-group>\r\n            <ion-item *ngFor=\"let item of mod.data.serviceordercheckresultArray;let key=index\">\r\n                <ion-label>\r\n                    <h2>\r\n                        环检项\r\n                    </h2>\r\n                    <p>\r\n                        {{item.checkreultid}}&nbsp;\r\n                    </p>\r\n                    <h2>\r\n                        车辆位置\r\n                    </h2>\r\n                    <p>\r\n                        {{item.name}}&nbsp;\r\n                    </p>\r\n                    <h2>\r\n                        检查结果\r\n                    </h2>\r\n                    <p text-wrap>\r\n                        {{item.checkreult}}&nbsp;\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"mod.data.serviceordercheckresultArray.length===0\">\r\n                <ion-label>\r\n                    <p>\r\n                        当前单据没有环检项\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-item-group>\r\n    </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/reception-interrogation.com/detail/detail.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/serving/reception-interrogation.com/detail/detail.module.ts ***!
  \*****************************************************************************/
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
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/serving/reception-interrogation.com/detail/detail.page.ts");







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

/***/ "./src/app/serving/reception-interrogation.com/detail/detail.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/serving/reception-interrogation.com/detail/detail.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvcmVjZXB0aW9uLWludGVycm9nYXRpb24uY29tL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/serving/reception-interrogation.com/detail/detail.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/serving/reception-interrogation.com/detail/detail.page.ts ***!
  \***************************************************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DetailPage = /** @class */ (function () {
    function DetailPage(_http, _page, activeRoute) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this.mod = {
            apiUrl: '/Api/Serviceproxy/GetInfo',
            data: {
                serviceproxy: {
                    customername: "",
                    carplate: "",
                    customerphone: "",
                    name: "",
                    shuttlename: "",
                    shuttlephone: "",
                    inpower: "",
                    mileage: "",
                    arrivalon: "",
                    customercomment: ""
                },
                serviceordercheckresultArray: []
            }
        };
    }
    DetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParams.subscribe(function (params) {
            if (params['id'] != null && params['id'] != undefined) {
                _this.pageOnBind(params['id']);
            }
        });
    };
    DetailPage.prototype.pageOnBind = function (id) {
        var _this = this;
        this._page.loadingShow();
        this._http.get(this.mod.apiUrl, {
            params: {
                guid: id,
            }
        }, function (res) {
            if (res.Carserviceadvisor !== null) {
                _this.mod.data.serviceproxy.customername = res["Serviceproxy"]["Attributes"]["mcs_customername"];
                _this.mod.data.serviceproxy.carplate = res["Serviceproxy"]["Attributes"]["mcs_carplate"];
                _this.mod.data.serviceproxy.customerphone = res["Serviceproxy"]["Attributes"]["mcs_customerphone"];
                _this.mod.data.serviceproxy.name = res["Serviceproxy"]["Attributes"]["mcs_name"];
                _this.mod.data.serviceproxy.shuttlename = res["Serviceproxy"]["Attributes"]["mcs_shuttlename"];
                _this.mod.data.serviceproxy.shuttlephone = res["Serviceproxy"]["Attributes"]["mcs_shuttlephone"];
                _this.mod.data.serviceproxy.inpower = res["Serviceproxy"]["Attributes"]["mcs_inpower"];
                _this.mod.data.serviceproxy.mileage = res["Serviceproxy"]["Attributes"]["mcs_mileage"];
                _this.mod.data.serviceproxy.arrivalon = res["Serviceproxy"]["Attributes"]["mcs_arrivalon@OData.Community.Display.V1.FormattedValue"];
                _this.mod.data.serviceproxy.customercomment = res["Serviceproxy"]["Attributes"]["mcs_customercomment"];
            }
            if (res.ServiceordercheckresultList != null) {
                for (var key in res.ServiceordercheckresultList) {
                    var obj = {};
                    obj["checkreultid"] = res.ServiceordercheckresultList[key]["Attributes"]["_mcs_checkreultid_value@OData.Community.Display.V1.FormattedValue"];
                    obj["name"] = res.ServiceordercheckresultList[key]["Attributes"]["mcs_name"];
                    obj["checkreult"] = res.ServiceordercheckresultList[key]["Attributes"]["mcs_checkreult"];
                    _this.mod.data.serviceordercheckresultArray.push(obj);
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
            template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/reception-interrogation.com/detail/detail.page.html"),
            styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/serving/reception-interrogation.com/detail/detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DetailPage);
    return DetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=serving-reception-interrogation-com-detail-detail-module-es5.js.map