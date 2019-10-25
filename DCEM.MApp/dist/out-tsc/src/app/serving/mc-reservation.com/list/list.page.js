import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Dcem } from 'app/base/base.ser/Dcem.core';
import sd from 'silly-datetime';
let ListPage = class ListPage {
    constructor(router, _http, _page) {
        this.router = router;
        this._http = _http;
        this._page = _page;
        this.mod = {
            apiUrl: '',
            data: []
        };
        this.mod.apiUrl = "/api/appointment-info/GetList";
    }
    ngOnInit() {
        this.showlist("");
    }
    showlist(id) {
        this._page.loadingShow();
        this._http.get(this.mod.apiUrl + "?status=" + id + "&search=", {}, (res) => {
            if (res.Results !== null) {
                this.mod.data = [];
                //console.log('get res=' + res.data);
                for (var key in res.Results) {
                    var obj = {};
                    obj["mcs_appointmentinfoid"] = res.Results[key]["Id"];
                    obj["mcs_carplate"] = res.Results[key]["Attributes"]["mcs_carplate"];
                    obj["mcs_customername"] = res.Results[key]["Attributes"]["mcs_customername"];
                    obj["mcs_appointmentat"] = res.Results[key]["Attributes"]["mcs_appointmentat"];
                    obj["mcs_appointmentconfigid"] = res.Results[key]["Attributes"]["appointmentconfig_x002e_mcs_name"];
                    obj["mcs_status"] = res.Results[key]["Attributes"]["mcs_status"];
                    this.mod.data.push(obj);
                }
                this._page.loadingHide();
            }
            else {
                this._page.alert("消息提示", "客户数据加载异常");
                this._page.loadingHide();
            }
        }, (err) => {
            this._page.alert("消息提示", "客户数据加载异常");
            this._page.loadingHide();
        });
    }
    FormatToDate(date) {
        if (date != null && date != undefined) {
            return sd.format(date, 'YYYY-MM-DD');
        }
        else {
            return '';
        }
    }
};
ListPage = tslib_1.__decorate([
    Component({
        selector: 'app-list',
        templateUrl: './list.page.html',
        styleUrls: ['./list.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router, Dcem.Core.Http, Dcem.Core.Page])
], ListPage);
export { ListPage };
//# sourceMappingURL=list.page.js.map