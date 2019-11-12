(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-mcs-onlylead-com-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-onlylead.com/detail/detail.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/mcs-onlylead.com/detail/detail.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button text=\"返回\" defaultHref=\"/saleing/onlylead/list\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n          <ion-label>唯一线索明细</ion-label>\r\n      </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-segment [(ngModel)]=\"tab\" color=\"danger\">\r\n        <ion-segment-button value=\"infolist\">\r\n            <ion-label>基础信息</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"Linklist\">\r\n            <ion-label>跟进记录</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"Breedlist\">\r\n            <ion-label>培育任务</ion-label>\r\n        </ion-segment-button>\r\n    </ion-segment>\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div [ngSwitch]=\"tab\">\r\n     <div *ngSwitchCase=\"'infolist'\">\r\n        <ion-list lines=\"full\">\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        姓名\r\n                    </h2>\r\n                    <p>{{mod.data.mcs_name}}&nbsp;</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        手机\r\n                    </h2>\r\n                    <p>{{mod.data.mcs_mobilephone}}&nbsp;</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        线索来源\r\n                    </h2>\r\n                    <p>{{mod.data.mcs_leadorigin}}&nbsp;</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        称呼\r\n                    </h2>\r\n                    <p>{{mod.data.mcs_gender}}&nbsp;</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>\r\n                  <h2>\r\n                      邮箱\r\n                  </h2>\r\n                  <p>{{mod.data.mcs_emailaddress1}}&nbsp;</p>\r\n              </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n              <ion-label>\r\n                  <h2>\r\n                      评分\r\n                  </h2>\r\n                  <p>{{mod.data.mcs_accountpoints}}&nbsp;</p>\r\n              </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n              <ion-label>\r\n                  <h2>\r\n                      省\r\n                  </h2>\r\n                  <p>{{mod.data.mcs_provinceid}}&nbsp;</p>\r\n              </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n              <ion-label>\r\n                  <h2>\r\n                      市\r\n                  </h2>\r\n                  <p>{{mod.data.mcs_cityid}}&nbsp;</p>\r\n              </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n              <ion-label>\r\n                  <h2>\r\n                      区\r\n                  </h2>\r\n                  <p>{{mod.data.mcs_districtid}}&nbsp;</p>\r\n              </ion-label>\r\n          </ion-item>         \r\n          <ion-item>\r\n              <ion-label>\r\n                  <h2>\r\n                      用车省份\r\n                  </h2>\r\n                  <p>{{mod.data.mcs_usecarprovince}}&nbsp;</p>\r\n              </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n              <ion-label>\r\n                  <h2>\r\n                      用车城市\r\n                  </h2>\r\n                  <p>{{mod.data.mcs_usecarcity}}&nbsp;</p>\r\n              </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n\r\n        <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n            <ion-fab-button>\r\n                <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n            </ion-fab-button>\r\n            <ion-fab-list side=\"top\">\r\n                <ion-fab-button  [routerLink]=\"['/saleing/contactrecord/edit']\" [queryParams]=\"{id:mod.data.mcs_onlyleadid}\"><ion-icon name=\"add\" ></ion-icon>联络</ion-fab-button>\r\n                <ion-fab-button  [routerLink]=\"['/saleing/cultivatetask/edit']\" [queryParams]=\"{id:mod.data.mcs_onlyleadid}\"><ion-icon name=\"add\"></ion-icon>培育</ion-fab-button>\r\n                <ion-fab-button  [routerLink]=\"['/saleing/account/edit']\" [queryParams]=\"{id:mod.data.mcs_onlyleadid}\"><ion-icon name=\"add\"></ion-icon>销售</ion-fab-button>\r\n            </ion-fab-list>\r\n        </ion-fab>\r\n\r\n     </div>\r\n     <div *ngSwitchCase=\"'Linklist'\">\r\n            <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n            <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"下拉刷新\" refreshingSpinner=\"circles\" refreshingText=\"刷新中...\">\r\n            </ion-refresher-content>\r\n            </ion-refresher>-->\r\n            <ion-list lines=\"full\" >\r\n             <ion-item-sliding *ngFor=\"let r of mod.datalist\">\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>回访时间：{{FormatToDateTime(r.mcs_visittime)}}</h2>\r\n                        <p>回访时间：{{r.mcs_results}}</p>\r\n                        <p>回访内容：{{r.mcs_content}}</p>\r\n                    </ion-label>\r\n                    <ion-icon *ngIf=\"\" name=\"phone-portrait\" size=\"small\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item-options side=\"end\">\r\n                    <ion-item-option color=\"tertiary\" expandable [routerLink]=\"['/saleing/contactrecord/edit']\" [queryParams]=\"{mcslogcallid:r.mcs_logcallid}\">\r\n                        编辑\r\n                    </ion-item-option>\r\n                   \r\n                </ion-item-options>\r\n             </ion-item-sliding>\r\n            </ion-list>\r\n            <ion-row *ngIf=\"mod.isending\">\r\n                <ion-col class=\"nodata\" text-center>\r\n                    没有更多logcall\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-infinite-scroll #myInfiniteScroll threshold=\"100px\" (ionInfinite)=\"doNextLoadingLog($event)\"> \r\n                <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载更多...\"> \r\n                </ion-infinite-scroll-content>\r\n            </ion-infinite-scroll>\r\n            <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n                <ion-fab-button [routerLink]=\"['/saleing/contactrecord/edit']\" [queryParams]=\"{id:mod.data.mcs_onlyleadid}\">\r\n                    <ion-icon name=\"add\"></ion-icon>\r\n                </ion-fab-button>\r\n            </ion-fab>\r\n     </div>\r\n     <div *ngSwitchCase=\"'Breedlist'\">\r\n            <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n            <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"下拉刷新\" refreshingSpinner=\"circles\" refreshingText=\"刷新中...\">\r\n            </ion-refresher-content>\r\n            </ion-refresher>-->\r\n            <ion-list lines=\"full\" >\r\n                    <ion-item-sliding *ngFor=\"let r of mod.datalist2\">\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <p>本次跟进内容：{{r.mcs_thisfollowupcontent}}</p>\r\n                        <p>跟进时间：{{FormatToDateTime(r.createdon)}}</p>\r\n                        <p>任务状态：{{r.mcs_activitystatus}}</p>      \r\n                        <p>重要级别：{{r.mcs_importantlevel}}</p>                   \r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item-options side=\"end\">\r\n                    <ion-item-option color=\"tertiary\" [routerLink]=\"['/saleing/cultivatetask/edit']\" [queryParams]=\"{id:r.mcs_activityid}\">\r\n                        编辑\r\n                    </ion-item-option>               \r\n                </ion-item-options>\r\n            </ion-item-sliding>\r\n            </ion-list>\r\n            <ion-row *ngIf=\"mod.isending\">\r\n                <ion-col class=\"nodata\" text-center>\r\n                    没有更多培育任务\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-infinite-scroll #myInfiniteScroll threshold=\"100px\" (ionInfinite)=\"doNextLoadingAc($event)\"> \r\n                <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载更多...\"> \r\n                </ion-infinite-scroll-content>\r\n            </ion-infinite-scroll>\r\n            <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n                <ion-fab-button [routerLink]=\"['/saleing/cultivatetask/edit']\" [queryParams]=\"{id:mod.data.mcs_onlyleadid}\">\r\n                    <ion-icon name=\"add\"></ion-icon>\r\n                </ion-fab-button>\r\n            </ion-fab>\r\n     </div>\r\n    </div>\r\n    \r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/saleing/mcs-onlylead.com/detail/detail.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/saleing/mcs-onlylead.com/detail/detail.module.ts ***!
  \******************************************************************/
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
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/saleing/mcs-onlylead.com/detail/detail.page.ts");







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

/***/ "./src/app/saleing/mcs-onlylead.com/detail/detail.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/saleing/mcs-onlylead.com/detail/detail.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvbWNzLW9ubHlsZWFkLmNvbS9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/saleing/mcs-onlylead.com/detail/detail.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/saleing/mcs-onlylead.com/detail/detail.page.ts ***!
  \****************************************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/base/base.ser/logininfo.storage */ "./src/app/base/base.ser/logininfo.storage.ts");
/* harmony import */ var _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../saleing.ser/optionset.service */ "./src/app/saleing/saleing.ser/optionset.service.ts");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! silly-datetime */ "./node_modules/silly-datetime/dest/index.js");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(silly_datetime__WEBPACK_IMPORTED_MODULE_6__);







let DetailPage = class DetailPage {
    constructor(_http, _page, activeRoute, _logininfo, optionset) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this._logininfo = _logininfo;
        this.optionset = optionset;
        this.tab = "infolist";
        this.mod = {
            apiUrlInfo: '/api/only-lead/GetOnlyLeadDetail',
            apiUrlList1: '/api/only-lead/GetLogCallList',
            apiUrlList2: '/api/only-lead/GetActivityList',
            data: {
                mcs_onlyleadid: null,
                mcs_name: "",
                mcs_mobilephone: "",
                mcs_leadorigin: "",
                mcs_gender: "",
                mcs_emailaddress1: "",
                mcs_accountpoints: "",
                mcs_provinceid: "",
                mcs_cityid: "",
                mcs_districtid: "",
                mcs_mainowner: "",
                mcs_usecarprovince: "",
                mcs_usecarcity: ""
            },
            systemUserId: "",
            //联络记录参数
            datalist: [],
            pageSize: 10,
            page: 1,
            sort: '',
            isending: false,
            //培育任务参数
            datalist2: [],
            pageSize2: 10,
            page2: 1,
            sort2: '',
            isending2: false,
        };
    }
    ngOnInit() {
        //debugger;
        this.mod.datalist = [];
        this.mod.datalist2 = [];
        this.activeRoute.queryParams.subscribe((params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.mod.data.mcs_onlyleadid = params['id'];
                this.pageOnBind(params['id']);
            }
        });
        this.mod.systemUserId = this._logininfo.GetSystemUserId();
    }
    //加载唯一线索基本信息
    pageOnBind(id) {
        //debugger;
        this._page.loadingShow();
        this._http.get(this.mod.apiUrlInfo, {
            params: {
                entityid: id,
            }
        }, (res) => {
            //debugger;
            if (res !== null) {
                console.log(res["Attributes"]);
                this.mod.data.mcs_name = res["Attributes"]["mcs_name"]; //姓名
                this.mod.data.mcs_mobilephone = res["Attributes"]["mcs_mobilephone"]; //手机
                this.mod.data.mcs_leadorigin = this.optionset.GetOptionSetNameByValue("mcs_leadorigin", res["Attributes"]["mcs_leadorigin"]); //线索来源          
                this.mod.data.mcs_gender = this.optionset.GetOptionSetNameByValue("mcs_gender", res["Attributes"]["mcs_gender"]);
                this.mod.data.mcs_emailaddress1 = res["Attributes"]["mcs_emailaddress1"]; //邮箱
                this.mod.data.mcs_accountpoints = res["Attributes"]["mcs_accountpoints"]; //评分
                this.mod.data.mcs_provinceid = res["Attributes"]["_mcs_provinceid_value@OData.Community.Display.V1.FormattedValue"]; //省
                this.mod.data.mcs_cityid = res["Attributes"]["_mcs_cityid_value@OData.Community.Display.V1.FormattedValue"]; //市
                this.mod.data.mcs_districtid = res["Attributes"]["_mcs_districtid_value@OData.Community.Display.V1.FormattedValue"]; //区
                this.mod.data.mcs_usecarprovince = res["Attributes"]["mcs_usecarprovince"]; //用车省份
                this.mod.data.mcs_usecarcity = res["Attributes"]["mcs_usecarcity"]; //用车城市
                //this.mod.data.serviceproxy["arrivalon"] = res["Serviceproxy"]["Attributes"]["mcs_arrivalon@OData.Community.Display.V1.FormattedValue"];
            }
            else {
                this._page.alert("消息提示", "基础数据加载异常");
            }
            this._page.loadingHide();
            this.pageOnLogCalllist(id);
            this.pageOnActivitylist(id);
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
    //加载联络记录(logcall)列表
    pageOnLogCalllist(id) {
        ///debugger;
        this._page.loadingShow();
        this._http.get(this.mod.apiUrlList1, {
            params: {
                entityid: id,
                sort: this.mod.sort,
                pageSize: this.mod.pageSize,
                page: this.mod.page,
                systemuserid: this.mod.systemUserId,
            }
        }, (res) => {
            // debugger;
            if (res !== null) {
                if (res.Results !== null) {
                    for (var key in res.Results) {
                        var obj = {};
                        obj["mcs_fullname"] = res.Results[key]["Attributes"]["mcs_fullname"];
                        obj["mcs_visittime"] = res.Results[key]["Attributes"]["mcs_visittime"];
                        obj["mcs_content"] = res.Results[key]["Attributes"]["mcs_content"];
                        obj["mcs_results"] = res.Results[key]["Attributes"]["mcs_results"];
                        obj["mcs_logcallid"] = res.Results[key]["Attributes"]["mcs_logcallid"];
                        this.mod.datalist.push(obj);
                    }
                    //console.log(res);
                } //判断是否有新数据
                if (res.Results.length == 0) {
                    this.mod.isending = true;
                }
            }
            else {
                this._page.alert("消息提示", "联络记录加载异常");
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
    //加载培育任务列表
    pageOnActivitylist(id) {
        this._page.loadingShow();
        this._http.get(this.mod.apiUrlList2, {
            params: {
                entityid: id,
                sort: this.mod.sort2,
                pageSize: this.mod.pageSize2,
                page: this.mod.page2,
                systemuserid: this.mod.systemUserId,
            }
        }, (res) => {
            // debugger;
            if (res !== null) {
                if (res.Results !== null) {
                    for (var key in res.Results) {
                        var obj = {};
                        obj["mcs_thisfollowupcontent"] = res.Results[key]["Attributes"]["mcs_thisfollowupcontent"];
                        obj["createdon"] = res.Results[key]["Attributes"]["createdon"];
                        obj["mcs_activitystatus"] = this.optionset.GetOptionSetNameByValue("mcs_activitystatus", res.Results[key]["Attributes"]["mcs_activitystatus"]);
                        obj["mcs_importantlevel"] = this.optionset.GetOptionSetNameByValue("mcs_importantlevel", res.Results[key]["Attributes"]["mcs_importantlevel"]);
                        obj["mcs_activityid"] = res.Results[key]["Attributes"]["mcs_activityid"];
                        this.mod.datalist2.push(obj);
                    }
                    //console.log(res);
                } //判断是否有新数据
                if (res.Results.length == 0) {
                    this.mod.isending2 = true;
                }
            }
            else {
                this._page.alert("消息提示", "联络记录加载异常");
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
    //logcall加载下一页
    doNextLoadingLog(event) {
        this.mod.page++;
        this.pageOnLogCalllist(event);
    }
    //培育任务加载下一页
    doNextLoadingAc(event) {
        this.mod.page2++;
        this.pageOnActivitylist(event);
    }
    FormatToDateTime(date) {
        if (date != null && date != undefined) {
            return silly_datetime__WEBPACK_IMPORTED_MODULE_6___default.a.format(date, 'YYYY-MM-DD');
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
    { type: app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_4__["Storage_LoginInfo"] },
    { type: _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"] }
];
DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-onlylead.com/detail/detail.page.html"),
        styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/saleing/mcs-onlylead.com/detail/detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_4__["Storage_LoginInfo"],
        _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"]])
], DetailPage);



/***/ })

}]);
//# sourceMappingURL=saleing-mcs-onlylead-com-detail-detail-module-es2015.js.map