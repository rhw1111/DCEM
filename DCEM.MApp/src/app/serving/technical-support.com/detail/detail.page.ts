import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FullScreenImage } from '@ionic-native/full-screen-image';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    public tab: any = "info";
    mod = {
        apiUrl: '/Api/tech-support/GetDetail',
        data: {
          TechnicalSupport: {
            Id:"",
            mcs_title: "",//主题
            mcs_orderstatus:null,//状态
            mcs_serviceorderid: "",//服务委托书
            mcs_repairnameid: "",//技术主管
            mcs_repairdate: "",//维修日期
            mcs_email: "",//邮箱
            mcs_phone: "",//电话
            mcs_customername: "", 
            mcs_customerphone: "",
            mcs_customerid: "",//VIN
            mcs_carplate: "",//车牌号
            mcs_enginenumber: "",//发动机号 
            mcs_mileage: "", //里程数
            mcs_motormodel: "",//电机型号
            mcs_batteryserialnumber: "",//电池序列号
            mcs_batterymodel: "",//电池型号
            mcs_ismodifiedparts: "",//是否加装
            mcs_modifiedpartscontent: "",//加装描述
            mcs_techsystem: "",//技术系统
            mcs_malfunctiontypeid: "",//故障类别代码
            mcs_malfunctiontypecontent: "",//故障描述
            mcs_diagnosiscontent: "",//检查诊断描述
            mcs_replacedparts: "",//已更换零件 
            mcs_malfunctioncontent: "",//具体故障现象
            },
            DealerAttachment: [],
            Warrantyattachment: []

        }
    };
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private activeRoute: ActivatedRoute,
        private menuController:MenuController
    ) {
       
    }

    //每次页面加载
    ionViewWillEnter() {
        this.menuController.enable(true);
    }

    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params: Params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.mod.data.TechnicalSupport.Id=params['id'];
                this.pageOnBind(params['id']);
            }
        });
    }

    //下载
    showImage(url:any){
        FullScreenImage.showImageURL(url)
        .then((data: any) => console.log(data))
        .catch((error: any) => console.error(error));
    }

    pageOnBind(id: any) {
        this._page.loadingShow();
        this._http.get(
            this.mod.apiUrl,
            {
                params: {
                    id: id,
                }
            },
            (res: any) => {
                if (res.TechnicalSupport != null) { 
                    this.mod.data.TechnicalSupport.mcs_title = res["TechnicalSupport"]["Attributes"]["mcs_title"];
                    this.mod.data.TechnicalSupport.mcs_serviceorderid = res["TechnicalSupport"]["Attributes"]["_mcs_serviceorderid_value@OData.Community.Display.V1.FormattedValue"];
                    this.mod.data.TechnicalSupport.mcs_orderstatus = res["TechnicalSupport"]["Attributes"]["mcs_orderstatus"];
                    this.mod.data.TechnicalSupport.mcs_repairnameid = res["TechnicalSupport"]["Attributes"]["_mcs_repairnameid_value@OData.Community.Display.V1.FormattedValue"];
                    this.mod.data.TechnicalSupport.mcs_repairdate = res["TechnicalSupport"]["Attributes"]["mcs_repairdate@OData.Community.Display.V1.FormattedValue"];
                    this.mod.data.TechnicalSupport.mcs_email = res["TechnicalSupport"]["Attributes"]["mcs_email"];
                    this.mod.data.TechnicalSupport.mcs_phone = res["TechnicalSupport"]["Attributes"]["mcs_phone"];
                    this.mod.data.TechnicalSupport.mcs_customername = res["TechnicalSupport"]["Attributes"]["mcs_customername"];
                    this.mod.data.TechnicalSupport.mcs_customerphone = res["TechnicalSupport"]["Attributes"]["mcs_customerphone"];
                    this.mod.data.TechnicalSupport.mcs_customerid = res["TechnicalSupport"]["Attributes"]["_mcs_customerid_value@OData.Community.Display.V1.FormattedValue"];
                    this.mod.data.TechnicalSupport.mcs_carplate = res["TechnicalSupport"]["Attributes"]["mcs_carplate"];
                    this.mod.data.TechnicalSupport.mcs_enginenumber = res["TechnicalSupport"]["Attributes"]["mcs_enginenumber"];
                    this.mod.data.TechnicalSupport.mcs_mileage = res["TechnicalSupport"]["Attributes"]["mcs_mileage"];
                    this.mod.data.TechnicalSupport.mcs_motormodel = res["TechnicalSupport"]["Attributes"]["mcs_motormodel"];
                    this.mod.data.TechnicalSupport.mcs_batteryserialnumber = res["TechnicalSupport"]["Attributes"]["mcs_batteryserialnumber"];
                    this.mod.data.TechnicalSupport.mcs_batterymodel = res["TechnicalSupport"]["Attributes"]["mcs_batterymodel"];
                    this.mod.data.TechnicalSupport.mcs_ismodifiedparts = res["TechnicalSupport"]["Attributes"]["mcs_ismodifiedparts@OData.Community.Display.V1.FormattedValue"];
                    this.mod.data.TechnicalSupport.mcs_modifiedpartscontent = res["TechnicalSupport"]["Attributes"]["mcs_modifiedpartscontent"];
                    this.mod.data.TechnicalSupport.mcs_techsystem = res["TechnicalSupport"]["Attributes"]["mcs_techsystem@OData.Community.Display.V1.FormattedValue"];
                    this.mod.data.TechnicalSupport.mcs_malfunctiontypeid = res["TechnicalSupport"]["Attributes"]["_mcs_malfunctiontypeid_value@OData.Community.Display.V1.FormattedValue"];
                    this.mod.data.TechnicalSupport.mcs_malfunctiontypecontent = res["TechnicalSupport"]["Attributes"]["mcs_malfunctiontypecontent"];
                    this.mod.data.TechnicalSupport.mcs_diagnosiscontent = res["TechnicalSupport"]["Attributes"]["mcs_diagnosiscontent"];
                    this.mod.data.TechnicalSupport.mcs_replacedparts = res["TechnicalSupport"]["Attributes"]["mcs_replacedparts"];
                    this.mod.data.TechnicalSupport.mcs_malfunctioncontent = res["TechnicalSupport"]["Attributes"]["mcs_malfunctioncontent"]; 
                  }
                if (res.DealerAttachment != null) {

                    for (var key in res.DealerAttachment) {

                        var obj = {};
                        obj["mcs_filename"] = res.DealerAttachment[key]["Attributes"]["mcs_filename"];
                        obj["mcs_filesize"] = res.DealerAttachment[key]["Attributes"]["mcs_filesize"]; 
                        obj["mcs_fileurl"] = res.DealerAttachment[key]["Attributes"]["mcs_fileurl"]; 
                        this.mod.data.DealerAttachment.push(obj);

                    }
                }
                if (res.Warrantyattachment != null) {

                    for (var key in res.Warrantyattachment) {
                        var obj = {};
                        obj["mcs_filename"] = res.Warrantyattachment[key]["Attributes"]["mcs_name"];
                        obj["mcs_filesize"] = res.Warrantyattachment[key]["Attributes"]["mcs_filesize"]; 
                        obj["mcs_fileurl"] = res.Warrantyattachment[key]["Attributes"]["mcs_fileurl"]; 
                         this.mod.data.Warrantyattachment.push(obj); 
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
