import * as tslib_1 from "tslib";
var _a, _b;
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../base/base.ser/http-service.service';
import { DCore_Page, DCore_Http } from 'app/base/base.ser/Dcem.core';
import sd from 'silly-datetime';
import { IonInfiniteScroll } from '@ionic/angular';
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
            isending: false,
            nodata: false,
            aLLTotalCount: 0,
            followingCount: 0,
            followedCount: 0 //已跟进
        };
    }
    ngOnInit() {
        this.model.page = 1;
        //先不加缓存
        this.showlist(null);
        //var cachedata = this.httpService.GetDataCache(this.model.name);
        //if (cachedata == "") {
        //    this.showlist(null);
        //}
        //else {
        //    this.model.data = JSON.parse(cachedata);
        //}
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
        this.infiniteScroll.disabled = false; //切换标签初始化下拉控件事件
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
            if (res.Results !== null) {
                for (var key in res.Results) {
                    var obj = {};
                    obj["mcs_appointmentinfoid"] = res.Results[key]["Id"];
                    obj["mcs_carplate"] = res.Results[key]["Attributes"]["mcs_carplate"];
                    obj["mcs_customername"] = res.Results[key]["Attributes"]["mcs_customername"];
                    obj["mcs_appointmentat"] = res.Results[key]["Attributes"]["mcs_appointmentat"];
                    obj["mcs_appointmentconfigid"] = res.Results[key]["Attributes"]["appointmentconfig_x002e_mcs_name"];
                    obj["mcs_status"] = res.Results[key]["Attributes"]["mcs_status"];
                    //设置颜色
                    obj["appointment"] = "primary";
                    if (obj["mcs_status"] == 10) {
                        obj["appointment"] = "tertiary";
                    }
                    else if (obj["mcs_status"] == 20) {
                        obj["appointment"] = "primary";
                    }
                    else if (obj["mcs_status"] == 50) {
                        obj["appointment"] = "dark";
                    }
                    else {
                        obj["appointment"] = "success";
                    }
                    this.model.data.push(obj);
                }
                this.model.aLLTotalCount = res.ALLTotalCount;
                this.model.followingCount = res.FollowingCount;
                this.model.followedCount = res.FollowedCount;
                //设置数据存储到本地
                if (this.model.page == 1) {
                    this.httpService.SetDataCache(this.model.name, JSON.stringify(this.model.data).toString());
                }
                event ? event.target.complete() : '';
                //判断是否有新数据
                if (res.Results.length < 10) {
                    event ? event.target.disabled = true : "";
                    this.model.isending = true;
                }
            }
            else {
                this._page.alert("消息提示", "预约单数据加载异常");
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "预约单数据加载异常");
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
tslib_1.__decorate([
    ViewChild(IonInfiniteScroll, null),
    tslib_1.__metadata("design:type", typeof (_a = typeof IonInfiniteScroll !== "undefined" && IonInfiniteScroll) === "function" ? _a : Object)
], ListPage.prototype, "infiniteScroll", void 0);
ListPage = tslib_1.__decorate([
    Component({
        selector: 'app-list',
        templateUrl: './list.page.html',
        styleUrls: ['./list.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof Router !== "undefined" && Router) === "function" ? _b : Object, DCore_Http,
        DCore_Page,
        HttpService])
], ListPage);
export { ListPage };
//# sourceMappingURL=list.page.js.map