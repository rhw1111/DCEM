import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Dcem } from 'app/base/base.ser/Dcem.core';
let ListPage = class ListPage {
    constructor(_http, _page) {
        this._http = _http;
        this._page = _page;
        this.mod = {
            apiUrl: '',
            data: []
        };
        this.mod.apiUrl = "/Api/Customer/GetMyCustomerList";
    }
    ngOnInit() {
        this.listOnBind();
    }
    listOnBind() {
        this._page.loadingShow();
        this._http.get(this.mod.apiUrl, {}, (res) => {
            if (res.Results !== null) {
                for (var key in res.Results) {
                    var obj = {};
                    obj["Id"] = res.Results[key]["Id"];
                    obj["fullname"] = res.Results[key]["Attributes"]["mcs_customerid"]["mcs_fullname"];
                    obj["gender"] = res.Results[key]["Attributes"]["mcs_customerid"]["mcs_gender"];
                    obj["motormodel"] = res.Results[key]["Attributes"]["mcs_customerid"]["mcs_motormodel"];
                    obj["vehplate"] = res.Results[key]["Attributes"]["mcs_customerid"]["mcs_vehplate"];
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
};
ListPage = tslib_1.__decorate([
    Component({
        selector: 'app-list',
        templateUrl: './list.page.html',
        styleUrls: ['./list.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Dcem.Core.Http, Dcem.Core.Page])
], ListPage);
export { ListPage };
//# sourceMappingURL=list.page.js.map