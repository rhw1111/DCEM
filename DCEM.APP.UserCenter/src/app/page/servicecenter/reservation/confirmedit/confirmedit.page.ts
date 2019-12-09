import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData } from '../../../../component/typescript/dcem.core';
import sd from 'silly-datetime';
import { OptionSetService } from '../../../../component/typescript/optionset.service';

@Component({
  selector: 'app-confirmedit',
  templateUrl: './confirmedit.page.html',
  styleUrls: ['./confirmedit.page.scss'],
})
export class ConfirmeditPage implements OnInit {

  model = {
    shareDataKey: "reservationEditData",
    bindData: {},//页面绑定数据
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
    debugger;
    if (this._shareData.has(this.model.shareDataKey)) {
      this.shareData = this._shareData.get(this.model.shareDataKey);

      this.BindData(this.shareData);
      // console.log(this.shareData);
      // console.log(this.shareData.appointmentConfigOptionMap[this.shareData.appointmentinfo["mcs_appointmentconfigid"]]);
      // console.log(this.shareData.appointmentConfigOptionMap[this.shareData.appointmentinfo["mcs_appointmentconfigid"]]["name"]);
      // this.model.test=this.shareData.appointmentConfigOptionMap[this.shareData.appointmentinfo["mcs_appointmentconfigid"]]["name"];
    }
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
    //里程
    data["mcs_mileageid"] = appointmentinfo["mcs_mileageid"];
    data["mcs_mileagename"] = this.GetMileageOption(mileageOption, data["mcs_mileageid"]);
    data["mcs_packname"] =this.GetPackName(choicePackOptionMap,choicepackOtherOptionMap);

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
    
  }

}
