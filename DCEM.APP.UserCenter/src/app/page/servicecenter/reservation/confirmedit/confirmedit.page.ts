import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData } from '../../../../component/typescript/dcem.core';
import sd from 'silly-datetime';
import { OptionSetService } from '../../../../component/typescript/optionset.service';
import { Key } from 'protractor';

@Component({
  selector: 'app-confirmedit',
  templateUrl: './confirmedit.page.html',
  styleUrls: ['./confirmedit.page.scss'],
})
export class ConfirmeditPage implements OnInit {

  model = {
    shareDataKey: "reservationEditData",
    postApiUrl: 'Api/uc-appointment-info/AddOrEdit',
    bindData: {},//页面绑定数据
    postData:{},//请求数据
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
    private _valid: DCore_Valid,
    private _shareData: DCore_ShareData,
    private _optionset: OptionSetService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    //  debugger;
    if (this._shareData.has(this.model.shareDataKey)) {
      this.shareData = this._shareData.get(this.model.shareDataKey);

      this.BindData(this.shareData);
    }

  }

  //提交订单
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
    this.model.postData["appointmentinfo"]["mcs_appointmentinfoid"] =this.shareData.appointmentinfo["mcs_appointmentinfoid"];
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
          this._shareData.delete(this.model.shareDataKey);
          this._page.navigateRoot("/servicecenter/reservation/detail", { id: guid },"");
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

  /**
   * 页面绑定数据
   */
  public BindData(data) {

    this.model.bindData = {};
    var data: any = {};
    var appointmentinfo = this.shareData.appointmentinfo;
    var appointmentConfigOptionMap = this.shareData.appointmentConfigOptionMap;
    var mileageOption = this.shareData.mileageOption;
    var choicePackOptionMap=this.shareData.choicePackOptionMap;
    var choicepackOtherOptionMap=this.shareData.choicepackOtherOptionMap;
    //车主姓名
    data["mcs_customername"] = appointmentinfo["mcs_customername"];
    //车主电话
    data["mcs_customerphone"] = appointmentinfo["mcs_customerphone"];
    //车牌号
    data["mcs_carplate"] = appointmentinfo["mcs_carplate"];
    //经销商名称
    data["mcs_dealername"] = appointmentinfo["mcs_dealername"];
    //经销商地址
    data["mcs_shopaddress"] = appointmentinfo["mcs_shopaddress"];
    //经销商电话
    data["mcs_dealerphone"] = appointmentinfo["mcs_dealerphone"];
    //预约类型
    data["mcs_ordertypename"] = this._optionset.GetOptionSetNameByValue("mcs_ordertype", appointmentinfo["mcs_ordertype"]);
    //预约日期
    data["mcs_appointmentat"] = appointmentinfo["mcs_appointmentat"];
    //预约时段
    data["mcs_appointmentconfigid"] = appointmentinfo["mcs_appointmentconfigid"];
    //时段名称
    data["mcs_appointmentconfigname"] = appointmentConfigOptionMap[appointmentinfo["mcs_appointmentconfigid"]]["name"];
    //可预约数量
    data["mcs_surplusnum"] = appointmentinfo["mcs_surplusnum"];
    //客户要求
    data["mcs_customercomment"] = appointmentinfo["mcs_customercomment"];
    //问题描述
    data["mcs_appointmendescript"] = appointmentinfo["mcs_appointmendescript"];
    //里程id
    data["mcs_mileageid"] = appointmentinfo["mcs_mileageid"];
    //里程名称
    data["mcs_mileagename"] = this.GetMileageOption(mileageOption, data["mcs_mileageid"]);
    //服务包名称
    data["mcs_packname"] =this.GetPackName(choicePackOptionMap,choicepackOtherOptionMap);
    //总金额
    data["totalcost"] = appointmentinfo["totalcost"];
     //总耗时
     data["totaltime"] = appointmentinfo["totaltime"];

    this.model.bindData = data;
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
   * 获取服务包
   */
  public GetPackName(choicePackOptionMap,choicepackOtherOptionMap) {
    var packname:string="";

    for (const key in choicePackOptionMap) {
      if (choicePackOptionMap.hasOwnProperty(key)) {
        packname+=choicePackOptionMap[key]["name"]+"、"
      }
    }

    for (const key in choicepackOtherOptionMap) {
      if (choicepackOtherOptionMap.hasOwnProperty(key)) {
        packname+=choicepackOtherOptionMap[key]["name"]+"、"
      }
    }

    if(packname.length>0)
    {
      packname=packname.substr(0,(packname.length)-1);
    }
    return packname;
  }

}
