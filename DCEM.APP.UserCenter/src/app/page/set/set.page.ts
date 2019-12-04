import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../component/modal/login/login.component' 
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModalController } from '@ionic/angular'; 

@Component({
  selector: 'app-set',
  templateUrl: './set.page.html',
  styleUrls: ['./set.page.scss'],
})
export class SetPage implements OnInit {

  constructor(private modalCtrl: ModalController, 
    private activeRoute: ActivatedRoute) { }
    
  async loginModal() {
    const modal = await this.modalCtrl.create({
      component: LoginComponent,
      componentProps: {
        'status': 6//登陆页面状态 
      }
    });
    
    await modal.present();
    //监听销毁的事件
    const { data } = await modal.onDidDismiss();

  }
  ngOnInit() {
  }

}
