 
import { Component, OnInit, ViewChild  } from '@angular/core';
import { ModalController, IonContent, NavParams , IonInfiniteScroll} from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';
@Component({
  selector: 'app-select-vehiclecolor',
  templateUrl: './select-vehiclecolor.component.html',
  styleUrls: ['./select-vehiclecolor.component.scss'],
})
export class SelectVehiclecolorComponent implements OnInit {


  @ViewChild(IonContent, null) ionContent: IonContent;
  @ViewChild(IonInfiniteScroll, null) ionInfiniteScroll: IonInfiniteScroll;
  public selectItemValue: any = '';
  public seachkey: string = '';
  public dataList: any = [];

  public mod: any = {
    apiUrl: '',
    data: [],
    searchData: { 
      pageindex: 1,
      carmodel: '', //车型
      search: "",
      pagesize:20
    }
  };

  objectKeys = Object.keys;

  constructor(
    private modalCtrl: ModalController,
    private _http: DCore_Http,
    private _valid: DCore_Valid,
    private _page: DCore_Page
  ) {
    this.mod.apiUrl = "/Api/basedata/QueryVehicleColor"; 
    this.mod.searchData.search = "";
    this.mod.searchData.pageindex = 1;
    this.mod.searchData.pagesize = 20;
  }

  ngOnInit() {
    this.listOnBind();
  }
  doInfinite(event) {
    this.mod.searchData.pageindex++;
    this.listOnBind();
  }
  searchOnKeyup(event: any) { 
    var keyCode = event ? event.keyCode : "";
    if (keyCode == 13) {
      this.ionInfiniteScroll.disabled = false;
      this.listOnBind();
    }
  }

  listOnBind() {   
    this._http.get(
      this.mod.apiUrl,
      {
        params: {   
          carmodel: this.mod.searchData.carmodel,
          pageindex: this.mod.searchData.pageindex,
          seachkey: this.mod.searchData.search,
          pageSize:this.mod.searchData.pagesize
        }
      },
      (res: any) => {
        
        if (!this._valid.isNull(res.Results) !== null && res.Results.length > 0) {
          for (var key in res.Results) {
            var obj = {}; 
            obj["Id"] = res.Results[key]["Id"];
            obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
            obj["mcs_code"] = res.Results[key]["Attributes"]["mcs_code"]; 
            obj["vehicletypename"] = res.Results[key]["Attributes"]["vehicletypename"]==null?"":res.Results[key]["Attributes"]["vehicletypename"]; 
            this.mod.data.push(obj);
          }  
        } else  { 
          this.ionInfiniteScroll.disabled = true;
          this.ionInfiniteScroll.complete(); 
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
