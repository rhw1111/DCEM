import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { DCore_Http, DCore_Page,DCore_Valid } from '../../../../component/typescript/dcem.core';
import { SelectDealerComponent } from "app/component/modal/select-dealer/select-dealer.component";
import { SelectUsercarinfoComponent } from "app/component/modal/select-usercarinfo/select-usercarinfo.component";
import sd from 'silly-datetime';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OptionSetService } from '../../../../component/typescript/optionset.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  model = {
    apiUrl: 'api/uc-appointment-info/GetDetail',
    postApiUrl: 'Api/uc-appointment-info/AddOrEdit',
    customerApiUrl: 'Api/Customer/GetCustomerInfo',
    apiConfigUrl: 'api/uc-appointment-info/GetConfig',
    data: {
    },
    postData: {},
    mcs_userid: "",//当前用户id
    mcs_dealerid: "",//当前厅店id
    appointmentinfoId: null,//当前记录id
    isOrderTypeChange: true,//是否改变预约类型
    isAppointmentAtChange: true,//是否改变预约日期
    isAppointmentConfigChange: true,//预约时段是否改变
    customerId: "",//客户ID
    appointmentConfigOptionMap: {},//预约时段
    ifAddOrEdit: false,//是否新增或编辑(控制页面title)
    orderTypeOption: []//服务类型
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
    private _valid: DCore_Valid,
    private _optionset: OptionSetService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

    //服务类型
    this.model.orderTypeOption = this._optionset.Get("mcs_ordertype");
  }

  //筛选车辆
  public userCarOnClick() {
    this.UserCarPresentModal();
  }

  //筛选厅店
  public dealerOnClick() {
    this.DealerPresentModal();
  }

  public saveOnClick() {
    //表单校验
    if (this._valid.isNullOrEmpty(this.shareData.appointmentinfo["mcs_customerid"])) {
      this._page.presentToastError("请先选择车辆");
      return;
    }
    if (this._valid.isNullOrEmpty(this.shareData.appointmentinfo["mcs_ordertype"])) {
      this._page.presentToastError("请先选择预约类型");
      return;
    }
    if (this._valid.isNullOrEmpty(this.shareData.appointmentinfo["mcs_appointmentat"])) {
      this._page.presentToastError("请先选择预约日期");
      return;
    }
    if (this._valid.isNullOrEmpty(this.shareData.appointmentinfo["mcs_appointmentconfigid"])) {
      this._page.presentToastError("请先选择预约时段");
      return;
    }

    var date = new Date();
    if (this.FormatToDate(date) > this.FormatToDate(this.shareData.appointmentinfo["mcs_appointmentat"])) {
      this._page.presentToastError("预约日期必须大于当天日期");
      return;
    }

    this.model.postData["appointmentinfo"] = this.shareData.appointmentinfo;

    //组装预约单
    // this.model.postData["appointmentinfo"] = {};
    this.model.postData["appointmentinfo"]["mcs_appointmentinfoid"] = this.model.appointmentinfoId
    this.model.postData["appointmentinfo"]["mcs_ordertype"] = Number(this.shareData.appointmentinfo["mcs_ordertype"]);//预约服务类型
    this.model.postData["appointmentinfo"]["mcs_surplusnum"] = Number(this.shareData.appointmentinfo["mcs_surplusnum"]);//可预约数量
    // this.model.postData["appointmentinfo"]["mcs_customerid"] = this.shareData.appointmentinfo["mcs_customerid"]; // VIN码关联实体ID
    // this.model.postData["appointmentinfo"]["mcs_customername"] = this.shareData.appointmentinfo["mcs_username"];// 车主
    // this.model.postData["appointmentinfo"]["mcs_carplate"] = this.shareData.appointmentinfo["mcs_plate"];// 车牌
    // this.model.postData["appointmentinfo"]["mcs_cartype"] = this.shareData.appointmentinfo["mcs_cartype"];// 车型
    // this.model.postData["appointmentinfo"]["mcs_customerphone"] = this.shareData.appointmentinfo["mcs_phone"];//手机号
    // this.model.postData["appointmentinfo"]["mcs_tag"] = this.shareData.appointmentinfo["mcs_tag"];//客户标签
    // this.model.postData["appointmentinfo"]["mcs_appointmentat"] = this.shareData.appointmentinfo["mcs_appointmentat"];//预约日期
    // this.model.postData["appointmentinfo"]["mcs_appointmentconfigid"] = this.shareData.appointmentinfo["mcs_appointmentconfigid"];//预约时段
    // this.model.postData["appointmentinfo"]["mcs_customercomment"] = this.shareData.appointmentinfo["mcs_customercomment"];//客户要求
    // this.model.postData["appointmentinfo"]["mcs_appointmendescript"] = this.shareData.appointmentinfo["mcs_appointmendescript"];//问题描述

    this._page.loadingShow();
    console.log(this.model.postData);
    this._http.post(
      this.model.postApiUrl, this.model.postData,
      (res: any) => {
        this._page.loadingHide();
        if (res.Result == true) {
          var guid = res["Data"]["Id"];
          this._page.goto("/page/servicecenter/reservation/success", { guid: guid });
        }
        else {
          this._page.alert("消息提示", "操作失败");
          this._page.loadingHide();
        }
      },
      (err: any) => {
        this._page.loadingHide();
        this._page.alert("消息提示", "操作失败");
      }
    );
  }

  //调用选择用户车辆
  async UserCarPresentModal() {
    //  debugger;
    const modal = await this._modalCtrl.create({
      component: SelectUsercarinfoComponent,
      componentProps: {
        'mcs_userid': this.model.mcs_userid,
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data != null && typeof data != "undefined") {
      if (data.usercarinfo != null && typeof data.usercarinfo != "undefined") {
        console.log(data.usercarinfo);
        this.shareData.appointmentinfo["mcs_usercarinfoid"] = data.usercarinfo.mcs_usercarinfoid;
        this.shareData.appointmentinfo["mcs_customername"] = data.usercarinfo.mcs_username;
        this.shareData.appointmentinfo["mcs_customerphone"] = data.usercarinfo.mcs_phone;
        this.shareData.appointmentinfo["mcs_carplate"] = data.usercarinfo.mcs_plate;
        this.shareData.appointmentinfo["mcs_customerid"] = data.usercarinfo.mcs_carinfoid;
        this.shareData.appointmentinfo["mcs_cartype"] = data.usercarinfo.model['_mcs_model_value'];
      }
    }
  }

  //选择厅店
  async DealerPresentModal() {
    // debugger;
    const modal = await this._modalCtrl.create({
      component: SelectDealerComponent
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data != null && typeof data != "undefined") {
      if (data != null && typeof data != "undefined") {
        //厅店改变时触发
        if (this.shareData.appointmentinfo["mcs_dealerid"] != data.id) {
          this.dealerOnChange()
        }
        // console.log(data);
        this.shareData.appointmentinfo["mcs_dealerid"] = data.id;
        this.shareData.appointmentinfo["mcs_dealername"] = data.name;
        this.shareData.appointmentinfo["mcs_shopaddress"] = data.shopaddress != undefined ? "地址：" + data.shopaddress : "地址：";
        this.shareData.appointmentinfo["mcs_dealerphone"] = data.phone != undefined ? "电话：" + data.phone : "电话：";
      }
    }

  }

  //厅店是否改变，获取厅店预约信息
  public dealerOnChange() {
    this.model.appointmentConfigOptionMap = {};
    this.shareData.appointmentinfo['mcs_appointmentconfigid'] = null;
    this.shareData.appointmentinfo["mcs_surplusnum"] = null;
    var ordertype = this.shareData.appointmentinfo["mcs_ordertype"];//服务类型
    var appointmentat = this.FormatToDate(this.shareData.appointmentinfo["mcs_appointmentat"]);//预约日期
    var dealerid = this.shareData.appointmentinfo["mcs_dealerid"];
    if (ordertype != "" && appointmentat != "" && dealerid != "") {
      //处理预约时段
      this.AppointmentConfigOption(ordertype, appointmentat, dealerid);
    }

  }

  //服务类型改变事件
  public orderTypeChange() {
    if (this.model.isOrderTypeChange) {
      this.model.appointmentConfigOptionMap = {};
      this.shareData.appointmentinfo['mcs_appointmentconfigid'] = null;
      this.shareData.appointmentinfo["mcs_surplusnum"] = null;
      var ordertype = this.shareData.appointmentinfo["mcs_ordertype"];//服务类型
      var appointmentat = this.FormatToDate(this.shareData.appointmentinfo["mcs_appointmentat"]);//预约日期
      var dealerid = this.shareData.appointmentinfo["mcs_dealerid"];
      if (ordertype != "" && appointmentat != "" && dealerid != "") {
        //处理预约时段
        this.AppointmentConfigOption(ordertype, appointmentat, dealerid);
      }
    }
    this.model.isOrderTypeChange = true;

  }

  //预约日期改变
  appointmentAtChange() {
    if (this.model.isAppointmentAtChange) {
      var date = new Date();
      if (this.FormatToDate(date) > this.FormatToDate(this.shareData.appointmentinfo["mcs_appointmentat"])) {
        this._page.presentToastError("预约日期必须大于当天日期");
      }
      this.shareData.appointmentinfo["mcs_appointmentconfigid"] = null;
      this.shareData.appointmentinfo["mcs_surplusnum"] = null;
      this.model.appointmentConfigOptionMap = {};

      var ordertype = this.shareData.appointmentinfo["mcs_ordertype"];
      var appointmentat = this.FormatToDate(this.shareData.appointmentinfo["mcs_appointmentat"]);
      var dealerid = this.shareData.appointmentinfo["mcs_dealerid"];
      if (ordertype != "" && appointmentat != "") {
        //处理预约时段
        this.AppointmentConfigOption(ordertype, appointmentat, dealerid);
      }
    }
    this.model.isAppointmentAtChange = true;
  }

  //日期格式
  FormatToDate(date) {
    if (date != null && date != undefined) {
      return sd.format(date, 'YYYY-MM-DD');
    }
    else {
      return '';
    }
  }

  //时段获取数量
  public appointmentConfigChange() {
    var key = this.shareData.appointmentinfo["mcs_appointmentconfigid"];
    this.shareData.appointmentinfo["mcs_surplusnum"] = this.model.appointmentConfigOptionMap[key]["mcs_surplusnum"];
  }

  //获取预约时段
  public AppointmentConfigOption(ordertype, appointmentat, dealerid) {

    this.model.appointmentConfigOptionMap = {};
    this._http.get(
      this.model.apiConfigUrl,
      {
        params: {
          mcs_servetype: ordertype,
          mcs_servedate: appointmentat,
          mcs_dealerid: dealerid
        }
      },
      (res: any) => {
        if (res.Results !== null) {
          for (var key in res.Results) {
            var obj = {};
            var mapkey = res.Results[key]["Attributes"]["mcs_appointmentconfigid"];
            console.log(res.Results[key]);
            obj["value"] = res.Results[key]["Attributes"]["mcs_appointmentconfigid"];
            obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
            obj["mcs_surplusnum"] = res.Results[key]["Attributes"]["mcs_surplusnum"];
            this.model.appointmentConfigOptionMap[mapkey] = obj;
          }
        }
        else {
          this._page.alert("消息提示", "预约时段数据加载异常");
        }
      },
      (err: any) => {
        this._page.alert("消息提示", "预约时段数据加载异常");
      }
    );

  }
}
