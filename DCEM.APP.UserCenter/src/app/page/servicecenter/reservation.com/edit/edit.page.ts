import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { DCore_Http, DCore_Page } from '../../../../../app/component/typescript/dcem.core';
import { SelectDealerComponent } from "app/component/modal/select-dealer/select-dealer.component";
import { SelectUsercarinfoComponent } from "app/component/modal/select-usercarinfo/select-usercarinfo.component";
import sd from 'silly-datetime';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { OptionSetService } from '../../../base/base.ser/optionset.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  model = {
    apiUrl: '/api/appointment-info/GetDetail',
    postApiUrl: '/Api/appointment-info/AddOrEdit',
    customerApiUrl: '/Api/Customer/GetCustomerInfo',
    apiConfigUrl: '/api/appointment-info/GetConfig',
    data: {
    },
    postData: {},
    systemuserid: "",//当前用户id
    mcs_dealerid: "",//当前厅店id
    appointmentinfoId: null,//当前记录id
    isOrderTypeChange: true,//是否改变预约类型
    isAppointmentAtChange: true,//是否改变预约日期
    isAppointmentConfigChange: true,//预约时段是否改变
    customerId: "",//客户ID
    appointmentConfigOptionMap: {},//预约时段
    ifAddOrEdit: false,//是否新增或编辑(控制页面title)
    orderTypeOption:[]//服务类型
};

objectKeys = Object.keys;
    //定义共享数据
    shareData = {
      appointmentinfo: {

      }
  }

  constructor(
    public _modalCtrl: ModalController,
    public _navCtrl: NavController,
    private _http: DCore_Http,
    private _page: DCore_Page,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
  }


   //筛选车辆
   public userCarOnClick() {
    this.UserCarPresentModal();
}

public saveOnClick(){

}

 //调用选择客户组件
 async UserCarPresentModal() {
  const modal = await this._modalCtrl.create({
      component: SelectUsercarinfoComponent
  });
  await modal.present();
  const { data } = await modal.onDidDismiss();
  if (data != null && typeof data != "undefined") {
      if (data.vehowne != null && typeof data.vehowne != "undefined") {
          console.log(data.vehowne);
          this.shareData.appointmentinfo["mcs_customerid"] = data.vehowne.vehownerid;
          this.shareData.appointmentinfo["mcs_customername"] = data.vehowne.fullname;
          this.shareData.appointmentinfo["mcs_carplate"] = data.vehowne.vehplate;
          this.shareData.appointmentinfo["mcs_customerphone"] = data.vehowne.mobilephone;
          this.shareData.appointmentinfo["mcs_cartype"] = data.vehowne.model["_mcs_vehtype_value"];
          //this.shareData.appointmentinfo["mcs_tag"] = "";
      }
  }
}

public appointmentConfigChange(){


}

public orderTypeChange(){

}

public appointmentAtChange(){

}
}
