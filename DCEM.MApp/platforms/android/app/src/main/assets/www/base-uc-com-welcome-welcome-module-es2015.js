(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["base-uc-com-welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/base/uc.com/welcome/welcome.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/base/uc.com/welcome/welcome.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen scroll-y=\"false\">\r\n    <ion-slides pager>\r\n        <ion-slide>\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <img src=\"./assets/img/default.png\" />\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <h3><b>预约维修保养</b></h3>\r\n                        <h4>快速进行客户维修保养预约</h4>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-slide>\r\n        <ion-slide>\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <img src=\"./assets/img/default.png\" />\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <h3><b>维修问诊接待</b></h3>\r\n                        <h4>快速进行客户维修保养预约</h4>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-slide>\r\n        <ion-slide>\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <img src=\"./assets/img/default.png\" />\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <h3><b>维修开单</b></h3>\r\n                        <h4>及时进行维修开单</h4>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-slide>\r\n        <ion-slide>\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <img src=\"./assets/img/default.png\" />\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <h3><b>技术支持</b></h3>\r\n                        <h4>建立技术解决方案</h4>\r\n                        <ion-button [routerLink]=\"['base/uc/login']\">立即体验</ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-slide>\r\n    </ion-slides>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/base/uc.com/welcome/welcome.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/base/uc.com/welcome/welcome.module.ts ***!
  \*******************************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/base/uc.com/welcome/welcome.page.ts");







const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]
    }
];
let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
    })
], WelcomePageModule);



/***/ }),

/***/ "./src/app/base/uc.com/welcome/welcome.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/base/uc.com/welcome/welcome.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0px;\n  padding: 0px;\n}\n\nion-slides {\n  height: 90%;\n}\n\nion-slide {\n  height: 100%;\n}\n\nion-grid {\n  height: 100%;\n}\n\nion-grid ion-row:first-child {\n  height: 65%;\n}\n\nion-grid ion-row:first-child ion-col {\n  background-color: #3478f7;\n}\n\nion-grid ion-row:first-child ion-col img {\n  top: 50%;\n  position: relative;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  max-width: 50%;\n  max-height: 50%;\n}\n\nion-grid ion-row:last-child {\n  height: 35%;\n  padding-top: 15%;\n}\n\nion-grid ion-row:last-child ion-col {\n  background-color: white;\n}\n\nion-grid ion-row:last-child h3 {\n  color: #a5a5a5;\n}\n\nion-grid ion-row:last-child h4 {\n  color: #a5a5a5;\n  margin-top: 10px;\n}\n\nion-grid ion-row:last-child ion-button {\n  margin-top: 20px;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzZS91Yy5jb20vd2VsY29tZS9EOlxc5bel5L2c55uu5b2VXFzlvq7ova/pobnnm65cXOS7o+eggVxc56e75Yqo56uvXFznp7vliqjnq68o5q2j5byP6aG555uuKVxcRENFTS5NQXBwL3NyY1xcYXBwXFxiYXNlXFx1Yy5jb21cXHdlbGNvbWVcXHdlbGNvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9iYXNlL3VjLmNvbS93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QUREQTtFQUNFLFlBQUE7QUNJRjs7QURGRTtFQUNFLFdBQUE7QUNJSjs7QURGSTtFQUNFLHlCQUFBO0FDSU47O0FERk07RUFDRSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNJUjs7QURBRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRERJO0VBQ0UsdUJBQUE7QUNHTjs7QURESTtFQUNFLGNBQUE7QUNHTjs7QURESTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0dOOztBRERJO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9iYXNlL3VjLmNvbS93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbmlvbi1zbGlkZXMge1xyXG4gIGhlaWdodDogOTAlO1xyXG59XHJcbmlvbi1zbGlkZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmlvbi1ncmlkIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGlvbi1yb3c6Zmlyc3QtY2hpbGQge1xyXG4gICAgaGVpZ2h0OiA2NSU7XHJcblxyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MiwgMTIwLCAyNDcpO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpb24tcm93Omxhc3QtY2hpbGQge1xyXG4gICAgaGVpZ2h0OiAzNSU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTUlO1xyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIH1cclxuICAgIGgzIHtcclxuICAgICAgY29sb3I6IHJnYigxNjUsIDE2NSwgMTY1KTtcclxuICAgIH1cclxuICAgIGg0IHtcclxuICAgICAgY29sb3I6IHJnYigxNjUsIDE2NSwgMTY1KTtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIqIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogOTAlO1xufVxuXG5pb24tc2xpZGUge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1ncmlkIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLWdyaWQgaW9uLXJvdzpmaXJzdC1jaGlsZCB7XG4gIGhlaWdodDogNjUlO1xufVxuaW9uLWdyaWQgaW9uLXJvdzpmaXJzdC1jaGlsZCBpb24tY29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0NzhmNztcbn1cbmlvbi1ncmlkIGlvbi1yb3c6Zmlyc3QtY2hpbGQgaW9uLWNvbCBpbWcge1xuICB0b3A6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXgtaGVpZ2h0OiA1MCU7XG59XG5pb24tZ3JpZCBpb24tcm93Omxhc3QtY2hpbGQge1xuICBoZWlnaHQ6IDM1JTtcbiAgcGFkZGluZy10b3A6IDE1JTtcbn1cbmlvbi1ncmlkIGlvbi1yb3c6bGFzdC1jaGlsZCBpb24tY29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5pb24tZ3JpZCBpb24tcm93Omxhc3QtY2hpbGQgaDMge1xuICBjb2xvcjogI2E1YTVhNTtcbn1cbmlvbi1ncmlkIGlvbi1yb3c6bGFzdC1jaGlsZCBoNCB7XG4gIGNvbG9yOiAjYTVhNWE1O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaW9uLWdyaWQgaW9uLXJvdzpsYXN0LWNoaWxkIGlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogNTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/base/uc.com/welcome/welcome.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/base/uc.com/welcome/welcome.page.ts ***!
  \*****************************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WelcomePage = class WelcomePage {
    constructor() { }
    ngOnInit() {
    }
};
WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/index.js!./src/app/base/uc.com/welcome/welcome.page.html"),
        styles: [__webpack_require__(/*! ./welcome.page.scss */ "./src/app/base/uc.com/welcome/welcome.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WelcomePage);



/***/ })

}]);
//# sourceMappingURL=base-uc-com-welcome-welcome-module-es2015.js.map