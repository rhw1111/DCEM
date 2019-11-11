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
    deliverystatusOptions: [],
    search: {
      key: "",
      deliverystatus: -1
    },
    deliverys: [],
    isending:""
  }
  ngOnInit() {
    debugger;
    this.model.deliverystatusOptions = this._optionset.Get("mcs_deliverystatus");
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
  }
}
