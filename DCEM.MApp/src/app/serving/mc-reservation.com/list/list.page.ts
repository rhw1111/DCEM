﻿import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../base/base.ser/http-service.service';
import { NavController, NavParams } from '@ionic/angular';
import { DCore_Page, DCore_Http } from 'app/base/base.ser/Dcem.core';
import sd from 'silly-datetime';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
    @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;
    public tab: any = "all";
    model = {
        name: 'appointmentlistinfo',//模块实体名称
        apiUrl: '/api/appointment-info/GetList',
        seachkey: '',//搜索关键字
        status: 0,//预约状态
        data: [],//列表数据
        pageSize: 10,//页数
        page: 1,//分页
        isending: false,//是否加载完成
        nodata: false,
        aLLTotalCount:0,//总条数
        followingCount:0,//跟进中
        followedCount: 0,//已跟进
        ifDoLoading: false,//是否初始加载
    };

    constructor(
        public router: Router,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private httpService: HttpService
    ) { }

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
    //doRefresh(event) {
    //    this.model.data = [];
    //    this.model.page = 1;
    //    this.model.isending = false;
    //    this.showlist(event);
    //}
    //加载下一页
    doLoading(event) {
        this.model.page++;
        this.model.ifDoLoading = true;
        this.showlist(event);
    }
    //切换tab
    selectTab(status) {
        this.infiniteScroll.disabled = false;//切换标签初始化下拉控件事件
        this.model.data = [];
        this.model.page = 1;
        this.model.isending = false;
        if (status != "" && status != undefined) {
            this.model.status = status;
        }
        else {
            this.model.status = 0;
        }
        this.model.ifDoLoading = false;
        this.showlist(null);
    }
    //展示数据
    showlist(event) {
        if (!this.model.ifDoLoading) {
            this._page.loadingShow();
        }
        this._http.getForToaken(this.model.apiUrl,
            {
                "status": this.model.status,
                "seachkey": this.model.seachkey,
                "pageSize": this.model.pageSize,
                "page": this.model.page
            },
            (res: any) => {
                if (res.Results !== null) {
                    for (var key in res.Results) {
                        var obj = {};
                        obj["mcs_appointmentinfoid"] = res.Results[key]["Id"];
                        obj["mcs_carplate"] = res.Results[key]["Attributes"]["mcs_carplate"];
                        obj["mcs_customername"] = res.Results[key]["Attributes"]["mcs_customername"];
                        obj["mcs_appointmentat"] = res.Results[key]["Attributes"]["mcs_appointmentat"];
                        obj["mcs_appointmentconfigid"] = res.Results[key]["Attributes"]["appointmentconfig_x002e_mcs_name"];
                        obj["mcs_status"] = res.Results[key]["Attributes"]["mcs_status"];
                        obj["mcs_statusvalue"] = res.Results[key]["Attributes"]["mcs_status@OData.Community.Display.V1.FormattedValue"];
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
            },
            (err: any) => {
                this._page.alert("消息提示", "预约单数据加载异常");
                this._page.loadingHide();
            }
        );
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


  
}
