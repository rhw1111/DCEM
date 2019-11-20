import { Component, OnInit } from '@angular/core';
import { DCore_Page, DCore_Http } from 'app/base/base.ser/Dcem.core';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private _http: DCore_Http,
    private _page: DCore_Page,
    private activeRoute: ActivatedRoute,
    private _userinfo: Storage_LoginInfo,
    public alertController: AlertController) { }

    public model = {
    headimg: "assets/img/userhead.png",
    apiUrlDetail: '/api/basedata/QuerySystemUser',
    fullname:"",
    telephone:"",
    mobilephone:"",
    internalemailaddress:"",
    staffid:"",
    post:""
  }

  ngOnInit() {
    this.pageOnBind();
  }
  //获取交车单基础信息
  pageOnBind() {
    this._page.loadingShow();
    this._http.getForToaken(
      this.model.apiUrlDetail,
      {"systemuserid":this._userinfo.GetSystemUserId()},
      (res: any) => {
        if (res !== null) {
          var attr = res["Attributes"]; 
          this.model.fullname=attr["fullname"];
          this.model.telephone=attr["address1_telephone1"];
          this.model.mobilephone=attr["mobilephone"];
          this.model.internalemailaddress=attr["internalemailaddress"];
          this.model.staffid=attr["mcs_staffid"];
          this.model.post=attr["mcs_post"];
        }
        else {
          this._page.alert("消息提示", "用户信息详情加载异常");
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "用户信息详情加载异常");
        this._page.loadingHide();
      }
    );

  }
}
