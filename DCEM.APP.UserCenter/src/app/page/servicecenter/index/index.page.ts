import { Component } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../app/component/typescript/dcem.core';

@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
})
export class IndexPage {
    public model: any = {
        search: {
            apiUrl: "api/product/All",
            mode: "-1",
            price: "-1",
            opack: "-1",
            pageSize: 4,//页数
            page: 1,//分页
            mcstype: 10//精品
        },
        datalist: [],//数据集合
        isending: false,//是否加载完成
    }
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
    ) { }

    ngOnInit() {
        this.initListLoading();
    }

    //初始化页面数据加载
    initListLoading() {
        this._page.loadingShow();
        this.getList(null);
    }

    //获取列表数据
    getList(event) {
        this._http.postForShopping(this.model.search.apiUrl,
            {
                StartDateTime: "2019-01-01 00:00:00",
                EndDateTime: "2019-12-31 23:59:59",
                PageSize: this.model.search.pageSize,
                PageIndex: this.model.search.page,
                McsType: this.model.search.mcstype
            },
            (res: any) => {
                if (res != null && res.Datas !== null) {
                    //绑定数据
                    res.Datas.forEach(item => {
                        var imagedata = [];
                        if (item.ImageData != null || item.ImageData.length > 0) {
                            item.ImageData.forEach(temp => {
                                if (temp.Category == 2) {
                                    imagedata.push(temp);
                                }
                            });
                        }
                        item.ImageData = imagedata;
                        this.model.datalist.push(item);
                    });
                    event ? event.target.complete() : '';
                }
                else {
                    this._page.alert("消息提示", "数据加载异常");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );
    }
}
