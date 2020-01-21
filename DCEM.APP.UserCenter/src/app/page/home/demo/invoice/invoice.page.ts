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
  }

}
