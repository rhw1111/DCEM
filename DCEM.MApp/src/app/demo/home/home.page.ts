import { Component } from '@angular/core';
import { NavController,NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl:NavController,public router: Router) {

  }

  showDetail(item){
    this.router.navigate(['test-drive-detail'], {
      queryParams: {
        Item: JSON.stringify(item)
      }
    });
  }

  toRedict(url){
    this.navCtrl.navigateForward(url);
  }
}
