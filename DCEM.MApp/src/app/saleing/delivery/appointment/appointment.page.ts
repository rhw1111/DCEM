import { Component, OnInit } from '@angular/core'; 
import { DCore_Page, DCore_Http } from 'app/base/base.ser/Dcem.core';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private activeRoute: ActivatedRoute,
    private _userinfo: Storage_LoginInfo,
    private alertController: AlertController) {
  }
  public appointmentmodel = {
    apiUrl: '/api/delivery/appointment',
    data:
    {
      id: "",
      appointmenton: "",
      customerrequest: ""
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
  ngOnInit() {
    this.activeRoute.queryParams.subscribe((data: Params) => {
      if (data['id'] != null && data['id'] != undefined) {
        this.appointmentmodel.data.id = data['id'];
        this.model.id = data['id'];
        this.pageOnBind(this.model.id);
      }
    });
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
  presentAlertAppointment() { 
    this._page.loadingShow();
    this._http.postForToaken(
      this.appointmentmodel.apiUrl,
      this.appointmentmodel.data,
      (res: any) => {
        if (res !== null) {
          if (res.Result) {
            this._page.alert("消息提示", "预约交车成功！",()=>{
              this._page.goto("/saleing/delivery/detail", { 'id': this.model.id }); 
            }); 
          } else {
            this._page.alert("消息提示", res.Description);
          }
        }
        else {
          this._page.alert("消息提示", "预约交车操作失败");
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "预约交车操作失败");
        this._page.loadingHide();
      }
    );
  }
}
