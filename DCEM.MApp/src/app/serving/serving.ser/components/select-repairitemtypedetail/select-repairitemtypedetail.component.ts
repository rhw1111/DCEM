import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonContent, IonInfiniteScroll, ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';

@Component({
    selector: 'app-select-repairitemtypedetail',
    templateUrl: './select-repairitemtypedetail.component.html',
    styleUrls: ['./select-repairitemtypedetail.component.scss'],
})
export class SelectRepairitemtypeComponent implements OnInit {

    @ViewChild(IonContent, null) ionContent: IonContent;
    @ViewChild(IonInfiniteScroll, null) ionInfiniteScroll: IonInfiniteScroll;

    mod = {
        apiUrl: '',
        data: [],
    };
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _valid: DCore_Valid,
        private _modalCtrl: ModalController
    ) {
        this.mod.apiUrl = "/Api/Serviceproxy/GetRepairitemtypedetailList";
    }

    ngOnInit() {
        this.listOnBind();
    }

    itemClick(item: any) {
        this._modalCtrl.dismiss({
            parts: item
        });
    }

    dismissModal() {
        this._modalCtrl.dismiss({
        });
    }

    doInfinite(event) {
        this.listOnBind();
    }


    listOnBind() {

        this._page.loadingShow();
        this._http.get(
            this.mod.apiUrl,
            {},
            (res: any) => {
                if (!this._valid.isNull(res.Results) !== null && res.Results.length > 0) {
                    for (var key in res.Results) {
                        var obj = {};
                        obj["model"] = res.Results[key]["Attributes"];
                        this.mod.data.push(obj);
                    }
                    this._page.loadingHide();
                }
                else {
                    this.ionInfiniteScroll.disabled = true;
                }
                this._page.loadingHide();
                this.ionInfiniteScroll.complete();
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");

                this._page.loadingHide();
                this.ionInfiniteScroll.complete();
            }
        );

    }

}
