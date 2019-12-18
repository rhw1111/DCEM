import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';
let ListPage = class ListPage {
    constructor(_http, _page, _valid) {
        this._http = _http;
        this._page = _page;
        this._valid = _valid;
        this.mod = {
            apiUrl: '/Api/Customer/GetMyCustomerList',
            data: [],
            searchData: {
                type: 1,
                pageindex: 1,
                search: ""
            },
            allTotalCount: 0,
            warrantyTotalCount: 0,
            insuranceTotalCount: 0
        };
    }
    ngOnInit() {
        //this.listOnBind();
    }
    //每次页面加载
    ionViewWillEnter() {
        this.mod.data = [];
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
    tagOnClick(type) {
        this.mod.searchData.type = type;
        this.mod.data = [];
        this.mod.searchData.pageindex = 1;
        this.ionInfiniteScroll.disabled = false;
        this.ionContent.scrollToTop(200);
        this.listOnBind();
    }
    searchOnKeyup(event) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.mod.data = [];
            this.mod.searchData.pageindex = 1;
            this.ionInfiniteScroll.disabled = false;
            this.ionContent.scrollToTop(200);
            this.listOnBind();
        }
    }
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
                    console.log(res.Results[key]);
                    var obj = {};
                    obj["Id"] = res.Results[key]["Id"];
                    obj["fullname"] = res.Results[key]["Attributes"]["a_x002e_mcs_fullname"];
                    obj["genderformat"] = res.Results[key]["Attributes"]["a_x002e_mcs_gender@OData.Community.Display.V1.FormattedValue"];
                    obj["gender"] = res.Results[key]["Attributes"]["a_x002e_mcs_gender"];
                    obj["mobilephone"] = res.Results[key]["Attributes"]["a_x002e_mcs_mobilephone"];
                    obj["vehplate"] = res.Results[key]["Attributes"]["a_x002e_mcs_vehplate"];
                    obj["vehtype"] = res.Results[key]["Attributes"]["a_x002e_mcs_vehtype@OData.Community.Display.V1.FormattedValue"];
                    obj["gendercolor"] = "medium";
                    if (obj["gender"] === 1) {
                        obj["gendercolor"] = "primary";
                    }
                    else if (obj["gender"] === 2) {
                        obj["gendercolor"] = "danger";
                    }
                    else if (obj["gender"] === 3) {
                        obj["gendercolor"] = "medium";
                    }
                    this.mod.data.push(obj);
                }
                this.mod.allTotalCount = res.ALLTotalCount;
                this.mod.warrantyTotalCount = res.WarrantyTotalCount;
                this.mod.insuranceTotalCount = res.InsuranceTotalCount;
            }
            else {
                this.ionInfiniteScroll.disabled = true;
            }
            if (this.mod.searchData.pageindex == 1)
                this._page.loadingHide();
            this.ionInfiniteScroll.complete();
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
        DCore_Valid])
], ListPage);
export { ListPage };
//# sourceMappingURL=list.page.js.map