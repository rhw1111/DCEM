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
        apiUrl: '/Api/Stock/GetSpmdspStockList',
        data: {
            spmdspstockArray: []
        },
        searchData: {
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

    //每次页面加载
    //ionViewWillEnter() {
    //    this.mod.searchData = {
    //        pageindex: 1,
    //        search: ""
    //    };
    //    this.listOnBind();
    //}

    //下拉刷新
    doInfinite(event) {
        this.mod.searchData.pageindex = this.mod.searchData.pageindex + 1;
        this.listOnBind();
    }


    //搜索事件
    searchOnKeyup(event: any) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.mod.data.spmdspstockArray = [];
            this.mod.searchData.pageindex = 1;
            this.ionInfiniteScroll.disabled = false;
            this.ionContent.scrollToTop(200);
            this.listOnBind();
        }
    }
    //列表绑定
    listOnBind() {

        console.log(this.mod.searchData.pageindex);

        if (this.mod.searchData.pageindex == 1)
            this._page.loadingShow();

        this._http.getForToaken(
            this.mod.apiUrl,
            {
                pageindex: this.mod.searchData.pageindex,
                search: this.mod.searchData.search
            },
            (res: any) => {
                if (!this._valid.isNull(res.Results) !== null && res.Results.length > 0) {
                    for (var key in res.Results) {

                        var obj = {};
                        obj = res.Results[key]["Attributes"];

                        console.log(obj);
                        //设置颜色
                        obj["icoColor"] = "dark";
                        if (obj["a.mcs_availableq"] > 0) {
                            obj["icoColor"] = "primary";
                        }
                        //初始化成0
                        if (this._valid.isNull(obj["a.mcs_availableq"])) {
                            obj["a.mcs_availableq"] = 0;
                        }

                        this.mod.data.spmdspstockArray.push(obj);

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
