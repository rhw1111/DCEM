import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-select-repairitemtype',
    templateUrl: './select-repairitemtype.component.html',
    styleUrls: ['./select-repairitemtype.component.scss'],
})
export class SelectRepairitemtypeComponent implements OnInit {

    mod = {
        apiUrl: '',
        data: [],
        searchData: {

        },
    };
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _modalCtrl: ModalController
    ) {
        this.mod.apiUrl = "/Api/Serviceproxy/GetRepairitemtypeList";
    }

    ngOnInit() {
        this.listOnBind();
    }

    itemClick(item: any) {
        this._modalCtrl.dismiss({
            item
        });
    }

    dismissModal() {
        this._modalCtrl.dismiss({
        });
    }

    searchOnKeyup(event: any) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.listOnBind();
        }
    }

    listOnBind() {
        this._page.loadingShow();
        this.mod.data = [];
        this._http.get(
            this.mod.apiUrl,
            {
            },
            (res: any) => {
                if (res.Results !== null) {

                    for (var key in res.Results) {
                        var obj = {};
                        obj["model"] = res.Results[key]["Attributes"];
                        this.mod.data.push(obj);
                    }
                    this._page.loadingHide();
                }
                else {
                    this._page.alert("消息提示", "数据加载异常");
                    this._page.loadingHide();
                }
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );

    }

}
