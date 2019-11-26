(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-servicecenter-dealer-list-list-module"],{

/***/ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/page/servicecenter/dealer/list/list.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/_raw-loader@1.0.0@raw-loader!./src/app/page/servicecenter/dealer/list/list.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"返回\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-label>体验中心</ion-label>\n    </ion-title>\n  </ion-toolbar> \n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item (click)=\"provinceOnClick()\">\n      <ion-label position=\"stacked\">省：</ion-label>\n      <p>{{model.info.provincename}}&nbsp;</p>\n  </ion-item>\n  <ion-item (click)=\"cityOnClick()\">\n      <ion-label position=\"stacked\">市：</ion-label>\n      <p>{{model.info.cityname}}&nbsp;</p>\n  </ion-item>\n  <ion-item (click)=\"districtOnClick()\">\n      <ion-label position=\"stacked\">区：</ion-label>\n      <p>{{model.info.areaname}}&nbsp;</p>\n  </ion-item>\n  </ion-list>\n</ion-content>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.10.0@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.1.3@@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@8.1.3@@angular/router/fesm2015/router.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.10.0@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.1.3@@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/_@angular_common@8.1.3@@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/_@angular_forms@8.1.3@@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/_@ionic_angular@4.11.5@@ionic/angular/dist/fesm5.js");
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Uvc2VydmljZWNlbnRlci9kZWFsZXIvbGlzdC9saXN0LnBhZ2Uuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.10.0@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.1.3@@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/_@ionic_angular@4.11.5@@ionic/angular/dist/fesm5.js");
/* harmony import */ var _component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../component/typescript/dcem.core */ "./src/app/component/typescript/dcem.core.ts");
/* harmony import */ var _component_modal_select_sysarea_select_sysarea_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../component/modal/select-sysarea/select-sysarea.component */ "./src/app/component/modal/select-sysarea/select-sysarea.component.ts");





let ListPage = class ListPage {
    constructor(_http, _page, _modalCtrl) {
        this._http = _http;
        this._page = _page;
        this._modalCtrl = _modalCtrl;
        this.model = {
            apiUrl: '/api/Originalclue/create',
            //国家默认中国
            countryId: "7E83801C-795B-E911-A824-B53F780FAC1C",
            level: null,
            info: {
                province: "",
                provincename: "",
                city: "",
                cityname: "",
                area: "",
                areaname: "",
            }
        };
    }
    ngOnInit() {
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
            if (data != null && typeof data != "undefined") {
                if (data != null && typeof data != "undefined") {
                    console.log(data);
                    if (data.id != "undefined") {
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
            if (data != null && typeof data != "undefined") {
                if (data != null && typeof data != "undefined") {
                    console.log(data);
                    if (data.id != "undefined") {
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
            if (data != null && typeof data != "undefined") {
                if (data != null && typeof data != "undefined") {
                    console.log(data);
                    if (data.id != "undefined") {
                        this.model.info.area = data.id;
                        this.model.info.areaname = data.name;
                    }
                }
            }
        });
    }
};
ListPage.ctorParameters = () => [
    { type: _component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"] },
    { type: _component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/page/servicecenter/dealer/list/list.page.html"),
        styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/page/servicecenter/dealer/list/list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"],
        _component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=page-servicecenter-dealer-list-list-module-es2015.js.map