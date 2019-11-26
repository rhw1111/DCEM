(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-mc-sc-com-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/mc-sc.com/detail/detail.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/mc-sc.com/detail/detail.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/sc/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <ion-label>服务委托书明细</ion-label>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n    <ion-toolbar>\r\n        <ion-segment [(ngModel)]=\"tab\" color=\"dark\">\r\n            <ion-segment-button value=\"info\">\r\n                <ion-label>基础信息</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"item\">\r\n                <ion-label>维修项目</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"att\">\r\n                <ion-label>维修履历</ion-label>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n    </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div [ngSwitch]=\"tab\">\r\n        <div *ngSwitchCase=\"'info'\">\r\n\r\n\r\n            <ion-card>\r\n                <ion-card-header>\r\n                    <ion-card-title>\r\n                        <ion-label>基本信息</ion-label>\r\n                    </ion-card-title>\r\n                </ion-card-header>\r\n\r\n                <ion-list lines=\"full\">\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                姓名\r\n                            </h2>\r\n                            <p>{{mod.data.serviceproxy.customername}}&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                车牌\r\n                            </h2>\r\n                            <p>{{mod.data.serviceproxy.carplate}}&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                手机\r\n                            </h2>\r\n                            <p>{{mod.data.serviceproxy.customerphone}}&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                厅店\r\n                            </h2>\r\n                            <p>{{mod.data.serviceproxy.dealerid}}&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-list>\r\n                <br />\r\n            </ion-card>\r\n\r\n            <ion-card>\r\n                <ion-card-header>\r\n                    <ion-card-title>\r\n                        <ion-label>委托信息</ion-label>\r\n                    </ion-card-title>\r\n                </ion-card-header>\r\n\r\n                <ion-list lines=\"full\">\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                单号\r\n                            </h2>\r\n                            <p>{{mod.data.serviceproxy.name}}&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                送修人\r\n                            </h2>\r\n                            <p>{{mod.data.serviceproxy.shuttlename}}&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                送修人手机\r\n                            </h2>\r\n                            <p>{{mod.data.serviceproxy.shuttlephone}}&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                工单类型\r\n                            </h2>\r\n                            <p>{{mod.data.serviceproxy.ordertype}}&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                进店电量\r\n                            </h2>\r\n                            <p>{{mod.data.serviceproxy.inpower}}%&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                离店电量\r\n                            </h2>\r\n                            <p>{{mod.data.serviceproxy.outpower}}%&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                进店油量\r\n                            </h2>\r\n                            <p>{{mod.data.serviceproxy.oilquantity}}&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                离店油量\r\n                            </h2>\r\n                            <p>{{mod.data.serviceproxy.departureoil}}&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                进店里程\r\n                            </h2>\r\n                            <p>{{mod.data.serviceproxy.mileage}}&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                离店里程\r\n                            </h2>\r\n                            <p>{{mod.data.serviceproxy.departuremileage}}&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                到店时间\r\n                            </h2>\r\n                            <p>{{mod.data.serviceproxy.arrivalon}}&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                完工时间\r\n                            </h2>\r\n                            <p>{{mod.data.serviceproxy.finishat}}&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                维修工位\r\n                            </h2>\r\n                            <p>{{mod.data.serviceproxy.repairlocationid}}&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                状态\r\n                            </h2>\r\n                            <p>{{mod.data.serviceproxy.status}}&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                工时费用\r\n                            </h2>\r\n                            <p>￥{{mod.data.serviceproxy.hoursamount}}&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                零件费用\r\n                            </h2>\r\n                            <p>￥{{mod.data.serviceproxy.partsamount}}&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                优惠金额\r\n                            </h2>\r\n                            <p>￥{{mod.data.serviceproxy.discountamount}}&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>\r\n                            <h2>\r\n                                费用合计\r\n                            </h2>\r\n                            <p>￥{{mod.data.serviceproxy.amounttotal}}&nbsp;</p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-list>\r\n                <br />\r\n            </ion-card>\r\n        </div>\r\n        <div *ngSwitchCase=\"'item'\">\r\n\r\n            <ion-card>\r\n                <ion-card-header>\r\n                    <ion-card-title>\r\n                        <ion-label>维修项目</ion-label>\r\n                    </ion-card-title>\r\n                </ion-card-header>\r\n\r\n                <ion-list lines=\"full\">\r\n                    <ion-item *ngFor=\"let item of mod.data.serviceorderrepairitemArray;let key=index\">\r\n                        <ion-label>\r\n                            <h2>\r\n                                项目名称(编码)\r\n                            </h2>\r\n                            <p>\r\n                                {{item.name}}({{item.code}})\r\n                            </p>\r\n                            <h2>\r\n                                维修类别(类型)\r\n                            </h2>\r\n                            <p text-wrap>\r\n                                {{item.repairitemtypeid_Formatted}}({{item.repairitemtypedetailid_Formatted}})\r\n                            </p>\r\n                            <h2>\r\n                                费用明细\r\n                            </h2>\r\n                            <p>\r\n                                {{item.workinghour}}小时 X {{item.price}}  X {{item.discount}}  =  ¥{{item.repairamount}}\r\n                            </p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"mod.data.serviceorderrepairitemArray.length===0\">\r\n                        <ion-label>\r\n                            <p>\r\n                                当前单据没有维修项目\r\n                            </p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-list>\r\n                <br />\r\n            </ion-card>\r\n\r\n            <ion-card>\r\n                <ion-card-header>\r\n                    <ion-card-title>\r\n                        <ion-label>维修配件</ion-label>\r\n                    </ion-card-title>\r\n                </ion-card-header>\r\n\r\n                <ion-list lines=\"full\">\r\n                    <ion-item *ngFor=\"let item of mod.data.serviceorderpartArray;let key=index\">\r\n                        <ion-label>\r\n                            <h2>\r\n                                零件名称(编码)\r\n                            </h2>\r\n                            <p>\r\n                                {{item.name}}({{item.code}})\r\n                            </p>\r\n                            <h2>\r\n                                维修类别(类型)\r\n                            </h2>\r\n                            <p text-wrap>\r\n                                {{item.repairitemtypeid_Formatted}}({{item.repairitemtypedetailid_Formatted}})\r\n                            </p>\r\n                            <h2>\r\n                                费用明细\r\n                            </h2>\r\n                            <p>\r\n                                {{item.quantity}} X {{item.price}}  X {{item.discount}}  =  ¥{{item.amount}}\r\n                            </p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"mod.data.serviceorderpartArray.length===0\">\r\n                        <ion-label>\r\n                            <p>\r\n                                当前单据没有维修零件\r\n                            </p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-list>\r\n                <br />\r\n            </ion-card>\r\n        </div>\r\n\r\n\r\n        <div *ngSwitchCase=\"'att'\">\r\n\r\n            <ion-card>\r\n                <ion-card-header>\r\n                    <ion-card-title>\r\n                        <ion-label>维修履历</ion-label>\r\n                    </ion-card-title>\r\n                </ion-card-header>\r\n\r\n                <ion-list lines=\"full\">\r\n                    <ion-item *ngFor=\"let item of mod.data.serviceproxyResumeArray;let key=index\" [routerLink]=\"['/serving/sc/detail']\" [queryParams]=\"{id:item.Id}\">\r\n                        <ion-icon name=\"document\"></ion-icon>\r\n                        <ion-label style=\"margin-left:10px;\">\r\n                            <h6>{{item[\"Attributes\"][\"mcs_name\"]}}</h6>\r\n                            <p>{{item[\"Attributes\"][\"mcs_carplate\"]}}&nbsp;&nbsp;</p>\r\n                            <p>{{item[\"Attributes\"][\"createdon@OData.Community.Display.V1.FormattedValue\"]}}</p>\r\n                            <p>{{item[\"Attributes\"][\"_mcs_dealerid_value@OData.Community.Display.V1.FormattedValue\"]}}</p>\r\n                        </ion-label>\r\n                        <!--<ion-label style=\"text-align:right;\">\r\n                            <p>{{item[\"Attributes\"][\"mcs_ordertype@OData.Community.Display.V1.FormattedValue\"]}}</p>\r\n                        </ion-label>-->\r\n                    </ion-item>\r\n                    <ion-item *ngIf=\"mod.data.serviceproxyResumeArray.length===0\">\r\n                        <ion-label>\r\n                            <p>\r\n                                当前车辆没有维修履历\r\n                            </p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-list>\r\n                <br />\r\n            </ion-card>\r\n        </div>\r\n    </div>\r\n\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button>\r\n            <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n        </ion-fab-button>\r\n        <ion-fab-list side=\"top\">\r\n            <ion-fab-button color=\"success\" [routerLink]=\"['/serving/ri/edit']\"><ion-icon name=\"add\"></ion-icon></ion-fab-button>\r\n            <ion-fab-button *ngIf=\"mod.data.serviceproxy.status===100\" color=\"danger\" (click)=\"deleteOnClick()\"><ion-icon name=\"trash\"></ion-icon></ion-fab-button>\r\n            <ion-fab-button *ngIf=\"mod.data.serviceproxy.status===100\" color=\"warning\" [routerLink]=\"['/serving/sc/edit']\" [queryParams]=\"{id:mod.data.serviceproxy.id,actionCode:2}\"><ion-icon name=\"create\"></ion-icon></ion-fab-button>\r\n        </ion-fab-list>\r\n    </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/mc-sc.com/detail/detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/serving/mc-sc.com/detail/detail.module.ts ***!
  \***********************************************************/
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
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/serving/mc-sc.com/detail/detail.page.ts");







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

/***/ "./src/app/serving/mc-sc.com/detail/detail.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/serving/mc-sc.com/detail/detail.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*ion-card-header {\r\n    border-bottom: 0.1em solid rgb(200,199,204);\r\n\r\n    ion-card-title {\r\n        height: 0.3rem;\r\n\r\n        ion-icon {\r\n            font-size: 1rem;\r\n            float: left;\r\n            top: 50%;\r\n            transform: translateY(-50%);\r\n            font-size: 1rem;\r\n        }\r\n\r\n        ion-label {\r\n            float: left;\r\n            font-size: 1rem;\r\n            top: 50%;\r\n            transform: translateY(-50%);\r\n        }\r\n    }\r\n}\r\n\r\nion-list {\r\n    ion-item-divider {\r\n        ion-label {\r\n            font-size: 0.6rem;\r\n        }\r\n    }\r\n\r\n    ion-label:first-of-type {\r\n\r\n        h2 {\r\n            margin-left: 0rem;\r\n            font-size: 0.5rem;\r\n        }\r\n\r\n        p {\r\n            font-size: 0.3rem;\r\n        }\r\n    }\r\n\r\n}*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmluZy9tYy1zYy5jb20vZGV0YWlsL0U6XFxBcHBQcm9qZWN0XFxEQ0VNXFxEQ0VNLk1BcHAvc3JjXFxhcHBcXHNlcnZpbmdcXG1jLXNjLmNvbVxcZGV0YWlsXFxkZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9zZXJ2aW5nL21jLXNjLmNvbS9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDMENFIiwiZmlsZSI6InNyYy9hcHAvc2VydmluZy9tYy1zYy5jb20vZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjFlbSBzb2xpZCByZ2IoMjAwLDE5OSwyMDQpO1xyXG5cclxuICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgICBoZWlnaHQ6IDAuM3JlbTtcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgaW9uLWl0ZW0tZGl2aWRlciB7XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1sYWJlbDpmaXJzdC1vZi10eXBlIHtcclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjNyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSovXHJcbiIsIi8qaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMWVtIHNvbGlkIHJnYigyMDAsMTk5LDIwNCk7XHJcblxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICAgIGhlaWdodDogMC4zcmVtO1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgICBpb24taXRlbS1kaXZpZGVyIHtcclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxhYmVsOmZpcnN0LW9mLXR5cGUge1xyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuM3JlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Ki9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/serving/mc-sc.com/detail/detail.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/serving/mc-sc.com/detail/detail.page.ts ***!
  \*********************************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DetailPage = /** @class */ (function () {
    function DetailPage(_http, _page, _shareData, _valid, activeRoute) {
        this._http = _http;
        this._page = _page;
        this._shareData = _shareData;
        this._valid = _valid;
        this.activeRoute = activeRoute;
        this.tab = "info";
        this.mod = {
            apiUrl: '/Api/Serviceproxy/GetInfo',
            delUrl: '/Api/Serviceproxy/Delete',
            data: {
                serviceproxy: {
                    id: "",
                    customername: "",
                    carplate: "",
                    customerphone: "",
                    name: "",
                    shuttlename: "",
                    shuttlephone: "",
                    ordertype: "",
                    inpower: "",
                    outpower: "",
                    oilquantity: "",
                    departureoil: "",
                    mileage: "",
                    departuremileage: "",
                    arrivalon: "",
                    finishat: "",
                    repairlocationid: "",
                    hoursamount: "",
                    partsamount: "",
                    discountamount: "",
                    amounttotal: "",
                    dealerid: "",
                    status: 0,
                },
                serviceorderrepairitemArray: [],
                serviceorderpartArray: [],
                serviceproxyResumeArray: []
            }
        };
    }
    DetailPage.prototype.ionViewWillEnter = function () {
    };
    DetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParams.subscribe(function (params) {
            if (params['id'] != null && params['id'] != undefined) {
                _this.pageOnBind(params['id']);
                _this.tab = "info";
            }
        });
    };
    DetailPage.prototype.pageOnBind = function (id) {
        var _this = this;
        this.mod.data.serviceproxy.id = id;
        this._page.loadingShow();
        this._http.get(this.mod.apiUrl, {
            params: {
                guid: id,
            }
        }, function (res) {
            if (!_this._valid.isNull(res.Serviceproxy)) {
                _this.mod.data.serviceproxy["customername"] = res["Serviceproxy"]["Attributes"]["mcs_customername"];
                _this.mod.data.serviceproxy["carplate"] = res["Serviceproxy"]["Attributes"]["mcs_carplate"];
                _this.mod.data.serviceproxy["customerphone"] = res["Serviceproxy"]["Attributes"]["mcs_customerphone"];
                _this.mod.data.serviceproxy["name"] = res["Serviceproxy"]["Attributes"]["mcs_name"];
                _this.mod.data.serviceproxy["shuttlename"] = res["Serviceproxy"]["Attributes"]["mcs_shuttlename"];
                _this.mod.data.serviceproxy["shuttlephone"] = res["Serviceproxy"]["Attributes"]["mcs_shuttlephone"];
                _this.mod.data.serviceproxy["ordertype"] = res["Serviceproxy"]["Attributes"]["mcs_ordertype@OData.Community.Display.V1.FormattedValue"];
                _this.mod.data.serviceproxy["inpower"] = res["Serviceproxy"]["Attributes"]["mcs_inpower"];
                _this.mod.data.serviceproxy["outpower"] = res["Serviceproxy"]["Attributes"]["mcs_outpower"];
                _this.mod.data.serviceproxy["oilquantity"] = res["Serviceproxy"]["Attributes"]["mcs_oilquantity"];
                _this.mod.data.serviceproxy["departureoil"] = res["Serviceproxy"]["Attributes"]["mcs_departureoil"];
                _this.mod.data.serviceproxy["mileage"] = res["Serviceproxy"]["Attributes"]["mcs_mileage"];
                _this.mod.data.serviceproxy["departuremileage"] = res["Serviceproxy"]["Attributes"]["mcs_departuremileage"];
                _this.mod.data.serviceproxy["arrivalon"] = res["Serviceproxy"]["Attributes"]["mcs_arrivalon@OData.Community.Display.V1.FormattedValue"];
                _this.mod.data.serviceproxy["finishat"] = res["Serviceproxy"]["Attributes"]["mcs_finishat@OData.Community.Display.V1.FormattedValue"];
                _this.mod.data.serviceproxy["repairlocationid"] = res["Serviceproxy"]["Attributes"]["_mcs_repairlocationid_value@OData.Community.Display.V1.FormattedValue"];
                _this.mod.data.serviceproxy["status"] = res["Serviceproxy"]["Attributes"]["mcs_status@OData.Community.Display.V1.FormattedValue"];
                _this.mod.data.serviceproxy["hoursamount"] = res["Serviceproxy"]["Attributes"]["mcs_hoursamount"];
                _this.mod.data.serviceproxy["partsamount"] = res["Serviceproxy"]["Attributes"]["mcs_partsamount"];
                _this.mod.data.serviceproxy["discountamount"] = res["Serviceproxy"]["Attributes"]["mcs_discountamount"];
                _this.mod.data.serviceproxy["amounttotal"] = res["Serviceproxy"]["Attributes"]["mcs_amounttotal"];
                _this.mod.data.serviceproxy.status = res["Serviceproxy"]["Attributes"]["mcs_status"];
                _this.mod.data.serviceproxy["dealerid"] = res["Serviceproxy"]["Attributes"]["_mcs_dealerid_value@OData.Community.Display.V1.FormattedValue"];
            }
            if (!_this._valid.isNull(res.ServiceorderrepairitemList)) {
                for (var key in res.ServiceorderrepairitemList) {
                    var obj = {};
                    obj["name"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_name"];
                    obj["code"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairitemid@OData.Community.Display.V1.FormattedValue"];
                    obj["repairitemtypeid_Formatted"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairitemtypeid@OData.Community.Display.V1.FormattedValue"];
                    obj["repairitemtypedetailid_Formatted"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairitemtypedetailid@OData.Community.Display.V1.FormattedValue"];
                    obj["workinghou"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_workinghour"];
                    obj["price"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_price"];
                    obj["discount"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_discount"];
                    obj["repairamount"] = res.ServiceorderrepairitemList[key]["Attributes"]["a_x002e_mcs_repairamount"];
                    _this.mod.data.serviceorderrepairitemArray.push(obj);
                }
            }
            if (!_this._valid.isNull(res.ServiceorderpartList)) {
                for (var key in res.ServiceorderpartList) {
                    var obj = {};
                    obj["name"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_partsname"];
                    obj["code"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_partsid@OData.Community.Display.V1.FormattedValue"];
                    obj["repairitemtypeid_Formatted"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_repairitemtypeid@OData.Community.Display.V1.FormattedValue"];
                    obj["repairitemtypedetailid_Formatted"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_repairitemtypedetailid@OData.Community.Display.V1.FormattedValue"];
                    obj["quantity"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_quantity"];
                    obj["price"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_price"];
                    obj["discount"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_discount"];
                    obj["amount"] = res.ServiceorderpartList[key]["Attributes"]["a_x002e_mcs_amount"];
                    _this.mod.data.serviceorderpartArray.push(obj);
                }
            }
            _this.mod.data.serviceproxyResumeArray = res.ServiceproxyResumeList;
            _this._page.loadingHide();
        }, function (err) {
            _this._page.alert("消息提示", "数据加载异常");
            _this._page.loadingHide();
        });
    };
    //删除事件
    DetailPage.prototype.deleteOnClick = function () {
        var _this = this;
        this._page.confirm("确认提示", "您确认要执行此操作吗？", function () {
            _this._http.get(_this.mod.delUrl, {
                params: {
                    serviceproxyGuid: _this.mod.data.serviceproxy.id
                }
            }, function (res) {
                _this._page.navigateRoot("/serving/sc/list");
            }, function (err) {
                _this._page.alert("消息提示", "删除失败!");
            });
        });
    };
    DetailPage.ctorParameters = function () { return [
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_ShareData"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Valid"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/mc-sc.com/detail/detail.page.html"),
            styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/serving/mc-sc.com/detail/detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_ShareData"],
            app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Valid"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DetailPage);
    return DetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=serving-mc-sc-com-detail-detail-module-es5.js.map