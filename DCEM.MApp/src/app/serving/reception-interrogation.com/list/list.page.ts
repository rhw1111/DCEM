﻿import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { RouteReuseStrategy } from '@angular/router';

export class AppModule { }

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

    mod = {
        apiUrl: '',
        data: {},
        searchData: {
            type: 1,
            pageindex: 1,
            search: ""
        }
    };

    objectKeys = Object.keys;

    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _datePipe: DatePipe
    ) {
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
        this.mod.data = {};
        this._http.get(
            this.mod.apiUrl,
            {
                params: {
                    type: this.mod.searchData.type,
                    pageindex: this.mod.searchData.pageindex,
                    search: this.mod.searchData.search
                }
            },
            (res: any) => {
                console.log(res);
                if (res.Results !== null) {
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
                        obj["createdon"] = res.Results[key]["Attributes"]["createdon@OData.Community.Display.V1.FormattedValue"];
                        obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
                        this.mod.data[dateKey].data.push(obj);
                    }
                    console.log(this.mod.data);
                    this._page.loadingHide();
                }
                else {
                    this._page.alert("消息提示", "客户数据加载异常");
                    this._page.loadingHide();
                }
            },
            (err: any) => {
                this._page.alert("消息提示", "客户数据加载异常");
                this._page.loadingHide();
            }
        );
    }

}
