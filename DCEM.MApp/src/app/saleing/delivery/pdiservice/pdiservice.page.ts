import { Component, OnInit } from '@angular/core';
import { DCore_Page, DCore_Http } from 'app/base/base.ser/Dcem.core';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-pdiservice',
  templateUrl: './pdiservice.page.html',
  styleUrls: ['./pdiservice.page.scss'],
})
export class PdiservicePage implements OnInit {

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private activeRoute: ActivatedRoute,
    private _userinfo: Storage_LoginInfo,
    public alertController: AlertController) {
  }
  public servicconsultantmodel = {
    apiUrl: '/api/delivery/getservicconsultant',
    servicconsultants: [], 
    data:
    {
      id: ""
    }
  }
  public model = {
    apiUrlDetail: '/api/delivery/get',
    id: "",
    status: -1,
    settles: 0,
    info: {
      vin: "",
      code: "",
      deliverystatus: "",
      ro: ""
    }

  }
  public pdiModel = {
    apiUrl: '/api/delivery/submitpdi',  
    data:
    {
      adviser: "",
      id: ""
    }
  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((data: Params) => {
      if (data['id'] != null && data['id'] != undefined) {
        this.servicconsultantmodel.data.id = data['id'];
        this.getservicconsultant();
        this.model.id = data['id'];
        this.pdiModel.data.id  =data['id'];
        this.pageOnBind(this.model.id);
      }
    });
  }
  async getservicconsultant() {
    this._http.postForToaken(
      this.servicconsultantmodel.apiUrl,
      this.servicconsultantmodel.data,
      (res: any) => { 
        if (res !== null) {
          var data = res.ServiceConsultants;
          for (var i in data) {
            var attr = data[i]["Attributes"];
            var obj = {}; 
            obj["name"] =  attr["fullname"];
            obj["value"] = attr["systemuserid"];
            this.servicconsultantmodel.servicconsultants.push(obj); 
          }
        }
      }
    );
  }

  //基础信息
  pageOnBind(id: any) {
    this._page.loadingShow();
    this._http.postForToaken(
      this.model.apiUrlDetail,
      { 'id': this.model.id },
      (res: any) => {
        if (res !== null) {
          var attr = res["Attributes"];
          this.model.info.vin = attr["_mcs_vin_value@OData.Community.Display.V1.FormattedValue"];
          this.model.info.code = attr["mcs_code"];
          this.model.info.deliverystatus = attr["mcs_deliverystatus@OData.Community.Display.V1.FormattedValue"];
          this.model.status = attr["mcs_deliverystatus"];
          this.model.settles = attr["mcs_settlestatus"];
          this.model.info.ro = attr["_mcs_vehorder_value@OData.Community.Display.V1.FormattedValue"];
        }
        else {
          this._page.alert("消息提示", "交车单基础信息加载异常");
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "交车单基础信息加载异常");
        this._page.loadingHide();
      }
    );

  }

  submitPdi() {
    if(this.pdiModel.data.adviser=="")
    {
      this._page.alert("消息提示", "请先选择服务顾问！");
      return;
    }
    this._page.loadingShow();
    this._http.postForToaken(
      this.pdiModel.apiUrl,
      this.pdiModel.data,
      (res: any) => {
        if (res !== null) {
          if (res.Result) {
            this._page.alert("消息提示", "pdi检测提交成功！",()=>{
              this._page.goto("/saleing/delivery/detail", { 'id': this.model.id }); 
            });
            
          } else {
            this._page.alert("消息提示", res.Description);
          }
        }
        else {
          this._page.alert("消息提示", "提交PDI任务操作失败");
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "提交PDI任务操作失败");
        this._page.loadingHide();
      }
    );
  }
}
