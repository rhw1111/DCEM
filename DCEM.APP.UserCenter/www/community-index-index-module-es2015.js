(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["community-index-index-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/community/index/index.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/community/index/index.page.html ***!
  \********************************************************************************/
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
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

module.exports = "* {\n  margin: 0px;\n  padding: 0px;\n}\n\n.dm-top-nav {\n  background-color: #fefbff;\n  height: 70px;\n}\n\n.dm-top-nav ion-toolbar {\n  height: 100%;\n  padding: 0px;\n}\n\n.dm-top-nav ion-toolbar ion-title {\n  height: 70px;\n}\n\n.dm-top-nav-tag {\n  padding-left: 60px;\n  padding-right: 60px;\n  height: 50px;\n}\n\n.dm-top-nav-tag .dm-top-nav-tag-text {\n  font-size: 16px;\n  height: 50px;\n}\n\n.dm-top-nav-tag .dm-top-nav-tag-text.selected {\n  font-size: 20px;\n}\n\n.dm-top-nav-tag .dm-top-nav-tag-text::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  width: 0%;\n  height: 5px;\n  background-color: RGB(139, 195, 54);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  -webkit-transition: all 0.5s;\n}\n\n.dm-top-nav-tag .dm-top-nav-tag-text.selected::after {\n  width: 100%;\n}\n\n.dm-top-nav-ion {\n  font-size: 30px;\n}\n\n.dm-top-nav-ion-last {\n  color: #00ff00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9jb21tdW5pdHkvaW5kZXgvRDpcXOW3peS9nOebruW9lVxc5b6u6L2v6aG555uuXFzku6PnoIFcXOenu+WKqOerr1xc56e75Yqo56uvKOato+W8j+mhueebrilcXERDRU0uQVBQLlVzZXJDZW50ZXIvc3JjXFxhcHBcXHBhZ2VcXGNvbW11bml0eVxcaW5kZXhcXGluZGV4LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS9jb21tdW5pdHkvaW5kZXgvaW5kZXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREVJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNBUjs7QURFUTtFQUNJLFlBQUE7QUNBWjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRko7O0FESUk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0ZSOztBRElRO0VBQ0ksZUFBQTtBQ0ZaOztBREtRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtFQUNBLDRCQUFBO0FDSFo7O0FETVE7RUFDSSxXQUFBO0FDSlo7O0FEVUE7RUFDSSxlQUFBO0FDUEo7O0FEVUE7RUFDSSxjQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlL2NvbW11bml0eS9pbmRleC9pbmRleC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4vL+mhtumDqOWvvOiIqlxyXG4uZG0tdG9wLW5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LDI1MSwyNTUpO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG5cclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG5cclxuICAgICAgICBpb24tdGl0bGUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZG0tdG9wLW5hdi10YWcge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICAuZG0tdG9wLW5hdi10YWctdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IFJHQigxMzksMTk1LDU0KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5zZWxlY3RlZDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uZG0tdG9wLW5hdi1pb24ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uZG0tdG9wLW5hdi1pb24tbGFzdCB7XHJcbiAgICBjb2xvcjogIzAwZmYwMDtcclxufVxyXG4iLCIqIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmRtLXRvcC1uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmYmZmO1xuICBoZWlnaHQ6IDcwcHg7XG59XG4uZG0tdG9wLW5hdiBpb24tdG9vbGJhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMHB4O1xufVxuLmRtLXRvcC1uYXYgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uZG0tdG9wLW5hdi10YWcge1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5kbS10b3AtbmF2LXRhZyAuZG0tdG9wLW5hdi10YWctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmRtLXRvcC1uYXYtdGFnIC5kbS10b3AtbmF2LXRhZy10ZXh0LnNlbGVjdGVkIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmRtLXRvcC1uYXYtdGFnIC5kbS10b3AtbmF2LXRhZy10ZXh0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IFJHQigxMzksIDE5NSwgNTQpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5kbS10b3AtbmF2LXRhZyAuZG0tdG9wLW5hdi10YWctdGV4dC5zZWxlY3RlZDo6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRtLXRvcC1uYXYtaW9uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uZG0tdG9wLW5hdi1pb24tbGFzdCB7XG4gIGNvbG9yOiAjMDBmZjAwO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IndexPage = class IndexPage {
    constructor() { }
};
IndexPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: __webpack_require__(/*! raw-loader!./index.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/community/index/index.page.html"),
        styles: [__webpack_require__(/*! ./index.page.scss */ "./src/app/page/community/index/index.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IndexPage);



/***/ })

}]);
//# sourceMappingURL=community-index-index-module-es2015.js.map