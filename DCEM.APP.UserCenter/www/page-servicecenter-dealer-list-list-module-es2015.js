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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.page */ "./src/app/page/servicecenter/dealer/list/list.page.ts");




const routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_3__["ListPage"]
    }
];
let ListPageRoutingModule = class ListPageRoutingModule {
};
ListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/page/servicecenter/dealer/list/list-routing.module.ts");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/page/servicecenter/dealer/list/list.page.ts");







let ListPageModule = class ListPageModule {
};
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



/***/ }),

/***/ "./src/app/page/servicecenter/dealer/list/list.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/page/servicecenter/dealer/list/list.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ionchip {\n  position: absolute;\n  z-index: 9999;\n  margin-top: 20px;\n}\n\n.ionlabel {\n  margin-left: 15px;\n  width: 50px;\n  color: black;\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n}\n\n.actionsheep {\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9zZXJ2aWNlY2VudGVyL2RlYWxlci9saXN0L0U6XFxQcm9qZWN0c1xcRENFTVxcRENFTS5BUFAuVXNlckNlbnRlci9zcmNcXGFwcFxccGFnZVxcc2VydmljZWNlbnRlclxcZGVhbGVyXFxsaXN0XFxsaXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS9zZXJ2aWNlY2VudGVyL2RlYWxlci9saXN0L2xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQUE7RUFBa0IsYUFBQTtFQUFhLGdCQUFBO0FDRW5DOztBREFBO0VBRUksaUJBQUE7RUFBa0IsV0FBQTtFQUFXLFlBQUE7QUNJakM7O0FERkE7RUFFSSxXQUFBO0VBQVcsWUFBQTtBQ0tmOztBREhBO0VBRUksV0FBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9zZXJ2aWNlY2VudGVyL2RlYWxlci9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbmNoaXBcclxue1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDo5OTk5O21hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmlvbmxhYmVsXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O3dpZHRoOjUwcHg7Y29sb3I6IGJsYWNrO1xyXG59XHJcbi5jb250YWluZXJcclxue1xyXG4gICAgd2lkdGg6MTAwJTtoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmFjdGlvbnNoZWVwXHJcbntcclxuICAgIGhlaWdodDogNTAlO1xyXG59IiwiLmlvbmNoaXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5pb25sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB3aWR0aDogNTBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmFjdGlvbnNoZWVwIHtcbiAgaGVpZ2h0OiA1MCU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../component/typescript/dcem.core */ "./src/app/component/typescript/dcem.core.ts");
/* harmony import */ var _component_modal_select_sysarea_select_sysarea_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../component/modal/select-sysarea/select-sysarea.component */ "./src/app/component/modal/select-sysarea/select-sysarea.component.ts");






let ListPage = class ListPage {
    constructor(_http, _page, _modalCtrl, actionSheetController) {
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
    ngOnInit() {
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
    }
    //获取省组件
    provinceModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.model.countryId = "7E83801C-795B-E911-A824-B53F780FAC1C";
            this.model.level = 2;
            const modal = yield this._modalCtrl.create({
                component: _component_modal_select_sysarea_select_sysarea_component__WEBPACK_IMPORTED_MODULE_4__["SelectSysareaComponent"],
                componentProps: {
                    'pid': this.model.countryId,
                    'level': this.model.level,
                }
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
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
        });
    }
    //获取市组件
    cityModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.model.level = 3;
            const modal = yield this._modalCtrl.create({
                component: _component_modal_select_sysarea_select_sysarea_component__WEBPACK_IMPORTED_MODULE_4__["SelectSysareaComponent"],
                componentProps: {
                    'pid': this.model.info.province,
                    'level': this.model.level,
                }
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
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
        });
    }
    //获取区组件
    districtModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.model.level = 4;
            const modal = yield this._modalCtrl.create({
                component: _component_modal_select_sysarea_select_sysarea_component__WEBPACK_IMPORTED_MODULE_4__["SelectSysareaComponent"],
                componentProps: {
                    'pid': this.model.info.city,
                    'level': this.model.level,
                }
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data != null && typeof data != undefined) {
                if (data != null && typeof data != undefined) {
                    console.log(data);
                    if (data.id != "undefined") {
                        this.model.info.area = data.id;
                        this.model.info.areaname = data.name;
                    }
                }
            }
        });
    }
    //触发省事件
    provinceOnClick() {
        this.provinceModal();
    }
    //触发市事件
    cityOnClick() {
        if (this.model.info.province != "") {
            this.cityModal();
        }
    }
    //触发区事件
    districtOnClick() {
        if (this.model.info.city != "") {
            this.districtModal();
        }
    }
    presentActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var actionSheetbuttons = {};
            var actionSheetOptions = {};
            actionSheetOptions["header"] = "省市区";
            actionSheetOptions.buttons = [];
            for (let i = 0; i < 30; i++) {
                var actionSheetbuttons = {};
                actionSheetbuttons.text = "这是第" + i + "个按钮";
                actionSheetbuttons.handler = () => {
                    console.log('点击事件:' + i);
                };
                actionSheetOptions.buttons.push(actionSheetbuttons);
            }
            debugger;
            const actionSheet = yield this.actionSheetController.create(actionSheetOptions);
            actionSheet.style.maxHeight = "50%";
            actionSheet.style.overflow = "scroll";
            yield actionSheet.present();
        });
    }
};
ListPage.ctorParameters = () => [
    { type: _component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"] },
    { type: _component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }
];
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



/***/ })

}]);
//# sourceMappingURL=page-servicecenter-dealer-list-list-module-es2015.js.map