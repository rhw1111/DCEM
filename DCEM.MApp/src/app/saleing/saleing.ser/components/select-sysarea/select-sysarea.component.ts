import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams } from '@ionic/angular';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
@Component({
  selector: 'app-select-sysarea',
  templateUrl: './select-sysarea.component.html',
  styleUrls: ['./select-sysarea.component.scss'],
})
export class SelectSysareaComponent implements OnInit {


  public selectItemValue: any = '';
  public seachkey: string = '';
  public dataList: any = [];

  public mod: any = {
    apiUrl: '',
    data: [],
    searchData: { 
      pageindex: 1,
      pid: "",//父ID 外部传入 未实现
      level: "",//级别
      search: "",
      pagesize:10
    }
  };

  objectKeys = Object.keys;

    constructor(
        private modalCtrl: ModalController,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _navParams: NavParams

    ) {
        this.mod.apiUrl = "/Api/basedata/QuerySysarea";
        this.mod.searchData.search = "";
        this.mod.searchData.pageindex = 1;
        this.mod.searchData.pagesize = 10;
        this.mod.searchData.pid = _navParams.get('pid');
        this.mod.searchData.level = _navParams.get('level');
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
          pid: this.mod.searchData.pid,
          level: this.mod.searchData.level,
          pageindex: this.mod.searchData.pageindex,
          seachkey: this.mod.searchData.search,
          pageSize:this.mod.searchData.pagesize
        }
      },
      (res: any) => { 
        if (res.Results !== null) { 
          for (var key in res.Results) {
            var obj = {}; 
            obj["Id"] = res.Results[key]["Id"];
            obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
            obj["mcs_code"] = res.Results[key]["Attributes"]["mcs_code"]; 
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