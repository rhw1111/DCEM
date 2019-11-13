import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    public tab: any = "info";
    mod = {
        apiUrl: '/Api/Stock/GetDeliverycentercarStockInfo',
        data: {
            deliverycentercarstock: {},
            vehiclematerial: {},
            vehicle: {},
            dealercarmovein: {}
        }
    };
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _shareData: DCore_ShareData,
        private _valid: DCore_Valid,
        private activeRoute: ActivatedRoute
    ) {

    }

    ionViewWillEnter() {

    }

    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params: Params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.pageOnBind(params['id']);
            }
        });
    }

    pageOnBind(id: any) {
        this._page.loadingShow();
        this._http.get(
            this.mod.apiUrl,
            {
                params: {
                    guid: id,
                }
            },
            (res: any) => {
                if (!this._valid.isNull(res.Deliverycentercarstock)) {
                    this.mod.data.deliverycentercarstock = res.Deliverycentercarstock["Attributes"];
                }
                if (!this._valid.isNull(res.Vehiclematerial)) {
                    this.mod.data.vehiclematerial = res.Vehiclematerial["Attributes"];
                }
                if (!this._valid.isNull(res.Vehicle)) {
                    this.mod.data.vehicle = res.Vehicle["Attributes"];
                }
                if (!this._valid.isNull(res.Dealercarmovein)) {
                    this.mod.data.dealercarmovein = res.Dealercarmovein["Attributes"];
                }
                console.log(this.mod.data);
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );
    }

}
