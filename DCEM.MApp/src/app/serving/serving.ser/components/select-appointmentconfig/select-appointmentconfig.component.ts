import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-appointmentconfig',
  templateUrl: './select-appointmentconfig.component.html',
  styleUrls: ['./select-appointmentconfig.component.scss'],
})
export class SelectAppointmentconfigComponent implements OnInit {

    mod = {
        apiUrl: '/api/appointment-info/GetConfig',
        data: [],
        mcs_dealerid: "",
        mcs_servetype: "",
        mcs_servedate: "",
        sort: "",
        pageSize: "",
        page:""

    };
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _modalCtrl: ModalController
    ) { }

    ngOnInit() {
        this.listOnBind();
    }

    itemClick(item: any) {
        console.log(item);
        this._modalCtrl.dismiss({
            appointmentconfig: item
        });
    }

    dismissModal() {
        this._modalCtrl.dismiss({
        });
    }

    listOnBind() {
        debugger;
        this._page.loadingShow();
        this.mod.data = [];
        this._http.get(
            this.mod.apiUrl,
            {
                params: {
                    mcs_dealerid: "B30FEFC4-E9F9-E811-A81E-9A16184AF7BF",
                    mcs_servetype: 30,
                    mcs_servedate:"2019-09-05"
                }
            },
            (res: any) => {
                if (res.Results !== null) {

                    for (var key in res.Results) {
                        var obj = {};
                        console.log(res.Results[key]);
                        obj["mcs_appointmentconfigid"] = res.Results[key]["Attributes"]["mcs_appointmentconfigid"];
                        obj["mcs_name"] = res.Results[key]["Attributes"]["mcs_name"];
                        obj["mcs_maxcapacity"] = res.Results[key]["Attributes"]["mcs_maxcapacity"];
                        obj["mcs_surplusnum"] = res.Results[key]["Attributes"]["mcs_surplusnum"];
                        obj["mcs_alreadynum"] = res.Results[key]["Attributes"]["mcs_alreadynum"];
                        obj["model"] = res.Results[key]["Attributes"];
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
