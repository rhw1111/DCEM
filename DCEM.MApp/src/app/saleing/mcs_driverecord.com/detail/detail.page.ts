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
    apiUrl: '/api/drive-record/GetDetail',
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
           this.mod.data.detail["mcs_fullname"] = res["Detail"]["Attributes"]["mcs_fullname"];
           this.mod.data.detail["mcs_mobilephone"] = res["Detail"]["Attributes"]["mcs_mobilephone"];
           this.mod.data.detail["mcs_businesstype"] = this._optionset.GetOptionSetNameByValue("mcs_drivebusinesstype",  res["Detail"]["Attributes"]["mcs_businesstype"]); ;
           this.mod.data.detail["carmodelname"] = res["Detail"]["Attributes"]["carmodelname"];
           this.mod.data.detail["mcs_ordertime"] =  res["Detail"]["Attributes"]["mcs_ordertime"];
           this.mod.data.detail["reservationname"] = res["Detail"]["Attributes"]["reservationname"];
           this.mod.data.detail["testdrivecarname"] = res["Detail"]["Attributes"]["testdrivecarname"];
           this.mod.data.detail["driveroutename"] = res["Detail"]["Attributes"]["driveroutename"];
           this.mod.data.detail["mcs_starton"] = res["Detail"]["Attributes"]["mcs_starton"];
           this.mod.data.detail["mcs_endon"] = res["Detail"]["Attributes"]["mcs_endon"];
           this.mod.data.detail["mcs_cancelreason"] = res["Detail"]["Attributes"]["mcs_cancelreason"];
           
        } 
        if (!this._valid.isNull(res.AttachmentDetail)) {
          for (var key in res.AttachmentDetail) {
             
            var obj = {};
             obj["mcs_filetype"] = res.AttachmentDetail[key]["Attributes"]["mcs_filetype"];
            obj["mcs_fileurl"] = res.AttachmentDetail[key]["Attributes"]["mcs_fileurl"];
            obj["mcs_code"] = res.AttachmentDetail[key]["Attributes"]["mcs_code"];
            obj["mcs_filesize"] = res.AttachmentDetail[key]["Attributes"]["mcs_filesize"];
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
