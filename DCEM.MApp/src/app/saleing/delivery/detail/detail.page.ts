import { Component, OnInit } from '@angular/core';
import { DCore_Page, DCore_Http } from 'app/base/base.ser/Dcem.core';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NgModel } from '@angular/forms';
import { MenuController } from '@ionic/angular';

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
    private menuController:MenuController,
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

  public materielmodel = {
    apiUrl: '/api/delivery/getmateriel',
    materielId: "",
    data:
    {
      cpt: "",
      jbcx: "",
      cxn: "",
      dllx: "",
      nsys: "",
      wsys: ""
    }
  }

  public moneycompletedmodel = {
    apiUrl: '/api/delivery/moneycompleted',
    data:
    {
      Id: "",
    }

  }

  public deliverorderflowmodel = {
    apiUrl: '/api/delivery/getdeliverorderflow',
    status: 10,
    model: {
      issubmitpdi: "是否提交pdi检测:",
      pdisubmittime: "PDI检测提交时间:",
      pditime: "PDI检测时间:",
      appointmenton: "预约时间:",
      settlestatus: "结清状态:",
      receipton: "收尾款时间:",
      settles:"",
      deliveryon: "交车时间:",
      current:0//步骤
    }
  }
  ngOnInit() {
    this.activeRoute.queryParams.subscribe((data: Params) => {
      if (data['id'] != null && data['id'] != undefined) {
        this.model.id = data['id'];
        this.orderpaymodel.search.DeliveryId = data['id'];
        this.moneycompletedmodel.data.Id = data['id'];
        this.pageOnBind();
      }
    });
  }

     //每次页面加载
     ionViewWillEnter() {
      this.menuController.enable(true);
  }

  //获取交车单基础信息
  pageOnBind() {
    this._page.loadingShow();
    this._http.postForToaken(
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
          this.materielmodel.materielId = attr["_mcs_vehmaterial_value"];

          //交车单跟踪详情 
          if (attr["mcs_submitpdi@OData.Community.Display.V1.FormattedValue"] != null) {
            this.deliverorderflowmodel.model.issubmitpdi ="是否提交pdi检测:"+attr["mcs_submitpdi@OData.Community.Display.V1.FormattedValue"];//是否提交pdi检测
            this.deliverorderflowmodel.model.current=1;
          }
          if (attr["mcs_submitpdion@OData.Community.Display.V1.FormattedValue"] != null) {
            this.deliverorderflowmodel.model.pdisubmittime ="PDI检测提交时间:"+ attr["mcs_submitpdion@OData.Community.Display.V1.FormattedValue"];//PDI检测提交时间
            this.deliverorderflowmodel.model.current=2;
          }
          if (attr["mcs_pdidetecton@OData.Community.Display.V1.FormattedValue"] != null) {
            this.deliverorderflowmodel.model.pditime ="DI检测时间:"+attr["mcs_pdidetecton@OData.Community.Display.V1.FormattedValue"];//PDI检测时间
            this.deliverorderflowmodel.model.current=3;
          }
          if (attr["mcs_appointmenton@OData.Community.Display.V1.FormattedValue"] != null) {
            this.deliverorderflowmodel.model.appointmenton ="预约时间:"+ attr["mcs_appointmenton@OData.Community.Display.V1.FormattedValue"];//预约时间
            this.deliverorderflowmodel.model.current=4;
          }
          var str="";
          if (attr["mcs_settlestatus@OData.Community.Display.V1.FormattedValue"] != null) {
            this.deliverorderflowmodel.model.settlestatus += attr["mcs_settlestatus@OData.Community.Display.V1.FormattedValue"];//结清状态
            str="结清状态:"+attr["mcs_settlestatus@OData.Community.Display.V1.FormattedValue"]+"\n";
          }
          if (attr["mcs_receipton@OData.Community.Display.V1.FormattedValue"] != null) {
            this.deliverorderflowmodel.model.receipton += attr["mcs_receipton@OData.Community.Display.V1.FormattedValue"];
            str+="收尾款时间:"+attr["mcs_receipton@OData.Community.Display.V1.FormattedValue"];
          }
          if(str!=""){
            this.deliverorderflowmodel.model.settles=str;
            this.deliverorderflowmodel.model.current=5;
          }
          if (attr["mcs_deliveryon@OData.Community.Display.V1.FormattedValue"] != null) {
            this.deliverorderflowmodel.model.deliveryon ="交车时间:"+attr["mcs_deliveryon@OData.Community.Display.V1.FormattedValue"];//交车时间
            this.deliverorderflowmodel.model.current=6;
          }
          var submitpdi = attr["mcs_submitpdi"];
          if (!submitpdi) {
            this.deliverorderflowmodel.status = 2;
          }
          else {
            this.deliverorderflowmodel.status = 4;
          }
          if (this.model.status == 3) {
            this.deliverorderflowmodel.status = 6;
          }
          if (this.model.status == 4) {
            this.deliverorderflowmodel.status = 8;
          }
          if (this.model.status == 5) {
            this.deliverorderflowmodel.status = 11;
          }
          if (this.model.status == 7) {
            this.deliverorderflowmodel.status = 13;
          }
          //结清状态
          this.pageOnActivitylist();
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
  pageOnLogCalllist() {
    if (this.orderpaymodel.orderpayrecords.length == 0) {
      this.pageOnlist(null);
    }
  }
  //加载下一页
  doLoading(event) {
    this.orderpaymodel.search.pageindex++;
    this.orderpaymodel.isending = false;
    this.pageOnlist(event);
  }
  //获取交车单收款记录
  pageOnlist(event) {
    this._page.loadingShow();
    this._http.postForToaken(
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
            if (this.orderpaymodel.search.pageindex != 1) {
              this.orderpaymodel.isending = true;
            }
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
    this._http.postForToaken(
      this.materielmodel.apiUrl,
      { 'materielId': this.materielmodel.materielId },
      (res: any) => {
        if (res !== null) {
          var attr = res["Attributes"];
          this.materielmodel.data.cpt = attr["_mcs_carplatformid_value@OData.Community.Display.V1.FormattedValue"];
          this.materielmodel.data.jbcx = attr["_mcs_carmodelid_value@OData.Community.Display.V1.FormattedValue"];
          this.materielmodel.data.cxn = attr["mcs_caryear@OData.Community.Display.V1.FormattedValue"];
          this.materielmodel.data.dllx = attr["_mcs_powertypeid_value@OData.Community.Display.V1.FormattedValue"];
          this.materielmodel.data.nsys = attr["_mcs_incolourid_value@OData.Community.Display.V1.FormattedValue"];
          this.materielmodel.data.wsys = attr["_mcs_excolourid_value@OData.Community.Display.V1.FormattedValue"];
        }
      }
    );
  }
  //收款完成
  async presentAlertConfim() {
    const alert = await this.alertController.create({
      header: '订单收款完成',
      message: '确定收款完成吗？',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: '确定',
          handler: () => {
            this._page.loadingShow();
            this._http.postForToaken(
              this.moneycompletedmodel.apiUrl,
              this.moneycompletedmodel.data,
              (res: any) => {
                if (res !== null) {
                  debugger;
                  if (res.Result) {
                    this._page.alert("消息提示", "交车单收款完成！", () => {
                      //跳转到开票记录 
                      this._page.goto("/saleing/vehnetwork/list");
                    });
                  } else {
                    this._page.alert("消息提示", res.Description);
                  }
                }
                this._page.loadingHide();
              },
              (err: any) => {
                this._page.loadingHide();
              }
            );
          }
        }
      ]
    });
    await alert.present();
  }
}