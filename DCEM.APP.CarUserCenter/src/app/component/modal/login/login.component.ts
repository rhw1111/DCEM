import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from '../../typescript/dcem.core';
import { Router } from '@angular/router';
import { ModalController, IonContent, NavParams } from '@ionic/angular';
import * as $ from 'jquery';
import { RegAgreementComponent } from '../../../component/modal/reg-agreement/reg-agreement.component'
import { Storage_LoginInfo } from '../../typescript/logininfo.storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public tab: any = 'account';
  public title: any = '登录';
  public isval: any = false;//验证消息显示开关 
  public valmsg: any = '';//验证消息显示开关
  public inputphonedisabled: boolean = false;//修改密码手机号只读开关
  //界面切换开关 1 登录输入；2登录验证码输入；5 注册验证码输入；3 注册电话号码页面；4 注册个人信息输入页面 
  //6 忘记密码手机号码录入界面； 8 修改密码

  //模拟登陆页面   10微信；11QQ 12 微博
  public disstatus: any = 1;
  public mod: any = {
    loginurl: 'api/user/loginaccount',//账号登录url
    loginphoneurl: 'api/user/loginphone',//手机号码登录url
    regurl: 'api/user/adduser',//注册url 
    sendmsgurl: 'api/user/sendmsg',//短信发送url 
    questionsurl: 'api/user/getquestions',//用户问题设置列表url 
    getuserurl: 'api/user/getuser',
    resetpwdurl: 'api/user/resetpwd',//修改用户信息
    resetpwdtoquestionurl: 'api/user/resetpwdtoquestion',//修改用户信息
    questiondata: [],
    val1: '',
    val2: '',
    val3: '',
    val4: '',
    model: {
      account: '',//账号
      pwd: '',//密码 
      name: '',//昵称
      sex: '',
      msg: '',
      pwd1: '',
      quest1: '',
      quest2: '',
      quest3: '',
      quest1value: '',
      quest2value: '',
      quest3value: ''
    }, loginaccount: {
      code: '',
      name: '',
      nickname: '',
      gender: '',
      phone: '',
      cardid: '',
      email: '',
      birthday: '',
      marriagestatus: '',
      profession: '',
      company: '',
      signature: '',
      description: '',
      memberid: ''
    }
  }
  constructor(
    private modalCtrl: ModalController,
    private _http: DCore_Http,
    private _logininfo: Storage_LoginInfo,
    private _page: DCore_Page,
    private route: Router,
    private _valid: DCore_Valid,
    private _navParams: NavParams) {
    this.disstatus = _navParams.get('status')
    if (_navParams.get('status') == 8) {
      this.title = '修改密码';
      this.inputphonedisabled = true;
      this.mod.model.account = this._logininfo.GetAccount();
    }
    this.OnQuests();
  }


  async onRegAgreement(code) {
    const modal = await this.modalCtrl.create({
      component: RegAgreementComponent,
      componentProps: {
        'defcode': code//reg001注册协议;reg002隐私协议; 
      }
    });
    await modal.present();
    //监听销毁的事件
    const { data } = await modal.onDidDismiss();
  }


  //------------------------------模拟登陆-------------------------------------------------------

  OnOtherStatus(status) {
    this.disstatus = status;
  }


  OnOtherLogin() {
    this.mod.model.account = "13635425956";
    this.mod.model.pwd = "123q123";
    this.onLogin();
  }




  //--------------------------------------------------------------------------------------

  //切换到登录界面
  OnLogin() {
    this.title = '登录';
    this.disstatus = 1;
  }
  OnselectText(id) {
    $(id).select();
  }
  OnPwdReset() {
    this.title = '重置密码';
    this.disstatus = 6;
  }
  //关闭
  onReturn(islogin) {
    if (this.loginInterval != null)
      clearInterval(this.loginInterval);
    if (this.applicationInterval != null)
      clearInterval(this.applicationInterval);
    this.modalCtrl.dismiss({
      'login': islogin
    });
  }

  loginInterval: any;
  //登录注册获取验证码
  onloginSendMsg(status) {
    if (status == null) {
      status = this.disstatus;
    }
    if (this.mod.model.account == '') {
      this._page.alert("消息提示", "请填写手机号码！");
      return false;
    }
    if (String(this.mod.model.account).length != 11) {
      this._page.alert("消息提示", "手机号码错误！");
      return false;
    }
    var ii = 90;
    $("#divmsgshow").show();
    $("#divbtnshow").hide();
    $('#lbsendmsg').text('90秒重新获取验证码');
    var intt;
    this.loginInterval = intt = setInterval(function () {
      ii--;
      var cc = String(ii) + '秒重新获取验证码';
      $('#lbsendmsg').text(cc);
      if (ii <= 0) {
        $("#divmsgshow").hide();
        $("#divbtnshow").show();
        clearInterval(intt);
      }
    }, 1000);

    this.onSendMsg(status);
  }

  //安全问题设置列表获取
  OnQuests() {
    var postData = {

    };
    this._http.get(
      this.mod.questionsurl,
      postData,
      (res: any) => {
        if (res.Result == true) {
          for (var key in res.Data) {
            var obj = {};
            obj = res.Data[key]["Attributes"];
            this.mod.questiondata.push(obj);
          }
        }
      },
      (err: any) => {
        this._page.alert("消息提示", "操作失败");
      }
    );
  }

  //短信发送
  onSendMsg(status) {
    debugger;
    if (this.mod.model.account == '') {
      this._page.alert("消息提示", "请填写手机号码！");
      return false;
    }
    if (String(this.mod.model.account).length != 11) {
      this._page.alert("消息提示", "手机号码错误！");
      return false;
    }
    this._page.loadingShow();
    var postData = {
      phone: this.mod.model.account,
      type: (status == "2" ? 2 : (status == "5" ? 1 : status)),
      valcode: ""
    };
    this._http.post(
      this.mod.sendmsgurl,
      postData,
      (res: any) => {
        if (res.Result == true) {
          //验证码获取不是登录或者注册不需要跳转页面
          if (status == 2 || status == 5)
            this.disstatus = status;
          this._page.loadingHide();
          $("#inputcode1").focus();
        } else {
          this._page.loadingHide();
          this._page.alert("消息提示", res.Description);
        }
      },
      (err: any) => {
        this._page.loadingHide();
        this._page.alert("消息提示", "操作失败");
      }
    );
  }

  public i: any = 0;
  //手机短信验证接口
  OnVlaCodeChange() {
    this.i++;
    if (this.i != 1)
      return false;
    this._page.loadingShow();
    var valcode = String(this.mod.val1) + String(this.mod.val2) + String(this.mod.val3) + String(this.mod.val4);
    var postData = {
      account: this.mod.model.account,
      valcode: valcode,
      logintype: 1,
      type: String(this.disstatus),
      keytype: 1,
      status: 2,
      pwd: this.mod.model.pwd
    };

    this._http.post(
      this.mod.loginphoneurl,
      postData,
      (res: any) => {
        this._page.loadingHide();
        if (res.Result == true) {
          //验证码输入结束提交验证，如果当前账户已存在，直接登录，如果不存在，弹出个人信息输入界面
          if (this.disstatus == 5)
            this.disstatus = 4;
          else {
            this.LoginModel(res.Data);
            this.onReturn(true);
          }
        }
        else {
          this.mod.val1 = "";
          this.mod.val2 = "";
          this.mod.val3 = "";
          this.mod.val4 = "";
          this.i = 0;
          this._page.alert("消息提示", res.Description);
        }
      },
      (err: any) => {
        this.i = 0;
        this._page.loadingHide();
        this._page.alert("消息提示", "操作失败");
      }
    );

  }



  OnNextFocus(code) {
    var inputval = '#inputcode' + code;
    $(inputval).focus();
  }
  //登录
  onLogin() {
    this._page.loadingShow();
    var postData = {
      account: this.mod.model.account,
      pwd: this.mod.model.pwd,
      keytype: 1,
      logintype: 1,
      status: 2,
      certificationtype: 1,
      valcode: "",
      type: ""
    };
    this._http.post(
      this.mod.loginurl,
      postData,
      (res: any) => {
        if (res.Result == true) {
          this.LoginModel(res.Data);
          this.onReturn(true);
        }
        else {
          this._page.alert("消息提示", "登录失败,账户密码错误！");
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.loadingHide();
        this._page.alert("消息提示", "操作失败");
      }
    );
  }

  LoginModel(data: any) {
    this.mod.loginaccount.account = data["Attributes"]["account"];
    this.mod.loginaccount.systemuserid = data["Attributes"]["mcs_userid"];
    this.mod.loginaccount.code = data["Attributes"]["mcs_code"];
    this.mod.loginaccount.name = data["Attributes"]["mcs_name"];
    this.mod.loginaccount.nickname = data["Attributes"]["mcs_nickname"];
    this.mod.loginaccount.gender = data["Attributes"]["mcs_gender@OData.Community.Display.V1.FormattedValue"];
    this.mod.loginaccount.phone = data["Attributes"]["mcs_phone"];
    this.mod.loginaccount.cardid = data["Attributes"]["mcs_cardid"];
    this.mod.loginaccount.email = data["Attributes"]["mcs_email"];
    this.mod.loginaccount.birthday = data["Attributes"]["mcs_birthday@OData.Community.Display.V1.FormattedValue"];
    this.mod.loginaccount.marriagestatus = data["Attributes"]["mcs_marriagestatus@OData.Community.Display.V1.FormattedValue"];
    this.mod.loginaccount.profession = data["Attributes"]["mcs_profession"];
    this.mod.loginaccount.company = data["Attributes"]["mcs_company"];
    this.mod.loginaccount.signature = data["Attributes"]["mcs_signature"];
    this.mod.loginaccount.description = data["Attributes"]["mcs_description"];
    this.mod.loginaccount.memberid = data["Attributes"]["_mcs_memberid_value"];
    this._logininfo.SetInfo(JSON.stringify(this.mod.loginaccount));
  }
  onReg() {
    this.title = '用户注册';
    this.disstatus = 3;
  }
  //注册
  onRegPost() {

    if (this.mod.model.name == '') {
      this._page.alert("消息提示", "请填写昵称！");
      return false;
    }
    if (this.mod.model.pwd == '') {
      this._page.alert("消息提示", "请填写密码！");
      return false;
    }

    if (this.mod.model.pwd != this.mod.model.pwd1) {
      this._page.alert("消息提示", "密码不匹配！");
      return false;
    }


    if (this.mod.model.quest1 == null || this.mod.model.quest2 == null || this.mod.model.quest3 == null) {
      this._page.alert("消息提示", "请填写安全问题");
      return false;
    }
    if (this.mod.model.quest1value == null || this.mod.model.quest2value == null || this.mod.model.quest3value == null) {
      this._page.alert("消息提示", "请填写安全问题");
      return false;
    }

    this._page.loadingShow();
    var postData = {
      account: this.mod.model.account,
      phone: this.mod.model.account,
      valcode: null,
      name: this.mod.model.name,
      nickname: this.mod.model.name,
      gender: null,
      mcs_cardid: null,
      mcs_email: null,
      birthday: null,
      marriagestatus: null,
      profession: null,
      company: null,
      signature: null,
      description: null,
      logintype: 1,
      userkey: {
        pwd: this.mod.model.pwd,
        keytype: 1,
        status: 2,
        certificationtype: 1
      }, quests: [
        {
          securityquestion: this.mod.model.quest1,
          answer: this.mod.model.quest1value,
        }, {
          securityquestion: this.mod.model.quest2,
          answer: this.mod.model.quest2value,
        }, {
          securityquestion: this.mod.model.quest3,
          answer: this.mod.model.quest3value,
        }
      ]
    };
    this._http.post(
      this.mod.regurl,
      postData,
      (res: any) => {
        if (res.Result == true) {
          var postData = {
            account: this.mod.model.account,
            valcode: "",
            logintype: 1,
            type: "",
            keytype: 1,
            status: 2,
            pwd: ""
          };
          //获取用户信息
          this._http.post(
            this.mod.getuserurl,
            postData,
            (res: any) => {
              this._page.loadingHide();
              if (res.Result == true) {
                this.LoginModel(res.Data);
                this.onReturn(true);
              }
              else {
                this.i = 0;
                this._page.alert("消息提示", res.Description);
              }
            },
            (err: any) => {
              this.i = 0;
              this._page.loadingHide();
              this._page.alert("消息提示", "操作失败");
            }
          );

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

  applicationInterval: any;
  //修改密码获取验证码
  onSendMsgPwd() {
    if (this.mod.model.account == '') {
      this._page.alert("消息提示", "请填写手机号码！");
      return false;
    }
    if (String(this.mod.model.account).length != 11) {
      this._page.alert("消息提示", "手机号码错误！");
      return false;
    }
    var ii = 90;
    $('#btnsendmsg').text('90s');
    $("#btnsendmsg").attr("class", "ion-color ion-color-medium  ios button button-block button-small button-solid ion-activatable ion-focusable hydrated");
    $('#btnsendmsg').attr('disabled', 'true');
    var interval;
    this.applicationInterval = interval = setInterval(function () {
      ii--;
      var cc = String(ii) + 's';
      $('#btnsendmsg').text(cc);
      if (ii == 0) {
        $('#btnsendmsg').text('重新获取');
        $("#btnsendmsg").attr("class", "ion-color ion-color-secondary ios button button-block button-small button-solid ion-activatable ion-focusable hydrated");
        $('#btnsendmsg').attr('disabled', 'false');
        clearInterval(interval);
      }
    }, 1000);
    var status = this.disstatus == 6 ? 3 : 4;
    this.onSendMsg(status);
  }


  //修改用户密码（手机号码验证）
  onPwdReset(type) {
    if (this.mod.model.account == '') {
      this.valmsg = '请填写手机号！';
      this.isval = true;
      return false;
    }
    if (this.mod.model.msg == '') {
      this.valmsg = '请填写验证码！';
      this.isval = true;
      return false;
    }
    if (this.mod.model.pwd != this.mod.model.pwd1) {
      this.valmsg = '两次密码不匹配！';
      this.isval = true;
      return false;
    }

    this._page.loadingShow();
    var postData = {
      account: this.mod.model.account,
      valcode: this.mod.model.msg,
      logintype: 1,
      type: String(type),
      keytype: 1,
      status: 2,
      pwd: this.mod.model.pwd,
      certificationtype: 1
    };
    this._http.post(
      this.mod.resetpwdurl,
      postData,
      (res: any) => {
        if (res.Result == true) {
          this._page.loadingHide();
          if (this.disstatus == 6) {
            this._page.alert("消息提示", "更改成功!");
            this.disstatus = 1;
          } else {
            this._page.alert("消息提示", "更改成功!");
            this._page.goto("/tabs/personalcenter");
            this.onReturn(true);
          }

        }
        else {
          this._page.loadingHide();
          this._page.alert("消息提示", "注册失败，验证码无效");
        }
      },
      (err: any) => {
        this._page.loadingHide();
        this._page.alert("消息提示", "操作失败");
      }
    );
  }


  //修改用户密码（安全问题验证）
  onPwdResetToQuestion(type) {
    if (this.mod.model.account == '') {
      this.valmsg = '请填写手机号！';
      this.isval = true;
      return false;
    }
    if (this.mod.model.msg == '') {
      this.valmsg = '请填写验证码！';
      this.isval = true;
      return false;
    }
    if (this.mod.model.pwd != this.mod.model.pwd1) {
      this.valmsg = '两次密码不匹配！';
      this.isval = true;
      return false;
    }
    if (this.mod.model.quest1 == null || this.mod.model.quest2 == null || this.mod.model.quest3 == null) {
      this.valmsg = '请填写安全问题';
      this.isval = true;
    }
    if (this.mod.model.quest1value == null || this.mod.model.quest2value == null || this.mod.model.quest3value == null) {
      this.valmsg = '请填写安全问题';
      this.isval = true;
    }
    this._page.loadingShow();
    var postData = {
      account: this.mod.model.account,
      valcode: this.mod.model.msg,
      logintype: 1,
      type: String(type),
      keytype: 1,
      status: 2,
      pwd: this.mod.model.pwd,
      certificationtype: 1,
      quests: [
        {
          securityquestion: this.mod.model.quest1,
          answer: this.mod.model.quest1value,
        }, {
          securityquestion: this.mod.model.quest2,
          answer: this.mod.model.quest2value,
        }, {
          securityquestion: this.mod.model.quest3,
          answer: this.mod.model.quest3value,
        }
      ]
    };
    this._http.post(
      this.mod.resetpwdtoquestionurl,
      postData,
      (res: any) => {
        if (res.Result == true) {
          this._page.loadingHide();
          if (this.disstatus == 6) {
            this._page.alert("消息提示", "更改成功!");
            this.disstatus = 1;
          } else {
            this._page.alert("消息提示", "更改成功!");
            this._page.goto("/tabs/personalcenter");
            this.onReturn(true);
          }
        }
        else {
          this._page.loadingHide();
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
