import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';
import { SelectAccountComponent } from "app/serving/serving.ser/components/select-account/select-account.component"
import { SelectCarmodelComponent } from "app/serving/serving.ser/components/select-carmodel/select-carmodel.component"
import { OptionSetService } from '../../../base/base.ser/optionset.service';
import { SelectSysareaComponent } from 'app/saleing/saleing.ser/components/select-sysarea/select-sysarea.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  model={
    postApiUrl:'/api/Installation/AddOrEditSurveyorder',
    detailApiUrl:'/api/Installation/GetSurveyorderDetail',
    postData:{
      mcs_surveyorderid:"",
      mcs_surveyordertype:"", //勘测单类型
      mcs_accountid:"",
      mcs_accountname:"",
      mcs_username:"",
      mcs_userphone:"",
      mcs_idcard:"",
      mcs_email:"",
      mcs_carmodelid: "",//购买车型id
      mcs_carmodelname: "",//购买车型name
      mcs_dealer:"",
      mcs_dealername:"",
      mcs_salesconsultant:"",  //销售顾问
      mcs_contactname:"",//联系人姓名
      mcs_contactphone:"",//联系电话
      mcs_contactemail:"",// 联系邮箱
      mcs_province:"",//省 
      mcs_provincename:"",//省 
      mcs_city:"",//市
      mcs_cityname:"",//市
      mcs_area:"",//区
      mcs_areaname:"",//区
      mcs_installationaddress:"",// 安装地址
      mcs_detailaddress:"",//详细地址
      mcs_chargingpilemodel:"", //充电桩型号
      mcs_communityname:"", //小区名称
      mcs_residentialnature:"", //住宅性质
      mcs_price:null, //套餐金额
      mcs_parkingspace:"", //车位情况
      mcs_remark:"", //备注
      mcs_residentialtype:"" //住宅类型
    },
    
    level: null,//行政区域级别 0:全球、1:国家、2:省、3:市、4:地区
    mcs_surveyordertypeOption: [],//勘测单类型选项集
    mcs_residentialtypeOption:[],//住宅类型选项集
    mcs_residentialnatureOption:[] //住宅性质选项集
  }

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private _valid: DCore_Valid,
    private _modalCtrl: ModalController,
    private activeRoute: ActivatedRoute,
    private _optionset: OptionSetService,
  ) { }

  ngOnInit() {

    this.model.mcs_surveyordertypeOption = this._optionset.Get("mcs_surveyordertype");
    this.model.mcs_residentialtypeOption = this._optionset.Get("mcs_residentialtype");
    this.model.mcs_residentialnatureOption= this._optionset.Get("mcs_residentialnature");

    this.activeRoute.queryParams.subscribe((params: Params) => {
      if (params['id'] != null && params['id'] != undefined) {
        this.model.postData.mcs_surveyorderid=params['id'];
        this.pageOnBind(params['id']);
      }
    });

  }


   //选择销售机会模式窗口
   async selectAccountModal() {

    const modal = await this._modalCtrl.create({
        component: SelectAccountComponent
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data != null && typeof data != undefined) {
        if (data != null && typeof data != undefined) {
            if (data.accountid != null) {
                this.model.postData.mcs_accountname = data.username;
                this.model.postData.mcs_accountid = data.accountid;
                this.model.postData.mcs_username = data.username;
                this.model.postData.mcs_userphone = data.mcs_mobilephone;
                this.model.postData.mcs_contactname = data.username;
                this.model.postData.mcs_contactphone = data.mcs_mobilephone;
            }
        }
    }

}

   //选择车型模式窗口
   async selectCarModal() {

    const modal = await this._modalCtrl.create({
        component: SelectCarmodelComponent
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data != null && typeof data != undefined) {
        if (data != null && typeof data != undefined) {
            if (data.carmodel != null) {
                this.model.postData.mcs_carmodelid = data.carmodel.model.mcs_carmodelid;
                this.model.postData.mcs_carmodelname = data.carmodel.model.mcs_name;              
            }
        }
    }

}


 //获取省组件
 async provinceModal() {
  this.model.level = 2;
  const modal = await this._modalCtrl.create({
      component: SelectSysareaComponent,
      componentProps: {
          'pid': '',
          'level': this.model.level,
      }
  });
  await modal.present();
  const { data } = await modal.onDidDismiss();
  if (data != null && typeof data != "undefined") {
      if (data != null && typeof data != "undefined") {
          console.log(data);
          if (data.id !=undefined) {
              this.model.postData.mcs_province = data.id;
              this.model.postData.mcs_provincename = data.name;
              //重置市区
              if (this.model.postData.mcs_province != data.id) {
                  //城市名称
                  this.model.postData.mcs_cityname = "--";
                  //城市ID
                  this.model.postData.mcs_city= "";

                  //区名称
                  this.model.postData.mcs_areaname = "--";
                  //区ID
                  this.model.postData.mcs_area = "";              
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
          'pid': this.model.postData.mcs_province ,
          'level': this.model.level,
      }
  });
  await modal.present();
  const { data } = await modal.onDidDismiss();
  if (data != null && typeof data != "undefined") {
      if (data != null && typeof data != "undefined") {
          console.log(data);
          if (data.id != undefined) {
            this.model.postData.mcs_city = data.id;
            this.model.postData.mcs_cityname = data.name;
              //重置区
              if (this.model.postData.mcs_city != data.id) {

                   //区名称
                   this.model.postData.mcs_areaname = "--";
                   //区ID
                   this.model.postData.mcs_area = "";     
              }
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
          'pid': this.model.postData.mcs_city,
          'level': this.model.level,
      }
  });
  await modal.present();
  const { data } = await modal.onDidDismiss();
  if (data != null && typeof data != "undefined") {
      if (data != null && typeof data != "undefined") {
          console.log(data);
          if (data.id !=undefined) {
            this.model.postData.mcs_area = data.id;
              this.model.postData.mcs_areaname = data.name;
          }
      }
  }
}

//加载勘测单信息
pageOnBind(id: any) {
  debugger;
  this._page.loadingShow();
  this._http.postForToaken(
    this.model.detailApiUrl,
    {
      Guid: id
    },
    (res: any) => {
      debugger;
      console.log(res);
      if (res != null && res.Attributes != null)
      this.model.postData.mcs_surveyordertype = String(res["Attributes"]["mcs_surveyordertype"]);
      this.model.postData.mcs_accountid = res["Attributes"]["_mcs_accountid_value"];
      this.model.postData.mcs_accountname = res["Attributes"]["_mcs_accountid_value@OData.Community.Display.V1.FormattedValue"];
      this.model.postData.mcs_username = res["Attributes"]["mcs_username"];
      this.model.postData.mcs_userphone = res["Attributes"]["mcs_userphone"];
      this.model.postData.mcs_idcard = res["Attributes"]["mcs_idcard"];
      this.model.postData.mcs_email = res["Attributes"]["mcs_email"];
      this.model.postData.mcs_carmodelid = res["Attributes"]["_mcs_carmodelid_value"];
      this.model.postData.mcs_carmodelname = res["Attributes"]["_mcs_carmodelid_value@OData.Community.Display.V1.FormattedValue"];
      this.model.postData.mcs_dealer = res["Attributes"][" _mcs_dealer_value"];
      this.model.postData.mcs_dealername = res["Attributes"]["_mcs_dealer_value@OData.Community.Display.V1.FormattedValue"];
      this.model.postData.mcs_salesconsultant = res["Attributes"]["mcs_salesconsultant"];
      this.model.postData.mcs_contactname = res["Attributes"]["mcs_contactname"];
      this.model.postData.mcs_contactphone = res["Attributes"]["mcs_contactphone"];
      this.model.postData.mcs_contactemail = res["Attributes"]["mcs_contactemail"];
      this.model.postData.mcs_province = res["Attributes"]["_mcs_province_value"];
      this.model.postData.mcs_provincename = res["Attributes"]["_mcs_province_value@OData.Community.Display.V1.FormattedValue"];
      this.model.postData.mcs_city = res["Attributes"]["_mcs_city_value"];
      this.model.postData.mcs_cityname = res["Attributes"]["_mcs_city_value@OData.Community.Display.V1.FormattedValue"];
      this.model.postData.mcs_area = res["Attributes"]["_mcs_area_value"];
      this.model.postData.mcs_areaname = res["Attributes"]["_mcs_area_value@OData.Community.Display.V1.FormattedValue"];
      this.model.postData.mcs_installationaddress = res["Attributes"]["mcs_installationaddress"];
      this.model.postData.mcs_detailaddress = res["Attributes"]["mcs_detailaddress"];
      this.model.postData.mcs_chargingpilemodel = res["Attributes"]["mcs_chargingpilemodel"];
      this.model.postData.mcs_communityname = res["Attributes"]["mcs_communityname"];
      this.model.postData.mcs_residentialnature = String(res["Attributes"]["mcs_residentialnature"]);
      this.model.postData.mcs_parkingspace = String(res["Attributes"]["mcs_parkingspace"]);
      this.model.postData. mcs_remark = res["Attributes"]["mcs_remark"];
      this.model.postData.mcs_residentialtype = String(res["Attributes"]["mcs_residentialtype"]);

      this._page.loadingHide();
    },
    (err: any) => {
      this._page.alert("消息提示", "数据加载异常");
      this._page.loadingHide();
    }
  );
}


//保存
SureClick(){
  debugger;
  this._page.loadingShow();
  this._http.postForToaken(
      this.model.postApiUrl, this.model.postData,
      (res: any) => {
          debugger;
          this._page.loadingHide();
          if (res.Result == true) {              
              console.log(res);                         
              this._page.goto("/serving/surveyorder/success");
          }
          else {
              this._page.alert("消息提示", res.Description);
          }
      },
      (err: any) => {
          this._page.loadingHide();
          this._page.alert("消息提示", "操作失败");
      }
  );

}

}
