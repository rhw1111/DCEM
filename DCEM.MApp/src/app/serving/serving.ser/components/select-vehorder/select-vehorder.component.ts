import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';

@Component({
  selector: 'app-select-vehorder',
  templateUrl: './select-vehorder.component.html',
  styleUrls: ['./select-vehorder.component.scss'],
})
export class SelectVehorderComponent implements OnInit {

  public model = {
    apiUrl: '/api/vehorder/GetVehorderList',
    data:[],
    params: {
      PageIndex: 1,
      PageSize:10,
      SearchKey: ""
    }
  }; 
  constructor(
    private modalCtrl: ModalController,
    private _http: DCore_Http,
    private _page: DCore_Page
  ) { }

  ngOnInit() {
    this.listOnBind();
  }

  searchOnKeyup(event: any) {
    var keyCode = event ? event.keyCode : "";
    if (keyCode == 13) {
      this.listOnBind();
    }
  }

  listOnBind() {
    this._page.loadingShow();
    this.model.data = [];
    this._http.postForToaken(this.model.apiUrl, this.model.params,
      (res: any) => {
        console.log(res);
        if (res.Results !== null) {
         // debugger;
          for (var key in res.Results) {
            var obj = {};
            obj["mcs_vehorderid"] = res.Results[key]["Attributes"]["mcs_vehorderid"];
            obj["mcs_code"] = res.Results[key]["Attributes"]["mcs_code"];    
            obj["createdon"] = res.Results[key]["Attributes"]["createdon"];            
            this.model.data.push(obj);
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

  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed':true
    });
  }
  //保存所选项
  itemClick(item){
    //debugger;
    this.modalCtrl.dismiss({
      'mcs_vehorderid': item.mcs_vehorderid,
      'mcs_code': item.mcs_code
    });
  }

}
