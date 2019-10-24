import { Component, OnInit } from '@angular/core';
import { Dcem } from 'app/base/base.ser/Dcem.core';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {


    mod = {
        apiUrl: '',
        data: []
    };

    constructor(
        private _http: Dcem.Core.Http,
        private _page: Dcem.Core.Page
    ) {
        this.mod.apiUrl = "/Api/Customer/GetMyCustomerList";
    }

    ngOnInit() {
        this.listOnBind();
    }


    listOnBind() {
        this._page.loadingShow();
        this._http.get(
            this.mod.apiUrl,
            {},
            (res: any) => {
                if (res.Results !== null) {
                    for (var key in res.Results) {
                        var obj = {};
                        obj["Id"] = res.Results[key]["Id"];
                        obj["fullname"] = res.Results[key]["Attributes"]["mcs_customerid"]["mcs_fullname"];
                        obj["gender"] = res.Results[key]["Attributes"]["mcs_customerid"]["mcs_gender"];
                        obj["motormodel"] = res.Results[key]["Attributes"]["mcs_customerid"]["mcs_motormodel"];
                        obj["vehplate"] = res.Results[key]["Attributes"]["mcs_customerid"]["mcs_vehplate"];
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
