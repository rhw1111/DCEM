import { Component, OnInit, ViewChild } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OptionSetService } from '../../../base/base.ser/optionset.service';
import { ModalController, NavController } from '@ionic/angular';
import { DragrouteComponent } from 'app/base/base.ser/components/map/dragroute/dragroute.component';
import sd from 'silly-datetime';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public tab: any = "info";
  mod: any = {
    apiUrl: '/api/drive-record/GetDetail',
    editUrl: '/api/drive-record/AddOrEdit',
    data: {
      detail: [],//开票明细
      attachment: [],//附件列表 
    },
    postData: {},
    driveRecord: {}
  };

  objectKeys = Object.keys;

  constructor(
    public _modalCtrl: ModalController,
    private _http: DCore_Http,
    private _page: DCore_Page,
    private _valid: DCore_Valid,
    private _activeRoute: ActivatedRoute,
    private menuController: MenuController,
    private _optionset: OptionSetService
  ) { }


  //IonSegment

  ngOnInit() {
    this._activeRoute.queryParams.subscribe((params: Params) => {
      if (params['id'] != null && params['id'] != undefined) {
        this.pageOnBind(params['id']);
      }
    });
  }

  //每次页面加载
  ionViewWillEnter() {
    this.menuController.enable(true);
  }

  //加载地图
  async loadmap() {
    debugger;
    if (this.mod.data.detail["mcs_startlongitude"] != undefined && this.mod.data.detail["mcs_startlongitude"] != undefined && this.mod.data.detail["mcs_endlongitude"] != undefined && this.mod.data.detail["mcs_endlatitude"] != undefined) {
      const modal = await this._modalCtrl.create({
        component: DragrouteComponent,
        componentProps: {
          'startlongitude': this.mod.data.detail["mcs_startlongitude"],
          'startlatitude': this.mod.data.detail["mcs_startlatitude"],
          'endlongitude': this.mod.data.detail["mcs_endlongitude"],
          'endlatitude': this.mod.data.detail["mcs_endlatitude"]
        }
      });
      await modal.present();
    }
    else {
      this._page.alert("消息提示", "请先填写完善试驾线路信息！");
    }
  }
  pageOnBind(id: any) {
    this.mod.data.detail["id"] = id;
    // debugger;
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
          this.mod.data.detail["testdrivefeedbackname"] = res["Detail"]["Attributes"]["testdrivefeedbackname"];
          this.mod.data.detail["mcs_drivestatus"] = res["Detail"]["Attributes"]["mcs_drivestatus"];
          this.mod.data.detail["statusname"] = this._optionset.GetOptionSetNameByValue("mcs_drivestatus", res["Detail"]["Attributes"]["mcs_drivestatus"]);;
          this.mod.data.detail["mcs_fullname"] = res["Detail"]["Attributes"]["mcs_fullname"];
          this.mod.data.detail["mcs_mobilephone"] = res["Detail"]["Attributes"]["mcs_mobilephone"];
          this.mod.data.detail["mcs_businesstype"] = this._optionset.GetOptionSetNameByValue("mcs_businesstype", res["Detail"]["Attributes"]["mcs_businesstype"]);
          this.mod.data.detail["carmodelname"] = res["Detail"]["Attributes"]["carmodelname"];
          this.mod.data.detail["mcs_ordertime"] = res["Detail"]["Attributes"]["mcs_ordertime"];
          this.mod.data.detail["reservationname"] = res["Detail"]["Attributes"]["reservationname"];
          this.mod.data.detail["testdrivecarname"] = res["Detail"]["Attributes"]["testdrivecarname"];
          this.mod.data.detail["driveroutename"] = res["Detail"]["Attributes"]["driveroutename"];
          this.mod.data.detail["mcs_starton"] = res["Detail"]["Attributes"]["mcs_starton"];
          this.mod.data.detail["mcs_endon"] = res["Detail"]["Attributes"]["mcs_endon"];
          this.mod.data.detail["mcs_cancelreason"] = res["Detail"]["Attributes"]["mcs_cancelreason"];
          this.mod.data.detail["mcs_startlongitude"] = res["Detail"]["Attributes"]["startlongitude"];
          this.mod.data.detail["mcs_startlatitude"] = res["Detail"]["Attributes"]["startlatitude"];
          this.mod.data.detail["mcs_endlongitude"] = res["Detail"]["Attributes"]["endlongitude"];
          this.mod.data.detail["mcs_endlatitude"] = res["Detail"]["Attributes"]["endlatitude"];
        }
        if (!this._valid.isNull(res.AttachmentDetail)) {
          for (var key in res.AttachmentDetail) {

            var obj = {};
            obj["mcs_filename"] = res.AttachmentDetail[key]["Attributes"]["mcs_filename"];
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

  endOnClick(id: any) {
    this.saveOnClick(id, 2);
  }
  beginOnClick(id: any) {
    if (this._valid.isNull(this.mod.data.attachment) || this.mod.data.attachment.length == 0) {
      this._page.alert("消息提示", "开始试乘试驾前请上传试驾协议、驾驶证、身份证附件");
      return
    }

    this.saveOnClick(id, 1);
  }

  public saveOnClick(id: any, type: any) {
    // debugger;

    this.mod.driveRecord['mcs_driverecordid'] = id;
    //判断是开始试驾还是结束试驾
    if (type == 1) {
      this.mod.driveRecord['mcs_drivestatus'] = 14;
      this.mod.driveRecord['mcs_starton'] = this.FormatToDate(new Date());
    }
    else {
      this.mod.driveRecord['mcs_drivestatus'] = 15;
      this.mod.driveRecord['mcs_endon'] = this.FormatToDate(new Date());
    }
    this.mod.postData["driveRecord"] = this.mod.driveRecord;
    this._page.loadingShow();
    this._http.postForToaken(
      this.mod.editUrl, this.mod.postData,
      (res: any) => {
        this._page.loadingHide();
        if (res.Result == true) {

          this._page.alert("消息提示", "操作成功");
          window.location.reload();
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

  //日期格式
  public FormatToDate(date) {
    if (date != null && date != undefined) {
      // debugger;
      return sd.format(date, 'YYYY-MM-DDTHH:mm:ssZ');
    }
    else {
      return null;
    }
  }

}
