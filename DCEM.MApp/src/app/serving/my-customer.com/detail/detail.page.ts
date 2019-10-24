import { Component, OnInit } from '@angular/core';
import { Dcem } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    constructor(
        private _http: Dcem.Core.Http,
        private _page: Dcem.Core.Page,
        private activeRoute: ActivatedRoute
    ) {
        this.activeRoute.queryParams.subscribe((params: Params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this._page.alert("消息提示", params['id']);
            }
        });

    }

    ngOnInit() {

    }

}
