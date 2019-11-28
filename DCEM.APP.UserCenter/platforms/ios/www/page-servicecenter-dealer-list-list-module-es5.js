(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-servicecenter-dealer-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/servicecenter/dealer/list/list.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/servicecenter/dealer/list/list.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"返回\" defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-label>体验中心</ion-label>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div id=\"container\" class=\"container\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-chip color=\"primary\" class=\"ionchip\" (click)=\"provinceOnClick()\">\r\n            <ion-icon name=\"pin\"></ion-icon>\r\n            <ion-label class=\"ionlabel\">{{model.info.provincename}}</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-chip color=\"primary\" class=\"ionchip\" (click)=\"cityOnClick()\">\r\n            <ion-icon name=\"pin\"></ion-icon>\r\n            <ion-label class=\"ionlabel\">{{model.info.cityname}}</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-chip color=\"primary\" class=\"ionchip\">\r\n            <ion-icon name=\"pin\"></ion-icon>\r\n            <ion-select name=\"gender\" okText=\"确认\" cancelText=\"取消\" [(ngModel)]=\"model.paramets.dealertype\"\r\n              class=\"selectbtn\" (ionChange)=\"searchData()\">\r\n              <ion-select-option value=\"0\">全部类型</ion-select-option>\r\n              <ion-select-option value=\"1\">体验中心</ion-select-option>\r\n              <ion-select-option value=\"3\">服务中心</ion-select-option>\r\n            </ion-select>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div> \r\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"center\">\r\n    <ion-fab-button color=\"light\" (click)=\"showModal('modal2')\">\r\n      <ion-icon name=\"arrow-dropup\" color=\"secondary\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n\r\n  <Modal [(ngModel)]=\"this.state.modal2\" [popup]=\"true\" [animationType]=\"'slide-up'\" (onClose)=\"onClose('modal2')\">\r\n    <List [renderHeader]=\"renderHeader\" [className]=\"'popup-list'\">\r\n      <ListItem *ngFor=\"let item of model.data\">\r\n        <ion-item-group>\r\n          <ion-item lines=\"none\">\r\n            <ion-label style=\"line-height:50px\">\r\n              <h2>{{item.mcs_name}}</h2>\r\n              <ion-note>{{item.mcs_address}} </ion-note>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-chip outline color=\"primary\" style=\"width: 100%;\">\r\n              <ion-label style=\"width: 100%;text-align: center;color: black;\">\r\n                <h2>预约试驾</h2>\r\n              </ion-label>\r\n            </ion-chip>\r\n          </ion-item>\r\n        </ion-item-group>\r\n      </ListItem> \r\n    </List>\r\n  </Modal>\r\n\r\n\r\n\r\n  <!--<ion-item (click)=\"provinceOnClick()\">\r\n      <ion-label position=\"stacked\">省：</ion-label>\r\n      <p>{{model.info.provincename}}&nbsp;</p>\r\n    </ion-item>\r\n    <ion-item (click)=\"cityOnClick()\">\r\n      <ion-label position=\"stacked\">市：</ion-label>\r\n      <p>{{model.info.cityname}}&nbsp;</p>\r\n    </ion-item>\r\n    <ion-item (click)=\"districtOnClick()\">\r\n      <ion-label position=\"stacked\">区：</ion-label>\r\n      <p>{{model.info.areaname}}&nbsp;</p>\r\n    </ion-item>\r\n  </ion-list>-->\r\n</ion-content>"

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
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/fesm5/ng-zorro-antd-mobile.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list.page */ "./src/app/page/servicecenter/dealer/list/list.page.ts");








var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdMobileModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListPageRoutingModule"]
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_7__["ListPage"]]
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

module.exports = ".ionchip {\n  position: absolute;\n  z-index: 9999;\n  margin-top: 30px;\n}\n\n.ionlabel {\n  margin-left: 10px;\n  width: 50px;\n  color: black;\n}\n\n.ionlabel2 {\n  margin-left: 0px;\n  width: 50px;\n  color: black;\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n}\n\n.selectbtn {\n  margin-left: -20px;\n  color: black;\n  line-height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9zZXJ2aWNlY2VudGVyL2RlYWxlci9saXN0L0Q6XFzlt6XkvZznm67lvZVcXOW+rui9r+mhueebrlxc5Luj56CBXFznp7vliqjnq69cXOenu+WKqOerryjmraPlvI/pobnnm64pXFxEQ0VNLkFQUC5Vc2VyQ2VudGVyL3NyY1xcYXBwXFxwYWdlXFxzZXJ2aWNlY2VudGVyXFxkZWFsZXJcXGxpc3RcXGxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlL3NlcnZpY2VjZW50ZXIvZGVhbGVyL2xpc3QvbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBQTtFQUFrQixhQUFBO0VBQWEsZ0JBQUE7QUNFbkM7O0FEQUE7RUFFSSxpQkFBQTtFQUFrQixXQUFBO0VBQVcsWUFBQTtBQ0lqQzs7QURGQTtFQUVJLGdCQUFBO0VBQWlCLFdBQUE7RUFBVyxZQUFBO0FDTWhDOztBREpBO0VBRUksV0FBQTtFQUFXLFlBQUE7QUNPZjs7QURKQTtFQUVJLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSxpQkFBQTtBQ1FwQyIsImZpbGUiOiJzcmMvYXBwL3BhZ2Uvc2VydmljZWNlbnRlci9kZWFsZXIvbGlzdC9saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb25jaGlwXHJcbntcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6OTk5OTttYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5pb25sYWJlbFxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDt3aWR0aDo1MHB4O2NvbG9yOiBibGFjaztcclxufVxyXG4uaW9ubGFiZWwyXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7d2lkdGg6NTBweDtjb2xvcjogYmxhY2s7XHJcbn1cclxuLmNvbnRhaW5lclxyXG57XHJcbiAgICB3aWR0aDoxMDAlO2hlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNlbGVjdGJ0blxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7Y29sb3I6IGJsYWNrO2xpbmUtaGVpZ2h0OiAxNnB4O1xyXG59IiwiLmlvbmNoaXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5pb25sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogNTBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaW9ubGFiZWwyIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zZWxlY3RidG4ge1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59Il19 */"

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
        this.state = {
            modal1: false,
            modal2: false,
            modal3: false,
            modal4: false
        };
        this.model = {
            apiUrl: '/api/dealer/getlist',
            //国家默认中国
            countryId: "7E83801C-795B-E911-A824-B53F780FAC1C",
            level: null,
            info: {
                provincename: "省",
                cityname: "市",
            },
            paramets: {
                provinceid: "",
                cityid: "",
                dealertype: "0" //1：体验中心，3：服务中心
            },
            data: []
        };
        this.map = {};
        this.markers = [];
    }
    ListPage.prototype.onClose = function (key) {
        this.state[key] = false;
    };
    ListPage.prototype.showModal = function (key) {
        if (this.model.data.length > 0) {
            this.state[key] = true;
        }
    };
    ListPage.prototype.ngOnInit = function () {
        this.map = new AMap.Map("container", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 8
        });
        var marker = new AMap.Marker({
            position: new AMap.LngLat(116.39, 39.9),
            title: '北京'
        });
        this.markers.push(marker);
        this.map.add(marker);
    };
    //获取省组件
    ListPage.prototype.provinceModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.model.countryId = "7af9ab98-7ef8-e811-a820-844a39d18a7a";
                        //"7E83801C-795B-E911-A824-B53F780FAC1C"
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
                                    this.model.paramets.provinceid = data.id;
                                    this.model.info.provincename = data.name;
                                }
                                //重置省市区
                                if (this.model.paramets.provinceid != data.id) {
                                    //城市名称
                                    this.model.info.cityname = "--";
                                    //城市ID
                                    this.model.paramets.cityid = "";
                                    this.model.paramets.provinceid = data.id;
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
                                    'pid': this.model.paramets.provinceid,
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
                                    this.model.paramets.cityid = data.id;
                                    this.model.info.cityname = data.name;
                                    this.markLocation(this.map, this.markers, this.model.info.provincename + this.model.info.cityname);
                                    this.searchData();
                                }
                                //重置省市区
                                if (this.model.cityId != data.id) {
                                    this.model.info.city = data.id;
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
    //重新定位地图
    ListPage.prototype.markLocation = function (map, markers, address) {
        AMap.plugin('AMap.Geocoder', function () {
            var geocoder = new AMap.Geocoder();
            geocoder.getLocation(address, function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    var lng = result.geocodes[0].location.lng;
                    var lat = result.geocodes[0].location.lat;
                    var marker = new AMap.Marker({
                        position: new AMap.LngLat(lng, lat),
                        title: address
                    });
                    map.setCenter([lng, lat]);
                    map.remove(markers);
                    markers.push(marker);
                    map.add(marker);
                    map.setZoom(8);
                }
                else {
                    console.log('定位失败！');
                }
            });
        });
    };
    ListPage.prototype.searchData = function () {
        var _this = this;
        this.model.data = [];
        this._page.loadingShow();
        this._http.postForToaken(this.model.apiUrl, this.model.paramets, function (res) {
            if (res !== null) {
                var data = res.dealers;
                for (var i in data) {
                    var attr = data[i]["Attributes"];
                    var obj = {};
                    obj["id"] = data[i]["Id"];
                    obj["mcs_name"] = attr["mcs_name"];
                    obj["mcs_address"] = attr["mcs_address"];
                    obj["mcsx"] = attr["mcs_x"];
                    obj["mcsy"] = attr["mcs_y"];
                    _this.model.data.push(obj);
                }
                _this.showModal('modal2');
            }
            else {
                _this._page.alert("消息提示", "门店信息加载异常");
            }
            _this._page.loadingHide();
        }, function (err) {
            _this._page.alert("消息提示", "门店信息加载异常");
            _this._page.loadingHide();
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