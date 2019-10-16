import { Component, OnInit } from '@angular/core';
import { NavController,NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage implements OnInit {

  constructor(private navCtrl:NavController,public router: Router) { }

  ngOnInit() {
  }

  toRedict(url){
    this.navCtrl.navigateForward(url);
  }
}
