(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serving-technical-support-com-edit-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/technical-support.com/edit/edit.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/technical-support.com/edit/edit.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button text=\"返回\" defaultHref=\"/\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>创建或编辑技术支持</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n      <ion-item-group>\n        <ion-item-divider>\n          <ion-label>基本信息</ion-label>\n        </ion-item-divider>\n        <ion-item>\n          <ion-label position=\"floating\">\n            <ion-text color=\"danger\">*</ion-text>主题\n          </ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <ion-text color=\"danger\">*</ion-text>服务委托书: {{model.mcname}}\n          </ion-label>\n          <ion-avatar slot=\"end\">\n              <ion-icon color=\"primary\" size=\"large\" name=\"search\" (click)=\"presentModal()\"></ion-icon>\n          </ion-avatar>\n        </ion-item>\n        <!-- <ion-item>\n            <ion-button expand=\"block\" (click)=\"presentModal()\">选择服务委托书</ion-button>\n        </ion-item> -->\n        <ion-item>\n            <ion-label position=\"floating\">\n              <ion-text color=\"danger\">*</ion-text>服务顾问\n            </ion-label>\n            <ion-input></ion-input>\n          </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">\n            <ion-text color=\"danger\">*</ion-text>技术主管\n          </ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">\n            <ion-text color=\"danger\">*</ion-text>维修时间\n          </ion-label>\n          <ion-datetime displayFormat=\"YYYY-MM-DD HH:mm\" min=\"1997\" max=\"2010\" value=\"\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label><ion-icon name=\"mail\" size=\"large\"></ion-icon></ion-label>\n          <ion-input type=\"email\" placeholder=\"请输入邮箱\" maxlength=\"30\" style=\"text-align:right;\" (ionBlur)=\"changeEmail(model.email)\"\n          [(ngModel)]=\"model.email\" required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label><ion-icon name=\"phone-portrait\" size=\"large\"></ion-icon></ion-label>\n          <ion-input type=\"tel\" placeholder=\"请输入手机号\" maxlength=\"11\" minlength=\"11\" style=\"text-align:right;\" (ionBlur)=\"changePhone(model.phone)\" [(ngModel)]=\"model.phone\" required onkeyup=\"this.value=this.value.replace(/\\D/g,'')\"></ion-input>\n        </ion-item>\n      </ion-item-group>\n    \n      <ion-item-group>\n        <ion-item-divider>\n          <ion-label>车辆信息</ion-label>\n        </ion-item-divider>\n        <ion-item>\n          <ion-label>\n            <ion-text color=\"danger\">*</ion-text>车主姓名：{{model.mcname}}\n          </ion-label>\n          <ion-avatar slot=\"end\">\n            <ion-icon color=\"primary\" size=\"large\" name=\"search\" (click)=\"presentModal()\"></ion-icon>\n          </ion-avatar>\n        </ion-item>\n        <ion-item>\n          <ion-label>车主手机</ion-label>\n          <ion-note slot=\"end\">18027302264</ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>车牌号</ion-label>\n          <ion-note slot=\"end\">渝A100211</ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>VIN</ion-label>\n          <ion-note slot=\"end\">VIN1283123123213</ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>发动机号</ion-label>\n          <ion-note slot=\"end\">G23212</ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>里程数</ion-label>\n          <ion-note slot=\"end\">1000</ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>电机型号</ion-label>\n          <ion-note slot=\"end\">D12-12</ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>电池序列号</ion-label>\n          <ion-note slot=\"end\">2323231232</ion-note>\n        </ion-item>\n        <ion-item>\n          <ion-label>是否加装</ion-label>\n          <ion-toggle slot=\"end\" color=\"secondary\"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">加装描述</ion-label>\n          <ion-textarea rows=\"6\" cols=\"20\" placeholder=\"请输入加装描述信息\"></ion-textarea>\n        </ion-item>\n      </ion-item-group>\n      <ion-item-group>\n        <ion-item-divider>\n          <ion-label>故障信息</ion-label>\n        </ion-item-divider>\n        <ion-item>\n            <ion-label>技术系统</ion-label>\n            <ion-select value=\"model.mcs_techsystem\" okText=\"确认\" cancelText=\"取消\">\n              <ion-select-option value=\"10\">车身</ion-select-option>\n              <ion-select-option value=\"20\">底盘</ion-select-option>\n              <ion-select-option value=\"30\">电器</ion-select-option>\n              <ion-select-option value=\"40\">三电</ion-select-option>\n            </ion-select>\n          </ion-item>\n        <ion-item>\n            <ion-label>故障类别代码: {{model.mcname}}</ion-label>\n            <ion-avatar slot=\"end\">\n                <ion-icon color=\"primary\" size=\"large\" name=\"search\" (click)=\"presentModal()\"></ion-icon>\n            </ion-avatar>\n          </ion-item>\n      </ion-item-group>\n      <ion-item-group>\n        <ion-item-divider>\n          <ion-label>其他</ion-label>\n        </ion-item-divider>\n        <ion-item>\n          <ion-label position=\"floating\">技术疑问</ion-label>\n          <ion-textarea></ion-textarea>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">检测诊断描述</ion-label>\n          <ion-textarea></ion-textarea>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">已更换零件</ion-label>\n          <ion-textarea></ion-textarea>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">具体故障现象</ion-label>\n          <ion-textarea></ion-textarea>\n        </ion-item>\n      </ion-item-group>\n      <ion-button  expand=\"block\" type=\"button\"  (click)=\"save()\">保存</ion-button>\n    </ion-list>\n  </ion-content>\n  "

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvdGVjaG5pY2FsLXN1cHBvcnQuY29tL2VkaXQvZWRpdC5wYWdlLnNjc3MifQ== */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _serving_ser_components_sc_select_sc_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../serving.ser/components/sc-select/sc-select.component */ "./src/app/serving/serving.ser/components/sc-select/sc-select.component.ts");





let EditPage = class EditPage {
    constructor(_http, _page, modalCtrl) {
        this._http = _http;
        this._page = _page;
        this.modalCtrl = modalCtrl;
        this.model = {
            mcid: '',
            mcname: '',
            phone: '',
            email: '',
            mcs_techsystem: '' //技术系统
        };
    }
    ngOnInit() {
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _serving_ser_components_sc_select_sc_select_component__WEBPACK_IMPORTED_MODULE_4__["ScSelectComponent"]
            });
            yield modal.present();
            //监听销毁的事件
            const { data } = yield modal.onDidDismiss();
            if (data != null && data != undefined) {
                this.model.mcid = data.id;
                this.model.mcname = data.name;
            }
        });
    }
    save() {
    }
    changePhone(value) {
        // 去除空格
        const phone = value.replace(/\s/g, '');
        const ischeck = /^(13[0-9]|14[5|7|9]|15[0|1|2|3|5|6|7|8|9]|16[6]|17[0|1|2|3|5|6|7|8]|18[0-9]|19[8|9])\d{8}$/;
        if (!ischeck.test(phone)) {
            this.model.phone = '';
            //super.showToast(this.toastCtrl, '请输入正确的手机号');
        }
    }
    changeEmail(value) {
        const ischeck = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value);
        if (!ischeck) {
            this.model.email = '';
            //super.showToast(this.toastCtrl, '请输入正确的邮箱格式');
        }
    }
};
EditPage.ctorParameters = () => [
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"] },
    { type: app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
EditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/technical-support.com/edit/edit.page.html"),
        styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/serving/technical-support.com/edit/edit.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Http"],
        app_base_base_ser_Dcem_core__WEBPACK_IMPORTED_MODULE_2__["DCore_Page"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], EditPage);



/***/ })

}]);
//# sourceMappingURL=serving-technical-support-com-edit-edit-module-es2015.js.map