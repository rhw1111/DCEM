import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ModalController } from '@ionic/angular';
import { ScSelectComponent } from '../../serving.ser/components/sc-select/sc-select.component';
import { mcall } from 'q';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public model:any={
    mcid:'',//服务委托书
    mcname:'',
    phone:'',
    email:'',
    mcs_techsystem:''//技术系统
  };
  constructor( 
    private _http: DCore_Http,
    private _page: DCore_Page,
    private modalCtrl:ModalController) { }

  ngOnInit() {

  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ScSelectComponent
    });
    await modal.present();
    //监听销毁的事件
    const { data } = await modal.onDidDismiss();
    if (data != null && data != undefined) {
      this.model.mcid = data.id;
      this.model.mcname = data.name;
    }
  }

  save(){

  }
  
  changePhone(value) {
    // 去除空格
    const phone = value.replace(/\s/g, '');
    const ischeck = /^(13[0-9]|14[5|7|9]|15[0|1|2|3|5|6|7|8|9]|16[6]|17[0|1|2|3|5|6|7|8]|18[0-9]|19[8|9])\d{8}$/;
    if (!ischeck.test(phone)) {
      this.model.phone = '';
      //super.showToast(this.toastCtrl, '请输入正确的手机号');
    }
  }

  changeEmail(value) {
    const ischeck = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value);
    if (!ischeck) {
      this.model.email = '';
      //super.showToast(this.toastCtrl, '请输入正确的邮箱格式');
    }
  }
}
