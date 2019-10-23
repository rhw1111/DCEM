(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["base-uc-com-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/base/uc.com/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/base/uc.com/login/login.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>登录</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen scroll-y=\"false\">\r\n    <ion-list lines=\"none\">\r\n        <ion-list-header text-center>\r\n            <img src=\"./assets/img/userhead.png\" />\r\n        </ion-list-header>\r\n        <ion-item>\r\n            <ion-icon slot=\"start\" name=\"phone-portrait\"></ion-icon>\r\n            <ion-input [(ngModel)]=\"mod.username\" placeholder=\"手机号码\" no-lines></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-icon slot=\"start\" name=\"lock\"></ion-icon>\r\n            <ion-input [(ngModel)]=\"mod.password\" type=\"password\" placeholder=\"登录密码\"></ion-input>\r\n            <ion-toggle slot=\"end\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-item color=\"none\">\r\n            <label slot=\"end\">记住密码</label>\r\n            <ion-toggle slot=\"end\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>登录环境</ion-label>\r\n            <ion-select value=\"localhost\" okText=\"确定\" cancelText=\"取消\" [(ngModel)]=\"environment\" name=\"environment\" id=\"environment\">\r\n              <ion-select-option value=\"localhost\">localhost</ion-select-option>\r\n              <ion-select-option value=\"Dev\">Dev</ion-select-option>\r\n              <ion-select-option value=\"Sit\">Sit</ion-select-option>\r\n              <ion-select-option value=\"Uat\">Uat</ion-select-option>\r\n              <ion-select-option value=\"Prod\">Prod</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        <ion-button expand=\"block\" type=\"button\" (click)=\"submit()\">登录</ion-button>\r\n    </ion-list>\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/base/uc.com/login/login.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
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
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/base/uc.com/login/login.page.scss":
/*!***************************************************!*\
  !*** ./src/app/base/uc.com/login/login.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0px;\n  padding: 0px; }\n\nion-list {\n  height: 100%;\n  background-color: #f9f9f9; }\n\nion-list ion-list-header {\n    height: 35%;\n    text-align: center; }\n\nion-list ion-list-header img {\n      left: 50%;\n      position: relative;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      max-width: 50%;\n      max-height: 50%; }\n\nion-list ion-item {\n    margin-top: 3px;\n    margin-left: 10px;\n    margin-right: 10px; }\n\nion-list ion-item:nth-child(-n + 3) {\n    border: 2px solid #e4e4e4; }\n\nion-list ion-item:nth-child(-n + 3) ion-icon {\n      margin-left: -5px;\n      font-size: 26px;\n      color: #cccccc; }\n\nion-list ion-item:nth-child(-n + 3) ion-input {\n      border: none; }\n\nion-list ion-button {\n    margin-top: 5px;\n    margin-left: 25px;\n    margin-right: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzZS91Yy5jb20vbG9naW4vRTpcXEFwcFByb2plY3RcXERDRU1cXERDRU0uTUFwcC9zcmNcXGFwcFxcYmFzZVxcdWMuY29tXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUNFLFlBQVk7RUFDWix5QkFBb0MsRUFBQTs7QUFGdEM7SUFLSSxXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7O0FBTnRCO01BUU0sU0FBUztNQUNULGtCQUFrQjtNQUNsQixtQ0FBMkI7Y0FBM0IsMkJBQTJCO01BQzNCLGNBQWM7TUFDZCxlQUFlLEVBQUE7O0FBWnJCO0lBZ0JJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7O0FBbEJ0QjtJQXNCSSx5QkFBb0MsRUFBQTs7QUF0QnhDO01Bd0JNLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsY0FBeUIsRUFBQTs7QUExQi9CO01BNkJNLFlBQVksRUFBQTs7QUE3QmxCO0lBaUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9iYXNlL3VjLmNvbS9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuaW9uLWxpc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyNDksIDI0OSk7XHJcblxyXG4gIGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDM1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICBtYXgtaGVpZ2h0OiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW06bnRoLWNoaWxkKC1uICsgMykge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIyOCwgMjI4LCAyMjgpO1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICBjb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpO1xyXG4gICAgfVxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base.ser/http-service.service */ "./src/app/base/base.ser/http-service.service.ts");





var LoginPage = /** @class */ (function () {
    // 定义控制器
    function LoginPage(alertCtr, loadingCtr, navCtr, httpClient, httpService) {
        this.alertCtr = alertCtr;
        this.loadingCtr = loadingCtr;
        this.navCtr = navCtr;
        this.httpClient = httpClient;
        this.httpService = httpService;
        this.environment = '';
        // 定义模型
        this.mod = {
            username: '',
            password: ''
        };
        this.apiurl = '';
    }
    // 初始化
    LoginPage.prototype.ngOnInit = function () {
        // 加入测试参数
        this.mod.username = 'subdevcrmadmin';
        this.mod.password = 'password01#';
        this.apiurl = 'https://subcrmdevapi.sokon.com/dcem/api/Account/GetAuthToken';
    };
    // 提交
    LoginPage.prototype.submit = function () {
        if (this.mod.username.length <= 0) {
            this.presentAlert('消息提示', '请输入手机号码');
            return;
        }
        if (this.mod.password.length <= 0) {
            this.presentAlert('消息提示', '请输入密码');
            return;
        }
        this.httpGet();
    };
    // http请求
    LoginPage.prototype.httpGet = function () {
        var _this = this;
        var loading = this.loadingCtr.create({ translucent: false });
        loading.then(function (a) { a.present(); });
        var httpGet = this.httpClient.get(this.apiurl, {
            params: {
                username: encodeURIComponent(this.mod.username),
                password: encodeURIComponent(this.mod.password)
            }
        });
        httpGet.subscribe(function (res) {
            if (res.access_token === null || res.access_token === '') {
                _this.presentAlert('消息提示', '登录认证失败');
            }
            else {
                //设置登录环境
                _this.httpService.setEnvironmentUrl(_this.environment);
                //this.presentAlert('消息提示', 'token:' + res.access_token);
                console.log(res.access_token);
                //this.presentAlert('消息提示', '登录认证通过'); 
                _this.navCtr.navigateRoot('serving/home/tabs');
            }
            loading.then(function (a) { a.dismiss(); });
        }, function (err) {
            _this.presentAlert('消息提示', '登录认证失败');
            loading.then(function (a) { a.dismiss(); });
        });
    };
    // 弹出提示
    LoginPage.prototype.presentAlert = function (header, message) {
        var alert = this.alertCtr.create({
            header: header,
            message: message,
            buttons: ['确定']
        });
        alert.then(function (a) {
            a.present();
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/base/uc.com/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/base/uc.com/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _base_ser_http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=base-uc-com-login-login-module-es5.js.map