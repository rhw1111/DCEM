import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
@Component({
  selector: 'app-select-vehicletype',
  templateUrl: './select-vehicletype.component.html',
  styleUrls: ['./select-vehicletype.component.scss'],
})
export class SelectVehicletypeComponent implements OnInit {


  public selectItemValue: any = '';
  public seachkey: string = '';
  public dataList: any = [];

  public mod: any = {
    apiUrl: '',
    data: [],
    searchData: { 
      pageindex: 1, 
      search: "",
      pagesize:20
    }
  };

  objectKeys = Object.keys;

  constructor(
    private modalCtrl: ModalController,
    private _http: DCore_Http,
    private _page: DCore_Page
  ) {
    this.mod.apiUrl = "/Api/basedata/QueryVehicletype"; 
    this.mod.searchData.search = "";
    this.mod.searchData.pageindex = 1;
    this.mod.searchData.pagesize = 20;
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
    this._http.get(
      this.mod.apiUrl,
      {
        params: {   
          pageindex: this.mod.searchData.pageindex,
          seachkey: this.mod.searchData.search,
          pageSize:this.mod.searchData.pagesize
        }
      },
      (res: any) => {
        console.log(res);
        if (res.Results !== null) { 
          for (var key in res.Results) {
            var obj = {}; 
            obj["Id"] = res.Results[key]["Id"];
            obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
            obj["mcs_code"] = res.Results[key]["Attributes"]["mcs_code"];
            obj["brandname"] = res.Results[key]["Attributes"]["brandname"]; 
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
      'dismissed': true
    });
  }
  //保存所选项
  itemClick(item) {
    this.modalCtrl.dismiss({
      'id': item.Id,
      'name': item.name
    });
  }

}
