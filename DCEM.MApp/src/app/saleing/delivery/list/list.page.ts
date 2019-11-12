import { Component, OnInit } from '@angular/core';
import { DCore_Page, DCore_Http, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { ModalController, NavController } from '@ionic/angular';
import { SelectSysareaComponent } from 'app/saleing/saleing.ser/components/select-sysarea/select-sysarea.component';
import { OptionSetService } from '../../saleing.ser/optionset.service';
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
    apiUrl: "/api/delivery/getlist",
    deliverystatusOptions: [],
    search: {
      pageindex: 1,
      pagesize: 10,
      searchkey: "",
      deliverystatus: -1,
      userId: this._userinfo.GetSystemUserId(),
      dealerid: "0db19a77-af23-e911-a81e-9a16184af7bf",//this._userinfo.GetDealerid()
    },
    deliverys: [],
    isending: ""
  }
  ngOnInit() {
    this.model.deliverystatusOptions = this._optionset.Get("mcs_deliverystatus");
    this.listOnBind(null);
  }
  //加载下一页
  doLoading(event) {

    this.listOnBind(event);
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
    this._http.post(
      this.model.apiUrl,
      this.model.search,
      (res: any) => {
        if (res.Results !== null) {
          var data = res.originalclues;
          for (var i in data) {
            var attr = data[i]["Attributes"];
            var obj = {};
          }
          event ? event.target.complete() : '';
          if (data.length < this.model.searchData.pagesize) {
            event ? event.target.disabled = true : "";
            this.model.isending = true;
          }
          this._page.loadingHide();
        }
        else {
          this._page.alert("消息提示", "原始线索数据加载异常");
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "原始线索数据加载异常");
        this._page.loadingHide();
      }
    );
  }
}
