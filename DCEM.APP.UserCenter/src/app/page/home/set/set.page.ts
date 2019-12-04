import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../../component/modal/login/login.component'
import { DCore_Http, DCore_Page, DCore_Valid } from '../../../component/typescript/dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Storage_LoginInfo } from '../../../component/typescript/logininfo.storage';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-set',
  templateUrl: './set.page.html',
  styleUrls: ['./set.page.scss'],
})
export class SetPage implements OnInit {

  public islogin: boolean = false;
  constructor(private modalCtrl: ModalController,
    private _logininfo: Storage_LoginInfo,
    private route: Router,
    private _page: DCore_Page,
    private activeRoute: ActivatedRoute) {
    if (this._logininfo.GetAccount() != null)
      this.islogin = true;
  }

  async loginModal() {
    const modal = await this.modalCtrl.create({
      component: LoginComponent,
      componentProps: {
        'status': 8//登陆页面状态 
      }
    });
    await modal.present();
    //监听销毁的事件
    const { data } = await modal.onDidDismiss(); 
  }
  onRetrun() {
    this.route.navigate(['/tabs/personalcenter'], {
      queryParams: {
        return: "1"
      }
    });
  }
  ngOnInit() {
  }

  OnVersion(){ 
    this._page.alert("消息提示", "已是版本");
  }
}
