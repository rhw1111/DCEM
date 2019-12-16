(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-servicecenter-boutique-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page/servicecenter/boutique/detail/detail.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/servicecenter/boutique/detail/detail.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/servicecenter/boutique/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{model.title}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content overflow-scroll=\"true\" style=\"overflow: hidden\">\r\n    <ion-grid class=\"padding0\">\r\n        <!--轮播图-->\r\n        <ion-row>\r\n            <ion-col class=\"padding0\">\r\n                <ion-slides pager=\"true\">\r\n                    <ng-container *ngFor=\"let item of model.datadetail.ImageData\">\r\n                        <ion-slide style=\"width:100%;\" *ngIf=\"item.Category == 2\">\r\n                            <ion-grid class=\"padding0\">\r\n                                <ion-row>\r\n                                    <ion-col class=\"padding0\">\r\n                                        <img src=\"https://ceo-oss.oss-cn-hangzhou.aliyuncs.com/{{item.Name}}\" width=\"495\" height=\"495\" />\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-slide>\r\n                    </ng-container>\r\n                </ion-slides>\r\n            </ion-col>\r\n        </ion-row>\r\n        <!--商品名称、副标题-->\r\n        <ion-row>\r\n            <ion-col style=\"padding-left:20px;margin-top:5px\">\r\n                <ion-label class=\"lab-proname\" style=\"margin-top:30px\">\r\n                    <p style=\"font-size:16px; font-weight:500; color:#000;\">\r\n                        {{model.datadetail.Name}}\r\n                    </p>\r\n                    <p style=\"margin-top:10px;\">\r\n                        {{model.datadetail.Introduction}}\r\n                    </p>\r\n                </ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n        <!--价格-->\r\n        <ion-row style=\"padding-top:20px; padding-bottom:15px\">\r\n            <ion-col style=\"padding-left:20px;font-weight:bold; color:#2FACE5; \">\r\n                <span>\r\n                    ￥\r\n                </span>\r\n                <span style=\"font-size:18px;\">{{model.datadetail.SkuData?.length > 0 ? model.datadetail.SkuData[0].Price : \"0.00\"}}</span>\r\n            </ion-col>\r\n            <ion-col style=\"padding-right:15px;text-align:right;\">\r\n                <ion-label>\r\n                    <p>\r\n                        快递: 包邮\r\n                    </p>\r\n                </ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n        <!--规格-->\r\n        <ion-row style=\"background-color:#F6F6F6;\">\r\n            <ion-row (click)=\"ShowTwoBtn(0)\" style=\"padding:15px 10px; background-color:#fff; width:100%;margin:20px 0;\">\r\n                <ion-col style=\"padding-left:15px;\">\r\n                    <ion-label style=\"color:#000;\">\r\n                        选择:\r\n                    </ion-label>\r\n                    <ion-label class=\"lab-selected\" style=\"color:#a5a2a2;\">\r\n                        <div *ngIf=\"model.datadetail.SkuData?.length > 0; then trueTemplate else falseTemplate\"></div>\r\n                        <ng-template #trueTemplate>\r\n                            <ng-container *ngFor=\"let item of model.datadetail.SkuData[0].Arrts\">\r\n                                <div *ngIf=\"item.Values?.length > 0; then tTemplate else fTemplate\"></div>\r\n                                <ng-template #tTemplate>\r\n                                    {{item.Values[0].Value}}\r\n                                </ng-template>\r\n                                <ng-template #fTemplate>\r\n                                    <!--不做操作-->\r\n                                </ng-template>\r\n                            </ng-container>\r\n                        </ng-template>\r\n                        <ng-template #falseTemplate>\r\n                            <!--不做操作-->\r\n                        </ng-template>\r\n                    </ion-label>\r\n\r\n                </ion-col>\r\n                <ion-col style=\"padding-right:15px;text-align:right;max-width:20px;\">\r\n                    <ion-label style=\"font-size:22px;line-height:0px;color:#a5a2a2;\">\r\n                        >\r\n                    </ion-label>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-row>\r\n        <!--商品概览-->\r\n        <ion-segment [(ngModel)]=\"tab\" color=\"primary\" model=\"md\" class=\"segment-custom\">\r\n            <ion-segment-button value=\"probably\">\r\n                <ion-label>商品概览</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"aftersale\">\r\n                <ion-label>售后服务</ion-label>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n        <div [ngSwitch]=\"tab\">\r\n            <div *ngSwitchCase=\"'probably'\" style=\"line-height:0;\">\r\n                <ng-container *ngFor=\"let item of model.datadetail.ImageData\">\r\n                    <div *ngIf=\"item.Category == 3; then truesTemplate else falsesTemplate\"></div>\r\n                    <ng-template #truesTemplate>\r\n                        <img src=\"https://ceo-oss.oss-cn-hangzhou.aliyuncs.com/{{item.Name}}\" />\r\n                    </ng-template>\r\n                    <ng-template #falsesTemplate>\r\n                        <!--不做操作-->\r\n                    </ng-template>\r\n                </ng-container>\r\n            </div>\r\n            <div *ngSwitchCase=\"'aftersale'\">\r\n                <div>\r\n                    售后服务\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ion-grid>\r\n    <!--规格选择-->\r\n    <div class=\"TwoBtnDialog\" style=\"display:none;\">\r\n        <div class=\"div-content\">\r\n            <div class=\"div-skuimg\">\r\n                <img src=\"{{model.defaultimg}}\" width=\"100\" height=\"100\" style=\"border-radius:10px;\" />\r\n            </div>\r\n            <div style=\"margin-left:30px;\">\r\n                <div style=\"font-size:16px;margin-bottom:35px;\">{{model.datadetail.Name}}</div>\r\n                <div style=\"color:#38B3EE\">\r\n                    ￥\r\n                    <div *ngIf=\"model.datadetail.SkuData?.length > 0; then truthysTemplate else falsysTemplate\"></div>\r\n                    <ng-template #truthysTemplate>\r\n                        <span class=\"span-price\" style=\"font-size:18px;\">{{model.datadetail.SkuData[0].Price}}</span>\r\n                    </ng-template>\r\n                    <ng-template #falsysTemplate>\r\n                        <span class=\"span-price\" style=\"font-size:18px;\">0.00</span>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div style=\"padding: 0 30px 20px 30px;\">\r\n            <div style=\"margin-bottom:10px;font-size:16px;\">数量</div>\r\n            <div>\r\n                <button (click)=\"changeValue(-1)\" class=\"decrease icon-reduce\" type=\"button\">-</button>\r\n                <input type=\"number\" class=\"spinners\" value=\"1\" readonly=\"readonly\" maxlength=\"2\">\r\n                <button (click)=\"changeValue(1)\" class=\"increase icon-add\" type=\"button\">+</button>\r\n            </div>\r\n        </div>\r\n        <div class='standard' style=\"padding: 0 30px 20px 30px;\">\r\n            <ng-container *ngFor=\"let item of model.datadetail.AttrData\">\r\n                <p>{{item.AttrName}}</p>\r\n                <div class=\"div-attr\">\r\n                    <ng-container *ngFor=\"let v of item.Values\">\r\n                        <input value=\"{{v.Value}}\" type=\"radio\" name=\"standard{{item.AttrId}}\" style=\"display:none;\" title=\"{{v.checked}}\" />\r\n                        <a class=\"{{v.active}}\" (click)=\"OptionBtnCheck($event,v.MainImage)\">{{v.Value}}</a>\r\n                    </ng-container>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n        <div class=\"div-btn\">\r\n            <ion-button text=\"确定\" (click)=\"TwoBtnSure()\" style=\"width:100%;\">确定</ion-button>\r\n        </div>\r\n    </div>\r\n\r\n    <!--遮罩层-->\r\n    <div class=\"shade\" *ngIf=\"IsShowCover\" (click)=\"CloseDialog()\"></div>\r\n\r\n    <input type=\"hidden\" id=\"standardcount\" value=\"\" />\r\n    <input type=\"hidden\" id=\"proSkuID\" value=\"\" />\r\n</ion-content>\r\n\r\n<ion-footer>\r\n    <ion-tab-bar slot=\"bottom\">\r\n        <ion-tab-button [routerLink]=\"['/servicecenter/shoppingcart/list']\" style=\"max-width:110px;\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" viewBox=\"0 0 1024 1024\" width=\"32\" height=\"32\" t=\"1576145933524\" p-id=\"1544\" version=\"1.1\"><path d=\"M 520.195 741.379 c -98.8201 0 -177.097 -0.404793 -186.812 -1.65712 c -32.5732 -4.18708 -47.4999 -32.6238 -51.181 -48.7649 l -0.101198 -0.468042 L 150.024 48.0692 l 0.366844 -2.8715 A 12.1311 12.1311 0 0 0 148.886 44.2742 H 45.6633 a 22.1371 22.1371 0 0 1 0 -44.2742 h 110.23 l 2.80825 0.746337 a 57.2529 57.2529 0 0 1 18.1777 8.98135 c 11.9414 8.93075 18.3042 21.8715 17.8615 36.0013 l 130.622 635.31 c 0.505991 1.80892 4.16178 13.5479 13.6871 14.7749 c 21.7829 2.28961 388.348 1.15113 629.428 -0.177097 h 0.126498 a 22.1371 22.1371 0 0 1 0.113848 44.2742 c -39.6065 0.215046 -275.462 1.46738 -448.523 1.46738 Z M 150.492 44.2742 Z\" p-id=\"1545\" /><path d=\"M 286.427 600.865 a 22.1371 22.1371 0 0 1 -3.30159 -44.0212 l 585.685 -89.1936 l 80.44 -293.475 H 198.726 a 22.1371 22.1371 0 1 1 0 -44.2742 h 779.606 a 22.1371 22.1371 0 0 1 21.3528 27.994 L 907.746 493.228 a 22.1371 22.1371 0 0 1 -18.0133 16.0273 l -599.941 91.3694 a 22.3522 22.3522 0 0 1 -3.36484 0.240346 Z M 442.942 1024 a 118.048 118.048 0 1 1 118.048 -118.048 a 118.174 118.174 0 0 1 -118.048 118.048 Z m 0 -191.809 a 73.7735 73.7735 0 1 0 73.7735 73.7735 a 73.8494 73.8494 0 0 0 -73.7735 -73.7735 Z M 842.473 1024 a 118.048 118.048 0 1 1 118.048 -118.048 a 118.174 118.174 0 0 1 -118.048 118.048 Z m 0 -191.809 a 73.7735 73.7735 0 1 0 73.7735 73.7735 a 73.8494 73.8494 0 0 0 -73.7735 -73.7735 Z\" p-id=\"1546\" /></svg>\r\n            <ion-badge *ngIf=\"Isbadge\" color=\"danger\">{{BadgeCount}}</ion-badge>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"servicecenter\" (click)=\"ShowTwoBtn(1)\">\r\n            <ion-label style=\"font-size:16px; color:#000;\">加入购物车</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"personalcenter\" (click)=\"ShowTwoBtn(2)\" style=\"background-color:#38B3EE;\">\r\n            <ion-label style=\"font-size:16px; color:#fff;\">立即购买</ion-label>\r\n        </ion-tab-button>\r\n    </ion-tab-bar>\r\n</ion-footer>\r\n\r\n"

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

module.exports = ".padding0 {\n  padding: 0;\n}\n\n.segment-custom {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  background-color: #fff;\n}\n\n.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > ion-segment-button {\n  border: none;\n  font-size: 16px;\n  color: #898a8c;\n  height: 60px;\n}\n\n.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked {\n  background: none;\n  color: #47B0E4;\n}\n\n.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked::after {\n  content: \"\";\n  display: inline-block;\n  width: 20%;\n  margin: 0 40%;\n  border-bottom: 2px solid #47B0E4;\n}\n\nion-row ion-col button {\n  width: 100%;\n  border-radius: 5px;\n}\n\n.TwoBtnDialog {\n  position: fixed;\n  width: 100%;\n  height: auto;\n  bottom: 0;\n  z-index: 1000;\n  background-color: white;\n  border-radius: 10px 10px 0 0;\n}\n\n.TwoBtnDialog .div-content {\n  padding: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n\n.shade {\n  position: fixed;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  z-index: 999;\n  -moz-opacity: 0.3;\n  opacity: 0.3;\n  filter: alpha(opacity=30);\n}\n\n.icon-reduce {\n  border: none;\n  background-color: #fff;\n  font-size: 20px;\n}\n\n.spinners {\n  border: none;\n  width: 60px;\n  text-align: center;\n  background-color: #F6F6F6;\n  font-size: 18px;\n  margin: 0 10px;\n}\n\n.icon-add {\n  border: none;\n  background-color: #fff;\n  font-size: 20px;\n}\n\n.standard p {\n  /*padding-bottom: 1rem;*/\n  font-size: 16px;\n}\n\n.standard a {\n  background: #F7F7F9;\n  padding: 0.4rem 2rem;\n  display: inline-block;\n  margin: 0 0.2rem 0.2rem;\n  border: 1px solid #ccc;\n  /*font-size: 1.2rem;*/\n  color: #000;\n  border-radius: 20px;\n  border: none;\n}\n\n.standard a.active {\n  background-color: #3880ff;\n  color: #fff;\n  position: relative;\n}\n\n.standard a.active:after {\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  /*background-image: url(../img/chooseSize.png);*/\n  background-repeat: no-repeat;\n  background-size: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 10;\n  display: block;\n}\n\n.tab-red-point:after, .red-point:after {\n  position: absolute;\n  content: \" \";\n  height: 20px;\n  width: 20px;\n  border-radius: 15px;\n  background-color: red;\n}\n\n.tab-red-point:after {\n  top: 2px;\n  left: 12%;\n}\n\n.red-point:after {\n  top: 10px;\n  right: 35%;\n}\n\n.showtoast div {\n  width: 100px;\n  background-color: #000;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9zZXJ2aWNlY2VudGVyL2JvdXRpcXVlL2RldGFpbC9EOlxc5bel5L2c55uu5b2VXFzlvq7ova/pobnnm65cXOS7o+eggVxc56e75Yqo56uvXFznp7vliqjnq68o5q2j5byP6aG555uuKVxcRENFTS5BUFAuVXNlckNlbnRlci9zcmNcXGFwcFxccGFnZVxcc2VydmljZWNlbnRlclxcYm91dGlxdWVcXGRldGFpbFxcZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS9zZXJ2aWNlY2VudGVyL2JvdXRpcXVlL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVksVUFBQTtBQ0VaOztBRERBO0VBQ0ksd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0tKOztBREhBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDTUo7O0FESkE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FDT0o7O0FESFE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNNWjs7QUREQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQ0lKOztBREZJO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7QUNJUjs7QURBQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNJSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDSUo7O0FEREE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDSUo7O0FEREE7RUFDSSx3QkFBQTtFQUNBLGVBQUE7QUNJSjs7QUREQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNJSjs7QUREQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDSUo7O0FEREE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNJSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0lKOztBRERBO0VBQ0ksUUFBQTtFQUNBLFNBQUE7QUNJSjs7QUREQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlL3NlcnZpY2VjZW50ZXIvYm91dGlxdWUvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkZGluZzAgeyBwYWRkaW5nOiAwIH1cclxuLnNlZ21lbnQtY3VzdG9tIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLnNjLWlvbi1zZWdtZW50LWlvcy1oLmlvbi1jb2xvci5zYy1pb24tc2VnbWVudC1pb3MtcyA+IGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzg5OGE4YztcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG4uc2MtaW9uLXNlZ21lbnQtaW9zLWguaW9uLWNvbG9yLnNjLWlvbi1zZWdtZW50LWlvcy1zID4gLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGNvbG9yOiAjNDdCMEU0O1xyXG59XHJcbi5zYy1pb24tc2VnbWVudC1pb3MtaC5pb24tY29sb3Iuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiAuc2VnbWVudC1idXR0b24tY2hlY2tlZDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBtYXJnaW46IDAgNDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0N0IwRTQ7XHJcbn1cclxuaW9uLXJvdyB7XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLlR3b0J0bkRpYWxvZyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcblxyXG4gICAgLmRpdi1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcclxuICAgIH1cclxufVxyXG5cclxuLnNoYWRlIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMCU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAtbW96LW9wYWNpdHk6IDAuMztcclxuICAgIG9wYWNpdHk6IC4zMDtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0zMCk7XHJcbn1cclxuLmljb24tcmVkdWNlIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5zcGlubmVycyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIG1hcmdpbjowIDEwcHg7XHJcbn1cclxuXHJcbi5pY29uLWFkZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uc3RhbmRhcmQgcCB7XHJcbiAgICAvKnBhZGRpbmctYm90dG9tOiAxcmVtOyovXHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5zdGFuZGFyZCBhIHtcclxuICAgIGJhY2tncm91bmQ6ICNGN0Y3Rjk7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW0gMnJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCAwLjJyZW0gMC4ycmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIC8qZm9udC1zaXplOiAxLjJyZW07Ki9cclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG59XHJcblxyXG4uc3RhbmRhcmQgYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODBmZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc3RhbmRhcmQgYS5hY3RpdmU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2Nob29zZVNpemUucG5nKTsqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRhYi1yZWQtcG9pbnQ6YWZ0ZXIsIC5yZWQtcG9pbnQ6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogJyAnO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4udGFiLXJlZC1wb2ludDphZnRlciB7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIGxlZnQ6IDEyJTtcclxufVxyXG5cclxuLnJlZC1wb2ludDphZnRlciB7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMzUlO1xyXG59XHJcbi5zaG93dG9hc3QgZGl2IHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuIiwiLnBhZGRpbmcwIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNlZ21lbnQtY3VzdG9tIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5zYy1pb24tc2VnbWVudC1pb3MtaC5pb24tY29sb3Iuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiBpb24tc2VnbWVudC1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM4OThhOGM7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLnNjLWlvbi1zZWdtZW50LWlvcy1oLmlvbi1jb2xvci5zYy1pb24tc2VnbWVudC1pb3MtcyA+IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICM0N0IwRTQ7XG59XG5cbi5zYy1pb24tc2VnbWVudC1pb3MtaC5pb24tY29sb3Iuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiAuc2VnbWVudC1idXR0b24tY2hlY2tlZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbjogMCA0MCU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNDdCMEU0O1xufVxuXG5pb24tcm93IGlvbi1jb2wgYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLlR3b0J0bkRpYWxvZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbn1cbi5Ud29CdG5EaWFsb2cgLmRpdi1jb250ZW50IHtcbiAgcGFkZGluZzogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uc2hhZGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgei1pbmRleDogOTk5O1xuICAtbW96LW9wYWNpdHk6IDAuMztcbiAgb3BhY2l0eTogMC4zO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MzApO1xufVxuXG4uaWNvbi1yZWR1Y2Uge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnNwaW5uZXJzIHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uaWNvbi1hZGQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnN0YW5kYXJkIHAge1xuICAvKnBhZGRpbmctYm90dG9tOiAxcmVtOyovXG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnN0YW5kYXJkIGEge1xuICBiYWNrZ3JvdW5kOiAjRjdGN0Y5O1xuICBwYWRkaW5nOiAwLjRyZW0gMnJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMC4ycmVtIDAuMnJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgLypmb250LXNpemU6IDEuMnJlbTsqL1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uc3RhbmRhcmQgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4MGZmO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3RhbmRhcmQgYS5hY3RpdmU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvY2hvb3NlU2l6ZS5wbmcpOyovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50YWItcmVkLXBvaW50OmFmdGVyLCAucmVkLXBvaW50OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIiBcIjtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4udGFiLXJlZC1wb2ludDphZnRlciB7XG4gIHRvcDogMnB4O1xuICBsZWZ0OiAxMiU7XG59XG5cbi5yZWQtcG9pbnQ6YWZ0ZXIge1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAzNSU7XG59XG5cbi5zaG93dG9hc3QgZGl2IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */"

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
            datadetail: {},
            defaultimg: ""
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
                            this.model.defaultimg = res.SkuData[0].Arrts[0].Values[0].MainImage;
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
                console.log(this.model.datadetail);
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
    OptionBtnCheck(event, mainimage) {
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
        jquery__WEBPACK_IMPORTED_MODULE_5__(".div-skuimg img").attr("src", mainimage);
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