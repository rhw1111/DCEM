import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ModalController, NavParams } from '@ionic/angular';

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
        page: "",
        nodata: false//是否有数据

    };
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _modalCtrl: ModalController,
        private _navParams: NavParams
    ) {
        this.mod.mcs_dealerid = _navParams.get('mcs_dealerid');
        this.mod.mcs_servetype = _navParams.get('mcs_servetype');
        this.mod.mcs_servedate = _navParams.get('mcs_servedate');
    }

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
                    mcs_dealerid: this.mod.mcs_dealerid,
                    mcs_servetype: this.mod.mcs_servetype,
                    mcs_servedate: this.mod.mcs_servedate
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
                //判断是否有数据
                if (res.Results.length == 0) {
                    this.mod.nodata = true;
                }
            },
            (err: any) => {
                this._page.alert("消息提示", "客户数据加载异常");
                this._page.loadingHide();
            }
        );

    }
}
