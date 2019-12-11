import { Component, OnInit, Input } from '@angular/core';
import { IonBackButton, IonBackButtonDelegate } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData } from 'app/component/typescript/dcem.core';
@Component({
    selector: 'app-tophead',
    templateUrl: './tophead.component.html',
    styleUrls: ['./tophead.component.scss'],
})
export class TopheadComponent implements OnInit {


    @Input() topHeadTitle: string;
    @Input() topHeadBackUrl: string;
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _valid: DCore_Valid,
        private _shareData: DCore_ShareData
    ) {

    }

    ngOnInit() { }


    public backOnBack() {
        this._page.navigateRoot(this.topHeadBackUrl, null, "back");
    }
}
