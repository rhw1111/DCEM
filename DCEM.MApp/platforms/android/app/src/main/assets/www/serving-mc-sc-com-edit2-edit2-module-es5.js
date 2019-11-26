(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-mc-sc-com-edit2-edit2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/mc-sc.com/edit2/edit2.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/mc-sc.com/edit2/edit2.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/sc/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>选择维修项目及配件</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-title>\r\n                <ion-card-title>\r\n                    <ion-label>保养项</ion-label>\r\n                </ion-card-title>\r\n            </ion-card-title>\r\n        </ion-card-header>\r\n\r\n        <ion-list lines=\"full\">\r\n            <ion-item (click)=\"presentCarmodelModal()\">\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon slot=\"end\" name=\"search\"></ion-icon>\r\n                    车型\r\n                </ion-label>\r\n                <p>\r\n                    {{mod.searchData[\"carmodel\"][\"name\"]}}&nbsp;\r\n                </p>\r\n            </ion-item>\r\n\r\n            <ion-item (click)=\"presentMaintenanceModal()\">\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon slot=\"end\" name=\"search\"></ion-icon>\r\n                    保养项\r\n                </ion-label>\r\n                <p>\r\n                    {{mod.searchData[\"maintenance\"][\"name\"]}}&nbsp;\r\n                </p>\r\n            </ion-item>\r\n        </ion-list>\r\n        <ion-card-content>\r\n            <ion-button color=\"primary\" class=\"button-outline\" (click)=\"searchOnClick()\">\r\n                查询\r\n            </ion-button>\r\n        </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-title>\r\n                <ion-card-title>\r\n                    <ion-label>维修项目</ion-label>\r\n                </ion-card-title>\r\n            </ion-card-title>\r\n        </ion-card-header>\r\n        <ion-list lines=\"full\">\r\n            <ion-item-sliding *ngFor=\"let key of objectKeys(shareData.serviceorderrepairitemMap)\">\r\n                <ion-item [routerLink]=\"['/serving/sc/subeditworking']\" [queryParams]=\"{key:key,actionCode:2}\">\r\n                    <ion-label>\r\n                        <h2>\r\n                            项目名称(编码)\r\n                        </h2>\r\n                        <p>\r\n                            {{shareData.serviceorderrepairitemMap[key][\"name\"]}}\r\n                            ({{shareData.serviceorderrepairitemMap[key][\"code\"]}})\r\n                        </p>\r\n                        <h2>\r\n                            维修类别(类型)\r\n                        </h2>\r\n                        <p>\r\n                            {{shareData.serviceorderrepairitemMap[key][\"repairitemtypeid_Formatted\"]}}\r\n                            ({{shareData.serviceorderrepairitemMap[key][\"repairitemtypedetailid_Formatted\"]}})\r\n                        </p>\r\n                        <h2>\r\n                            费用明细\r\n                        </h2>\r\n                        <p>\r\n                            {{shareData.serviceorderrepairitemMap[key][\"workinghour\"]}}小时 X {{shareData.serviceorderrepairitemMap[key][\"price\"]}}  X {{shareData.serviceorderrepairitemMap[key][\"discount\"]}}  =  ¥{{shareData.serviceorderrepairitemMap[key][\"repairamount\"]}}\r\n                        </p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item-options side=\"end\">\r\n                    <ion-item-option color=\"danger\" expandable (click)=\"workingDeleteClick(key)\">\r\n                        移除\r\n                    </ion-item-option>\r\n                </ion-item-options>\r\n            </ion-item-sliding>\r\n        </ion-list>\r\n        <ion-card-content>\r\n            <ion-button color=\"primary\" class=\"button-outline\" [routerLink]=\"['/serving/sc/subeditworking']\" [queryParams]=\"{actionCode:1}\">\r\n                添加\r\n            </ion-button>\r\n        </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-title>\r\n                <ion-card-title>\r\n                    <ion-label>维修配件</ion-label>\r\n                </ion-card-title>\r\n            </ion-card-title>\r\n        </ion-card-header>\r\n\r\n        <ion-list lines=\"full\">\r\n            <ion-item-sliding *ngFor=\"let key of objectKeys(shareData.serviceorderpartMap)\">\r\n                <ion-item [routerLink]=\"['/serving/sc/subeditpart']\" [queryParams]=\"{key:key,actionCode:2}\">\r\n                    <ion-label>\r\n                        <h2>\r\n                            零件名称(编码)\r\n                        </h2>\r\n                        <p>\r\n                            {{shareData.serviceorderpartMap[key][\"name\"]}}\r\n                            ({{shareData.serviceorderpartMap[key][\"code\"]}})\r\n                        </p>\r\n                        <h2>\r\n                            维修类别(类型)\r\n                        </h2>\r\n                        <p>\r\n                            {{shareData.serviceorderpartMap[key][\"repairitemtypeid_Formatted\"]}}\r\n                            ({{shareData.serviceorderpartMap[key][\"repairitemtypedetailid_Formatted\"]}})\r\n                        </p>\r\n                        <h2>\r\n                            费用明细\r\n                        </h2>\r\n                        <p>\r\n                            {{shareData.serviceorderpartMap[key][\"quantity\"]}} X {{shareData.serviceorderpartMap[key][\"price\"]}}  X {{shareData.serviceorderpartMap[key][\"discount\"]}}  =  ¥{{shareData.serviceorderpartMap[key][\"amount\"]}}\r\n                        </p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item-options side=\"end\">\r\n                    <ion-item-option color=\"danger\" expandable (click)=\"partDeleteClick(key)\">\r\n                        移除\r\n                    </ion-item-option>\r\n                </ion-item-options>\r\n            </ion-item-sliding>\r\n        </ion-list>\r\n        <ion-card-content>\r\n            <ion-button color=\"primary\" class=\"button-outline\" [routerLink]=\"['/serving/sc/subeditpart']\" [queryParams]=\"{actionCode:1}\">\r\n                添加\r\n            </ion-button>\r\n        </ion-card-content>\r\n    </ion-card>\r\n    <section style=\"text-align:center;\">\r\n        <ion-button style=\"width:40%\" color=\"danger\" [routerLink]=\"['/serving/sc/edit']\">上一步</ion-button>\r\n        <ion-button style=\"width:40%\" color=\"primary\" (click)=\"saveOnClick()\">保存</ion-button>\r\n    </section>\r\n    <br />\r\n    <br />\r\n</ion-content>\r\n"

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
            declarations: [_edit2_page__WEBPACK_IMPORTED_MODULE_6__["Edit2Page"]],
            entryComponents: [],
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

module.exports = "/*ion-card-header {\r\n    border-bottom: 0.1em solid rgb(200,199,204);\r\n\r\n    ion-card-title {\r\n        height: 0.3rem;\r\n\r\n        ion-label {\r\n            float: left;\r\n            font-size: 1rem;\r\n            top: 50%;\r\n            transform: translateY(-50%);\r\n        }\r\n    }\r\n\r\n    ion-icon {\r\n        width: 1rem;\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n    }\r\n}\r\n\r\nion-list {\r\n    ion-item-divider {\r\n        ion-label {\r\n            font-size: 0.6rem;\r\n        }\r\n    }\r\n\r\n    ion-label:first-of-type {\r\n        font-size: 0.5rem;\r\n\r\n        h2 {\r\n            margin-left: 0rem;\r\n            font-size: 0.5rem;\r\n        }\r\n\r\n        p {\r\n            font-size: 0.3rem;\r\n        }\r\n    }\r\n\r\n    ion-input {\r\n        font-size: 0.3rem;\r\n    }\r\n\r\n    ion-select {\r\n        font-size: 0.3rem;\r\n    }\r\n\r\n    ion-datetime {\r\n        font-size: 0.3rem;\r\n    }\r\n\r\n    ion-textarea {\r\n        font-size: 0.3rem;\r\n    }\r\n\r\n}*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmluZy9tYy1zYy5jb20vZWRpdDIvRTpcXEFwcFByb2plY3RcXERDRU1cXERDRU0uTUFwcC9zcmNcXGFwcFxcc2VydmluZ1xcbWMtc2MuY29tXFxlZGl0MlxcZWRpdDIucGFnZS5zY3NzIiwic3JjL2FwcC9zZXJ2aW5nL21jLXNjLmNvbS9lZGl0Mi9lZGl0Mi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQ3lERSIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvbWMtc2MuY29tL2VkaXQyL2VkaXQyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMWVtIHNvbGlkIHJnYigyMDAsMTk5LDIwNCk7XHJcblxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICAgIGhlaWdodDogMC4zcmVtO1xyXG5cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgICBpb24taXRlbS1kaXZpZGVyIHtcclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxhYmVsOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuM3JlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDAuM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tc2VsZWN0IHtcclxuICAgICAgICBmb250LXNpemU6IDAuM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tZGF0ZXRpbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC4zcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi10ZXh0YXJlYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjNyZW07XHJcbiAgICB9XHJcblxyXG59Ki9cclxuIiwiLyppb24tY2FyZC1oZWFkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4xZW0gc29saWQgcmdiKDIwMCwxOTksMjA0KTtcclxuXHJcbiAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAwLjNyZW07XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICB3aWR0aDogMXJlbTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICAgIGlvbi1pdGVtLWRpdmlkZXIge1xyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tbGFiZWw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC4zcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC4zcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC4zcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1kYXRldGltZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXRleHRhcmVhIHtcclxuICAgICAgICBmb250LXNpemU6IDAuM3JlbTtcclxuICAgIH1cclxuXHJcbn0qL1xuIl19 */"

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
    //控制器 初始化
    function Edit2Page(_modalCtrl, _http, _page, _shareData, _valid) {
        this._modalCtrl = _modalCtrl;
        this._http = _http;
        this._page = _page;
        this._shareData = _shareData;
        this._valid = _valid;
        //定义数据模型
        this.mod = {
            searchApiUrl: '/Api/Serviceproxy/GetMaintenanceInfo',
            postApiUrl: '/Api/Serviceproxy/AddOrUpdate',
            data: {},
            searchData: {
                carmodel: {},
                maintenance: {}
            },
            postData: {},
            shareDataKey: "scEditData"
        };
        //定义共享数据
        this.shareData = {
            actioncode: 1,
            viewTitle: "",
            serviceproxy: {},
            serviceorderrepairitemMap: {},
            serviceorderpartMap: {},
        };
        this.objectKeys = Object.keys;
    }
    Edit2Page.prototype.ionViewWillEnter = function () {
        if (this._shareData.has(this.mod.shareDataKey)) {
            this.shareData = this._shareData.get(this.mod.shareDataKey);
        }
    };
    //ng初始化
    Edit2Page.prototype.ngOnInit = function () {
    };
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
                        if (!this._valid.isNull(data) && !this._valid.isNull(data["carmodel"])) {
                            this.mod.searchData["carmodel"] = {};
                            this.mod.searchData["carmodel"]["name"] = data["carmodel"]["model"]["mcs_name"];
                            this.mod.searchData["carmodel"]["id"] = data["carmodel"]["model"]["mcs_carmodelid"];
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
                        if (!this._valid.isNull(data) && !this._valid.isNull(data["maintenance"])) {
                            this.mod.searchData["maintenance"] = {};
                            this.mod.searchData["maintenance"]["name"] = data["maintenance"]["model"]["mcs_name"];
                            this.mod.searchData["maintenance"]["id"] = data["maintenance"]["model"]["mcs_maintenanceid"];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //搜索保养项
    Edit2Page.prototype.searchOnClick = function () {
        var _this = this;
        if (this._valid.isNull(this.mod.searchData["carmodel"]["id"])) {
            this._page.alert("消息提示", "请先选择车型");
            return;
        }
        if (this._valid.isNull(this.mod.searchData["maintenance"]["id"])) {
            this._page.alert("消息提示", "请先选择保养项");
            return;
        }
        console.log(this.shareData.serviceproxy["dealerid"]);
        if (this._valid.isNull(this.shareData.serviceproxy["dealerid"])) {
            this._page.alert("消息提示", "未包含厅店数据无法进行查询");
            return;
        }
        this._page.loadingShow();
        this._http.get(this.mod.searchApiUrl, {
            params: {
                maintenanceGuid: this.mod.searchData["maintenance"]["id"],
                dealeridGuid: this.shareData.serviceproxy["dealerid"]
            }
        }, function (res) {
            if (res !== null) {
                _this.shareData.serviceorderrepairitemMap = {};
                //加维修项目
                for (var key in res.MaintenanceiteminfoList) {
                    var obj = {};
                    var mapkey = Math.random(); //生成唯一编码
                    obj["name"] = res.MaintenanceiteminfoList[key]["Attributes"]["mcs_repairitemcode"];
                    obj["code"] = res.MaintenanceiteminfoList[key]["Attributes"]["mcs_name"];
                    obj["repairitemid"] = res.MaintenanceiteminfoList[key]["Id"];
                    obj["repairitemtypeid"] = res.MaintenanceiteminfoList[key]["Attributes"]["ext_repairitemtypeid"];
                    obj["repairitemtypedetailid"] = res.MaintenanceiteminfoList[key]["Attributes"]["ext_repairitemtypedetailid"];
                    obj["repairitemtypeid_Formatted"] = res.MaintenanceiteminfoList[key]["Attributes"]["ext_repairitemtypeid_formatted"];
                    obj["repairitemtypedetailid_Formatted"] = res.MaintenanceiteminfoList[key]["Attributes"]["ext_repairitemtypedetailid_formatted"];
                    obj["workinghour"] = res.MaintenanceiteminfoList[key]["Attributes"]["mcs_workinghour"];
                    obj["price"] = res.MaintenanceiteminfoList[key]["Attributes"]["ext_price"];
                    obj["discount"] = 1;
                    obj["repairamount"] = obj["workinghour"] * obj["price"];
                    _this.shareData.serviceorderrepairitemMap[mapkey] = obj;
                }
                _this.shareData.serviceorderpartMap = {};
                //加零件
                for (var key in res.RepairitempartList) {
                    var obj = {};
                    var mapkey = Math.random(); //生成唯一编码
                    obj["name"] = res.RepairitempartList[key]["Attributes"]["mcs_partscode"];
                    obj["code"] = res.RepairitempartList[key]["Attributes"]["mcs_name"];
                    obj["partsid"] = res.RepairitempartList[key]["Id"];
                    obj["repairitemtypeid"] = res.RepairitempartList[key]["Attributes"]["ext_repairitemtypeid"];
                    obj["repairitemtypedetailid"] = res.RepairitempartList[key]["Attributes"]["ext_repairitemtypedetailid"];
                    obj["repairitemtypeid_Formatted"] = res.RepairitempartList[key]["Attributes"]["ext_repairitemtypeid_formatted"];
                    obj["repairitemtypedetailid_Formatted"] = res.RepairitempartList[key]["Attributes"]["ext_repairitemtypedetailid_formatted"];
                    obj["quantity"] = 1;
                    obj["price"] = res.RepairitempartList[key]["Attributes"]["ext_price"];
                    obj["discount"] = 1;
                    obj["amount"] = res.RepairitempartList[key]["Attributes"]["ext_price"];
                    _this.shareData.serviceorderpartMap[mapkey] = obj;
                }
                _this._page.loadingHide();
            }
            else {
                _this._page.alert("消息提示", "数据加载异常");
                _this._page.loadingHide();
            }
        }, function (err) {
            _this._page.alert("消息提示", "数据加载异常");
            _this._page.loadingHide();
        });
    };
    //维修项目新增 编辑
    Edit2Page.prototype.workingEditClick = function () {
        this._shareData.set(this.mod.shareDataKey, this.shareData);
        this._page.goto("/serving/sc/subeditworking");
    };
    //维修配件新增 编辑
    Edit2Page.prototype.partEditClick = function () {
        this._shareData.set(this.mod.shareDataKey, this.shareData);
        this._page.goto("/serving/sc/subeditpart");
    };
    //移除维修项目
    Edit2Page.prototype.workingDeleteClick = function (mapkey) {
        delete this.shareData.serviceorderrepairitemMap[mapkey];
    };
    //移除维修配件
    Edit2Page.prototype.partDeleteClick = function (mapkey) {
        delete this.shareData.serviceorderpartMap[mapkey];
    };
    //移除零件
    //提交保存
    Edit2Page.prototype.saveOnClick = function () {
        var _this = this;
        this.mod.postData["actioncode"] = this.shareData.actioncode;
        //组装服务委托书
        this.mod.postData["serviceproxy"] = {};
        if (this.shareData["actioncode"] === 2)
            this.mod.postData["serviceproxy"]["serviceproxyid"] = this.shareData.serviceproxy["serviceproxyid"]; //服务委托书ID
        this.mod.postData["serviceproxy"]["currenttype"] = 20;
        this.mod.postData["serviceproxy"]["customerid"] = this.shareData.serviceproxy["customerid"]; //车辆VIN
        this.mod.postData["serviceproxy"]["dealerid"] = this.shareData.serviceproxy["dealerid"]; //厅店Id
        this.mod.postData["serviceproxy"]["customername"] = this.shareData.serviceproxy["customername"]; //用户名
        this.mod.postData["serviceproxy"]["carplate"] = this.shareData.serviceproxy["carplate"]; //车牌
        this.mod.postData["serviceproxy"]["customerphone"] = this.shareData.serviceproxy["customerphone"]; //手机
        this.mod.postData["serviceproxy"]["shuttlename"] = this.shareData.serviceproxy["shuttlename"]; //送修人
        this.mod.postData["serviceproxy"]["shuttlephone"] = this.shareData.serviceproxy["shuttlephone"]; //送修人手机
        this.mod.postData["serviceproxy"]["inpower"] = Number(this.shareData.serviceproxy["inpower"]); //进店电量
        this.mod.postData["serviceproxy"]["oilquantity"] = Number(this.shareData.serviceproxy["oilquantity"]); //进店油量
        this.mod.postData["serviceproxy"]["mileage"] = Number(this.shareData.serviceproxy["mileage"]); //进店里程
        this.mod.postData["serviceproxy"]["arrivalon"] = this.shareData.serviceproxy["arrivalon"]; //到店时间
        this.mod.postData["serviceproxy"]["customercomment"] = this.shareData.serviceproxy["customercomment"]; //客户描述
        this.mod.postData["serviceproxy"]["repairlocationid"] = this.shareData.serviceproxy["repairlocationid"]; //工位
        this.mod.postData["serviceproxy"]["expectfinishat"] = this.shareData.serviceproxy["expectfinishat"]; //预计交车时间
        this.mod.postData["serviceproxy"]["customercontent"] = this.shareData.serviceproxy["customercontent"]; //故障信息
        this.mod.postData["serviceproxy"]["testresult"] = this.shareData.serviceproxy["testresult"]; //检查结果
        this.mod.postData["serviceproxy"]["appointmentcode"] = this.shareData.serviceproxy["appointmentcode"]; //预约单编号
        //组装维修项目
        this.mod.postData["serviceorderrepairitemArray"] = [];
        for (var key in this.shareData.serviceorderrepairitemMap) {
            var obj = {};
            obj["repairitemid"] = this.shareData.serviceorderrepairitemMap[key]["repairitemid"];
            obj["name"] = this.shareData.serviceorderrepairitemMap[key]["name"];
            obj["workinghour"] = this.shareData.serviceorderrepairitemMap[key]["workinghour"];
            obj["price"] = this.shareData.serviceorderrepairitemMap[key]["price"];
            obj["discount"] = this.shareData.serviceorderrepairitemMap[key]["discount"];
            obj["repairitemtypeid"] = this.shareData.serviceorderrepairitemMap[key]["repairitemtypeid"];
            obj["repairitemtypedetailid"] = this.shareData.serviceorderrepairitemMap[key]["repairitemtypedetailid"];
            this.mod.postData["serviceorderrepairitemArray"].push(obj);
        }
        //组装维修配件
        this.mod.postData["serviceorderpartArray"] = [];
        for (var key in this.shareData.serviceorderpartMap) {
            var obj = {};
            obj = this.shareData.serviceorderpartMap[key];
            obj["partsid"] = this.shareData.serviceorderpartMap[key]["partsid"];
            obj["partsname"] = this.shareData.serviceorderpartMap[key]["partsname"];
            obj["price"] = this.shareData.serviceorderpartMap[key]["price"];
            obj["quantity"] = this.shareData.serviceorderpartMap[key]["quantity"];
            obj["discount"] = this.shareData.serviceorderpartMap[key]["discount"];
            obj["repairitemtypeid"] = this.shareData.serviceorderpartMap[key]["repairitemtypeid"];
            obj["repairitemtypedetailid"] = this.shareData.serviceorderpartMap[key]["repairitemtypedetailid"];
            this.mod.postData["serviceorderpartArray"].push(obj);
        }
        //提交数据保存
        this._page.loadingShow();
        this._http.post(this.mod.postApiUrl, this.mod.postData, function (res) {
            _this._page.loadingHide();
            if (res.Result == true) {
                var id = res["Data"]["Id"];
                var no = res["Data"]["Attributes"]["mcs_name"];
                if (_this.shareData["actioncode"] === 1 || _this.shareData["actioncode"] === 3)
                    _this._page.navigateRoot("/serving/sc/success", { actioncode: _this.shareData["actioncode"], id: id, no: no });
                else {
                    var that_1 = _this;
                    _this._page.alert("消息提示", "操作成功", function () {
                        that_1._page.navigateRoot("/serving/sc/list", null, "back");
                    });
                }
            }
            else {
                _this._page.alert("消息提示", "操作失败");
            }
        }, function (err) {
            _this._page.loadingHide();
            _this._page.alert("消息提示", "操作失败");
        });
    };
    Edit2Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_ShareData"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Valid"] }
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
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_ShareData"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Valid"]])
    ], Edit2Page);
    return Edit2Page;
}());



/***/ })

}]);
//# sourceMappingURL=serving-mc-sc-com-edit2-edit2-module-es5.js.map