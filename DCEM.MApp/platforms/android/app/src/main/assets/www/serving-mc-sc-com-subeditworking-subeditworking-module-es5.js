(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-mc-sc-com-subeditworking-subeditworking-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/mc-sc.com/subeditworking/subeditworking.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/mc-sc.com/subeditworking/subeditworking.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/sc/edit2\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>维修项目</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-title>\r\n                <ion-label>维修项目</ion-label>\r\n            </ion-card-title>\r\n        </ion-card-header>\r\n        <ion-list lines=\"full\">\r\n\r\n            <ion-item (click)=\"presentWorkingModal()\">\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon slot=\"end\" name=\"search\"></ion-icon>\r\n                    代码\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{mod.data[\"code\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item (click)=\"presentWorkingModal()\">\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    名称\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{mod.data[\"name\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    维修类别\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{mod.data[\"repairitemtypeid_Formatted\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    维修类型\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{mod.data[\"repairitemtypedetailid_Formatted\"]}}&nbsp;</p>\r\n\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    工时\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <ion-input type=\"number\" [(ngModel)]=\"mod.data['workinghour']\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    单价\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <ion-input type=\"number\" [(ngModel)]=\"mod.data['price']\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    折扣\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <ion-input type=\"number\" [(ngModel)]=\"mod.data['discount']\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    维修费用\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{mod.data[\"repairamount\"]}}&nbsp;</p>\r\n            </ion-item>\r\n\r\n        </ion-list>\r\n        <br />\r\n    </ion-card>\r\n    <section style=\"text-align:center;\">\r\n        <ion-button style=\"width:40%\" color=\"danger\" [routerLink]=\"['/serving/sc/edit2']\">取消</ion-button>\r\n        <ion-button style=\"width:40%\" color=\"success\" (click)=\"saveOnClick()\">确定</ion-button>\r\n    </section>\r\n    <br />\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/mc-sc.com/subeditworking/subeditworking.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/serving/mc-sc.com/subeditworking/subeditworking.module.ts ***!
  \***************************************************************************/
/*! exports provided: SubeditworkingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubeditworkingPageModule", function() { return SubeditworkingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _subeditworking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subeditworking.page */ "./src/app/serving/mc-sc.com/subeditworking/subeditworking.page.ts");







var routes = [
    {
        path: '',
        component: _subeditworking_page__WEBPACK_IMPORTED_MODULE_6__["SubeditworkingPage"]
    }
];
var SubeditworkingPageModule = /** @class */ (function () {
    function SubeditworkingPageModule() {
    }
    SubeditworkingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_subeditworking_page__WEBPACK_IMPORTED_MODULE_6__["SubeditworkingPage"]]
        })
    ], SubeditworkingPageModule);
    return SubeditworkingPageModule;
}());



/***/ }),

/***/ "./src/app/serving/mc-sc.com/subeditworking/subeditworking.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/serving/mc-sc.com/subeditworking/subeditworking.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*ion-card-header {\r\n    border-bottom: 0.1em solid rgb(200,199,204);\r\n\r\n    ion-card-title {\r\n        height: 0.3rem;\r\n\r\n        ion-label {\r\n            float: left;\r\n            font-size: 1rem;\r\n            top: 50%;\r\n            transform: translateY(-50%);\r\n        }\r\n    }\r\n\r\n    ion-icon {\r\n        width: 1rem;\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n    }\r\n}\r\n\r\nion-list {\r\n    ion-item-divider {\r\n        ion-label {\r\n            font-size: 0.6rem;\r\n        }\r\n    }\r\n\r\n    ion-label:first-of-type {\r\n        font-size: 0.5rem;\r\n\r\n        h2 {\r\n            margin-left: 0rem;\r\n            font-size: 0.5rem;\r\n        }\r\n\r\n        p {\r\n            font-size: 0.3rem;\r\n        }\r\n    }\r\n\r\n    ion-input {\r\n        font-size: 0.3rem;\r\n    }\r\n\r\n    ion-select {\r\n        font-size: 0.3rem;\r\n    }\r\n\r\n    ion-datetime {\r\n        font-size: 0.3rem;\r\n    }\r\n\r\n    ion-textarea {\r\n        font-size: 0.3rem;\r\n    }\r\n\r\n}*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmluZy9tYy1zYy5jb20vc3ViZWRpdHdvcmtpbmcvRTpcXEFwcFByb2plY3RcXERDRU1cXERDRU0uTUFwcC9zcmNcXGFwcFxcc2VydmluZ1xcbWMtc2MuY29tXFxzdWJlZGl0d29ya2luZ1xcc3ViZWRpdHdvcmtpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9zZXJ2aW5nL21jLXNjLmNvbS9zdWJlZGl0d29ya2luZy9zdWJlZGl0d29ya2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQ3lERSIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvbWMtc2MuY29tL3N1YmVkaXR3b3JraW5nL3N1YmVkaXR3b3JraW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMWVtIHNvbGlkIHJnYigyMDAsMTk5LDIwNCk7XHJcblxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICAgIGhlaWdodDogMC4zcmVtO1xyXG5cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgICBpb24taXRlbS1kaXZpZGVyIHtcclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxhYmVsOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuM3JlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDAuM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tc2VsZWN0IHtcclxuICAgICAgICBmb250LXNpemU6IDAuM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tZGF0ZXRpbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC4zcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi10ZXh0YXJlYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjNyZW07XHJcbiAgICB9XHJcblxyXG59Ki9cclxuIiwiLyppb24tY2FyZC1oZWFkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4xZW0gc29saWQgcmdiKDIwMCwxOTksMjA0KTtcclxuXHJcbiAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAwLjNyZW07XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICB3aWR0aDogMXJlbTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICAgIGlvbi1pdGVtLWRpdmlkZXIge1xyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tbGFiZWw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC4zcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC4zcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC4zcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1kYXRldGltZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXRleHRhcmVhIHtcclxuICAgICAgICBmb250LXNpemU6IDAuM3JlbTtcclxuICAgIH1cclxuXHJcbn0qL1xuIl19 */"

/***/ }),

/***/ "./src/app/serving/mc-sc.com/subeditworking/subeditworking.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/serving/mc-sc.com/subeditworking/subeditworking.page.ts ***!
  \*************************************************************************/
/*! exports provided: SubeditworkingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubeditworkingPage", function() { return SubeditworkingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var app_serving_serving_ser_components_select_repairitem_select_repairitem_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/serving/serving.ser/components/select-repairitem/select-repairitem.component */ "./src/app/serving/serving.ser/components/select-repairitem/select-repairitem.component.ts");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");





var SubeditworkingPage = /** @class */ (function () {
    function SubeditworkingPage(_http, _page, _shareData, _valid, _modalCtrl) {
        this._http = _http;
        this._page = _page;
        this._shareData = _shareData;
        this._valid = _valid;
        this._modalCtrl = _modalCtrl;
        this.mod = {
            data: {},
            searchData: {},
            shareDataKey: "scEditData"
        };
        //定义共享数据
        this.shareData = {
            serviceproxy: {},
            serviceorderrepairitemMap: {},
            serviceorderpartMap: {},
        };
    }
    SubeditworkingPage.prototype.ngOnInit = function () {
    };
    SubeditworkingPage.prototype.ionViewWillEnter = function () {
        if (this._shareData.has(this.mod.shareDataKey)) {
            this.shareData = this._shareData.get(this.mod.shareDataKey);
        }
    };
    //保存
    SubeditworkingPage.prototype.saveOnClick = function () {
        this._shareData.set(this.mod.shareDataKey, this.shareData);
        this._page.goto("/serving/sc/edit2");
    };
    //选择维修配件
    SubeditworkingPage.prototype.presentWorkingModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data, obj, mapkey;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modalCtrl.create({
                            component: app_serving_serving_ser_components_select_repairitem_select_repairitem_component__WEBPACK_IMPORTED_MODULE_3__["SelectRepairitemComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (!this._valid.isNull(data) && !this._valid.isNull(data["repairitem"])) {
                            console.log(data);
                            obj = {};
                            mapkey = Math.random();
                            obj["name"] = data["repairitem"]["model"]["mcs_repairitemcode"];
                            obj["code"] = data["repairitem"]["model"]["mcs_name"];
                            obj["repairitemid"] = data["repairitem"]["model"]["mcs_repairiteminfoid"];
                            obj["repairitemtypeid"] = data["repairitem"]["model"]["ext_repairitemtypeid"];
                            obj["repairitemtypedetailid"] = data["repairitem"]["model"]["ext_repairitemtypedetailid"];
                            obj["repairitemtypeid_Formatted"] = data["repairitem"]["model"]["ext_repairitemtypeid_formatted"];
                            obj["repairitemtypedetailid_Formatted"] = data["repairitem"]["model"]["ext_repairitemtypedetailid_formatted"];
                            obj["workinghour"] = data["repairitem"]["model"]["mcs_workinghour"];
                            obj["price"] = data["repairitem"]["model"]["ext_price"];
                            obj["discount"] = 1;
                            obj["repairamount"] = obj["workinghour"] * obj["price"];
                            this.mod.data = obj;
                            this.shareData.serviceorderrepairitemMap[mapkey] = obj;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SubeditworkingPage.ctorParameters = function () { return [
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Page"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_ShareData"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Valid"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    SubeditworkingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subeditworking',
            template: __webpack_require__(/*! raw-loader!./subeditworking.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/mc-sc.com/subeditworking/subeditworking.page.html"),
            styles: [__webpack_require__(/*! ./subeditworking.page.scss */ "./src/app/serving/mc-sc.com/subeditworking/subeditworking.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Page"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_ShareData"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Valid"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], SubeditworkingPage);
    return SubeditworkingPage;
}());



/***/ })

}]);
//# sourceMappingURL=serving-mc-sc-com-subeditworking-subeditworking-module-es5.js.map