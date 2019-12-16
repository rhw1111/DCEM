import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/component/typescript/dcem.core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  model = {
    apiUrl: 'api/salesorder/getdetail',
    orderdetail: {
      code: "",
      status: 0,
      statuslabel: "",
      sku: "",
      //车价
      carprice: 0,
      //订单总金额
      totalamount: 0,
      //应收订金
      depositreceivable: 0,
      //已收定金
      depositreceived: 0,
      //积分抵扣
      deductedamount: 0,
      //已收金额
      amountreceived: 0,
      //最终待支付
      lastamount: 0
    }
  }

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      if (params['orderid'] != null && params['orderid'] != undefined) {
        this.pageOnBind(params['orderid']);
      }
    });
  }
  pageOnBind(orderid: any) {
    this._page.loadingShow();
    this._http.get(
      this.model.apiUrl,
      {
        params: {
          orderid: orderid,
        }
      },
      (res: any) => {
        //debugger;
        if (res !== null) {
          console.log(res);
          var attr = res["Attributes"];
          this.model.orderdetail.code = attr["mcs_name"];
          this.model.orderdetail.status = attr["aa.mcs_paystatus"];
          this.model.orderdetail.statuslabel = attr["aa.mcs_paystatus@OData.Community.Display.V1.FormattedValue"];
          this.model.orderdetail.carprice = parseFloat(attr["mcs_unitprice"]);
          this.model.orderdetail.sku = attr["_mcs_productsku_value@OData.Community.Display.V1.FormattedValue"];
          this.model.orderdetail.totalamount = parseFloat(attr["aa.mcs_totalamount"]);
          this.model.orderdetail.depositreceivable = parseFloat(attr["aa.mcs_depositreceivable"]);
          this.model.orderdetail.depositreceived = parseFloat(attr["aa.mcs_depositreceived"]);
          this.model.orderdetail.deductedamount = parseFloat(attr["aa.mcs_deductedamount"]);
          this.model.orderdetail.amountreceived = parseFloat(attr["aa.mcs_amountreceived"]);

          this.model.orderdetail.lastamount = this.model.orderdetail.totalamount - this.model.orderdetail.depositreceived - this.model.orderdetail.deductedamount - this.model.orderdetail.amountreceived;
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
    );
  }

  goPay() {
    var returndata = {
      "OrderCode": this.model.orderdetail.code,
      "TotalPrice": this.model.orderdetail.lastamount
    };
    this._page.goto("/servicecenter/payment/payment", returndata);
  }
}
