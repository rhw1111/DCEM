import { Component, OnInit } from '@angular/core';
import { IonicNativePlugin } from '@ionic-native/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DCore_Http, DCore_Page } from 'app/component/typescript/dcem.core';
import * as $ from 'jquery';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {


  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
  ) { }

  data={
    url:"https://subcrmuatapi.sokon.com/ocr/api/ocr/Invoice",
    json:{
      FileUrl:"D:\\Publish\\WebSite\\API\\OCR\\img\\电子发票照片3.jpg"
    },
    mod:{
      fpmc:"",
      fpzl:"",
      fpdm:"",
      fphm:"",
      kprq:"",
      jym:"",
      gfmc:"",
      gfsbh:"",
      gfdh:"",
      gfzh:"",
      mmq:"",
      xsfmc:"",
      xsfsbh:"",
      xsfdh:"",
      xsfzh:"",
      hjje:"",
      hjse:"",
      hjdx:"",
      hjxx:"",
      skr:"",
      fh:"",
      kpr:"",
      bz:"",
      list:[
        {
          spmc:"",
          ggxh:"",
          dw:"",
          sl:"",
          dj:"",
          je:"",
          slv:"",
          se:"",
        }
      ]
    }

  }

  ngOnInit() {
    this.invoice(this.data.json);
  }
  //增值税发票识别
  invoice(json){
    //this._page.loadingShow();
    this._http.postCustom(
        this.data.url,
        json,
        (res: any) => {
            console.log(res);
            if(res!=null && res.Code=="000"){
              var item=res.Data;
              if(item!=null){
                this.data.mod.fpmc=item["发票名称"];
                this.data.mod.fpzl=item["发票种类"];
                this.data.mod.fpdm=item["发票代码"];
                this.data.mod.fphm=item["发票号码"];
                this.data.mod.kprq=item["开票日期"];
                this.data.mod.jym=item["校验码"];
                this.data.mod.gfmc=item["购方名称"];
                this.data.mod.gfsbh=item["购方纳税人识别号"];
                this.data.mod.gfdh=item["购方地址及电话"];
                this.data.mod.gfzh=item["购方开户行及账号"];
                this.data.mod.mmq=item["密码区"];
                this.data.mod.xsfmc=item["销售方名称"];
                this.data.mod.xsfsbh=item["销售方纳税人识别号"];
                this.data.mod.xsfdh=item["销售方地址及电话"];
                this.data.mod.xsfzh=item["销售方开户行及账号"];
                this.data.mod.hjje=item["合计金额"];
                this.data.mod.hjse=item["合计税额"];
                this.data.mod.hjdx=item["价税合计大写"];
                this.data.mod.hjxx=item["价税合计小写"];
                this.data.mod.skr=item["收款人"];
                this.data.mod.fh=item["复核"];
                this.data.mod.kpr=item["开票人"];
                this.data.mod.bz=item["备注"];
                if(item["货物集合"]!=null && item["货物集合"].length>0){
                  this.data.mod.list=[];
                  for (let i = 0; i < item["货物集合"].length; i++) {
                    var itm=item["货物集合"][i];
                    this.data.mod.list.push({
                      spmc:itm["货物名称"],
                      ggxh:itm["规格型号"],
                      dw:itm["单位"],
                      sl:itm["数量"],
                      dj:itm["单价"],
                      je:itm["金额"],
                      slv:itm["税率"],
                      se:itm["税额"],
                    });
                    
                  }
                }
              }


            }
            else {
              this._page.alert("消息提示", res.Message);
            }

            //this._page.loadingHide();
        },
        (err: any) => {
            console.log(err);
            this._page.alert("消息提示", "发票信息识别错误");
            //this._page.loadingHide();
        }
    );

}
}
