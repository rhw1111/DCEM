(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-my-customer-com-edit-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/my-customer.com/edit/edit.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/my-customer.com/edit/edit.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/mycustomer/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{shareData.viewTitle}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-list lines=\"full\">\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                客户信息\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                姓名\r\n                <ion-text color=\"danger\">*</ion-text>\r\n            </ion-label>\r\n            <ion-input placeholder=\"请输入姓名\" maxlength=\"12\" [(ngModel)]=\"shareData.vehowner['mcs_fullname']\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                车牌\r\n                <ion-text color=\"danger\">*</ion-text>\r\n            </ion-label>\r\n            <ion-input placeholder=\"请输入车牌\" maxlength=\"12\" [(ngModel)]=\"shareData.vehowner['mcs_vehplate']\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                手机\r\n                <ion-text color=\"danger\">*</ion-text>\r\n            </ion-label>\r\n            <ion-input placeholder=\"请输入手机\" maxlength=\"12\" [(ngModel)]=\"shareData.vehowner['mcs_mobilephone']\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item (click)=\"presentCarmodelModal()\">\r\n            <ion-label position=\"stacked\">\r\n                <ion-icon name=\"search\"></ion-icon>\r\n                车型\r\n            </ion-label>\r\n            <p>{{shareData.vehowner[\"_mcs_vehtype_value@OData.Community.Display.V1.FormattedValue\"]}}&nbsp;</p>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                Vin\r\n            </ion-label>\r\n            <ion-input placeholder=\"请输入Vin\" maxlength=\"12\" [(ngModel)]=\"shareData.vehowner['mcs_name']\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                发动机号\r\n            </ion-label>\r\n            <ion-input placeholder=\"请输入发动机号\" type=\"phone\" [(ngModel)]=\"shareData.vehowner['mcs_enginennumber']\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                生产日期\r\n            </ion-label>\r\n            <ion-datetime cancelText=\"取消\" doneText=\"确定\" placeholder=\"请选择生产日期\" display-format=\"YYYY-MM-DD\" [(ngModel)]=\"shareData.vehowner['mcs_prodtime']\"></ion-datetime>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                销售日期\r\n            </ion-label>\r\n            <ion-datetime cancelText=\"取消\" doneText=\"确定\" placeholder=\"请选择销售日期\" display-format=\"YYYY-MM-DD\" [(ngModel)]=\"shareData.vehowner['mcs_salesdate']\"></ion-datetime>\r\n        </ion-item>\r\n    </ion-list>\r\n    <section style=\"text-align:center;\">\r\n        <ion-button style=\"width:40%\" color=\"danger\" (click)=\"saveOnClick()\">保存</ion-button>\r\n    </section>\r\n    <br />\r\n    <br />\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/my-customer.com/edit/edit.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/serving/my-customer.com/edit/edit.module.ts ***!
  \*************************************************************/
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
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/serving/my-customer.com/edit/edit.page.ts");







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
            declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]],
            entryComponents: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ]
        })
    ], EditPageModule);
    return EditPageModule;
}());



/***/ }),

/***/ "./src/app/serving/my-customer.com/edit/edit.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/serving/my-customer.com/edit/edit.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvbXktY3VzdG9tZXIuY29tL2VkaXQvZWRpdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/serving/my-customer.com/edit/edit.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/serving/my-customer.com/edit/edit.page.ts ***!
  \***********************************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_serving_serving_ser_components_select_carmodel_select_carmodel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/serving/serving.ser/components/select-carmodel/select-carmodel.component */ "./src/app/serving/serving.ser/components/select-carmodel/select-carmodel.component.ts");
/* harmony import */ var app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/base/base.ser/logininfo.storage */ "./src/app/base/base.ser/logininfo.storage.ts");







var EditPage = /** @class */ (function () {
    function EditPage(_modalCtrl, _navCtrl, _toastCtrl, _http, _page, _shareData, _valid, _activeRoute, _loginInfo) {
        this._modalCtrl = _modalCtrl;
        this._navCtrl = _navCtrl;
        this._toastCtrl = _toastCtrl;
        this._http = _http;
        this._page = _page;
        this._shareData = _shareData;
        this._valid = _valid;
        this._activeRoute = _activeRoute;
        this._loginInfo = _loginInfo;
        this.mod = {
            queryUrl: '/Api/Customer/GetCustomerInfo',
            postUrl: '/Api/Customer/AddOrUpdate',
            data: {}
        };
        //定义共享数据
        this.shareData = {
            id: "",
            actioncode: 1,
            viewTitle: "",
            carserviceadvisor: {},
            vehowner: {}
        };
    }
    EditPage.prototype.ngOnInit = function () {
        var that = this;
        this.ionBackButtonDelegate.onClick = function (event) {
            that._page.navigateRoot("/serving/mycustomer/list", null, "back");
        };
    };
    //选择车型
    EditPage.prototype.presentCarmodelModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalCtrl.create({
                            component: app_serving_serving_ser_components_select_carmodel_select_carmodel_component__WEBPACK_IMPORTED_MODULE_5__["SelectCarmodelComponent"]
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
                            this.shareData.vehowner["_mcs_vehtype_value@OData.Community.Display.V1.FormattedValue"] = data["carmodel"]["model"]["mcs_name"];
                            this.shareData.vehowner["_mcs_vehtype_value"] = data["carmodel"]["model"]["mcs_carmodelid"];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this._activeRoute.queryParams.subscribe(function (params) {
            if (!_this._valid.isNull(params['id']) && !_this._valid.isNull(params['actionCode'])) {
                _this.shareData.actioncode = Number(params['actionCode']);
                _this.shareData.id = params['id'];
            }
            if (_this.shareData.actioncode === 2) {
                _this.shareData.viewTitle = "编辑客户";
                _this.pageOnBind(_this.shareData.id);
            }
            else {
                _this.shareData.viewTitle = "创建客户";
            }
        });
    };
    //编辑初始化页面
    EditPage.prototype.pageOnBind = function (id) {
        var _this = this;
        this._page.loadingShow();
        this._http.get(this.mod.queryUrl, {
            params: {
                guid: id,
            }
        }, function (res) {
            if (!_this._valid.isNull(res.Carserviceadvisor)) {
                _this.shareData.carserviceadvisor = res["Carserviceadvisor"]["Attributes"];
            }
            if (!_this._valid.isNull(res.Vehowner)) {
                _this.shareData.vehowner = res["Vehowner"]["Attributes"];
            }
            _this._page.loadingHide();
        }, function (err) {
            var that = _this;
            _this._page.alert("消息提示", "数据加载异常", function () {
                that._page.goBack();
            });
            _this._page.loadingHide();
        });
    };
    EditPage.prototype.saveOnClick = function () {
        var _this = this;
        var errMessage = "";
        if (this._valid.isNullOrEmpty(this.shareData.vehowner["mcs_fullname"])) {
            errMessage += "您尚未输入姓名<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.vehowner["mcs_vehplate"])) {
            errMessage += "您尚未输入车牌<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.vehowner["mcs_mobilephone"])) {
            errMessage += "您尚未输入手机<br>";
        }
        if (errMessage !== "") {
            this._page.presentToastError(errMessage);
            return;
        }
        var postData = {};
        postData["Vehowner"] = this.shareData.vehowner;
        postData["Carserviceadvisor"] = this.shareData.carserviceadvisor;
        postData["actionCode"] = this.shareData.actioncode;
        postData["dealerid"] = this._loginInfo.GetDealerid();
        //提交数据保存
        this._page.loadingShow();
        this._http.post(this.mod.postUrl, postData, function (res) {
            _this._page.loadingHide();
            console.log(res);
            if (res.Result == true) {
                var that_1 = _this;
                _this._page.alert("消息提示", "操作成功", function () {
                    that_1._page.goBack();
                });
            }
            else {
                _this._page.alert("消息提示", "操作失败");
            }
        }, function (err) {
            _this._page.loadingHide();
            _this._page.alert("消息提示", "操作失败");
        });
    };
    EditPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_ShareData"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Valid"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_6__["Storage_LoginInfo"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"])
    ], EditPage.prototype, "ionBackButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"])
    ], EditPage.prototype, "ionBackButtonDelegate", void 0);
    EditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/my-customer.com/edit/edit.page.html"),
            styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/serving/my-customer.com/edit/edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_ShareData"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Valid"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_6__["Storage_LoginInfo"]])
    ], EditPage);
    return EditPage;
}());



/***/ })

}]);
//# sourceMappingURL=serving-my-customer-com-edit-edit-module-es5.js.map