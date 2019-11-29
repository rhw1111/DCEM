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
  public tab: any = 'account';
  public title: any = '登陆';
  public valmsg: any = false;//验证消息显示开关
  public disstatus: any = 1; //界面切换开关 1 登陆输入；2登陆验证码输入；5 注册验证码输入；3 注册；4个人输入页面 
  public mod: any = {
    loginurl: '/api/user/loginaccount',//账号登陆url
    loginphoneurl: '/api/user/loginphone',//手机号码登陆url
    regurl: '/api/user/adduser',//注册url 
    sendmsgurl: '/api/user/sendmsg',//短信发送url 
    val1: '',
    val2: '',
    val3: '',
    val4: '',
    model: {
      account: '',//账号
      pwd: '',//密码 
      name: '',//昵称
      sex: '',
      quest1: '',
      quest2: '',
      quest3: '',
      quest1value: '',
      quest2value: '',
      quest3value: ''
    }
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
  //短信发送
  onSendMsg(status) {
    if (this.mod.model.account == '') {
      this._page.alert("消息提示", "请填写手机号码！");
      return false;
    } var postData = {
      phone: this.mod.model.account
    };
    this._http.get(
      this.mod.sendmsgurl,
      postData,
      (res: any) => {
        if (res.result == true) {
          this.disstatus = status;
        }
      },
      (err: any) => {
        this._page.alert("消息提示", "操作失败");
      }
    );
  }
  //手机短信验证接口
  OnVlaCodeChange(value, code) {
    var inputval = '#inputcode' + code;
    if (code != 0) {
      $(inputval).focus();
    }
    else { 
      this._page.loadingShow();
      var valcode = this.mod.val1 + this.mod.val2 + this.mod.val3 + this.mod.val4;
      var postData = {
        account: this.mod.model.account,
        valcode: valcode,
        type: this.disstatus
      };
      this._http.post(
        this.mod.loginphoneurl,
        postData,
        (res: any) => {
          this._page.loadingHide();
          if (res.result == true) {
            //验证码输入结束提交验证，如果当前账户已存在，直接登陆，如果不存在，弹出个人信息输入界面
            if (this.disstatus == 5)
              this.disstatus = 4;
          }
          else {
            this._page.alert("消息提示", "登陆失败，验证码无效");
          }
        },
        (err: any) => {
          this._page.loadingHide();
          this._page.alert("消息提示", "操作失败");
        }
      );
    }
  }
  //登陆
  onLogin() {
    debugger;
    this._page.loadingShow();
      var postData = {
      account: this.mod.model.account,
      pwd: this.mod.model.pwd,
      keytype:1,
      status:2,
      certificationtype:1,
      valcode:"",
      type:"2"
    };
    this._http.post(
      this.mod.loginurl,
      postData,
      (res: any) => {
        this._page.loadingHide();
        if (res.result == true) {
          this.modalCtrl.dismiss({
            'dismissed': true
          });
        }
        else {
          this._page.alert("消息提示", "登陆失败,账户密码错误！");
        }
      },
      (err: any) => {
        this._page.loadingHide();
        this._page.alert("消息提示", "操作失败");
      }
    );
  }
  onReg() {
    this.title = '用户注册';
    this.disstatus = 3;
  }
  //注册
  onRegPost() {
    this._page.loadingShow();
    var valcode = this.mod.val1 + this.mod.val2 + this.mod.val3 + this.mod.val4;
    var postData = {
      account: this.mod.model.account,
      valcode: valcode,
      name: this.mod.model.name
    };
    this._http.post(
      this.mod.regurl,
      postData,
      (res: any) => {
        this._page.loadingHide();
        if (res.result == true) {
          this.modalCtrl.dismiss({
            'dismissed': true
          });
        }
        else {
          this._page.alert("消息提示", "注册失败，验证码无效");
        }
      },
      (err: any) => {
        this._page.loadingHide();
        this._page.alert("消息提示", "操作失败");
      }
    );
  }
  ngOnInit() { }

}
