(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["base-uc-com-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/base/uc.com/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/base/uc.com/login/login.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>登录</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen scroll-y=\"false\">\r\n    <ion-list lines=\"none\">\r\n        <ion-list-header text-center>\r\n            <img src=\"./assets/img/login.jpg\" />\r\n        </ion-list-header>\r\n        <ion-item>\r\n            <ion-icon slot=\"start\" name=\"phone-portrait\"></ion-icon>\r\n            <ion-input [(ngModel)]=\"mod.username\" placeholder=\"账号\" no-lines></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-icon slot=\"start\" name=\"lock\"></ion-icon>\r\n            <ion-input [(ngModel)]=\"mod.password\" type=\"{{mod.pwshow?'text':'password'}}\" placeholder=\"密码\"></ion-input>\r\n            <ion-icon slot=\"end\" *ngIf=\"mod.pwshow\" name=\"ios-eye-off\" color=\"dark\" (click)=\"mod.pwshow=!mod.pwshow\"></ion-icon>  <!--闭眼图标-->\r\n            <ion-icon slot=\"end\" *ngIf=\"!mod.pwshow\"  name=\"ios-eye\" color=\"dark\" (click)=\"mod.pwshow=!mod.pwshow\"></ion-icon>  <!--睁眼图标-->\r\n            <!-- <a href=\"javascript:;\" rel=\"external nofollow\" item-end (click)=\"mod.pwshow=!mod.pwshow\">\r\n                \r\n            </a> -->\r\n        </ion-item>\r\n        <ion-item color=\"none\">\r\n            <label slot=\"end\">记住密码</label>\r\n            <ion-toggle slot=\"end\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>登录环境</ion-label>\r\n            <ion-select value=\"localhost\" okText=\"确定\" cancelText=\"取消\" [(ngModel)]=\"mod.domainType\">\r\n                <ion-select-option value=\"localhost\">localhost</ion-select-option>\r\n                <ion-select-option value=\"Dev\">Dev</ion-select-option>\r\n                <ion-select-option value=\"Sit\">Sit</ion-select-option>\r\n                <ion-select-option value=\"Uat\">Uat</ion-select-option>\r\n                <ion-select-option value=\"Prod\">Prod</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-button expand=\"block\" type=\"button\" (click)=\"submit()\">登录</ion-button>\r\n    </ion-list>\r\n</ion-content>"

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

module.exports = "* {\n  margin: 0px;\n  padding: 0px; }\n\nion-list {\n  height: 100%;\n  background-color: #f9f9f9; }\n\nion-list ion-list-header {\n    height: 50%;\n    text-align: center; }\n\nion-list ion-list-header img {\n      left: 50%;\n      position: relative;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      max-width: 100%;\n      max-height: 100%; }\n\nion-list ion-item {\n    margin-top: 3px;\n    margin-left: 10px;\n    margin-right: 10px; }\n\nion-list ion-item:nth-child(-n + 3) {\n    border: 2px solid #e4e4e4; }\n\nion-list ion-item:nth-child(-n + 3) ion-icon {\n      margin-left: -5px;\n      font-size: 26px;\n      color: #cccccc; }\n\nion-list ion-item:nth-child(-n + 3) ion-input {\n      border: none; }\n\nion-list ion-button {\n    margin-top: 5px;\n    margin-left: 25px;\n    margin-right: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzZS91Yy5jb20vbG9naW4vRTpcXEFwcFByb2plY3RcXERDRU1cXERDRU0uTUFwcC9zcmNcXGFwcFxcYmFzZVxcdWMuY29tXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUNJLFlBQVk7RUFDWix5QkFBb0MsRUFBQTs7QUFGeEM7SUFLUSxXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7O0FBTjFCO01BU1ksU0FBUztNQUNULGtCQUFrQjtNQUNsQixtQ0FBMkI7Y0FBM0IsMkJBQTJCO01BQzNCLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTs7QUFiNUI7SUFrQlEsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTs7QUFwQjFCO0lBd0JRLHlCQUFvQyxFQUFBOztBQXhCNUM7TUEyQlksaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixjQUF5QixFQUFBOztBQTdCckM7TUFpQ1ksWUFBWSxFQUFBOztBQWpDeEI7SUFzQ1EsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Jhc2UvdWMuY29tL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5pb24tbGlzdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyNDksIDI0OSk7XHJcblxyXG4gICAgaW9uLWxpc3QtaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW06bnRoLWNoaWxkKC1uICsgMykge1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMjgsIDIyOCwgMjI4KTtcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/logininfo.storage */ "./src/app/base/base.ser/logininfo.storage.ts");




let LoginPage = class LoginPage {
    // 定义控制器
    constructor(_http, _page, _window, _logininfo) {
        this._http = _http;
        this._page = _page;
        this._window = _window;
        this._logininfo = _logininfo;
        // 定义模型
        this.mod = {
            username: '',
            password: '',
            apiurl: '',
            domainType: '',
            domain: '',
            pwshow: false //是否显示密码
        };
    }
    // 初始化
    ngOnInit() {
        // 加入测试参数
        this.mod.username = 'subdevcrmadmin';
        this.mod.password = 'password01#';
        //this.mod.username = 'subuatcrmadmin';
        //this.mod.password = 'P@ssw0rd';
        this.mod.apiurl = '/api/User/GetAuthToken';
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
            if (res.access_token == "") {
                this._page.alert('消息提示', '登录认证失败');
                this._page.loadingHide();
                return false;
            }
            this._http.setToken(res.access_token);
            this._logininfo.SetInfo(JSON.stringify(res));
            this._page.loadingHide();
            this._page.alert('消息提示', '登录认证成功');
            this._page.goto("serving/home/tabs");
            //this.navCtr.navigateRoot('serving/home/tabs');
        }, (err) => {
            this._page.loadingHide();
            //this._page.goto("serving/home/tabs");
            this._page.alert('消息提示', '登录认证失败');
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Window"] },
    { type: app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__["Storage_LoginInfo"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/base/uc.com/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/base/uc.com/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Window"],
        app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__["Storage_LoginInfo"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=base-uc-com-login-login-module-es2015.js.map