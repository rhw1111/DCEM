(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saleing-lead-com-edit-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saleing/lead.com/edit/edit.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saleing/lead.com/edit/edit.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button text=\"返回\" defaultHref=\"/saleing/lead/list\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>新增留资</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-list lines=\"full\">\r\n        <ion-card>\r\n            <ion-card-content>\r\n                <ion-item-divider color=\"primary\">\r\n                    <ion-label>基本信息</ion-label>\r\n                </ion-item-divider>\r\n                <ion-item>\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                    <ion-label>\r\n                        <h2>姓名：</h2>\r\n                    </ion-label>\r\n                    <ion-input type=\"text\" name=\"username\" [(ngModel)]=\"model.info.username\" placeholder=\"请输入用户姓名\">\r\n                    </ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                    <ion-label>\r\n                        <h2>手机号：</h2>\r\n                    </ion-label>\r\n                    <ion-input type=\"text\" name=\"mobile\" [(ngModel)]=\"model.info.mobile\" placeholder=\"请输入用户手机号\">\r\n                    </ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                    <ion-label>\r\n                        <h2>线索来源：</h2>\r\n                    </ion-label>\r\n                    <ion-select name=\"clues\" okText=\"确认\" cancelText=\"取消\" [(ngModel)]=\"model.info.clues\">\r\n                        <ion-select-option *ngFor=\"let item of model.leadoriginoption\" value=\"{{item.value}}\">\r\n                            {{item.name}}\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>称呼：</h2>\r\n                    </ion-label>\r\n                    <ion-select name=\"gender\" okText=\"确认\" cancelText=\"取消\" [(ngModel)]=\"model.info.gender\">\r\n                        <ion-select-option *ngFor=\"let item of model.genderoption\" value=\"{{item.value}}\">{{item.name}}\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>邮箱：</h2>\r\n                    </ion-label>\r\n                    <ion-input type=\"text\" name=\"mail\" [(ngModel)]=\"model.info.mail\" placeholder=\"请输入用户邮箱\"></ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-text color=\"danger\">*</ion-text>\r\n                    <ion-label>评分：</ion-label>\r\n                    <ion-select name=\"score\" okText=\"确认\" cancelText=\"取消\" [(ngModel)]=\"model.info.score\">\r\n                        <ion-select-option *ngFor=\"let item of model.scoreoption\" value=\"{{item.value}}\">{{item.name}}\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                </ion-item>\r\n                <ion-item (click)=\"provinceOnClick()\">\r\n                    <ion-label position=\"stacked\">省：</ion-label>\r\n                    <p>{{model.info.provincename}}&nbsp;</p>\r\n                </ion-item>\r\n                <ion-item (click)=\"cityOnClick()\">\r\n                    <ion-label position=\"stacked\">市：</ion-label>\r\n                    <p>{{model.info.cityname}}&nbsp;</p>\r\n                </ion-item>\r\n                <ion-item (click)=\"districtOnClick()\">\r\n                    <ion-label position=\"stacked\">区：</ion-label>\r\n                    <p>{{model.info.areaname}}&nbsp;</p>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>\r\n                        <h2>\r\n                            线索描述：\r\n                        </h2>\r\n                    </ion-label>\r\n                    <ion-textarea [(ngModel)]=\"model.info.describe\" name=\"describe\"></ion-textarea>\r\n                </ion-item>\r\n            </ion-card-content>\r\n        </ion-card> \r\n        <ion-card>\r\n            <ion-card-content>\r\n                <ion-list>\r\n                    <ion-item-divider color=\"primary\">\r\n                        <ion-label>客户标签</ion-label>\r\n                    </ion-item-divider>\r\n                    <ion-item *ngFor=\"let item of CustomerTagModel.CustomerTags\">\r\n                        <ion-checkbox  color=\"{{item.customcolor}}\" value=\"{{item.value}}\" slot=\"start\" (ionChange)=\"checkClick($event)\" ></ion-checkbox>\r\n                        <ion-label slot=\"end\">{{item.name}}</ion-label>\r\n                    </ion-item>\r\n                </ion-list>\r\n            </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-button expand=\"block\" color=\"danger\" (click)=\"saveOnClick()\">确定</ion-button>\r\n    </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/saleing/lead.com/edit/edit.module.ts":
/*!******************************************************!*\
  !*** ./src/app/saleing/lead.com/edit/edit.module.ts ***!
  \******************************************************/
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
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/saleing/lead.com/edit/edit.page.ts");







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

/***/ "./src/app/saleing/lead.com/edit/edit.page.scss":
/*!******************************************************!*\
  !*** ./src/app/saleing/lead.com/edit/edit.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".floatLabel {\n  text-align: right;\n  margin-right: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZWluZy9sZWFkLmNvbS9lZGl0L0U6XFxBcHBQcm9qZWN0XFxEQ0VNXFxEQ0VNLk1BcHAvc3JjXFxhcHBcXHNhbGVpbmdcXGxlYWQuY29tXFxlZGl0XFxlZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVHLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NhbGVpbmcvbGVhZC5jb20vZWRpdC9lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbG9hdExhYmVsXHJcbntcclxuICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgIG1hcmdpbi1yaWdodDogNDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/saleing/lead.com/edit/edit.page.ts":
/*!****************************************************!*\
  !*** ./src/app/saleing/lead.com/edit/edit.page.ts ***!
  \****************************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/base/base.ser/Dcem.core */ "./src/app/base/base.ser/Dcem.core.ts");
/* harmony import */ var app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/base/base.ser/logininfo.storage */ "./src/app/base/base.ser/logininfo.storage.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var app_saleing_saleing_ser_components_select_sysarea_select_sysarea_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/saleing/saleing.ser/components/select-sysarea/select-sysarea.component */ "./src/app/saleing/saleing.ser/components/select-sysarea/select-sysarea.component.ts");
/* harmony import */ var _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../saleing.ser/optionset.service */ "./src/app/saleing/saleing.ser/optionset.service.ts");







let EditPage = class EditPage {
    constructor(_modalCtrl, _http, _page, _valid, _userinfo, _optionset) {
        this._modalCtrl = _modalCtrl;
        this._http = _http;
        this._page = _page;
        this._valid = _valid;
        this._userinfo = _userinfo;
        this._optionset = _optionset;
        this.model = {
            apiUrl: '/api/Originalclue/create',
            //国家默认中国
            countryId: "7E83801C-795B-E911-A824-B53F780FAC1C",
            level: null,
            scoreoption: [],
            genderoption: [],
            leadoriginoption: [],
            ChoiceTag: [],
            info: {
                username: "",
                mobile: "",
                clues: -1,
                gender: 1,
                mail: "",
                province: "",
                provincename: "",
                city: "",
                cityname: "",
                area: "",
                areaname: "",
                score: -1,
                describe: "",
                userid: this._userinfo.GetSystemUserId(),
                dealerid: "3EFBFFF6-EF1A-E911-A821-A4A314186A20",
            }
        };
        this.CustomerTagModel = {
            apiCustomerTagUrl: "/api/Originalclue/GetCustomerTagList",
            CustomerTags: [],
            CustomColor: ["primary", "secondary", "tertiary", "success", "warning", "danger", "medium", "dark"],
        };
    }
    ngOnInit() {
        this.model.scoreoption = this._optionset.Get("lead_mcs_accountpoints");
        this.model.genderoption = this._optionset.Get("lead_mcs_gender");
        this.model.leadoriginoption = this._optionset.Get("lead_mcs_leadorigin");
        this.getcustomertag();
    }
    //客户标签点击事件
    checkClick(event) {
        var checkstatus = event.detail.checked;
        var id = event.detail.value;
        if (checkstatus) {
            var index = this.model.ChoiceTag.indexOf(id);
            if (index < 0) {
                this.model.ChoiceTag.push(id);
            }
        }
        else {
            var index = this.model.ChoiceTag.indexOf(id);
            this.model.ChoiceTag.splice(index, 1);
        }
    }
    //获取客户标签
    getcustomertag() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this._http.postForToaken(this.CustomerTagModel.apiCustomerTagUrl, { "UserId": this._userinfo.GetSystemUserId() }, (res) => {
                var colorindex = 0;
                var data = res.customerlabels;
                for (var i in data) {
                    var attr = data[i]["Attributes"];
                    var obj = {};
                    obj["name"] = attr["mcs_name"];
                    obj["value"] = attr["mcs_tagid"];
                    if (colorindex == this.CustomerTagModel.CustomColor.length - 1) {
                        colorindex = 0;
                    }
                    obj["customcolor"] = this.CustomerTagModel.CustomColor[colorindex];
                    colorindex++;
                    this.CustomerTagModel.CustomerTags.push(obj);
                }
            });
        });
    }
    //获取省组件
    provinceModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.model.countryId = "7E83801C-795B-E911-A824-B53F780FAC1C";
            this.model.level = 2;
            const modal = yield this._modalCtrl.create({
                component: app_saleing_saleing_ser_components_select_sysarea_select_sysarea_component__WEBPACK_IMPORTED_MODULE_5__["SelectSysareaComponent"],
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
                    if (data.id != "undefined") {
                        this.model.info.province = data.id;
                        this.model.info.provincename = data.name;
                    }
                    //重置省市区
                    if (this.model.info.province != data.id) {
                        //城市名称
                        this.model.info.cityname = "--";
                        //城市ID
                        this.model.info.city = "";
                        //区名称
                        this.model.info.areaname = "--";
                        //区ID
                        this.model.info.area = "";
                        this.model.province = data.id;
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
                component: app_saleing_saleing_ser_components_select_sysarea_select_sysarea_component__WEBPACK_IMPORTED_MODULE_5__["SelectSysareaComponent"],
                componentProps: {
                    'pid': this.model.info.province,
                    'level': this.model.level,
                }
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data != null && typeof data != "undefined") {
                if (data != null && typeof data != "undefined") {
                    console.log(data);
                    if (data.id != "undefined") {
                        this.model.info.city = data.id;
                        this.model.info.cityname = data.name;
                    }
                    //重置省市区
                    if (this.model.cityId != data.id) {
                        //区名称
                        this.model.info.areaname = "--";
                        //区ID
                        this.model.info.area = "";
                        this.model.info.city = data.id;
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
                component: app_saleing_saleing_ser_components_select_sysarea_select_sysarea_component__WEBPACK_IMPORTED_MODULE_5__["SelectSysareaComponent"],
                componentProps: {
                    'pid': this.model.info.city,
                    'level': this.model.level,
                }
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data != null && typeof data != "undefined") {
                if (data != null && typeof data != "undefined") {
                    console.log(data);
                    if (data.id != "undefined") {
                        this.model.info.area = data.id;
                        this.model.info.areaname = data.name;
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
        if (this.model.info.province != "") {
            this.cityModal();
        }
    }
    //触发区事件
    districtOnClick() {
        if (this.model.info.city != "") {
            this.districtModal();
        }
    }
    //保存
    saveOnClick() {
        if (this.model.info.username == "") {
            this._page.alert("消息提示", "请输入用户姓名");
            return;
        }
        if (this.model.info.mobile == "") {
            this._page.alert("消息提示", "请输入用户手机号");
            return;
        }
        if (!this._valid.isPhone(this.model.info.mobile)) {
            this._page.alert("消息提示", "请输入正确格式的手机号");
            return;
        }
        if (this.model.info.clues == -1) {
            this._page.alert("消息提示", "请选择线索来源");
            return;
        }
        if (this.model.info.score == -1) {
            this._page.alert("消息提示", "请选择评分");
            return;
        }
        var tagName = this.model.info.describe + "，客户标签：";
        for (var i in this.model.ChoiceTag) {
            var tagid = this.model.ChoiceTag[i];
            for (var x in this.CustomerTagModel.CustomerTags) {
                var id = this.CustomerTagModel.CustomerTags[x]["value"];
                var name = this.CustomerTagModel.CustomerTags[x]["name"];
                if (id == tagid) {
                    tagName += name + ",";
                    break;
                }
            }
        }
        this.model.info.describe = tagName;
        this._page.loadingShow();
        this._http.postForToaken(this.model.apiUrl, this.model.info, (res) => {
            debugger;
            if (res !== null) {
                var guid = res["Id"];
                this._page.goto("/saleing/lead/success", { guid: guid });
            }
            else {
                this._page.alert("消息提示", "创建留资记录失败");
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "创建留资记录失败");
            this._page.loadingHide();
        });
    }
};
EditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Valid"] },
    { type: app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__["Storage_LoginInfo"] },
    { type: _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_6__["OptionSetService"] }
];
EditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/saleing/lead.com/edit/edit.page.html"),
        styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/saleing/lead.com/edit/edit.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Valid"],
        app_base_base_ser_logininfo_storage__WEBPACK_IMPORTED_MODULE_3__["Storage_LoginInfo"],
        _saleing_ser_optionset_service__WEBPACK_IMPORTED_MODULE_6__["OptionSetService"]])
], EditPage);



/***/ })

}]);
//# sourceMappingURL=saleing-lead-com-edit-edit-module-es2015.js.map