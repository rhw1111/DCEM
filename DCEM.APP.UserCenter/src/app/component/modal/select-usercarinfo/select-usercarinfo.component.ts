import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { DCore_Http, DCore_Page } from '../../../../app/component/typescript/dcem.core';

@Component({
  selector: 'app-select-usercarinfo',
  templateUrl: './select-usercarinfo.component.html',
  styleUrls: ['./select-usercarinfo.component.scss'],
})
export class SelectUsercarinfoComponent implements OnInit {

  mod = {
    apiUrl: 'api/uc-usercarinfo/querylist',
    data: [],
    mcs_userid: "",
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
  ) { this.mod.mcs_userid= _navParams.get('mcs_userid');
  }

  ngOnInit() {
    this.listOnBind();
  }

  itemClick(item: any) {
    // console.log(item);
    this._modalCtrl.dismiss({
      usercarinfo: item
    });
}

dismissModal() {
    this._modalCtrl.dismiss({
    });
}

listOnBind() {
    this._page.loadingShow();
    this.mod.data = [];
    this._http.get(
        this.mod.apiUrl,
        {
            params: {
               mcs_userid: this.mod.mcs_userid,
            }
        },
        (res: any) => {
            if (res.Results !== null) {

                for (var key in res.Results) {
                    var obj = {};
                    console.log(res.Results[key]);
                    obj["mcs_usercarinfoid"] = res.Results[key]["Attributes"]["mcs_usercarinfoid"];
                    obj["mcs_name"] = res.Results[key]["Attributes"]["mcs_name"];
                    obj["mcs_plate"] = res.Results[key]["Attributes"]["mcs_plate"];
                    obj["mcs_phone"] = res.Results[key]["Attributes"]["mcs_phone"];
                    obj["mcs_username"] = res.Results[key]["Attributes"]["mcs_username"];
                    obj["mcs_carinfoid"] = res.Results[key]["Attributes"]["_mcs_carinfoid_value"];
                    obj["model"] = res.Results[key]["Attributes"];
                    this.mod.data.push(obj);
                }
                this._page.loadingHide();
            }
            else {
                this._page.alert("消息提示", "用户车辆数据加载异常");
                this._page.loadingHide();
            }
            //判断是否有数据
            if (res.Results.length == 0) {
                this.mod.nodata = true;
            }
        },
        (err: any) => {
            this._page.alert("消息提示", "用户车辆数据加载异常");
            this._page.loadingHide();
        }
    );

}
}
