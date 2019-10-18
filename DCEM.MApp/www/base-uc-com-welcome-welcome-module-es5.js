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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/base/uc.com/welcome/welcome.page.ts");







var routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]
    }
];
var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
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
    return WelcomePageModule;
}());



/***/ }),

/***/ "./src/app/base/uc.com/welcome/welcome.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/base/uc.com/welcome/welcome.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0px;\n  padding: 0px; }\n\nion-slides {\n  height: 90%; }\n\nion-slide {\n  height: 100%; }\n\nion-grid {\n  height: 100%; }\n\nion-grid ion-row:first-child {\n    height: 65%; }\n\nion-grid ion-row:first-child ion-col {\n      background-color: #3478f7; }\n\nion-grid ion-row:first-child ion-col img {\n        top: 50%;\n        position: relative;\n        -webkit-transform: translateY(-50%);\n                transform: translateY(-50%);\n        max-width: 50%;\n        max-height: 50%; }\n\nion-grid ion-row:last-child {\n    height: 35%;\n    padding-top: 15%; }\n\nion-grid ion-row:last-child ion-col {\n      background-color: white; }\n\nion-grid ion-row:last-child h3 {\n      color: #a5a5a5; }\n\nion-grid ion-row:last-child h4 {\n      color: #a5a5a5;\n      margin-top: 10px; }\n\nion-grid ion-row:last-child ion-button {\n      margin-top: 20px;\n      width: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzZS91Yy5jb20vd2VsY29tZS9FOlxcQXBwUHJvamVjdFxcRENFTVxcRENFTS5NQXBwL3NyY1xcYXBwXFxiYXNlXFx1Yy5jb21cXHdlbGNvbWVcXHdlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLFlBQVksRUFBQTs7QUFEZDtJQUlJLFdBQVcsRUFBQTs7QUFKZjtNQU9NLHlCQUFtQyxFQUFBOztBQVB6QztRQVVRLFFBQVE7UUFDUixrQkFBa0I7UUFDbEIsbUNBQTJCO2dCQUEzQiwyQkFBMkI7UUFDM0IsY0FBYztRQUNkLGVBQWUsRUFBQTs7QUFkdkI7SUFtQkksV0FBVztJQUNYLGdCQUFnQixFQUFBOztBQXBCcEI7TUFzQk0sdUJBQW9DLEVBQUE7O0FBdEIxQztNQXlCTSxjQUF5QixFQUFBOztBQXpCL0I7TUE0Qk0sY0FBeUI7TUFDekIsZ0JBQWdCLEVBQUE7O0FBN0J0QjtNQWdDTSxnQkFBZ0I7TUFDaEIsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYmFzZS91Yy5jb20vd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5pb24tc2xpZGVzIHtcclxuICBoZWlnaHQ6IDkwJTtcclxufVxyXG5pb24tc2xpZGUge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5pb24tZ3JpZCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBpb24tcm93OmZpcnN0LWNoaWxkIHtcclxuICAgIGhlaWdodDogNjUlO1xyXG5cclxuICAgIGlvbi1jb2wge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTIsIDEyMCwgMjQ3KTtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaW9uLXJvdzpsYXN0LWNoaWxkIHtcclxuICAgIGhlaWdodDogMzUlO1xyXG4gICAgcGFkZGluZy10b3A6IDE1JTtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTY1LCAxNjUsIDE2NSk7XHJcbiAgICB9XHJcbiAgICBoNCB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTY1LCAxNjUsIDE2NSk7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomePage = /** @class */ (function () {
    function WelcomePage() {
    }
    WelcomePage.prototype.ngOnInit = function () {
    };
    WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/index.js!./src/app/base/uc.com/welcome/welcome.page.html"),
            styles: [__webpack_require__(/*! ./welcome.page.scss */ "./src/app/base/uc.com/welcome/welcome.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomePage);
    return WelcomePage;
}());



/***/ })

}]);
//# sourceMappingURL=base-uc-com-welcome-welcome-module-es5.js.map