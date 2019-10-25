(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["base-uc-com-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/base/uc.com/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/base/uc.com/login/login.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>登录</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen scroll-y=\"false\">\r\n    <ion-list lines=\"none\">\r\n        <ion-list-header text-center>\r\n            <img src=\"./assets/img/userhead.png\" />\r\n        </ion-list-header>\r\n        <ion-item>\r\n            <ion-icon slot=\"start\" name=\"phone-portrait\"></ion-icon>\r\n            <ion-input [(ngModel)]=\"mod.username\" placeholder=\"手机号码\" no-lines></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-icon slot=\"start\" name=\"lock\"></ion-icon>\r\n            <ion-input [(ngModel)]=\"mod.password\" type=\"password\" placeholder=\"登录密码\"></ion-input>\r\n            <ion-toggle slot=\"end\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-item color=\"none\">\r\n            <label slot=\"end\">记住密码</label>\r\n            <ion-toggle slot=\"end\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>登录环境</ion-label>\r\n            <ion-select value=\"localhost\" okText=\"确定\" cancelText=\"取消\" [(ngModel)]=\"mod.domainType\">\r\n                <ion-select-option value=\"localhost\">localhost</ion-select-option>\r\n                <ion-select-option value=\"Dev\">Dev</ion-select-option>\r\n                <ion-select-option value=\"Sit\">Sit</ion-select-option>\r\n                <ion-select-option value=\"Uat\">Uat</ion-select-option>\r\n                <ion-select-option value=\"Prod\">Prod</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-button expand=\"block\" type=\"button\" (click)=\"submit()\">登录</ion-button>\r\n    </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/base/uc.com/login/login.module.ts":
/*!***************************************************!*\
  !*** ./src/app/base/uc.com/login/login.module.ts ***!
  \***************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/base/uc.com/login/login.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");








const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/base/uc.com/login/login.page.scss":
/*!***************************************************!*\
  !*** ./src/app/base/uc.com/login/login.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0px;\n  padding: 0px;\n}\n\nion-list {\n  height: 100%;\n  background-color: #f9f9f9;\n}\n\nion-list ion-list-header {\n  height: 35%;\n  text-align: center;\n}\n\nion-list ion-list-header img {\n  left: 50%;\n  position: relative;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  max-width: 50%;\n  max-height: 50%;\n}\n\nion-list ion-item {\n  margin-top: 3px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\nion-list ion-item:nth-child(-n+3) {\n  border: 2px solid #e4e4e4;\n}\n\nion-list ion-item:nth-child(-n+3) ion-icon {\n  margin-left: -5px;\n  font-size: 26px;\n  color: #cccccc;\n}\n\nion-list ion-item:nth-child(-n+3) ion-input {\n  border: none;\n}\n\nion-list ion-button {\n  margin-top: 5px;\n  margin-left: 25px;\n  margin-right: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzZS91Yy5jb20vbG9naW4vRDpcXOW3peS9nOebruW9lVxc5b6u6L2v6aG555uuXFzku6PnoIFcXOenu+WKqOerr1xc56e75Yqo56uvKOato+W8j+mhueebrilcXERDRU0uTUFwcC9zcmNcXGFwcFxcYmFzZVxcdWMuY29tXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9iYXNlL3VjLmNvbS9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDRUY7O0FEQUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURESTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0dOOztBREFFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDRTtFQUNFLHlCQUFBO0FDQ0o7O0FEQUk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRU47O0FEQUk7RUFDRSxZQUFBO0FDRU47O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYmFzZS91Yy5jb20vbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbmlvbi1saXN0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwgMjQ5LCAyNDkpO1xyXG5cclxuICBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiAzNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgbWF4LWhlaWdodDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24taXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIGlvbi1pdGVtOm50aC1jaGlsZCgtbiArIDMpIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMjgsIDIyOCwgMjI4KTtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgY29sb3I6IHJnYigyMDQsIDIwNCwgMjA0KTtcclxuICAgIH1cclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICB9XHJcbn1cclxuIiwiKiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuaW9uLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgaGVpZ2h0OiAzNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1saXN0IGlvbi1saXN0LWhlYWRlciBpbWcge1xuICBsZWZ0OiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgbWF4LWhlaWdodDogNTAlO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5pb24tbGlzdCBpb24taXRlbTpudGgtY2hpbGQoLW4rMykge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTRlNGU0O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW06bnRoLWNoaWxkKC1uKzMpIGlvbi1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG5pb24tbGlzdCBpb24taXRlbTpudGgtY2hpbGQoLW4rMykgaW9uLWlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xufVxuaW9uLWxpc3QgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/base/uc.com/login/login.page.ts":
/*!*************************************************!*\
  !*** ./src/app/base/uc.com/login/login.page.ts ***!
  \*************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");



//import { AlertController, LoadingController, NavController } from '@ionic/angular';
//import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
let LoginPage = class LoginPage {
    // 定义控制器
    constructor(
    //private alertCtr: AlertController,
    //private loadingCtr: LoadingController,
    //private navCtr: NavController,
    //private httpClient: HttpClient,
    _http, _page, _window) {
        this._http = _http;
        this._page = _page;
        this._window = _window;
        // 定义模型
        this.mod = {
            username: '',
            password: '',
            apiurl: '',
            domainType: '',
            domain: ''
        };
    }
    // 初始化
    ngOnInit() {
        // 加入测试参数
        this.mod.username = 'subdevcrmadmin';
        this.mod.password = 'password01#';
        this.mod.apiurl = '/api/Account/GetAuthToken';
        this.mod.domainType = 'local';
    }
    // 提交
    submit() {
        if (this.mod.username.length <= 0) {
            this._page.alert('消息提示', '请输入手机号码');
            return;
        }
        if (this.mod.password.length <= 0) {
            this._page.alert('消息提示', '请输入密码');
            return;
        }
        switch (this.mod.domainType) {
            case 'Dev':
                this.mod.domain = "https://subcrmdevapi.sokon.com/dcem";
                break;
            case 'Sit':
                this.mod.domain = "https://subcrmdevapi.sokon.com/dcem";
                break;
            case 'Uat':
                this.mod.domain = "https://subcrmuatapi.sokon.com/dcem";
                break;
            case 'Pro':
                this.mod.domain = "https://mscrm.sokon.com/dcem";
                break;
            case 'localhost':
                this.mod.domain = "http://localhost:52151";
                break;
            default:
                this.mod.domain = "http://localhost:9099";
                break;
        }
        this._window.storageSet("apiDomainUrl", this.mod.domain);
        this._page.loadingShow();
        this._http.get(this.mod.apiurl, {
            params: {
                username: encodeURIComponent(this.mod.username),
                password: encodeURIComponent(this.mod.password)
            }
        }, (res) => {
            console.log(res);
            this._page.loadingHide();
            this._page.alert('消息提示', '登录认证成功');
            this._page.goto("serving/home/tabs");
            //this.navCtr.navigateRoot('serving/home/tabs');
        }, (err) => {
            this._page.loadingHide();
            //this._page.goto("serving/home/tabs");
            this._page.alert('消息提示', '登录认证失败');
        });
        //this.httpGet();
    }
};
LoginPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["Dcem"].Core.Http },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["Dcem"].Core.Page },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["Dcem"].Core.Window }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/base/uc.com/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/base/uc.com/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["Dcem"].Core.Http, app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["Dcem"].Core.Page, app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["Dcem"].Core.Window])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=base-uc-com-login-login-module-es2015.js.map