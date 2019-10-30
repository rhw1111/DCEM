(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-reception-interrogation-com-edit2-edit2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/reception-interrogation.com/edit2/edit2.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/reception-interrogation.com/edit2/edit2.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/ri/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>环检项</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list lines=\"full\">\r\n        <div *ngFor=\"let key of objectKeys(shareData.vehcheckresultMap)\">\r\n            <ion-item-divider color=\"primary\">\r\n                <ion-label>\r\n                    {{shareData.vehcheckresultMap[key].text}}\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <ion-item-sliding *ngFor=\"let item of shareData.vehcheckresultMap[key].data;let key=index\">\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>{{item.name}}</h2>\r\n                    </ion-label>\r\n                    <ion-toggle slot=\"end\" color=\"success\" checked [(ngModel)]=\"item['checked']\"></ion-toggle>\r\n                </ion-item>\r\n            </ion-item-sliding>\r\n        </div>\r\n    </ion-list>\r\n    <section style=\"text-align:center;\">\r\n        <ion-button style=\"width:40%\" color=\"danger\" [routerLink]=\"['/serving/ri/edit']\">上一步</ion-button>\r\n        <ion-button style=\"width:40%\" color=\"success\"  (click)=\"saveOnClick()\">保存</ion-button>\r\n    </section>\r\n    <br />\r\n    <br />\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/reception-interrogation.com/edit2/edit2.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/serving/reception-interrogation.com/edit2/edit2.module.ts ***!
  \***************************************************************************/
/*! exports provided: Edit2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit2PageModule", function() { return Edit2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit2.page */ "./src/app/serving/reception-interrogation.com/edit2/edit2.page.ts");







const routes = [
    {
        path: '',
        component: _edit2_page__WEBPACK_IMPORTED_MODULE_6__["Edit2Page"]
    }
];
let Edit2PageModule = class Edit2PageModule {
};
Edit2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_edit2_page__WEBPACK_IMPORTED_MODULE_6__["Edit2Page"]]
    })
], Edit2PageModule);



/***/ }),

/***/ "./src/app/serving/reception-interrogation.com/edit2/edit2.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/serving/reception-interrogation.com/edit2/edit2.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvcmVjZXB0aW9uLWludGVycm9nYXRpb24uY29tL2VkaXQyL2VkaXQyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/serving/reception-interrogation.com/edit2/edit2.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/serving/reception-interrogation.com/edit2/edit2.page.ts ***!
  \*************************************************************************/
/*! exports provided: Edit2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edit2Page", function() { return Edit2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");



let Edit2Page = class Edit2Page {
    constructor(_http, _page, _shareData) {
        this._http = _http;
        this._page = _page;
        this._shareData = _shareData;
        //定义数据模型
        this.mod = {
            apiUrl: '/Api/Serviceproxy/GetVehcheckresultList',
            postApiUrl: '/Api/Serviceproxy/AddOrUpdate',
            data: {},
            postData: {},
            shareDataKey: "riEditData"
        };
        //定义共享数据
        this.shareData = {
            serviceproxy: {},
            vehcheckresultMap: {},
        };
        this.objectKeys = Object.keys;
    }
    ngOnInit() {
        var getShareData = this._shareData.get(this.mod.shareDataKey);
        if (getShareData != null) {
            this.shareData = getShareData;
            if (this.objectKeys(this.shareData.vehcheckresultMap).length === 0) {
                this.listOnBind();
            }
        }
        else {
            this.listOnBind();
        }
    }
    listOnBind() {
        this._page.loadingShow();
        this.shareData.vehcheckresultMap = {};
        this._http.get(this.mod.apiUrl, {
            params: {}
        }, (res) => {
            if (res.Results !== null) {
                for (var key in res.Results) {
                    var groupKey = res.Results[key]["Attributes"]["mcs_checktype"];
                    if (typeof this.shareData.vehcheckresultMap[groupKey] === "undefined") {
                        this.shareData.vehcheckresultMap[groupKey] = {};
                        this.shareData.vehcheckresultMap[groupKey]["text"] = res.Results[key]["Attributes"]["mcs_checktype@OData.Community.Display.V1.FormattedValue"];
                        this.shareData.vehcheckresultMap[groupKey].data = [];
                    }
                    var obj = {};
                    obj["Id"] = res.Results[key]["Id"];
                    obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
                    obj["checkreult"] = res.Results[key]["Attributes"]["mcs_checkreult"];
                    obj["checked"] = true;
                    this.shareData.vehcheckresultMap[groupKey].data.push(obj);
                }
                this._page.loadingHide();
            }
            else {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
    saveOnClick() {
        //提交数据
        console.log(this.shareData);
        //var postData = {};
        //postData = this.shareData.serviceproxy;
        this.mod.postData = this.shareData.serviceproxy;
        console.log(this.mod.postData);
        this._http.post(this.mod.postApiUrl, this.mod.postData, (res) => {
        }, (err) => {
            this._page.loadingHide();
        });
        //this._shareData.set(this.mod.shareDataKey, this.shareData);
        //this._page.goto("/serving/ri/success");
    }
};
Edit2Page.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_ShareData"] }
];
Edit2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit2',
        template: __webpack_require__(/*! raw-loader!./edit2.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/reception-interrogation.com/edit2/edit2.page.html"),
        styles: [__webpack_require__(/*! ./edit2.page.scss */ "./src/app/serving/reception-interrogation.com/edit2/edit2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_ShareData"]])
], Edit2Page);



/***/ })

}]);
//# sourceMappingURL=serving-reception-interrogation-com-edit2-edit2-module-es2015.js.map