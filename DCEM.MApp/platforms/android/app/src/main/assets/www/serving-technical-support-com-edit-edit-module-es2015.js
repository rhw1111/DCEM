(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-technical-support-com-edit-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/technical-support.com/edit/edit.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/technical-support.com/edit/edit.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button text=\"返回\" defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>创建或编辑技术支持</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item-group>\r\n        <ion-item-divider>\r\n          <ion-label>基本信息</ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">\r\n            <ion-text color=\"danger\">*</ion-text>主题\r\n          </ion-label>\r\n          <ion-input [(ngModel)]=\"model.postData.mcs_title\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            服务委托书\r\n          </ion-label>\r\n          <ion-note slot=\"end\">{{model.viewData.mcs_serviceorderid_name}}</ion-note>\r\n          <ion-avatar slot=\"end\">\r\n              <ion-icon color=\"primary\" size=\"large\" name=\"search\" (click)=\"presentServiceModal()\"></ion-icon>\r\n          </ion-avatar>\r\n        </ion-item>\r\n        <!-- <ion-item>\r\n            <ion-button expand=\"block\" (click)=\"presentModal()\">选择服务委托书</ion-button>\r\n        </ion-item> -->\r\n        <ion-item>\r\n            <ion-label>\r\n              <ion-text color=\"danger\">*</ion-text>服务顾问\r\n            </ion-label>\r\n            <ion-note slot=\"end\">{{model.viewData.username}}</ion-note>\r\n          </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <ion-text color=\"danger\">*</ion-text>技术主管\r\n          </ion-label>\r\n          <ion-note slot=\"end\">{{model.viewData.mcs_repairnameidname}}</ion-note>\r\n          <ion-avatar slot=\"end\">\r\n              <ion-icon color=\"primary\" size=\"large\" name=\"search\" (click)=\"presentSystemUserModal()\"></ion-icon>\r\n          </ion-avatar>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">\r\n            <ion-text color=\"danger\">*</ion-text>维修时间\r\n          </ion-label>\r\n          <ion-datetime [(ngModel)]=\"model.postData.mcs_repairdate\" displayFormat=\"YYYY-MM-DD HH:mm\" min=\"1997\" max=\"2010\" value=\"\"></ion-datetime>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label><ion-icon name=\"mail\" size=\"large\"></ion-icon></ion-label>\r\n          <ion-input [(ngModel)]=\"model.postData.mcs_email\" type=\"email\" placeholder=\"--\" maxlength=\"30\" style=\"text-align:right;\" (ionBlur)=\"changeEmail(model.email)\"\r\n          [(ngModel)]=\"model.email\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label><ion-icon name=\"phone-portrait\" size=\"large\"></ion-icon></ion-label>\r\n          <ion-input [(ngModel)]=\"model.postData.mcs_phone\" type=\"tel\" placeholder=\"--\" maxlength=\"11\" minlength=\"11\" style=\"text-align:right;\" (ionBlur)=\"changePhone(model.phone)\" [(ngModel)]=\"model.phone\" required onkeyup=\"this.value=this.value.replace(/\\D/g,'')\"></ion-input>\r\n        </ion-item>\r\n      </ion-item-group>\r\n    \r\n      <ion-item-group>\r\n        <ion-item-divider>\r\n          <ion-label>车辆信息</ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n          <ion-label>\r\n            <ion-text color=\"danger\">*</ion-text>车主姓名\r\n          </ion-label>\r\n          <ion-note slot=\"end\">{{model.viewData.mcs_customername}}</ion-note>\r\n          <ion-avatar slot=\"end\">\r\n            <ion-icon color=\"primary\" size=\"large\" name=\"search\" (click)=\"presentCustomerModal()\"></ion-icon>\r\n          </ion-avatar>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>车主手机</ion-label>\r\n          <ion-note slot=\"end\">{{model.postData.mcs_customerphone}}</ion-note>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>车牌号</ion-label>\r\n          <ion-note slot=\"end\">{{model.postData.mcs_carplate}}</ion-note>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>VIN</ion-label>\r\n          <ion-note slot=\"end\">{{model.viewData.vin}}</ion-note>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>发动机号</ion-label>\r\n          <ion-note slot=\"end\">{{model.postData.mcs_enginenumber}}</ion-note>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>里程数</ion-label>\r\n          <ion-note slot=\"end\">{{model.postData.mcs_mileage}}</ion-note>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>电机型号</ion-label>\r\n          <ion-note slot=\"end\">{{model.postData.mcs_motormodel}}</ion-note>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>电池型号</ion-label>\r\n          <ion-note slot=\"end\">{{model.postData.mcs_batterymodel}}</ion-note>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>电池序列号</ion-label>\r\n          <ion-note slot=\"end\">{{model.postData.mcs_batteryserialnumber}}</ion-note>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>是否加装</ion-label>\r\n          <ion-toggle slot=\"end\" color=\"secondary\" checked [(ngModel)]=\"model.postData.mcs_ismodifiedparts\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">加装描述</ion-label>\r\n          <ion-textarea rows=\"6\" cols=\"20\" placeholder=\"请输入加装描述信息\" [(ngModel)]=\"model.postData.mcs_modifiedpartscontent\"></ion-textarea>\r\n        </ion-item>\r\n      </ion-item-group>\r\n      <ion-item-group>\r\n        <ion-item-divider>\r\n          <ion-label>故障信息</ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n            <ion-label><ion-text color=\"danger\">*</ion-text>技术系统</ion-label>\r\n            <ion-select [(ngModel)]=\"model.postData.mcs_techsystem\" value=\"\" okText=\"确认\" cancelText=\"取消\">\r\n              <ion-select-option value=\"10\">车身</ion-select-option>\r\n              <ion-select-option value=\"20\">底盘</ion-select-option>\r\n              <ion-select-option value=\"30\">电器</ion-select-option>\r\n              <ion-select-option value=\"40\">三电</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        <ion-item>\r\n            <ion-label>故障类别代码</ion-label>\r\n            <ion-note slot=\"end\">{{model.viewData.mcs_malfunctiontype_value}}</ion-note> \r\n            <ion-avatar slot=\"end\"> \r\n                <ion-icon color=\"primary\" size=\"large\" name=\"search\" (click)=\"presentMalFunctionTypeModal()\"></ion-icon>\r\n            </ion-avatar>\r\n          </ion-item>\r\n      </ion-item-group>\r\n      <ion-item-group>\r\n        <ion-item-divider>\r\n          <ion-label>其他</ion-label>\r\n        </ion-item-divider>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">技师疑问</ion-label>\r\n          <ion-textarea [(ngModel)]=\"model.postData.mcs_techqueries\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">检测诊断描述</ion-label>\r\n          <ion-textarea [(ngModel)]=\"model.postData.mcs_diagnosiscontent\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">已更换零件</ion-label>\r\n          <ion-textarea [(ngModel)]=\"model.postData.mcs_replacedparts\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">具体故障现象</ion-label>\r\n          <ion-textarea [(ngModel)]=\"model.postData.mcs_malfunctioncontent\"></ion-textarea>\r\n        </ion-item>\r\n      </ion-item-group>\r\n      <ion-button  expand=\"block\" type=\"button\"  (click)=\"save()\">保存</ion-button>\r\n    </ion-list>\r\n  </ion-content>\r\n  "

/***/ }),

/***/ "./src/app/serving/technical-support.com/edit/edit.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/serving/technical-support.com/edit/edit.module.ts ***!
  \*******************************************************************/
/*! exports provided: EditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/serving/technical-support.com/edit/edit.page.ts");







const routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]
    }
];
let EditPageModule = class EditPageModule {
};
EditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        entryComponents: [],
        declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
    })
], EditPageModule);



/***/ }),

/***/ "./src/app/serving/technical-support.com/edit/edit.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/serving/technical-support.com/edit/edit.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-label {\n  font-size: 12px; }\n\nion-item ion-note {\n  font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmluZy90ZWNobmljYWwtc3VwcG9ydC5jb20vZWRpdC9FOlxcQXBwUHJvamVjdFxcRENFTVxcRENFTS5NQXBwL3NyY1xcYXBwXFxzZXJ2aW5nXFx0ZWNobmljYWwtc3VwcG9ydC5jb21cXGVkaXRcXGVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUVRLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvdGVjaG5pY2FsLXN1cHBvcnQuY29tL2VkaXQvZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICBpb24tbm90ZXtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/serving/technical-support.com/edit/edit.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/serving/technical-support.com/edit/edit.page.ts ***!
  \*****************************************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/logininfo.storage */ "./src/app/base/base.ser/logininfo.storage.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var app_serving_serving_ser_components_sc_select_sc_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/serving/serving.ser/components/sc-select/sc-select.component */ "./src/app/serving/serving.ser/components/sc-select/sc-select.component.ts");
/* harmony import */ var app_serving_serving_ser_components_select_customer_select_customer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/serving/serving.ser/components/select-customer/select-customer.component */ "./src/app/serving/serving.ser/components/select-customer/select-customer.component.ts");
/* harmony import */ var app_base_base_ser_components_select_systemuser_select_systemuser_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/base/base.ser/components/select-systemuser/select-systemuser.component */ "./src/app/base/base.ser/components/select-systemuser/select-systemuser.component.ts");
/* harmony import */ var app_serving_serving_ser_components_select_malfunctiontype_select_malfunctiontype_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/serving/serving.ser/components/select-malfunctiontype/select.malfunctiontype.component */ "./src/app/serving/serving.ser/components/select-malfunctiontype/select.malfunctiontype.component.ts");










let EditPage = class EditPage {
    constructor(_http, _page, _userInfo, modalCtrl, activeRoute) {
        this._http = _http;
        this._page = _page;
        this._userInfo = _userInfo;
        this.modalCtrl = modalCtrl;
        this.activeRoute = activeRoute;
        this.model = {
            postApiUrl: '/api/tech-support/AddOrEdit',
            detailApiUrl: '/api/tech-support/GetDetail',
            viewData: {
                mcs_serviceorderid_name: '',
                vin: '',
                mcs_customername: '',
                username: '',
                mcs_repairnameidname: ''
            },
            postData: {
                EntityName: "mcs_supportorder",
                Id: '',
                mcs_title: '',
                mcs_repairnameid: '',
                mcs_serviceadvisorid: '',
                mcs_serviceorderid: '',
                mcs_email: '',
                mcs_phone: '',
                mcs_customerid: '',
                mcs_ismodifiedparts: false,
                mcs_malfunctiontypeid: '',
                mcs_diagnosiscontent: '',
                mcs_malfunctioncontent: '',
                mcs_replacedparts: '',
                mcs_techqueries: '',
                mcs_techsystem: 0,
                mcs_batterymodel: '',
                mcs_batteryserialnumber: '',
                mcs_carplate: '',
                mcs_customerphone: '',
                mcs_enginenumber: '',
                mcs_modifiedpartscontent: '',
                mcs_motormodel: '',
                mcs_mileage: 0,
                mcs_repairdate: '',
                mcs_cartypeid: '',
            }
        };
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.GetDetail(params['id']);
            }
        });
        this.model.postData.mcs_serviceadvisorid = this._userInfo.GetSystemUserId();
        this.model.viewData.username = this._userInfo.GetFirstname() + this._userInfo.GetLastname();
    }
    GetDetail(id) {
        this._page.loadingShow();
        this._http.get(this.model.detailApiUrl, {
            params: {
                id: id,
            }
        }, (res) => {
            if (res.TechnicalSupport != null) {
                this.model.postData.mcs_title = res["TechnicalSupport"]["Attributes"]["mcs_title"];
                this.model.postData.mcs_serviceorderid = res["TechnicalSupport"]["Attributes"]["_mcs_serviceorderid_value"];
                this.model.viewData.mcs_serviceorderid_name = res["TechnicalSupport"]["Attributes"]["_mcs_serviceorderid_value@OData.Community.Display.V1.FormattedValue"];
                this.model.postData.mcs_repairnameid = res["TechnicalSupport"]["Attributes"]["_mcs_repairnameid_value"];
                this.model.viewData.mcs_repairnameidname = res["TechnicalSupport"]["Attributes"]["_mcs_repairnameid_value@OData.Community.Display.V1.FormattedValue"];
                this.model.postData.mcs_repairdate = res["TechnicalSupport"]["Attributes"]["mcs_repairdate@OData.Community.Display.V1.FormattedValue"];
                this.model.postData.mcs_email = res["TechnicalSupport"]["Attributes"]["mcs_email"];
                this.model.postData.mcs_phone = res["TechnicalSupport"]["Attributes"]["mcs_phone"];
                this.model.postData.mcs_customername = res["TechnicalSupport"]["Attributes"]["mcs_customername"];
                this.model.postData.mcs_customerphone = res["TechnicalSupport"]["Attributes"]["mcs_customerphone"];
                this.model.postData.mcs_customerid = res["TechnicalSupport"]["Attributes"]["_mcs_customerid_value"];
                this.model.viewData.vin = res["TechnicalSupport"]["Attributes"]["_mcs_customerid_value@OData.Community.Display.V1.FormattedValue"];
                this.model.postData.mcs_carplate = res["TechnicalSupport"]["Attributes"]["mcs_carplate"];
                this.model.postData.mcs_enginenumber = res["TechnicalSupport"]["Attributes"]["mcs_enginenumber"];
                this.model.postData.mcs_mileage = res["TechnicalSupport"]["Attributes"]["mcs_mileage"];
                this.model.postData.mcs_motormodel = res["TechnicalSupport"]["Attributes"]["mcs_motormodel"];
                this.model.postData.mcs_batteryserialnumber = res["TechnicalSupport"]["Attributes"]["mcs_batteryserialnumber"];
                this.model.postData.mcs_batterymodel = res["TechnicalSupport"]["Attributes"]["mcs_batterymodel"];
                this.model.postData.mcs_ismodifiedparts = res["TechnicalSupport"]["Attributes"]["mcs_ismodifiedparts@OData.Community.Display.V1.FormattedValue"];
                this.model.postData.mcs_modifiedpartscontent = res["TechnicalSupport"]["Attributes"]["mcs_modifiedpartscontent"];
                this.model.postData.mcs_techsystem = res["TechnicalSupport"]["Attributes"]["mcs_techsystem"];
                this.model.postData.mcs_malfunctiontypeid = res["TechnicalSupport"]["Attributes"]["_mcs_malfunctiontypeid_value"];
                this.model.viewData.mcs_malfunctiontype_value = res["TechnicalSupport"]["Attributes"]["_mcs_malfunctiontypeid_value@OData.Community.Display.V1.FormattedValue"];
                this.model.postData.mcs_malfunctiontypecontent = res["TechnicalSupport"]["Attributes"]["mcs_malfunctiontypecontent"];
                this.model.postData.mcs_diagnosiscontent = res["TechnicalSupport"]["Attributes"]["mcs_diagnosiscontent"];
                this.model.postData.mcs_replacedparts = res["TechnicalSupport"]["Attributes"]["mcs_replacedparts"];
                this.model.postData.mcs_malfunctioncontent = res["TechnicalSupport"]["Attributes"]["mcs_malfunctioncontent"];
                this.model.postData.mcs_cartypeid = res["TechnicalSupport"]["Attributes"]["_mcs_cartypeid_value"];
                this.model.viewData.mcs_cartypeid_vale = res["TechnicalSupport"]["Attributes"]["_mcs_mcs_cartypeid_value@OData.Community.Display.V1.FormattedValue"];
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
    //选择服务委托书模式窗口
    presentServiceModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: app_serving_serving_ser_components_sc_select_sc_select_component__WEBPACK_IMPORTED_MODULE_6__["ScSelectComponent"]
            });
            yield modal.present();
            //监听销毁的事件
            const { data } = yield modal.onDidDismiss();
            if (data != null && data != undefined) {
                var serviceproxymodel = data.model;
                this.model.postData.mcs_serviceorderid = data.id;
                this.model.viewData.mcs_serviceorderid_name = data.name;
                //绑定车辆信息
                if (serviceproxymodel != null && serviceproxymodel != undefined) {
                    this.model.postData.mcs_customerid = serviceproxymodel._mcs_customerid_value;
                    this.model.viewData.vin = data.vin;
                    if (serviceproxymodel.mcs_batterymodel != undefined) {
                        this.model.postData.mcs_batterymodel = serviceproxymodel.mcs_batterymodel;
                    }
                    if (serviceproxymodel.mcs_motorserialnumber != undefined) {
                        this.model.postData.mcs_batteryserialnumber = serviceproxymodel.mcs_motorserialnumber;
                    }
                    if (serviceproxymodel.mcs_carplate != undefined) {
                        this.model.postData.mcs_carplate = serviceproxymodel.mcs_carplate;
                    }
                    if (serviceproxymodel.mcs_customername != undefined) {
                        this.model.viewData.mcs_customername = serviceproxymodel.mcs_customername;
                    }
                    if (serviceproxymodel.mcs_customerphone != undefined) {
                        this.model.postData.mcs_customerphone = serviceproxymodel.mcs_customerphone;
                    }
                    if (serviceproxymodel.mcs_enginennumber != undefined) {
                        this.model.postData.mcs_enginenumber = serviceproxymodel.mcs_enginennumber;
                    }
                    if (serviceproxymodel.mcs_modifiedpartscontent != undefined) {
                        this.model.postData.mcs_modifiedpartscontent = serviceproxymodel.mcs_modifiedpartscontent;
                    }
                    if (serviceproxymodel.mcs_motormodel != undefined) {
                        this.model.postData.mcs_motormodel = serviceproxymodel.mcs_motormodel;
                    }
                    if (serviceproxymodel.mcs_mileage != undefined) {
                        this.model.postData.mcs_mileage = serviceproxymodel.mcs_mileage;
                    }
                }
            }
        });
    }
    //选择客户模式窗口
    presentCustomerModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: app_serving_serving_ser_components_select_customer_select_customer_component__WEBPACK_IMPORTED_MODULE_7__["SelectCustomerComponent"]
            });
            yield modal.present();
            //监听销毁的事件
            const { data } = yield modal.onDidDismiss();
            if (data != null && data != undefined) {
                var customerModel = data.vehowne.model;
                if (customerModel != null && customerModel != undefined) {
                    this.model.postData.mcs_customerid = customerModel.mcs_vehownerid;
                    this.model.viewData.vin = customerModel.mcs_name;
                    if (customerModel.mcs_batterymodel != undefined) {
                        this.model.postData.mcs_batterymodel = customerModel.mcs_batterymodel;
                    }
                    if (customerModel.mcs_motorserialnumber != undefined) {
                        this.model.postData.mcs_batteryserialnumber = customerModel.mcs_motorserialnumber;
                    }
                    if (customerModel.mcs_vehplate != undefined) {
                        this.model.postData.mcs_carplate = customerModel.mcs_vehplate;
                    }
                    if (customerModel.mcs_fullname != undefined) {
                        this.model.postData.mcs_customername = customerModel.mcs_fullname;
                    }
                    if (customerModel.mcs_mobilephone != undefined) {
                        this.model.postData.mcs_customerphone = customerModel.mcs_mobilephone;
                    }
                    if (customerModel.mcs_enginennumber != undefined) {
                        this.model.postData.mcs_enginenumber = customerModel.mcs_enginennumber;
                    }
                    if (customerModel.mcs_modifiedpartscontent != undefined) {
                        this.model.postData.mcs_modifiedpartscontent = customerModel.mcs_modifiedpartscontent;
                    }
                    if (customerModel.mcs_motormodel != undefined) {
                        this.model.postData.mcs_motormodel = customerModel.mcs_motormodel;
                    }
                    if (customerModel.mcs_netmileage != undefined) {
                        this.model.postData.mcs_mileage = customerModel.mcs_netmileage;
                    }
                    if (customerModel.mcs_cartypeid != undefined) {
                        this.model.postData.mcs_cartypeid = customerModel.mcs_cartypeid;
                    }
                }
            }
        });
    }
    presentMalFunctionTypeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: app_serving_serving_ser_components_select_malfunctiontype_select_malfunctiontype_component__WEBPACK_IMPORTED_MODULE_9__["SelectMalFunctionTypeComponent"]
            });
            yield modal.present();
            //监听销毁的事件
            const { data } = yield modal.onDidDismiss();
            if (data != null && data != undefined) {
                this.model.postData.mcs_malfunctiontypeid = data.id;
                this.model.viewData.mcs_malfunctiontype_value = data.name;
            }
        });
    }
    presentSystemUserModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: app_base_base_ser_components_select_systemuser_select_systemuser_component__WEBPACK_IMPORTED_MODULE_8__["SelectSystemuserComponent"]
            });
            yield modal.present();
            //监听销毁的事件
            const { data } = yield modal.onDidDismiss();
            if (data != null && data != undefined) {
                this.model.postData.mcs_repairnameid = data.Id;
                this.model.viewData.mcs_repairnameidname = data.fullname;
            }
        });
    }
    save() {
        this._page.loadingShow();
        //数据验证
        //请求
        this._http.post(this.model.postApiUrl, this.model.postData, (res) => {
            if (res != "") {
                this._page.alert("消息提示", "保存成功！");
                this._page.goto("/serving/ts/success", { guid: res });
            }
            else {
                this._page.alert("消息提示", "保存失败！");
            }
            this._page.loadingHide();
        }, (err) => {
            debugger;
            this._page.alert("消息提示", "请求异常");
            this._page.loadingHide();
        });
    }
    changePhone(value) {
        // 去除空格
        if (value != null && value != "") {
            const phone = value.replace(/\s/g, '');
            const ischeck = /^(13[0-9]|14[5|7|9]|15[0|1|2|3|5|6|7|8|9]|16[6]|17[0|1|2|3|5|6|7|8]|18[0-9]|19[8|9])\d{8}$/;
            if (!ischeck.test(phone)) {
                this.model.phone = '';
                //super.showToast(this.toastCtrl, '请输入正确的手机号');
            }
        }
    }
    changeEmail(value) {
        if (value != null && value != "") {
            const ischeck = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value);
            if (!ischeck) {
                this.model.email = '';
                //super.showToast(this.toastCtrl, '请输入正确的邮箱格式');
            }
        }
    }
};
EditPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
    { type: app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__["Storage_LoginInfo"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
EditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/technical-support.com/edit/edit.page.html"),
        styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/serving/technical-support.com/edit/edit.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__["Storage_LoginInfo"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], EditPage);



/***/ })

}]);
//# sourceMappingURL=serving-technical-support-com-edit-edit-module-es2015.js.map