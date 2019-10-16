import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../base/base.ser/http-service.service';
import { NavController,NavParams } from '@ionic/angular';
import sd from 'silly-datetime';

@Component({
  selector: 'app-test-drive-add',
  templateUrl: './test-drive-add.page.html',
  styleUrls: ['./test-drive-add.page.scss'],
})
export class TestDriveAddPage implements OnInit {

  public CurrentTestDrive=new TestDriveInfo();
  constructor(private httpService:HttpService,private navCtrl:NavController) { }

  ngOnInit() {
  }

  onSubmit(){
    let erroMessage="";
    if(this.CurrentTestDrive.UserName==null || this.CurrentTestDrive.UserName==undefined){
      erroMessage+="用户名不能为空!\r\n";
    }  
    if(this.CurrentTestDrive.UserPhone==null || this.CurrentTestDrive.UserPhone==undefined){
      erroMessage+="手机号不能为空!\r\n";
    } 
    if(this.CurrentTestDrive.CarModel==null || this.CurrentTestDrive.CarModel==undefined){
      erroMessage+="车型不能为空!\r\n";
    } 
    if(this.CurrentTestDrive.OrderTime==null || this.CurrentTestDrive.OrderTime==undefined){
      erroMessage+="试驾日期不能为空!\r\n";
    } 
    if(this.CurrentTestDrive.TestDriveTimeId==null || this.CurrentTestDrive.TestDriveTimeId==undefined){
      erroMessage+="试驾时间段不能为空!\r\n";
    } 

    this.CurrentTestDrive.ID="";
    this.CurrentTestDrive.Status=1;
    this.CurrentTestDrive.OrderTime = sd.format(this.CurrentTestDrive.OrderTime, 'YYYY-MM-DD');
    if(erroMessage!="")
    {
      this.httpService.presentToastError(erroMessage);
    }
    else{
      this.httpService.postForToaken("/api/TestDrive/Add",this.CurrentTestDrive,(res)=>{
        if(res.success==true){
          this.httpService.presentToastSucess("创建成功！").then(()=>{
            this.navCtrl.back();
          });
        }
        else{
          this.httpService.presentToastError("创建失败！");
        }
      },(err)=>{
        if(err!=null){
          if(err.ok==false){
            this.httpService.presentToastError("请求失败！");
          }
        }
      });
    }
  }
}


export class TestDriveInfo {
  ID:string;
  UserName:string;
  UserPhone:string;
  Status:number;
  CarModel:string;
  OrderTime:string;
  TestDriveTimeId:string;
}