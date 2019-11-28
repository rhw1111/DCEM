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
            apiUrl: "api/product/All",
            mode: "-1",
            price: "-1",
            opack: "-1",
            pageSize: 10,//??
            page: 1,//??
        },
        datalist: [],//????
        isending: false,//??????
    }
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,

    ) { }

    ngOnInit() {
        this.initListLoading();
    }
    //????
    doRefresh(event) {
        this.model.datalist = [];
        this.model.search.page = 1;
        this.model.isending = false;
        this.getList(event);
    }
    //?????
    doLoading(event) {
        this.model.search.page++;
        this.getList(event);
    }
    //?????????
    initListLoading() {
        this._page.loadingShow();
        this.getList(null);
    }

    //??????
    getList(event) {
        this._http.postForShopping(this.model.search.apiUrl,
            {
                StartDateTime: "2019-01-01 00:00:00",
                EndDateTime: "2019-12-31 23:59:59",
                PageSize: this.model.search.pageSize,
                PageIndex: this.model.search.page
            },
            (res: any) => {
                console.log(res);
                //debugger;
                if (res != null && res.Datas !== null) {
                    //????
                    res.Datas.forEach(item => {
                        this.model.datalist.push(item);
                    });

                    event ? event.target.complete() : '';
                    //????????
                    if (res.Datas.length < this.model.search.pageSize) {
                        event ? event.target.disabled = true : "";
                        this.model.isending = true;
                    }
                }
                else {
                    this._page.alert("????", "??????");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("????", "??????");
                this._page.loadingHide();
            }
        );
    }

}
