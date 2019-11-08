import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
@Component({
    selector: 'app-success',
    templateUrl: './success.page.html',
    styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

    mod = {
        id: "",
        no: ""
    };

    constructor(
        private activeRoute: ActivatedRoute,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _shareData: DCore_ShareData,
        private _valid: DCore_Valid,
    ) { }

    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params: Params) => {
            if (!this._valid.isNull("id")) {
                this.mod.id = params['id'];
            }
            if (!this._valid.isNull("no")) {
                this.mod.no = params['no'];
            }
        });
    }

}
