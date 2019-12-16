import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalController, NavController, IonBackButton, IonBackButtonDelegate } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData } from '../../../../component/typescript/dcem.core';
import { SelectDealerListComponent } from "app/component/modal/select-dealer-list/select-dealer-list.component"
import { SelectUsercarinfoComponent } from "app/component/modal/select-usercarinfo/select-usercarinfo.component";
import sd from 'silly-datetime';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OptionSetService } from '../../../../component/typescript/optionset.service';
import { Storage_LoginInfo } from '../../../../component/typescript/logininfo.storage';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  @ViewChild(IonBackButton, null) ionBackButton: IonBackButton;
  @ViewChild(IonBackButtonDelegate, null) ionBackButtonDelegate: IonBackButtonDelegate;
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
    ifAddOrEdit: false,//是否新增或编辑(控制页面title)
    ifSelectMileage: false,//是否选择了推荐包
    shareDataKey: "reservationEditData",//共享对象
    totalCost: 0,//服务总额
    totalTime: 0,//服务耗时时间
    bindPackOptionMap: null,//获取订单推荐服务包
    bindOtherPackOptionMap: null,//获取订单推荐服务包
  };

  objectKeys = Object.keys;
  //定义共享数据
  shareData = {
    appointmentinfo: {},
    orderTypeOption: [],//服务类型
    mileageOption: [],//里程
    packOptionMap: {},//里程推荐服务包
    packOtherOptionMap: {},//其他服务包
    appointmentConfigOptionMap: {},//预约时段
    choicePackOptionMap: {},//选择里程推荐服务
    choicepackOtherOptionMap: {},//选择其他服务包
  }

  constructor(
    public _modalCtrl: ModalController,
    public _navCtrl: NavController,
    private _http: DCore_Http,
    private _page: DCore_Page,
    private _activeRoute: ActivatedRoute,
    private _valid: DCore_Valid,
    private _logininfo: Storage_LoginInfo,
    private _shareData: DCore_ShareData,
    private _optionset: OptionSetService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

    //校验登录
    var logininfo=this._logininfo.GetUserInfo();
    if(logininfo==null||logininfo==undefined){
      this._page.goto("/servicecenter/reservation/confirmedit");
    }

    //服务类型
    this.shareData.orderTypeOption = this._optionset.Get("mcs_ordertype");

    //里程数据
    this.MileageOption();

    //其他服务包
    this.PackOtherOption();
    this._activeRoute.queryParams.subscribe((params: Params) => {
      // debugger;
      if (this._shareData.has(this.model.shareDataKey)) {
        this.shareData = this._shareData.get(this.model.shareDataKey);
      }

      //编辑绑定预约单数据
      if (params['id'] != null && params['id'] != undefined) {
        this.model.appointmentinfoId = params['id'];
        this.pageOnBind(this.model.appointmentinfoId);

        this.model.ifAddOrEdit = true;
      }
    });

    this.model.mcs_userid = this._logininfo.GetSystemUserId();

    if (this.shareData.appointmentinfo["totalcost"] == undefined) {
      this.shareData.appointmentinfo["totalcost"] = 0;
    }
    if (this.shareData.appointmentinfo["totaltime"] == undefined) {
      this.shareData.appointmentinfo["totaltime"] = 0;
    }
  }

  //确认订单
  public confirmOnClick() {
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
    console.log(this.shareData);
    this._shareData.set(this.model.shareDataKey, this.shareData);
    this._page.goto("/servicecenter/reservation/confirmedit");
  }


  //编辑绑定数据
  pageOnBind(id: any) {
    this._page.loadingShow();
    this._http.get(
      this.model.apiUrl,
      {
        params: {
          entityid: id,
        }
      },
      (res: any) => {
        if (res !== null) {

          this.model.isAppointmentAtChange = false;
          this.model.isOrderTypeChange = false;

          this.shareData.appointmentinfo["mcs_appointmentinfoid"] = res.Id;
          this.shareData.appointmentinfo["mcs_customername"] = res["Attributes"]["mcs_customername"];
          this.shareData.appointmentinfo["mcs_carplate"] = res["Attributes"]["mcs_carplate"];
          this.shareData.appointmentinfo["mcs_customerphone"] = res["Attributes"]["mcs_customerphone"];
          this.shareData.appointmentinfo["mcs_tag"] = res["Attributes"]["mcs_tag"];
          this.shareData.appointmentinfo["mcs_ordertype"] = String(res["Attributes"]["mcs_ordertype"]);
          this.shareData.appointmentinfo["mcs_appointmentat"] = res["Attributes"]["mcs_appointmentat"];
          this.shareData.appointmentinfo["mcs_appointmentconfigname"] = res["Attributes"]["mcs_appointmentconfigid"] != null ? res["Attributes"]["mcs_appointmentconfigid"]["mcs_name"] : null;
          this.shareData.appointmentinfo["mcs_surplusnum"] = res["Attributes"]["mcs_appointmentconfigid"] != null ? res["Attributes"]["mcs_appointmentconfigid"]["mcs_surplusnum"] : 0;
          this.shareData.appointmentinfo["mcs_customercomment"] = res["Attributes"]["mcs_customercomment"];
          this.shareData.appointmentinfo["mcs_appointmendescript"] = res["Attributes"]["mcs_appointmendescript"];
          // this.shareData.appointmentinfo["mcs_appointmentconfigid"] = res["Attributes"]["_mcs_appointmentconfigid_value"];
          this.shareData.appointmentinfo["mcs_customerid"] = res["Attributes"]["_mcs_customerid_value"];
          this.shareData.appointmentinfo["mcs_dealerid"] = res["Attributes"]["_mcs_dealerid_value"];
          this.shareData.appointmentinfo["mcs_dealername"] = res["Attributes"]["mcs_dealerid"] != null ? res["Attributes"]["mcs_dealerid"]["mcs_name"] : null;
          this.shareData.appointmentinfo["mcs_shopaddress"] = res["Attributes"]["mcs_dealerid"] != null ? res["Attributes"]["mcs_dealerid"]["mcs_shopaddress"] : null;
          this.shareData.appointmentinfo["mcs_dealerphone"] = res["Attributes"]["mcs_dealerid"] != null ? res["Attributes"]["mcs_dealerid"]["mcs_phone"] : null;

          var ordertype = this.shareData.appointmentinfo["mcs_ordertype"];
          var appointmentat = this.FormatToDate(this.shareData.appointmentinfo["mcs_appointmentat"]);
          var dealerid = this.shareData.appointmentinfo["mcs_dealerid"];
          //处理预约时段
          this.AppointmentConfigOption(ordertype, appointmentat, dealerid, res["Attributes"]["_mcs_appointmentconfigid_value"]);


          //处理里程、推荐服务、其他服务(假数据)


          this.model.bindPackOptionMap = {};
          var obj1 = {};
          obj1["value"] = "4";
          var mapkey1 = obj1["value"];
          obj1["name"] = "更换轮胎";
          obj1["price"] = 500;
          obj1["time"] = 20;
          obj1["ischecked"] = true;
          this.model.bindPackOptionMap[mapkey1] = obj1;

          var obj2 = {};
          obj2["value"] = "5";
          var mapkey2 = obj2["value"];
          obj2["name"] = "常规汽车检测";
          obj2["price"] = 100;
          obj2["time"] = 25;
          obj2["ischecked"] = true;
          this.model.bindPackOptionMap[mapkey2] = obj2;

          this.model.bindOtherPackOptionMap = {};
          var obj2 = {};
          obj2["value"] = "2";
          var mapkey2 = obj2["value"];
          obj2["name"] = "更换火花塞";
          obj2["price"] = 200;
          obj2["time"] = 15;
          obj2["ischecked"] = true;
          this.model.bindOtherPackOptionMap[mapkey2] = obj2;

          var obj3 = {};
          obj3["value"] = "3";
          var mapkey3 = obj3["value"];
          obj3["name"] = "汽车检测";
          obj3["price"] = 200;
          obj3["time"] = 15;
          obj3["ischecked"] = true;
          this.model.bindOtherPackOptionMap[mapkey3] = obj3;
          this.DoOtherPacks(this.model.bindOtherPackOptionMap);
          
          this.shareData.appointmentinfo['mcs_mileageid'] = "2";
        }
        else {
          this._page.alert("消息提示", "预约单加载异常");
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "数据加载异常");
        this._page.loadingHide();
      }
    );
  }


  //筛选车辆
  public userCarOnClick() {
    this.UserCarPresentModal();
  }

  //筛选厅店
  public dealerOnClick() {
    this.DealerPresentModal();
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
      component: SelectDealerListComponent
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
    // this.shareData.appointmentConfigOptionMap = {};
    this.shareData.appointmentinfo['mcs_appointmentconfigid'] = null;
    this.shareData.appointmentinfo["mcs_surplusnum"] = null;
    var ordertype = this.shareData.appointmentinfo["mcs_ordertype"];//服务类型
    var appointmentat = this.FormatToDate(this.shareData.appointmentinfo["mcs_appointmentat"]);//预约日期
    var dealerid = this.shareData.appointmentinfo["mcs_dealerid"];
    if (ordertype != undefined && appointmentat != undefined && dealerid != undefined) {
      //处理预约时段
      this.AppointmentConfigOption(ordertype, appointmentat, dealerid, null);
    }
  }

  //服务类型改变事件
  public orderTypeChange() {
    if (this.model.isOrderTypeChange) {
      // this.model.appointmentConfigOptionMap = {};
      this.shareData.appointmentinfo['mcs_appointmentconfigid'] = null;
      this.shareData.appointmentinfo["mcs_surplusnum"] = null;
      var ordertype = this.shareData.appointmentinfo["mcs_ordertype"];//服务类型
      var appointmentat = this.FormatToDate(this.shareData.appointmentinfo["mcs_appointmentat"]);//预约日期
      var dealerid = this.shareData.appointmentinfo["mcs_dealerid"];
      if (ordertype != undefined && appointmentat != undefined && dealerid != undefined) {
        //处理预约时段
        this.AppointmentConfigOption(ordertype, appointmentat, dealerid, null);
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
      // this.model.appointmentConfigOptionMap = {};

      var ordertype = this.shareData.appointmentinfo["mcs_ordertype"];
      var appointmentat = this.FormatToDate(this.shareData.appointmentinfo["mcs_appointmentat"]);
      var dealerid = this.shareData.appointmentinfo["mcs_dealerid"];
      if (ordertype != undefined && appointmentat != undefined) {
        //处理预约时段
        this.AppointmentConfigOption(ordertype, appointmentat, dealerid, null);
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
    this.shareData.appointmentinfo["mcs_surplusnum"] = this.shareData.appointmentConfigOptionMap[key]["mcs_surplusnum"];
  }

  //获取预约时段
  public AppointmentConfigOption(ordertype, appointmentat, dealerid, appointmentconfigid) {

    this.shareData.appointmentConfigOptionMap = {};
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
            this.shareData.appointmentConfigOptionMap[mapkey] = obj;
          }
          if (appointmentconfigid != null) {
            this.shareData.appointmentinfo["mcs_appointmentconfigid"] = appointmentconfigid;
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

  //获取里程
  public MileageOption() {

    this.shareData.mileageOption = [];
    var obj = {};
    obj["value"] = "1";
    obj["name"] = "10000公里";
    this.shareData.mileageOption.push(obj);

    var obj2 = {};
    obj2["value"] = "2";
    obj2["name"] = "20000公里";
    this.shareData.mileageOption.push(obj2);

    var obj3 = {};
    obj3["value"] = "3";
    obj3["name"] = "30000公里";
    this.shareData.mileageOption.push(obj3);

    var obj4 = {};
    obj4["value"] = "4";
    obj4["name"] = "40000公里";
    this.shareData.mileageOption.push(obj4);

    var obj5 = {};
    obj5["value"] = "5";
    obj5["name"] = "50000公里";
    this.shareData.mileageOption.push(obj5);

    var obj6 = {};
    obj6["value"] = "6";
    obj6["name"] = "50000公里以上";
    this.shareData.mileageOption.push(obj6);

    // this._http.get(
    //   this.model.apiMileageUrl,
    //   {
    //     params: {
    //       mcs_dealerid: dealerid
    //     }
    //   },
    //   (res: any) => {
    //     if (res.Results !== null) {
    //       for (var key in res.Results) {
    //         var obj = {};
    //         obj["value"] = res.Results[key]["Attributes"][""];
    //         obj["name"] = res.Results[key]["Attributes"][""];
    //         this.model.mileageOption.push(obj);
    //       }
    //     }
    //     else {
    //       this._page.alert("消息提示", "里程数据加载异常");
    //     }
    //   },
    //   (err: any) => {
    //     this._page.alert("消息提示", "里程数据加载异常");
    //   }
    // );
  }

  //获取里程对应的推荐服务包
  public MileageChange() {
    // debugger;
    var mileageid = this.shareData.appointmentinfo['mcs_mileageid']
    if (mileageid != undefined) {
      this.shareData.packOptionMap = {};
      if (mileageid == "1" || mileageid == "3" || mileageid == "5") {
        var obj1 = {};
        obj1["value"] = "1";
        var mapkey1 = obj1["value"];
        obj1["name"] = "更换机油机速";
        obj1["price"] = 100;
        obj1["time"] = 20;
        obj1["ischecked"] = false;
        this.shareData.packOptionMap[mapkey1] = obj1;

        var obj2 = {};
        obj2["value"] = "2";
        var mapkey2 = obj2["value"];
        obj2["name"] = "更换燃油滤清器";
        obj2["price"] = 200;
        obj2["time"] = 25;
        obj2["ischecked"] = false;
        this.shareData.packOptionMap[mapkey2] = obj2;

        var obj3 = {};
        obj3["value"] = "3";
        var mapkey3 = obj3["value"];
        obj3["name"] = "更换空气滤清器";
        obj3["price"] = 280;
        obj3["time"] = 15;
        obj3["ischecked"] = false;
        this.shareData.packOptionMap[mapkey3] = obj3;
      }

      if (mileageid == "2" || mileageid == "4" || mileageid == "6") {
        var obj1 = {};
        obj1["value"] = "4";
        var mapkey1 = obj1["value"];
        obj1["name"] = "更换轮胎";
        obj1["price"] = 500;
        obj1["time"] = 20;
        obj1["ischecked"] = false;
        this.shareData.packOptionMap[mapkey1] = obj1;

        var obj2 = {};
        obj2["value"] = "5";
        var mapkey2 = obj2["value"];
        obj2["name"] = "常规汽车检测";
        obj2["price"] = 100;
        obj2["time"] = 25;
        obj2["ischecked"] = false;
        this.shareData.packOptionMap[mapkey2] = obj2;

        var obj3 = {};
        obj3["value"] = "6";
        var mapkey3 = obj3["value"];
        obj3["name"] = "发动机检查";
        obj3["price"] = 200;
        obj3["time"] = 15;
        obj3["ischecked"] = false;
        this.shareData.packOptionMap[mapkey3] = obj3;
      }

      //显示推荐包内容
      this.model.ifSelectMileage = true;


      this.DoPacks(this.model.bindPackOptionMap);

      // this._http.get(
      //   this.model.apiPackUrl,
      //   {
      //     params: {
      //       mcs_mileageid: mileageid,
      //     }
      //   },
      //   (res: any) => {
      //     if (res.Results !== null) {
      //       for (var key in res.Results) {
      //         var obj = {};
      //         var mapkey = res.Results[key]["Attributes"]["mcs_packid"];
      //         console.log(res.Results[key]);
      //         obj["value"] = res.Results[key]["Attributes"]["mcs_packid"];
      //         obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
      //         obj["price"] = res.Results[key]["Attributes"]["mcs_price"];
      //         this.model.packOptionMap[mapkey] = obj;
      //       }
      //     }
      //     else {
      //       this._page.alert("消息提示", "推荐服务包数据加载异常");
      //     }
      //   },
      //   (err: any) => {
      //     this._page.alert("消息提示", "推荐服务包加载异常");
      //   }
      // );
    }
  }

  //其他服务包
  public PackOtherOption() {
    this.shareData.packOtherOptionMap = {};
    var obj1 = {};
    obj1["value"] = "1";
    var mapkey1 = obj1["value"];
    obj1["name"] = "取送车";
    obj1["price"] = 0;
    obj1["time"] = 15;
    obj1["ischecked"] = false;
    this.shareData.packOtherOptionMap[mapkey1] = obj1;

    var obj2 = {};
    obj2["value"] = "2";
    var mapkey2 = obj2["value"];
    obj2["name"] = "更换火花塞";
    obj2["price"] = 200;
    obj2["time"] = 15;
    obj2["ischecked"] = false;
    this.shareData.packOtherOptionMap[mapkey2] = obj2;

    var obj3 = {};
    obj3["value"] = "3";
    var mapkey3 = obj3["value"];
    obj3["name"] = "汽车检测";
    obj3["price"] = 200;
    obj3["time"] = 15;
    obj3["ischecked"] = false;
    this.shareData.packOtherOptionMap[mapkey3] = obj3;

    var obj4 = {};
    obj4["value"] = "4";
    var mapkey4 = obj4["value"];
    obj4["name"] = "更换制动液";
    obj4["price"] = 150;
    obj4["time"] = 15;
    obj4["ischecked"] = false;
    this.shareData.packOtherOptionMap[mapkey4] = obj4;
  }

  //推荐服务包数据选择
  public checkPackClick(event) {
    //  debugger;
    var checkstatus = event.detail.checked;
    var key = event.detail.value;
    if (checkstatus) {
      var obj = this.shareData.packOptionMap[key];
      this.shareData.choicePackOptionMap[key] = obj;
      this.model.totalCost += obj["price"];
      this.model.totalTime += obj["time"];
    }
    else {
      if (this.shareData.choicePackOptionMap.hasOwnProperty(key)) {
        var obj = this.shareData.choicePackOptionMap[key];
        this.model.totalCost -= obj["price"];
        this.model.totalTime -= obj["time"];
        delete this.shareData.choicePackOptionMap[key];
      }
    }

    this.shareData.appointmentinfo["totalcost"] = this.model.totalCost;
    this.shareData.appointmentinfo["totaltime"] = this.model.totalTime;

  }

  //其他服务包数据选择
  public checkOtherPackClick(event) {
    //  debugger;
    var checkstatus = event.detail.checked;
    var key = event.detail.value;
    if (checkstatus) {
      var obj = this.shareData.packOtherOptionMap[key];
      this.model.totalCost += obj["price"];
      this.model.totalTime += obj["time"];
      this.shareData.choicepackOtherOptionMap[key] = obj;
    }
    else {
      if (this.shareData.packOtherOptionMap.hasOwnProperty(key)) {
        var obj = this.shareData.choicepackOtherOptionMap[key];
        this.model.totalCost -= obj["price"];
        this.model.totalTime -= obj["time"];
        delete this.shareData.choicepackOtherOptionMap[key];
      }
    }
    this.shareData.appointmentinfo["totalcost"] = this.model.totalCost;
    this.shareData.appointmentinfo["totaltime"] = this.model.totalTime;
  }


  public DoPacks(bindPackOptionMap) {
    if (bindPackOptionMap != null) {
      for (const key in this.model.bindPackOptionMap) {
        if (this.model.bindPackOptionMap.hasOwnProperty(key)) {
          this.shareData.packOptionMap[key]["ischecked"] = this.model.bindPackOptionMap[key]["ischecked"];
        }
      }

    }
  }


  public DoOtherPacks(bindOtherPackOptionMap) {
    if (bindOtherPackOptionMap != null) {
      for (const key in this.model.bindOtherPackOptionMap) {
        if (this.model.bindOtherPackOptionMap.hasOwnProperty(key)) {
          this.shareData.packOtherOptionMap[key]["ischecked"] = this.model.bindOtherPackOptionMap[key]["ischecked"];
        }
      }

    }
  }
}
