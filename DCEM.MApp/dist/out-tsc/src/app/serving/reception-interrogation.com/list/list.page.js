import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';
let ListPage = class ListPage {
    constructor(_http, _page, _valid, _datePipe) {
        this._http = _http;
        this._page = _page;
        this._valid = _valid;
        this._datePipe = _datePipe;
        this.mod = {
            apiUrl: '/Api/Serviceproxy/GetList',
            data: {},
            searchData: {
                type: 1,
                pageindex: 1,
                search: ""
            },
            objectKeys: Object.keys
        };
    }
    ngOnInit() {
        //this.listOnBind();
    }
    //每次页面加载
    ionViewDidEnter() {
        this.mod.data = {};
        this.mod.searchData = {
            type: 1,
            pageindex: 1,
            search: ""
        };
        this.listOnBind();
    }
    //下拉刷新
    doInfinite(event) {
        this.mod.searchData.pageindex = this.mod.searchData.pageindex + 1;
        this.listOnBind();
    }
    //搜索事件
    searchOnKeyup(event) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.mod.data = {};
            this.mod.searchData.pageindex = 1;
            this.ionInfiniteScroll.disabled = false;
            this.ionContent.scrollToTop(200);
            this.listOnBind();
        }
    }
    //列表绑定
    listOnBind() {
        if (this.mod.searchData.pageindex == 1)
            this._page.loadingShow();
        this._http.get(this.mod.apiUrl, {
            params: {
                type: this.mod.searchData.type,
                pageindex: this.mod.searchData.pageindex,
                search: this.mod.searchData.search
            }
        }, (res) => {
            if (!this._valid.isNull(res.Results) !== null && res.Results.length > 0) {
                for (var key in res.Results) {
                    var date = res.Results[key]["Attributes"]["createdon"];
                    var dateKey = this._datePipe.transform(date, "_yyyyMM");
                    var dateText = this._datePipe.transform(date, "yyyy年MM月");
                    if (typeof this.mod.data[dateKey] === "undefined") {
                        this.mod.data[dateKey] = {};
                        this.mod.data[dateKey]["text"] = dateText;
                        this.mod.data[dateKey].data = [];
                    }
                    var obj = {};
                    obj["Id"] = res.Results[key]["Id"];
                    obj["carplate"] = res.Results[key]["Attributes"]["mcs_carplate"];
                    obj["customername"] = res.Results[key]["Attributes"]["mcs_customername"];
                    obj["createdonformat"] = res.Results[key]["Attributes"]["createdon@OData.Community.Display.V1.FormattedValue"];
                    obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
                    obj["status"] = res.Results[key]["Attributes"]["mcs_status"];
                    obj["statusformat"] = res.Results[key]["Attributes"]["mcs_status@OData.Community.Display.V1.FormattedValue"];
                    //设置颜色
                    obj["statuscolor"] = "primary";
                    if (obj["status"] < 100) {
                        obj["statuscolor"] = "primary";
                    }
                    else if (obj["status"] < 180) {
                        obj["statuscolor"] = "tertiary";
                    }
                    else {
                        obj["statuscolor"] = "success";
                    }
                    this.mod.data[dateKey].data.push(obj);
                }
            }
            else {
                this.ionInfiniteScroll.disabled = true;
            }
            this.ionInfiniteScroll.complete();
            if (this.mod.searchData.pageindex == 1)
                this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            if (this.mod.searchData.pageindex == 1)
                this._page.loadingHide();
            this.ionInfiniteScroll.complete();
        });
    }
};
tslib_1.__decorate([
    ViewChild(IonContent, null),
    tslib_1.__metadata("design:type", IonContent)
], ListPage.prototype, "ionContent", void 0);
tslib_1.__decorate([
    ViewChild(IonInfiniteScroll, null),
    tslib_1.__metadata("design:type", IonInfiniteScroll)
], ListPage.prototype, "ionInfiniteScroll", void 0);
ListPage = tslib_1.__decorate([
    Component({
        selector: 'app-list',
        templateUrl: './list.page.html',
        styleUrls: ['./list.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [DCore_Http,
        DCore_Page,
        DCore_Valid,
        DatePipe])
], ListPage);
export { ListPage };
//# sourceMappingURL=list.page.js.map