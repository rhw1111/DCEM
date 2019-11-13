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
    apiUrl: '/api/delivery/servicconsultant',
    servicconsultants:[],
    adviser:"",
    data:
    {
      id: ""
    }
  }
  ngOnInit() {
    this.activeRoute.queryParams.subscribe((data: Params) => {
      if (data['id'] != null && data['id'] != undefined) { 
        this.servicconsultantmodel.data.id = data['id']; 
        this.getservicconsultant();
      }
    });
  }
   async getservicconsultant()
  { 
    this._http.post(
      this.servicconsultantmodel.apiUrl,
      this.servicconsultantmodel.data,
      (res: any) => {
        if (res !== null) {
          debugger;
        } 
      }
    );
  }
  presentAlertservicconsultant()
  {
    this._page.loadingShow();
    this._http.post(
      this.servicconsultantmodel.apiUrl,
      this.servicconsultantmodel.data,
      (res: any) => {
        if (res !== null) {
          debugger;
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
