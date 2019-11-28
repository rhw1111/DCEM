(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-mc-vehorder-com-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/mc-vehorder.com/detail/detail.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/mc-vehorder.com/detail/detail.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"返回\" defaultHref=\"/saleing/vehorder/list\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>整车订单详情</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button></ion-menu-button>\r\n  </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-segment [(ngModel)]=\"tab\">\r\n      <ion-segment-button value=\"baseinfo\" checked >\r\n        <ion-label>基础信息</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"rightitemuselist\" (click)=\"GetList()\">\r\n        <ion-label>权益项</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"vehordertracklist\">\r\n        <ion-label>透明化状态</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div [ngSwitch]=\"tab\">\r\n    <div *ngSwitchCase=\"'baseinfo'\">\r\n      <ion-list lines=\"full\">\r\n        <ion-item-divider color=\"primary\">\r\n          <ion-label>\r\n            基础信息\r\n          </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              订单编码\r\n            </h2>\r\n            <p>{{model.data.mcs_code}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              综合订单号\r\n            </h2>\r\n            <p>{{model.data.mcs_mallordercode}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              商城订单号\r\n            </h2>\r\n            <p>{{model.data.mcs_shopcode}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              商城下单时间\r\n            </h2>\r\n            <p>{{model.data.mcs_orderon}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              订单来源\r\n            </h2>\r\n            <p>{{model.data.mcs_ordersource}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              锁车VIN\r\n            </h2>\r\n            <p>{{model.data.mcs_stockvin}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              交车VIN\r\n            </h2>\r\n            <p>{{model.data.mcs_deliveryvin}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              交车时间\r\n            </h2>\r\n            <p>{{model.data.mcs_deliveryon}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              标准价格\r\n            </h2>\r\n            <p>{{model.data.mcs_stdprice}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              应收金额\r\n            </h2>\r\n            <p>{{model.data.mcs_totalamount}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              尾款\r\n            </h2>\r\n            <p>{{model.data.mcs_receiptamount}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              定金\r\n            </h2>\r\n            <p>{{model.data.mcs_earnest}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              缴定金时间\r\n            </h2>\r\n            <p>{{model.data.mcs_paydepositon}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item-divider color=\"primary\">\r\n          <ion-label>\r\n            客户信息\r\n          </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              购车人\r\n            </h2>\r\n            <p>{{model.data.mcs_contactname}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              购车人手机\r\n            </h2>\r\n            <p>{{model.data.mcs_contactphone}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              证件号\r\n            </h2>\r\n            <p>{{model.data.mcs_idcard}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              用户ID\r\n            </h2>\r\n            <p>{{model.data.mcs_contactid}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item-divider color=\"primary\">\r\n          <ion-label>\r\n            审核信息\r\n          </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              审核状态\r\n            </h2>\r\n            <p>{{model.data.mcs_approvalstatus}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              审批人\r\n            </h2>\r\n            <p>{{model.data.mcs_approvaler}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              审批意见\r\n            </h2>\r\n            <p>{{model.data.mcs_msg}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              通过时间\r\n            </h2>\r\n            <p>{{model.data.mcs_approvalon2}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              取消时间\r\n            </h2>\r\n            <p>{{model.data.mcs_cancelorderon}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>\r\n              取消原因\r\n            </h2>\r\n            <p>{{model.data.mcs_canceldesc}}&nbsp;</p>\r\n          </ion-label>\r\n        </ion-item>\r\n   \r\n      </ion-list>\r\n    </div>\r\n    <div *ngSwitchCase=\"'rightitemuselist'\">\r\n      <ion-list lines=\"full\">\r\n          <ion-item-sliding *ngFor=\"let item of model.RightitemuseList\">\r\n              <ion-item >\r\n                  <ion-icon slot=\"start\" name=\"hammer\" size=\"large\"></ion-icon>\r\n                  <ion-label>\r\n                    <h3>{{item.mcs_name}}</h3>\r\n                    <p>{{item.mcs_code}}</p>\r\n                  </ion-label>\r\n                  <ion-note>\r\n                    <p>{{item.mcs_amount}}</p>\r\n                  </ion-note>\r\n                </ion-item>                              \r\n          </ion-item-sliding>\r\n           <ion-label *ngIf=\"model.RightitemuseList.length==0\" text-center> \r\n            <p>\r\n              没有更多的记录显示啦\r\n           </p>\r\n          </ion-label>\r\n      </ion-list>\r\n    </div>\r\n    <div *ngSwitchCase=\"'vehordertracklist'\">\r\n      <ion-list lines=\"full\">\r\n       <!-- <ion-item-sliding *ngFor=\"let item of model.VehordertrackList\">\r\n          <ion-item >\r\n              <ion-icon slot=\"start\" name=\"arrow-round-down\" size=\"large\"></ion-icon>\r\n              <ion-label>\r\n                <h3>{{item.mcs_optionon}}</h3>             \r\n              </ion-label>\r\n              <ion-note>\r\n                <p>{{item.mcs_rostatus}}</p>\r\n              </ion-note>\r\n            </ion-item>          \r\n       </ion-item-sliding>  -->\r\n       <ion-card>\r\n        <ion-card-content>\r\n        <Steps [size]=\"'small'\" [current]=\"2\" *ngFor=\"let item of model.VehordertrackList\">\r\n          <Step [title]=\"item.mcs_rostatus\" [description]=\"item.mcs_optionon\"></Step>\r\n         \r\n        </Steps>\r\n       </ion-card-content>\r\n     </ion-card> \r\n       <ion-label *ngIf=\"model.VehordertrackList.length==0\">\r\n         <p>\r\n          没有更多的记录显示啦\r\n        </p>\r\n        </ion-label>\r\n      </ion-list>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/saleing/mc-vehorder.com/detail/detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/saleing/mc-vehorder.com/detail/detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/saleing/mc-vehorder.com/detail/detail.page.ts");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/fesm2015/ng-zorro-antd-mobile.js");







//import { NzTimelineModule } from 'ng-zorro-antd/timeline';

const routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]
    }
];
let DetailPageModule = class DetailPageModule {
};
DetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            //NzTimelineModule,
            ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdMobileModule"]
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })
], DetailPageModule);



/***/ }),

/***/ "./src/app/saleing/mc-vehorder.com/detail/detail.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/saleing/mc-vehorder.com/detail/detail.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timeline-small {\n  max-width: 350px;\n  max-height: 630px;\n  overflow: hidden;\n  margin: 30px auto 0;\n  box-shadow: 0 0 40px #a0a0a0;\n  font-family: 'Open Sans', sans-serif; }\n\n.timeline-small-body ul {\n  padding: 1em 0 0 2em;\n  margin: 0;\n  list-style: none;\n  position: relative; }\n\n.timeline-small-body ul::before {\n  content: ' ';\n  height: 100%;\n  width: 5px;\n  background-color: #d9d9d9;\n  position: absolute;\n  top: 0;\n  left: 2.4em;\n  z-index: 0; }\n\n.timeline-small-body li div {\n  display: inline-block;\n  margin: 1em 0;\n  vertical-align: top; }\n\n.timeline-small-body .bullet {\n  width: 1rem;\n  height: 1rem;\n  box-sizing: border-box;\n  border-radius: 50%;\n  background: #fff;\n  z-index: 1;\n  margin-right: 1rem;\n  margin-top: 7%; }\n\n.timeline-small-body .bullet.pink {\n  background-color: hotpink;\n  border: 3px solid #F93B69; }\n\n.timeline-small-body .bullet.green {\n  background-color: lightseagreen;\n  border: 3px solid #B0E8E2; }\n\n.timeline-small-body .bullet.blue {\n  background-color: aquamarine;\n  border: 3px solid cadetblue; }\n\n.timeline-small-body .bullet.orange {\n  background-color: salmon;\n  border: 3px solid #EB8B6E; }\n\n.timeline-small-body .date {\n  width: 30%;\n  font-size: 0.75em;\n  padding-top: 0.40rem;\n  padding-right: 1rem; }\n\n.timeline-small-body .desc {\n  width: 60%; }\n\n.timeline-small-body h3 {\n  font-size: 0.9em;\n  font-weight: 400;\n  margin: 0; }\n\n.timeline-small-body h4 {\n  margin: 0;\n  font-size: 0.7em;\n  font-weight: 400;\n  color: #808080; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZWluZy9tYy12ZWhvcmRlci5jb20vZGV0YWlsL0U6XFxBcHBQcm9qZWN0XFxEQ0VNXFxEQ0VNLk1BcHAvc3JjXFxhcHBcXHNhbGVpbmdcXG1jLXZlaG9yZGVyLmNvbVxcZGV0YWlsXFxkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixvQ0FBb0MsRUFBQTs7QUFFeEM7RUFDSSxvQkFBb0I7RUFDcEIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUVkO0VBQ0kscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLHlCQUF5QjtFQUN6Qix5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSwrQkFBK0I7RUFDL0IseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksNEJBQTRCO0VBQzVCLDJCQUEyQixFQUFBOztBQUUvQjtFQUNJLHdCQUF3QjtFQUN4Qix5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFNBQVMsRUFBQTs7QUFFYjtFQUNJLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvbWMtdmVob3JkZXIuY29tL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbWVsaW5lLXNtYWxsIHtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MzBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggI2EwYTBhMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4udGltZWxpbmUtc21hbGwtYm9keSB1bCB7XHJcbiAgICBwYWRkaW5nOiAxZW0gMCAwIDJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnRpbWVsaW5lLXNtYWxsLWJvZHkgdWw6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnICc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDIuNGVtO1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG4udGltZWxpbmUtc21hbGwtYm9keSBsaSBkaXYge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAxZW0gMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuLnRpbWVsaW5lLXNtYWxsLWJvZHkgLmJ1bGxldCB7XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGhlaWdodDogMXJlbTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDclO1xyXG59XHJcbi50aW1lbGluZS1zbWFsbC1ib2R5IC5idWxsZXQucGluayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI0Y5M0I2OTtcclxufVxyXG4udGltZWxpbmUtc21hbGwtYm9keSAuYnVsbGV0LmdyZWVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjQjBFOEUyO1xyXG59XHJcbi50aW1lbGluZS1zbWFsbC1ib2R5IC5idWxsZXQuYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgY2FkZXRibHVlO1xyXG59XHJcbi50aW1lbGluZS1zbWFsbC1ib2R5IC5idWxsZXQub3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNFQjhCNkU7XHJcbn1cclxuLnRpbWVsaW5lLXNtYWxsLWJvZHkgLmRhdGUge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNDByZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG59XHJcbi50aW1lbGluZS1zbWFsbC1ib2R5IC5kZXNjIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuLnRpbWVsaW5lLXNtYWxsLWJvZHkgaDMge1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLnRpbWVsaW5lLXNtYWxsLWJvZHkgaDQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzgwODA4MDtcclxufSAiXX0= */"

/***/ }),

/***/ "./src/app/saleing/mc-vehorder.com/detail/detail.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/saleing/mc-vehorder.com/detail/detail.page.ts ***!
  \***************************************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! silly-datetime */ "./node_modules/silly-datetime/dest/index.js");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(silly_datetime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_base_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../base/base.ser/optionset.service */ "./src/app/base/base.ser/optionset.service.ts");






let DetailPage = class DetailPage {
    constructor(_http, _page, activeRoute, optionset) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this.optionset = optionset;
        this.tab = "baseinfo";
        this.model = {
            apiUrlInfo: '/api/vehorder/GetVehorderDetail',
            apiRightsUrl: '/api/MemberRights/GetMemberRightsList',
            data: {
                mcs_code: "",
                mcs_vehorderid: "",
                mcs_mallordercode: "",
                mcs_shopcode: "",
                mcs_orderon: "",
                mcs_ordersource: "",
                mcs_stockvin: "",
                mcs_deliveryvin: "",
                mcs_deliveryon: "",
                mcs_stdprice: "",
                mcs_totalamount: "",
                mcs_receiptamount: "",
                mcs_earnest: "",
                mcs_paydepositon: "",
                mcs_contactname: "",
                mcs_contactphone: "",
                mcs_idcard: "",
                mcs_contactid: "",
                mcs_approvalstatus: "",
                mcs_approvaler: "",
                mcs_msg: "",
                mcs_approvalon2: "",
                mcs_cancelorderon: "",
                mcs_canceldesc: "" //取消原因
            },
            VehordertrackList: [],
            RightitemuseList: []
        };
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.model.data.mcs_vehorderid = params['id'];
                this.pageOnBind(params['id']);
            }
        });
    }
    //加载厅店整车订单详情
    pageOnBind(id) {
        //debugger;
        this._page.loadingShow();
        this._http.get(this.model.apiUrlInfo, {
            params: {
                mcs_vehorderid: this.model.data.mcs_vehorderid,
            }
        }, (res) => {
            //debugger;
            //绑定基本信息
            if (res.VehorderInfo !== null) {
                this.model.data.mcs_code = res["VehorderInfo"]["Attributes"]["mcs_code"];
                this.model.data.mcs_mallordercode = res["VehorderInfo"]["Attributes"]["mcs_mallordercode"];
                this.model.data.mcs_shopcode = res["VehorderInfo"]["Attributes"]["mcs_shopcode"];
                this.model.data.mcs_orderon = this.FormatToDateTime(res["VehorderInfo"]["Attributes"]["mcs_orderon"]);
                this.model.data.mcs_ordersource = res["VehorderInfo"]["Attributes"]["mcs_ordersource"];
                this.model.data.mcs_stockvin = res["VehorderInfo"]["Attributes"]["_mcs_stockvin_value@OData.Community.Display.V1.FormattedValue"];
                this.model.data.mcs_deliveryvin = res["VehorderInfo"]["Attributes"]["_mcs_deliveryvin_value@OData.Community.Display.V1.FormattedValue"];
                this.model.data.mcs_deliveryon = this.FormatToDateTime(res["VehorderInfo"]["Attributes"]["mcs_deliveryon"]);
                this.model.data.mcs_stdprice = res["VehorderInfo"]["Attributes"]["mcs_stdprice"];
                this.model.data.mcs_totalamount = res["VehorderInfo"]["Attributes"]["mcs_totalamount"];
                this.model.data.mcs_receiptamount = res["VehorderInfo"]["Attributes"]["mcs_receiptamount"];
                this.model.data.mcs_earnest = res["VehorderInfo"]["Attributes"]["mcs_earnest"];
                this.model.data.mcs_paydepositon = this.FormatToDateTime(res["VehorderInfo"]["Attributes"]["mcs_paydepositon"]);
                this.model.data.mcs_contactname = res["VehorderInfo"]["Attributes"]["mcs_contactname"];
                this.model.data.mcs_contactphone = res["VehorderInfo"]["Attributes"]["mcs_contactphone"];
                this.model.data.mcs_idcard = res["VehorderInfo"]["Attributes"]["mcs_idcard"];
                this.model.data.mcs_contactid = res["VehorderInfo"]["Attributes"]["mcs_contactid"];
                this.model.data.mcs_approvalstatus = this.optionset.GetOptionSetNameByValue("mcs_approvalstatus", res["VehorderInfo"]["Attributes"]["mcs_approvalstatus"]);
                this.model.data.mcs_approvaler = res["VehorderInfo"]["Attributes"]["_mcs_approvaler_value@OData.Community.Display.V1.FormattedValue"];
                this.model.data.mcs_msg = res["VehorderInfo"]["Attributes"]["mcs_msg"];
                this.model.data.mcs_approvalon2 = this.FormatToDateTime(res["VehorderInfo"]["Attributes"]["mcs_approvalon2"]);
                this.model.data.mcs_cancelorderon = this.FormatToDateTime(res["VehorderInfo"]["Attributes"]["mcs_cancelorderon"]);
                this.model.data.mcs_canceldesc = res["VehorderInfo"]["Attributes"]["mcs_canceldesc"];
            }
            //绑定订单透明化状态跟踪
            if (res.Vehordertrack != null) {
                for (var key in res.Vehordertrack) {
                    var obj = {};
                    obj["mcs_optionon"] = this.FormatToDateTime(res.Vehordertrack[key]["Attributes"]["mcs_optionon"]);
                    obj["mcs_rostatus"] = this.optionset.GetOptionSetNameByValue("mcs_rostatus", res.Vehordertrack[key]["Attributes"]["mcs_rostatus"]);
                    this.model.VehordertrackList.push(obj);
                }
            }
            //绑定权益项
            /*   if (res.Rightitemuse != null) {
      
                for (var key in res.Rightitemuse) {
                  var obj = {};
                  obj["mcs_name"] = res.Rightitemuse[key]["Attributes"]["mcs_name"];
                  obj["mcs_code"] = res.Rightitemuse[key]["Attributes"]["mcs_code"];
                  obj["mcs_amount"] = res.Rightitemuse[key]["Attributes"]["mcs_amount"];
                  this.model.RightitemuseList.push(obj);
                }
              } */
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
    //获取权益项列表数据
    GetList() {
        //debugger;
        /* this._page.loadingShow();
        this._http.postForToaken(this.model.apiRightsUrl,
            null,
            (res: any) => {
               //debugger;
                if (res.Results !== null) {
                    //绑定数据
                    res.Results.forEach(item => {
                        var obj = {};
                        obj["mcs_name"] = item["Attributes"].mcs_vehorderid;
                        obj["mcs_code"] = item["Attributes"].mcs_contactname;
                        obj["mcs_amount"] = item["Attributes"].mcs_contactphone;
                      
                        this.model.RightitemuseList.push(obj)
                    });
                  
                }
                else {
                    this._page.alert("消息提示", "数据加载异常");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        ); */
    }
    FormatToDateTime(date) {
        if (date != null && date != undefined) {
            return silly_datetime__WEBPACK_IMPORTED_MODULE_4___default.a.format(date, 'YYYY-MM-DD');
        }
        else {
            return '';
        }
    }
};
DetailPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _base_base_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"] }
];
DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/mc-vehorder.com/detail/detail.page.html"),
        styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/saleing/mc-vehorder.com/detail/detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _base_base_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"]])
], DetailPage);



/***/ })

}]);
//# sourceMappingURL=saleing-mc-vehorder-com-detail-detail-module-es2015.js.map