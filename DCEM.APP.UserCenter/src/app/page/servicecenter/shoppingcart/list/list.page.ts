import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../../app/component/typescript/dcem.core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
    public model: any = {
        title: "购物车",
        cartList :[
            {
                id: 1,
                name: '水果',
                checkAll: false,
                list: [
                    {
                        id: 2,
                        name: '苹果',
                        checked: false,
                    },
                    {
                        id: 3,
                        name: '苹果1',
                        checked: false,
                    },
                    {
                        id: 4,
                        name: '苹果2',
                        checked: false,
                    },
                ]
            },
            {
                id: 5,
                name: '水果1',
                checkAll: false,
                list: [
                    {
                        id: 6,
                        name: '苹果2',
                        checked: false,
                    },
                    {
                        id: 7,
                        name: '苹果3',
                        checked: false,
                    },
                    {
                        id: 8,
                        name: '苹果4',
                        checked: false,
                    },
                ]
            }
        ]
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
    }
}
