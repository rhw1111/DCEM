(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-delivery-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/delivery/detail/detail.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/delivery/detail/detail.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/saleing/delivery/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>\r\n            <ion-label>交车单详情</ion-label>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n        <ion-segment [(ngModel)]=\"tab\" color=\"danger\">\r\n            <ion-segment-button value=\"infolist\" checked (ionSelect)=\"pageOnBind()\">\r\n                <ion-label>基础信息</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"Linklist\" (ionSelect)=\"pageOnLogCalllist($event)\">\r\n                <ion-label>收款记录</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"Breedlist\" (ionSelect)=\"pageOnActivitylist()\">\r\n                <ion-label>整车物料</ion-label>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <div [ngSwitch]=\"tab\">\r\n        <div *ngSwitchCase=\"'infolist'\">\r\n            <ion-card>\r\n                <ion-card-content>\r\n                    <ion-list>\r\n                        <ion-item-group>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>VIN</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.vin}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>交车单号</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.code}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>交车状态</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.deliverystatus}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>整车订单号</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.ro}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>结清状态</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.settlestatus}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>交车时间</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.deliveryon}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>预约时间</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.appointmenton}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>客户约定</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.customerrequest}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>厅店应收金额</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.receiptamount}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>是否提交PDI检测</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.submitpdi}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>PDI检测结果</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.pdiapproval}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>PDI检测时间</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.pdidetecton}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>服务顾问</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{model.info.serviceproxyid}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                        </ion-item-group>\r\n                    </ion-list>\r\n                </ion-card-content>\r\n            </ion-card>\r\n            <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n                <ion-fab-button>\r\n                    <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n                </ion-fab-button>\r\n                <ion-fab-list side=\"top\">\r\n                    <ion-fab-button *ngIf=\"model.status==2\" color=\"primary\" style=\"width:60px;\"\r\n                        [routerLink]=\"['/saleing/delivery/pdiservice']\" [queryParams]=\"{id:model.id}\">PDI检测\r\n                    </ion-fab-button>\r\n                    <ion-fab-button *ngIf=\"model.status==3\" color=\"success\" style=\"width:60px;\"\r\n                        [routerLink]=\"['/saleing/delivery/appointment']\" [queryParams]=\"{id:model.id}\">预约交车\r\n                    </ion-fab-button>\r\n                    <ion-fab-button color=\"danger\" *ngIf=\"model.settles==0\" style=\"width:60px;\"\r\n                        [routerLink]=\"['/saleing/orderpaydetail/edit']\" [queryParams]=\"{id:model.id}\">\r\n                        收取尾款</ion-fab-button>\r\n                    <ion-fab-button color=\"dark\" *ngIf=\"model.status==4\" style=\"width:60px;\"\r\n                        (click)=\"presentAlertConfim()\">\r\n                        收款完成\r\n                    </ion-fab-button>\r\n                </ion-fab-list>\r\n            </ion-fab>\r\n        </div>\r\n        <div *ngSwitchCase=\"'Linklist'\">\r\n            <ion-list lines=\"full\">\r\n                <ion-item-sliding *ngFor=\"let item of orderpaymodel.orderpayrecords;let key=index\">\r\n                    <ion-item [routerLink]=\"['/saleing/orderpaydetail/detail']\" [queryParams]=\"{id:item.id}\">\r\n                        <ion-icon slot=\"start\" color=\"primary\" name=\"cash\" size=\"large\"></ion-icon>\r\n                        <ion-label>\r\n                            <h2>{{item.code}}</h2>\r\n                            <p>{{item.amount}}</p>\r\n                            <p>{{item.createdon}}</p>\r\n                        </ion-label>\r\n                        <ion-note slot=\"end\">\r\n                            {{item.type}}\r\n                        </ion-note>\r\n                    </ion-item>\r\n                    <ion-item-options side=\"end\">\r\n                        <ion-item-option color=\"tertiary\" expandable [routerLink]=\"['/saleing/orderpaydetail/detail']\"\r\n                            [queryParams]=\"{id:item.id}\">\r\n                            详情\r\n                        </ion-item-option>\r\n                    </ion-item-options>\r\n                </ion-item-sliding>\r\n            </ion-list>\r\n            <ion-label *ngIf=\"this.orderpaymodel.isending\" text-center>\r\n                <p>\r\n                    没有更多的记录显示啦\r\n                </p>\r\n            </ion-label>\r\n            <ion-infinite-scroll #myInfiniteScroll threshold=\"100px\" (ionInfinite)=\"doLoading($event)\">\r\n                <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载更多...\">\r\n                </ion-infinite-scroll-content>\r\n            </ion-infinite-scroll>\r\n        </div>\r\n        <div *ngSwitchCase=\"'Breedlist'\">\r\n            <ion-card>\r\n                <ion-card-content>\r\n                    <ion-list>\r\n                        <ion-item-group>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>车平台</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{materielmodel.data.cpt}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>基本车型</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{materielmodel.data.jbcx}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>车型年</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{materielmodel.data.cxn}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>动力类型</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{materielmodel.data.dllx}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>内饰颜色</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{materielmodel.data.nsys}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                            <ion-item>\r\n                                <ion-label>\r\n                                    <h2>外饰颜色</h2>\r\n                                </ion-label>\r\n                                <ion-note slot=\"end\">\r\n                                    <p>{{materielmodel.data.wsys}}</p>\r\n                                </ion-note>\r\n                            </ion-item>\r\n                        </ion-item-group>\r\n                    </ion-list>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </div>\r\n    </div>\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/saleing/delivery/detail/detail.page.ts");







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

/***/ "./src/app/saleing/delivery/detail/detail.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/saleing/delivery/detail/detail.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvZGVsaXZlcnkvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MifQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/logininfo.storage */ "./src/app/base/base.ser/logininfo.storage.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let DetailPage = class DetailPage {
    constructor(_http, _page, activeRoute, _userinfo, alertController) {
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
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((data) => {
            if (data['id'] != null && data['id'] != undefined) {
                this.model.id = data['id'];
                this.orderpaymodel.search.DeliveryId = data['id'];
                this.moneycompletedmodel.data.Id = data['id'];
                this.pageOnBind();
            }
        });
    }
    //基础信息
    pageOnBind() {
        this._page.loadingShow();
        this._http.postForToaken(this.model.apiUrlDetail, { 'id': this.model.id, 'userid': this._userinfo.GetSystemUserId() }, (res) => {
            if (res !== null) {
                var attr = res["Attributes"];
                this.model.info.vin = attr["_mcs_vin_value@OData.Community.Display.V1.FormattedValue"];
                this.model.info.code = attr["mcs_code"];
                this.model.info.deliverystatus = attr["mcs_deliverystatus@OData.Community.Display.V1.FormattedValue"];
                this.model.status = attr["mcs_deliverystatus"];
                this.model.settles = attr["mcs_settlestatus"];
                this.model.info.ro = attr["_mcs_vehorder_value@OData.Community.Display.V1.FormattedValue"];
                this.model.info.settlestatus = attr["mcs_settlestatus@OData.Community.Display.V1.FormattedValue"];
                this.model.info.deliveryon = attr["mcs_deliveryon@OData.Community.Display.V1.FormattedValue"];
                this.model.info.appointmenton = attr["mcs_appointmenton@OData.Community.Display.V1.FormattedValue"];
                this.model.info.customerrequest = attr["mcs_customerrequest"];
                this.model.info.receiptamount = attr["mcs_receiptamount@OData.Community.Display.V1.FormattedValue"];
                this.model.info.submitpdi = attr["mcs_submitpdi@OData.Community.Display.V1.FormattedValue"];
                this.model.info.submitpdion = attr["mcs_submitpdion@OData.Community.Display.V1.FormattedValue"];
                this.model.info.pdiapproval = attr["mcs_pdiapproval@OData.Community.Display.V1.FormattedValue"];
                this.model.info.pdidetecton = attr["mcs_pdidetecton@OData.Community.Display.V1.FormattedValue"];
                this.model.info.serviceproxyid = attr["_mcs_serviceproxyid_value@OData.Community.Display.V1.FormattedValue"];
                this.materielmodel.materielId = attr["_mcs_vehmaterial_value"];
            }
            else {
                this._page.alert("消息提示", "交车单详情加载异常");
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "交车单详情加载异常");
            this._page.loadingHide();
        });
    }
    //收款记录
    pageOnLogCalllist(event) {
        if (this.orderpaymodel.orderpayrecords.length == 0) {
            this.pageOnlist(event);
        }
    }
    //加载下一页
    doLoading(event) {
        this.orderpaymodel.search.pageindex++;
        this.orderpaymodel.isending = false;
        this.pageOnlist(event);
    }
    pageOnlist(event) {
        this._page.loadingShow();
        this._http.postForToaken(this.orderpaymodel.apiUrlDetailOrderPay, this.orderpaymodel.search, (res) => {
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
                    this.orderpaymodel.orderpayrecords.push(obj);
                }
                event ? event.target.complete() : '';
                if (data.length < this.orderpaymodel.search.pagesize) {
                    event ? event.target.disabled = true : "";
                    this.orderpaymodel.isending = true;
                }
                this._page.loadingHide();
            }
            else {
                this._page.alert("消息提示", "原始线索数据加载异常");
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "原始线索数据加载异常");
            this._page.loadingHide();
        });
    }
    //整车物料
    pageOnActivitylist() {
        this._page.loadingShow();
        this._http.postForToaken(this.materielmodel.apiUrl, { 'materielId': this.materielmodel.materielId }, (res) => {
            if (res !== null) {
                debugger;
                var attr = res["Attributes"];
                this.materielmodel.data.cpt = attr["_mcs_carplatformid_value@OData.Community.Display.V1.FormattedValue"];
                this.materielmodel.data.jbcx = attr["_mcs_carmodelid_value@OData.Community.Display.V1.FormattedValue"];
                this.materielmodel.data.cxn = attr["mcs_caryear@OData.Community.Display.V1.FormattedValue"];
                this.materielmodel.data.dllx = attr["_mcs_powertypeid_value@OData.Community.Display.V1.FormattedValue"];
                this.materielmodel.data.nsys = attr["_mcs_incolourid_value@OData.Community.Display.V1.FormattedValue"];
                this.materielmodel.data.wsys = attr["_mcs_excolourid_value@OData.Community.Display.V1.FormattedValue"];
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.loadingHide();
        });
    }
    //收款完成
    presentAlertConfim() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '订单收款完成',
                message: '确定收款完成吗？',
                buttons: [
                    {
                        text: '取消',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: '确定',
                        handler: () => {
                            this._page.loadingShow();
                            this._http.postForToaken(this.moneycompletedmodel.apiUrl, this.moneycompletedmodel.data, (res) => {
                                if (res !== null) {
                                    debugger;
                                    if (res.Result) {
                                        this._page.alert("消息提示", "交车单收款完成！", () => {
                                            //跳转到开票记录 
                                        });
                                    }
                                    else {
                                        this._page.alert("消息提示", res.Description);
                                    }
                                }
                                this._page.loadingHide();
                            }, (err) => {
                                this._page.loadingHide();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
DetailPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__["Storage_LoginInfo"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
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



/***/ })

}]);
//# sourceMappingURL=saleing-delivery-detail-detail-module-es2015.js.map