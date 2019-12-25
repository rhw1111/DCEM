import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';

@Component({
  selector: 'app-select-account',
  templateUrl: './select-account.component.html',
  styleUrls: ['./select-account.component.scss'],
})
export class SelectAccountComponent implements OnInit {
  public model = {
    apiUrl: '/api/account/GetList',
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
          //debugger;
          for (var key in res.Results) {
            var obj = {};
            obj["accountid"] = res.Results[key]["Attributes"]["accountid"];
            obj["accountnumber"] = res.Results[key]["Attributes"]["accountnumber"];
            obj["name"] = res.Results[key]["Attributes"]["name"]; 
            obj["mcs_mobilephone"] = res.Results[key]["Attributes"]["mcs_mobilephone"];                
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
      'accountid': item.accountid,
      'accountnumber': item.accountnumber,
      'username': item.name,
      'mcs_mobilephone': item.mcs_mobilephone
    });
  }

}
