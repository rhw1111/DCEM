(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-technical-support-com-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/technical-support.com/detail/detail.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/technical-support.com/detail/detail.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/\"></ion-back-button>\r\n          </ion-buttons>\r\n          <ion-title>技术支持详情页面</ion-title>\r\n    </ion-toolbar>\r\n    \r\n     \r\n    <ion-toolbar>\r\n        <ion-segment [(ngModel)]=\"tab\" color=\"danger\">\r\n            <ion-segment-button value=\"info\" >\r\n                <ion-label>基础信息</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"att\">\r\n            <ion-label>附件信息</ion-label>\r\n        </ion-segment-button>\r\n        </ion-segment>\r\n</ion-toolbar>\r\n  </ion-header> \r\n    \r\n  \r\n  \r\n  <ion-content  > \r\n      <div [ngSwitch]=\"tab\">\r\n          <div *ngSwitchCase=\"'info'\">\r\n\r\n              <ion-list lines=\"full\">\r\n                  <ion-item-divider color=\"primary\">\r\n                      <ion-label>\r\n                          基础信息\r\n                      </ion-label>\r\n                  </ion-item-divider>\r\n                  <ion-item>\r\n                      <ion-label>\r\n                          <h2>\r\n                            主题\r\n                          </h2>\r\n                          <p>{{mod.data.TechnicalSupport.mcs_title}}&nbsp;</p>\r\n                      </ion-label>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                      <ion-label>\r\n                          <h2>\r\n                            服务委托书\r\n                          </h2>\r\n                          <p>{{mod.data.TechnicalSupport.mcs_serviceorderid}}&nbsp;</p>\r\n                      </ion-label>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                      <ion-label>\r\n                          <h2>\r\n                            技术主管\r\n                          </h2>\r\n                          <p>{{mod.data.TechnicalSupport.mcs_repairnameid}}&nbsp;</p>\r\n                      </ion-label>\r\n                  </ion-item>\r\n                 \r\n                  <ion-item>\r\n                      <ion-label>\r\n                          <h2>\r\n                            维修日期\r\n                          </h2>\r\n                          <p>{{mod.data.TechnicalSupport.mcs_repairdate}}&nbsp;</p>\r\n                      </ion-label>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                      <ion-label>\r\n                          <h2>\r\n                            邮箱\r\n                          </h2>\r\n                          <p>{{mod.data.TechnicalSupport.mcs_email}}&nbsp;</p>\r\n                      </ion-label>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                          电话\r\n                        </h2>\r\n                        <p>{{mod.data.TechnicalSupport.mcs_phone}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                 \r\n            \r\n                  <ion-item-divider color=\"primary\">\r\n                      <ion-label>\r\n                          车辆信息\r\n                      </ion-label>\r\n                  </ion-item-divider>\r\n                  <ion-item>\r\n                      <ion-label>\r\n                          <h2>\r\n                              车主\r\n                          </h2>\r\n                          <p>{{mod.data.TechnicalSupport.mcs_customername}}&nbsp;</p>\r\n                      </ion-label>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                      <ion-label>\r\n                          <h2>\r\n                              车主电话\r\n                          </h2>\r\n                          <p>{{mod.data.TechnicalSupport.mcs_customerphone}}&nbsp;</p>\r\n                      </ion-label>\r\n                  </ion-item>\r\n                \r\n                  <ion-item>\r\n                      <ion-label>\r\n                          <h2>\r\n                            车牌号\r\n                          </h2>\r\n                          <p>{{mod.data.TechnicalSupport.mcs_carplate}}&nbsp;</p>\r\n                      </ion-label>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                          VIN\r\n                        </h2>\r\n                        <p>{{mod.data.TechnicalSupport.mcs_customerid}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>\r\n                      <h2>\r\n                        发动机号\r\n                      </h2>\r\n                      <p>{{mod.data.TechnicalSupport.mcs_enginenumber}}&nbsp;</p>\r\n                  </ion-label>\r\n              </ion-item>\r\n                  <ion-item>\r\n                      <ion-label>\r\n                          <h2>\r\n                            里程数\r\n                          </h2>\r\n                          <p>{{mod.data.TechnicalSupport.mcs_mileage}}&nbsp;</p>\r\n                      </ion-label>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                      <ion-label>\r\n                          <h2>\r\n                            电机型号\r\n                          </h2>\r\n                          <p>{{mod.data.TechnicalSupport.mcs_motormodel}}&nbsp;</p>\r\n                      </ion-label>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                      <ion-label>\r\n                          <h2>\r\n                            电池型号\r\n                          </h2>\r\n                          <p>{{mod.data.TechnicalSupport.mcs_batterymodel}}&nbsp;</p>\r\n                      </ion-label>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                          电池序列号\r\n                        </h2>\r\n                        <p>{{mod.data.TechnicalSupport.mcs_batteryserialnumber}}&nbsp;</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>\r\n                      <h2>\r\n                        是否加装\r\n                      </h2>\r\n                      <p>{{mod.data.TechnicalSupport.mcs_ismodifiedparts}}&nbsp;</p>\r\n                  </ion-label>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                      加装描述\r\n                    </h2>\r\n                    <p>{{mod.data.TechnicalSupport.mcs_modifiedpartscontent}}&nbsp;</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            \r\n            <ion-item-divider color=\"primary\">\r\n              <ion-label>\r\n                  故障描述\r\n              </ion-label>\r\n            </ion-item-divider>\r\n            <ion-item>\r\n              <ion-label>\r\n                  <h2>\r\n                    技术系统\r\n                  </h2>\r\n                  <p>{{mod.data.TechnicalSupport.mcs_customername}}&nbsp;</p>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>\r\n                  <h2>\r\n                    故障类别代码\r\n                  </h2>\r\n                  <p>{{mod.data.TechnicalSupport.mcs_malfunctiontypeid}}&nbsp;</p>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>\r\n                  <h2>\r\n                    故障描述\r\n                  </h2>\r\n                  <p>{{mod.data.TechnicalSupport.mcs_malfunctiontypecontent}}&nbsp;</p>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>\r\n                  <h2>\r\n                    检查诊断描述\r\n                  </h2>\r\n                  <p>{{mod.data.TechnicalSupport.mcs_diagnosiscontent}}&nbsp;</p>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>\r\n                  <h2>\r\n                    已更换零件\r\n                  </h2>\r\n                  <p>{{mod.data.TechnicalSupport.mcs_replacedparts}}&nbsp;</p>\r\n              </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>\r\n                  <h2>\r\n                    具体故障现象\r\n                  </h2>\r\n                  <p>{{mod.data.TechnicalSupport.mcs_malfunctioncontent}}&nbsp;</p>\r\n              </ion-label>\r\n            </ion-item>\r\n            \r\n              </ion-list>  \r\n          </div>\r\n\r\n          <div *ngSwitchCase=\"'att'\">\r\n\r\n<ion-list>\r\n\r\n    <ion-item-divider color=\"primary\">\r\n        <ion-label>\r\n            附件列表\r\n        </ion-label>\r\n    </ion-item-divider>\r\n \r\n    <ion-item-group>\r\n        <ion-item  >\r\n            <ion-label>\r\n                <h2>\r\n                    附件名称 &nbsp;\r\n                </h2> \r\n                <h2>\r\n                    附件大小   &nbsp;\r\n                </h2> \r\n                <h2  >\r\n                  操作\r\n                </h2>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngFor=\"let item of mod.data.DealerAttachment;let key=index\">\r\n            <ion-label>\r\n                <p> \r\n                     {{item.mcs_filename}}&nbsp;\r\n                </p>\r\n                \r\n                <p>\r\n                   {{item.mcs_filesize}}&nbsp;\r\n                </p> \r\n                <p text-wrap>\r\n                  预览\r\n                </p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"mod.data.DealerAttachment.length===0\">\r\n            <ion-label>\r\n                <p>\r\n                    当前附件记录\r\n                </p>\r\n            </ion-label>\r\n        </ion-item>\r\n    </ion-item-group>\r\n</ion-list>\r\n            </div>\r\n  \r\n      </div>\r\n  \r\n   \r\n\r\n\r\n  </ion-content>\r\n  \r\n  \r\n  \r\n  \r\n  "

/***/ }),

/***/ "./src/app/serving/technical-support.com/detail/detail.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/serving/technical-support.com/detail/detail.module.ts ***!
  \***********************************************************************/
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
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/serving/technical-support.com/detail/detail.page.ts");







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

/***/ "./src/app/serving/technical-support.com/detail/detail.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/serving/technical-support.com/detail/detail.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvdGVjaG5pY2FsLXN1cHBvcnQuY29tL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/serving/technical-support.com/detail/detail.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/serving/technical-support.com/detail/detail.page.ts ***!
  \*********************************************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DetailPage = class DetailPage {
    constructor(_http, _page, activeRoute) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this.tab = "info";
        this.mod = {
            apiUrl: '/Api/tech-support/GetDetail',
            data: {
                TechnicalSupport: {
                    mcs_title: "",
                    mcs_serviceorderid: "",
                    mcs_repairnameid: "",
                    mcs_repairdate: "",
                    mcs_email: "",
                    mcs_phone: "",
                    mcs_customername: "",
                    mcs_customerphone: "",
                    mcs_customerid: "",
                    mcs_carplate: "",
                    mcs_enginenumber: "",
                    mcs_mileage: "",
                    mcs_motormodel: "",
                    mcs_batteryserialnumber: "",
                    mcs_batterymodel: "",
                    mcs_ismodifiedparts: "",
                    mcs_modifiedpartscontent: "",
                    mcs_techsystem: "",
                    mcs_malfunctiontypeid: "",
                    mcs_malfunctiontypecontent: "",
                    mcs_diagnosiscontent: "",
                    mcs_replacedparts: "",
                    mcs_malfunctioncontent: "",
                },
                DealerAttachment: [],
                Warrantyattachment: []
            }
        };
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params) => {
            if (params['id'] != null && params['id'] != undefined) {
                // this._page.alert("消息提示", params['id']);
                this.pageOnBind(params['id']);
            }
        });
    }
    pageOnBind(id) {
        this._page.loadingShow();
        this._http.get(this.mod.apiUrl, {
            params: {
                id: id,
            }
        }, (res) => {
            if (res.Carserviceadvisor !== null) {
                debugger;
                this.mod.data.TechnicalSupport.mcs_title = res["TechnicalSupport"]["Attributes"]["mcs_title"];
                this.mod.data.TechnicalSupport.mcs_serviceorderid = res["TechnicalSupport"]["Attributes"]["_mcs_serviceorderid_value@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.TechnicalSupport.mcs_repairnameid = res["TechnicalSupport"]["Attributes"]["_mcs_repairnameid_value@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.TechnicalSupport.mcs_repairdate = res["TechnicalSupport"]["Attributes"]["mcs_repairdate@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.TechnicalSupport.mcs_email = res["TechnicalSupport"]["Attributes"]["mcs_email"];
                this.mod.data.TechnicalSupport.mcs_phone = res["TechnicalSupport"]["Attributes"]["mcs_phone"];
                this.mod.data.TechnicalSupport.mcs_customername = res["TechnicalSupport"]["Attributes"]["mcs_customername"];
                this.mod.data.TechnicalSupport.mcs_customerphone = res["TechnicalSupport"]["Attributes"]["mcs_customerphone"];
                this.mod.data.TechnicalSupport.mcs_customerid = res["TechnicalSupport"]["Attributes"]["_mcs_customerid_value@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.TechnicalSupport.mcs_carplate = res["TechnicalSupport"]["Attributes"]["mcs_carplate"];
                this.mod.data.TechnicalSupport.mcs_enginenumber = res["TechnicalSupport"]["Attributes"]["mcs_enginenumber"];
                this.mod.data.TechnicalSupport.mcs_mileage = res["TechnicalSupport"]["Attributes"]["mcs_mileage"];
                this.mod.data.TechnicalSupport.mcs_motormodel = res["TechnicalSupport"]["Attributes"]["mcs_motormodel"];
                this.mod.data.TechnicalSupport.mcs_batteryserialnumber = res["TechnicalSupport"]["Attributes"]["mcs_batteryserialnumber"];
                this.mod.data.TechnicalSupport.mcs_batterymodel = res["TechnicalSupport"]["Attributes"]["mcs_batterymodel"];
                this.mod.data.TechnicalSupport.mcs_ismodifiedparts = res["TechnicalSupport"]["Attributes"]["mcs_ismodifiedparts@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.TechnicalSupport.mcs_modifiedpartscontent = res["TechnicalSupport"]["Attributes"]["mcs_modifiedpartscontent"];
                this.mod.data.TechnicalSupport.mcs_techsystem = res["TechnicalSupport"]["Attributes"]["mcs_techsystem@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.TechnicalSupport.mcs_malfunctiontypeid = res["TechnicalSupport"]["Attributes"]["_mcs_malfunctiontypeid_value@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.TechnicalSupport.mcs_malfunctiontypecontent = res["TechnicalSupport"]["Attributes"]["mcs_malfunctiontypecontent"];
                this.mod.data.TechnicalSupport.mcs_diagnosiscontent = res["TechnicalSupport"]["Attributes"]["mcs_diagnosiscontent"];
                this.mod.data.TechnicalSupport.mcs_replacedparts = res["TechnicalSupport"]["Attributes"]["mcs_replacedparts"];
                this.mod.data.TechnicalSupport.mcs_malfunctioncontent = res["TechnicalSupport"]["Attributes"]["mcs_malfunctioncontent"];
            }
            if (res.DealerAttachment != null) {
                for (var key in res.DealerAttachment) {
                    var obj = {};
                    obj["mcs_filename"] = res.DealerAttachment[key]["Attributes"]["mcs_filename"];
                    obj["mcs_filesize"] = res.DealerAttachment[key]["Attributes"]["mcs_filesize"];
                    this.mod.data.DealerAttachment.push(obj);
                }
            }
            if (res.Warrantyattachment != null) {
                for (var key in res.Warrantyattachment) {
                    var obj = {};
                    obj["mcs_filename"] = res.Warrantyattachment[key]["Attributes"]["mcs_name"];
                    obj["mcs_filesize"] = res.Warrantyattachment[key]["Attributes"]["mcs_filesize"];
                    this.mod.data.Warrantyattachment.push(obj);
                }
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
};
DetailPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/technical-support.com/detail/detail.page.html"),
        styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/serving/technical-support.com/detail/detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], DetailPage);



/***/ })

}]);
//# sourceMappingURL=serving-technical-support-com-detail-detail-module-es2015.js.map