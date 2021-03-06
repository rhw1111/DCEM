import { Component, OnInit } from '@angular/core';
import { DCore_Page, DCore_Http, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { ModalController, NavController } from '@ionic/angular';
import { OptionSetService } from '../../../base/base.ser/optionset.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {


  constructor(
    public _modalCtrl: ModalController,
    private _http: DCore_Http,
    private _page: DCore_Page,
    private _valid: DCore_Valid,
    private _userinfo: Storage_LoginInfo,
    private _optionset: OptionSetService
  ) { }

  public model: any = {
    apiUrl: "/api/vehnetwork/getlist",
    statusOptions: [],
    search: {
      pageindex: 1,
      pagesize: 10,
      searchkey: "",
      status: "",
      userId: this._userinfo.GetSystemUserId(),
      dealerid: this._userinfo.GetDealerid()//"D2B7AE95-72F4-E911-A821-F2106C4094A1",
    },
    vehnetwork: [],
    isending: false
  }
  ngOnInit() {
    this.model.statusOptions = this._optionset.Get("mcs_vehnetworkstatus");
    this.listOnBind(null);
  }
  //加载下一页
  doLoading(event) {
    this.model.search.pageindex++;
    this.model.isending = false;
    this.listOnBind(event);
  }
  //搜索
  searchOnCharge() {
    this.model.vehnetwork = [];
    this.listOnBind(null);
  }
  //搜索
  searchOnKeyup(event) {
    var keyCode = event ? event.keyCode : "";
    if (keyCode == 13) {
      this.model.vehnetwork = [];
      this.listOnBind(null);
    }
  }
  listOnBind(event) {
    this._page.loadingShow();
    this._http.post(
      this.model.apiUrl,
      this.model.search,
      (res: any) => {
        if (res.Results !== null) {
          var data = res.Results;
          for (var i in data) {
            var attr = data[i]["Attributes"];
            var obj = {};
            obj["id"] = data[i]["Id"];
            obj["name"] = attr["mcs_invoicename"];
            obj["code"] = attr["mcs_code"];
            obj["vin"] = attr["_mcs_vin_value@OData.Community.Display.V1.FormattedValue"];
            obj["createdon"] = attr["createdon"];
            obj["status"] = this._optionset.GetOptionSetNameByValue("mcs_vehnetworkstatus", attr["mcs_tservicestatus"]);
            this.model.vehnetwork.push(obj);
          }
          event ? event.target.complete() : '';
          if (data.length < this.model.search.pagesize) {
            event ? event.target.disabled = true : "";
            if (this.model.search.pageindex != 1)
              this.model.isending = true;
          }
          this._page.loadingHide();
        }
        else {
          this._page.alert("消息提示", "开票数据加载异常");
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "开票数据加载异常");
        this._page.loadingHide();
      }
    );
  }

}
