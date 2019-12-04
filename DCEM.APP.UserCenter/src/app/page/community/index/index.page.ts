import { Component, ViewChild } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/component/typescript/Dcem.core';
import { IonSlides, IonSlide } from '@ionic/angular';
import * as $ from 'jquery';

@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
})
export class IndexPage {

    @ViewChild('mainSlide', null) mainSlide: IonSlides;

    //数据对象
    model = {
        apiUrl: 'api/ContentManagement/GetActivityList',
        activityList: [],
        activityParames: {
            Type: 1
        },
        newsList: [],
        newsParames: {
            Type: 2
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
        $(".dm-top-nav-tag").find("div").attr("class", "dm-top-nav-tag-text");
        $(".dm-top-nav-tag").find("div").eq(index).addClass("selected");
        switch (index) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                this.ShowAcitivities();
                break;
            case 3:
                this.ShowNews();
                break;
        }
    }

    //切换事件slides
    async slideChange($event) {
        let index: number = await this.mainSlide.getActiveIndex();
        this.tagChange(index);

    }

    //显示活动列表页面
    ShowAcitivities() {
        this._page.loadingShow();
        this.model.activityList = [];
        this._http.postForToaken(
            this.model.apiUrl,
            this.model.activityParames,
            (res: any) => {
                if (res !== null && res.ErrorMessage == null) {
                    for (var item in res.ContentList) {
                        var obj = {};
                        obj["Id"] = item["mcs_activitycontentsid"];
                        obj["StatusLabel"] = item["mcs_contentstatus"];
                        obj["Title"] = item["mcs_name"];
                        obj["Time"] = item["mcs_activitytime"];
                        obj["Address"] = item["mcs_activityaddress"];
                        this.model.activityList.push(obj);
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
    ShowNews() {
        this._page.loadingShow();
        //do something
        this.model.newsList.push({ Title: "某个新闻", Summury: "某个时间某个地方出了某事情" });
        this._page.loadingHide();
    }
}
