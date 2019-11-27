import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_Valid } from '../../typescript/dcem.core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public valmsg: any = false;//验证消息显示开关
  public disstatus: any = 1; //界面切换开关
  public model: any = {
    phone: '',
    name: '',
    val1: '',
    val2: '',
    val3: '',
    val4: ''
  }
  constructor(
    private modalCtrl: ModalController,
    private _http: DCore_Http,
    private _page: DCore_Page,
    private _valid: DCore_Valid) { }
    
  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  onSendMsg() {
    if (this.model.phone == '') {
      this._page.alert("消息提示", "请填写手机号码！");
      return false;
    }
    this.disstatus = 2;
  }
  OnVlaCodeChange(value, code) {
    var inputval = '#inputcode' + code;
    if (code != 0) {
      $(inputval).focus();
    }
    else {
      this.onLogin();
      //验证码输入结束提交验证，如果当前账户已存在，直接登陆，如果不存在，弹出昵称输入界面
      this.disstatus = 3;
    }
  }
  //登陆
  onLogin() {

  }
  //注册
  onReg() {

  }
  ngOnInit() { }

}
