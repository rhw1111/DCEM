(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["community-index-index-module"],{

/***/ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/page/community/index/index.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/_raw-loader@1.0.0@raw-loader!./src/app/page/community/index/index.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"dm-top-nav\" no-border>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col style=\"width:5%\">\r\n                <ion-icon name=\"notifications-outline\"></ion-icon>\r\n            </ion-col>\r\n            <ion-col style=\"width:auto\">\r\n                <ion-grid>\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <div class=\"dm-top-nav-tag-text selected\">推荐</div>\r\n                        </ion-col>\r\n                        <ion-col>\r\n                            <div class=\"dm-top-nav-tag-text\">朋友圈</div>\r\n                        </ion-col>\r\n                        <ion-col>\r\n                            <div class=\"dm-top-nav-tag-text\">问答</div>\r\n                        </ion-col>\r\n                        <ion-col>\r\n                            <div class=\"dm-top-nav-tag-text\">活动</div>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </ion-col>\r\n            <ion-col style=\"width:5%\">\r\n                <ion-icon name=\"document\"></ion-icon>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-header>\r\n\r\n<ion-content style=\"overflow:no-display\">\r\n    <ion-slides style=\"height:100%\">\r\n        <ion-slide style=\"height:100%\">\r\n            <div style=\"width:100%; height:100%;overflow:scroll;overflow-y:auto;overflow-x:hidden\">\r\n                <ion-grid>\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            头\r\n                            <br />\r\n                            <img src=\"../assets/img/1png.png\" />\r\n                            <img src=\"../assets/img/1png.png\" />\r\n                            <img src=\"../assets/img/1png.png\" />\r\n                            <img src=\"../assets/img/1png.png\" />\r\n                            <br />\r\n                            尾\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </div>\r\n        </ion-slide>\r\n        <ion-slide style=\"height:100%\">\r\n            <div style=\"width:100%; height:100%;overflow:scroll;overflow-y:auto;overflow-x:hidden\">\r\n                <ion-grid>\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            头\r\n\r\n                            尾\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </div>\r\n        </ion-slide>\r\n    </ion-slides>\r\n</ion-content>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.10.0@tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/_@ionic_angular@4.11.5@@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@8.1.3@@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.1.3@@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/_@angular_common@8.1.3@@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/_@angular_forms@8.1.3@@angular/forms/fesm2015/forms.js");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.page */ "./src/app/page/community/index/index.page.ts");







let IndexPageModule = class IndexPageModule {
};
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



/***/ }),

/***/ "./src/app/page/community/index/index.page.scss":
/*!******************************************************!*\
  !*** ./src/app/page/community/index/index.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0px;\n  padding: 0px;\n}\n\n.dm-top-nav {\n  background-color: #fefbff;\n  height: 70px;\n}\n\n.dm-top-nav ion-toolbar {\n  height: 100%;\n  padding: 0px;\n}\n\n.dm-top-nav ion-toolbar ion-title {\n  height: 70px;\n}\n\n.dm-top-nav-tag {\n  padding-left: 60px;\n  padding-right: 60px;\n  height: 50px;\n}\n\n.dm-top-nav-tag .dm-top-nav-tag-text {\n  font-size: 16px;\n  height: 50px;\n}\n\n.dm-top-nav-tag .dm-top-nav-tag-text.selected {\n  font-size: 20px;\n}\n\n.dm-top-nav-tag .dm-top-nav-tag-text::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  width: 0%;\n  height: 5px;\n  background-color: RGB(139, 195, 54);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  -webkit-transition: all 0.5s;\n}\n\n.dm-top-nav-tag .dm-top-nav-tag-text.selected::after {\n  width: 100%;\n}\n\n.dm-top-nav-ion {\n  font-size: 30px;\n}\n\n.dm-top-nav-ion-last {\n  color: #00ff00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9jb21tdW5pdHkvaW5kZXgvRDpcXGR5bmFtaWNzXFxEQ0VNXFxEQ0VNLkFQUC5Vc2VyQ2VudGVyL3NyY1xcYXBwXFxwYWdlXFxjb21tdW5pdHlcXGluZGV4XFxpbmRleC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2UvY29tbXVuaXR5L2luZGV4L2luZGV4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FER0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNBSjs7QURFSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQVI7O0FERVE7RUFDSSxZQUFBO0FDQVo7O0FES0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBRElJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNGUjs7QURJUTtFQUNJLGVBQUE7QUNGWjs7QURLUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSw0QkFBQTtBQ0haOztBRE1RO0VBQ0ksV0FBQTtBQ0paOztBRFVBO0VBQ0ksZUFBQTtBQ1BKOztBRFVBO0VBQ0ksY0FBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9jb21tdW5pdHkvaW5kZXgvaW5kZXgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLy/pobbpg6jlr7zoiKpcclxuLmRtLXRvcC1uYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NCwyNTEsMjU1KTtcclxuICAgIGhlaWdodDogNzBweDtcclxuXHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuXHJcbiAgICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmRtLXRvcC1uYXYtdGFnIHtcclxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgLmRtLXRvcC1uYXYtdGFnLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSR0IoMTM5LDE5NSw1NCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC41cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuc2VsZWN0ZWQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmRtLXRvcC1uYXYtaW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmRtLXRvcC1uYXYtaW9uLWxhc3Qge1xyXG4gICAgY29sb3I6ICMwMGZmMDA7XHJcbn1cclxuIiwiKiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5kbS10b3AtbmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmJmZjtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuLmRtLXRvcC1uYXYgaW9uLXRvb2xiYXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5kbS10b3AtbmF2IGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGhlaWdodDogNzBweDtcbn1cblxuLmRtLXRvcC1uYXYtdGFnIHtcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uZG0tdG9wLW5hdi10YWcgLmRtLXRvcC1uYXYtdGFnLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5kbS10b3AtbmF2LXRhZyAuZG0tdG9wLW5hdi10YWctdGV4dC5zZWxlY3RlZCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5kbS10b3AtbmF2LXRhZyAuZG0tdG9wLW5hdi10YWctdGV4dDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMCU7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBSR0IoMTM5LCAxOTUsIDU0KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4uZG0tdG9wLW5hdi10YWcgLmRtLXRvcC1uYXYtdGFnLXRleHQuc2VsZWN0ZWQ6OmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kbS10b3AtbmF2LWlvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmRtLXRvcC1uYXYtaW9uLWxhc3Qge1xuICBjb2xvcjogIzAwZmYwMDtcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.10.0@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.1.3@@angular/core/fesm2015/core.js");


let IndexPage = class IndexPage {
    constructor() { }
};
IndexPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: __webpack_require__(/*! raw-loader!./index.page.html */ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/app/page/community/index/index.page.html"),
        styles: [__webpack_require__(/*! ./index.page.scss */ "./src/app/page/community/index/index.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IndexPage);



/***/ })

}]);
//# sourceMappingURL=community-index-index-module-es2015.js.map