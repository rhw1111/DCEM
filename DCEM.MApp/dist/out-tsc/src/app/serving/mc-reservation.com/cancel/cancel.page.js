import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute } from '@angular/router';
let CancelPage = class CancelPage {
    constructor(_http, _page, activeRoute, _valid) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this._valid = _valid;
        this.model = {
            postApiUrl: '/Api/appointment-info/AddOrEdit',
            data: {},
            postData: {},
            appointmentinfoid: "",
        };
        //定义共享数据
        this.shareData = {
            appointmentinfo: {}
        };
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.model.appointmentinfoid = params['id'];
            }
        });
    }
    saveOnClick() {
        if (this._valid.isNullOrEmpty(this.shareData.appointmentinfo["mcs_cancelreasonnew"])) {
            this._page.presentToastError("请先选择取消原因");
            return;
        }
        if (this._valid.isNullOrEmpty(this.shareData.appointmentinfo["mcs_canceldes"])) {
            this._page.presentToastError("请填写取消描述");
            return;
        }
        this.model.postData["actioncode"] = 2;
        this.model.postData["appointmentinfo"] = this.shareData.appointmentinfo;
        //组装预约单
        this.model.postData["appointmentinfo"] = {};
        this.model.postData["appointmentinfo"]["mcs_appointmentinfoid"] = this.model.appointmentinfoid;
        this.model.postData["appointmentinfo"]["mcs_cancelreasonnew"] = Number(this.shareData.appointmentinfo["mcs_cancelreasonnew"]); //取消原因
        this.model.postData["appointmentinfo"]["mcs_canceldes"] = this.shareData.appointmentinfo["mcs_canceldes"]; //预约日期
        this.model.postData["appointmentinfo"]["mcs_status"] = 50; //预约状态
        console.log(this.shareData);
        console.log(this.model.postData);
        this._page.loadingShow();
        this._http.postForToaken(this.model.postApiUrl, this.model.postData, (res) => {
            this._page.loadingHide();
            if (res.Result == true) {
                var guid = res["Data"]["Id"];
                this._page.goto("/serving/reservation/success", { guid: guid });
            }
            else {
                this._page.alert("消息提示", "操作失败");
            }
        }, (err) => {
            this._page.loadingHide();
            this._page.alert("消息提示", "操作失败");
        });
    }
};
CancelPage = tslib_1.__decorate([
    Component({
        selector: 'app-cancel',
        templateUrl: './cancel.page.html',
        styleUrls: ['./cancel.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [DCore_Http,
        DCore_Page,
        ActivatedRoute,
        DCore_Valid])
], CancelPage);
export { CancelPage };
//# sourceMappingURL=cancel.page.js.map