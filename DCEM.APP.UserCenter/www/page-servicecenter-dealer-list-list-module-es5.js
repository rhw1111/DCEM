(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-servicecenter-dealer-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/servicecenter/dealer/list/list.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/servicecenter/dealer/list/list.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"返回\" defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-label>体验中心</ion-label>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div id=\"container\" class=\"container\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-chip color=\"primary\" class=\"ionchip\" (click)=\"provinceOnClick()\">\r\n            <ion-icon name=\"pin\"></ion-icon>\r\n            <ion-label class=\"ionlabel\" >{{model.info.provincename}}</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-chip color=\"primary\" class=\"ionchip\" (click)=\"cityOnClick()\">\r\n            <ion-icon name=\"pin\"></ion-icon>\r\n            <ion-label class=\"ionlabel\" >{{model.info.cityname}}</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-chip color=\"primary\" class=\"ionchip\" (click)=\"districtOnClick()\">\r\n            <ion-icon name=\"pin\"></ion-icon>\r\n            <ion-label class=\"ionlabel\">{{model.info.areaname}}</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <!--<ion-item (click)=\"provinceOnClick()\">\r\n      <ion-label position=\"stacked\">省：</ion-label>\r\n      <p>{{model.info.provincename}}&nbsp;</p>\r\n    </ion-item>\r\n    <ion-item (click)=\"cityOnClick()\">\r\n      <ion-label position=\"stacked\">市：</ion-label>\r\n      <p>{{model.info.cityname}}&nbsp;</p>\r\n    </ion-item>\r\n    <ion-item (click)=\"districtOnClick()\">\r\n      <ion-label position=\"stacked\">区：</ion-label>\r\n      <p>{{model.info.areaname}}&nbsp;</p>\r\n    </ion-item>\r\n  </ion-list>-->\r\n</ion-content>"

/***/ }),

/***/ "./src/app/page/servicecenter/dealer/list/list-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/page/servicecenter/dealer/list/list-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function() { return ListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.page */ "./src/app/page/servicecenter/dealer/list/list.page.ts");




var routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_3__["ListPage"]
    }
];
var ListPageRoutingModule = /** @class */ (function () {
    function ListPageRoutingModule() {
    }
    ListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ListPageRoutingModule);
    return ListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/page/servicecenter/dealer/list/list.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/page/servicecenter/dealer/list/list.module.ts ***!
  \***************************************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/page/servicecenter/dealer/list/list-routing.module.ts");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/page/servicecenter/dealer/list/list.page.ts");







var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListPageRoutingModule"]
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/page/servicecenter/dealer/list/list.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/page/servicecenter/dealer/list/list.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ionchip {\n  position: absolute;\n  z-index: 9999;\n  margin-top: 20px;\n}\n\n.ionlabel {\n  margin-left: 15px;\n  width: 50px;\n  color: black;\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n}\n\n.actionsheep {\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9zZXJ2aWNlY2VudGVyL2RlYWxlci9saXN0L0Q6XFxHaXRsYWJcXFNGXFxQcm9qZWN0XFxEQ0VNXFxEQ0VNLkFQUC5Vc2VyQ2VudGVyL3NyY1xcYXBwXFxwYWdlXFxzZXJ2aWNlY2VudGVyXFxkZWFsZXJcXGxpc3RcXGxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlL3NlcnZpY2VjZW50ZXIvZGVhbGVyL2xpc3QvbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBQTtFQUFrQixhQUFBO0VBQWEsZ0JBQUE7QUNFbkM7O0FEQUE7RUFFSSxpQkFBQTtFQUFrQixXQUFBO0VBQVcsWUFBQTtBQ0lqQzs7QURGQTtFQUVJLFdBQUE7RUFBVyxZQUFBO0FDS2Y7O0FESEE7RUFFSSxXQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlL3NlcnZpY2VjZW50ZXIvZGVhbGVyL2xpc3QvbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uY2hpcFxyXG57XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Ojk5OTk7bWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uaW9ubGFiZWxcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7d2lkdGg6NTBweDtjb2xvcjogYmxhY2s7XHJcbn1cclxuLmNvbnRhaW5lclxyXG57XHJcbiAgICB3aWR0aDoxMDAlO2hlaWdodDogMTAwJTtcclxufVxyXG4uYWN0aW9uc2hlZXBcclxue1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn0iLCIuaW9uY2hpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmlvbmxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYWN0aW9uc2hlZXAge1xuICBoZWlnaHQ6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/servicecenter/dealer/list/list.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/page/servicecenter/dealer/list/list.page.ts ***!
  \*************************************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../component/typescript/dcem.core */ "./src/app/component/typescript/dcem.core.ts");
/* harmony import */ var _component_modal_select_sysarea_select_sysarea_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../component/modal/select-sysarea/select-sysarea.component */ "./src/app/component/modal/select-sysarea/select-sysarea.component.ts");






var ListPage = /** @class */ (function () {
    function ListPage(_http, _page, _modalCtrl, actionSheetController) {
        this._http = _http;
        this._page = _page;
        this._modalCtrl = _modalCtrl;
        this.actionSheetController = actionSheetController;
        this.model = {
            apiUrl: '/api/Originalclue/create',
            //国家默认中国
            countryId: "7E83801C-795B-E911-A824-B53F780FAC1C",
            level: null,
            info: {
                province: "",
                provincename: "省",
                city: "",
                cityname: "市",
                area: "",
                areaname: "区",
            }
        };
    }
    ListPage.prototype.ngOnInit = function () {
        var marker, map = new AMap.Map("container", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 6
        });
        var marker = new AMap.Marker({
            position: new AMap.LngLat(116.39, 39.9),
            title: '北京'
        });
        map.add(marker);
    };
    //获取省组件
    ListPage.prototype.provinceModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.model.countryId = "7E83801C-795B-E911-A824-B53F780FAC1C";
                        this.model.level = 2;
                        return [4 /*yield*/, this._modalCtrl.create({
                                component: _component_modal_select_sysarea_select_sysarea_component__WEBPACK_IMPORTED_MODULE_4__["SelectSysareaComponent"],
                                componentProps: {
                                    'pid': this.model.countryId,
                                    'level': this.model.level,
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data != null && typeof data != undefined) {
                            if (data != null && typeof data != undefined) {
                                if (data.id != undefined) {
                                    this.model.info.province = data.id;
                                    this.model.info.provincename = data.name;
                                }
                                //重置省市区
                                if (this.model.info.province != data.id) {
                                    //城市名称
                                    this.model.info.cityname = "--";
                                    //城市ID
                                    this.model.info.city = "";
                                    //区名称
                                    this.model.info.areaname = "--";
                                    //区ID
                                    this.model.info.area = "";
                                    this.model.province = data.id;
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //获取市组件
    ListPage.prototype.cityModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.model.level = 3;
                        return [4 /*yield*/, this._modalCtrl.create({
                                component: _component_modal_select_sysarea_select_sysarea_component__WEBPACK_IMPORTED_MODULE_4__["SelectSysareaComponent"],
                                componentProps: {
                                    'pid': this.model.info.province,
                                    'level': this.model.level,
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data != null && typeof data != undefined) {
                            if (data != null && typeof data != undefined) {
                                console.log(data);
                                if (data.id != undefined) {
                                    this.model.info.city = data.id;
                                    this.model.info.cityname = data.name;
                                }
                                //重置省市区
                                if (this.model.cityId != data.id) {
                                    //区名称
                                    this.model.info.areaname = "--";
                                    //区ID
                                    this.model.info.area = "";
                                    this.model.info.city = data.id;
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //获取区组件
    ListPage.prototype.districtModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.model.level = 4;
                        return [4 /*yield*/, this._modalCtrl.create({
                                component: _component_modal_select_sysarea_select_sysarea_component__WEBPACK_IMPORTED_MODULE_4__["SelectSysareaComponent"],
                                componentProps: {
                                    'pid': this.model.info.city,
                                    'level': this.model.level,
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data != null && typeof data != undefined) {
                            if (data != null && typeof data != undefined) {
                                console.log(data);
                                if (data.id != "undefined") {
                                    this.model.info.area = data.id;
                                    this.model.info.areaname = data.name;
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //触发省事件
    ListPage.prototype.provinceOnClick = function () {
        this.provinceModal();
    };
    //触发市事件
    ListPage.prototype.cityOnClick = function () {
        if (this.model.info.province != "") {
            this.cityModal();
        }
    };
    //触发区事件
    ListPage.prototype.districtOnClick = function () {
        if (this.model.info.city != "") {
            this.districtModal();
        }
    };
    ListPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheetbuttons, actionSheetOptions, _loop_1, actionSheetbuttons, i, actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionSheetbuttons = {};
                        actionSheetOptions = {};
                        actionSheetOptions["header"] = "省市区";
                        actionSheetOptions.buttons = [];
                        _loop_1 = function (i) {
                            actionSheetbuttons = {};
                            actionSheetbuttons.text = "这是第" + i + "个按钮";
                            actionSheetbuttons.handler = function () {
                                console.log('点击事件:' + i);
                            };
                            actionSheetOptions.buttons.push(actionSheetbuttons);
                        };
                        for (i = 0; i < 30; i++) {
                            _loop_1(i);
                        }
                        debugger;
                        return [4 /*yield*/, this.actionSheetController.create(actionSheetOptions)];
                    case 1:
                        actionSheet = _a.sent();
                        actionSheet.style.maxHeight = "50%";
                        actionSheet.style.overflow = "scroll";
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListPage.ctorParameters = function () { return [
        { type: _component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"] },
        { type: _component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }
    ]; };
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/servicecenter/dealer/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/page/servicecenter/dealer/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"],
            _component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-servicecenter-dealer-list-list-module-es5.js.map