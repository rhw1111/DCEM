import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../../app/component/typescript/dcem.core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
    public model: any = {
        search: {
            apiUrl: "api/category/AllFrontCategory2",
            mcstype: 10//精品
        },
        title:"精品分类",
        categoryparentlist:[],//一级分类集合
        categorylist: [],//二级分类集合
        selectlist: [],//选择分类集合
        displayflag:true,
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
        this._http.getForShopping(this.model.search.apiUrl,
            null,
            (res: any) => {
                if (res != null && res.Datas !== null) {
                    //绑定数据
                    var i = 0;
                    var ProductCategoryId = 0;
                    res.forEach(item => {
                        if (item.CateGroup == 2) {
                            if (item.ParentId == 0) {
                                if (i == 0) {
                                    item.color = "primary";
                                    item.arrows = true;
                                    ProductCategoryId = item.ProductCategoryId;
                                } else {
                                    item.color = "light";
                                    item.arrows = false;
                                }
                                this.model.categoryparentlist.push(item);
                                i++;
                            } else {
                                this.model.categorylist.push(item);
                            }
                        }
                    });
                    this.model.categorylist.forEach(item => {
                        if (item.ParentId == ProductCategoryId) {
                            this.model.selectlist.push(item);
                        }
                    })
                    if (this.model.selectlist.length <= 0) {
                        this.model.displayflag = false;
                    }
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
    //选择分类
    checkMenu(ProductCategoryId) {
        var categoryparentlist = [];
        var selectlist = [];
        this.model.categoryparentlist.forEach(item => {
            item.color = "light";
            item.arrows = false;
            if (item.ProductCategoryId == ProductCategoryId) {
                item.color = "primary";
                item.arrows = true;
            }
            categoryparentlist.push(item);
        });
        this.model.categorylist.forEach(item => {
            if (item.ParentId == ProductCategoryId) {
                selectlist.push(item);
            }
        });
        if (selectlist.length <= 0) {
            this.model.displayflag = false;
        } else {
            this.model.displayflag = true;
        }
        this.model.selectlist = selectlist;
        this.model.categoryparentlist = categoryparentlist;
    }
}
