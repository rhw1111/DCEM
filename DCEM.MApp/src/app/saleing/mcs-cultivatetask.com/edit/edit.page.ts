import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, ToastController, IonBackButton, IonBackButtonDelegate } from '@ionic/angular';
import { SelectCustomerComponent } from 'app/serving/serving.ser/components/select-customer/select-customer.component';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OptionSetService } from '../../saleing.ser/optionset.service';
import { SelectAppointmentinfoComponent } from 'app/serving/serving.ser/components/select-appointmentinfo/select-appointmentinfo.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {


  @ViewChild(IonBackButton, null) ionBackButton: IonBackButton;
  @ViewChild(IonBackButtonDelegate, null) ionBackButtonDelegate: IonBackButtonDelegate;

  showcount: Boolean = false;
  showcontact: Boolean = false;
  showonlylead: Boolean = false;
  showactivitystatus: boolean = false;
  mod = {
    addoreditUrl: '/api/activity/addoredit',//培育任务的新增修改接口
    querydetailUrl: '/api/activity/GetDetail',//培育任务的查询接口
    getContactcDetail: '/api/activity/getcontactdetail',//潜客的查询接口
    getOnlyleadDetail: '/api/activity/getonlyleaddetail',//唯一线索的查询接口
    getAccountDetail: '/api/activity/getaccountdetail',//销售机会的查询接口
    data: {
    },
    shareDataKey: "riEditData",
  };

  //定义共享数据
  shareData = {
    actioncode: 1,
    viewTitle: "",
    returnUrl: "",
    selectexcutestatus: {},
    selectimportantlevel: {},
    data: [],
    edititem: []
  }

  constructor(
    private _modalCtrl: ModalController,
    private _navCtrl: NavController,
    private _toastCtrl: ToastController,
    private _http: DCore_Http,
    private _page: DCore_Page,
    private _shareData: DCore_ShareData,
    private _valid: DCore_Valid,
    private _activeRoute: ActivatedRoute,
    private _optionset: OptionSetService
  ) { }


  ngOnInit() {
    this._activeRoute.queryParams.subscribe((params: Params) => {
      this.shareData.selectexcutestatus = this._optionset.Get("act_mcs_excutestatus");
      this.shareData.selectimportantlevel = this._optionset.Get("mcs_importantlevel");

      if (params['id'] != null && params['id'] != undefined) {
        this.EditOnBind(params['id']);
      } else {
        this.AddOnBind(params['type'], params['sourid']);
      }
    });
  }
  //新增
  //type   1 来源唯一线索；2来源潜客；3来源销售机会；0 无来源新增修改
  AddOnBind(type: any, sourid: any) {
    this.shareData.viewTitle = '新增';
    this.shareData.edititem["mcs_activitystatus"] = 0;
    this.shareData.edititem["mcs_isaddedtodes"] = false;
    this.shareData.edititem["mcs_ifsystemcreate"] = false;
    this.shareData.edititem["mcs_iffollowed"] = false;
    if (type == '1') {
      this.shareData.returnUrl = '';
      this.shareData.edititem["mcs_onlyleadid"] = sourid;
      this._http.get(
        this.mod.getOnlyleadDetail,
        {
          params: {
            id: sourid,
          }
        },
        (res: any) => {
          this.showonlylead = true;
          if (!this._valid.isNull(res["Attributes"])) {
            this.shareData.data["onlyleadname"] = res["Attributes"]["onlyleadname"];
            this.shareData.data["onlyleademail"] = res["Attributes"]["onlyleademail"];
            this.shareData.data["onlyleadphone"] = res["Attributes"]["onlyleadphone"];
            this.shareData.data["onlyleadprovince"] = res["Attributes"]["onlyleadprovince"];
            this.shareData.data["onlyleadcity"] = res["Attributes"]["onlyleadcity"];
            this.shareData.data["onlyleadorigin"] = this._optionset.GetOptionSetNameByValue("lead_mcs_leadorigin", res["Attributes"]["onlyleadorigin"]);
            this.shareData.data["onlyleadgender"] = this._optionset.GetOptionSetNameByValue("lead_mcs_gender", res["Attributes"]["onlyleadgender"]);
            this.shareData.data["onlyleadpoints"] = this._optionset.GetOptionSetNameByValue("lead_mcs_accountpoints", res["Attributes"]["onlyleadpoints"]);
          }

          this._page.loadingHide();
        },
        (err: any) => {
          const that = this;
          this._page.alert("消息提示", "数据加载异常", function () {
            that._page.goBack();
          });
          this._page.loadingHide();
        }
      );
    }
    else if (type == '2') {
      this.shareData.returnUrl = '';
      this.shareData.edititem["mcs_contactid"] = sourid;
      this._http.get(
        this.mod.getContactcDetail,
        {
          params: {
            id: sourid,
          }
        },
        (res: any) => {
          this.showcontact = true;
          if (!this._valid.isNull(res["Attributes"])) {
            this.shareData.data["contactcode"] = res["Attributes"]["contactcode"];
            this.shareData.data["contactname"] = res["Attributes"]["contactname"];
            this.shareData.data["contactphone"] = res["Attributes"]["contactphone"];
            this.shareData.data["contactemailaddress"] = res["Attributes"]["contactemailaddress"];
            this.shareData.data["contactuserid"] = res["Attributes"]["contactuserid"];
          }

          this._page.loadingHide();
        },
        (err: any) => {
          const that = this;
          this._page.alert("消息提示", "数据加载异常", function () {
            that._page.goBack();
          });
          this._page.loadingHide();
        }
      );

    } else if (type == '3') {
      this.shareData.edititem["mcs_accountid"] = sourid;
      this.shareData.returnUrl = '';
      this._http.get(
        this.mod.getAccountDetail,
        {
          params: {
            id: sourid,
          }
        },
        (res: any) => {
          this.showcount = true;
          if (!this._valid.isNull(res["Attributes"])) {
            this.shareData.data["accountnumber"] = res["Attributes"]["accountnumber"];
            this.shareData.data["accountname"] = res["Attributes"]["accountname"];
            this.shareData.data["accountphone"] = res["Attributes"]["accountphone"];
            this.shareData.data["accountcreatedon"] = res["Attributes"]["accountcreatedon"];
            this.shareData.data["accountorder"] = res["Attributes"]["accountorder"];
          }

          this._page.loadingHide();
        },
        (err: any) => {
          const that = this;
          this._page.alert("消息提示", "数据加载异常", function () {
            that._page.goBack();
          });
          this._page.loadingHide();
        }
      );

    }
  }





  //编辑初始化页面
  //type   1 来源唯一线索；2来源潜客；3来源销售机会；0 无来源新增修改
  EditOnBind(id: any) {
    this.shareData.viewTitle = '修改';
    this._page.loadingShow();
    this._http.get(
      this.mod.querydetailUrl,
      {
        params: {
          id: id,
        }
      },
      (res: any) => {
        if (!this._valid.isNull(res["Attributes"])) {

          if (res["Attributes"]["_mcs_contactid_value"] != null) {
            this.showcontact = true;
            this.shareData.data["contactcode"] = res["Attributes"]["contactcode"];
            this.shareData.data["contactname"] = res["Attributes"]["contactname"];
            this.shareData.data["contactphone"] = res["Attributes"]["contactphone"];
            this.shareData.data["contactemailaddress"] = res["Attributes"]["contactemailaddress"];
            this.shareData.data["contactuserid"] = res["Attributes"]["contactuserid"];

          }
          if (res["Attributes"]["_mcs_accountid_value"] != null) {
            this.showcount = true;
            this.shareData.data["accountnumber"] = res["Attributes"]["accountnumber"];
            this.shareData.data["accountname"] = res["Attributes"]["accountname"];
            this.shareData.data["accountphone"] = res["Attributes"]["accountphone"];
            this.shareData.data["accountcreatedon"] = res["Attributes"]["accountcreatedon"];
            this.shareData.data["accountorder"] = res["Attributes"]["accountorder"];

          }
          if (res["Attributes"]["_mcs_onlyleadid_value"] != null) {
            this.showonlylead = true;
            this.shareData.data["onlyleadname"] = res["Attributes"]["onlyleadname"];
            this.shareData.data["onlyleademail"] = res["Attributes"]["onlyleademail"];
            this.shareData.data["onlyleadphone"] = res["Attributes"]["onlyleadphone"];
            this.shareData.data["onlyleadprovince"] = res["Attributes"]["onlyleadprovince"];
            this.shareData.data["onlyleadcity"] = res["Attributes"]["onlyleadcity"];
            this.shareData.data["onlyleadorigin"] = this._optionset.GetOptionSetNameByValue("lead_mcs_leadorigin", res["Attributes"]["onlyleadorigin"]);
            this.shareData.data["onlyleadgender"] = this._optionset.GetOptionSetNameByValue("lead_mcs_gender", res["Attributes"]["onlyleadgender"]);
            this.shareData.data["onlyleadpoints"] = this._optionset.GetOptionSetNameByValue("lead_mcs_accountpoints", res["Attributes"]["onlyleadpoints"]);
          }
          this.shareData.edititem["id"] = id;
          this.shareData.edititem["mcs_activitystatus"] = res["Attributes"]["mcs_activitystatus"];
          this.shareData.edititem["mcs_name"] = res["Attributes"]["mcs_name"];
          this.shareData.edititem["mcs_excutestatus"] = res["Attributes"]["mcs_excutestatus"];
          this.shareData.edititem["mcs_importantlevel"] = res["Attributes"]["mcs_importantlevel"];
          this.shareData.edititem["mcs_thisfollowupcontent"] = res["Attributes"]["mcs_thisfollowupcontent"];
          this.shareData.edititem["mcs_nextfollowupcontent"] = res["Attributes"]["mcs_nextfollowupcontent"];
          this.shareData.edititem["mcs_nextfollowuptime"] = res["Attributes"]["mcs_nextfollowuptime"];
         //修改状态下状态为开启才显示状态修改框
          if (this.shareData.edititem["mcs_activitystatus"] == 0) {
            this.showactivitystatus = true;
          }
        }

        this._page.loadingHide();
      },
      (err: any) => {
        const that = this;
        this._page.alert("消息提示", "数据加载异常", function () {
          that._page.goBack();
        });
        this._page.loadingHide();
      }
    );
  }




  //提交数据保存
  public OnPostClick() {
    var errMessage = "";
    if (this._valid.isNullOrEmpty(this.shareData.edititem["mcs_name"])) {
      errMessage += "您尚未输入姓名<br>";
    } if (this._valid.isNullOrEmpty(this.shareData.edititem["mcs_thisfollowupcontent"])) {
      errMessage += "您尚未输入本次跟进内容<br>";
    }
    if (errMessage !== "") {
      this._page.presentToastError(errMessage);
      return;
    }
    var postData = {};
    postData["mcs_activitystatus"] = this.shareData.edititem["mcs_activitystatus"];
    postData["mcs_contactid"] = this.shareData.edititem["mcs_contactid"];
    postData["mcs_onlyleadid"] = this.shareData.edititem["mcs_onlyleadid"];
    postData["mcs_accountid"] = this.shareData.edititem["mcs_accountid"];
    postData["id"] = this.shareData.edititem["id"];
    postData["mcs_activitystatus"] = this.shareData.edititem["mcs_activitystatus"];
    postData["mcs_name"] = this.shareData.edititem["mcs_name"];
    postData["mcs_excutestatus"] = this.shareData.edititem["mcs_excutestatus"];
    postData["mcs_importantlevel"] = this.shareData.edititem["mcs_importantlevel"];
    postData["mcs_thisfollowupcontent"] = this.shareData.edititem["mcs_thisfollowupcontent"];
    postData["mcs_nextfollowupcontent"] = this.shareData.edititem["mcs_nextfollowupcontent"];
    postData["mcs_nextfollowuptime"] = this.shareData.edititem["mcs_nextfollowuptime"];
    this._page.loadingShow();
    this._http.post(
      this.mod.addoreditUrl,
      postData,
      (res: any) => {
        this._page.loadingHide();
        console.log(res);
        if (res.Result == true) {
          const that = this;
          this._page.alert("消息提示", "操作成功", function () {
            that._page.goBack();
          });
        }
        else {
          this._page.alert("消息提示", "操作失败");
        }
      },
      (err: any) => {
        this._page.loadingHide();
        this._page.alert("消息提示", "操作失败");
      }
    );

  }




}
