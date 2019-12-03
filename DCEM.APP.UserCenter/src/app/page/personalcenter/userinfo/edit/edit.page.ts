import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DCore_Http, DCore_Page } from '../../../../component/typescript/dcem.core';
import { Storage_LoginInfo } from "../../../../component/typescript/logininfo.storage";
import { OptionSetService } from "../../../../component/typescript/optionset.service";
import { SelectSysareaComponent } from '../../../../component/modal/select-sysarea/select-sysarea.component'
import { parse } from 'url';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  constructor(private _http: DCore_Http,
    private _page: DCore_Page,
    private _modalCtrl: ModalController,
    private _optionset: OptionSetService,
    private _logininfo: Storage_LoginInfo) { }

  ngOnInit() {
    this.model.genderoption = this._optionset.Get("lead_mcs_gender");
    this.pageOnBind();
  }
  public model = {
    apiUrlDetail: 'api/user/getuserdetail',
    apiUrl: "api/user/updateuser",
    id: "",
    countryId: "DD0D2AE0-E414-EA11-B394-86D989685D12",//UAT:"7E83801C-795B-E911-A824-B53F780FAC1C",
    level: 2,//行政区域级别 0:全球、1:国家、2:省、3:市、4:地区
    genderoption: [],
    info: {
      username: "",
      mobile: "",
      clues: "",
      gender: "3",
      mail: "",
      province: "",
      provincename: "",
      city: "",
      cityname: "",
      area: "",
      areaname: "",
      describe: ""
    },
    params: {
      userid: "804BD218-C35B-4300-AEC8-985DE405CBC6",//this._logininfo.GetSystemUserId(),
      gender: 1,
      mcs_email: "",
      name: ""
    }
  };

  pageOnBind() {
    this._page.loadingShow();
    this._http.postForToaken(
      this.model.apiUrlDetail,
      { 'id': "804BD218-C35B-4300-AEC8-985DE405CBC6" },//this._logininfo.GetSystemUserId()}, 
      (res: any) => {
        if (res !== null) {
          var attr = res["Attributes"];
          this.model.info.gender = (attr["mcs_gender"]).toString();
          this.model.info.mobile = attr["mcs_phone"];
          this.model.info.mail = attr["mcs_email"];
          this.model.info.username = attr["mcs_nickname"];
        }
        else {
          this._page.alert("消息提示", "原始线索编辑信息加载异常");
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "原始线索编辑信息加载异常");
        this._page.loadingHide();
      }
    );

  }
  saveOnClick() {
    if (this.model.info.username == "") {
      this._page.alert("消息提示", "请输入用户姓名");
      return;
    }
    this.model.params.gender = parseInt(this.model.info.gender);
    this.model.params.mcs_email = this.model.info.mail;
    this.model.params.name = this.model.info.username;
    this._page.loadingShow();
    this._http.postForToaken(
      this.model.apiUrl,
      this.model.params,
      (res: any) => {
        if (res !== null && res.Result == true) {
          this._page.alert("消息提示", "更新用户信息成功");
          this._page.goto("/tabs/personalcenter");
        }
        else {
          this._page.alert("消息提示", "更新用户信息失败");
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "更新用户信息失败");
        this._page.loadingHide();
      }
    );
  }

  //获取省组件
  async provinceModal() {
    this.model.level=2;
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
          this.model.info.province = data.id;
          this.model.info.provincename = data.name;
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
        //重置省市区
        if (this.model.info.city != data.id) {
          //区名称
          this.model.info.areaname = "--";
          //区ID
          this.model.info.area = "";
          this.model.info.city = data.id;
          this.model.info.cityname = data.name;
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
