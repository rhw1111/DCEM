(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-mcs-onlylead-com-detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-onlylead.com/detail/detail.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/mcs-onlylead.com/detail/detail.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button text=\"返回\" defaultHref=\"/saleing/onlylead/list\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n          <ion-label>唯一线索明细</ion-label>\r\n      </ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-segment [(ngModel)]=\"tab\">\r\n        <ion-segment-button value=\"infolist\" checked (click)=\"pageOnBind()\">\r\n            <ion-label>基础信息</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"Linklist\" (click)=\"pageOnLogCalllist()\">\r\n            <ion-label>跟进记录</ion-label>\r\n        </ion-segment-button>\r\n\r\n        <ion-segment-button value=\"Breedlist\" (click)=\"pageOnActivitylist()\">\r\n            <ion-label>培育任务</ion-label>\r\n        </ion-segment-button>\r\n    </ion-segment>\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div [ngSwitch]=\"tab\">\r\n     <div *ngSwitchCase=\"'infolist'\">\r\n        <ion-list lines=\"full\">\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        姓名\r\n                    </h2>\r\n                    <p>{{mod.data.mcs_name}}&nbsp;</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        手机\r\n                    </h2>\r\n                    <p>{{mod.data.mcs_mobilephone}}&nbsp;</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        线索来源\r\n                    </h2>\r\n                    <p>{{mod.data.mcs_leadorigin}}&nbsp;</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label>\r\n                    <h2>\r\n                        称呼\r\n                    </h2>\r\n                    <p>{{mod.data.mcs_gender}}&nbsp;</p>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>\r\n                  <h2>\r\n                      邮箱\r\n                  </h2>\r\n                  <p>{{mod.data.mcs_emailaddress1}}&nbsp;</p>\r\n              </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n              <ion-label>\r\n                  <h2>\r\n                      评分\r\n                  </h2>\r\n                  <p>{{mod.data.mcs_accountpoints}}&nbsp;</p>\r\n              </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n              <ion-label>\r\n                  <h2>\r\n                      省\r\n                  </h2>\r\n                  <p>{{mod.data.mcs_provinceid}}&nbsp;</p>\r\n              </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n              <ion-label>\r\n                  <h2>\r\n                      市\r\n                  </h2>\r\n                  <p>{{mod.data.mcs_cityid}}&nbsp;</p>\r\n              </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n              <ion-label>\r\n                  <h2>\r\n                      区\r\n                  </h2>\r\n                  <p>{{mod.data.mcs_districtid}}&nbsp;</p>\r\n              </ion-label>\r\n          </ion-item>         \r\n          <ion-item>\r\n              <ion-label>\r\n                  <h2>\r\n                      用车省份\r\n                  </h2>\r\n                  <p>{{mod.data.mcs_usecarprovince}}&nbsp;</p>\r\n              </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n              <ion-label>\r\n                  <h2>\r\n                      用车城市\r\n                  </h2>\r\n                  <p>{{mod.data.mcs_usecarcity}}&nbsp;</p>\r\n              </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n\r\n        <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n            <ion-fab-button>\r\n                <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n            </ion-fab-button>\r\n            <ion-fab-list side=\"top\">\r\n                <ion-fab-button [routerLink]=\"['/saleing/contactrecord/edit']\" [queryParams]=\"{id:mod.data.mcs_onlyleadid}\" color=\"primary\"><ion-icon name=\"add\"></ion-icon>联络</ion-fab-button>\r\n                <ion-fab-button [routerLink]=\"['/saleing/cultivatetask/edit']\" [queryParams]=\"{sourid:mod.data.mcs_onlyleadid,type:'1'}\" color=\"tertiary\"><ion-icon name=\"add\"></ion-icon>培育</ion-fab-button>\r\n                <ion-fab-button [routerLink]=\"['/saleing/account/edit']\" [queryParams]=\"{onlyleadid:mod.data.mcs_onlyleadid}\" color=\"success\"><ion-icon name=\"add\"></ion-icon>销售</ion-fab-button>\r\n                <ion-fab-button [routerLink]=\"['/saleing/onlylead/edit']\" [queryParams]=\"{onlyleadid:mod.data.mcs_onlyleadid}\" color=\"warning\"><ion-icon name=\"create\"></ion-icon>编辑</ion-fab-button>\r\n            </ion-fab-list>\r\n        </ion-fab>\r\n\r\n     </div>\r\n     <div *ngSwitchCase=\"'Linklist'\">\r\n           <!--  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshLog()\">\r\n            <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"下拉刷新\" refreshingSpinner=\"circles\" refreshingText=\"刷新中...\">\r\n            </ion-refresher-content>\r\n            </ion-refresher> -->\r\n            <ion-list lines=\"full\" >\r\n             <ion-item-sliding *ngFor=\"let r of mod.datalist\">\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>回访时间：{{FormatToDateTime(r.mcs_visittime)}}</h2>\r\n                        <p>回访时间：{{r.mcs_results}}</p>\r\n                        <p>回访内容：{{r.mcs_content}}</p>\r\n                    </ion-label>\r\n                    <ion-icon *ngIf=\"\" name=\"phone-portrait\" size=\"small\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item-options side=\"end\">\r\n                    <ion-item-option color=\"tertiary\" expandable [routerLink]=\"['/saleing/contactrecord/edit']\" [queryParams]=\"{mcslogcallid:r.mcs_logcallid}\">\r\n                        编辑\r\n                    </ion-item-option>\r\n                   \r\n                </ion-item-options>\r\n             </ion-item-sliding>\r\n            </ion-list>\r\n            <ion-label *ngIf=\"mod.isending\" text-center>  \r\n                <p>\r\n                    没有更多的记录显示啦\r\n                 </p>  \r\n            </ion-label>\r\n         <!--    <ion-infinite-scroll #myInfiniteScroll threshold=\"100px\" (ionInfinite)=\"doNextLoadingLog()\"> \r\n                <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载更多...\"> \r\n                </ion-infinite-scroll-content>\r\n            </ion-infinite-scroll> -->\r\n            <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n                <ion-fab-button [routerLink]=\"['/saleing/contactrecord/edit']\" [queryParams]=\"{id:mod.data.mcs_onlyleadid}\">\r\n                    <ion-icon name=\"add\"></ion-icon>\r\n                </ion-fab-button>\r\n            </ion-fab>\r\n     </div>\r\n     <div *ngSwitchCase=\"'Breedlist'\">\r\n            <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshAc()\">\r\n            <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"下拉刷新\" refreshingSpinner=\"circles\" refreshingText=\"刷新中...\">\r\n            </ion-refresher-content>\r\n            </ion-refresher> -->\r\n            <ion-list lines=\"full\" >\r\n            <ion-item-sliding *ngFor=\"let r of mod.datalist2\">\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>跟进时间：{{FormatToDateTime(r.createdon)}}</h2>                                          \r\n                        <p>任务状态：{{r.mcs_activitystatus}}</p>      \r\n                        <p>重要级别：{{r.mcs_importantlevel}}</p>      \r\n                        <p>本次跟进内容：{{r.mcs_thisfollowupcontent}}</p>              \r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item-options side=\"end\">\r\n                    <ion-item-option color=\"tertiary\" [routerLink]=\"['/saleing/cultivatetask/edit']\" [queryParams]=\"{id:r.mcs_activityid}\">\r\n                        编辑\r\n                    </ion-item-option>               \r\n                </ion-item-options>\r\n            </ion-item-sliding>\r\n            </ion-list>\r\n            <ion-label *ngIf=\"mod.isending2\" text-center>\r\n                <p>\r\n                    没有更多的记录显示啦\r\n                 </p>  \r\n            </ion-label>\r\n           <!--  <ion-infinite-scroll #myInfiniteScroll threshold=\"100px\" (ionInfinite)=\"doNextLoadingAc()\"> \r\n                <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载更多...\"> \r\n                </ion-infinite-scroll-content>\r\n            </ion-infinite-scroll> -->\r\n            <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n                <ion-fab-button [routerLink]=\"['/saleing/cultivatetask/edit']\" [queryParams]=\"{sourid:mod.data.mcs_onlyleadid,type:'1'}\">\r\n                    <ion-icon name=\"add\"></ion-icon>\r\n                </ion-fab-button>\r\n            </ion-fab>\r\n     </div>\r\n    </div>\r\n    \r\n</ion-content>\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/saleing/mcs-onlylead.com/detail/detail.page.ts");







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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/base/base.ser/logininfo.storage */ "./src/app/base/base.ser/logininfo.storage.ts");
/* harmony import */ var _base_base_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../base/base.ser/optionset.service */ "./src/app/base/base.ser/optionset.service.ts");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! silly-datetime */ "./node_modules/silly-datetime/dest/index.js");
/* harmony import */ var silly_datetime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(silly_datetime__WEBPACK_IMPORTED_MODULE_6__);







var DetailPage = /** @class */ (function () {
    function DetailPage(_http, _page, activeRoute, _logininfo, optionset) {
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
            isending: false,
            params: {
                mcs_onlyleadid: "",
                Sort: '',
                PageSize: 10,
                PageIndex: 1,
                UserId: ""
            },
            //培育任务参数
            datalist2: [],
            isending2: false,
            params2: {
                mcs_onlyleadid: "",
                Sort: '',
                PageSize: 10,
                PageIndex: 1,
                UserId: ""
            }
        };
    }
    DetailPage.prototype.ngOnInit = function () {
        var _this = this;
        //debugger;
        this.mod.datalist = [];
        this.mod.datalist2 = [];
        this.activeRoute.queryParams.subscribe(function (params) {
            if (params['id'] != null && params['id'] != undefined) {
                _this.mod.data.mcs_onlyleadid = params['id'];
                if (params['source'] != null && params['source'] != undefined && params['source'] == 2) {
                    _this.pageOnLogCalllist();
                    _this.tab = "Linklist";
                }
                else {
                    _this.pageOnBind();
                }
            }
        });
        this.mod.systemUserId = this._logininfo.GetSystemUserId();
    };
    //加载唯一线索基本信息
    DetailPage.prototype.pageOnBind = function () {
        var _this = this;
        //debugger;
        this._page.loadingShow();
        this._http.get(this.mod.apiUrlInfo, {
            params: {
                entityid: this.mod.data.mcs_onlyleadid,
            }
        }, function (res) {
            //debugger;
            if (res !== null) {
                console.log(res["Attributes"]);
                _this.mod.data.mcs_name = res["Attributes"]["mcs_name"]; //姓名
                _this.mod.data.mcs_mobilephone = res["Attributes"]["mcs_mobilephone"]; //手机
                _this.mod.data.mcs_leadorigin = _this.optionset.GetOptionSetNameByValue("mcs_leadorigin", res["Attributes"]["mcs_leadorigin"]); //线索来源          
                _this.mod.data.mcs_gender = _this.optionset.GetOptionSetNameByValue("mcs_gender", res["Attributes"]["mcs_gender"]);
                _this.mod.data.mcs_emailaddress1 = res["Attributes"]["mcs_emailaddress1"]; //邮箱
                _this.mod.data.mcs_accountpoints = res["Attributes"]["mcs_accountpoints"]; //评分
                _this.mod.data.mcs_provinceid = res["Attributes"]["_mcs_provinceid_value@OData.Community.Display.V1.FormattedValue"]; //省
                _this.mod.data.mcs_cityid = res["Attributes"]["_mcs_cityid_value@OData.Community.Display.V1.FormattedValue"]; //市
                _this.mod.data.mcs_districtid = res["Attributes"]["_mcs_districtid_value@OData.Community.Display.V1.FormattedValue"]; //区
                _this.mod.data.mcs_usecarprovince = res["Attributes"]["mcs_usecarprovince"]; //用车省份
                _this.mod.data.mcs_usecarcity = res["Attributes"]["mcs_usecarcity"]; //用车城市
                //this.mod.data.serviceproxy["arrivalon"] = res["Serviceproxy"]["Attributes"]["mcs_arrivalon@OData.Community.Display.V1.FormattedValue"];
            }
            else {
                _this._page.alert("消息提示", "基础数据加载异常");
            }
            _this._page.loadingHide();
        }, function (err) {
            _this._page.alert("消息提示", "数据加载异常");
            _this._page.loadingHide();
        });
    };
    //加载联络记录(logcall)列表
    DetailPage.prototype.pageOnLogCalllist = function () {
        var _this = this;
        this.mod.params.mcs_onlyleadid = this.mod.data.mcs_onlyleadid;
        this.mod.params.UserId = this.mod.systemUserId;
        this.mod.datalist = [];
        // debugger;
        this._page.loadingShow();
        this._http.postForToaken(this.mod.apiUrlList1, this.mod.params, function (res) {
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
                        _this.mod.datalist.push(obj);
                    }
                    //console.log(res);
                } //判断是否有新数据
                if (res.Results.length < _this.mod.params.PageIndex) {
                    _this.mod.isending = true;
                }
            }
            else {
                _this._page.alert("消息提示", "联络记录加载异常");
            }
            _this._page.loadingHide();
        }, function (err) {
            _this._page.alert("消息提示", "数据加载异常");
            _this._page.loadingHide();
        });
    };
    //加载培育任务列表
    DetailPage.prototype.pageOnActivitylist = function () {
        var _this = this;
        this.mod.params2.mcs_onlyleadid = this.mod.data.mcs_onlyleadid;
        this.mod.params2.UserId = this.mod.systemUserId;
        this.mod.datalist2 = [];
        this._page.loadingShow();
        this._http.postForToaken(this.mod.apiUrlList2, this.mod.params2, function (res) {
            debugger;
            if (res !== null) {
                if (res.Results !== null) {
                    for (var key in res.Results) {
                        var obj = {};
                        obj["mcs_thisfollowupcontent"] = res.Results[key]["Attributes"]["mcs_thisfollowupcontent"];
                        obj["createdon"] = res.Results[key]["Attributes"]["createdon"];
                        obj["mcs_activitystatus"] = _this.optionset.GetOptionSetNameByValue("mcs_activitystatus", res.Results[key]["Attributes"]["mcs_activitystatus"]);
                        obj["mcs_importantlevel"] = _this.optionset.GetOptionSetNameByValue("mcs_importantlevel", res.Results[key]["Attributes"]["mcs_importantlevel"]);
                        obj["mcs_activityid"] = res.Results[key]["Attributes"]["mcs_activityid"];
                        _this.mod.datalist2.push(obj);
                    }
                    //console.log(res);
                } //判断是否有新数据
                if (res.Results.length < _this.mod.params2.PageIndex) {
                    _this.mod.isending2 = true;
                }
            }
            else {
                _this._page.alert("消息提示", "联络记录加载异常");
            }
            _this._page.loadingHide();
        }, function (err) {
            _this._page.alert("消息提示", "数据加载异常");
            _this._page.loadingHide();
        });
    };
    //logcall加载下一页
    DetailPage.prototype.doNextLoadingLog = function () {
        this.mod.params.PageIndex++;
        this.pageOnLogCalllist();
    };
    //下拉刷新log
    /* doRefreshLog() {
        this.mod.datalist = [];
        this.mod.page = 1;
        this.mod.isending = false;
        this.pageOnLogCalllist();
    } */
    //培育任务加载下一页
    DetailPage.prototype.doNextLoadingAc = function () {
        this.mod.params2.PageIndex++;
        this.pageOnActivitylist();
    };
    //下拉刷新培育任务
    /* doRefreshAc() {
        this.mod.datalist2 = [];
        this.mod.page2 = 1;
        this.mod.isending2 = false;
        this.pageOnActivitylist();
    }
     */
    DetailPage.prototype.FormatToDateTime = function (date) {
        if (date != null && date != undefined) {
            return silly_datetime__WEBPACK_IMPORTED_MODULE_6___default.a.format(date, 'YYYY-MM-DD');
        }
        else {
            return '';
        }
    };
    DetailPage.ctorParameters = function () { return [
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
        { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_4__["Storage_LoginInfo"] },
        { type: _base_base_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"] }
    ]; };
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
            _base_base_ser_optionset_service__WEBPACK_IMPORTED_MODULE_5__["OptionSetService"]])
    ], DetailPage);
    return DetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=saleing-mcs-onlylead-com-detail-detail-module-es5.js.map