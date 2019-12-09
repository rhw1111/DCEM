import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/component/typescript/Dcem.core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.page.html',
  styleUrls: ['./newsdetail.page.scss'],
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
      Collections: ""
    }
  }

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private activeRoute: ActivatedRoute
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
          if (res.Results !== null) {
            this.model.newsEntity.Title = res.Results[0]["Attributes"]["mcs_name"];

            this.model.newsEntity.Pic = res.Results[0]["Attributes"]["mcs_thumbnail"];
            this.model.newsEntity.Summury = res.Results[0]["Attributes"]["mcs_description"];
            this.model.newsEntity.Writer = res.Results[0]["Attributes"]["mcs_publisher"];
            this.model.newsEntity.Time = res.Results[0]["Attributes"]["mcs_releasetime"];

            this.model.newsEntity.Content = res.Results[0]["Attributes"]["mcs_contenttext"];

            this.model.newsEntity.Views = res.Results[0]["Attributes"]["mcs_views"];
            this.model.newsEntity.Likes = res.Results[0]["Attributes"]["mcs_likes"];
            this.model.newsEntity.Collections = res.Results[0]["Attributes"]["mcs_collections"];
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
