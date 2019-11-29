import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../../app/component/typescript/dcem.core';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
    public model: any = {
        title:"商品详情"
    }
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
    )
    { }

ngOnInit() {
    this.initListLoading();
    }
    //初始化页面数据加载
    initListLoading() {
    }
}
