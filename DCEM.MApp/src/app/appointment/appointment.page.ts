import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../base/base.ser/http-service.service';
import { NavController,NavParams } from '@ionic/angular';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

  public ListAll:any=[];

  private isTrue: string;
  private spanColor1: string;
  private spanColor2: string;
  private spanColor3: string;
  private spanColor4: string;

  constructor(public router: Router,private navCtrl:NavController,private httpService:HttpService) { }

  ngOnInit() {
    this.showlist(0);
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

  // enableTemplate(startID: string) {
  //   this.isTrue = 'true1';
  //   this.settabcolor(1);
  // }
  
  // applicationTemplate(suspend: string) {
  //   this.isTrue = 'true2';
  //   this.settabcolor(2);
  // }
  
  // recordTemplate(record: string) {
  //   this.isTrue = 'true3';
  //   this.settabcolor(3);
  // }
  
  showlist(id){
    //加载全部试乘试驾
    // this.httpService.GET("/api/TestDrive/get?status="+id,null,(res,error)=>{
    //   if(res!=null && res.success==true){
    //     this.ListAll=res.datas;
    //   }
    // });

    var response=this.httpService.getForToaken("/api/TestDrive/get?status="+id,null);
    response.subscribe((res)=>{
      if(res!=null && res.success==true){
        this.ListAll=res.datas;
        this.spanColor1="";
        this.spanColor2="";
        this.spanColor3="";
        this.spanColor4="";
        switch(id){
          case 0:
              this.spanColor1="success";
              break;
            case 1:
              this.spanColor2="success";
              break; 
            case 2:
              this.spanColor3="success";
              break;  
            case 3:
              this.spanColor4="success";
              break;     
        }
      }
    });
  }
}
