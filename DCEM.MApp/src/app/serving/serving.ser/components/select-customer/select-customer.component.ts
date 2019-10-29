import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-select-customer',
    templateUrl: './select-customer.component.html',
    styleUrls: ['./select-customer.component.scss'],
})
export class SelectCustomerComponent implements OnInit {

    mod = {
        apiUrl: '',
        data: [],
        searchData: {
            pageindex: 1,
            search: ""
        },
    };
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _modalCtrl: ModalController
    ) {
        this.mod.apiUrl = "/Api/Vehowner/GetList";
    }

    ngOnInit() {
        this.listOnBind();
    }

    itemClick(item: any) {
        this._modalCtrl.dismiss({
            vehowne: item
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
                params: {
                    pageindex: this.mod.searchData.pageindex,
                    search: this.mod.searchData.search
                }
            },
            (res: any) => {
                if (res.Results !== null) {

                    for (var key in res.Results) {
                        var obj = {};

                        obj["Id"] = res.Results[key]["Id"];
                        obj["fullname"] = res.Results[key]["Attributes"]["mcs_fullname"];
                        obj["gender"] = res.Results[key]["Attributes"]["mcs_gender@OData.Community.Display.V1.FormattedValue"];
                        obj["genderval"] = res.Results[key]["Attributes"]["mcs_gender"];
                        obj["mobilephone"] = res.Results[key]["Attributes"]["mcs_mobilephone"];
                        obj["vehplate"] = res.Results[key]["Attributes"]["mcs_vehplate"];
                        obj["vehtype"] = res.Results[key]["Attributes"]["_mcs_vehtype@OData.Community.Display.V1.FormattedValue"];
                        this.mod.data.push(obj);
                    }
                    this._page.loadingHide();
                }
                else {
                    this._page.alert("消息提示", "客户数据加载异常");
                    this._page.loadingHide();
                }
            },
            (err: any) => {
                this._page.alert("消息提示", "客户数据加载异常");
                this._page.loadingHide();
            }
        );

    }
}
