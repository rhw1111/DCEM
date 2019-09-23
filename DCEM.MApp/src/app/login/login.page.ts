import { Component, OnInit } from '@angular/core';
import { NavController,NavParams } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl:NavController,private toast: Toast) { }

  ngOnInit() {
  }

  _login(username:HTMLInputElement,password:HTMLInputElement ) {
    let userinfo: string = '用户名：' + username.value  + '密码：' + password.value;
    //alert(userinfo);
    if(username.value=="admin" && password.value=="123456"){
      this.toast.show('登录成功！', '5000', 'center').subscribe(
        toast => {
          //console.log(toast);
          this.navCtrl.navigateForward('tabs');
        }
      );
    }
    else{
      this.toast.show('账户或密码错误', '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    }
  }

}
