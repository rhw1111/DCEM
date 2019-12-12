import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from '../../typescript/dcem.core';
import { Router } from '@angular/router';
import { ModalController, IonContent, NavParams } from '@ionic/angular';
import * as $ from 'jquery';
import { Storage_LoginInfo } from '../../typescript/logininfo.storage';

@Component({
  selector: 'app-reg-agreement',
  templateUrl: './reg-agreement.component.html',
  styleUrls: ['./reg-agreement.component.scss'],
})
export class RegAgreementComponent implements OnInit {

  public mod: any = {
    url: "api/user/getagreement",
    model: {
      mcs_contenttext: "",
      mcs_description: "",
      mcs_thumbnail: ""
    }
  }
  constructor(private modalCtrl: ModalController,
    private _http: DCore_Http,
    private _logininfo: Storage_LoginInfo,
    private _page: DCore_Page,
    private route: Router,
    private _valid: DCore_Valid,
    private _navParams: NavParams) {

    this.getagreement(_navParams.get('defcode'));
  }

  getagreement(code) {
    debugger;
    this._http.post(
      this.mod.url,
        code  ,
      (res: any) => {
        if (res.Result == true) {
          this.mod.model.mcs_contenttext = res.Data["Attributes"]["mcs_contenttext"];
          this.mod.model.mcs_description = res.Data["Attributes"]["mcs_description"];
          this.mod.model.mcs_thumbnail = res.Data["Attributes"]["mcs_thumbnail"];
        }
      },
      (err: any) => {
        this._page.alert("消息提示", "操作失败");
      }
    );
  }
  ngOnInit() { }

}
