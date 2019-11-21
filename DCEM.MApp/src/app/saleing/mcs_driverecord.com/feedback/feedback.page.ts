import { Component, OnInit, ViewChild } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OptionSetService } from '../../saleing.ser/optionset.service';
import { IonSegment } from '@ionic/angular'; 

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  

  public tab: any = "info";
  mod = {
    apiUrl: '/api/drive-record/GetTestdrivefeedback', 
    data: {
      master: [],//问题反馈
      details: [],//问题反馈项 
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
    this.mod.data.master["id"] = id;

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
          this.mod.data.master["mcs_username"] = res["Detail"]["Attributes"]["mcs_username"];
          this.mod.data.master["mcs_userid"] = res["Detail"]["Attributes"]["mcs_userid"];
          this.mod.data.master["mcs_userphone"] = res["Detail"]["Attributes"]["mcs_userphone"];
          this.mod.data.master["mcs_score"] = res["Detail"]["Attributes"]["mcs_score"];
          this.mod.data.master["mcs_averagescore"] = res["Detail"]["Attributes"]["mcs_averagescore"];
          this.mod.data.master["mcs_surveytime"] = res["Detail"]["Attributes"]["mcs_surveytime"];
          this.mod.data.master["carmodelname"] = res["Detail"]["Attributes"]["carmodelname"];
          }
        if (!this._valid.isNull(res.Details)) {
          for (var key in res.Details) {

            var obj = {};
            obj["mcs_surveyquestion"] = res.Details[key]["Attributes"]["mcs_surveyquestion"];
            obj["mcs_suveryanswer"] = res.Details[key]["Attributes"]["mcs_suveryanswer"]; 
            this.mod.data.details.push(obj);
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
