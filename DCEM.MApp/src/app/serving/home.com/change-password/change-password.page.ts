import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  model={
    postApiUrl:'/api/changepwd/EditPwd',
    postData:{
      OldPwd:"",
      FirstNewPwd:"",
      SecondNewPwd:""      
    },
    systemUserId: "",//当前用户id
    systemUserName: ""//当前用户名称

  }
  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private _valid: DCore_Valid,
    private _logininfo: Storage_LoginInfo
  ) { }

  ngOnInit() {
    this.model.systemUserId = this._logininfo.GetSystemUserId(); 
    this.model.systemUserName = this._logininfo.GetDomainname(); 
  }

  public savepwd(){
    debugger;
    var errMessage = "";
     if (this._valid.isNullOrEmpty(this.model.postData.OldPwd)) {
     errMessage += "请输入旧密码<br>";
     }
     if (this._valid.isNullOrEmpty(this.model.postData.FirstNewPwd)) {
         errMessage += "请输入新密码<br>";
     }
     if (this._valid.isNullOrEmpty(this.model.postData.SecondNewPwd)) {
         errMessage += "请再次输入新密码<br>";
     }
      
     if (errMessage !== "") {
       this._page.presentToastError(errMessage);
       return;
     }
    /*  if(1==1)
     {
      this._page.presentToastError("此功能暂未启用");
      return;
     } */

     this._page.loadingShow();
     this._http.postForToaken(
         this.model.postApiUrl, 
         this.model.postData,
         (res: any) => {
             debugger;
             this._page.loadingHide();
             if (res.Result == true) {              
                 console.log(res);                         
                 this._page.goto("/serving/home/systemsetup");
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

}
