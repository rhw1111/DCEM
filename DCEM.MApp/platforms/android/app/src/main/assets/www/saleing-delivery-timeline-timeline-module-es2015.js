(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-delivery-timeline-timeline-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/delivery/timeline/timeline.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/delivery/timeline/timeline.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n\r\n  <!-- 主要内容部分 -->\r\n  <div class=\"timeline-small\">\r\n    <div class=\"timeline-small-body\">\r\n      <ul>\r\n        <li>\r\n          <div class=\"bullet pink\"></div>\r\n          <div class=\"date\">XXXX年XX月XX日</div>\r\n          <div class=\"desc\">\r\n            <h3>内容段落1</h3>\r\n            <h4>内容段落2内容段落2内容段落2内容段落2</h4>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <div class=\"bullet orange\"></div>\r\n          <div class=\"date\">XXXX年XX月XX日</div>\r\n          <div class=\"desc\">\r\n            <h3>内容段落1</h3>\r\n            <h4>内容段落2内容段落2内容段落2内容段落2</h4>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <div class=\"bullet blue\"></div>\r\n          <div class=\"date\">XXXX年XX月XX日</div>\r\n          <div class=\"desc\">\r\n            <h3>内容段落1</h3>\r\n            <h4>内容段落2内容段落2内容段落2内容段落2</h4>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <div class=\"bullet green\"></div>\r\n          <div class=\"date\">XXXX年XX月XX日</div>\r\n          <div class=\"desc\">\r\n            <h3>内容段落1</h3>\r\n            <h4>内容段落2内容段落2内容段落2内容段落2</h4>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div> \r\n</body>"

/***/ }),

/***/ "./src/app/saleing/delivery/timeline/timeline.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/saleing/delivery/timeline/timeline.module.ts ***!
  \**************************************************************/
/*! exports provided: TimelinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePageModule", function() { return TimelinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _timeline_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeline.page */ "./src/app/saleing/delivery/timeline/timeline.page.ts");







const routes = [
    {
        path: '',
        component: _timeline_page__WEBPACK_IMPORTED_MODULE_6__["TimelinePage"]
    }
];
let TimelinePageModule = class TimelinePageModule {
};
TimelinePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_timeline_page__WEBPACK_IMPORTED_MODULE_6__["TimelinePage"]]
    })
], TimelinePageModule);



/***/ }),

/***/ "./src/app/saleing/delivery/timeline/timeline.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/saleing/delivery/timeline/timeline.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timeline-small {\n  max-width: 350px;\n  max-height: 630px;\n  overflow: hidden;\n  margin: 30px auto 0;\n  box-shadow: 0 0 40px #a0a0a0;\n  font-family: 'Open Sans', sans-serif; }\n\n.timeline-small-body ul {\n  padding: 1em 0 0 2em;\n  margin: 0;\n  list-style: none;\n  position: relative; }\n\n.timeline-small-body ul::before {\n  content: ' ';\n  height: 100%;\n  width: 5px;\n  background-color: #d9d9d9;\n  position: absolute;\n  top: 0;\n  left: 2.4em;\n  z-index: -1; }\n\n.timeline-small-body li div {\n  display: inline-block;\n  margin: 1em 0;\n  vertical-align: top; }\n\n.timeline-small-body .bullet {\n  width: 1rem;\n  height: 1rem;\n  box-sizing: border-box;\n  border-radius: 50%;\n  background: #fff;\n  z-index: 1;\n  margin-right: 1rem;\n  margin-top: 7%; }\n\n.timeline-small-body .bullet.pink {\n  background-color: hotpink;\n  border: 3px solid #F93B69; }\n\n.timeline-small-body .bullet.green {\n  background-color: lightseagreen;\n  border: 3px solid #B0E8E2; }\n\n.timeline-small-body .bullet.blue {\n  background-color: aquamarine;\n  border: 3px solid cadetblue; }\n\n.timeline-small-body .bullet.orange {\n  background-color: salmon;\n  border: 3px solid #EB8B6E; }\n\n.timeline-small-body .date {\n  width: 23%;\n  font-size: 0.75em;\n  padding-top: 0.40rem;\n  padding-right: 2rem; }\n\n.timeline-small-body .desc {\n  width: 50%; }\n\n.timeline-small-body h3 {\n  font-size: 0.9em;\n  font-weight: 400;\n  margin: 0; }\n\n.timeline-small-body h4 {\n  margin: 0;\n  font-size: 0.7em;\n  font-weight: 400;\n  color: #808080; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZWluZy9kZWxpdmVyeS90aW1lbGluZS9FOlxcQXBwUHJvamVjdFxcRENFTVxcRENFTS5NQXBwL3NyY1xcYXBwXFxzYWxlaW5nXFxkZWxpdmVyeVxcdGltZWxpbmVcXHRpbWVsaW5lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsb0NBQW9DLEVBQUE7O0FBRXhDO0VBQ0ksb0JBQW9CO0VBQ3BCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFFZjtFQUNJLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSx5QkFBeUI7RUFDekIseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksK0JBQStCO0VBQy9CLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLDRCQUE0QjtFQUM1QiwyQkFBMkIsRUFBQTs7QUFFL0I7RUFDSSx3QkFBd0I7RUFDeEIseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixTQUFTLEVBQUE7O0FBRWI7RUFDSSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zYWxlaW5nL2RlbGl2ZXJ5L3RpbWVsaW5lL3RpbWVsaW5lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lbGluZS1zbWFsbCB7XHJcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNjMwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4ICNhMGEwYTA7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnRpbWVsaW5lLXNtYWxsLWJvZHkgdWwge1xyXG4gICAgcGFkZGluZzogMWVtIDAgMCAyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi50aW1lbGluZS1zbWFsbC1ib2R5IHVsOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyAnO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAyLjRlbTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcbi50aW1lbGluZS1zbWFsbC1ib2R5IGxpIGRpdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG4udGltZWxpbmUtc21hbGwtYm9keSAuYnVsbGV0IHtcclxuICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbn1cclxuLnRpbWVsaW5lLXNtYWxsLWJvZHkgLmJ1bGxldC5waW5rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhvdHBpbms7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRjkzQjY5O1xyXG59XHJcbi50aW1lbGluZS1zbWFsbC1ib2R5IC5idWxsZXQuZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNCMEU4RTI7XHJcbn1cclxuLnRpbWVsaW5lLXNtYWxsLWJvZHkgLmJ1bGxldC5ibHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBjYWRldGJsdWU7XHJcbn1cclxuLnRpbWVsaW5lLXNtYWxsLWJvZHkgLmJ1bGxldC5vcmFuZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2FsbW9uO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI0VCOEI2RTtcclxufVxyXG4udGltZWxpbmUtc21hbGwtYm9keSAuZGF0ZSB7XHJcbiAgICB3aWR0aDogMjMlO1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMC40MHJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbn1cclxuLnRpbWVsaW5lLXNtYWxsLWJvZHkgLmRlc2Mge1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4udGltZWxpbmUtc21hbGwtYm9keSBoMyB7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4udGltZWxpbmUtc21hbGwtYm9keSBoNCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG59ICJdfQ== */"

/***/ }),

/***/ "./src/app/saleing/delivery/timeline/timeline.page.ts":
/*!************************************************************!*\
  !*** ./src/app/saleing/delivery/timeline/timeline.page.ts ***!
  \************************************************************/
/*! exports provided: TimelinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePage", function() { return TimelinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TimelinePage = class TimelinePage {
    constructor() { }
    ngOnInit() {
    }
};
TimelinePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timeline',
        template: __webpack_require__(/*! raw-loader!./timeline.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/delivery/timeline/timeline.page.html"),
        styles: [__webpack_require__(/*! ./timeline.page.scss */ "./src/app/saleing/delivery/timeline/timeline.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TimelinePage);



/***/ })

}]);
//# sourceMappingURL=saleing-delivery-timeline-timeline-module-es2015.js.map