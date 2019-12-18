import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid }  from '../../../../../app/component/typescript/dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  model={
    apiUrl: '/Api/UC_Serviceproxy/UcQueryInfo',
    data: {
        serviceproxy: {},
        serviceorderrepairitemArray: [],
        serviceorderpartArray: [],
    }
  }
  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private _shareData: DCore_ShareData,
    private _valid: DCore_Valid,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      if (params['id'] != null && params['id'] != undefined) {
          this.pageOnBind(params['id']);
      }
  });
  }

  pageOnBind(id: any) {
    debugger;
    this._page.loadingShow();
    this._http.get(
        this.model.apiUrl,
        {
            params: {
                guid: id,
            }
        },
        (res: any) => {
          debugger;
            if (!this._valid.isNull(res.Serviceproxy)) {
                this.model.data.serviceproxy["mcs_customername"] = res["Serviceproxy"]["Attributes"]["mcs_customername"];
                this.model.data.serviceproxy["mcs_carplate"] = res["Serviceproxy"]["Attributes"]["mcs_carplate"];
                this.model.data.serviceproxy["mcs_customerphone"] = res["Serviceproxy"]["Attributes"]["mcs_customerphone"];
                this.model.data.serviceproxy["mcs_name"] = res["Serviceproxy"]["Attributes"]["mcs_name"];
                this.model.data.serviceproxy["mcs_shuttlename"] = res["Serviceproxy"]["Attributes"]["mcs_shuttlename"];
                this.model.data.serviceproxy["mcs_shuttlephone"] = res["Serviceproxy"]["Attributes"]["mcs_shuttlephone"];
                this.model.data.serviceproxy["mcs_ordertypevalue"] = res["Serviceproxy"]["Attributes"]["mcs_ordertype@OData.Community.Display.V1.FormattedValue"];
                this.model.data.serviceproxy["mcs_inpower"] = res["Serviceproxy"]["Attributes"]["mcs_inpower"];
                this.model.data.serviceproxy["mcs_outpower"] = res["Serviceproxy"]["Attributes"]["mcs_outpower"];
                this.model.data.serviceproxy["mcs_oilquantity"] = res["Serviceproxy"]["Attributes"]["mcs_oilquantity"];
                this.model.data.serviceproxy["mcs_departureoil"] = res["Serviceproxy"]["Attributes"]["mcs_departureoil"];
                this.model.data.serviceproxy["mcs_mileage"] = res["Serviceproxy"]["Attributes"]["mcs_mileage"];
                this.model.data.serviceproxy["mcs_departuremileage"] = res["Serviceproxy"]["Attributes"]["mcs_departuremileage"];
                this.model.data.serviceproxy["mcs_arrivalon"] = res["Serviceproxy"]["Attributes"]["mcs_arrivalon@OData.Community.Display.V1.FormattedValue"];
                this.model.data.serviceproxy["mcs_finishat"] = res["Serviceproxy"]["Attributes"]["mcs_finishat@OData.Community.Display.V1.FormattedValue"];
                this.model.data.serviceproxy["_mcs_repairlocationid_value"] = res["Serviceproxy"]["Attributes"]["_mcs_repairlocationid_value@OData.Community.Display.V1.FormattedValue"];
                this.model.data.serviceproxy["mcs_statusvalue"] = res["Serviceproxy"]["Attributes"]["mcs_status@OData.Community.Display.V1.FormattedValue"];
                this.model.data.serviceproxy["mcs_hoursamount"] = res["Serviceproxy"]["Attributes"]["mcs_hoursamount"];
                this.model.data.serviceproxy["mcs_partsamount"] = res["Serviceproxy"]["Attributes"]["mcs_partsamount"];
                this.model.data.serviceproxy["mcs_discountamount"] = res["Serviceproxy"]["Attributes"]["mcs_discountamount"];
                this.model.data.serviceproxy["mcs_amounttotal"] = res["Serviceproxy"]["Attributes"]["mcs_amounttotal"];
                this.model.data.serviceproxy["mcs_status"] = res["Serviceproxy"]["Attributes"]["mcs_status"];
                this.model.data.serviceproxy["mcs_dealername"] = res["Serviceproxy"]["Attributes"]["dealer.mcs_name"];
                this.model.data.serviceproxy["mcs_dealerphone"] = res["Serviceproxy"]["Attributes"]["dealer.mcs_phone"];
                this.model.data.serviceproxy["mcs_shopaddress"] = res["Serviceproxy"]["Attributes"]["dealer.mcs_shopaddress"];
            }

            if (!this._valid.isNull(res.ServiceorderrepairitemList)) {
                for (var key in res.ServiceorderrepairitemList) {
                    var obj = {};

                    obj["name"] = res.ServiceorderrepairitemList[key]["Attributes"]["a.mcs_name"];
                    obj["code"] = res.ServiceorderrepairitemList[key]["Attributes"]["a.mcs_repairitemid@OData.Community.Display.V1.FormattedValue"];

                    obj["repairitemtypeid_Formatted"] = res.ServiceorderrepairitemList[key]["Attributes"]["a.mcs_repairitemtypeid@OData.Community.Display.V1.FormattedValue"];
                    obj["repairitemtypedetailid_Formatted"] = res.ServiceorderrepairitemList[key]["Attributes"]["a.mcs_repairitemtypedetailid@OData.Community.Display.V1.FormattedValue"];
                    
                    obj["workinghour"] = res.ServiceorderrepairitemList[key]["Attributes"]["a.mcs_workinghour"];
                    obj["price"] = res.ServiceorderrepairitemList[key]["Attributes"]["a.mcs_price"];
                    obj["discount"] = res.ServiceorderrepairitemList[key]["Attributes"]["a.mcs_discount"];
                    obj["repairamount"] = res.ServiceorderrepairitemList[key]["Attributes"]["a.mcs_repairamount"];

                    this.model.data.serviceorderrepairitemArray.push(obj);
                }
            }

            if (!this._valid.isNull(res.ServiceorderpartList)) {
                for (var key in res.ServiceorderpartList) {
                    var obj = {};
                    obj["name"] = res.ServiceorderpartList[key]["Attributes"]["a.mcs_partsname"];
                    obj["code"] = res.ServiceorderpartList[key]["Attributes"]["a.mcs_partsid@OData.Community.Display.V1.FormattedValue"];

                    obj["repairitemtypeid_Formatted"] = res.ServiceorderpartList[key]["Attributes"]["a.mcs_repairitemtypeid@OData.Community.Display.V1.FormattedValue"];
                    obj["repairitemtypedetailid_Formatted"] = res.ServiceorderpartList[key]["Attributes"]["a.mcs_repairitemtypedetailid@OData.Community.Display.V1.FormattedValue"];

                    obj["quantity"] = res.ServiceorderpartList[key]["Attributes"]["a.mcs_quantity"];
                    obj["price"] = res.ServiceorderpartList[key]["Attributes"]["a.mcs_price"];
                    obj["discount"] = res.ServiceorderpartList[key]["Attributes"]["a.mcs_discount"];
                    obj["amount"] = res.ServiceorderpartList[key]["Attributes"]["a.mcs_amount"];

                    this.model.data.serviceorderpartArray.push(obj);
                }
            }
            this._page.loadingHide();
        },
        (err: any) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        }
    );
}

}
