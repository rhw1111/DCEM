(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["community-index-index-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/community/index/index.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/community/index/index.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"dm-top-nav\" no-border>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col size=\"1\" class=\"dm-top-nav-ico\">\r\n                <ion-icon name=\"notifications-outline\"></ion-icon>\r\n            </ion-col>\r\n            <ion-col text-center class=\"dm-top-nav-tag\">\r\n                <ion-grid>\r\n                    <ion-row>\r\n                        <ion-col text-center>\r\n                            <div class=\"dm-top-nav-tag-text selected\">推荐</div>\r\n                        </ion-col>\r\n\r\n                        <ion-col text-center>\r\n                            <div class=\"dm-top-nav-tag-text\">活动</div>\r\n                        </ion-col>\r\n                        <ion-col text-center>\r\n                            <div class=\"dm-top-nav-tag-text\">资讯</div>\r\n                        </ion-col>\r\n                        <ion-col text-center>\r\n                            <div class=\"dm-top-nav-tag-text\">问答</div>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </ion-col>\r\n            <ion-col size=\"1\" class=\"dm-top-nav-ico blue\">\r\n                <ion-icon name=\"document\"></ion-icon>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-header>\r\n\r\n<ion-content style=\"overflow:no-display\">\r\n    <ion-slides style=\"height:100%\" (ionSlideWillChange)=\"slideChange($event)\">\r\n        <ion-slide style=\"height:100%\">\r\n            <div style=\"width:100%; height:100%;overflow:scroll;overflow-y:auto;overflow-x:hidden\">\r\n                推荐\r\n            </div>\r\n        </ion-slide>\r\n        <ion-slide style=\"height:100%\">\r\n            <div style=\"width:100%; height:100%;overflow:scroll;overflow-y:auto;overflow-x:hidden\">\r\n                朋友圈\r\n            </div>\r\n        </ion-slide>\r\n        <ion-slide style=\"height:100%\">\r\n            <div style=\"width:100%; height:100%;overflow:scroll;overflow-y:auto;overflow-x:hidden\">\r\n                问答\r\n            </div>\r\n        </ion-slide>\r\n        <ion-slide style=\"height:100%\">\r\n            <div style=\"width:100%; height:100%;overflow:scroll;overflow-y:auto;overflow-x:hidden\">\r\n                活动\r\n            </div>\r\n        </ion-slide>\r\n    </ion-slides>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/page/community/index/index.module.ts":
/*!******************************************************!*\
  !*** ./src/app/page/community/index/index.module.ts ***!
  \******************************************************/
/*! exports provided: IndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageModule", function() { return IndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.page */ "./src/app/page/community/index/index.page.ts");







var IndexPageModule = /** @class */ (function () {
    function IndexPageModule() {
    }
    IndexPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"] }])
            ],
            declarations: [_index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"]]
        })
    ], IndexPageModule);
    return IndexPageModule;
}());



/***/ }),

/***/ "./src/app/page/community/index/index.page.scss":
/*!******************************************************!*\
  !*** ./src/app/page/community/index/index.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0px;\n  padding: 0px;\n}\n\n.dm-top-nav {\n  background-color: #f4f1f5;\n  height: 70px;\n}\n\n.dm-top-nav ion-grid {\n  height: 100%;\n}\n\n.dm-top-nav ion-grid ion-row {\n  height: 100%;\n}\n\n.dm-top-nav ion-grid ion-row ion-col {\n  height: 100%;\n}\n\n.dm-top-nav .dm-top-nav-ico {\n  width: 50px;\n}\n\n.dm-top-nav .dm-top-nav-ico ion-icon {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 30px;\n  height: 30px;\n  margin: -15px 0 0 -15px;\n}\n\n.dm-top-nav .dm-top-nav-ico.blue ion-icon {\n  color: #3171e0;\n}\n\n.dm-top-nav .dm-top-nav-tag {\n  padding-left: 50px;\n  padding-right: 50px;\n}\n\n.dm-top-nav .dm-top-nav-tag .dm-top-nav-tag-text {\n  font-size: 16px;\n  height: 70px;\n  font-weight: bold;\n  margin: 0 auto;\n  text-align: center;\n  line-height: 70px;\n}\n\n.dm-top-nav .dm-top-nav-tag .dm-top-nav-tag-text.selected {\n  font-size: 20px;\n}\n\n.dm-top-nav .dm-top-nav-tag .dm-top-nav-tag-text::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  width: 0%;\n  height: 5px;\n  background-color: RGB(139, 195, 54);\n  transition: all 0.3s;\n  -webkit-transition: all 0.3s;\n}\n\n.dm-top-nav .dm-top-nav-tag .dm-top-nav-tag-text.selected::after {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9jb21tdW5pdHkvaW5kZXgvRTpcXFByb2plY3RzXFxEQ0VNXFxEQ0VNLkFQUC5Vc2VyQ2VudGVyL3NyY1xcYXBwXFxwYWdlXFxjb21tdW5pdHlcXGluZGV4XFxpbmRleC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2UvY29tbXVuaXR5L2luZGV4L2luZGV4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FER0E7RUFHSSx5QkFBQTtFQUNBLFlBSFM7QUNDYjs7QURJSTtFQUNJLFlBQUE7QUNGUjs7QURJUTtFQUNJLFlBQUE7QUNGWjs7QURJWTtFQUNJLFlBQUE7QUNGaEI7O0FET0k7RUFDSSxXQUFBO0FDTFI7O0FET1E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0xaOztBRFNZO0VBQ0ksY0FBQTtBQ1BoQjs7QURZSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNWUjs7QURZUTtFQUNJLGVBQUE7RUFDQSxZQTFDQztFQTJDRCxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQTlDQztBQ29DYjs7QURZWTtFQUNJLGVBQUE7QUNWaEI7O0FEYVk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0FDWGhCOztBRGNZO0VBQ0ksV0FBQTtBQ1poQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvY29tbXVuaXR5L2luZGV4L2luZGV4LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi8v6aG26YOo5a+86IiqXHJcbi5kbS10b3AtbmF2IHtcclxuICAgICRoZWlnaHQ6IDcwcHg7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwyNDEsMjQ1KTtcclxuICAgIGhlaWdodDogJGhlaWdodDtcclxuXHJcbiAgICBpb24tZ3JpZCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICBpb24tcm93IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRtLXRvcC1uYXYtaWNvIHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogLTE1cHggMCAwIC0xNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5ibHVlIHtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYig0OSwxMTMsMjI0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZG0tdG9wLW5hdi10YWcge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG5cclxuICAgICAgICAuZG0tdG9wLW5hdi10YWctdGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAmLnNlbGVjdGVkIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IFJHQigxMzksMTk1LDU0KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2VsZWN0ZWQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIioge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uZG0tdG9wLW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGYxZjU7XG4gIGhlaWdodDogNzBweDtcbn1cbi5kbS10b3AtbmF2IGlvbi1ncmlkIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRtLXRvcC1uYXYgaW9uLWdyaWQgaW9uLXJvdyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kbS10b3AtbmF2IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kbS10b3AtbmF2IC5kbS10b3AtbmF2LWljbyB7XG4gIHdpZHRoOiA1MHB4O1xufVxuLmRtLXRvcC1uYXYgLmRtLXRvcC1uYXYtaWNvIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IC0xNXB4IDAgMCAtMTVweDtcbn1cbi5kbS10b3AtbmF2IC5kbS10b3AtbmF2LWljby5ibHVlIGlvbi1pY29uIHtcbiAgY29sb3I6ICMzMTcxZTA7XG59XG4uZG0tdG9wLW5hdiAuZG0tdG9wLW5hdi10YWcge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG4uZG0tdG9wLW5hdiAuZG0tdG9wLW5hdi10YWcgLmRtLXRvcC1uYXYtdGFnLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xufVxuLmRtLXRvcC1uYXYgLmRtLXRvcC1uYXYtdGFnIC5kbS10b3AtbmF2LXRhZy10ZXh0LnNlbGVjdGVkIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmRtLXRvcC1uYXYgLmRtLXRvcC1uYXYtdGFnIC5kbS10b3AtbmF2LXRhZy10ZXh0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IFJHQigxMzksIDE5NSwgNTQpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5kbS10b3AtbmF2IC5kbS10b3AtbmF2LXRhZyAuZG0tdG9wLW5hdi10YWctdGV4dC5zZWxlY3RlZDo6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/community/index/index.page.ts":
/*!****************************************************!*\
  !*** ./src/app/page/community/index/index.page.ts ***!
  \****************************************************/
/*! exports provided: IndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPage", function() { return IndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




var IndexPage = /** @class */ (function () {
    function IndexPage() {
    }
    IndexPage.prototype.ngOnInit = function () {
        this.init();
    };
    IndexPage.prototype.init = function () {
        //�л��¼�tab
        var that = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__(".dm-top-nav-tag").find("div").click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__(".dm-top-nav-tag").find("div").attr("class", "dm-top-nav-tag-text");
            jquery__WEBPACK_IMPORTED_MODULE_3__(this).addClass("selected");
            var index = jquery__WEBPACK_IMPORTED_MODULE_3__(this).parent().index();
            that.ionSlides.slideTo(index);
        });
    };
    //�л��¼�slides
    IndexPage.prototype.slideChange = function ($event) {
        // var index = this.ionSlides.getActiveIndex;
        var index = this.ionSlides.getActiveIndex();
        console.log(index);
        console.log(index["__zone_symbol__value"]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], IndexPage.prototype, "ionSlides", void 0);
    IndexPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! raw-loader!./index.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/community/index/index.page.html"),
            styles: [__webpack_require__(/*! ./index.page.scss */ "./src/app/page/community/index/index.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexPage);
    return IndexPage;
}());



/***/ })

}]);
//# sourceMappingURL=community-index-index-module-es5.js.map