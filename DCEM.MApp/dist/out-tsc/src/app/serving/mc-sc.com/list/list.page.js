import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
let ListPage = class ListPage {
    constructor(_http, _page, _datePipe) {
        this._http = _http;
        this._page = _page;
        this._datePipe = _datePipe;
        this.mod = {
            apiUrl: '',
            data: {},
            searchData: {
                type: 1,
                pageindex: 1,
                search: ""
            }
        };
        this.objectKeys = Object.keys;
        this.mod.apiUrl = "/Api/Serviceproxy/GetList";
        this.mod.searchData.type = 2;
        this.mod.searchData.search = "";
        this.mod.searchData.pageindex = 1;
    }
    ngOnInit() {
        this.listOnBind();
    }
    searchOnClick() {
        this.listOnBind();
    }
    searchOnKeyup(event) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.listOnBind();
        }
    }
    listOnBind() {
        this._page.loadingShow();
        this.mod.data = {};
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
                    var date = res.Results[key]["Attributes"]["createdon"];
                    var dateKey = this._datePipe.transform(date, "_yyyyMM");
                    var dateText = this._datePipe.transform(date, "yy年MM月");
                    if (typeof this.mod.data[dateKey] === "undefined") {
                        this.mod.data[dateKey] = {};
                        this.mod.data[dateKey]["text"] = dateText;
                        this.mod.data[dateKey].data = [];
                    }
                    var obj = {};
                    obj["Id"] = res.Results[key]["Id"];
                    obj["carplate"] = res.Results[key]["Attributes"]["mcs_carplate"];
                    obj["customername"] = res.Results[key]["Attributes"]["mcs_customername"];
                    obj["createdon"] = res.Results[key]["Attributes"]["createdon@OData.Community.Display.V1.FormattedValue"];
                    obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
                    this.mod.data[dateKey].data.push(obj);
                }
                console.log(this.mod.data);
                this._page.loadingHide();
            }
            else {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
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
        DCore_Page,
        DatePipe])
], ListPage);
export { ListPage };
//# sourceMappingURL=list.page.js.map