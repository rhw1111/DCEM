import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonContent, IonInfiniteScroll } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

    @ViewChild(IonContent, null) ionContent: IonContent;
    @ViewChild(IonInfiniteScroll, null) ionInfiniteScroll: IonInfiniteScroll;

    mod = {
        apiUrl: '/Api/Serviceproxy/GetList',
        data: {},
        searchData: {
            type: 2,
            pageindex: 1,
            search: ""
        },
        objectKeys: Object.keys
    };
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _valid: DCore_Valid,
        private _datePipe: DatePipe
    ) {

    }

    ngOnInit() {
        this.listOnBind();
    }

    //下拉刷新
    doInfinite(event) {
        this.mod.searchData.pageindex = this.mod.searchData.pageindex + 1;
        this.listOnBind();
    }


    //搜索事件
    searchOnKeyup(event: any) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.mod.data = {};
            this.mod.searchData.pageindex = 1;
            this.ionInfiniteScroll.disabled = false;
            this.ionContent.scrollToTop(200);
            this.listOnBind();
        }
    }
    //列表绑定
    listOnBind() {

        if (this.mod.searchData.pageindex == 1)
            this._page.loadingShow();

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
                if (!this._valid.isNull(res.Results) !== null && res.Results.length > 0) {
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
                        obj["createdonformat"] = res.Results[key]["Attributes"]["createdon@OData.Community.Display.V1.FormattedValue"];
                        obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
                        obj["status"] = res.Results[key]["Attributes"]["mcs_status"];
                        obj["statusformat"] = res.Results[key]["Attributes"]["mcs_status@OData.Community.Display.V1.FormattedValue"];

                        //设置颜色
                        obj["statuscolor"] = "primary";
                        if (obj["status"] < 100) {
                            obj["statuscolor"] = "primary";
                        }
                        else if (obj["status"] < 180) {
                            obj["statuscolor"] = "tertiary";
                        }
                        else {
                            obj["statuscolor"] = "success";
                        }
                        this.mod.data[dateKey].data.push(obj);

                    }
                }
                else {
                    this.ionInfiniteScroll.disabled = true;
                }
                this.ionInfiniteScroll.complete();
                if (this.mod.searchData.pageindex == 1)
                    this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                if (this.mod.searchData.pageindex == 1)
                    this._page.loadingHide();
                this.ionInfiniteScroll.complete();
            }
        );
    }

}
