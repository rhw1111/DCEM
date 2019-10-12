import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

  public appointmentList:any=[
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

  private isTrue: string;
  private spanColor1: string;
  private spanColor2: string;
  private spanColor3: string;
  private spanColor4: string;

  constructor(public router: Router) { }

  ngOnInit() {
    this.enableTemplate('');
  }

  addAppointment(){
  }
  showDetail(item){
    this.router.navigate(['test-drive-detail'], {
      queryParams: {
        Item: JSON.stringify(item)
      }
    });
  }

  enableTemplate(startID: string) {
    this.isTrue = 'true1';
    this.settabcolor(1);
  }
  
  applicationTemplate(suspend: string) {
    this.isTrue = 'true2';
    this.settabcolor(2);
  }
  
  recordTemplate(record: string) {
    this.isTrue = 'true3';
    this.settabcolor(3);
  }
  
  settabcolor(id){
    this.spanColor1="";
    this.spanColor2="";
    this.spanColor3="";
    this.spanColor4="";
    switch(id){
      case 1:
          this.spanColor1="success";
        break;
        case 2:
            this.spanColor2="success";
          break; 
          case 3:
              this.spanColor3="success";
            break;  
            case 4:
          this.spanColor4="success";
        break;     
    }
  }
}
