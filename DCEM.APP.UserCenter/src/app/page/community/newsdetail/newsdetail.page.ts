import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/component/typescript/Dcem.core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.page.html',
  styleUrls: ['./newsdetail.page.scss']
})
export class NewsdetailPage implements OnInit {

  model = {
    contentManagementApiUrl: 'api/ContentManagement/GetContentDetail',
    params: {
      Type: 2,
      Id: ""
    },
    newsEntity: {
      Title: "",
      Pic: "",
      Summury: "",
      Writer: "",
      Time: "",
      Content: "",
      Views: "",
      Likes: "",
      Collections: "",
      PicPath: ""
    }
  }

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private activeRoute: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      if (params['id'] != null && params['id'] != undefined) {
        this.pageOnBind(params['id']);
      }
    });
  }
  pageOnBind(id: any) {
    this._page.loadingShow();
    this.model.params.Id = id;
    this._http.post(
      this.model.contentManagementApiUrl,
      this.model.params,
      (res: any) => {
        //debugger;
        if (res !== null) {
          if (res.Content !== null) {
            this.model.newsEntity.Title = res.Content["Attributes"]["mcs_name"];

            this.model.newsEntity.Pic = res.Content["Attributes"]["mcs_thumbnail"];
            this.model.newsEntity.Summury = res.Content["Attributes"]["mcs_description"];
            this.model.newsEntity.Writer = res.Content["Attributes"]["mcs_publisher"];
            this.model.newsEntity.Time = res.Content["Attributes"]["mcs_releasetime"];

            this.model.newsEntity.Content = res.Content["Attributes"]["mcs_contenttext"];

            this.model.newsEntity.Views = res.Content["Attributes"]["mcs_views"];
            this.model.newsEntity.Likes = res.Content["Attributes"]["mcs_likes"];
            this.model.newsEntity.Collections = res.Content["Attributes"]["mcs_collections"];
            this.model.newsEntity.PicPath = res.Content["Attributes"]["mcs_thumbnail"];
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

  //空值显示格式
  ShowEmptyValue(data) {
    if (data == "" || data == null || data == undefined) {
      return "0";
    }
  }

  RenderHTML(strHTML: any) {
    return this.sanitizer.bypassSecurityTrustHtml(strHTML);
  }
}
