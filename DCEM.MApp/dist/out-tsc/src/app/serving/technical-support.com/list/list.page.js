import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpService } from '../../../base/base.ser/http-service.service';
import { Dcem } from 'app/base/base.ser/Dcem.core';
import sd from 'silly-datetime';
let ListPage = class ListPage {
    constructor(_http, _page, httpService) {
        this._http = _http;
        this._page = _page;
        this.httpService = httpService;
        this.model = {
            name: 'technicalsupportlist',
            apiUrl: '/api/tech-support/GetList',
            condition: '',
            data: [],
            pageSize: 5,
            page: 1,
            sort: 'mcs_supportorderid desc' //排序的参数
        };
    }
    ngOnInit() {
        var cachedata = this.httpService.GetDataCache(this.model.name);
        if (cachedata == "") {
            this.getList(null);
        }
        else {
            this.model.data = JSON.parse(cachedata);
        }
    }
    //搜索方法
    search(name) {
        this.getList(null);
    }
    //下来刷新
    doRefresh(event) {
        this.model.data = [];
        this.getList(event);
    }
    //加载下一页
    doLoading(event) {
        debugger;
        this.model.page++;
        this.getList(event);
    }
    //切换tab
    selectTab(status) {
        if (status != "" && status != undefined) {
            this.model.condition = "mcs_orderstatus=" + status;
        }
        this.getList(null);
    }
    //获取列表数据
    getList(event) {
        this._page.loadingShow();
        this._http.get(this.model.apiUrl, {
            condition: this.model.condition,
            sort: this.model.sort,
            pageSize: this.model.pageSize,
            page: this.model.page
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
                this.httpService.SetDataCache(this.model.name, JSON.stringify(this.model.data).toString());
                event ? event.target.complete() : '';
                //判断是否有新数据
                if (res.Results.length < 2) {
                    event ? event.target.disabled = true : "";
                }
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
    tslib_1.__metadata("design:paramtypes", [Dcem.Core.Http, Dcem.Core.Page, HttpService])
], ListPage);
export { ListPage };
//# sourceMappingURL=list.page.js.map