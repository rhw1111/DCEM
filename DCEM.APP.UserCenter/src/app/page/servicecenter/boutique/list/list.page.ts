import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../../app/component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
    public model: any = {
        search: {
            //apiUrl: "api/product/All",
            apiUrl: "api/product/QueryProductByCategory",
            mode: "-1",
            price: "-1",
            opack: "-1",
            pageSize: 10,//页数
            page: 1,//分页
            mcstype: 10//精品
        },
        datalist: [],//数据集合
        isending: false,//是否加载完成
    }
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,

    ) { }
    private id
    ngOnInit() {
        this.id = this.routerinfo.snapshot.queryParams["id"];
        this.initListLoading();
    }
    //下拉刷新
    doRefresh(event) {
        this.model.datalist = [];
        this.model.search.page = 1;
        this.model.isending = false;
        this.getList(event, this.id);
    }
    //加载下一页
    doLoading(event) {
        this.model.search.page++;
        this.getList(event, this.id);
    }
    //初始化页面数据加载
    initListLoading() {
        this._page.loadingShow();
        this.getList(null, this.id);
    }

    //获取列表数据
    getList(event, id) {
        this._http.postForShopping(this.model.search.apiUrl,
            {
                code: id,
                PageSize: this.model.search.pageSize,
                PageIndex: this.model.search.page,
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
                    //判断是否有新数据
                    if (res.Datas.length < this.model.search.pageSize) {
                        event ? event.target.disabled = true : "";
                        this.model.isending = true;
                    }
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
    //getList(event,id) {
    //    this._http.postForShopping(this.model.search.apiUrl,
    //        {
    //            StartDateTime: "2019-01-01 00:00:00",
    //            EndDateTime: "2019-12-31 23:59:59",
    //            PageSize: this.model.search.pageSize,
    //            PageIndex: this.model.search.page,
    //            McsType: this.model.search.mcstype
    //        },
    //        (res: any) => {
    //            if (res != null && res.Datas !== null) {
    //                //绑定数据
    //                res.Datas.forEach(item => {
    //                    var imagedata = [];
    //                    if (item.ImageData != null || item.ImageData.length > 0) {
    //                        item.ImageData.forEach(temp => {
    //                            if (temp.Category == 2) {
    //                                imagedata.push(temp);
    //                            }
    //                        });
    //                    }
    //                    item.ImageData = imagedata;
    //                    this.model.datalist.push(item);
    //                });
    //                event ? event.target.complete() : '';
    //                //判断是否有新数据
    //                if (res.Datas.length < this.model.search.pageSize) {
    //                    event ? event.target.disabled = true : "";
    //                    this.model.isending = true;
    //                }
    //                console.log(this.model.datalist);
    //            }
    //            else {
    //                this._page.alert("消息提示", "数据加载异常");
    //            }
    //            this._page.loadingHide();
    //        },
    //        (err: any) => {
    //            this._page.alert("消息提示", "数据加载异常");
    //            this._page.loadingHide();
    //        }
    //    );
    //}

}
