import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
let ListPage = class ListPage {
    constructor(_http, _page) {
        this._http = _http;
        this._page = _page;
        this.mod = {
            apiUrl: '',
            data: [],
            searchData: {
                type: 1,
                pageindex: 1,
                search: ""
            }
        };
        this.mod.apiUrl = "/Api/Serviceproxy/GetList";
        this.mod.searchData.type = 1;
        this.mod.searchData.search = "";
        this.mod.searchData.pageindex = 1;
    }
    ngOnInit() {
        this.listOnBind();
    }
    searchOnClick() {
        this.listOnBind();
    }
    listOnBind() {
        this._page.loadingShow();
        this.mod.data = [];
        this._http.get(this.mod.apiUrl, {
            params: {
                type: this.mod.searchData.type,
                pageindex: this.mod.searchData.pageindex,
                search: this.mod.searchData.search
            }
        }, (res) => {
            console.log(res);
            if (res.Results !== null) {
                for (var key in res.Results) {
                    var obj = {};
                    obj["Id"] = res.Results[key]["Id"];
                    obj["carplate"] = res.Results[key]["Attributes"]["mcs_carplate"];
                    obj["customername"] = res.Results[key]["Attributes"]["mcs_customername"];
                    obj["createdon"] = res.Results[key]["Attributes"]["createdon@OData.Community.Display.V1.FormattedValue"];
                    obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
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
    tslib_1.__metadata("design:paramtypes", [DCore_Http,
        DCore_Page])
], ListPage);
export { ListPage };
//# sourceMappingURL=list.page.js.map