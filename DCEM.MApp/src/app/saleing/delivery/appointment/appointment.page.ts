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
    public alertController: AlertController) {
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
  ngOnInit() {
    this.activeRoute.queryParams.subscribe((data: Params) => {
      if (data['id'] != null && data['id'] != undefined) { 
        this.appointmentmodel.data.id = data['id']; 
      }
    });
  }
  presentAlertAppointment()
  {
    this._page.loadingShow();
    this._http.post(
      this.appointmentmodel.apiUrl,
      this.appointmentmodel.data,
      (res: any) => {
        if (res !== null) {
          debugger;
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
