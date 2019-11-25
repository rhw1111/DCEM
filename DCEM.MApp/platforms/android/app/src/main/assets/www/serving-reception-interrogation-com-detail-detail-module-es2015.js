(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-reception-interrogation-com-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/reception-interrogation.com/detail/detail.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/reception-interrogation.com/detail/detail.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/serving/ri/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <ion-label>问诊单明细</ion-label>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n    <ion-toolbar>\r\n        <ion-segment [(ngModel)]=\"tab\" color=\"primary\">\r\n            <ion-segment-button value=\"info\">\r\n                <ion-label>基础信息</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"check\">\r\n                <ion-label>环检项</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"att\">\r\n                <ion-label>维修履历</ion-label>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div [ngSwitch]=\"tab\">\r\n        <div *ngSwitchCase=\"'info'\">\r\n            <ion-list lines=\"full\">\r\n                <ion-item-divider color=\"primary\">\r\n                    <ion-label>\r\n                        车主资料\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            姓名\r\n                        </h2>\r\n                        <p>{{mod.data.serviceproxy.customername}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            车牌号\r\n                        </h2>\r\n                        <p>{{mod.data.serviceproxy.carplate}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            手机\r\n                        </h2>\r\n                        <p>{{mod.data.serviceproxy.customerphone}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            厅店\r\n                        </h2>\r\n                        <p>{{mod.data.serviceproxy.dealerid_formatted}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item-divider color=\"primary\">\r\n                    <ion-label>\r\n                        委托信息\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            问诊单号\r\n                        </h2>\r\n                        <p>{{mod.data.serviceproxy.name}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            送修人\r\n                        </h2>\r\n                        <p>{{mod.data.serviceproxy.shuttlename}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            送修人手机\r\n                        </h2>\r\n                        <p>{{mod.data.serviceproxy.shuttlephone}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            进店电量\r\n                        </h2>\r\n                        <p>{{mod.data.serviceproxy.inpower}}%&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            进店油量\r\n                        </h2>\r\n                        <p>{{mod.data.serviceproxy[\"oilquantity_formatted\"]}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            进店里程\r\n                        </h2>\r\n                        <p>{{mod.data.serviceproxy.mileage}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            到店时间\r\n                        </h2>\r\n                        <p>{{mod.data.serviceproxy.arrivalon}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            客户描述\r\n                        </h2>\r\n                        <p text-wrap>{{mod.data.serviceproxy.customercomment}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n\r\n            </ion-list>\r\n\r\n            <section style=\"text-align:center;\">\r\n                <ion-button (click)=\"toServiceproxyOnClick()\" style=\"width:40%\" color=\"primary\">转服务委托书</ion-button>\r\n            </section>\r\n            <br />\r\n            <br />\r\n        </div>\r\n        <div *ngSwitchCase=\"'check'\">\r\n\r\n            <ion-list lines=\"full\">\r\n                <div *ngFor=\"let key of objectKeys(mod.data.vehcheckresultMap)\">\r\n                    <ion-item-divider color=\"primary\">\r\n                        <ion-label>\r\n                            {{mod.data.vehcheckresultMap[key].text}}\r\n                        </ion-label>\r\n                    </ion-item-divider>\r\n\r\n                    <ion-item *ngFor=\"let item of mod.data.vehcheckresultMap[key].data;let key=index\">\r\n                        <ion-label>\r\n                            <h2>\r\n                                环检项\r\n                            </h2>\r\n                            <p>\r\n                                {{item.checkreultid}}&nbsp;\r\n                            </p>\r\n                            <h2>\r\n                                车辆位置\r\n                            </h2>\r\n                            <p>\r\n                                {{item.name}}&nbsp;\r\n                            </p>\r\n                            <h2>\r\n                                检查结果\r\n                            </h2>\r\n                            <p text-wrap>\r\n                                {{item.checkreult}}&nbsp;\r\n                            </p>\r\n                        </ion-label>\r\n                    </ion-item>\r\n\r\n                </div>\r\n                <ion-item *ngIf=\"objectKeys(mod.data.vehcheckresultMap).length===0\">\r\n                    <ion-label>\r\n                        <p>\r\n                            当前单据没有环检项\r\n                        </p>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-list>\r\n\r\n        </div>\r\n        <div *ngSwitchCase=\"'att'\">\r\n            <ion-list lines=\"full\">\r\n                <ion-item-divider color=\"primary\">\r\n                    <ion-label>\r\n                        维修履历\r\n                    </ion-label>\r\n                </ion-item-divider>\r\n                <ion-item *ngFor=\"let item of mod.data.serviceproxyResumeArray;let key=index\" [routerLink]=\"['/serving/sc/detail']\" [queryParams]=\"{id:item.Id}\">\r\n                    <ion-icon color=\"success\" name=\"document\"></ion-icon>\r\n                    <ion-label style=\"margin-left:10px\">\r\n                        <h6>{{item[\"Attributes\"][\"mcs_name\"]}}</h6>\r\n                        <p>{{item[\"Attributes\"][\"mcs_carplate\"]}}&nbsp;&nbsp;</p>\r\n                        <p>{{item[\"Attributes\"][\"createdon@OData.Community.Display.V1.FormattedValue\"]}}</p>\r\n                        <p>{{item[\"Attributes\"][\"_mcs_dealerid_value@OData.Community.Display.V1.FormattedValue\"]}}</p>\r\n                    </ion-label>\r\n                    <ion-label style=\"text-align:right;\">\r\n                        <p>{{item[\"Attributes\"][\"mcs_ordertype@OData.Community.Display.V1.FormattedValue\"]}}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item *ngIf=\"mod.data.serviceproxyResumeArray.length===0\">\r\n                    <ion-label>\r\n                        <p>\r\n                            当前车辆没有维修履历\r\n                        </p>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-list>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button>\r\n            <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n        </ion-fab-button>\r\n        <ion-fab-list side=\"top\">\r\n            <ion-fab-button color=\"success\" [routerLink]=\"['/serving/ri/edit']\"><ion-icon name=\"add\"></ion-icon></ion-fab-button>\r\n            <ion-fab-button *ngIf=\"mod.data.serviceproxy.status===100\" color=\"danger\" (click)=\"deleteOnClick()\"><ion-icon name=\"trash\"></ion-icon></ion-fab-button>\r\n            <ion-fab-button *ngIf=\"mod.data.serviceproxy.status===100\" color=\"warning\" [routerLink]=\"['/serving/ri/edit']\" [queryParams]=\"{id:mod.data.serviceproxy.id,actionCode:2}\"><ion-icon name=\"create\"></ion-icon></ion-fab-button>\r\n        </ion-fab-list>\r\n    </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/serving/reception-interrogation.com/detail/detail.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/serving/reception-interrogation.com/detail/detail.module.ts ***!
  \*****************************************************************************/
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
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/serving/reception-interrogation.com/detail/detail.page.ts");







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
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })
], DetailPageModule);



/***/ }),

/***/ "./src/app/serving/reception-interrogation.com/detail/detail.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/serving/reception-interrogation.com/detail/detail.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvcmVjZXB0aW9uLWludGVycm9nYXRpb24uY29tL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/serving/reception-interrogation.com/detail/detail.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/serving/reception-interrogation.com/detail/detail.page.ts ***!
  \***************************************************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let DetailPage = class DetailPage {
    constructor(_http, _page, _valid, _activeRoute) {
        this._http = _http;
        this._page = _page;
        this._valid = _valid;
        this._activeRoute = _activeRoute;
        this.tab = "info";
        this.mod = {
            apiUrl: '/Api/Serviceproxy/GetInfo',
            delUrl: '/Api/Serviceproxy/Delete',
            toServiceproxyUrl: '/Api/Serviceproxy/toServiceproxy',
            data: {
                serviceproxy: {
                    id: "",
                    customername: "",
                    carplate: "",
                    customerphone: "",
                    name: "",
                    shuttlename: "",
                    shuttlephone: "",
                    inpower: "",
                    mileage: "",
                    arrivalon: "",
                    customercomment: "",
                    status: 0,
                },
                vehcheckresultMap: {},
                serviceproxyResumeArray: []
            }
        };
        this.objectKeys = Object.keys;
    }
    //IonSegment
    ngOnInit() {
        this._activeRoute.queryParams.subscribe((params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.pageOnBind(params['id']);
            }
        });
    }
    pageOnBind(id) {
        this.mod.data.serviceproxy.id = id;
        this._page.loadingShow();
        this._http.get(this.mod.apiUrl, {
            params: {
                guid: id,
            }
        }, (res) => {
            if (!this._valid.isNull(res.Serviceproxy)) {
                this.mod.data.serviceproxy.customername = res["Serviceproxy"]["Attributes"]["mcs_customername"];
                this.mod.data.serviceproxy.carplate = res["Serviceproxy"]["Attributes"]["mcs_carplate"];
                this.mod.data.serviceproxy.customerphone = res["Serviceproxy"]["Attributes"]["mcs_customerphone"];
                this.mod.data.serviceproxy.name = res["Serviceproxy"]["Attributes"]["mcs_name"];
                this.mod.data.serviceproxy.shuttlename = res["Serviceproxy"]["Attributes"]["mcs_shuttlename"];
                this.mod.data.serviceproxy.shuttlephone = res["Serviceproxy"]["Attributes"]["mcs_shuttlephone"];
                this.mod.data.serviceproxy.inpower = res["Serviceproxy"]["Attributes"]["mcs_inpower"];
                this.mod.data.serviceproxy.mileage = res["Serviceproxy"]["Attributes"]["mcs_mileage"];
                this.mod.data.serviceproxy.arrivalon = res["Serviceproxy"]["Attributes"]["mcs_arrivalon@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.serviceproxy.customercomment = res["Serviceproxy"]["Attributes"]["mcs_customercomment"];
                this.mod.data.serviceproxy.status = res["Serviceproxy"]["Attributes"]["mcs_status"];
                this.mod.data.serviceproxy["dealerid_formatted"] = res["Serviceproxy"]["Attributes"]["_mcs_dealerid_value@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.serviceproxy["oilquantity_formatted"] = res["Serviceproxy"]["Attributes"]["mcs_oilquantity@OData.Community.Display.V1.FormattedValue"];
            }
            if (!this._valid.isNull(res.ServiceordercheckresultList)) {
                for (var key in res.ServiceordercheckresultList) {
                    var groupKey = res.ServiceordercheckresultList[key]["Attributes"]["mcs_checktype"];
                    if (typeof this.mod.data.vehcheckresultMap[groupKey] === "undefined") {
                        this.mod.data.vehcheckresultMap[groupKey] = {};
                        this.mod.data.vehcheckresultMap[groupKey]["text"] = res.ServiceordercheckresultList[key]["Attributes"]["mcs_checktype@OData.Community.Display.V1.FormattedValue"];
                        this.mod.data.vehcheckresultMap[groupKey].data = [];
                    }
                    var obj = {};
                    obj["checkreultid"] = res.ServiceordercheckresultList[key]["Attributes"]["mcs_name"];
                    obj["name"] = res.ServiceordercheckresultList[key]["Attributes"]["mcs_name"];
                    obj["checkreult"] = res.ServiceordercheckresultList[key]["Attributes"]["a_x002e_mcs_checkreult"];
                    this.mod.data.vehcheckresultMap[groupKey].data.push(obj);
                }
            }
            this.mod.data.serviceproxyResumeArray = res.ServiceproxyResumeList;
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
    //删除事件
    deleteOnClick() {
        this._page.confirm("确认提示", "您确认要执行此操作吗？", () => {
            this._http.get(this.mod.delUrl, {
                params: {
                    serviceproxyGuid: this.mod.data.serviceproxy.id
                }
            }, (res) => {
                this._page.navigateRoot("/serving/ri/list");
            }, (err) => {
                this._page.alert("消息提示", "删除失败!");
            });
        });
    }
    //转服务委托书
    toServiceproxyOnClick() {
        this._page.confirm("确认提示", "您确认要执行此操作吗？", () => {
            this._http.get(this.mod.toServiceproxyUrl, {
                params: {
                    serviceproxyGuid: this.mod.data.serviceproxy.id
                }
            }, (res) => {
                this._page.alert("消息提示", "操作成功!", () => {
                    this._page.navigateRoot("/serving/sc/detail", { id: this.mod.data.serviceproxy.id });
                });
            }, (err) => {
                this._page.alert("消息提示", "操作失败!");
            });
        });
    }
};
DetailPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Valid"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSegment"], null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSegment"])
], DetailPage.prototype, "IonSegment", void 0);
DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/reception-interrogation.com/detail/detail.page.html"),
        styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/serving/reception-interrogation.com/detail/detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Valid"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], DetailPage);



/***/ })

}]);
//# sourceMappingURL=serving-reception-interrogation-com-detail-detail-module-es2015.js.map