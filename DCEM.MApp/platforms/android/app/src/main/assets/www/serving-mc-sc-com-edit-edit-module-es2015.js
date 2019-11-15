(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-mc-sc-com-edit-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/mc-sc.com/edit/edit.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/mc-sc.com/edit/edit.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/sc/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{shareData.viewTitle}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-title>\r\n                <ion-label>车主资料</ion-label>\r\n            </ion-card-title>\r\n        </ion-card-header>\r\n        <ion-list lines=\"full\">\r\n            <ion-item (click)=\"customerOnClick()\">\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"search\"></ion-icon>\r\n                    姓名\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.serviceproxy[\"customername\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    车牌\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.serviceproxy[\"carplate\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    手机\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.serviceproxy[\"customerphone\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    厅店名称\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.serviceproxy[\"dealerid_formatted\"]}}&nbsp;</p>\r\n            </ion-item>\r\n\r\n        </ion-list>\r\n        <br />\r\n    </ion-card>\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-title>\r\n                <ion-label>委托信息</ion-label>\r\n            </ion-card-title>\r\n        </ion-card-header>\r\n        <ion-list lines=\"full\">\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    送修人\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <ion-input placeholder=\"请输入送修人姓名\" type=\"text\" [(ngModel)]=\"shareData.serviceproxy['shuttlename']\" required></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    送修人手机\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <ion-input placeholder=\"请输入11位手机号\" type=\"tel\" [(ngModel)]=\"shareData.serviceproxy['shuttlephone']\" required></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    进店电量(%)\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <ion-input placeholder=\"请输入0-100之间的数字\" type=\"number\" [(ngModel)]=\"shareData.serviceproxy['inpower']\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    进店油量\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <ion-select cancelText=\"取消\" okText=\"确定\" placeholder=\"请选择进店油量\" [(ngModel)]=\"shareData.serviceproxy['oilquantity']\">\r\n                    <ion-select-option value=\"10\">1/4</ion-select-option>\r\n                    <ion-select-option value=\"20\">1/2</ion-select-option>\r\n                    <ion-select-option value=\"30\">3/4</ion-select-option>\r\n                </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    进店里程\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <ion-input placeholder=\"请输入进店里程\" type=\"number\" [(ngModel)]=\"shareData.serviceproxy['mileage']\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    到店时间\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <ion-datetime cancelText=\"取消\" doneText=\"确定\" placeholder=\"请选择到店时间\" display-format=\"YYYY-MM-DD HH:mm\" [(ngModel)]=\"shareData.serviceproxy['arrivalon']\"></ion-datetime>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    预计交车时间\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <ion-datetime cancelText=\"取消\" doneText=\"确定\" placeholder=\"请选择预计交车时间\" display-format=\"YYYY-MM-DD HH:mm\" [(ngModel)]=\"shareData.serviceproxy['expectfinishat']\"></ion-datetime>\r\n            </ion-item>\r\n            <ion-item (click)=\"repairlocationOnClick()\">\r\n                <ion-label position=\"stacked\">\r\n                    <ion-icon name=\"search\"></ion-icon>\r\n                    工位\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                </ion-label>\r\n                <p>{{shareData.serviceproxy[\"repairlocationname\"]}}&nbsp;</p>\r\n            </ion-item>\r\n        </ion-list>\r\n        <br />\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-card-title>\r\n                <ion-label>其它</ion-label>\r\n            </ion-card-title>\r\n        </ion-card-header>\r\n        <ion-list lines=\"full\">\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">客户描述</ion-label>\r\n                <ion-textarea [(ngModel)]=\"shareData.serviceproxy['customercomment']\"></ion-textarea>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">故障信息</ion-label>\r\n                <ion-textarea [(ngModel)]=\"shareData.serviceproxy['customercontent']\"></ion-textarea>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">检查结果</ion-label>\r\n                <ion-textarea [(ngModel)]=\"shareData.serviceproxy['testresult']\"></ion-textarea>\r\n            </ion-item>\r\n        </ion-list>\r\n        <br />\r\n    </ion-card>\r\n\r\n    <section style=\"text-align:center;\">\r\n        <ion-button style=\"width:40%\" color=\"danger\" (click)=\"nextOnClick()\">下一步</ion-button>\r\n    </section>\r\n    <br />\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/mc-sc.com/edit/edit.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/serving/mc-sc.com/edit/edit.module.ts ***!
  \*******************************************************/
/*! exports provided: EditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/serving/mc-sc.com/edit/edit.page.ts");







const routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]
    }
];
let EditPageModule = class EditPageModule {
};
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



/***/ }),

/***/ "./src/app/serving/mc-sc.com/edit/edit.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/serving/mc-sc.com/edit/edit.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*ion-card-header {\r\n    border-bottom: 0.1em solid rgb(200,199,204);\r\n\r\n    ion-card-title {\r\n        height: 0.3rem;\r\n\r\n        ion-icon {\r\n            font-size: 1rem;\r\n            float: left;\r\n            top: 50%;\r\n            transform: translateY(-50%);\r\n            font-size: 1rem;\r\n        }\r\n\r\n        ion-label {\r\n            float: left;\r\n            font-size: 1rem;\r\n            top: 50%;\r\n            transform: translateY(-50%);\r\n\r\n        }\r\n    }\r\n}\r\n\r\nion-list {\r\n    ion-item-divider {\r\n        ion-label {\r\n            font-size: 0.6rem;\r\n        }\r\n    }\r\n\r\n    ion-label:first-of-type {\r\n        font-size: 0.5rem;\r\n\r\n        h2 {\r\n            margin-left: 0rem;\r\n            font-size: 0.5rem;\r\n        }\r\n\r\n        p {\r\n            font-size: 0.3rem;\r\n        }\r\n    }\r\n\r\n    ion-input {\r\n        font-size: 0.3rem;\r\n    }\r\n\r\n    ion-select {\r\n        font-size: 0.3rem;\r\n    }\r\n\r\n    ion-datetime {\r\n        font-size: 0.3rem;\r\n    }\r\n\r\n    ion-textarea {\r\n        font-size: 0.3rem;\r\n    }\r\n}*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmluZy9tYy1zYy5jb20vZWRpdC9FOlxcQXBwUHJvamVjdFxcRENFTVxcRENFTS5NQXBwL3NyY1xcYXBwXFxzZXJ2aW5nXFxtYy1zYy5jb21cXGVkaXRcXGVkaXQucGFnZS5zY3NzIiwic3JjL2FwcC9zZXJ2aW5nL21jLXNjLmNvbS9lZGl0L2VkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQzJERSIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvbWMtc2MuY29tL2VkaXQvZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjFlbSBzb2xpZCByZ2IoMjAwLDE5OSwyMDQpO1xyXG5cclxuICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgICBoZWlnaHQ6IDAuM3JlbTtcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICAgIGlvbi1pdGVtLWRpdmlkZXIge1xyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tbGFiZWw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC4zcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC4zcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC4zcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1kYXRldGltZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXRleHRhcmVhIHtcclxuICAgICAgICBmb250LXNpemU6IDAuM3JlbTtcclxuICAgIH1cclxufSovXHJcbiIsIi8qaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMWVtIHNvbGlkIHJnYigyMDAsMTk5LDIwNCk7XHJcblxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICAgIGhlaWdodDogMC4zcmVtO1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgaW9uLWl0ZW0tZGl2aWRlciB7XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1sYWJlbDpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjNyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjNyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWRhdGV0aW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDAuM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tdGV4dGFyZWEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC4zcmVtO1xyXG4gICAgfVxyXG59Ki9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/serving/mc-sc.com/edit/edit.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/serving/mc-sc.com/edit/edit.page.ts ***!
  \*****************************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_serving_serving_ser_components_select_repairlocation_select_repairlocation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/serving/serving.ser/components/select-repairlocation/select-repairlocation.component */ "./src/app/serving/serving.ser/components/select-repairlocation/select-repairlocation.component.ts");
/* harmony import */ var app_serving_serving_ser_components_select_customer_select_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/serving/serving.ser/components/select-customer/select-customer.component */ "./src/app/serving/serving.ser/components/select-customer/select-customer.component.ts");







let EditPage = class EditPage {
    constructor(_modalCtrl, _navCtrl, _http, _page, _shareData, _valid, _activeRoute) {
        this._modalCtrl = _modalCtrl;
        this._navCtrl = _navCtrl;
        this._http = _http;
        this._page = _page;
        this._shareData = _shareData;
        this._valid = _valid;
        this._activeRoute = _activeRoute;
        this.mod = {
            queryUrl: '/Api/Serviceproxy/GetInfo',
            data: {},
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
    }
    ionViewWillEnter() {
        this._activeRoute.queryParams.subscribe((params) => {
            if (this._shareData.has(this.mod.shareDataKey)) {
                this.shareData = this._shareData.get(this.mod.shareDataKey);
            }
            else {
                if (!this._valid.isNull(params['id']) && !this._valid.isNull(params['actionCode'])) {
                    this.shareData.actioncode = Number(params['actionCode']);
                    this.shareData.serviceproxy["serviceproxyid"] = params['id'];
                }
                if (this.shareData.actioncode === 2) {
                    if (!this._shareData.has(this.mod.shareDataKey)) {
                        this.shareData.viewTitle = "编辑服务委托书";
                        this.pageOnBind(this.shareData.serviceproxy["serviceproxyid"]);
                    }
                }
                else {
                    this.shareData.viewTitle = "创建服务委托书";
                }
            }
        });
    }
    presentCustomerModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this._modalCtrl.create({
                component: app_serving_serving_ser_components_select_customer_select_customer_component__WEBPACK_IMPORTED_MODULE_6__["SelectCustomerComponent"]
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data != null && typeof data != "undefined") {
                if (data.vehowne != null && typeof data.vehowne != "undefined") {
                    this.shareData.serviceproxy["customerid"] = data.vehowne.vehownerid;
                    this.shareData.serviceproxy["customername"] = data.vehowne.fullname;
                    this.shareData.serviceproxy["carplate"] = data.vehowne.vehplate;
                    this.shareData.serviceproxy["customerphone"] = data.vehowne.mobilephone;
                    this.shareData.serviceproxy["dealerid"] = data.vehowne["model"]["_mcs_dealer_value"];
                    this.shareData.serviceproxy["dealerid_formatted"] = data.vehowne["model"]["_mcs_dealer_value@OData.Community.Display.V1.FormattedValue"];
                }
            }
        });
    }
    presentRepairlocationModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this._modalCtrl.create({
                component: app_serving_serving_ser_components_select_repairlocation_select_repairlocation_component__WEBPACK_IMPORTED_MODULE_5__["SelectRepairlocationComponent"]
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data != null && typeof data != "undefined") {
                if (data.repairlocation != null && typeof data.repairlocation != "undefined") {
                    this.shareData.serviceproxy["repairlocationid"] = data.repairlocation["model"]["mcs_repairlocationid"];
                    this.shareData.serviceproxy["repairlocationname"] = data.repairlocation["model"]["mcs_name"];
                }
            }
        });
    }
    ngOnInit() {
        const that = this;
        this.ionBackButtonDelegate.onClick = function (event) {
            that._shareData.delete(that.mod.shareDataKey);
            that._page.navigateRoot("/serving/sc/list", null, "back");
        };
    }
    //编辑初始化页面
    pageOnBind(id) {
        this._page.loadingShow();
        this._http.get(this.mod.queryUrl, {
            params: {
                guid: id,
            }
        }, (res) => {
            if (!this._valid.isNull(res.Serviceproxy)) {
                this.shareData.serviceproxy["serviceproxyid"] = id;
                this.shareData.serviceproxy["customerid"] = res["Serviceproxy"]["Attributes"]["_mcs_customerid_value"];
                this.shareData.serviceproxy["customername"] = res["Serviceproxy"]["Attributes"]["mcs_customername"];
                this.shareData.serviceproxy["carplate"] = res["Serviceproxy"]["Attributes"]["mcs_carplate"];
                this.shareData.serviceproxy["customerphone"] = res["Serviceproxy"]["Attributes"]["mcs_customerphone"];
                this.shareData.serviceproxy["dealerid"] = res["Serviceproxy"]["Attributes"]["_mcs_dealerid_value"];
                this.shareData.serviceproxy["dealerid_formatted"] = res["Serviceproxy"]["Attributes"]["_mcs_dealerid_value@OData.Community.Display.V1.FormattedValue"];
                this.shareData.serviceproxy["shuttlename"] = res["Serviceproxy"]["Attributes"]["mcs_shuttlename"];
                this.shareData.serviceproxy["shuttlephone"] = res["Serviceproxy"]["Attributes"]["mcs_shuttlephone"];
                this.shareData.serviceproxy["inpower"] = res["Serviceproxy"]["Attributes"]["mcs_inpower"];
                this.shareData.serviceproxy["mileage"] = res["Serviceproxy"]["Attributes"]["mcs_mileage"];
                this.shareData.serviceproxy["oilquantity"] = String(res["Serviceproxy"]["Attributes"]["mcs_oilquantity"]);
                this.shareData.serviceproxy["repairlocationid"] = res["Serviceproxy"]["Attributes"]["_mcs_repairlocationid_value"];
                this.shareData.serviceproxy["repairlocationname"] = res["Serviceproxy"]["Attributes"]["_mcs_repairlocationid_value@OData.Community.Display.V1.FormattedValue"];
                this.shareData.serviceproxy["arrivalon"] = res["Serviceproxy"]["Attributes"]["mcs_arrivalon"];
                this.shareData.serviceproxy["expectfinishat"] = res["Serviceproxy"]["Attributes"]["mcs_expectfinishat"];
                this.shareData.serviceproxy["customercomment"] = res["Serviceproxy"]["Attributes"]["mcs_customercomment"];
                this.shareData.serviceproxy["customercontent"] = res["Serviceproxy"]["Attributes"]["mcs_customercontent"];
                this.shareData.serviceproxy["testresult"] = res["Serviceproxy"]["Attributes"]["mcs_testresult"];
            }
            if (!this._valid.isNull(res.ServiceorderrepairitemList)) {
                for (var key in res.ServiceorderrepairitemList) {
                    var obj = {};
                    var mapkey = Math.random(); //生成唯一编码
                    obj["name"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_name"];
                    obj["code"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairitemid@OData.Community.Display.V1.FormattedValue"];
                    obj["repairitemid"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairitemid"];
                    obj["repairitemtypeid"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairitemtypeid"];
                    obj["repairitemtypedetailid"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairitemtypedetailid"];
                    obj["repairitemtypeid_Formatted"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairitemtypeid@OData.Community.Display.V1.FormattedValue"];
                    obj["repairitemtypedetailid_Formatted"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairitemtypedetailid@OData.Community.Display.V1.FormattedValue"];
                    obj["workinghour"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_workinghour"];
                    obj["price"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_price"];
                    obj["discount"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_discount"];
                    obj["repairamount"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairamount"];
                    this.shareData.serviceorderrepairitemMap[mapkey] = obj;
                }
            }
            if (!this._valid.isNull(res.ServiceorderpartList)) {
                for (var key in res.ServiceorderpartList) {
                    var obj = {};
                    var mapkey = Math.random(); //生成唯一编码
                    obj["name"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_partsname"];
                    obj["code"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_partsid@OData.Community.Display.V1.FormattedValue"];
                    obj["partsid"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_partsid"];
                    obj["repairitemtypeid"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_repairitemtypeid"];
                    obj["repairitemtypedetailid"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_repairitemtypedetailid"];
                    obj["repairitemtypeid_Formatted"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_repairitemtypeid@OData.Community.Display.V1.FormattedValue"];
                    obj["repairitemtypedetailid_Formatted"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_repairitemtypedetailid@OData.Community.Display.V1.FormattedValue"];
                    obj["quantity"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_quantity"];
                    obj["price"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_price"];
                    obj["discount"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_discount"];
                    obj["amount"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_amount"];
                    this.shareData.serviceorderpartMap[mapkey] = obj;
                }
            }
            this._page.loadingHide();
        }, (err) => {
            const that = this;
            this._page.alert("消息提示", "数据加载异常", function () {
                that._page.goBack();
            });
            this._page.loadingHide();
        });
    }
    customerOnClick() {
        this.presentCustomerModal();
    }
    repairlocationOnClick() {
        this.presentRepairlocationModal();
    }
    nextOnClick() {
        var errMessage = "";
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["customerid"])) {
            errMessage += "您尚未选择客户<br>";
        }
        if (this._valid.isNull(this.shareData.serviceproxy["dealerid"])) {
            errMessage += "您选择的客户未包含厅店信息<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["shuttlename"])) {
            errMessage += "您尚未输入送修人<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["shuttlephone"])) {
            errMessage += "您尚未输入送修人手机<br>";
        }
        else if (!this._valid.isPhone(this.shareData.serviceproxy["shuttlephone"])) {
            errMessage += "送修人手机不是正确的手机号码<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["inpower"])) {
            errMessage += "您尚未输入进店电量<br>";
        }
        else if (!this._valid.isNumber(this.shareData.serviceproxy["inpower"])) {
            errMessage += "进店电量不是合法的数字<br>";
        }
        else if (this.shareData.serviceproxy["inpower"] < 0 || this.shareData.serviceproxy["inpower"] > 100) {
            errMessage += "进店电量请输入0-100之间的数字<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["oilquantity"])) {
            errMessage += "您尚未选择进店油量<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["mileage"])) {
            errMessage += "您尚未输入进店里程<br>";
        }
        else if (!this._valid.isNumber(this.shareData.serviceproxy["mileage"])) {
            errMessage += "进店里程不是合法的数字<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["arrivalon"])) {
            errMessage += "您尚未选择到店时间<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["expectfinishat"])) {
            errMessage += "您尚未选择预计交车时间<br>";
        }
        if (this._valid.isNullOrEmpty(this.shareData.serviceproxy["repairlocationid"])) {
            errMessage += "您尚未选择工位<br>";
        }
        if (errMessage !== "") {
            this._page.presentToastError(errMessage);
            return;
        }
        console.log(this.shareData);
        this._shareData.set(this.mod.shareDataKey, this.shareData);
        this._page.goto("/serving/sc/edit2");
    }
};
EditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_ShareData"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Valid"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
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
        template: __webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/mc-sc.com/edit/edit.page.html"),
        styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/serving/mc-sc.com/edit/edit.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Page"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_ShareData"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_3__["DCore_Valid"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], EditPage);



/***/ })

}]);
//# sourceMappingURL=serving-mc-sc-com-edit-edit-module-es2015.js.map