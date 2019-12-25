import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';

@Component({
  selector: 'app-select-surveyorder',
  templateUrl: './select-surveyorder.component.html',
  styleUrls: ['./select-surveyorder.component.scss'],
})
export class SelectSurveyorderComponent implements OnInit {

  public model = {
    apiUrl: '/api/Installation/GetSurveyorderList',
    data:[],
    params: {
      PageIndex: 1,
      PageSize:10,
      SearchKey: "",
     // mcs_surveystatus:19
    }
  }; 

  constructor(
    private modalCtrl: ModalController,
    private _http: DCore_Http,
    private _page: DCore_Page
  ) { }

  ngOnInit() {
    debugger;
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
          debugger;
          for (var key in res.Results) {
            var obj = {};
            obj["mcs_surveyorderid"] = res.Results[key]["Attributes"]["mcs_surveyorderid"];
            obj["mcs_name"] = res.Results[key]["Attributes"]["mcs_name"];
            obj["mcs_username"] = res.Results[key]["Attributes"]["mcs_username"]; 
            obj["mcs_userphone"] = res.Results[key]["Attributes"]["mcs_userphone"];                
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
    debugger;
    this.modalCtrl.dismiss({
      'mcs_surveyorderid': item.mcs_surveyorderid,
      'mcs_name': item.mcs_name,
      'mcs_username': item.mcs_username,
      'mcs_userphone': item.mcs_userphone
    });
  }

}
