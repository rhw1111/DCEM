import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpService } from '../../../base/base.ser/http-service.service';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import sd from 'silly-datetime';
let ListPage = class ListPage {
    constructor(_http, _page, httpService) {
        this._http = _http;
        this._page = _page;
        this.httpService = httpService;
        this.model = {
            name: 'technicalsupportlist',
            apiUrl: '/api/tech-support/GetList',
            seachkey: '',
            orderstatus: 0,
            data: [],
            pageSize: 10,
            page: 1,
            sort: 'mcs_supportorderid desc',
            isending: false,
            nodata: false
        };
    }
    ngOnInit() {
        this.model.page = 1;
        var cachedata = this.httpService.GetDataCache(this.model.name);
        if (cachedata == "") {
            this.getList(null);
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
            this.getList(null);
        }
    }
    //下拉刷新
    doRefresh(event) {
        this.model.data = [];
        this.model.page = 1;
        this.model.isending = false;
        this.getList(event);
    }
    //加载下一页
    doLoading(event) {
        this.model.page++;
        this.getList(event);
    }
    //切换tab
    selectTab(status) {
        this.model.data = [];
        this.model.page = 1;
        this.model.isending = false;
        if (status != "" && status != undefined) {
            this.model.orderstatus = status;
        }
        else {
            this.model.orderstatus = 0;
        }
        this.getList(null);
    }
    //获取列表数据
    getList(event) {
        this._page.loadingShow();
        this._http.get(this.model.apiUrl, {
            params: {
                orderstatus: this.model.orderstatus,
                seachkey: this.model.seachkey,
                sort: this.model.sort,
                pageSize: this.model.pageSize,
                page: this.model.page
            }
        }, (res) => {
            if (res.Results !== null) {
                //绑定数据
                res.Results.forEach(item => {
                    var value = item["Attributes"];
                    this.model.data.push({
                        "Id": value.mcs_supportorderid,
                        "mcs_name": value.mcs_name,
                        "mcs_repairdate": value.mcs_repairdate,
                        "mcs_orderstatus": value.mcs_orderstatus,
                        "mcs_title": value.mcs_title
                    });
                });
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
                this._page.loadingHide();
                if (this.model.data.length == 0) {
                    this.model.nodata = true;
                }
                else {
                    this.model.nodata = false;
                }
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
    FormatToDate(date) {
        if (date != null && date != undefined) {
            return sd.format(date, 'YYYY-MM-DD');
        }
        else {
            return '';
        }
    }
    FormatToDateTime(date) {
        if (date != null && date != undefined) {
            return sd.format(date, 'YYYY-MM-DD hh:mm:ss');
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
    tslib_1.__metadata("design:paramtypes", [DCore_Http,
        DCore_Page,
        HttpService])
], ListPage);
export { ListPage };
//# sourceMappingURL=list.page.js.map