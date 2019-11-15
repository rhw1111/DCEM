import { Component, OnInit, ViewChild } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OptionSetService } from '../../saleing.ser/optionset.service';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {


  public tab: any = "info";
  mod = {
    apiUrl: '/api/vehlisense/getdetail',
    data: {
      detail: [],//开票明细
       attachment: [],//附件列表 
    }
  };

  objectKeys = Object.keys;

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private _valid: DCore_Valid,
    private _activeRoute: ActivatedRoute,
    private _optionset: OptionSetService
  ) {

  }


  //IonSegment

  ngOnInit() {
    this._activeRoute.queryParams.subscribe((params: Params) => {
      if (params['id'] != null && params['id'] != undefined) {
        this.pageOnBind(params['id']);
      }
    });
  }

  pageOnBind(id: any) { 
    this.mod.data.detail["id"] = id;

    this._page.loadingShow();
    this._http.get(
      this.mod.apiUrl,
      {
        params: {
          id: id,
        }
      },
      (res: any) => { 
        if (!this._valid.isNull(res["Detail"])) {
           this.mod.data.detail["rostatus"] =this._optionset.GetOptionSetNameByValue("mcs_rostatus",  res["Detail"]["Attributes"]["a_e1f73281e00fe911a820844a39d18a7a_x002e_mcs_rostatus"]); 
           this.mod.data.detail["mcs_fullname"] = res["Detail"]["Attributes"]["mcs_fullname"];
           this.mod.data.detail["mcs_idcard"] = res["Detail"]["Attributes"]["mcs_idcard"];
           this.mod.data.detail["mcs_name"] = res["Detail"]["Attributes"]["mcs_name"];
           this.mod.data.detail["mcs_vehlicense"] = res["Detail"]["Attributes"]["mcs_vehlicense"];
           this.mod.data.detail["mcs_lisensedate"] =  res["Detail"]["Attributes"]["mcs_lisensedate"]==null?"": res["Detail"]["Attributes"]["mcs_lisensedate"].split('T')[0];
           this.mod.data.detail["mcs_address"] = res["Detail"]["Attributes"]["mcs_address"];
           this.mod.data.detail["mcs_fee"] = res["Detail"]["Attributes"]["mcs_fee"];
          
          this.mod.data.detail["vehordercode"] = res["Detail"]["Attributes"]["vehordercode"];
          this.mod.data.detail["vinname"] = res["Detail"]["Attributes"]["vinname"];
          this.mod.data.detail["vehdeliverycode"] = res["Detail"]["Attributes"]["vehdeliverycode"];
          this.mod.data.detail["deliverystatus"] =this._optionset.GetOptionSetNameByValue("mcs_deliverystatus",  res["Detail"]["Attributes"]["deliverystatus"]);   
          this.mod.data.detail["carusename"] = res["Detail"]["Attributes"]["a_e1f73281e00fe911a820844a39d18a7a_x002e_mcs_contactname"]; 
          this.mod.data.detail["contactphone"] = res["Detail"]["Attributes"]["a_e1f73281e00fe911a820844a39d18a7a_x002e_mcs_contactphone"]; 
          this.mod.data.detail["orderon"] = res["Detail"]["Attributes"]["a_e1f73281e00fe911a820844a39d18a7a_x002e_mcs_orderon"]; 
         

        } 
        if (!this._valid.isNull(res.AttmDetail)) {
          for (var key in res.AttmDetail) {
             
            var obj = {};
             obj["mcs_filetype"] = res.AttmDetail[key]["Attributes"]["mcs_filetype"];
            obj["mcs_fileurl"] = res.AttmDetail[key]["Attributes"]["mcs_fileurl"];
            obj["mcs_code"] = res.AttmDetail[key]["Attributes"]["mcs_code"];
            obj["mcs_filesize"] = res.AttmDetail[key]["Attributes"]["mcs_filesize"];
            this.mod.data.attachment.push(obj);
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
