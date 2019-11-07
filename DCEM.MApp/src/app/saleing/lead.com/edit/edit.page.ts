import { Component, OnInit } from '@angular/core';
import { DCore_Page, DCore_Http } from 'app/base/base.ser/Dcem.core';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { ModalController, NavController } from '@ionic/angular';
import { SelectSysareaComponent } from 'app/saleing/saleing.ser/components/select-sysarea/select-sysarea.component'; 
import { OptionSetService } from '../../saleing.ser/optionset.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  constructor( 
    public _modalCtrl: ModalController,
   private _http: DCore_Http,
     private _page: DCore_Page,
     private _userinfo:Storage_LoginInfo,
     private _optionset:OptionSetService,
    ) { 
  }

  public model:any={
    apiUrlDetail: '/api/Originalclue/get',  
    //国家默认中国
    countryId:"7E83801C-795B-E911-A824-B53F780FAC1C",
    level: null,//行政区域级别 0:全球、1:国家、2:省、3:市、4:地区
    scoreoption:[],
    genderoption:[],
    leadoriginoption:[],
    info:{ 
        username:"",
        mobile: "",
        clues: "1", 
        gender:"1",
        mail:"",
        province: "",
        provincename:"",
        city: "",
        cityname: "",
        area:"",
        areaname:"",
        score:"1",
        describe:""
    }
  }
  ngOnInit() {   
    this.model.scoreoption=this._optionset.Get("lead_mcs_accountpoints");
    this.model.genderoption=this._optionset.Get("lead_mcs_gender");
    this.model.leadoriginoption=this._optionset.Get("lead_mcs_leadorigin");
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
                this.model.info.provincename= data.name;
            }
            //重置省市区
            if (this.model.info.province!=data.id) {
                //城市名称
                this.model.info.cityname= "--";
                //城市ID
                this.model.info.city = "";
                //区名称
                this.model.info.areaname= "--";
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
                this.model.info.city= data.id;
                this.model.info.cityname= data.name;
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
                this.model.info.areaname= data.name;
            }
        }
    }
}

//触发省事件
provinceOnClick()
{
    this.provinceModal()
}

//触发市事件
cityOnClick() {
  if(this.model.info.province!="")
  {
    this.cityModal()
  }
}

//触发区事件
districtOnClick() {
  if(this.model.info.city!="")
  {
    this.districtModal()
  }
}

//保存
saveOnClick() {

}
}
