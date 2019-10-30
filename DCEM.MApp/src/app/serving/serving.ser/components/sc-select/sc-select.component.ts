import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';

@Component({
  selector: 'app-sc-select',
  templateUrl: './sc-select.component.html',
  styleUrls: ['./sc-select.component.scss'],
})
export class ScSelectComponent implements OnInit {

  public selectItemValue: any = '';
  public seachkey: string = '';
  public dataList: any = [];

  public mod: any = {
    apiUrl: '',
    data:[],
    searchData: {
      type: 1,
      pageindex: 1,
      search: ""
    }
  };

  objectKeys = Object.keys;

  constructor(
    private modalCtrl: ModalController,
    private _http: DCore_Http,
    private _page: DCore_Page
  ) {
    this.mod.apiUrl = "/Api/Serviceproxy/GetList";
    this.mod.searchData.type = 2;
    this.mod.searchData.search = "";
    this.mod.searchData.pageindex = 1;
  }

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
        console.log(res);
        if (res.Results !== null) {
          for (var key in res.Results) {
            var obj = {};
            obj["Id"] = res.Results[key]["Id"];
            obj["carplate"] = res.Results[key]["Attributes"]["mcs_carplate"];
            obj["customername"] = res.Results[key]["Attributes"]["mcs_customername"];
            obj["createdon"] = res.Results[key]["Attributes"]["createdon@OData.Community.Display.V1.FormattedValue"];
            obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
            this.mod.data.push(obj);
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
    this.modalCtrl.dismiss({
      'id': item.Id,
      'name': item.name
    });
  }
}
