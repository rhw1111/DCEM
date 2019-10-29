import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_ShareData } from 'app/base/base.ser/Dcem.core';

@Component({
    selector: 'app-edit2',
    templateUrl: './edit2.page.html',
    styleUrls: ['./edit2.page.scss'],
})
export class Edit2Page implements OnInit {

    mod = {
        apiUrl: '/Api/Serviceproxy/GetVehcheckresultList',
        data: {
            vehcheckresultMap: {}
        }
    };

    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _shareData: DCore_ShareData
    ) {

    }

    objectKeys = Object.keys;

    ngOnInit() {
        this.listOnBind();
    }

    listOnBind() {
        this._page.loadingShow();
        this.mod.data.vehcheckresultMap = {};
        this._http.get(
            this.mod.apiUrl,
            {
                params: {

                }
            },
            (res: any) => {
                console.log(res);
                if (res.Results !== null) {
                    for (var key in res.Results) {

                        var groupKey = res.Results[key]["Attributes"]["mcs_checktype"];
                        if (typeof this.mod.data.vehcheckresultMap[groupKey] === "undefined") {
                            this.mod.data.vehcheckresultMap[groupKey] = {};
                            this.mod.data.vehcheckresultMap[groupKey]["text"] = res.Results[key]["Attributes"]["mcs_checktype@OData.Community.Display.V1.FormattedValue"];
                            this.mod.data.vehcheckresultMap[groupKey].data = [];
                        }

                        var obj = {};
                        obj["Id"] = res.Results[key]["Id"];
                        obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
                        obj["checkreult"] = res.Results[key]["Attributes"]["mcs_checkreult"];
                        this.mod.data.vehcheckresultMap[groupKey].data.push(obj);
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
