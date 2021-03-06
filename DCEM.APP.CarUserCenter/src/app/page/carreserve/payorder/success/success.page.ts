﻿import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_ShareData } from '../../../../../app/component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {
    public model: any = {
        params: {},
        shareDataIndexKey: "successing",
    };
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,
        private _shareData: DCore_ShareData
    ) { }

    ngOnInit() {
        //获取参数
        //var datastr = this.routerinfo.snapshot.queryParams["params"];
        //this.model.params = JSON.parse(datastr);
        if (this._shareData.has(this.model.shareDataIndexKey)) {
            this.model.params = this._shareData.get(this.model.shareDataIndexKey);
        } else {
            this._page.goto("/carreserve/index");
        }
    }

    gotodetail() {
        var param = {
            "OrderCode": this.model.params.OrderCode,
            "mcs_smallorderid": this.model.params.mcs_smallorderid
        };
        console.log(param);
        this._page.navigateRoot("/carreserve/myreserveorder/detail", { params: JSON.stringify(param) });
    }

}
