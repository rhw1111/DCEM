(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-reception-interrogation-com-edit-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/reception-interrogation.com/edit/edit.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/reception-interrogation.com/edit/edit.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "+<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/ri/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>创建问诊单</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list lines=\"full\">\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                车主资料\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item (click)=\"customerOnClick()\">\r\n            <ion-label position=\"stacked\">姓名<ion-text color=\"danger\">*</ion-text></ion-label>\r\n            <p>{{shareData.serviceproxy[\"customername\"]}}&nbsp;</p>\r\n        </ion-item>\r\n        <ion-item (click)=\"customerOnClick()\">\r\n            <ion-label position=\"stacked\">车牌<ion-text color=\"danger\">*</ion-text></ion-label>\r\n            <p>{{shareData.serviceproxy[\"carplate\"]}}&nbsp;</p>\r\n        </ion-item>\r\n        <ion-item (click)=\"customerOnClick()\">\r\n            <ion-label position=\"stacked\">手机<ion-text color=\"danger\">*</ion-text></ion-label>\r\n            <p>{{shareData.serviceproxy[\"customerphone\"]}}&nbsp;</p>\r\n        </ion-item>\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                委托信息\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">送修人</ion-label>\r\n            <ion-input [(ngModel)]=\"shareData.serviceproxy['shuttlename']\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">送修人手机</ion-label>\r\n            <ion-input type=\"tel\" [(ngModel)]=\"shareData.serviceproxy['shuttlephone']\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">进店电量</ion-label>\r\n            <ion-input type=\"number\" [(ngModel)]=\"shareData.serviceproxy['inpower']\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">进店油量</ion-label>\r\n            <ion-select [(ngModel)]=\"shareData.serviceproxy['oilquantity']\">\r\n                <ion-select-option value=\"10\">1/4</ion-select-option>\r\n                <ion-select-option value=\"20\">1/2</ion-select-option>\r\n                <ion-select-option value=\"30\">3/4</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">进店里程</ion-label>\r\n            <ion-input type=\"number\" [(ngModel)]=\"shareData.serviceproxy['mileage']\" type=\"text\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">到店时间</ion-label>\r\n            <ion-datetime display-format=\"YYYY-MM-DD HH:mm\" [(ngModel)]=\"shareData.serviceproxy['arrivalon']\"></ion-datetime>\r\n        </ion-item>\r\n        <ion-item-divider color=\"primary\">\r\n            <ion-label>\r\n                其它\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">客户描述</ion-label>\r\n            <ion-textarea [(ngModel)]=\"shareData.serviceproxy['customercomment']\"></ion-textarea>\r\n        </ion-item>\r\n    </ion-list>\r\n    <section style=\"text-align:center;\">\r\n        <ion-button style=\"width:40%\" color=\"danger\" (click)=\"nextOnClick()\">下一步</ion-button>\r\n    </section>\r\n    <br />\r\n    <br />\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/reception-interrogation.com/edit/edit.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/serving/reception-interrogation.com/edit/edit.module.ts ***!
  \*************************************************************************/
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
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/serving/reception-interrogation.com/edit/edit.page.ts");







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

/***/ "./src/app/serving/reception-interrogation.com/edit/edit.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/serving/reception-interrogation.com/edit/edit.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvcmVjZXB0aW9uLWludGVycm9nYXRpb24uY29tL2VkaXQvZWRpdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/serving/reception-interrogation.com/edit/edit.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/serving/reception-interrogation.com/edit/edit.page.ts ***!
  \***********************************************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var app_serving_serving_ser_components_select_customer_select_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/serving/serving.ser/components/select-customer/select-customer.component */ "./src/app/serving/serving.ser/components/select-customer/select-customer.component.ts");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");





let EditPage = class EditPage {
    constructor(_modalCtrl, _navCtrl, _http, _page, _shareData, _valid) {
        this._modalCtrl = _modalCtrl;
        this._navCtrl = _navCtrl;
        this._http = _http;
        this._page = _page;
        this._shareData = _shareData;
        this._valid = _valid;
        this.mod = {
            apiUrl: '/Api/Customer/GetCustomerInfo',
            data: {},
            shareDataKey: "riEditData"
        };
        //定义共享数据
        this.shareData = {
            serviceproxy: {},
            vehcheckresultMap: {},
        };
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this._modalCtrl.create({
                component: app_serving_serving_ser_components_select_customer_select_customer_component__WEBPACK_IMPORTED_MODULE_3__["SelectCustomerComponent"]
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data != null && typeof data != "undefined") {
                if (data.vehowne != null && typeof data.vehowne != "undefined") {
                    console.log(data.vehowne);
                    this.shareData.serviceproxy["customerid"] = data.vehowne.vehownerid;
                    this.shareData.serviceproxy["customername"] = data.vehowne.fullname;
                    this.shareData.serviceproxy["carplate"] = data.vehowne.vehplate;
                    this.shareData.serviceproxy["customerphone"] = data.vehowne.mobilephone;
                }
            }
        });
    }
    ngOnInit() {
        var getShareData = this._shareData.get(this.mod.shareDataKey);
        if (getShareData != null) {
            this.shareData = getShareData;
        }
    }
    customerOnClick() {
        this.presentModal();
    }
    nextOnClick() {
        if (this._valid.isNull(this.shareData.serviceproxy["customerid"])) {
            this._page.alert("消息提示", "请先选择客户");
            return;
        }
        this._shareData.set(this.mod.shareDataKey, this.shareData);
        this._page.goto("/serving/ri/edit2");
    }
};
EditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Page"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_ShareData"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Valid"] }
];
EditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/reception-interrogation.com/edit/edit.page.html"),
        styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/serving/reception-interrogation.com/edit/edit.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Page"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_ShareData"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_4__["DCore_Valid"]])
], EditPage);



/***/ })

}]);
//# sourceMappingURL=serving-reception-interrogation-com-edit-edit-module-es2015.js.map