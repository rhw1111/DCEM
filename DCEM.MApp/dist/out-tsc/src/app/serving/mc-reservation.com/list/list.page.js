import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../base/base.ser/http-service.service';
import { DCore_Page, DCore_Http } from 'app/base/base.ser/Dcem.core';
import sd from 'silly-datetime';
let ListPage = class ListPage {
    constructor(router, _http, _page, httpService) {
        this.router = router;
        this._http = _http;
        this._page = _page;
        this.httpService = httpService;
        this.model = {
            name: 'appointmentlistinfo',
            apiUrl: '/api/appointment-info/GetList',
            seachkey: '',
            status: 0,
            data: [],
            pageSize: 10,
            page: 1,
            sort: 'mcs_appointmentinfoid desc',
            isending: false //是否加载完成
        };
    }
    ngOnInit() {
        this.model.page = 1;
        var cachedata = this.httpService.GetDataCache(this.model.name);
        if (cachedata == "") {
            this.showlist(null);
        }
        else {
            this.model.data = JSON.parse(cachedata);
        }
    }
    //搜索方法
    search(event) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.model.data = [];
            this.model.page = 1;
            this.model.isending = false;
            this.showlist(null);
        }
    }
    //下拉刷新
    doRefresh(event) {
        this.model.data = [];
        this.model.page = 1;
        this.model.isending = false;
        this.showlist(event);
    }
    //加载下一页
    doLoading(event) {
        this.model.page++;
        this.showlist(event);
    }
    //切换tab
    selectTab(status) {
        this.model.data = [];
        this.model.page = 1;
        this.model.isending = false;
        if (status != "" && status != undefined) {
            this.model.status = status;
        }
        else {
            this.model.status = 0;
        }
        this.showlist(null);
    }
    //展示数据
    showlist(event) {
        this._page.loadingShow();
        console.log("地址:" + this.model.apiUrl, "预约状态:" + this.model.status, "搜索:" + this.model.seachkey, "排序:" + this.model.sort, "页条数:" + this.model.pageSize, "页数:" + this.model.page);
        this._http.get(this.model.apiUrl, {
            params: {
                status: this.model.status,
                seachkey: this.model.seachkey,
                sort: this.model.sort,
                pageSize: this.model.pageSize,
                page: this.model.page
            }
        }, (res) => {
            event ? event.target.complete() : '';
            if (res.Results !== null) {
                //this.model.data = [];
                //console.log('get res=' + res.data);
                for (var key in res.Results) {
                    var obj = {};
                    obj["mcs_appointmentinfoid"] = res.Results[key]["Id"];
                    obj["mcs_carplate"] = res.Results[key]["Attributes"]["mcs_carplate"];
                    obj["mcs_customername"] = res.Results[key]["Attributes"]["mcs_customername"];
                    obj["mcs_appointmentat"] = res.Results[key]["Attributes"]["mcs_appointmentat"];
                    obj["mcs_appointmentconfigid"] = res.Results[key]["Attributes"]["appointmentconfig_x002e_mcs_name"];
                    obj["mcs_status"] = res.Results[key]["Attributes"]["mcs_status"];
                    this.model.data.push(obj);
                }
                //设置数据存储到本地
                if (this.model.page == 1) {
                    this.httpService.SetDataCache(this.model.name, JSON.stringify(this.model.data).toString());
                }
                event ? event.target.complete() : '';
                //判断是否有新数据
                if (res.Results.length < 2) {
                    event ? event.target.disabled = true : "";
                    this.model.isending = true;
                }
                else {
                    this.model.isending = false;
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
    //日期格式
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
    tslib_1.__metadata("design:paramtypes", [Router,
        DCore_Http,
        DCore_Page,
        HttpService])
], ListPage);
export { ListPage };
//# sourceMappingURL=list.page.js.map