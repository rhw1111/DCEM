(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-delivery-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/delivery/detail/detail.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/delivery/detail/detail.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/saleing/delivery/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <ion-label>交车单详情</ion-label>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-segment [(ngModel)]=\"tab\" color=\"primary\">\r\n            <ion-segment-button value=\"infolist\" checked (ionSelect)=\"pageOnBind()\">\r\n                <ion-label>基础信息</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"Linklist\" (ionSelect)=\"pageOnLogCalllist()\">\r\n                <ion-label>收款记录</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"Breedlist\" >\r\n                <ion-label>订单跟踪</ion-label>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <div [ngSwitch]=\"tab\">\r\n        <div *ngSwitchCase=\"'infolist'\">\r\n            <ion-card>\r\n                <ion-card-content>\r\n                    <ion-list>\r\n                        <ion-item-group>\r\n                            <ion-item-divider color=\"primary\">\r\n                                <ion-label>基本信息</ion-label>\r\n                            </ion-item-divider>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>VIN</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.vin}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>交车单号</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.code}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>交车状态</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.deliverystatus}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>整车订单号</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.ro}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>结清状态</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.settlestatus}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>交车时间</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.deliveryon}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>预约时间</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.appointmenton}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>客户约定</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.customerrequest}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>厅店应收金额</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.receiptamount}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>是否提交PDI检测</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.submitpdi}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>PDI检测结果</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.pdiapproval}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>PDI检测时间</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.pdidetecton}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>服务顾问</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.serviceproxyid}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                        </ion-item-group>\r\n                    </ion-list>\r\n                </ion-card-content>\r\n            </ion-card>\r\n            <ion-card>\r\n                <ion-card-content>\r\n                    <ion-list>\r\n                        <ion-item-group>\r\n                            <ion-item-divider color=\"primary\">\r\n                                <ion-label>物料信息</ion-label>\r\n                            </ion-item-divider>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>车平台</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{materielmodel.data.cpt}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>基本车型</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{materielmodel.data.jbcx}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>车型年</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{materielmodel.data.cxn}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>动力类型</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{materielmodel.data.dllx}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>内饰颜色</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{materielmodel.data.nsys}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>外饰颜色</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{materielmodel.data.wsys}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                        </ion-item-group>\r\n                    </ion-list>\r\n                </ion-card-content>\r\n            </ion-card>\r\n          \r\n        </div>\r\n        <div *ngSwitchCase=\"'Linklist'\">\r\n            <ion-list lines=\"full\">\r\n                <ion-item-sliding *ngFor=\"let item of orderpaymodel.orderpayrecords;let key=index\">\r\n                    <ion-item [routerLink]=\"['/saleing/orderpaydetail/detail']\" [queryParams]=\"{id:item.id}\">\r\n                        <ion-icon slot=\"start\" color=\"primary\" name=\"cash\" size=\"large\"></ion-icon>\r\n                        <ion-label>\r\n                            <h2>{{item.code}}</h2>\r\n                            <p>{{item.amount}}</p>\r\n                            <p>{{item.createdon}}</p>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\">\r\n                            {{item.type}}\r\n                        </ion-note>\r\n                    </ion-item>\r\n                    <ion-item-options side=\"end\">\r\n                        <ion-item-option color=\"tertiary\" expandable [routerLink]=\"['/saleing/orderpaydetail/detail']\"\r\n                            [queryParams]=\"{id:item.id}\">\r\n                            详情\r\n                        </ion-item-option>\r\n                    </ion-item-options>\r\n                </ion-item-sliding>\r\n            </ion-list>\r\n            <ion-label *ngIf=\"this.orderpaymodel.isending\" text-center>\r\n                <p>\r\n                    没有更多的记录显示啦\r\n                </p>\r\n            </ion-label>\r\n            <ion-infinite-scroll #myInfiniteScroll threshold=\"100px\" (ionInfinite)=\"doLoading($event)\">\r\n                <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载更多...\">\r\n                </ion-infinite-scroll-content>\r\n            </ion-infinite-scroll>\r\n        </div>\r\n        <div *ngSwitchCase=\"'Breedlist'\">\r\n            <ion-card>\r\n                <ion-card-content>\r\n                    <ion-list>\r\n                        <ion-item-group>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>VIN</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.vin}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>交车单号</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.code}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>整车订单号</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.ro}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                        </ion-item-group>\r\n                    </ion-list>\r\n                </ion-card-content>\r\n            </ion-card>\r\n\r\n            <ion-card>\r\n                <ion-card-content>\r\n            <Steps [size]=\"'small'\"  [current]=\"5\">\r\n                <Step  [title]=\"'PDI检测未提交'\"></Step> \r\n                <Step  [icon]=\"ellipsis\" [description]=\"deliverorderflowmodel.model.issubmitpdi\"></Step> \r\n                <Step [title]=\"'PDI检测已提交'\"></Step>\r\n                <Step  [icon]=\"ellipsis\" [description]=\"deliverorderflowmodel.model.pdisubmittime\"></Step> \r\n                <Step [title]=\"'PDI检测完成'\"></Step>\r\n                <Step  [icon]=\"ellipsis\" [description]=\"deliverorderflowmodel.model.pditime\"></Step> \r\n                <Step [title]=\"'预约完成'\"></Step>\r\n                <Step   [icon]=\"ellipsis\" [description]=\"deliverorderflowmodel.model.appointmenton\"></Step> \r\n                <Step [title]=\"'已收尾款'\" ></Step>\r\n                <Step  [icon]=\"ellipsis\" [description]=\"deliverorderflowmodel.model.settlestatus\"></Step> \r\n                <Step  [icon]=\"ellipsis\" [description]=\"deliverorderflowmodel.model.receipton\"></Step> \r\n                <Step [title]=\"'交车完成'\" ></Step>\r\n                <Step  [icon]=\"ellipsis\" [description]=\"deliverorderflowmodel.model.deliveryon\"></Step> \r\n            </Steps>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </div> \r\n    </div>\r\n    <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\r\n        <ion-fab-button>\r\n            <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n        </ion-fab-button>\r\n        <ion-fab-list side=\"top\">\r\n            <ion-fab-button *ngIf=\"model.status==2\" color=\"primary\" style=\"width:60px;\"\r\n                [routerLink]=\"['/saleing/delivery/pdiservice']\" [queryParams]=\"{id:model.id}\">PDI检测\r\n            </ion-fab-button>\r\n            <ion-fab-button *ngIf=\"model.status==3\" color=\"success\" style=\"width:60px;\"\r\n                [routerLink]=\"['/saleing/delivery/appointment']\" [queryParams]=\"{id:model.id}\">预约交车\r\n            </ion-fab-button>\r\n            <ion-fab-button color=\"danger\" *ngIf=\"model.settles==0\" style=\"width:60px;\"\r\n                [routerLink]=\"['/saleing/orderpaydetail/edit']\" [queryParams]=\"{id:model.id}\">\r\n                收取尾款</ion-fab-button>\r\n            <ion-fab-button color=\"dark\" *ngIf=\"model.status==4\" style=\"width:60px;\"\r\n                (click)=\"presentAlertConfim()\">\r\n                收款完成\r\n            </ion-fab-button>\r\n        </ion-fab-list>\r\n    </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/saleing/delivery/detail/detail.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/saleing/delivery/detail/detail.module.ts ***!
  \**********************************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/saleing/delivery/detail/detail.page.ts");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/fesm5/ng-zorro-antd-mobile.js");








var routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]
    }
];
var DetailPageModule = /** @class */ (function () {
    function DetailPageModule() {
    }
    DetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdMobileModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
        })
    ], DetailPageModule);
    return DetailPageModule;
}());



/***/ }),

/***/ "./src/app/saleing/delivery/detail/detail.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/saleing/delivery/detail/detail.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timeline-small {\n  max-width: 350px;\n  max-height: 630px;\n  overflow: hidden;\n  margin: 30px auto 0;\n  box-shadow: 0 0 40px #a0a0a0;\n  font-family: 'Open Sans', sans-serif; }\n\n.timeline-small-body ul {\n  padding: 1em 0 0 2em;\n  margin: 0;\n  list-style: none;\n  position: relative; }\n\n.timeline-small-body ul::before {\n  content: ' ';\n  height: 100%;\n  width: 5px;\n  background-color: #d9d9d9;\n  position: absolute;\n  top: 0;\n  left: 2.4em;\n  z-index: 0; }\n\n.timeline-small-body li div {\n  display: inline-block;\n  margin: 1em 0;\n  vertical-align: top; }\n\n.timeline-small-body .bullet {\n  width: 1rem;\n  height: 1rem;\n  box-sizing: border-box;\n  border-radius: 50%;\n  background: #fff;\n  z-index: 1;\n  margin-right: 1rem;\n  margin-top: 7%; }\n\n.timeline-small-body .bullet.pink {\n  background-color: hotpink;\n  border: 3px solid #F93B69; }\n\n.timeline-small-body .bullet.green {\n  background-color: lightseagreen;\n  border: 3px solid #B0E8E2; }\n\n.timeline-small-body .bullet.blue {\n  background-color: aquamarine;\n  border: 3px solid cadetblue; }\n\n.timeline-small-body .bullet.orange {\n  background-color: salmon;\n  border: 3px solid #EB8B6E; }\n\n.timeline-small-body .date {\n  width: 30%;\n  font-size: 0.75em;\n  padding-top: 0.40rem;\n  padding-right: 1rem; }\n\n.timeline-small-body .desc {\n  width: 60%; }\n\n.timeline-small-body h3 {\n  font-size: 0.9em;\n  font-weight: 400;\n  margin: 0; }\n\n.timeline-small-body h4 {\n  margin: 0;\n  font-size: 0.7em;\n  font-weight: 400;\n  color: #808080; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZWluZy9kZWxpdmVyeS9kZXRhaWwvRTpcXEFwcFByb2plY3RcXERDRU1cXERDRU0uTUFwcC9zcmNcXGFwcFxcc2FsZWluZ1xcZGVsaXZlcnlcXGRldGFpbFxcZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsb0NBQW9DLEVBQUE7O0FBRXhDO0VBQ0ksb0JBQW9CO0VBQ3BCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFFZDtFQUNJLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSx5QkFBeUI7RUFDekIseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksK0JBQStCO0VBQy9CLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLDRCQUE0QjtFQUM1QiwyQkFBMkIsRUFBQTs7QUFFL0I7RUFDSSx3QkFBd0I7RUFDeEIseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixTQUFTLEVBQUE7O0FBRWI7RUFDSSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zYWxlaW5nL2RlbGl2ZXJ5L2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbWVsaW5lLXNtYWxsIHtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MzBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggI2EwYTBhMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4udGltZWxpbmUtc21hbGwtYm9keSB1bCB7XHJcbiAgICBwYWRkaW5nOiAxZW0gMCAwIDJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnRpbWVsaW5lLXNtYWxsLWJvZHkgdWw6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnICc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDIuNGVtO1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG4udGltZWxpbmUtc21hbGwtYm9keSBsaSBkaXYge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAxZW0gMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuLnRpbWVsaW5lLXNtYWxsLWJvZHkgLmJ1bGxldCB7XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGhlaWdodDogMXJlbTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDclO1xyXG59XHJcbi50aW1lbGluZS1zbWFsbC1ib2R5IC5idWxsZXQucGluayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI0Y5M0I2OTtcclxufVxyXG4udGltZWxpbmUtc21hbGwtYm9keSAuYnVsbGV0LmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjQjBFOEUyO1xyXG59XHJcbi50aW1lbGluZS1zbWFsbC1ib2R5IC5idWxsZXQuYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgY2FkZXRibHVlO1xyXG59XHJcbi50aW1lbGluZS1zbWFsbC1ib2R5IC5idWxsZXQub3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNFQjhCNkU7XHJcbn1cclxuLnRpbWVsaW5lLXNtYWxsLWJvZHkgLmRhdGUge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNDByZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG59XHJcbi50aW1lbGluZS1zbWFsbC1ib2R5IC5kZXNjIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuLnRpbWVsaW5lLXNtYWxsLWJvZHkgaDMge1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLnRpbWVsaW5lLXNtYWxsLWJvZHkgaDQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzgwODA4MDtcclxufSAiXX0= */"

/***/ }),

/***/ "./src/app/saleing/delivery/detail/detail.page.ts":
/*!********************************************************!*\
  !*** ./src/app/saleing/delivery/detail/detail.page.ts ***!
  \********************************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/logininfo.storage */ "./src/app/base/base.ser/logininfo.storage.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var DetailPage = /** @class */ (function () {
    function DetailPage(_http, _page, activeRoute, _userinfo, alertController) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this._userinfo = _userinfo;
        this.alertController = alertController;
        this.tab = "infolist";
        this.model = {
            apiUrlDetail: '/api/delivery/get',
            id: "",
            status: -1,
            settles: 0,
            info: {
                vin: "",
                code: "",
                deliverystatus: "",
                ro: "",
                settlestatus: "",
                deliveryon: "",
                appointmenton: "",
                customerrequest: "",
                receiptamount: "",
                submitpdi: "",
                submitpdion: "",
                pdiapproval: "",
                pdidetecton: "",
                serviceproxyid: ""
            }
        };
        this.orderpaymodel = {
            apiUrlDetailOrderPay: '/api/delivery/getcollections',
            orderpayrecords: [],
            isending: false,
            search: {
                pageindex: 1,
                pagesize: 10,
                userId: this._userinfo.GetSystemUserId(),
                DeliveryId: ""
            }
        };
        this.materielmodel = {
            apiUrl: '/api/delivery/getmateriel',
            materielId: "",
            data: {
                cpt: "",
                jbcx: "",
                cxn: "",
                dllx: "",
                nsys: "",
                wsys: ""
            }
        };
        this.moneycompletedmodel = {
            apiUrl: '/api/delivery/moneycompleted',
            data: {
                Id: "",
            }
        };
        this.deliverorderflowmodel = {
            apiUrl: '/api/delivery/getdeliverorderflow',
            status: 10,
            model: {}
        };
    }
    DetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParams.subscribe(function (data) {
            if (data['id'] != null && data['id'] != undefined) {
                _this.model.id = data['id'];
                _this.orderpaymodel.search.DeliveryId = data['id'];
                _this.moneycompletedmodel.data.Id = data['id'];
                _this.pageOnBind();
            }
        });
    };
    //获取交车单基础信息
    DetailPage.prototype.pageOnBind = function () {
        var _this = this;
        this._page.loadingShow();
        this._http.postForToaken(this.model.apiUrlDetail, { 'id': this.model.id, 'userid': this._userinfo.GetSystemUserId() }, function (res) {
            if (res !== null) {
                var attr = res["Attributes"];
                _this.model.info.vin = attr["_mcs_vin_value@OData.Community.Display.V1.FormattedValue"];
                _this.model.info.code = attr["mcs_code"];
                _this.model.info.deliverystatus = attr["mcs_deliverystatus@OData.Community.Display.V1.FormattedValue"];
                _this.model.status = attr["mcs_deliverystatus"];
                _this.model.settles = attr["mcs_settlestatus"];
                _this.model.info.ro = attr["_mcs_vehorder_value@OData.Community.Display.V1.FormattedValue"];
                _this.model.info.settlestatus = attr["mcs_settlestatus@OData.Community.Display.V1.FormattedValue"];
                _this.model.info.deliveryon = attr["mcs_deliveryon@OData.Community.Display.V1.FormattedValue"];
                _this.model.info.appointmenton = attr["mcs_appointmenton@OData.Community.Display.V1.FormattedValue"];
                _this.model.info.customerrequest = attr["mcs_customerrequest"];
                _this.model.info.receiptamount = attr["mcs_receiptamount@OData.Community.Display.V1.FormattedValue"];
                _this.model.info.submitpdi = attr["mcs_submitpdi@OData.Community.Display.V1.FormattedValue"];
                _this.model.info.submitpdion = attr["mcs_submitpdion@OData.Community.Display.V1.FormattedValue"];
                _this.model.info.pdiapproval = attr["mcs_pdiapproval@OData.Community.Display.V1.FormattedValue"];
                _this.model.info.pdidetecton = attr["mcs_pdidetecton@OData.Community.Display.V1.FormattedValue"];
                _this.model.info.serviceproxyid = attr["_mcs_serviceproxyid_value@OData.Community.Display.V1.FormattedValue"];
                _this.materielmodel.materielId = attr["_mcs_vehmaterial_value"];
                //交车单跟踪详情 
                _this.deliverorderflowmodel.model["issubmitpdi"] = "是否提交pdi检测:" + attr["mcs_submitpdi@OData.Community.Display.V1.FormattedValue"]; //是否提交pdi检测
                _this.deliverorderflowmodel.model["pdisubmittime"] = "PDI检测提交时间:" + attr["mcs_submitpdion@OData.Community.Display.V1.FormattedValue"]; //PDI检测提交时间
                _this.deliverorderflowmodel.model["pditime"] = "PDI检测时间:" + attr["mcs_pdidetecton@OData.Community.Display.V1.FormattedValue"]; //PDI检测时间
                _this.deliverorderflowmodel.model["appointmenton"] = "预约时间:" + attr["mcs_appointmenton@OData.Community.Display.V1.FormattedValue"]; //预约时间
                _this.deliverorderflowmodel.model["settlestatus"] = "结清状态:" + attr["mcs_settlestatus@OData.Community.Display.V1.FormattedValue"]; //结清状态
                _this.deliverorderflowmodel.model["receipton"] = "收尾款时间:" + attr["mcs_receipton@OData.Community.Display.V1.FormattedValue"];
                _this.deliverorderflowmodel.model["deliveryon"] = "交车时间:" + attr["mcs_deliveryon@OData.Community.Display.V1.FormattedValue"]; //交车时间
                var submitpdi = attr["mcs_submitpdi"];
                if (!submitpdi) {
                    _this.deliverorderflowmodel.status = 2;
                }
                else {
                    _this.deliverorderflowmodel.status = 4;
                }
                if (_this.model.status == 3) {
                    _this.deliverorderflowmodel.status = 6;
                }
                if (_this.model.status == 4) {
                    _this.deliverorderflowmodel.status = 8;
                }
                if (_this.model.status == 5) {
                    _this.deliverorderflowmodel.status = 11;
                }
                if (_this.model.status == 7) {
                    _this.deliverorderflowmodel.status = 13;
                }
                //结清状态
                _this.pageOnActivitylist();
            }
            else {
                _this._page.alert("消息提示", "交车单详情加载异常");
            }
            _this._page.loadingHide();
        }, function (err) {
            _this._page.alert("消息提示", "交车单详情加载异常");
            _this._page.loadingHide();
        });
    };
    //收款记录
    DetailPage.prototype.pageOnLogCalllist = function () {
        if (this.orderpaymodel.orderpayrecords.length == 0) {
            this.pageOnlist(null);
        }
    };
    //加载下一页
    DetailPage.prototype.doLoading = function (event) {
        this.orderpaymodel.search.pageindex++;
        this.orderpaymodel.isending = false;
        this.pageOnlist(event);
    };
    //获取交车单收款记录
    DetailPage.prototype.pageOnlist = function (event) {
        var _this = this;
        this._page.loadingShow();
        this._http.postForToaken(this.orderpaymodel.apiUrlDetailOrderPay, this.orderpaymodel.search, function (res) {
            if (res.Results !== null) {
                var data = res.Collections;
                for (var i in data) {
                    var attr = data[i]["Attributes"];
                    var obj = {};
                    obj["id"] = data[i]["Id"];
                    obj["code"] = attr["mcs_code"];
                    obj["type"] = attr["mcs_paycategory@OData.Community.Display.V1.FormattedValue"];
                    obj["amount"] = attr["mcs_amount@OData.Community.Display.V1.FormattedValue"];
                    obj["createdon"] = attr["createdon@OData.Community.Display.V1.FormattedValue"];
                    _this.orderpaymodel.orderpayrecords.push(obj);
                }
                event ? event.target.complete() : '';
                if (data.length < _this.orderpaymodel.search.pagesize) {
                    event ? event.target.disabled = true : "";
                    _this.orderpaymodel.isending = true;
                }
                _this._page.loadingHide();
            }
            else {
                _this._page.alert("消息提示", "原始线索数据加载异常");
            }
            _this._page.loadingHide();
        }, function (err) {
            _this._page.alert("消息提示", "原始线索数据加载异常");
            _this._page.loadingHide();
        });
    };
    //整车物料
    DetailPage.prototype.pageOnActivitylist = function () {
        var _this = this;
        this._http.postForToaken(this.materielmodel.apiUrl, { 'materielId': this.materielmodel.materielId }, function (res) {
            if (res !== null) {
                var attr = res["Attributes"];
                _this.materielmodel.data.cpt = attr["_mcs_carplatformid_value@OData.Community.Display.V1.FormattedValue"];
                _this.materielmodel.data.jbcx = attr["_mcs_carmodelid_value@OData.Community.Display.V1.FormattedValue"];
                _this.materielmodel.data.cxn = attr["mcs_caryear@OData.Community.Display.V1.FormattedValue"];
                _this.materielmodel.data.dllx = attr["_mcs_powertypeid_value@OData.Community.Display.V1.FormattedValue"];
                _this.materielmodel.data.nsys = attr["_mcs_incolourid_value@OData.Community.Display.V1.FormattedValue"];
                _this.materielmodel.data.wsys = attr["_mcs_excolourid_value@OData.Community.Display.V1.FormattedValue"];
            }
        });
    };
    //收款完成
    DetailPage.prototype.presentAlertConfim = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '订单收款完成',
                            message: '确定收款完成吗？',
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }, {
                                    text: '确定',
                                    handler: function () {
                                        _this._page.loadingShow();
                                        _this._http.postForToaken(_this.moneycompletedmodel.apiUrl, _this.moneycompletedmodel.data, function (res) {
                                            if (res !== null) {
                                                debugger;
                                                if (res.Result) {
                                                    _this._page.alert("消息提示", "交车单收款完成！", function () {
                                                        //跳转到开票记录 
                                                    });
                                                }
                                                else {
                                                    _this._page.alert("消息提示", res.Description);
                                                }
                                            }
                                            _this._page.loadingHide();
                                        }, function (err) {
                                            _this._page.loadingHide();
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailPage.ctorParameters = function () { return [
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__["Storage_LoginInfo"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
    ]; };
    DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/delivery/detail/detail.page.html"),
            styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/saleing/delivery/detail/detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__["Storage_LoginInfo"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], DetailPage);
    return DetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=saleing-delivery-detail-detail-module-es5.js.map