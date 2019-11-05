(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-mc-sc-com-edit2-edit2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/mc-sc.com/edit2/edit2.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/mc-sc.com/edit2/edit2.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/sc/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>选择维修项目及配件</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-title>\r\n                <ion-icon name=\"search\" size=\"small\"></ion-icon>\r\n                保养项\r\n            </ion-card-title>\r\n        </ion-card-header>\r\n\r\n        <ion-list lines=\"full\">\r\n            <ion-item (click)=\"presentCarmodelModal()\">\r\n                <ion-label>\r\n                    <h2>\r\n                        车型\r\n                    </h2>\r\n                    <p>\r\n                        &nbsp;\r\n                    </p>\r\n                </ion-label>\r\n                <ion-icon slot=\"end\" name=\"search\"></ion-icon>\r\n            </ion-item>\r\n\r\n            <ion-item (click)=\"presentMaintenanceModal()\">\r\n                <ion-label>\r\n                    <h2>\r\n                        保修项\r\n                    </h2>\r\n                    <p>\r\n                        &nbsp;\r\n                    </p>\r\n                </ion-label>\r\n                <ion-icon slot=\"end\" name=\"search\"></ion-icon>\r\n            </ion-item>\r\n        </ion-list>\r\n\r\n        <ion-card-content>\r\n            <ion-button color=\"primary\" class=\"button-outline\">\r\n                查询\r\n            </ion-button>\r\n        </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-title>\r\n                <ion-icon name=\"phone-portrait\" size=\"small\"></ion-icon>\r\n                维修项目\r\n                <ion-icon name=\"add-circle-outline\" style=\"float: right\"></ion-icon>\r\n            </ion-card-title>\r\n        </ion-card-header>\r\n        <ion-list lines=\"full\">\r\n            <ion-item-sliding>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            项目名称\r\n                        </h2>\r\n                        <p>\r\n                            项目1\r\n                        </p>\r\n                        <h2>\r\n                            项目代码\r\n                        </h2>\r\n                        <p>\r\n                            203300\r\n                        </p>\r\n                        <h2>\r\n                            维修类别\r\n                        </h2>\r\n                        <p>\r\n                            保修\r\n                        </p>\r\n                        <h2>\r\n                            费用明细\r\n                        </h2>\r\n                        <p>\r\n                            1小时 X 1.1  X 1  =  ￥3333\r\n                        </p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item-options side=\"end\">\r\n                    <ion-item-option color=\"tertiary\" expandable>\r\n                        移除\r\n                    </ion-item-option>\r\n                </ion-item-options>\r\n            </ion-item-sliding>\r\n            <ion-item-sliding>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            项目名称\r\n                        </h2>\r\n                        <p>\r\n                            项目1\r\n                        </p>\r\n                        <h2>\r\n                            项目代码\r\n                        </h2>\r\n                        <p>\r\n                            203300\r\n                        </p>\r\n                        <h2>\r\n                            维修类别\r\n                        </h2>\r\n                        <p>\r\n                            保修\r\n                        </p>\r\n                        <h2>\r\n                            费用明细\r\n                        </h2>\r\n                        <p>\r\n                            1小时 X 1.1  X 1  =  ￥3333\r\n                        </p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item-options side=\"end\">\r\n                    <ion-item-option color=\"tertiary\" expandable>\r\n                        移除\r\n                    </ion-item-option>\r\n                </ion-item-options>\r\n            </ion-item-sliding>\r\n        </ion-list>\r\n        <br />\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-title>维修配件</ion-card-title>\r\n        </ion-card-header>\r\n\r\n        <ion-item>\r\n            <ion-label>保养项</ion-label>\r\n            <ion-label slot=\"end\"></ion-label>\r\n            <ion-icon slot=\"end\" name=\"search\"></ion-icon>\r\n        </ion-item>\r\n        <br />\r\n    </ion-card>\r\n\r\n\r\n\r\n\r\n    <section style=\"text-align:center;\">\r\n        <ion-button style=\"width:40%\" color=\"danger\" [routerLink]=\"['/serving/ri/edit']\">上一步</ion-button>\r\n        <ion-button style=\"width:40%\" color=\"success\" (click)=\"saveOnClick()\">保存</ion-button>\r\n    </section>\r\n    <br />\r\n    <br />\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/mc-sc.com/edit2/edit2.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/serving/mc-sc.com/edit2/edit2.module.ts ***!
  \*********************************************************/
/*! exports provided: Edit2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit2PageModule", function() { return Edit2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit2.page */ "./src/app/serving/mc-sc.com/edit2/edit2.page.ts");







var routes = [
    {
        path: '',
        component: _edit2_page__WEBPACK_IMPORTED_MODULE_6__["Edit2Page"]
    }
];
var Edit2PageModule = /** @class */ (function () {
    function Edit2PageModule() {
    }
    Edit2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit2_page__WEBPACK_IMPORTED_MODULE_6__["Edit2Page"]]
        })
    ], Edit2PageModule);
    return Edit2PageModule;
}());



/***/ }),

/***/ "./src/app/serving/mc-sc.com/edit2/edit2.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/serving/mc-sc.com/edit2/edit2.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvbWMtc2MuY29tL2VkaXQyL2VkaXQyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/serving/mc-sc.com/edit2/edit2.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/serving/mc-sc.com/edit2/edit2.page.ts ***!
  \*******************************************************/
/*! exports provided: Edit2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit2Page", function() { return Edit2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var app_serving_serving_ser_components_select_carmodel_select_carmodel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/serving/serving.ser/components/select-carmodel/select-carmodel.component */ "./src/app/serving/serving.ser/components/select-carmodel/select-carmodel.component.ts");
/* harmony import */ var app_serving_serving_ser_components_select_maintenance_select_maintenance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/serving/serving.ser/components/select-maintenance/select-maintenance.component */ "./src/app/serving/serving.ser/components/select-maintenance/select-maintenance.component.ts");






var Edit2Page = /** @class */ (function () {
    function Edit2Page(_modalCtrl, _http, _page, _shareData) {
        this._modalCtrl = _modalCtrl;
        this._http = _http;
        this._page = _page;
        this._shareData = _shareData;
        //定义数据模型
        this.mod = {
            apiUrl: '/Api/Serviceproxy/GetVehcheckresultList',
            postApiUrl: '/Api/Serviceproxy/AddOrUpdate',
            data: {},
            postData: {},
            shareDataKey: "scEditData"
        };
        //定义共享数据
        this.shareData = {
            serviceproxy: {},
            vehcheckresultMap: {},
        };
        this.objectKeys = Object.keys;
    }
    //选择车型
    Edit2Page.prototype.presentCarmodelModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalCtrl.create({
                            component: app_serving_serving_ser_components_select_carmodel_select_carmodel_component__WEBPACK_IMPORTED_MODULE_4__["SelectCarmodelComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data != null && typeof data != "undefined") {
                            //if (data.repairlocation != null && typeof data.repairlocation != "undefined") {
                            //    //this.shareData.serviceproxy["repairlocationid"] = data.repairlocation["model"]["mcs_repairlocationid"];
                            //    //this.shareData.serviceproxy["repairlocationname"] = data.repairlocation["model"]["mcs_name"];
                            //}
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //选择保养项
    Edit2Page.prototype.presentMaintenanceModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalCtrl.create({
                            component: app_serving_serving_ser_components_select_maintenance_select_maintenance_component__WEBPACK_IMPORTED_MODULE_5__["SelectMaintenanceComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data != null && typeof data != "undefined") {
                            //if (data.repairlocation != null && typeof data.repairlocation != "undefined") {
                            //    //this.shareData.serviceproxy["repairlocationid"] = data.repairlocation["model"]["mcs_repairlocationid"];
                            //    //this.shareData.serviceproxy["repairlocationname"] = data.repairlocation["model"]["mcs_name"];
                            //}
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Edit2Page.prototype.ngOnInit = function () {
    };
    Edit2Page.prototype.saveOnClick = function () {
    };
    Edit2Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_ShareData"] }
    ]; };
    Edit2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit2',
            template: __webpack_require__(/*! raw-loader!./edit2.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/mc-sc.com/edit2/edit2.page.html"),
            styles: [__webpack_require__(/*! ./edit2.page.scss */ "./src/app/serving/mc-sc.com/edit2/edit2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_ShareData"]])
    ], Edit2Page);
    return Edit2Page;
}());



/***/ })

}]);
//# sourceMappingURL=serving-mc-sc-com-edit2-edit2-module-es5.js.map