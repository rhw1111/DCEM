import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ModalController } from '@ionic/angular';
import { ScSelectComponent } from 'app/serving/serving.ser/components/sc-select/sc-select.component';
import { SelectCustomerComponent } from 'app/serving/serving.ser/components/select-customer/select-customer.component';

import { mcall } from 'q';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public model:any={
    postApiUrl:'/api/tech-support/AddOrEdit',
    viewData:{
      mcs_serviceorderid_name:'',//服务委托书名称
      vin:'',
      mcs_batterymodel:'',
      mcs_batteryserialnumber:'',
      mcs_carplate:'',
      mcs_customername:'',
      mcs_customerphone:'',
      mcs_enginenumber:'',
      mcs_modifiedpartscontent:'',
      mcs_motormodel:'',//电机型号
      mcs_mileage:0
    },
    postData:{
      Id:'',//主键ID
      name:'',//编号
      mcs_title:'',//主题
      mcs_repairnameid:'',
      mcs_serviceadvisorid:'',//服务顾问
      mcs_serviceorderid:'',//服务委托书GUid
      mcs_email:'',
      mcs_phone:'',
      mcs_customerid:'',//客户-VIN
      mcs_ismodifiedparts:false,
      mcs_mileage:'',
      mcs_malfunctiontypeid:'',
      mcs_diagnosiscontent:'',
      mcs_malfunctioncontent:'',
      mcs_replacedparts:'',
      mcs_techqueries:'',
      mcs_techsystem:''
    }
  };
  constructor( 
    private _http: DCore_Http,
    private _page: DCore_Page,
    private modalCtrl:ModalController) { }

  ngOnInit() {

  }
  //选择服务委托书模式窗口
  async presentServiceModal() {
    const modal = await this.modalCtrl.create({
      component: ScSelectComponent
    });
    await modal.present();
    //监听销毁的事件
    const { data } = await modal.onDidDismiss();
    if (data != null && data != undefined) {
      this.model.postData.mcs_serviceorderid = data.id;
      this.model.viewData.mcs_serviceorderid_name = data.name;
    }
  }

  //选择客户模式窗口
  async presentCustomerModal() {
    const modal = await this.modalCtrl.create({
      component: SelectCustomerComponent
    });
    await modal.present();
    //监听销毁的事件
    const { data } = await modal.onDidDismiss();
    if (data != null && data != undefined) {
      this.model.postData.mcs_customerid = data.model.Id;
      this.model.viewData.vin=data.model.mcs_name;
      this.model.viewData.mcs_batterymodel = data.model.mcs_batterymodel;
      this.model.viewData.mcs_batteryserialnumber = data.model.mcs_motorserialnumber;
      this.model.viewData.mcs_carplate = data.model.mcs_vehplate;
      this.model.viewData.mcs_customername = data.model.mcs_fullname;
      this.model.viewData.mcs_customerphone = data.model.mcs_mobilephone;
      this.model.viewData.mcs_enginenumber = data.model.mcs_enginennumber;
      this.model.viewData.mcs_modifiedpartscontent = data.model.mcs_modifiedpartscontent;
      this.model.viewData.mcs_motormodel = data.model.mcs_motormodel;
      this.model.viewData.mcs_mileage = data.model.mcs_netmileage;
    }
  }

  presentModal(){

  }

  save(){
    this._page.loadingShow();
    //数据验证
    //请求
    this._http.post(
      this.model.postApiUrl, this.model.postData,
      (res: any) => {
        this._page.loadingHide();
      },
      (err: any) => {
          this._page.alert("消息提示", "请求异常");
          this._page.loadingHide();
      }
  );

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
