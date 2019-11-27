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

module.exports = "* {\n  margin: 0px;\n  padding: 0px;\n}\n\n.dm-top-nav {\n  background-color: #f4f1f5;\n  height: 70px;\n}\n\n.dm-top-nav ion-grid {\n  height: 100%;\n}\n\n.dm-top-nav ion-grid ion-row {\n  height: 100%;\n}\n\n.dm-top-nav ion-grid ion-row ion-col {\n  height: 100%;\n}\n\n.dm-top-nav .dm-top-nav-ico {\n  width: 50px;\n}\n\n.dm-top-nav .dm-top-nav-ico ion-icon {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 30px;\n  height: 30px;\n  margin: -15px 0 0 -15px;\n}\n\n.dm-top-nav .dm-top-nav-ico.blue ion-icon {\n  color: #3171e0;\n}\n\n.dm-top-nav .dm-top-nav-tag {\n  padding-left: 50px;\n  padding-right: 50px;\n}\n\n.dm-top-nav .dm-top-nav-tag .dm-top-nav-tag-text {\n  font-size: 16px;\n  height: 70px;\n  font-weight: bold;\n  margin: 0 auto;\n  text-align: center;\n  line-height: 70px;\n}\n\n.dm-top-nav .dm-top-nav-tag .dm-top-nav-tag-text.selected {\n  font-size: 20px;\n}\n\n.dm-top-nav .dm-top-nav-tag .dm-top-nav-tag-text::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  width: 0%;\n  height: 5px;\n  background-color: RGB(139, 195, 54);\n  transition: all 0.3s;\n  -webkit-transition: all 0.3s;\n}\n\n.dm-top-nav .dm-top-nav-tag .dm-top-nav-tag-text.selected::after {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9jb21tdW5pdHkvaW5kZXgvQzpcXOW3peS9nFxc6aG555uuXFxhcHBcXERDRU0uQVBQLlVzZXJDZW50ZXIvc3JjXFxhcHBcXHBhZ2VcXGNvbW11bml0eVxcaW5kZXhcXGluZGV4LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS9jb21tdW5pdHkvaW5kZXgvaW5kZXgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURHQTtFQUdJLHlCQUFBO0VBQ0EsWUFIUztBQ0NiOztBRElJO0VBQ0ksWUFBQTtBQ0ZSOztBRElRO0VBQ0ksWUFBQTtBQ0ZaOztBRElZO0VBQ0ksWUFBQTtBQ0ZoQjs7QURPSTtFQUNJLFdBQUE7QUNMUjs7QURPUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDTFo7O0FEU1k7RUFDSSxjQUFBO0FDUGhCOztBRFlJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ1ZSOztBRFlRO0VBQ0ksZUFBQTtFQUNBLFlBMUNDO0VBMkNELGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBOUNDO0FDb0NiOztBRFlZO0VBQ0ksZUFBQTtBQ1ZoQjs7QURhWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7QUNYaEI7O0FEY1k7RUFDSSxXQUFBO0FDWmhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9jb21tdW5pdHkvaW5kZXgvaW5kZXgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLy/pobbpg6jlr7zoiKpcclxuLmRtLXRvcC1uYXYge1xyXG4gICAgJGhlaWdodDogNzBweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LDI0MSwyNDUpO1xyXG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG5cclxuICAgIGlvbi1ncmlkIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIGlvbi1yb3cge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZG0tdG9wLW5hdi1pY28ge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAtMTVweCAwIDAgLTE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmJsdWUge1xyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDQ5LDExMywyMjQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kbS10b3AtbmF2LXRhZyB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgIC5kbS10b3AtbmF2LXRhZy10ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJGhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogUkdCKDEzOSwxOTUsNTQpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5zZWxlY3RlZDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiKiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5kbS10b3AtbmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjFmNTtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuLmRtLXRvcC1uYXYgaW9uLWdyaWQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZG0tdG9wLW5hdiBpb24tZ3JpZCBpb24tcm93IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRtLXRvcC1uYXYgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRtLXRvcC1uYXYgLmRtLXRvcC1uYXYtaWNvIHtcbiAgd2lkdGg6IDUwcHg7XG59XG4uZG0tdG9wLW5hdiAuZG0tdG9wLW5hdi1pY28gaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogLTE1cHggMCAwIC0xNXB4O1xufVxuLmRtLXRvcC1uYXYgLmRtLXRvcC1uYXYtaWNvLmJsdWUgaW9uLWljb24ge1xuICBjb2xvcjogIzMxNzFlMDtcbn1cbi5kbS10b3AtbmF2IC5kbS10b3AtbmF2LXRhZyB7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbn1cbi5kbS10b3AtbmF2IC5kbS10b3AtbmF2LXRhZyAuZG0tdG9wLW5hdi10YWctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG59XG4uZG0tdG9wLW5hdiAuZG0tdG9wLW5hdi10YWcgLmRtLXRvcC1uYXYtdGFnLXRleHQuc2VsZWN0ZWQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uZG0tdG9wLW5hdiAuZG0tdG9wLW5hdi10YWcgLmRtLXRvcC1uYXYtdGFnLXRleHQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogUkdCKDEzOSwgMTk1LCA1NCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmRtLXRvcC1uYXYgLmRtLXRvcC1uYXYtdGFnIC5kbS10b3AtbmF2LXRhZy10ZXh0LnNlbGVjdGVkOjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




let IndexPage = class IndexPage {
    constructor() {
    }
    ngOnInit() {
        this.init();
    }
    init() {
        //�л��¼�tab
        var that = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__(".dm-top-nav-tag").find("div").click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__(".dm-top-nav-tag").find("div").attr("class", "dm-top-nav-tag-text");
            jquery__WEBPACK_IMPORTED_MODULE_3__(this).addClass("selected");
            var index = jquery__WEBPACK_IMPORTED_MODULE_3__(this).parent().index();
            that.ionSlides.slideTo(index);
        });
    }
    //�л��¼�slides
    slideChange($event) {
        // var index = this.ionSlides.getActiveIndex;
        var index = this.ionSlides.getActiveIndex();
        console.log(index);
        console.log(index["__zone_symbol__value"]);
    }
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



/***/ })

}]);
//# sourceMappingURL=community-index-index-module-es2015.js.map