import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';
import { SelectSurveyorderComponent } from "app/serving/serving.ser/components/select-surveyorder/select-surveyorder.component"
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
      mcs_installationorderid:"",
      mcs_surveyorderid:"",
      mcs_surveyordername:"",
      mcs_username:"",
      mcs_userphone:"",
      mcs_email:"",
      mcs_carmodelid: "",//购买车型id
      mcs_carmodelname: "",//购买车型name
      mcs_dealerid:"",
      mcs_dealername:"",
      mcs_salesconsultant:"",  //销售顾问
      mcs_salesconsultantname:"",  //销售顾问名称
      mcs_province:"",//省 
      mcs_provincename:"",//省 
      mcs_city:"",//市
      mcs_cityname:"",//市
      mcs_area:"",//区
      mcs_areaname:"",//区
      mcs_installationaddress:"",// 安装地址
      mcs_detailaddress:"",//详细地址
      mcs_isneedpillar:"",//是否需要立柱
      mcs_chargingpilemodel:"", //充电桩型号
      mcs_chargingpilemodelname:"", //充电桩型号名称
      mcs_price:null, //套餐金额
      mcs_communityname:"", //小区名称

      mcs_propertyattitude:"", //物业态度
      mcs_salesorder:"", //销售单号
      mcs_salesordername:"",//销售单号编码
      mcs_vin:"", 
      mcs_powertypeid:"", //动力类型
      mcs_powertypename:"", //动力类型名称
      mcs_settlementprice:"", //结算价格
      mcs_installationproviderid:"", //安装服务商
      mcs_installationprovidername:"", //安装服务商名称
      mcs_contact:"",//安装服务商联系人
      mcs_installationproviderphone:"",//安装服务电话
      mcs_appointmenttime:"",//安装服务时间
      mcs_installationengineerid:"",//安装交付工程师
      mcs_installationengineername:"",//安装交付工程师名称
      mcs_installationengineerphone:"" //安装交付工程师电话
    },
    
  }

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private _valid: DCore_Valid,
    private _modalCtrl: ModalController,
    private activeRoute: ActivatedRoute,

  ) { }

  ngOnInit() {

    this.activeRoute.queryParams.subscribe((params: Params) => {
      if (params['id'] != null && params['id'] != undefined) {
        this.model.postData.mcs_installationorderid=params['id'];
        this.pageOnBind(params['id']);
      }
    });

  }


   //选择勘测单模式窗口
   async selectSurveyorderModal() {
  debugger;
    const modal = await this._modalCtrl.create({
        component: SelectSurveyorderComponent
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data != null && typeof data != undefined) {
        if (data != null && typeof data != undefined) {
            if (data.mcs_surveyorderid != null) {
                this.model.postData.mcs_surveyordername = data.mcs_name;
                this.model.postData.mcs_surveyorderid = data.mcs_surveyorderid;
                this.model.postData.mcs_username = data.username;
                this.model.postData.mcs_userphone = data.mcs_mobilephone;
                this.model.postData.mcs_email = data.mcs_email;             
            }
        }
    }

}

//加载安装单信息
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
      this.model.postData.mcs_surveyorderid = res["Attributes"]["_mcs_surveyorderid_value"];
      this.model.postData.mcs_surveyordername = res["Attributes"]["_mcs_surveyorderid_value@OData.Community.Display.V1.FormattedValue"];
      this.model.postData.mcs_username = res["Attributes"]["mcs_username"];
      this.model.postData.mcs_userphone = res["Attributes"]["mcs_userphone"];
      this.model.postData.mcs_email = res["Attributes"]["mcs_email"];
      this.model.postData.mcs_carmodelid = res["Attributes"]["_mcs_carmodelid_value"];
      this.model.postData.mcs_carmodelname = res["Attributes"]["_mcs_carmodelid_value@OData.Community.Display.V1.FormattedValue"];
      this.model.postData.mcs_dealerid = res["Attributes"][" _mcs_dealerid_value"];
      this.model.postData.mcs_dealername = res["Attributes"]["_mcs_dealerid_value@OData.Community.Display.V1.FormattedValue"];
      this.model.postData.mcs_salesconsultant = res["Attributes"]["_mcs_salesconsultant_value"];
      this.model.postData.mcs_salesconsultantname =res["Attributes"]["_mcs_salesconsultant_value@OData.Community.Display.V1.FormattedValue"];
      this.model.postData.mcs_province = res["Attributes"]["_mcs_province_value"];
      this.model.postData.mcs_provincename = res["Attributes"]["_mcs_province_value@OData.Community.Display.V1.FormattedValue"];
      this.model.postData.mcs_city = res["Attributes"]["_mcs_city_value"];
      this.model.postData.mcs_cityname = res["Attributes"]["_mcs_city_value@OData.Community.Display.V1.FormattedValue"];
      this.model.postData.mcs_area = res["Attributes"]["_mcs_area_value"];
      this.model.postData.mcs_areaname = res["Attributes"]["_mcs_area_value@OData.Community.Display.V1.FormattedValue"];
      this.model.postData.mcs_installationaddress = res["Attributes"]["mcs_installationaddress"];
      this.model.postData.mcs_detailaddress = res["Attributes"]["mcs_detailaddress"];
      this.model.postData.mcs_chargingpilemodel = res["Attributes"]["_mcs_chargingpilemodel_value"];
      this.model.postData.mcs_chargingpilemodelname =  res["Attributes"]["_mcs_chargingpilemodel_value@OData.Community.Display.V1.FormattedValue"];
      this.model.postData.mcs_communityname = res["Attributes"]["mcs_communityname"];
      this.model.postData.mcs_powertypeid = res["Attributes"]["_mcs_powertypeid_value"];
      this.model.postData.mcs_powertypename = res["Attributes"]["_mcs_powertypeid_value@OData.Community.Display.V1.FormattedValue"];
      this.model.postData. mcs_settlementprice = res["Attributes"]["mcs_settlementprice"];
      this.model.postData.mcs_installationproviderid = res["Attributes"]["_mcs_installationproviderid_value"];
      this.model.postData.mcs_installationprovidername = res["Attributes"]["_mcs_installationproviderid_value@OData.Community.Display.V1.FormattedValue"];
      this.model.postData. mcs_contact = res["Attributes"]["mcs_contact"];
      this.model.postData. mcs_installationproviderphone = res["Attributes"]["mcs_installationproviderphone"];
      this.model.postData. mcs_appointmenttime = res["Attributes"]["mcs_appointmenttime"];
      this.model.postData.mcs_installationengineerid = res["Attributes"]["_mcs_installationengineerid_value"];
      this.model.postData.mcs_installationengineername = res["Attributes"]["_mcs_installationengineerid_value@OData.Community.Display.V1.FormattedValue"];
      this.model.postData. mcs_installationengineerphone = res["Attributes"]["mcs_installationengineerphone"];

      this.model.postData.mcs_salesorder = res["Attributes"]["_mcs_salesorder_value"];
      this.model.postData.mcs_salesordername = res["Attributes"]["_mcs_salesorder_value@OData.Community.Display.V1.FormattedValue"];
      this.model.postData.mcs_propertyattitude = res["Attributes"]["mcs_propertyattitude"];
      this.model.postData.mcs_vin = res["Attributes"]["mcs_vin"];
      
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
              this._page.goto("/serving/installationorder/success");
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
