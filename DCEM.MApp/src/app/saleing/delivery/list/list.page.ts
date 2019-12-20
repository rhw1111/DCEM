import { Component, OnInit } from '@angular/core';
import { DCore_Page, DCore_Http, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { ModalController, NavController } from '@ionic/angular';
import { SelectSysareaComponent } from 'app/saleing/saleing.ser/components/select-sysarea/select-sysarea.component';
import { OptionSetService } from '../../../base/base.ser/optionset.service';
import { MenuController } from '@ionic/angular';
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
    private menuController: MenuController,
    private _optionset: OptionSetService
  ) { }

  public model: any = {
    apiUrl: "/api/delivery/getlist",
    deliverystatusOptions: [],
    search: {
      pageindex: 1,
      pagesize: 10,
      searchkey: "",
      deliverystatus: "-1",
      userId: this._userinfo.GetSystemUserId(),
      dealerid: this._userinfo.GetDealerid()
    },
    deliverys: [],
    isending: false
  }
  ngOnInit() {
    this.model.deliverystatusOptions = this._optionset.Get("mcs_deliverystatus");
  }

  //每次页面加载
  ionViewWillEnter() {
    this.menuController.enable(false);
    this.model.deliverys = [];
    this.model.search.pageindex = 1;
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
    this.model.deliverys = [];
    this.listOnBind(null);
  }
  //搜索
  searchOnKeyup(event) {
    var keyCode = event ? event.keyCode : "";
    if (keyCode == 13) {
      this.model.deliverys = [];
      this.listOnBind(null);
    }
  }
  listOnBind(event) {
    this._page.loadingShow();
    this._http.postForToaken(
      this.model.apiUrl,
      this.model.search,
      (res: any) => {
        if (res.Results !== null) {
          var data = res.Deliverys;
          for (var i in data) {
            var attr = data[i]["Attributes"];
            var obj = {};
            obj["id"] = data[i]["Id"];
            obj["vin"] = attr["_mcs_vin_value@OData.Community.Display.V1.FormattedValue"];
            obj["code"] = attr["mcs_code"];
            obj["ro"] = attr["_mcs_vehorder_value@OData.Community.Display.V1.FormattedValue"];
            obj["createdon"] = attr["createdon@OData.Community.Display.V1.FormattedValue"];
            obj["deliverystatus"] = this._optionset.GetOptionSetNameByValue("mcs_deliverystatus", attr["mcs_deliverystatus"]);
            this.model.deliverys.push(obj);
          }
          event ? event.target.complete() : '';
          if (data.length < this.model.search.pagesize) {
            event ? event.target.disabled = true : "";
            if (this.model.search.pageindex != 1) {
              this.model.isending = true;
            }
          }
          this._page.loadingHide();
        }
        else {
          this._page.alert("消息提示", "交车单列表数据加载异常");
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "交车单列表数据加载异常");
        this._page.loadingHide();
      }
    );
  }
}
