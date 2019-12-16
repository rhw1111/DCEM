import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonContent, NavParams, IonInfiniteScroll } from '@ionic/angular';
import { DCore_Page, DCore_Http, DCore_Valid } from '../../typescript/dcem.core'
import { SelectSysareaComponent } from '../select-sysarea/select-sysarea.component'
import { SelectDealerComponent } from "../../modal/select-dealer/select-dealer.component";
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-select-dealer-list',
  templateUrl: './select-dealer-list.component.html',
  styleUrls: ['./select-dealer-list.component.scss'],
})
export class SelectDealerListComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private _http: DCore_Http,
    private _page: DCore_Page,
    private _modalCtrl: ModalController) { }
  public model: any = {
    //国家默认中国
    countryId: "DD0D2AE0-E414-EA11-B394-86D989685D12",//UAT:"7af9ab98-7ef8-e811-a820-844a39d18a7a";
    //countryId:"7af9ab98-7ef8-e811-a820-844a39d18a7a","DD0D2AE0-E414-EA11-B394-86D989685D12"
    level: null,//行政区域级别 0:全球、1:国家、2:省、3:市、4:地区 
    info: {
      provincename: "省",
      cityname: "市",
    },
    paramets:
    {
      name: "",
      provinceid: "",
      cityid: "",
    },
    apiUrl: 'api/dealer/getlist',
    deliverystatusOptions: [],
    search: {
      pageindex: 1,
      pagesize: 10,
      searchkey: "",
      deliverystatus: "-1",
    },
    dealers: [],
    isending: false
  }
  ngOnInit() { 
    this.searchData(null);
  }
  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  //获取省组件
  async provinceModal() {
    this.model.level = 2;
    const modal = await this._modalCtrl.create({
      component: SelectSysareaComponent,
      componentProps: {
        'pid': this.model.countryId,
        'level': this.model.level,
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data != null && typeof data != undefined) {
      if (data != null && typeof data != undefined) {
        if (data.id != null) {
          //重置省市区
          if (this.model.paramets.provinceid != data.id) {
            this.model.info.cityname = "--";
            this.model.paramets.cityid = "";
            this.model.paramets.provinceid = data.id;
            this.model.info.provincename = data.name;
          }
        }
      }
    }
  }
  //获取市组件
  async cityModal() {
    this.model.level = 3;
    const modal = await this._modalCtrl.create({
      component: SelectSysareaComponent,
      componentProps: {
        'pid': this.model.paramets.provinceid,
        'level': this.model.level,
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data != null && typeof data != undefined) {
      if (data != null && typeof data != undefined) {
        if (data.id != null) {
          this.model.paramets.cityid = data.id;
          this.model.info.cityname = data.name;
          this.searchData(null);
        }
      }
    }
  }
  //触发省事件
  provinceOnClick() {
    this.provinceModal()
  }
  //触发市事件
  cityOnClick() {
    if (this.model.info.province != "") {
      this.cityModal()
    }
  }
  //搜索
  searchOnKeyup(event) {
    var keyCode = event ? event.keyCode : "";
    if (keyCode == 13) {
      this.model.dealers = [];
      this.searchData(null);
    }
  }

  //搜索体验店
  searchData(event) {
    this.model.dealers = [];
    this._page.loadingShow();
    this._http.post(
      this.model.apiUrl,
      this.model.paramets,
      (res: any) => {
        if (res !== null) {
          var data = res.dealers;
          for (var i in data) {
            var attr = data[i]["Attributes"];
            var obj = {};
            obj["id"] = data[i]["Id"];
            obj["name"] = attr["mcs_name"];
            obj["mcs_address"] = attr["mcs_address"];
            obj["mcs_shopaddress"] = attr["mcs_shopaddress"];
            obj["mcs_phone"] = attr["mcs_phone"];
            this.model.dealers.push(obj);
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
  //地图获取
  async mapModal() {
    const modal = await this._modalCtrl.create({
      component: SelectDealerComponent
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data != null && typeof data != undefined) {
      if (data != null && typeof data != undefined) {
        if (data.id != null) { 
          this.modalCtrl.getTop().then(() => {
            this.itemClick(data);
          });
        }
      }
    }
  }

  mapModalClick() {
    this.mapModal()
  }

  //保存所选项
  itemClick(item) {
    debugger;
    this._modalCtrl.dismiss({
      'id': item.id,
      'name': item.name,
      'shopaddress':item.mcs_shopaddress,
      'phone':item.mcs_phone
    });
  }
}
