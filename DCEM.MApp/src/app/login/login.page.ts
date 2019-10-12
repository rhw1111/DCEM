import { HttpService } from './../services/http-service.service';
import { Component, OnInit } from '@angular/core';
import { NavController,NavParams } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
//import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';
  errorMsg: string = '';
  nameMsg: string = '';
  pwdMsg: string = '';
  status: boolean = false;

  constructor(private navCtrl:NavController,
    private httpService: HttpService,
    private authService:AuthenticationService

    ) { }

  ngOnInit() {
  }

  //内容发生改变时触发的事件
  onChange(type: number) {
    if (type == 1) {
      //用户名校验
      let nameReg = /^[a-zA-Z0-9_-]{0,}$/;
      if (!nameReg.test(this.username)) {
        this.nameMsg = '用户名不能含有中文或特殊字符！';
      } else if (this.username.length > 25) {
        this.nameMsg = '用户名超过长度限制！';
      } else if (this.username.length <= 0) {
        this.nameMsg = '用户名不能为空！';
      } else {
        this.nameMsg = '';
      }
    } else if (type == 2) {
      //密码校验
      //包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
      //let pwdReg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
      //let pwdReg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
      let pwdReg=/^.*.$/;
      if (this.password.length < 6 || this.password.length > 20) {
        this.pwdMsg = '密码长度为6~20位';
      } else if (!pwdReg.test(this.password)) {
        this.pwdMsg = '密码由字母、数字、下划线组成';
      } else {
        this.pwdMsg = '';
      }
    }
    this.errorMsg = this.nameMsg.length <= 0 ? this.pwdMsg : this.nameMsg;
    if (
      this.errorMsg.length <= 0 &&
      this.username.length > 0 &&
      this.password.length > 0
    ) {
      //登录按钮可以点击
      this.status = true;
    } else {
      //登录按钮不可点击
      this.status = false;
    }
  }
  //失去焦点 【(ionFocus)="onFocus()"获取焦点时的事件】
  onBlur() {
    if (this.username.length <= 0) {
      this.errorMsg = '用户名不能为空！';
    } else if (this.password.length <= 0) {
      this.errorMsg = '密码不能为空！';
    }
  }

  _login(username:HTMLInputElement,password:HTMLInputElement ) {
    let userinfo: string = 'username=' + username  + '&password='+encodeURIComponent(this.password);  
    console.log("开始登录"+username+" "+password+" 转义后："+encodeURIComponent(this.password));
    this.httpService.showLoading('正在登录...');
    this.httpService.GET("/api/Account/GetAuthToken?"+userinfo,null,(res,err)=>{
      this.httpService.hideLoading();
      console.log("请求成功:"+res+" error:"+err);
      if(res!=null){
        if(res.access_token!=null && res.access_token!=""){
          this.authService.login(res.access_token);
          this.httpService.showLoading('登录成功，数据加载中...');
          this.navCtrl.navigateForward('tabs');
        }
        else{
          this.httpService.presentToastError("账户或密码错误!");
        }
      }
      else{
        this.httpService.presentToastError("登录失败!");
      }          
    });
    
    // if(true){
    //    //this.presentToast("登录成功！");
    //   // this.toast.show('登录成功！', '5000', 'center').subscribe(
    //   //   toast => {
    //   //     //console.log(toast);
    //   // setTimeout(()=>{
       
    //   // },500);
    //   this.httpService.showLoading('登录成功，数据加载中...');
    //   this.navCtrl.navigateForward('tabs');
    //   //this.httpService.hideLoading();
      
      
    //   //   }
    //   // );
    // }
    // else{
      
    //   //alert('账户或密码错误');
    //   // this.toast.show('账户或密码错误', '5000', 'center').subscribe(
    //   //   toast => {
    //       // console.log(toast);
    //   //   }
    //   // );
    // }
  }

}
