(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-mcs-contactrecord-edit-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-contactrecord/edit/edit.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/mcs-contactrecord/edit/edit.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n          <ion-back-button text=\"返回\" defaultHref=\"/saleing/onlylead/detail\" ></ion-back-button>\r\n     </ion-buttons>\r\n    <ion-title>创建或编辑logcall</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list lines=\"full\">    \r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                回访时间\r\n                <ion-text color=\"danger\">*</ion-text>\r\n            </ion-label>\r\n            <ion-datetime placeholder=\"请选择到店时间\" display-format=\"YYYY-MM-DD HH:mm\"  [(ngModel)]=\"model.postData.mcs_visittime\" required></ion-datetime>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                回访内容\r\n                <ion-text color=\"danger\">*</ion-text>\r\n            </ion-label>\r\n            <ion-textarea placeholder=\"请输入回访内容\" [(ngModel)]=\"model.postData.mcs_content\" required></ion-textarea>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">\r\n                回访结果\r\n                <ion-text color=\"danger\">*</ion-text>\r\n            </ion-label>\r\n            <ion-textarea placeholder=\"请输入回访结果\" [(ngModel)]=\"model.postData.mcs_results\" required></ion-textarea>\r\n        </ion-item>\r\n        \r\n    </ion-list>\r\n    <section style=\"text-align:center;\">\r\n      <ion-button  expand=\"block\" type=\"button\"  (click)=\"saveLogcall()\">保存</ion-button>\r\n    </section>\r\n    <br />\r\n    <br />\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/saleing/mcs-contactrecord/edit/edit.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/saleing/mcs-contactrecord/edit/edit.module.ts ***!
  \***************************************************************/
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
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/saleing/mcs-contactrecord/edit/edit.page.ts");







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
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
    })
], EditPageModule);



/***/ }),

/***/ "./src/app/saleing/mcs-contactrecord/edit/edit.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/saleing/mcs-contactrecord/edit/edit.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvbWNzLWNvbnRhY3RyZWNvcmQvZWRpdC9lZGl0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/saleing/mcs-contactrecord/edit/edit.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/saleing/mcs-contactrecord/edit/edit.page.ts ***!
  \*************************************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/base/base.ser/logininfo.storage */ "./src/app/base/base.ser/logininfo.storage.ts");





let EditPage = class EditPage {
    constructor(_http, _page, _valid, activeRoute, _logininfo) {
        this._http = _http;
        this._page = _page;
        this._valid = _valid;
        this.activeRoute = activeRoute;
        this._logininfo = _logininfo;
        this.model = {
            postApiUrl: '/api/only-lead/AddOrEditLogcall',
            detailApiUrl: '/api/only-lead/GetLogCallById',
            postData: {
                mcs_content: "",
                mcs_results: "",
                mcs_visittime: null,
                systemUserId: "",
                mcs_logcallid: "",
                entityid: "" //唯一线索ID
            }
        };
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params) => {
            this.model.postData.systemUserId = this._logininfo.GetSystemUserId();
            if (params['id'] != null && params['id'] != undefined) { //唯一线索主键id
                this.model.postData.entityid = params['id'];
            }
            if (params['mcslogcallid'] != null && params['mcslogcallid'] != undefined) { //联络任务 主键id
                this.model.postData.mcs_logcallid = params['mcslogcallid'];
                this.pageOnBind(params['mcslogcallid']);
            }
        });
    }
    //根据主键加载联络记录(logcall)
    pageOnBind(id) {
        debugger;
        this._page.loadingShow();
        this._http.get(this.model.detailApiUrl, {
            params: {
                mcs_logcallid: id,
                systemuserid: this.model.postData.systemUserId,
            }
        }, (res) => {
            debugger;
            if (res !== null) {
                if (res.Results !== null) {
                    this.model.postData.mcs_content = res.Results[0]["Attributes"]["mcs_content"];
                    this.model.postData.mcs_visittime = res.Results[0]["Attributes"]["mcs_visittime"];
                    this.model.postData.mcs_results = res.Results[0]["Attributes"]["mcs_results"];
                    this.model.postData.entityid = res.Results[0]["Attributes"]["_mcs_onlyleadid_value"];
                }
                else {
                    this._page.alert("消息提示", "数据加载异常");
                }
            }
            else {
                this._page.alert("消息提示", "数据加载异常");
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
    saveLogcall() {
        var errMessage = "";
        if (this._valid.isNullOrEmpty(this.model.postData.mcs_content)) {
            errMessage += "请输入回访内容<br>";
        }
        if (this._valid.isNullOrEmpty(this.model.postData.mcs_results)) {
            errMessage += "请输入回访结果<br>";
        }
        if (this._valid.isNullOrEmpty(this.model.postData.mcs_visittime)) {
            errMessage += "请选择回访时间<br>";
        }
        if (errMessage !== "") {
            this._page.presentToastError(errMessage);
            return;
        }
        this._page.loadingShow();
        this._http.post(this.model.postApiUrl, this.model.postData, (res) => {
            debugger;
            this._page.loadingHide();
            if (res.Result == true) {
                console.log(res);
                //this._shareData.delete(this.mod.shareDataKey);
                this._page.goto("/saleing/onlylead/detail", { id: this.model.postData.entityid });
            }
            else {
                this._page.alert("消息提示", res.Description);
            }
        }, (err) => {
            this._page.loadingHide();
            this._page.alert("消息提示", "操作失败");
        });
    }
};
EditPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Valid"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_4__["Storage_LoginInfo"] }
];
EditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-contactrecord/edit/edit.page.html"),
        styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/saleing/mcs-contactrecord/edit/edit.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Valid"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_4__["Storage_LoginInfo"]])
], EditPage);



/***/ })

}]);
//# sourceMappingURL=saleing-mcs-contactrecord-edit-edit-module-es2015.js.map