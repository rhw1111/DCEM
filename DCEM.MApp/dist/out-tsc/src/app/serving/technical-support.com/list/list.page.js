import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { HttpService } from '../../../base/base.ser/http-service.service';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { MessageService } from 'app/base/base.ser/message.service';
import sd from 'silly-datetime';
import { IonInfiniteScroll } from '@ionic/angular';
let ListPage = class ListPage {
    constructor(_http, _page, httpService) {
        this._http = _http;
        this._page = _page;
        this.httpService = httpService;
        this.tab = "0";
        this.model = {
            name: 'technicalsupportlist',
            apiUrl: '/api/tech-support/GetList',
            seachkey: '',
            orderstatus: 0,
            data: [],
            pageSize: 10,
            page: 1,
            sort: 'mcs_supportorderid desc',
            isending: false //是否加载完成
        };
        this.PageMessage = {
            PageNoMore: MessageService.PageNoMore,
            PageNoData: MessageService.PageNoData,
        };
    }
    ngOnInit() {
        this.model.page = 1;
        this._page.loadingShow();
        this.getList(null);
    }
    //每次页面加载
    ionViewWillEnter() {
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
        //切换标签初始化下拉控件事件
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = false;
        this.model.data = [];
        this.model.page = 1;
        this.model.isending = false;
        if (status != "" && status != undefined) {
            this.model.orderstatus = status;
        }
        else {
            this.model.orderstatus = 0;
        }
        this._page.loadingShow();
        this.getList(null);
    }
    //获取列表数据
    getList(event) {
        this._http.getForToaken(this.model.apiUrl, {
            orderstatus: this.model.orderstatus,
            seachkey: this.model.seachkey,
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
                if (this.model.page == 1) {
                    this.httpService.SetDataCache(this.model.name, JSON.stringify(this.model.data).toString());
                }
                event ? event.target.complete() : '';
                //判断是否有新数据
                if (res.Results.length < this.model.pageSize) {
                    event ? event.target.disabled = true : "";
                    if (this.model.page > 1) {
                        this.model.isending = true;
                    }
                }
            }
            else {
                this._page.alert(MessageService.AlterTitleMessage, MessageService.ErrorRequestException);
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert(MessageService.AlterTitleMessage, MessageService.ErrorRequestException);
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
tslib_1.__decorate([
    ViewChild(IonInfiniteScroll, null),
    tslib_1.__metadata("design:type", IonInfiniteScroll)
], ListPage.prototype, "infiniteScroll", void 0);
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