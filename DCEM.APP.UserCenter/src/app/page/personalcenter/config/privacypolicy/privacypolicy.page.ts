import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/component/typescript/dcem.core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.page.html',
  styleUrls: ['./privacypolicy.page.scss'],
})
export class PrivacypolicyPage implements OnInit {

  model = {
    contentManagementApiUrl: 'api/ContentManagement/GetContentDetail',
    contentUrl: null,
    params: {
      Type: 0,
      DefCode: ""
    },
  }

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private activeRoute: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      if (params['defcode'] != null && params['defcode'] != undefined) {
        this.getContent(params['defcode']);
      }
    });
  }

  ngOnInit() {
    // this.activeRoute.queryParams.subscribe((params: Params) => {
    //   if (params['defcode'] != null && params['defcode'] != undefined) {
    //     this.getContent(params['defcode']);
    //   }
    // });
  }

  getContent(defcode: any) {
    this._page.loadingShow();
    this.model.params.DefCode = defcode;
    this._http.post(
      this.model.contentManagementApiUrl,
      this.model.params,
      (res: any) => {
        //debugger;
        if (res !== null) {
          if (res.Content !== null) {
            this.model.contentUrl = this.sanitizer.bypassSecurityTrustResourceUrl(res.Content["Attributes"]["mcs_url"]);
          }
          else {
            this._page.alert("消息提示", "数据加载异常");
          }
        }
        else {
          this._page.alert("消息提示", "数据加载异常");
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
