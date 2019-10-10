import { Component } from '@angular/core';
import { NavController,NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public testDriveList:any=[
    {
      Id:1,
      UserName:"张一帆",
      PhoneNumber:"1802890098",
      Date:"2019-11-01",
      StartTime:"14:00:00",
      EndTime:"17:00:00",
      VehicleType:"S01",
      Remark:"试乘试驾",
      Status:1
    },
    {
      Id:2,
      UserName:"张一帆",
      PhoneNumber:"1802890098",
      Date:"2019-11-01",
      StartTime:"14:00:00",
      EndTime:"17:00:00",
      VehicleType:"S01",
      Remark:"试乘试驾",
      Status:0
    },
    {
      Id:3,
      UserName:"张一帆",
      PhoneNumber:"1802890098",
      Date:"2019-11-01",
      StartTime:"14:00:00",
      EndTime:"17:00:00",
      VehicleType:"S01",
      Remark:"试乘试驾",
      Status:1
    },
    {
      Id:4,
      UserName:"张一帆",
      PhoneNumber:"1802890098",
      Date:"2019-11-01",
      StartTime:"14:00:00",
      EndTime:"17:00:00",
      VehicleType:"S01",
      Remark:"试乘试驾",
      Status:2
    }
  ];

  
  
  constructor(private navCtrl:NavController,public router: Router) {

  }

  addTestDrive(){
    this.navCtrl.navigateForward('test-drive-add');
  }
  showDetail(item){
    this.router.navigate(['test-drive-detail'], {
      queryParams: {
        Item: JSON.stringify(item)
      }
    });
  }

}
