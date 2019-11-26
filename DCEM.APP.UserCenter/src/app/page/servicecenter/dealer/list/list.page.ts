import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { DCore_Page, DCore_Http, DCore_Valid } from '../../../../component/typescript/dcem.core'
import { SelectSysareaComponent } from '../../../../component/modal/select-sysarea/select-sysarea.component'
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private _http: DCore_Http,
    private _page: DCore_Page,
    private _modalCtrl: ModalController,) { }
  public model: any = {
    apiUrl: '/api/Originalclue/create',
    //国家默认中国
    countryId: "7E83801C-795B-E911-A824-B53F780FAC1C",
    level: null,//行政区域级别 0:全球、1:国家、2:省、3:市、4:地区 
    info: {
      province: "",
      provincename: "",
      city: "",
      cityname: "",
      area: "",
      areaname: "",
    }
  }
  ngOnInit() {
  }
  //获取省组件
  async provinceModal() {
    this.model.countryId = "7E83801C-795B-E911-A824-B53F780FAC1C";
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
    if (data != null && typeof data != "undefined") {
      if (data != null && typeof data != "undefined") {
        console.log(data);
        if (data.id != "undefined") {
          this.model.info.province = data.id;
          this.model.info.provincename = data.name;
        }
        //重置省市区
        if (this.model.info.province != data.id) {
          //城市名称
          this.model.info.cityname = "--";
          //城市ID
          this.model.info.city = "";
          //区名称
          this.model.info.areaname = "--";
          //区ID
          this.model.info.area = "";
          this.model.province = data.id;
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
        'pid': this.model.info.province,
        'level': this.model.level,
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data != null && typeof data != "undefined") {
      if (data != null && typeof data != "undefined") {
        console.log(data);
        if (data.id != "undefined") {
          this.model.info.city = data.id;
          this.model.info.cityname = data.name;
        }
        //重置省市区
        if (this.model.cityId != data.id) {
          //区名称
          this.model.info.areaname = "--";
          //区ID
          this.model.info.area = "";
          this.model.info.city = data.id;
        }
      }
    }
  }

  //获取区组件
  async districtModal() {
    this.model.level = 4;
    const modal = await this._modalCtrl.create({
      component: SelectSysareaComponent,
      componentProps: {
        'pid': this.model.info.city,
        'level': this.model.level,
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data != null && typeof data != "undefined") {
      if (data != null && typeof data != "undefined") {
        console.log(data);
        if (data.id != "undefined") {
          this.model.info.area = data.id;
          this.model.info.areaname = data.name;
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

  //触发区事件
  districtOnClick() {
      if (this.model.info.city != "") {
          this.districtModal()
      }
  }
}
