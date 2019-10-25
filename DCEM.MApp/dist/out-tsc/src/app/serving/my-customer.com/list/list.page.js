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
        this.mod.apiUrl = "/Api/Customer/GetMyCustomerList";
    }
    ngOnInit() {
        this.listOnBind();
    }
    tagOnClick(type) {
        this.mod.searchData.type = type;
        this.mod.searchData.pageindex = 1;
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
            if (res.Results !== null) {
                console.log(res);
                for (var key in res.Results) {
                    var obj = {};
                    obj["Id"] = res.Results[key]["Id"];
                    obj["fullname"] = res.Results[key]["Attributes"]["a_x002e_mcs_fullname"];
                    obj["gender"] = res.Results[key]["Attributes"]["a_x002e_mcs_gender"];
                    obj["mobilephone"] = res.Results[key]["Attributes"]["a_x002e_mcs_mobilephone"];
                    obj["vehplate"] = res.Results[key]["Attributes"]["a_x002e_mcs_vehplate"];
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