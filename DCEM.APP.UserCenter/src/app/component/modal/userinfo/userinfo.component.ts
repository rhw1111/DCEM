import { Component, OnInit, ViewChild } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from '../../typescript/dcem.core';
import { ModalController, IonContent, NavParams } from '@ionic/angular';
import * as $ from 'jquery';
import { Storage_LoginInfo } from '../../typescript/logininfo.storage';
import { OptionSetService } from '../../typescript/optionset.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss'],
})
export class UserinfoComponent implements OnInit {
  public mod: any = {
    getuserdetailurl: 'api/user/getuserdetail',//获取用户信息url
    updateurl: 'api/user/updateuser',//修改用户url  
    getuserurl: 'api/user/getuser',
    model: {
      mcs_userId: '',//用户id 
      mcs_name: '',//姓名
      mcs_nickname: '',//昵称
      mcs_gender: '',//性别
      mcs_phone: '', //电话号码
      mcs_marriagestatus: '', //婚姻状况
      mcs_cardid: '', //身份证号码
      mcs_email: '', //邮箱
      mcs_birthday: '', //出生年月
      mcs_profession: '', //职业
      mcs_company: '', //公司
      mcs_signature: '', //个性化签名
      mcs_description: ''//个人说明
    },
    genderArray: [],//性别,
    marriagestatusArray: []//婚姻状况
    , loginaccount: {
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
    private _valid: DCore_Valid,
    private _navParams: NavParams,
    private _optionSetService: OptionSetService) {
    this.GetUser();
    this.mod.genderArray = this._optionSetService.Get('user_mcs_gender');
    this.mod.marriagestatusArray = this._optionSetService.Get('user_mcs_marriagestatus');
  }
  //关闭
  onReturn(islogin) {
    this.modalCtrl.dismiss({
      'login': islogin
    });
  }

  OnselectText(id) {
    $(id).select();
  }

  GetUser() {
    var postData = {
      id: this._logininfo.GetSystemUserId()
    };
    this._http.post(
      this.mod.getuserdetailurl,
      postData,
      (res: any) => {
        if (res.Attributes != null) {
          this.mod.model.mcs_userId = res.Id;
          this.mod.model.mcs_name = res["Attributes"]["mcs_name"];
          this.mod.model.mcs_nickname = res["Attributes"]["mcs_nickname"];
          this.mod.model.mcs_gender = res["Attributes"]["mcs_gender"];
          this.mod.model.mcs_phone = res["Attributes"]["mcs_phone"];
          this.mod.model.mcs_marriagestatus = res["Attributes"]["mcs_marriagestatus"];
          this.mod.model.mcs_cardid = res["Attributes"]["mcs_cardid"];
          this.mod.model.mcs_email = res["Attributes"]["mcs_email"];
          this.mod.model.mcs_birthday = res["Attributes"]["mcs_birthday@OData.Community.Display.V1.FormattedValue"];
          this.mod.model.mcs_profession = res["Attributes"]["mcs_profession"];
          this.mod.model.mcs_company = res["Attributes"]["mcs_company"];
          this.mod.model.mcs_signature = res["Attributes"]["mcs_signature"];
          this.mod.model.mcs_description = res["Attributes"]["mcs_description"];
        }
      },
      (err: any) => {
        this._page.alert("消息提示", "操作失败");
      }
    );
  }

  onPost() {

    if (this.mod.model.name == '') {
      this._page.alert("消息提示", "请填写昵称！");
      return false;
    }
    this._page.loadingShow();
    var postData = {
      userid: this.mod.model.mcs_userId,
      phone: this.mod.model.mcs_phone,
      name: this.mod.model.mcs_name,
      nickname: this.mod.model.mcs_nickname,
      gender: this.mod.model.mcs_gender,
      mcs_cardid: this.mod.model.mcs_cardid,
      mcs_email: this.mod.model.mcs_email,
      birthday: this.mod.model.mcs_birthday,
      marriagestatus: this.mod.model.mcs_marriagestatus,
      profession: this.mod.model.mcs_profession,
      company: this.mod.model.mcs_company,
      signature: this.mod.model.mcs_signature,
      description: this.mod.model.mcs_description,
      userkey: {
        pwd: null,
        keytype: 1,
        status: 2,
        certificationtype: 1
      }, quests: [
        {
          securityquestion: null,
          answer: null
        }
      ]
    };
    this._http.post(
      this.mod.updateurl,
      postData,
      (res: any) => {
        if (res.Result == true) {
          var pdata = {
            account:this._logininfo.GetAccount(),
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
            pdata,
            (res: any) => {
              this._page.loadingHide();
              if (res.Result == true) {
                this.LoginModel(res.Data);
                this._page.alert("消息提示", "更新成功！");
                this.onReturn(true);
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
  // LoginModel(data: any) {
  //   this.mod.loginaccount.account = data.account;
  //   this.mod.loginaccount.systemuserid = data.mcs_userid;
  //   this.mod.loginaccount.code = data.mcs_code;
  //   this.mod.loginaccount.name = data.mcs_name;
  //   this.mod.loginaccount.nickname = data.mcs_nickname;
  //   this.mod.loginaccount.gender = data.mcs_gender;
  //   this.mod.loginaccount.phone = data.mcs_phone;
  //   this.mod.loginaccount.cardid = data.mcs_cardid;
  //   this.mod.loginaccount.email = data.mcs_email;
  //   this.mod.loginaccount.birthday = data.mcs_birthday;
  //   this.mod.loginaccount.marriagestatus = data.mcs_marriagestatus;
  //   this.mod.loginaccount.profession = data.mcs_profession;
  //   this.mod.loginaccount.company = data.mcs_company;
  //   this.mod.loginaccount.signature = data.mcs_signature;
  //   this.mod.loginaccount.description = data.mcs_description;
  //   this.mod.loginaccount.memberid = data._mcs_memberid_value;
  //   this._logininfo.SetInfo(JSON.stringify(this.mod.loginaccount));
  // }
}
