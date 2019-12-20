import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import dateformat from 'silly-datetime';
import { OptionSetService } from '../../../base/base.ser/optionset.service';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public tab: any = "baseinfo";
  model = {
    apiUrlInfo: '/api/vehorder/GetVehorderDetail',
    apiRightsUrl: '/api/MemberRights/GetMemberRightsList',
    data: {
      mcs_code: "", //整车订单编码
      mcs_vehorderid: "", //整车订单主键id
      mcs_mallordercode: "", //综合订单号
      mcs_shopcode: "", //商城订单号
      mcs_orderon: "", //商城下单时间
      mcs_ordersource: "", //订单来源
      mcs_stockvin: "", //锁车VIN码
      mcs_deliveryvin: "", //交车VIN码
      mcs_deliveryon: "",  //交车时间
      mcs_stdprice: "",  //标准价格
      mcs_totalamount: "", //应收金额
      mcs_receiptamount: "", //尾款
      mcs_earnest: "",//定金
      mcs_paydepositon: "", //缴定金时间

      mcs_contactname: "", //购车人姓名
      mcs_contactphone: "", //购车人手机
      mcs_idcard: "",//证件号
      mcs_contactid: "", //用户ID

      mcs_approvalstatus: "", //审批状态
      mcs_approvaler: "", //审批人
      mcs_msg: "",//审批意见
      mcs_approvalon2: "", //通过时间
      mcs_cancelorderon: "",//取消时间
      mcs_canceldesc: "" //取消原因

    },

    VehordertrackList: [],
    RightitemuseList: []

  }

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private activeRoute: ActivatedRoute,
    private menuController: MenuController,
    private optionset: OptionSetService
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      if (params['id'] != null && params['id'] != undefined) {
        this.model.data.mcs_vehorderid = params['id'];
        this.pageOnBind(params['id']);
      }
    });
  }

  //每次页面加载
  ionViewWillEnter() {
    this.menuController.enable(true);
  }

  //加载厅店整车订单详情
  pageOnBind(id: any) {
    //debugger;
    this._page.loadingShow();
    this._http.get(
      this.model.apiUrlInfo,
      {
        params: {
          mcs_vehorderid: this.model.data.mcs_vehorderid,
        }
      },
      (res: any) => {
        //debugger;
        //绑定基本信息
        if (res.VehorderInfo !== null) {
          this.model.data.mcs_code = res["VehorderInfo"]["Attributes"]["mcs_code"];
          this.model.data.mcs_mallordercode = res["VehorderInfo"]["Attributes"]["mcs_mallordercode"];
          this.model.data.mcs_shopcode = res["VehorderInfo"]["Attributes"]["mcs_shopcode"];
          this.model.data.mcs_orderon = this.FormatToDateTime(res["VehorderInfo"]["Attributes"]["mcs_orderon"]);
          this.model.data.mcs_ordersource = res["VehorderInfo"]["Attributes"]["mcs_ordersource"];
          this.model.data.mcs_stockvin = res["VehorderInfo"]["Attributes"]["_mcs_stockvin_value@OData.Community.Display.V1.FormattedValue"];
          this.model.data.mcs_deliveryvin = res["VehorderInfo"]["Attributes"]["_mcs_deliveryvin_value@OData.Community.Display.V1.FormattedValue"];
          this.model.data.mcs_deliveryon = this.FormatToDateTime(res["VehorderInfo"]["Attributes"]["mcs_deliveryon"]);
          this.model.data.mcs_stdprice = res["VehorderInfo"]["Attributes"]["mcs_stdprice"];
          this.model.data.mcs_totalamount = res["VehorderInfo"]["Attributes"]["mcs_totalamount"];
          this.model.data.mcs_receiptamount = res["VehorderInfo"]["Attributes"]["mcs_receiptamount"];
          this.model.data.mcs_earnest = res["VehorderInfo"]["Attributes"]["mcs_earnest"];
          this.model.data.mcs_paydepositon = this.FormatToDateTime(res["VehorderInfo"]["Attributes"]["mcs_paydepositon"]);

          this.model.data.mcs_contactname = res["VehorderInfo"]["Attributes"]["mcs_contactname"];
          this.model.data.mcs_contactphone = res["VehorderInfo"]["Attributes"]["mcs_contactphone"];
          this.model.data.mcs_idcard = res["VehorderInfo"]["Attributes"]["mcs_idcard"];
          this.model.data.mcs_contactid = res["VehorderInfo"]["Attributes"]["mcs_contactid"];

          this.model.data.mcs_approvalstatus = this.optionset.GetOptionSetNameByValue("mcs_approvalstatus", res["VehorderInfo"]["Attributes"]["mcs_approvalstatus"]);
          this.model.data.mcs_approvaler = res["VehorderInfo"]["Attributes"]["_mcs_approvaler_value@OData.Community.Display.V1.FormattedValue"];
          this.model.data.mcs_msg = res["VehorderInfo"]["Attributes"]["mcs_msg"];
          this.model.data.mcs_approvalon2 = this.FormatToDateTime(res["VehorderInfo"]["Attributes"]["mcs_approvalon2"]);
          this.model.data.mcs_cancelorderon = this.FormatToDateTime(res["VehorderInfo"]["Attributes"]["mcs_cancelorderon"]);
          this.model.data.mcs_canceldesc = res["VehorderInfo"]["Attributes"]["mcs_canceldesc"];

        }

        //绑定订单透明化状态跟踪
        if (res.Vehordertrack != null) {

          for (var key in res.Vehordertrack) {
            var obj = {};
            obj["mcs_optionon"] = this.FormatToDateTime(res.Vehordertrack[key]["Attributes"]["mcs_optionon"]);
            obj["mcs_rostatus"] = this.optionset.GetOptionSetNameByValue("mcs_rostatus", res.Vehordertrack[key]["Attributes"]["mcs_rostatus"]);
            this.model.VehordertrackList.push(obj);

          }
        }

        //绑定权益项
        /*   if (res.Rightitemuse != null) {
  
            for (var key in res.Rightitemuse) {
              var obj = {};
              obj["mcs_name"] = res.Rightitemuse[key]["Attributes"]["mcs_name"];
              obj["mcs_code"] = res.Rightitemuse[key]["Attributes"]["mcs_code"];
              obj["mcs_amount"] = res.Rightitemuse[key]["Attributes"]["mcs_amount"];
              this.model.RightitemuseList.push(obj);
            }
          } */

        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "数据加载异常");
        this._page.loadingHide();
      }
    );
  }


  //获取权益项列表数据
  GetList() {
    //debugger;

    /* this._page.loadingShow();
    this._http.postForToaken(this.model.apiRightsUrl,
        null,
        (res: any) => {
           //debugger;
            if (res.Results !== null) {
                //绑定数据
                res.Results.forEach(item => {              
                    var obj = {}; 
                    obj["mcs_name"] = item["Attributes"].mcs_vehorderid;             
                    obj["mcs_code"] = item["Attributes"].mcs_contactname;
                    obj["mcs_amount"] = item["Attributes"].mcs_contactphone;
                  
                    this.model.RightitemuseList.push(obj)
                });
              
            }
            else {
                this._page.alert("消息提示", "数据加载异常");
            }
            this._page.loadingHide();
        },
        (err: any) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        }
    ); */
  }

  FormatToDateTime(date) {
    if (date != null && date != undefined) {
      return dateformat.format(date, 'YYYY-MM-DD');
    }
    else {
      return '';
    }
  }

}
