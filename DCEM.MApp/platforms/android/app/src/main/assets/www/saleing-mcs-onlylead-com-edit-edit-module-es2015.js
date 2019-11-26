(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-mcs-onlylead-com-edit-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-onlylead.com/edit/edit.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/mcs-onlylead.com/edit/edit.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/saleing/onlylead/detail\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>编辑唯一线索</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list>\r\n        <ion-item-group>\r\n            <ion-item-divider color=\"primary\">\r\n                <ion-label>基本信息</ion-label>\r\n            </ion-item-divider>\r\n            <ion-item>\r\n                <ion-label  position=\"stacked\">姓名<ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-input type=\"text\" placeholder=\"请输入姓名\" maxlength=\"12\" [(ngModel)]=\"onlylead['mcs_name']\" required></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">手机<ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <ion-input type=\"tel\" placeholder=\"请输入11位手机号\" maxlength=\"11\" [(ngModel)]=\"onlylead['mcs_mobilephone']\" required></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">线索来源 <ion-text color=\"danger\">*</ion-text></ion-label>\r\n                  <ion-select [(ngModel)]=\"onlylead['mcs_leadorigin']\" placeholder=\"请选择线索来源\"  okText=\"确认\" cancelText=\"取消\" required>\r\n                       <ion-select-option *ngFor=\"let item of model.leadoriginoption\" value=\"{{item.value}}\">\r\n                           {{item.name}}\r\n                        </ion-select-option>\r\n                   </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">称呼<ion-text color=\"danger\">*</ion-text></ion-label>\r\n                   <ion-select [(ngModel)]=\"onlylead['mcs_gender']\" placeholder=\"请选择称呼\" okText=\"确认\" cancelText=\"取消\" required>\r\n                        <ion-select-option *ngFor=\"let item of model.genderoption\" value=\"{{item.value}}\">\r\n                            {{item.name}}\r\n                        </ion-select-option>\r\n                   </ion-select>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">邮箱</ion-label>\r\n                <ion-input type=\"email\" [(ngModel)]=\"onlylead['mcs_emailaddress1']\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">评分<ion-text color=\"danger\">*</ion-text></ion-label>\r\n                   <ion-select [(ngModel)]=\"onlylead['mcs_accountpoints']\" placeholder=\"请选择评分\" okText=\"确认\" cancelText=\"取消\">\r\n                      <ion-select-option *ngFor=\"let item of model.scoreoption\" value=\"{{item.value}}\">\r\n                         {{item.name}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n            </ion-item>\r\n            <ion-item (click)=\"provinceOnClick()\">\r\n                <ion-label position=\"stacked\">省<ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <p>{{onlylead[\"provincename\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item (click)=\"cityOnClick()\">\r\n                <ion-label position=\"stacked\">市<ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <p>{{onlylead[\"cityname\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item (click)=\"districtOnClick()\">\r\n                <ion-label position=\"stacked\">区<ion-text color=\"danger\">*</ion-text></ion-label>\r\n                <p>{{onlylead[\"districtname\"]}}&nbsp;</p>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">用车省份</ion-label>\r\n                <ion-input type=\"text\" [(ngModel)]=\"onlylead['mcs_usecarprovince']\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">用车城市</ion-label>\r\n                <ion-input type=\"text\" [(ngModel)]=\"onlylead['mcs_usecarcity']\"></ion-input>\r\n            </ion-item>\r\n        </ion-item-group>\r\n        \r\n        <ion-button expand=\"block\" type=\"button\" (click)=\"saveOnClick()\">确定</ion-button>\r\n    </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/saleing/mcs-onlylead.com/edit/edit.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/saleing/mcs-onlylead.com/edit/edit.module.ts ***!
  \**************************************************************/
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
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/saleing/mcs-onlylead.com/edit/edit.page.ts");







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
        declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
    })
], EditPageModule);



/***/ }),

/***/ "./src/app/saleing/mcs-onlylead.com/edit/edit.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/saleing/mcs-onlylead.com/edit/edit.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvbWNzLW9ubHlsZWFkLmNvbS9lZGl0L2VkaXQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/saleing/mcs-onlylead.com/edit/edit.page.ts":
/*!************************************************************!*\
  !*** ./src/app/saleing/mcs-onlylead.com/edit/edit.page.ts ***!
  \************************************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var app_saleing_saleing_ser_components_select_sysarea_select_sysarea_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/saleing/saleing.ser/components/select-sysarea/select-sysarea.component */ "./src/app/saleing/saleing.ser/components/select-sysarea/select-sysarea.component.ts");
/* harmony import */ var app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/base/base.ser/logininfo.storage */ "./src/app/base/base.ser/logininfo.storage.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../saleing.ser/optionset.service */ "./src/app/saleing/saleing.ser/optionset.service.ts");








let EditPage = class EditPage {
    constructor(_modalCtrl, _navCtrl, _http, _page, _logininfo, activeRoute, _optionset, _valid) {
        this._modalCtrl = _modalCtrl;
        this._navCtrl = _navCtrl;
        this._http = _http;
        this._page = _page;
        this._logininfo = _logininfo;
        this.activeRoute = activeRoute;
        this._optionset = _optionset;
        this._valid = _valid;
        this.model = {
            apiUrl: '/api/only-lead/GetOnlyLeadDetail',
            postApiUrl: '/api/only-lead/Edit',
            postData: {},
            systemUserId: "",
            dealerId: "",
            onlyLeadId: null,
            countryId: "",
            provinceId: "",
            cityId: "",
            districtId: "",
            level: null,
            scoreoption: [],
            genderoption: [],
            leadoriginoption: [] //线索来源选项集
        };
        //页面绑定对象
        this.onlylead = {};
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params) => {
            if (params['onlyleadid'] != null && params['onlyleadid'] != undefined) {
                console.log("记录Id:" + this.model.onlyLeadId);
                this.model.onlyLeadId = params['onlyleadid'];
                this.pageOnBind(this.model.onlyLeadId);
                this.model.scoreoption = this._optionset.Get("lead_mcs_accountpoints");
                this.model.genderoption = this._optionset.Get("lead_mcs_gender");
                this.model.leadoriginoption = this._optionset.Get("lead_mcs_leadorigin");
                //this.model.systemUserId = this._logininfo.GetSystemUserId();
            }
        });
    }
    //绑定数据
    pageOnBind(id) {
        //debugger;
        this._page.loadingShow();
        this._http.get(this.model.apiUrl, {
            params: {
                entityid: id,
            }
        }, (res) => {
            if (res !== null) {
                //ID
                this.onlylead["mcs_onlyleadid"] = res.Id;
                //姓名
                this.onlylead["mcs_name"] = res["Attributes"]["mcs_name"];
                //线索来源
                this.onlylead["mcs_leadorigin"] = String(res["Attributes"]["mcs_leadorigin"]);
                //电话
                this.onlylead["mcs_mobilephone"] = res["Attributes"]["mcs_mobilephone"];
                //性别
                this.onlylead["mcs_gender"] = String(res["Attributes"]["mcs_gender"]);
                //邮箱
                this.onlylead["mcs_emailaddress1"] = res["Attributes"]["mcs_emailaddress1"];
                //评分
                this.onlylead["mcs_accountpoints"] = String(res["Attributes"]["mcs_accountpoints"]);
                //用车省份
                this.onlylead["mcs_usecarprovince"] = res["Attributes"]["mcs_usecarprovince"];
                //用车城市
                this.onlylead["mcs_usecarcity"] = res["Attributes"]["mcs_usecarcity"];
                //省份名称
                this.onlylead["provincename"] = res["Attributes"]["_mcs_provinceid_value@OData.Community.Display.V1.FormattedValue"];
                //省份ID
                this.model.provinceId = res["Attributes"]["_mcs_provinceid_value"];
                this.onlylead["mcs_provinceid"] = res["Attributes"]["_mcs_provinceid_value"];
                //城市名称
                this.onlylead["cityname"] = res["Attributes"]["_mcs_cityid_value@OData.Community.Display.V1.FormattedValue"];
                //城市ID
                this.model.cityId = res["Attributes"]["_mcs_cityid_value"];
                this.onlylead["mcs_cityid"] = res["Attributes"]["_mcs_cityid_value"];
                //区名称
                this.onlylead["districtname"] = res["Attributes"]["_mcs_districtid_value@OData.Community.Display.V1.FormattedValue"];
                //区ID
                this.model.districtId = res["Attributes"]["_mcs_districtid_value"];
                this.onlylead["mcs_districtid"] = res["Attributes"]["_mcs_districtid_value"];
                console.log(res);
                console.log(this.onlylead);
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
    //获取省组件
    provinceModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.model.countryId = "7E83801C-795B-E911-A824-B53F780FAC1C";
            this.model.level = 2;
            const modal = yield this._modalCtrl.create({
                component: app_saleing_saleing_ser_components_select_sysarea_select_sysarea_component__WEBPACK_IMPORTED_MODULE_3__["SelectSysareaComponent"],
                componentProps: {
                    'pid': this.model.countryId,
                    'level': this.model.level,
                }
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data != null && typeof data != "undefined") {
                if (data != null && typeof data != "undefined") {
                    console.log(data);
                    if (data.id != undefined) {
                        this.onlylead["provinceid"] = data.id;
                        this.onlylead["provincename"] = data.name;
                        //重置省市区
                        if (this.model.provinceId != data.id) {
                            //城市名称
                            this.onlylead["cityname"] = "--";
                            //城市ID
                            this.model.cityId = "";
                            //区名称
                            this.onlylead["districtname"] = "--";
                            //区ID
                            this.model.districtId = "";
                            this.model.provinceId = data.id;
                        }
                    }
                }
            }
        });
    }
    //获取市组件
    cityModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.model.level = 3;
            const modal = yield this._modalCtrl.create({
                component: app_saleing_saleing_ser_components_select_sysarea_select_sysarea_component__WEBPACK_IMPORTED_MODULE_3__["SelectSysareaComponent"],
                componentProps: {
                    'pid': this.model.provinceId,
                    'level': this.model.level,
                }
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data != null && typeof data != "undefined") {
                if (data != null && typeof data != "undefined") {
                    console.log(data);
                    if (data.id != undefined) {
                        this.onlylead["cityid"] = data.id;
                        this.onlylead["cityname"] = data.name;
                        //重置省市区
                        if (this.model.cityId != data.id) {
                            //区名称
                            this.onlylead["districtname"] = "--";
                            //区ID
                            this.model.districtId = "";
                            this.model.cityId = data.id;
                        }
                    }
                }
            }
        });
    }
    //获取区组件
    districtModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.model.level = 4;
            const modal = yield this._modalCtrl.create({
                component: app_saleing_saleing_ser_components_select_sysarea_select_sysarea_component__WEBPACK_IMPORTED_MODULE_3__["SelectSysareaComponent"],
                componentProps: {
                    'pid': this.model.cityId,
                    'level': this.model.level,
                }
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data != null && typeof data != "undefined") {
                if (data != null && typeof data != "undefined") {
                    console.log(data);
                    if (data.id != undefined) {
                        this.onlylead["districtid"] = data.id;
                        this.onlylead["districtname"] = data.name;
                    }
                }
            }
        });
    }
    //触发省事件
    provinceOnClick() {
        this.provinceModal();
    }
    //触发市事件
    cityOnClick() {
        if (this.model.provinceId != "") {
            this.cityModal();
        }
    }
    //触发区事件
    districtOnClick() {
        debugger;
        if (this.model.cityId != "") {
            this.districtModal();
        }
    }
    //保存
    saveOnClick() {
        //表单校验
        if (this._valid.isNullOrEmpty(this.onlylead["mcs_name"])) {
            this._page.presentToastError("姓名必填");
            return;
        }
        if (this._valid.isNullOrEmpty(this.onlylead["mcs_mobilephone"])) {
            this._page.presentToastError("手机号必填");
            return;
        }
        if (!this._valid.isPhone(this.onlylead["mcs_mobilephone"])) {
            this._page.presentToastError("手机号格式错误");
            return;
        }
        if (this._valid.isNullOrEmpty(this.onlylead["mcs_leadorigin"])) {
            this._page.presentToastError("请选择线索来源");
            return;
        }
        if (this._valid.isNullOrEmpty(this.onlylead["mcs_gender"])) {
            this._page.presentToastError("请选择称呼");
            return;
        }
        if (this._valid.isNullOrEmpty(this.onlylead["mcs_accountpoints"])) {
            this._page.presentToastError("请选择评分");
            return;
        }
        if (this._valid.isNullOrEmpty(this.onlylead["provincename"])) {
            this._page.presentToastError("请选择省份");
            return;
        }
        if (this._valid.isNullOrEmpty(this.onlylead["cityname"])) {
            this._page.presentToastError("请选择市");
            return;
        }
        if (this._valid.isNullOrEmpty(this.onlylead["districtname"])) {
            this._page.presentToastError("请选择区");
            return;
        }
        //this.onlylead["systemuserid"] = this.model.systemUserId;
        //this.model.postData["actioncode"] = 1;
        this.model.postData["onlylead"] = this.onlylead;
        this.model.postData["onlylead"]["mcs_leadorigin"] = Number(this.onlylead["mcs_leadorigin"]);
        this.model.postData["onlylead"]["mcs_gender"] = Number(this.onlylead["mcs_gender"]);
        this.model.postData["onlylead"]["mcs_accountpoints"] = Number(this.onlylead["mcs_accountpoints"]);
        this._page.loadingShow();
        console.log(this.model.postData);
        this._http.postForToaken(this.model.postApiUrl, this.model.postData, (res) => {
            debugger;
            if (res !== null) {
                var guid = res["Data"]["Id"];
                this._page.goto("/saleing/onlylead/success", { guid: guid });
            }
            else {
                this._page.alert("消息提示", "编辑记录失败");
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "编辑记录失败");
            this._page.loadingHide();
        });
    }
};
EditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_6__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_6__["DCore_Page"] },
    { type: app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_4__["Storage_LoginInfo"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_7__["OptionSetService"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_6__["DCore_Valid"] }
];
EditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/mcs-onlylead.com/edit/edit.page.html"),
        styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/saleing/mcs-onlylead.com/edit/edit.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_6__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_6__["DCore_Page"],
        app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_4__["Storage_LoginInfo"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_7__["OptionSetService"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_6__["DCore_Valid"]])
], EditPage);



/***/ })

}]);
//# sourceMappingURL=saleing-mcs-onlylead-com-edit-edit-module-es2015.js.map