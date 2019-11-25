(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-mcs-deliverycentercarstock-com-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-deliverycentercarstock.com/detail/detail.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/mcs-deliverycentercarstock.com/detail/detail.page.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/saleing/deliverycentercarstock/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <ion-label>整车库存台帐明细</ion-label>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-list lines=\"full\">\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                基本信息\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    VIN\r\n                </h2>\r\n                <p>{{mod.data.deliverycentercarstock[\"mcs_name\"]}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    发动机号\r\n                </h2>\r\n                <p>{{mod.data.vehicle[\"mcs_enginennumber\"]}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    电机型号\r\n                </h2>\r\n                <p>{{mod.data.vehicle[\"mcs_motormodel\"]}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    电机序列号\r\n                </h2>\r\n                <p>{{mod.data.vehicle[\"mcs_motorserialnumber\"]}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    电池型号\r\n                </h2>\r\n                <p>{{mod.data.vehicle[\"mcs_batterymodel\"]}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    电池序列号\r\n                </h2>\r\n                <p>{{mod.data.vehicle[\"mcs_batteryserialnumber\"]}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    涂装上线日期\r\n                </h2>\r\n                <p>{{mod.data.vehicle[\"mcs_paintingdatetime@OData.Community.Display.V1.FormattedValue\"]}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    焊装上线日期\r\n                </h2>\r\n                <p>{{mod.data.vehicle[\"mcs_weldingdatetime@OData.Community.Display.V1.FormattedValue\"]}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    总装上线日期\r\n                </h2>\r\n                <p>{{mod.data.vehicle[\"mcs_finaldatetime@OData.Community.Display.V1.FormattedValue\"]}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    计划收车日期\r\n                </h2>\r\n                <p>{{mod.data.vehicle[\"mcs_finishdatetime@OData.Community.Display.V1.FormattedValue\"]}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    入库日期\r\n                </h2>\r\n                <p>{{mod.data.vehicle[\"mcs_inbounddatetime@OData.Community.Display.V1.FormattedValue\"]}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    出库日期\r\n                </h2>\r\n                <p>{{mod.data.vehicle[\"mcs_outbounddatetime@OData.Community.Display.V1.FormattedValue\"]}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    厅店入库日期\r\n                </h2>\r\n                <p>{{mod.data.dealercarmovein[\"mcs_moveon@OData.Community.Display.V1.FormattedValue\"]}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    厅店出库日期\r\n                </h2>\r\n                <p>{{mod.data.deliverycentercarstock[\"mcs_salesdate@OData.Community.Display.V1.FormattedValue\"]}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                整车物料\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    车平台\r\n                </h2>\r\n                <p>{{mod.data.vehiclematerial[\"_mcs_carplatformid_value@OData.Community.Display.V1.FormattedValue\"]}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    基本车型\r\n                </h2>\r\n                <p>{{mod.data.vehiclematerial[\"_mcs_carmodelid_value@OData.Community.Display.V1.FormattedValue\"]}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    车型年\r\n                </h2>\r\n                <p>{{mod.data.vehiclematerial[\"mcs_caryear@OData.Community.Display.V1.FormattedValue\"]}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    动力类型\r\n                </h2>\r\n                <p>{{mod.data.vehiclematerial[\"_mcs_powertypeid_value@OData.Community.Display.V1.FormattedValue\"]}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    驱动动力\r\n                </h2>\r\n                <p>{{mod.data.vehiclematerial[\"_mcs_drivingpowerid_value@OData.Community.Display.V1.FormattedValue\"]}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    内饰颜色\r\n                </h2>\r\n                <p>{{mod.data.vehiclematerial[\"_mcs_incolourid_value@OData.Community.Display.V1.FormattedValue\"]}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h2>\r\n                    外饰颜色\r\n                </h2>\r\n                <p>{{mod.data.vehiclematerial[\"_mcs_excolourid_value@OData.Community.Display.V1.FormattedValue\"]}}&nbsp;</p>\r\n            </ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/saleing/mcs-deliverycentercarstock.com/detail/detail.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/saleing/mcs-deliverycentercarstock.com/detail/detail.module.ts ***!
  \********************************************************************************/
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
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/saleing/mcs-deliverycentercarstock.com/detail/detail.page.ts");







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

/***/ "./src/app/saleing/mcs-deliverycentercarstock.com/detail/detail.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/saleing/mcs-deliverycentercarstock.com/detail/detail.page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*ion-card-header {\r\n    border-bottom: 0.1em solid rgb(200,199,204);\r\n\r\n    ion-card-title {\r\n        height: 0.3rem;\r\n\r\n        ion-icon {\r\n            font-size: 1rem;\r\n            float: left;\r\n            top: 50%;\r\n            transform: translateY(-50%);\r\n            font-size: 1rem;\r\n        }\r\n\r\n        ion-label {\r\n            float: left;\r\n            font-size: 1rem;\r\n            top: 50%;\r\n            transform: translateY(-50%);\r\n        }\r\n    }\r\n}\r\n\r\nion-list {\r\n    ion-item-divider {\r\n        ion-label {\r\n            font-size: 0.6rem;\r\n        }\r\n    }\r\n\r\n    ion-label:first-of-type {\r\n\r\n        h2 {\r\n            margin-left: 0rem;\r\n            font-size: 0.5rem;\r\n        }\r\n\r\n        p {\r\n            font-size: 0.3rem;\r\n        }\r\n    }\r\n\r\n}*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZWluZy9tY3MtZGVsaXZlcnljZW50ZXJjYXJzdG9jay5jb20vZGV0YWlsL0U6XFxBcHBQcm9qZWN0XFxEQ0VNXFxEQ0VNLk1BcHAvc3JjXFxhcHBcXHNhbGVpbmdcXG1jcy1kZWxpdmVyeWNlbnRlcmNhcnN0b2NrLmNvbVxcZGV0YWlsXFxkZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9zYWxlaW5nL21jcy1kZWxpdmVyeWNlbnRlcmNhcnN0b2NrLmNvbS9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDMENFIiwiZmlsZSI6InNyYy9hcHAvc2FsZWluZy9tY3MtZGVsaXZlcnljZW50ZXJjYXJzdG9jay5jb20vZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjFlbSBzb2xpZCByZ2IoMjAwLDE5OSwyMDQpO1xyXG5cclxuICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgICBoZWlnaHQ6IDAuM3JlbTtcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgaW9uLWl0ZW0tZGl2aWRlciB7XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1sYWJlbDpmaXJzdC1vZi10eXBlIHtcclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjNyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSovXHJcbiIsIi8qaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMWVtIHNvbGlkIHJnYigyMDAsMTk5LDIwNCk7XHJcblxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICAgIGhlaWdodDogMC4zcmVtO1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgICBpb24taXRlbS1kaXZpZGVyIHtcclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxhYmVsOmZpcnN0LW9mLXR5cGUge1xyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuM3JlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Ki9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/saleing/mcs-deliverycentercarstock.com/detail/detail.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/saleing/mcs-deliverycentercarstock.com/detail/detail.page.ts ***!
  \******************************************************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DetailPage = class DetailPage {
    constructor(_http, _page, _shareData, _valid, activeRoute) {
        this._http = _http;
        this._page = _page;
        this._shareData = _shareData;
        this._valid = _valid;
        this.activeRoute = activeRoute;
        this.tab = "info";
        this.mod = {
            apiUrl: '/Api/Stock/GetDeliverycentercarStockInfo',
            data: {
                deliverycentercarstock: {},
                vehiclematerial: {},
                vehicle: {},
                dealercarmovein: {}
            }
        };
    }
    ionViewWillEnter() {
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.pageOnBind(params['id']);
            }
        });
    }
    pageOnBind(id) {
        this._page.loadingShow();
        this._http.get(this.mod.apiUrl, {
            params: {
                guid: id,
            }
        }, (res) => {
            if (!this._valid.isNull(res.Deliverycentercarstock)) {
                this.mod.data.deliverycentercarstock = res.Deliverycentercarstock["Attributes"];
            }
            if (!this._valid.isNull(res.Vehiclematerial)) {
                this.mod.data.vehiclematerial = res.Vehiclematerial["Attributes"];
            }
            if (!this._valid.isNull(res.Vehicle)) {
                this.mod.data.vehicle = res.Vehicle["Attributes"];
            }
            if (!this._valid.isNull(res.Dealercarmovein)) {
                this.mod.data.dealercarmovein = res.Dealercarmovein["Attributes"];
            }
            console.log(this.mod.data);
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
};
DetailPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_ShareData"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Valid"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-deliverycentercarstock.com/detail/detail.page.html"),
        styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/saleing/mcs-deliverycentercarstock.com/detail/detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_ShareData"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Valid"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], DetailPage);



/***/ })

}]);
//# sourceMappingURL=saleing-mcs-deliverycentercarstock-com-detail-detail-module-es2015.js.map