(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-delivery-pdiservice-pdiservice-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/delivery/pdiservice/pdiservice.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/delivery/pdiservice/pdiservice.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n        <ion-back-button text=\"返回\"   defaultHref=\"/\">\r\n        </ion-back-button>\r\n    </ion-buttons> \r\n    <ion-title>提交PDI任务</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-item-divider color=\"primary\">\r\n      <ion-label>PDI任务</ion-label>\r\n    </ion-item-divider>\r\n    <ion-card-content>\r\n      <ion-list>\r\n        <ion-item-group>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>交车单号</h2>\r\n                </ion-label>\r\n                <ion-note slot=\"end\">\r\n                    <p>{{model.info.code}}</p>\r\n                </ion-note>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>车辆VIN号</h2>\r\n                </ion-label>\r\n                <ion-note slot=\"end\">\r\n                    <p>{{model.info.vin}}</p>\r\n                </ion-note>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>整车订单号</h2>\r\n                </ion-label>\r\n                <ion-note slot=\"end\">\r\n                    <p>{{model.info.ro}}</p>\r\n                </ion-note>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>交车状态</h2>\r\n                </ion-label>\r\n                <ion-note slot=\"end\">\r\n                    <p>{{model.info.deliverystatus}}</p>\r\n                </ion-note>\r\n            </ion-item> \r\n          <ion-item>\r\n            <ion-label>\r\n              服务顾问\r\n            </ion-label>\r\n            <ion-select name=\"clues\" okText=\"确认\" cancelText=\"取消\" [(ngModel)]=\"pdiModel.data.adviser\">\r\n                <ion-select-option *ngFor=\"let item of servicconsultantmodel.servicconsultants\" value=\"{{item.value}}\">\r\n                    {{item.name}}\r\n                </ion-select-option>\r\n            </ion-select>\r\n          </ion-item> \r\n        </ion-item-group>\r\n      </ion-list>\r\n      <section style=\"text-align:center;\">\r\n          <ion-button style=\"width:70%\" color=\"danger\" (click)=\"submitPdi()\">保存</ion-button>\r\n      </section>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/saleing/delivery/pdiservice/pdiservice.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/saleing/delivery/pdiservice/pdiservice.module.ts ***!
  \******************************************************************/
/*! exports provided: PdiservicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdiservicePageModule", function() { return PdiservicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pdiservice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pdiservice.page */ "./src/app/saleing/delivery/pdiservice/pdiservice.page.ts");







var routes = [
    {
        path: '',
        component: _pdiservice_page__WEBPACK_IMPORTED_MODULE_6__["PdiservicePage"]
    }
];
var PdiservicePageModule = /** @class */ (function () {
    function PdiservicePageModule() {
    }
    PdiservicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pdiservice_page__WEBPACK_IMPORTED_MODULE_6__["PdiservicePage"]]
        })
    ], PdiservicePageModule);
    return PdiservicePageModule;
}());



/***/ }),

/***/ "./src/app/saleing/delivery/pdiservice/pdiservice.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/saleing/delivery/pdiservice/pdiservice.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvZGVsaXZlcnkvcGRpc2VydmljZS9wZGlzZXJ2aWNlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/saleing/delivery/pdiservice/pdiservice.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/saleing/delivery/pdiservice/pdiservice.page.ts ***!
  \****************************************************************/
/*! exports provided: PdiservicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdiservicePage", function() { return PdiservicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/logininfo.storage */ "./src/app/base/base.ser/logininfo.storage.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var PdiservicePage = /** @class */ (function () {
    function PdiservicePage(_http, _page, activeRoute, _userinfo, alertController) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this._userinfo = _userinfo;
        this.alertController = alertController;
        this.servicconsultantmodel = {
            apiUrl: '/api/delivery/getservicconsultant',
            servicconsultants: [],
            data: {
                id: ""
            }
        };
        this.model = {
            apiUrlDetail: '/api/delivery/get',
            id: "",
            status: -1,
            settles: 0,
            info: {
                vin: "",
                code: "",
                deliverystatus: "",
                ro: ""
            }
        };
        this.pdiModel = {
            apiUrl: '/api/delivery/submitpdi',
            data: {
                adviser: "",
                id: ""
            }
        };
    }
    PdiservicePage.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParams.subscribe(function (data) {
            if (data['id'] != null && data['id'] != undefined) {
                _this.servicconsultantmodel.data.id = data['id'];
                _this.getservicconsultant();
                _this.model.id = data['id'];
                _this.pdiModel.data.id = data['id'];
                _this.pageOnBind(_this.model.id);
            }
        });
    };
    PdiservicePage.prototype.getservicconsultant = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this._http.postForToaken(this.servicconsultantmodel.apiUrl, this.servicconsultantmodel.data, function (res) {
                    if (res !== null) {
                        var data = res.ServiceConsultants;
                        for (var i in data) {
                            var attr = data[i]["Attributes"];
                            var obj = {};
                            obj["name"] = attr["fullname"];
                            obj["value"] = attr["systemuserid"];
                            _this.servicconsultantmodel.servicconsultants.push(obj);
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    //基础信息
    PdiservicePage.prototype.pageOnBind = function (id) {
        var _this = this;
        this._page.loadingShow();
        this._http.postForToaken(this.model.apiUrlDetail, { 'id': this.model.id }, function (res) {
            if (res !== null) {
                var attr = res["Attributes"];
                _this.model.info.vin = attr["_mcs_vin_value@OData.Community.Display.V1.FormattedValue"];
                _this.model.info.code = attr["mcs_code"];
                _this.model.info.deliverystatus = attr["mcs_deliverystatus@OData.Community.Display.V1.FormattedValue"];
                _this.model.status = attr["mcs_deliverystatus"];
                _this.model.settles = attr["mcs_settlestatus"];
                _this.model.info.ro = attr["_mcs_vehorder_value@OData.Community.Display.V1.FormattedValue"];
            }
            else {
                _this._page.alert("消息提示", "交车单基础信息加载异常");
            }
            _this._page.loadingHide();
        }, function (err) {
            _this._page.alert("消息提示", "交车单基础信息加载异常");
            _this._page.loadingHide();
        });
    };
    PdiservicePage.prototype.submitPdi = function () {
        var _this = this;
        if (this.pdiModel.data.adviser == "") {
            this._page.alert("消息提示", "请先选择服务顾问！");
            return;
        }
        this._page.loadingShow();
        this._http.postForToaken(this.pdiModel.apiUrl, this.pdiModel.data, function (res) {
            if (res !== null) {
                if (res.Result) {
                    _this._page.alert("消息提示", "pdi检测提交成功！", function () {
                        _this._page.goto("/saleing/delivery/detail", { 'id': _this.model.id });
                    });
                }
                else {
                    _this._page.alert("消息提示", res.Description);
                }
            }
            else {
                _this._page.alert("消息提示", "提交PDI任务操作失败");
            }
            _this._page.loadingHide();
        }, function (err) {
            _this._page.alert("消息提示", "提交PDI任务操作失败");
            _this._page.loadingHide();
        });
    };
    PdiservicePage.ctorParameters = function () { return [
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__["Storage_LoginInfo"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
    ]; };
    PdiservicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pdiservice',
            template: __webpack_require__(/*! raw-loader!./pdiservice.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/delivery/pdiservice/pdiservice.page.html"),
            styles: [__webpack_require__(/*! ./pdiservice.page.scss */ "./src/app/saleing/delivery/pdiservice/pdiservice.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__["Storage_LoginInfo"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], PdiservicePage);
    return PdiservicePage;
}());



/***/ })

}]);
//# sourceMappingURL=saleing-delivery-pdiservice-pdiservice-module-es5.js.map