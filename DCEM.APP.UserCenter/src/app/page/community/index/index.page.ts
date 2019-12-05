import { Component, ViewChild } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/component/typescript/Dcem.core';
import { IonSlides, IonSlide } from '@ionic/angular';
import * as $ from 'jquery';
import sd from 'silly-datetime';

@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
})
export class IndexPage {

    @ViewChild('mainSlide', null) mainSlide: IonSlides;

    //数据对象
    model = {
        contentManagementApiUrl: 'api/ContentManagement/GetActivityList',

        index: 0,
        isAllData: false,
        dataList: [],
        params: {
            Type: 0,
            PageSize: 2,
            PageIndex: 1,
        }
    }

    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page
    ) { }

    ngOnInit() {
        this.init();
    }

    init() {
        //切换事件tab
        var that: IndexPage = this;
        $(".dm-top-nav-tag").find("div").click(function () {
            var index = $(this).parent().index();
            that.mainSlide.slideTo(index);
        })
    }

    tagChange(index) {
        this.model.index = index;
        $(".dm-top-nav-tag").find("div").attr("class", "dm-top-nav-tag-text");
        $(".dm-top-nav-tag").find("div").eq(index).addClass("selected");
        this.ShowAction(null);
    }

    //切换事件slides
    async slideChange(event) {
        let index: number = await this.mainSlide.getActiveIndex();
        this.tagChange(index);
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

    //日期时间格式
    FormatToDateTime(date) {
        if (date != null && date != undefined) {
            return sd.format(date, 'YYYY-MM-DD HH:mm');
        }
        else {
            return '';
        }
    }

    //空值显示格式
    ShowEmptyValue(data) {
        if (data == "" || data == null || data == undefined) {
            return "--";
        }
    }

    //下拉刷新
    DoRefresh(event) {
        this.model.params.PageIndex = 1;
        this.model.isAllData = false;
        this.ShowAction(event);
    }

    //加载下一页
    DoLoading(event) {
        this.model.params.PageIndex++;
        this.ShowAction(event);
    }

    //根据首页index不同触发不同列表事件
    ShowAction(event) {
        switch (this.model.index) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                this.ShowAcitivities(event);
                break;
            case 3:
                this.ShowNews(event);
                break;
        }
    }

    //显示活动列表页面
    ShowAcitivities(event) {
        this._page.loadingShow();
        this.model.dataList = [];
        this.model.params.Type = 1;
        this._http.postForToaken(
            this.model.contentManagementApiUrl,
            this.model.params,
            (res: any) => {
                if (res !== null && res.ErrorMessage == null) {
                    res.ContentList.forEach(content => {
                        var item = content["Attributes"];
                        var obj = {};
                        obj["Id"] = item["mcs_activitycontentsid"];
                        switch (item["mcs_contentstatus"]) {
                            case 1:
                                obj["StatusLabel"] = "进行中";
                                break;
                            case 2:
                                obj["StatusLabel"] = "已结束";
                                break;
                            default:
                                obj["StatusLabel"] = "未开始";
                                break;
                        }
                        obj["Title"] = item["mcs_name"];
                        obj["Time"] = item["mcs_activitytime"];
                        obj["Address"] = item["mcs_activityaddress"];
                        this.model.dataList.push(obj);
                    });
                    event ? event.target.complete() : '';
                    //判断是否有新数据
                    if (res.ContentList.length < this.model.params.PageIndex) {
                        event ? event.target.disabled = true : "";
                        this.model.isAllData = true;
                    }
                }
                else {
                    console.log(res);
                    this._page.alert("消息提示", "活动内容加载异常");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                console.log(err);
                this._page.alert("消息提示", "活动内容加载异常");
                this._page.loadingHide();
            }
        );
        this._page.loadingHide();
    }

    //显示资讯列表页面
    ShowNews(event) {
        this._page.loadingShow();
        this.model.dataList = [];
        this.model.params.Type = 2;
        this._http.postForToaken(
            this.model.contentManagementApiUrl,
            this.model.params,
            (res: any) => {
                if (res !== null && res.ErrorMessage == null) {
                    res.ContentList.forEach(content => {
                        var item = content["Attributes"];
                        var obj = {};
                        obj["Id"] = item["mcs_newscontentsid"];
                        obj["Title"] = item["mcs_name"];
                        obj["Summury"] = item["mcs_description"];
                        this.model.dataList.push(obj);
                    });
                    event ? event.target.complete() : '';
                    //判断是否有新数据
                    if (res.ContentList.length < this.model.params.PageIndex) {
                        event ? event.target.disabled = true : "";
                        this.model.isAllData = true;
                    }
                }
                else {
                    console.log(res);
                    this._page.alert("消息提示", "新闻资讯加载异常");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                console.log(err);
                this._page.alert("消息提示", "新闻资讯加载异常");
                this._page.loadingHide();
            }
        );
        this._page.loadingHide();
    }
}
