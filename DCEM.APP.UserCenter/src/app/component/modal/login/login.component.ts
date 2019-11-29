import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_Valid } from '../../typescript/dcem.core';
import * as $ from 'jquery';
import { Storage_LoginInfo } from '../../typescript/logininfo.storage';

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
    loginurl: 'api/user/loginaccount',//账号登陆url
    loginphoneurl: 'api/user/loginphone',//手机号码登陆url
    regurl: 'api/user/adduser',//注册url 
    sendmsgurl: 'api/user/sendmsg',//短信发送url 
    questionsurl: 'api/user/getquestions',//用户问题设置列表url 
    getuserurl:'api/user/getuser',
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
    private _valid: DCore_Valid) {
    this.OnQuests();
  }
  //关闭
  onReturn(islogin) {
    this.modalCtrl.dismiss({
      'login': islogin
    });
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
      type: (status == "2" ? 2 : 1),
      valcode: ""
    };
    this._http.post(
      this.mod.sendmsgurl,
      postData,
      (res: any) => {
        if (res.Result == true) {
          this.disstatus = status;
          this._page.loadingHide();
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
          //验证码输入结束提交验证，如果当前账户已存在，直接登陆，如果不存在，弹出个人信息输入界面
          if (this.disstatus == 5)
            this.disstatus = 4;
          else {
            this.LoginModel(res.Data);
            this.onReturn(true);
          }
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

  

  OnNextFocus(code) {
    var inputval = '#inputcode' + code;
    $(inputval).focus();
  }
  //登陆
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
          this._page.alert("消息提示", "登陆失败,账户密码错误！");
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
     
    this._page.loadingShow();
    var postData = {
      account: this.mod.model.account,
      phone:this.mod.model.account,
      valcode: null,
      name: this.mod.model.name,
      nickname:this.mod.model.name,
      gender: null,
      mcs_cardid: null,
      mcs_email: null,
      birthday: null,
      marriagestatus: null,
      profession: null,
      company: null,
      signature:null,
      description: null, 
      logintype:1,
      userkey: {
        pwd:this.mod.model.pwd,
        keytype:1,
        status:2,
        certificationtype:1 
      },quests:[
        {
          securityquestion:this.mod.model.quest1,
          answer:this.mod.model.quest1value,
        },{
          securityquestion:this.mod.model.quest2,
          answer:this.mod.model.quest2value,
        },{
          securityquestion:this.mod.model.quest3,
          answer:this.mod.model.quest3value,
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

}
