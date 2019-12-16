import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData } from '../../../../component/typescript/dcem.core';
import sd from 'silly-datetime';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Storage_LoginInfo } from '../../../../component/typescript/logininfo.storage';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  model = {
    apiUrl: 'api/uc-appointment-info/GetDetail',
    appointmentinfoId: "",
    bindData: {},//页面绑定数据
    packsMap:{},//服务包
    totalCost:0,//服务包总额
    totalTime:0,//服务包耗时
    bindPackOptionMap: null,//获取订单推荐服务包
    bindOtherPackOptionMap: null,//获取订单推荐服务包
    ifCanEdit:false//记录预约状态 10-待跟进、20-已跟进
  }

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
  ) { }

  ngOnInit() {
  }


  ionViewWillEnter() {
    // debugger;
    //里程数据
    this.MileageOption();

    //其他服务包
    this.PackOtherOption();
    this._activeRoute.queryParams.subscribe((params: Params) => {
      //编辑绑定预约单数据
      if (params['id'] != null && params['id'] != undefined) {
        this.model.appointmentinfoId = params['id'];
        this.pageOnBind(this.model.appointmentinfoId);
      }
    });
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

          this.model.bindData["mcs_appointmentinfoid"] = res.Id;
          this.model.bindData["mcs_customername"] = res["Attributes"]["mcs_customername"];
          this.model.bindData["mcs_name"] = res["Attributes"]["mcs_name"];
          this.model.bindData["mcs_carplate"] = res["Attributes"]["mcs_carplate"];
          this.model.bindData["mcs_customerphone"] = res["Attributes"]["mcs_customerphone"];
          this.model.bindData["mcs_status"] = res["Attributes"]["mcs_status"];
          this.model.bindData["mcs_statusvale"] = res["Attributes"]["mcs_status@OData.Community.Display.V1.FormattedValue"];
          this.model.bindData["mcs_ordertype"] = String(res["Attributes"]["mcs_ordertype"]);
          this.model.bindData["mcs_ordertypename"] = res["Attributes"]["mcs_ordertype@OData.Community.Display.V1.FormattedValue"];
          this.model.bindData["mcs_appointmentat"] = res["Attributes"]["mcs_appointmentat"];
          this.model.bindData["mcs_appointmentconfigname"] = res["Attributes"]["mcs_appointmentconfigid"] != null ? res["Attributes"]["mcs_appointmentconfigid"]["mcs_name"] : null;
          this.model.bindData["mcs_surplusnum"] = res["Attributes"]["mcs_appointmentconfigid"] != null ? res["Attributes"]["mcs_appointmentconfigid"]["mcs_surplusnum"] : 0;
          this.model.bindData["mcs_customercomment"] = res["Attributes"]["mcs_customercomment"];
          this.model.bindData["mcs_appointmendescript"] = res["Attributes"]["mcs_appointmendescript"];
          this.model.bindData["mcs_customerid"] = res["Attributes"]["_mcs_customerid_value"];
          this.model.bindData["mcs_dealerid"] = res["Attributes"]["_mcs_dealerid_value"];
          this.model.bindData["mcs_dealername"] = res["Attributes"]["mcs_dealerid"] != null ? res["Attributes"]["mcs_dealerid"]["mcs_name"] : null;
          this.model.bindData["mcs_shopaddress"] = res["Attributes"]["mcs_dealerid"] != null ? res["Attributes"]["mcs_dealerid"]["mcs_shopaddress"] : null;
          this.model.bindData["mcs_dealerphone"] = res["Attributes"]["mcs_dealerid"] != null ? res["Attributes"]["mcs_dealerid"]["mcs_phone"] : null;

          //跟进状态控制按钮
          if(this.model.bindData["mcs_status"]==10||this.model.bindData["mcs_status"]==20)  
          {
            this.model.ifCanEdit=true;
          }

          //处理里程、推荐服务、其他服务(假数据)
          this.model.packsMap = {};
          var obj1 = {};
          obj1["value"] = "1";
          var mapkey1 = obj1["value"];
          obj1["name"] = "更换轮胎";
          obj1["price"] = 500;
          obj1["time"] = 20;
          obj1["ischecked"] = true;
          this.model.packsMap[mapkey1] = obj1;

          var obj2 = {};
          obj2["value"] = "2";
          var mapkey2 = obj2["value"];
          obj2["name"] = "常规汽车检测";
          obj2["price"] = 100;
          obj2["time"] = 25;
          obj2["ischecked"] = true;
          this.model.packsMap[mapkey2] = obj2;

       
          var obj3 = {};
          obj3["value"] = "3";
          var mapkey3 = obj3["value"];
          obj3["name"] = "更换火花塞";
          obj3["price"] = 200;
          obj3["time"] = 15;
          obj3["ischecked"] = true;
          this.model.packsMap[mapkey3] = obj3;

          var obj4 = {};
          obj4["value"] = "4";
          var mapkey4 = obj4["value"];
          obj4["name"] = "汽车检测";
          obj4["price"] = 200;
          obj4["time"] = 15;
          obj4["ischecked"] = true;
          this.model.packsMap[mapkey4] = obj4;
          this.model.bindData['mcs_mileageid'] = "2";
          //里程名称
          this.model.bindData["mcs_mileagename"] = this.GetMileageOption(this.shareData.mileageOption,this.model.bindData['mcs_mileageid']);
          //服务包名称
          this.model.bindData["totalcost"] =this.GetPackCost(this.model.packsMap);
           //服务包时间
           this.model.bindData["totaltime"] =this.GetPackTime(this.model.packsMap);
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
  }

  //获取里程对应的推荐服务包
  public MileageChange() {
    debugger;
    var mileageid = this.model.bindData['mcs_mileageid']
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

      // this.DoPacks(this.model.bindPackOptionMap);
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

  //日期格式
  FormatToDate(date) {
    if (date != null && date != undefined) {
      return sd.format(date, 'YYYY-MM-DD');
    }
    else {
      return '';
    }
  }

   /**
   * 获取里程
   */
  public GetMileageOption(mileageOption, mileageid) {
    if (mileageOption != null && mileageOption.length > 0) {
      for (var i = 0; i < mileageOption.length; i++) {
        if (mileageid == mileageOption[i]["value"]) {
          return mileageOption[i]["name"];
        }
      }
    }
  }

  /**
   * 获取服务包总额
   */
  public GetPackCost(packmap) {
    
    for (const key in packmap) {
      if (packmap.hasOwnProperty(key)) {
        this.model.totalCost += packmap[key]["price"];
      }
    }
    return this.model.totalCost;
  }

   /**
   * 获取服务包耗时
   */
  public GetPackTime(packmap) {
    
    for (const key in packmap) {
      if (packmap.hasOwnProperty(key)) {
        this.model.totalTime += packmap[key]["time"];
      }
    }
    return this.model.totalTime;
  }
}
