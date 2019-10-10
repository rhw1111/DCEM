(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n      <ion-toolbar>\r\n          <ion-buttons slot=\"start\">\r\n              <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n  \r\n          <ion-title>首页</ion-title>\r\n  \r\n          <ion-buttons slot=\"primary\">\r\n            <ion-button (click)=\"addTestDrive()\">\r\n              <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n  </ion-header>\r\n<!-- \r\n<ion-content padding>\r\n     <ion-list auto-hide=\"false\" *ngFor=\"let r of testDriveList\">\r\n        <ion-item (click)=\"showDetail(r)\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"9\">\r\n                    <ion-label>\r\n                      <h3><ion-icon name=\"timer\"></ion-icon>  {{r.Date}}</h3>\r\n                    </ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"3\">\r\n                    <ion-label>\r\n                      <h3 *ngIf=\"r.Status==0\">待完成</h3>\r\n                      <h3 *ngIf=\"r.Status==1\">已完成</h3>\r\n                      <h3 *ngIf=\"r.Status==2\">已关闭</h3>\r\n                    </ion-label>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                      <ion-label>\r\n                        <h2>{{r.UserName}}</h2>\r\n                        <h3>试驾时间：{{r.StartTime}}-{{r.EndTime}}</h3>\r\n                        <p>车型：{{r.VehicleType}}</p>\r\n                      </ion-label>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n      </ion-list>\r\n</ion-content> -->\r\n\r\n<ion-content fullscreen>\r\n  <ion-list>\r\n      <ion-item button>\r\n        <ion-icon slot=\"start\" name=\"logo-angular\" style=\"color: red;\"></ion-icon>\r\n        <ion-label>\r\n          <h3>首页导航一</h3>\r\n        </ion-label>\r\n        <ion-icon class=\"item-detail-icon ios hydrated\" role=\"img\" aria-label=\"arrow forward\"></ion-icon>\r\n      </ion-item>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9FOlxcQXBwUHJvamVjdFxcRENFTVxcRENFTS5NQXBwL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFvQjtFQUNwQiw0QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.testDriveList = [
            {
                Id: 1,
                UserName: "张一帆",
                PhoneNumber: "1802890098",
                Date: "2019-11-01",
                StartTime: "14:00:00",
                EndTime: "17:00:00",
                VehicleType: "S01",
                Remark: "试乘试驾",
                Status: 1
            },
            {
                Id: 2,
                UserName: "张一帆",
                PhoneNumber: "1802890098",
                Date: "2019-11-01",
                StartTime: "14:00:00",
                EndTime: "17:00:00",
                VehicleType: "S01",
                Remark: "试乘试驾",
                Status: 0
            },
            {
                Id: 3,
                UserName: "张一帆",
                PhoneNumber: "1802890098",
                Date: "2019-11-01",
                StartTime: "14:00:00",
                EndTime: "17:00:00",
                VehicleType: "S01",
                Remark: "试乘试驾",
                Status: 1
            },
            {
                Id: 4,
                UserName: "张一帆",
                PhoneNumber: "1802890098",
                Date: "2019-11-01",
                StartTime: "14:00:00",
                EndTime: "17:00:00",
                VehicleType: "S01",
                Remark: "试乘试驾",
                Status: 2
            }
        ];
    }
    HomePage.prototype.addTestDrive = function () {
        this.navCtrl.navigateForward('test-drive-add');
    };
    HomePage.prototype.showDetail = function (item) {
        this.router.navigate(['test-drive-detail'], {
            queryParams: {
                Item: JSON.stringify(item)
            }
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map