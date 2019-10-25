import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

    mod = {
        apiUrl: '',
        data: [],
        searchData: {
            type: 1,
            pageindex: 1,
            search: ""
        }
    };

    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page
    ) {
        this.mod.apiUrl = "/Api/Customer/GetMyCustomerList";
    }

    ngOnInit() {
        this.listOnBind();
    }

    tagOnClick(type) {
        this.mod.searchData.type = type;
        this.mod.searchData.pageindex = 1;
        this.listOnBind();
    }

    searchOnClick() {
        this.listOnBind();
    }

    listOnBind() {
        this._page.loadingShow();
        this.mod.data = [];
        this._http.get(
            this.mod.apiUrl,
            {
                params: {
                    type: this.mod.searchData.type,
                    pageindex: this.mod.searchData.pageindex,
                    search: this.mod.searchData.search
                }
            },
            (res: any) => {
                if (res.Results !== null) {
                    console.log(res);
                    for (var key in res.Results) {
                        var obj = {};
                        obj["Id"] = res.Results[key]["Id"];
                        obj["fullname"] = res.Results[key]["Attributes"]["a_x002e_mcs_fullname"];
                        obj["gender"] = res.Results[key]["Attributes"]["a_x002e_mcs_gender"];
                        obj["mobilephone"] = res.Results[key]["Attributes"]["a_x002e_mcs_mobilephone"];
                        obj["vehplate"] = res.Results[key]["Attributes"]["a_x002e_mcs_vehplate"];
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
