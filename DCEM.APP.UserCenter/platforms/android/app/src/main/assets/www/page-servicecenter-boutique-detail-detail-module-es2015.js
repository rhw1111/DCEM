(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-servicecenter-boutique-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/servicecenter/boutique/detail/detail.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/servicecenter/boutique/detail/detail.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/servicecenter/boutique/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{model.title}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content overflow-scroll=\"true\" style=\"overflow: hidden\">\r\n    <ion-grid class=\"padding0\">\r\n        <!--轮播图-->\r\n        <ion-row>\r\n            <ion-col class=\"padding0\">\r\n                <ion-slides pager=\"true\">\r\n                    <ng-container *ngFor=\"let item of model.datadetail.ImageData\">\r\n                        <ion-slide style=\"width:100%;\" *ngIf=\"item.Category == 2\">\r\n                            <ion-grid class=\"padding0\">\r\n                                <ion-row>\r\n                                    <ion-col class=\"padding0\">\r\n                                        <img src=\"https://ceo-oss.oss-cn-hangzhou.aliyuncs.com/{{item.Name}}\" width=\"495\" height=\"495\" />\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-slide>\r\n                    </ng-container>\r\n                </ion-slides>\r\n            </ion-col>\r\n        </ion-row>\r\n        <!--商品名称、副标题-->\r\n        <ion-row>\r\n            <ion-col style=\"padding-left:20px;margin-top:5px\">\r\n                <ion-label class=\"lab-proname\" style=\"margin-top:30px\">\r\n                    <p style=\"font-size:24px; font-weight:500; color:#000;\">\r\n                        {{model.datadetail.Name}}\r\n                    </p>\r\n                    <p style=\"margin-top:10px; font-size:16px;\">\r\n                        {{model.datadetail.Introduction}}\r\n                    </p>\r\n                </ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n        <!--价格-->\r\n        <ion-row style=\"padding-top:20px; padding-bottom:15px\">\r\n            <ion-col style=\"padding-left:20px;font-weight:bold; color:#2FACE5; \">\r\n                <span style=\"font-size:18px;\">\r\n                    ￥\r\n                </span>\r\n                <span style=\"font-size:24px;\">{{model.datadetail.SkuData?.length > 0 ? model.datadetail.SkuData[0].Price : \"0.00\"}}</span>\r\n            </ion-col>\r\n            <ion-col style=\"padding-right:15px;text-align:right; font-size:16px;\">\r\n                <ion-label>\r\n                    <p>\r\n                        快递: 包邮\r\n                    </p>\r\n                </ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n        <!--规格-->\r\n        <ion-row style=\"background-color:#F6F6F6;\">\r\n            <ion-row (click)=\"ShowTwoBtn(0)\" style=\"padding:15px 10px; background-color:#fff; width:100%;margin:20px 0;\">\r\n                <ion-col style=\"padding-left:15px;font-size:16px;\">\r\n                    <ion-label style=\"color:#000;\">\r\n                        选择:\r\n                    </ion-label>\r\n                    <ion-label class=\"lab-selected\" style=\"color:#a5a2a2;\">\r\n                        <div *ngIf=\"model.datadetail.SkuData?.length > 0; then trueTemplate else falseTemplate\"></div>\r\n                        <ng-template #trueTemplate>\r\n                            <ng-container *ngFor=\"let item of model.datadetail.SkuData[0].Arrts\">\r\n                                <div *ngIf=\"item.Values?.length > 0; then tTemplate else fTemplate\"></div>\r\n                                <ng-template #tTemplate>\r\n                                    {{item.Values[0].Value}}\r\n                                </ng-template>\r\n                                <ng-template #fTemplate>\r\n                                    <!--不做操作-->\r\n                                </ng-template>\r\n                            </ng-container>\r\n                        </ng-template>\r\n                        <ng-template #falseTemplate>\r\n                            <!--不做操作-->\r\n                        </ng-template>\r\n                    </ion-label>\r\n\r\n                </ion-col>\r\n                <ion-col style=\"padding-right:15px;text-align:right;max-width:20px;\">\r\n                    <ion-label style=\"font-size:22px;line-height:0px;color:#a5a2a2;\">\r\n                        >\r\n                    </ion-label>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-row>\r\n        <!--商品概览-->\r\n        <ion-segment [(ngModel)]=\"tab\" color=\"primary\" model=\"md\" class=\"segment-custom\">\r\n            <ion-segment-button value=\"probably\">\r\n                <ion-label>商品概览</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"aftersale\">\r\n                <ion-label>售后服务</ion-label>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n        <div [ngSwitch]=\"tab\">\r\n            <div *ngSwitchCase=\"'probably'\" style=\"line-height:0;\">\r\n                <img src=\"../assets/img/temp/xiaopengdetail1.jpg\" />\r\n                <img src=\"../assets/img/temp/xiaopengdetail2.jpg\" />\r\n                <img src=\"../assets/img/temp/xiaopengdetail3.jpg\" />\r\n                <img src=\"../assets/img/temp/xiaopengdetail4.jpg\" />\r\n                <img src=\"../assets/img/temp/xiaopengdetail5.jpg\" />\r\n                <img src=\"../assets/img/temp/xiaopengdetail6.jpg\" />\r\n            </div>\r\n            <div *ngSwitchCase=\"'aftersale'\">\r\n                <div>\r\n                    售后服务\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ion-grid>\r\n    <!--规格选择-->\r\n    <div class=\"TwoBtnDialog\" style=\"display:none;\">\r\n        <div class=\"div-content\">\r\n            <div class=\"div-skuimg\">\r\n                <img src=\"../assets/img/temp/xiaopengdetail1.jpg\" width=\"100\" height=\"100\" style=\"border-radius:10px;\" />\r\n            </div>\r\n            <div style=\"margin-left:30px;\">\r\n                <div style=\"font-size:24px;margin-bottom:35px;\">{{model.datadetail.Name}}</div>\r\n                <div style=\"font-size:16px; color:#38B3EE\">\r\n                    ￥\r\n                    <div *ngIf=\"model.datadetail.SkuData?.length > 0; then truthysTemplate else falsysTemplate\"></div>\r\n                    <ng-template #truthysTemplate>\r\n                        <span class=\"span-price\" style=\"font-size:24px;\">{{model.datadetail.SkuData[0].Price}}</span>\r\n                    </ng-template>\r\n                    <ng-template #falsysTemplate>\r\n                        <span class=\"span-price\" style=\"font-size:24px;\">0.00</span>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div style=\"padding: 0 30px 20px 30px;\">\r\n            <div style=\"margin-bottom:10px;font-size:20px;\">数量</div>\r\n            <div>\r\n                <button (click)=\"changeValue(-1)\" class=\"decrease icon-reduce\" type=\"button\">-</button>\r\n                <input type=\"number\" class=\"spinners\" value=\"1\" readonly=\"readonly\" maxlength=\"2\">\r\n                <button (click)=\"changeValue(1)\" class=\"increase icon-add\" type=\"button\">+</button>\r\n            </div>\r\n        </div>\r\n        <div class='standard' style=\"padding: 0 30px 20px 30px;\">\r\n            <ng-container *ngFor=\"let item of model.datadetail.AttrData\">\r\n                <p>{{item.AttrName}}</p>\r\n                <div class=\"div-attr\">\r\n                    <ng-container *ngFor=\"let v of item.Values\">\r\n                        <input value=\"{{v.Value}}\" type=\"radio\" name=\"standard{{item.AttrId}}\" style=\"display:none;\" title=\"{{v.checked}}\" />\r\n                        <a class=\"{{v.active}}\" (click)=\"OptionBtnCheck($event)\">{{v.Value}}</a>\r\n                    </ng-container>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n        <div class=\"div-btn\">\r\n            <ion-button text=\"确定\" (click)=\"TwoBtnSure()\" style=\"width:100%;\">确定</ion-button>\r\n        </div>\r\n    </div>\r\n\r\n    <!--遮罩层-->\r\n    <div class=\"shade\" *ngIf=\"IsShowCover\" (click)=\"CloseDialog()\"></div>\r\n\r\n    <input type=\"hidden\" id=\"standardcount\" value=\"\" />\r\n    <input type=\"hidden\" id=\"proSkuID\" value=\"\" />\r\n</ion-content>\r\n\r\n<ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button [routerLink]=\"['/servicecenter/shoppingcart/list']\" style=\"max-width:110px;\">\r\n        <ion-icon name=\"aperture\"></ion-icon>\r\n        <ion-badge *ngIf=\"Isbadge\" color=\"danger\">{{BadgeCount}}</ion-badge>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"servicecenter\" (click)=\"ShowTwoBtn(1)\">\r\n        <ion-label style=\"font-size:20px; color:#000;\">加入购物车</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"personalcenter\" (click)=\"ShowTwoBtn(2)\" style=\"background-color:#38B3EE;\">\r\n        <ion-label style=\"font-size:20px; color:#fff;\">立即购买</ion-label>\r\n    </ion-tab-button>\r\n</ion-tab-bar>\r\n\r\n"

/***/ }),

/***/ "./src/app/page/servicecenter/boutique/detail/detail-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/page/servicecenter/boutique/detail/detail-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function() { return DetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail.page */ "./src/app/page/servicecenter/boutique/detail/detail.page.ts");




const routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
    }
];
let DetailPageRoutingModule = class DetailPageRoutingModule {
};
DetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailPageRoutingModule);



/***/ }),

/***/ "./src/app/page/servicecenter/boutique/detail/detail.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/page/servicecenter/boutique/detail/detail.module.ts ***!
  \*********************************************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-routing.module */ "./src/app/page/servicecenter/boutique/detail/detail-routing.module.ts");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/page/servicecenter/boutique/detail/detail.page.ts");







let DetailPageModule = class DetailPageModule {
};
DetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"]
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })
], DetailPageModule);



/***/ }),

/***/ "./src/app/page/servicecenter/boutique/detail/detail.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/page/servicecenter/boutique/detail/detail.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding0 {\n  padding: 0; }\n\n.segment-custom {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  background-color: #fff; }\n\n.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > ion-segment-button {\n  border: none;\n  font-size: 20px;\n  color: #898a8c;\n  height: 60px; }\n\n.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked {\n  background: none;\n  color: #47B0E4; }\n\n.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked::after {\n  content: \"\";\n  display: inline-block;\n  width: 20%;\n  margin: 0 40%;\n  border-bottom: 2px solid #47B0E4; }\n\nion-row ion-col button {\n  width: 100%;\n  border-radius: 5px; }\n\n.TwoBtnDialog {\n  position: fixed;\n  width: 100%;\n  height: auto;\n  bottom: 0;\n  z-index: 1000;\n  background-color: white;\n  border-radius: 10px 10px 0 0; }\n\n.TwoBtnDialog .div-content {\n    padding: 30px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: start;\n            justify-content: flex-start; }\n\n.shade {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  z-index: 999;\n  -moz-opacity: 0.3;\n  opacity: .30;\n  filter: alpha(opacity=30); }\n\n.icon-reduce {\n  border: none;\n  background-color: #fff;\n  font-size: 20px; }\n\n.spinners {\n  border: none;\n  width: 80px;\n  text-align: center;\n  background-color: #F6F6F6;\n  font-size: 22px;\n  margin: 0 10px; }\n\n.icon-add {\n  border: none;\n  background-color: #fff;\n  font-size: 20px; }\n\n.standard p {\n  /*padding-bottom: 1rem;*/\n  font-size: 20px; }\n\n.standard a {\n  background: #F7F7F9;\n  padding: 0.4rem 2rem;\n  display: inline-block;\n  margin: 0 0.2rem 0.2rem;\n  border: 1px solid #ccc;\n  font-size: 1.2rem;\n  color: #000;\n  border-radius: 20px;\n  border: none; }\n\n.standard a.active {\n  background-color: #3880ff;\n  color: #fff;\n  position: relative; }\n\n.standard a.active:after {\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  /*background-image: url(../img/chooseSize.png);*/\n  background-repeat: no-repeat;\n  background-size: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 10;\n  display: block; }\n\n.tab-red-point:after, .red-point:after {\n  position: absolute;\n  content: ' ';\n  height: 20px;\n  width: 20px;\n  border-radius: 15px;\n  background-color: red; }\n\n.tab-red-point:after {\n  top: 2px;\n  left: 12%; }\n\n.red-point:after {\n  top: 10px;\n  right: 35%; }\n\n.showtoast div {\n  width: 100px;\n  background-color: #000;\n  opacity: 0.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9zZXJ2aWNlY2VudGVyL2JvdXRpcXVlL2RldGFpbC9FOlxcQXBwUHJvamVjdFxcRENFTVxcRENFTS5BUFAuVXNlckNlbnRlci9zcmNcXGFwcFxccGFnZVxcc2VydmljZWNlbnRlclxcYm91dGlxdWVcXGRldGFpbFxcZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFZLFVBQVcsRUFBQTs7QUFDdkI7RUFDSSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixhQUFhO0VBQ2IsZ0NBQWdDLEVBQUE7O0FBRXBDO0VBR1ksV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUs5QjtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDRCQUE0QixFQUFBOztBQVBoQztJQVVRLGFBQWE7SUFDYixvQkFBWTtJQUFaLGFBQVk7SUFDWix1QkFBMEI7WUFBMUIsMkJBQTBCLEVBQUE7O0FBSWxDO0VBQ0ksa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxjQUFhLEVBQUE7O0FBR2pCO0VBQ0ksWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksd0JBQUE7RUFDQSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFXLEVBQUE7O0FBR2Y7RUFDSSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdEQUFBO0VBQ0EsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE1BQU07RUFDTixXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFHYjtFQUNJLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2Uvc2VydmljZWNlbnRlci9ib3V0aXF1ZS9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkaW5nMCB7IHBhZGRpbmc6IDAgfVxyXG4uc2VnbWVudC1jdXN0b20ge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uc2MtaW9uLXNlZ21lbnQtaW9zLWguaW9uLWNvbG9yLnNjLWlvbi1zZWdtZW50LWlvcy1zID4gaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjODk4YThjO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5zYy1pb24tc2VnbWVudC1pb3MtaC5pb24tY29sb3Iuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiAuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgY29sb3I6ICM0N0IwRTQ7XHJcbn1cclxuLnNjLWlvbi1zZWdtZW50LWlvcy1oLmlvbi1jb2xvci5zYy1pb24tc2VnbWVudC1pb3MtcyA+IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIG1hcmdpbjogMCA0MCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQ3QjBFNDtcclxufVxyXG5pb24tcm93IHtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uVHdvQnRuRGlhbG9nIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuXHJcbiAgICAuZGl2LWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2hhZGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwJTtcclxuICAgIGxlZnQ6IDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIC1tb3otb3BhY2l0eTogMC4zO1xyXG4gICAgb3BhY2l0eTogLjMwO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTMwKTtcclxufVxyXG4uaWNvbi1yZWR1Y2Uge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnNwaW5uZXJzIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcclxuICAgIGZvbnQtc2l6ZToyMnB4O1xyXG4gICAgbWFyZ2luOjAgMTBweDtcclxufVxyXG5cclxuLmljb24tYWRkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5zdGFuZGFyZCBwIHtcclxuICAgIC8qcGFkZGluZy1ib3R0b206IDFyZW07Ki9cclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnN0YW5kYXJkIGEge1xyXG4gICAgYmFja2dyb3VuZDogI0Y3RjdGOTtcclxuICAgIHBhZGRpbmc6IDAuNHJlbSAycmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIDAuMnJlbSAwLjJyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxufVxyXG5cclxuLnN0YW5kYXJkIGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnN0YW5kYXJkIGEuYWN0aXZlOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9jaG9vc2VTaXplLnBuZyk7Ki9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi50YWItcmVkLXBvaW50OmFmdGVyLCAucmVkLXBvaW50OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6ICcgJztcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnRhYi1yZWQtcG9pbnQ6YWZ0ZXIge1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICBsZWZ0OiAxMiU7XHJcbn1cclxuXHJcbi5yZWQtcG9pbnQ6YWZ0ZXIge1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDM1JTtcclxufVxyXG4uc2hvd3RvYXN0IGRpdiB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/page/servicecenter/boutique/detail/detail.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/page/servicecenter/boutique/detail/detail.page.ts ***!
  \*******************************************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app/component/typescript/dcem.core */ "./src/app/component/typescript/dcem.core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);






let DetailPage = class DetailPage {
    constructor(_http, _page, routerinfo, toastCtrl) {
        this._http = _http;
        this._page = _page;
        this.routerinfo = routerinfo;
        this.toastCtrl = toastCtrl;
        this.tab = 'probably';
        this.model = {
            search: {
                apiUrl: "api/product/Detail",
                productCode: "",
            },
            title: "商品详情",
            datadetail: {}
        };
        //IsShowForCart: boolean = false;
        this.IsShowCover = false;
        this.Isbadge = false;
        this.BadgeCount = 0;
        this.tempdata_sku = [];
    }
    ngOnInit() {
        //id为参数名字
        console.log();
        this.id = this.routerinfo.snapshot.queryParams["id"];
        console.log(this.id);
        this.initListLoading(this.id);
    }
    //初始化页面数据加载
    initListLoading(id) {
        this._page.loadingShow();
        this.getDetail(null, id);
        this.getCartList();
    }
    ionViewWillEnter() {
    }
    //获取详情数据
    getDetail(event, id) {
        this._http.getForShopping(this.model.search.apiUrl, {
            productCode: id
        }, (res) => {
            if (res != null) {
                for (var i = 0; i < res.SkuData.length; i++) {
                    res.SkuData[i].Price = res.SkuData[i].Price.toFixed(2);
                    var tempValue = "";
                    for (var j = 0; j < res.SkuData[i].Arrts.length; j++) {
                        for (var k = 0; k < res.SkuData[i].Arrts[j].Values.length; k++) {
                            tempValue += res.SkuData[i].Arrts[j].Values[k].Value;
                            tempValue += " ";
                        }
                    }
                    tempValue = tempValue.length > 0 ? (tempValue.substring(0, tempValue.length - 1)) : "";
                    this.tempdata_sku.push({ attr: tempValue, skuid: res.SkuData[i].SkuCode, Integral: res.SkuData[i].Integral == null ? 0 : res.SkuData[i].Integral, mprice: res.SkuData[i].Price });
                }
                jquery__WEBPACK_IMPORTED_MODULE_5__("#standardcount").val(res.AttrData.length);
                for (var i = 0; i < res.AttrData.length; i++) {
                    for (var j = 0; j < res.AttrData[i].Values.length; j++) {
                        if (j == 0) {
                            res.AttrData[i].Values[j].checked = "checked";
                            res.AttrData[i].Values[j].active = "active";
                        }
                        else {
                            res.AttrData[i].Values[j].checked = "";
                            res.AttrData[i].Values[j].active = "";
                        }
                    }
                }
                //绑定数据
                this.model.datadetail = res;
                event ? event.target.complete() : '';
            }
            else {
                this._page.alert("消息提示", "数据加载异常");
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
    //获取购物车数据
    getCartList() {
        var storage = window.localStorage;
        var cardata = storage.getItem("singlecar");
        if (cardata != null) {
            var cartList = JSON.parse(cardata);
            if (cartList != null && cartList.datas.length > 0) {
                this.BadgeCount = cartList.datas.length;
                this.Isbadge = true;
            }
            else {
                this.Isbadge = false;
            }
        }
        else {
            this.Isbadge = false;
        }
    }
    ShowTwoBtn(flag) {
        //this.IsShowTwoBtnDialog = true;
        this.ShowType = flag;
        this.IsShowCover = true;
        jquery__WEBPACK_IMPORTED_MODULE_5__(".TwoBtnDialog").slideDown();
    }
    TwoBtnCancel() {
        //this.IsShowTwoBtnDialog = false;
        jquery__WEBPACK_IMPORTED_MODULE_5__(".TwoBtnDialog").slideUp();
        this.IsShowCover = false;
    }
    TwoBtnSure() {
        //this.IsShowTwoBtnDialog = false;
        jquery__WEBPACK_IMPORTED_MODULE_5__(".TwoBtnDialog").slideUp();
        this.IsShowCover = false;
        this.standard();
    }
    CloseDialog() {
        if (this.IsShowCover) {
            //this.IsShowTwoBtnDialog = false;
            jquery__WEBPACK_IMPORTED_MODULE_5__(".TwoBtnDialog").slideUp();
            this.IsShowCover = false;
        }
    }
    //增减数量
    changeValue(delta) {
        var num = this.getValue() + delta;
        jquery__WEBPACK_IMPORTED_MODULE_5__("input.spinners").val(num);
        if (num <= 0) {
            jquery__WEBPACK_IMPORTED_MODULE_5__("button.decrease").attr('disabled', 'disabled');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_5__("button.decrease").removeAttr('disabled');
        }
        if (num >= 999) {
            jquery__WEBPACK_IMPORTED_MODULE_5__("button.increase").attr('disabled', 'disabled');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_5__("button.increase").removeAttr('disabled');
        }
    }
    getValue() {
        var num = jquery__WEBPACK_IMPORTED_MODULE_5__("input.spinners").val().toString();
        return parseInt(num || "0", 10);
    }
    //选择规格
    OptionBtnCheck(event) {
        var _that = event.target;
        jquery__WEBPACK_IMPORTED_MODULE_5__(_that).addClass("active");
        jquery__WEBPACK_IMPORTED_MODULE_5__(_that).prev("input[type=radio]").attr("title", "checked");
        jquery__WEBPACK_IMPORTED_MODULE_5__(_that).prev("input[type=radio]").trigger("click");
        jquery__WEBPACK_IMPORTED_MODULE_5__(_that).prev("input[type=radio]").siblings("input[type=radio]").attr("title", "");
        jquery__WEBPACK_IMPORTED_MODULE_5__(_that).siblings("a").removeClass("active");
        var num = jquery__WEBPACK_IMPORTED_MODULE_5__("#standardcount").val();
        var standard = "";
        for (var i = 1; i <= num; i++) {
            standard += jquery__WEBPACK_IMPORTED_MODULE_5__(":radio[name=standard" + i + "][title=checked]").val();
            standard += " ";
        }
        standard = standard.length > 0 ? (standard.substring(0, standard.length - 1)) : "";
        jquery__WEBPACK_IMPORTED_MODULE_5__(this.tempdata_sku).each(function (i, item) {
            var temp_sku = item.attr;
            if (temp_sku.length > 0) {
                var temp_sku_sort = temp_sku.split(',').sort().join(',');
                if (temp_sku_sort == standard) {
                    jquery__WEBPACK_IMPORTED_MODULE_5__(".span-price").text(parseFloat(item.mprice).toFixed(2));
                    return false;
                }
            }
        });
    }
    //确认选择规格
    standard() {
        var num = jquery__WEBPACK_IMPORTED_MODULE_5__("#standardcount").val();
        var standard = "";
        for (var i = 1; i <= num; i++) {
            standard += jquery__WEBPACK_IMPORTED_MODULE_5__(":radio[name=standard" + i + "][title=checked]").val();
            standard += " ";
        }
        standard = standard.length > 0 ? (standard.substring(0, standard.length - 1)) : "";
        jquery__WEBPACK_IMPORTED_MODULE_5__(this.tempdata_sku).each(function (i, item) {
            var temp_sku = item.attr;
            if (temp_sku.length > 0) {
                if (temp_sku == standard) {
                    jquery__WEBPACK_IMPORTED_MODULE_5__(".lab-price").text(parseFloat(item.mprice).toFixed(2));
                    jquery__WEBPACK_IMPORTED_MODULE_5__('#proSkuID').val(item.skuid);
                    return false;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__(".lab-selected").html(standard);
        if (this.ShowType == 1) {
            this.addInCart();
        }
        else if (this.ShowType == 2) {
            this.BuyPro();
        }
    }
    //加入购物车
    addInCart() {
        var flag = true;
        var skucode = jquery__WEBPACK_IMPORTED_MODULE_5__("#proSkuID").val();
        var productname = jquery__WEBPACK_IMPORTED_MODULE_5__(".lab-proname p:eq(0)").text();
        var price = jquery__WEBPACK_IMPORTED_MODULE_5__(".span-price").text();
        var img = jquery__WEBPACK_IMPORTED_MODULE_5__(".div-skuimg>img").attr("src");
        var skuname = jquery__WEBPACK_IMPORTED_MODULE_5__(".lab-selected").text();
        var num = parseInt(jquery__WEBPACK_IMPORTED_MODULE_5__(".spinners").val().toString() || "0", 10);
        var index = skuname.lastIndexOf("\:");
        skuname = skuname.substring(index + 1, skuname.length);
        var cardata = {
            "checkAll": false,
            "totalprice": parseFloat("0").toFixed(2),
            "datas": [{
                    "productcode": this.id,
                    "skucode": skucode,
                    "productname": productname,
                    "skuname": skuname,
                    "price": price,
                    "img": img,
                    "num": num,
                    "checked": false
                }]
        };
        var storage = window.localStorage;
        var beforecardataJson;
        var beforecardata = storage.getItem("singlecar");
        if (beforecardata == null) {
            storage.setItem("singlecar", JSON.stringify(cardata));
        }
        else {
            beforecardataJson = JSON.parse(beforecardata);
            for (var i = 0; i < beforecardataJson.datas.length; i++) {
                if (beforecardataJson.datas[i].skucode == cardata.datas[0].skucode) {
                    beforecardataJson.datas[i].num += 1;
                    flag = false;
                }
            }
            if (flag) {
                beforecardataJson.datas.push(cardata.datas[0]);
            }
            storage.setItem("singlecar", JSON.stringify(beforecardataJson));
        }
        this.showToast();
        this.getCartList();
    }
    //提示框
    showToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: '已加入购物车',
                position: 'middle',
                cssClass: 'showtoast',
                duration: 2000
            });
            toast.present();
        });
    }
    //购买
    BuyPro() {
        var skucode = jquery__WEBPACK_IMPORTED_MODULE_5__("#proSkuID").val();
        var productname = jquery__WEBPACK_IMPORTED_MODULE_5__(".lab-proname p:eq(0)").text();
        var price = jquery__WEBPACK_IMPORTED_MODULE_5__(".span-price").text();
        var img = jquery__WEBPACK_IMPORTED_MODULE_5__(".div-skuimg>img").attr("src");
        var skuname = jquery__WEBPACK_IMPORTED_MODULE_5__(".lab-selected").text();
        var num = parseInt(jquery__WEBPACK_IMPORTED_MODULE_5__(".spinners").val().toString() || "0", 10);
        var index = skuname.lastIndexOf("\:");
        skuname = skuname.substring(index + 1, skuname.length);
        var orderata = {
            "source": "detial",
            "datas": [{
                    "productcode": this.id,
                    "skucode": skucode,
                    "productname": productname,
                    "skuname": skuname,
                    "price": price,
                    "img": img,
                    "num": num
                }]
        };
        this._page.goto("/servicecenter/preorder/preorder", { params: JSON.stringify(orderata) });
    }
};
DetailPage.ctorParameters = () => [
    { type: _app_component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: _app_component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/page/servicecenter/boutique/detail/detail.page.html"),
        styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/page/servicecenter/boutique/detail/detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        _app_component_typescript_dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], DetailPage);



/***/ })

}]);
//# sourceMappingURL=page-servicecenter-boutique-detail-detail-module-es2015.js.map