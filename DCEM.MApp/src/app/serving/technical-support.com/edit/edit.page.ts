import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ModalController } from '@ionic/angular';
import { ScSelectComponent } from 'app/serving/serving.ser/components/sc-select/sc-select.component';
import { SelectCustomerComponent } from 'app/serving/serving.ser/components/select-customer/select-customer.component';
import{SelectMalFunctionTypeComponent} from'app/serving/serving.ser/components/select-malfunctiontype/select.malfunctiontype.component';
import { mcall } from 'q';
import { noUndefined } from '@angular/compiler/src/util';
import { debug } from 'util';

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
      mcs_mileage:0,
      mcs_malfunctiontype_value:''//故障类别代码
    },
    postData:{
      EntityName:"mcs_supportorder",
      Id:'',//主键ID
      mcs_title:'',//主题
      mcs_repairnameid:'',
      mcs_serviceadvisorid:'',//服务顾问
      mcs_serviceorderid:'',//服务委托书GUid
      mcs_email:'',
      mcs_phone:'',
      mcs_customerid:'',//客户-VIN
      mcs_ismodifiedparts:false,
      mcs_malfunctiontypeid:'',
      mcs_diagnosiscontent:'',//诊断描述
      mcs_malfunctioncontent:'',
      mcs_replacedparts:'',
      mcs_techqueries:'',//技师疑问
      mcs_techsystem:0//技术系统
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
    debugger;
    if (data != null && data != undefined) {
      var serviceproxymodel=data.model;
      this.model.postData.mcs_serviceorderid = data.id;
      this.model.viewData.mcs_serviceorderid_name = data.name;
      //绑定车辆信息
      if(serviceproxymodel!=null && serviceproxymodel!=undefined){
        this.model.postData.mcs_customerid = serviceproxymodel.mcs_vehownerid;
        this.model.viewData.vin=serviceproxymodel.mcs_name;
        if(serviceproxymodel.mcs_batterymodel!=undefined){
          this.model.viewData.mcs_batterymodel = serviceproxymodel.mcs_batterymodel;
        }
        if(serviceproxymodel.mcs_motorserialnumber!=undefined){
          this.model.viewData.mcs_batteryserialnumber = serviceproxymodel.mcs_motorserialnumber;
        }
        if(serviceproxymodel.mcs_vehplate!=undefined){
          this.model.viewData.mcs_carplate = serviceproxymodel.mcs_vehplate;
        }
        if(serviceproxymodel.mcs_fullname!=undefined){
          this.model.viewData.mcs_customername = serviceproxymodel.mcs_fullname;
        }
        if(serviceproxymodel.mcs_mobilephone!=undefined){
          this.model.viewData.mcs_customerphone = serviceproxymodel.mcs_mobilephone;
        }
        if(serviceproxymodel.mcs_enginennumber!=undefined){
          this.model.viewData.mcs_enginenumber = serviceproxymodel.mcs_enginennumber;
        }
        if(serviceproxymodel.mcs_modifiedpartscontent!=undefined){
          this.model.viewData.mcs_modifiedpartscontent = serviceproxymodel.mcs_modifiedpartscontent;
        }
        if(serviceproxymodel.mcs_motormodel!=undefined){
          this.model.viewData.mcs_motormodel = serviceproxymodel.mcs_motormodel;
        }
        if(serviceproxymodel.mcs_netmileage!=undefined){
          this.model.viewData.mcs_mileage =serviceproxymodel.mcs_netmileage;
        }
      }  
      
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
      var customerModel=data.vehowne.model;
      if(customerModel!=null && customerModel!=undefined){
        this.model.postData.mcs_customerid = customerModel.mcs_vehownerid;
        this.model.viewData.vin=customerModel.mcs_name;
        if(customerModel.mcs_batterymodel!=undefined){
          this.model.viewData.mcs_batterymodel = customerModel.mcs_batterymodel;
        }
        if(customerModel.mcs_motorserialnumber!=undefined){
          this.model.viewData.mcs_batteryserialnumber = customerModel.mcs_motorserialnumber;
        }
        if(customerModel.mcs_vehplate!=undefined){
          this.model.viewData.mcs_carplate = customerModel.mcs_vehplate;
        }
        if(customerModel.mcs_fullname!=undefined){
          this.model.viewData.mcs_customername = customerModel.mcs_fullname;
        }
        if(customerModel.mcs_mobilephone!=undefined){
          this.model.viewData.mcs_customerphone = customerModel.mcs_mobilephone;
        }
        if(customerModel.mcs_enginennumber!=undefined){
          this.model.viewData.mcs_enginenumber = customerModel.mcs_enginennumber;
        }
        if(customerModel.mcs_modifiedpartscontent!=undefined){
          this.model.viewData.mcs_modifiedpartscontent = customerModel.mcs_modifiedpartscontent;
        }
        if(customerModel.mcs_motormodel!=undefined){
          this.model.viewData.mcs_motormodel = customerModel.mcs_motormodel;
        }
        if(customerModel.mcs_netmileage!=undefined){
          this.model.viewData.mcs_mileage =customerModel.mcs_netmileage;
        }
      }  
    }
  }

  async presentMalFunctionTypeModal(){
     
    const modal = await this.modalCtrl.create({
      component: SelectMalFunctionTypeComponent
    });
    await modal.present();
    //监听销毁的事件
    const { data } = await modal.onDidDismiss();
    debugger;
    if (data != null && data != undefined) { 
      this.model.postData.mcs_malfunctiontypeid = data.id;
      this.model.viewData.mcs_malfunctiontype_value = data.name; 
    }
  }

  save(){
    this._page.loadingShow();
    //数据验证
    //请求
    this._http.post(
      this.model.postApiUrl, this.model.postData,
      (res: any) => {
        if(res!=""){
          debugger;
          this._page.alert("消息提示", "保存成功",function(){
            this._page.goto("/serving/ts/success", { guid: res });
          });
        }
        else{

        }
        this._page.loadingHide();
      },
      (err: any) => {
        debugger;
          this._page.alert("消息提示", "请求异常");
          this._page.loadingHide();
      }
  );

  }
  
  changePhone(value) {
    // 去除空格
    if(value!=null && value!=""){
      const phone = value.replace(/\s/g, '');
      const ischeck = /^(13[0-9]|14[5|7|9]|15[0|1|2|3|5|6|7|8|9]|16[6]|17[0|1|2|3|5|6|7|8]|18[0-9]|19[8|9])\d{8}$/;
      if (!ischeck.test(phone)) {
        this.model.phone = '';
        //super.showToast(this.toastCtrl, '请输入正确的手机号');
      }
    }
  }

  changeEmail(value) {
    if(value!=null && value!=""){
      const ischeck = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value);
      if (!ischeck) {
        this.model.email = '';
        //super.showToast(this.toastCtrl, '请输入正确的邮箱格式');
      }
    }
  }
}
