import { Component, OnInit, ViewChild } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OptionSetService } from '../../../base/base.ser/optionset.service';
import { SelectFileEditComponent } from 'app/serving/serving.ser/components/select-file-edit/select-file-edit.component';
import dateformat from 'silly-datetime';
import { ModalController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {


  public tab: any = "info";
  mod = {
    uploadUrl: '/api/attachment/add',
    apiUrl: '/api/vehlisense/getdetail',
    data: {
      id:"",
      detail: [],//开票明细
      attachment: [],//附件列表 
    }
  };

  objectKeys = Object.keys;

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private _valid: DCore_Valid,
    private modalCtrl: ModalController,
    private _activeRoute: ActivatedRoute,
    private menuController: MenuController,
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

  //每次页面加载
  ionViewDidEnter() {
    this.menuController.enable(true);
  }

  //选择附件模式窗口 
  async presentFileModal(id: any) {
    var fileInputArray = [];
    const modalWin = await this.modalCtrl.create({
      component: SelectFileEditComponent,
      componentProps: { fileArray: fileInputArray }
    });

    await modalWin.present();
    const { data } = await modalWin.onDidDismiss();
    if (data.command === 1) {
      var uploaddata = [];
      data.fileArray.forEach(element => {
        var postData = {
          filename: "",
          filesize: 0,
          url: "",
          id: "",
          mcs_filecategory: 0,
          mcs_partnertype: 0,
          lookup: "",
          attrname: "",
          entitylookup: ""
        };
        postData.filename = element["fileName"];
        postData.filesize = parseInt(element["fileSize"]);
        postData.url = element["url"];
        postData.id = id;
        postData.mcs_filecategory = 2; //上牌附件
        postData.mcs_partnertype = 2;  //上牌记录
        postData.attrname = "mcs_vehlisense";
        postData.entitylookup = "mcs_vehlisense";
        uploaddata.push(postData);
      });


      this._http.post(
        this.mod.uploadUrl,
        uploaddata,
        (res: any) => {
          this._page.loadingHide();
          if (res.result == true) {
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

  pageOnBind(id: any) {
    this.mod.data.id = id;
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
          this.mod.data.detail["rostatus"] = this._optionset.GetOptionSetNameByValue("mcs_rostatus", res["Detail"]["Attributes"]["a_e1f73281e00fe911a820844a39d18a7a_x002e_mcs_rostatus"]);
          this.mod.data.detail["mcs_fullname"] = res["Detail"]["Attributes"]["mcs_fullname"];
          this.mod.data.detail["mcs_idcard"] = res["Detail"]["Attributes"]["mcs_idcard"];
          this.mod.data.detail["mcs_name"] = res["Detail"]["Attributes"]["mcs_name"];
          this.mod.data.detail["mcs_vehlicense"] = res["Detail"]["Attributes"]["mcs_vehlicense"];
          this.mod.data.detail["mcs_lisensedate"] = res["Detail"]["Attributes"]["mcs_lisensedate"] == null ? "" : this.FormatToDateTime(res["Detail"]["Attributes"]["mcs_lisensedate"]);
          this.mod.data.detail["mcs_address"] = res["Detail"]["Attributes"]["mcs_address"];
          this.mod.data.detail["mcs_fee"] = res["Detail"]["Attributes"]["mcs_fee"];

          this.mod.data.detail["vehordercode"] = res["Detail"]["Attributes"]["vehordercode"];
          this.mod.data.detail["vinname"] = res["Detail"]["Attributes"]["vinname"];
          this.mod.data.detail["vehdeliverycode"] = res["Detail"]["Attributes"]["vehdeliverycode"];
          this.mod.data.detail["deliverystatus"] = this._optionset.GetOptionSetNameByValue("mcs_deliverystatus", res["Detail"]["Attributes"]["deliverystatus"]);
          this.mod.data.detail["carusename"] = res["Detail"]["Attributes"]["a_e1f73281e00fe911a820844a39d18a7a_x002e_mcs_contactname"];
          this.mod.data.detail["contactphone"] = res["Detail"]["Attributes"]["a_e1f73281e00fe911a820844a39d18a7a_x002e_mcs_contactphone"];
          this.mod.data.detail["orderon"] = res["Detail"]["Attributes"]["a_e1f73281e00fe911a820844a39d18a7a_x002e_mcs_orderon"];


        }
        if (!this._valid.isNull(res.AttmDetail)) {
          for (var key in res.AttmDetail) {

            var obj = {};
            obj["mcs_filename"] = res.AttmDetail[key]["Attributes"]["mcs_filename"];
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
  FormatToDateTime(date) {
    if (date != null && date != undefined) {
      return dateformat.format(date, 'YYYY-MM-DD');
    }
    else {
      return '';
    }
  }

}
