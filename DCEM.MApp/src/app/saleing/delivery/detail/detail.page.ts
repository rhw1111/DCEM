import { Component, OnInit } from '@angular/core';
import { DCore_Page, DCore_Http } from 'app/base/base.ser/Dcem.core';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private activeRoute: ActivatedRoute,
    private _userinfo: Storage_LoginInfo,
    public alertController: AlertController) {
  }
  public tab: any = "infolist";
  public model = {
    apiUrlDetail: '/api/delivery/get',
    id: "",
    status: -1,
    settles: 0,
    info: {
      vin: "",
      code: "",
      deliverystatus: "",
      ro: "",
      settlestatus: "",
      deliveryon: "",
      appointmenton: "",
      customerrequest: "",
      receiptamount: "",
      submitpdi: "",
      submitpdion: "",
      pdiapproval: "",
      pdidetecton: "",
      serviceproxyid: ""
    }
  };

  public orderpaymodel = {
    apiUrlDetailOrderPay: '/api/delivery/getcollections',
    orderpayrecords: [],
    isending: false,
    search:
    {
      pageindex: 1,
      pagesize: 10,
      userId: this._userinfo.GetSystemUserId(),
      DeliveryId: ""
    }
  }




  ngOnInit() {
    this.activeRoute.queryParams.subscribe((data: Params) => {
      if (data['id'] != null && data['id'] != undefined) {
        this.model.id = data['id'];
        this.orderpaymodel.search.DeliveryId = data['id'];  
        this.pageOnBind(this.model.id);
      }
    });
  }
  //基础信息
  pageOnBind(id: any) {
    this._page.loadingShow();
    this._http.post(
      this.model.apiUrlDetail,
      { 'id': this.model.id, 'userid': this._userinfo.GetSystemUserId() },
      (res: any) => {
        if (res !== null) {
          var attr = res["Attributes"];
          this.model.info.vin = attr["_mcs_vin_value@OData.Community.Display.V1.FormattedValue"];
          this.model.info.code = attr["mcs_code"];
          this.model.info.deliverystatus = attr["mcs_deliverystatus@OData.Community.Display.V1.FormattedValue"];
          this.model.status = attr["mcs_deliverystatus"];
          this.model.settles = attr["mcs_settlestatus"];
          this.model.info.ro = attr["_mcs_vehorder_value@OData.Community.Display.V1.FormattedValue"];
          this.model.info.settlestatus = attr["mcs_settlestatus@OData.Community.Display.V1.FormattedValue"];
          this.model.info.deliveryon = attr["mcs_deliveryon@OData.Community.Display.V1.FormattedValue"];
          this.model.info.appointmenton = attr["mcs_appointmenton@OData.Community.Display.V1.FormattedValue"];
          this.model.info.customerrequest = attr["mcs_customerrequest"];
          this.model.info.receiptamount = attr["mcs_receiptamount@OData.Community.Display.V1.FormattedValue"];
          this.model.info.submitpdi = attr["mcs_submitpdi@OData.Community.Display.V1.FormattedValue"];
          this.model.info.submitpdion = attr["mcs_submitpdion@OData.Community.Display.V1.FormattedValue"];
          this.model.info.pdiapproval = attr["mcs_pdiapproval@OData.Community.Display.V1.FormattedValue"];
          this.model.info.pdidetecton = attr["mcs_pdidetecton@OData.Community.Display.V1.FormattedValue"];
          this.model.info.serviceproxyid = attr["_mcs_serviceproxyid_value@OData.Community.Display.V1.FormattedValue"];
        }
        else {
          this._page.alert("消息提示", "交车单详情加载异常");
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "交车单详情加载异常");
        this._page.loadingHide();
      }
    );

  }
  //收款记录
  pageOnLogCalllist(event) {
    if (this.orderpaymodel.orderpayrecords.length == 0) {
      this.pageOnlist(event);
    }
  }
  //加载下一页
  doLoading(event) {
    this.orderpaymodel.search.pageindex++;
    this.orderpaymodel.isending = false;
    this.pageOnlist(event);
  }
  pageOnlist(event) {
    this._page.loadingShow();
    this._http.post(
      this.orderpaymodel.apiUrlDetailOrderPay,
      this.orderpaymodel.search,
      (res: any) => {
        if (res.Results !== null) {
          var data = res.Collections;
          for (var i in data) {
            var attr = data[i]["Attributes"];
            var obj = {};
            obj["id"] = data[i]["Id"];
            obj["code"] = attr["mcs_code"];
            obj["type"] = attr["mcs_paycategory@OData.Community.Display.V1.FormattedValue"];
            obj["amount"] = attr["mcs_amount@OData.Community.Display.V1.FormattedValue"];
            obj["createdon"] = attr["createdon@OData.Community.Display.V1.FormattedValue"];
            this.orderpaymodel.orderpayrecords.push(obj);
          }
          event ? event.target.complete() : '';
          if (data.length < this.orderpaymodel.search.pagesize) {
            event ? event.target.disabled = true : "";
            this.orderpaymodel.isending = true;
          }
          this._page.loadingHide();
        }
        else {
          this._page.alert("消息提示", "原始线索数据加载异常");
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "原始线索数据加载异常");
        this._page.loadingHide();
      }
    );

  }
  //整车物料
  pageOnActivitylist() {

  }
}