import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonContent, NavParams, IonInfiniteScroll } from '@ionic/angular';
import { DCore_Page, DCore_Http, DCore_Valid } from '../../../../component/typescript/dcem.core';
import { Storage_LoginInfo } from '../../../../component/typescript/logininfo.storage';
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(private modalCtrl: ModalController,
    private _http: DCore_Http,
    private _page: DCore_Page,
    private _logininfo: Storage_LoginInfo,
  ) { }

  ngOnInit() {
    this.searchData(null);
  }
  public model: any = {
    apiUrl: 'api/salesorder/getlist',
    search: {
      pageindex: 1,
      pagesize: 10,
      //UserId:  "0010D704-7723-4B75-B334-4A9620769F68",//this._logininfo.GetSystemUserId()}, 
      UserId: this._logininfo.GetSystemUserId(),
    },
    orders: []
  }
  //搜索我的整车订单
  searchData(event) {
    this.model.orders = [];
    this._page.loadingShow();
    this._http.post(
      this.model.apiUrl,
      this.model.search,
      (res: any) => {
        if (res !== null) {
          var data = res.orders;
          for (var i in data) {
            var attr = data[i]["Attributes"];
            var obj = {};
            obj["orderid"] = attr["mcs_tc_productorderitemid"];
            obj["orderno"] = attr["_mcs_order_value@OData.Community.Display.V1.FormattedValue"];
            obj["mcs_unitprice"] = attr["mcs_unitprice"];
            obj["name"] = attr["_mcs_product_value@OData.Community.Display.V1.FormattedValue"];
            obj["paystatus"] = attr["aa.mcs_paystatus@OData.Community.Display.V1.FormattedValue"];
            this.model.orders.push(obj);
          }
        }
        else {
          this._page.alert("消息提示", "门店信息加载异常");
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "门店信息加载异常");
        this._page.loadingHide();
      }
    );

  }
}
