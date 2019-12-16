import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../component/typescript/dcem.core';
import { Storage_LoginInfo } from "../../../../component/typescript/logininfo.storage";
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private _http: DCore_Http,
    private _page: DCore_Page,
    private _logininfo: Storage_LoginInfo) { }

  ngOnInit() {
    this.pageOnBind();
    this.pageUserTags();
  }
  public model = {
    apiUrltags: "api/user/getusertag",
    apiUrlDetail: 'api/user/getuserdetail',
    id:this._logininfo.GetSystemUserId(),
    info: {
      username: "",
      mobile: "",
      clues: "",
      gender: "",
      mail: "",
      province: "",
      city: "",
      area: "",
      describe: ""
    }
  };
  public colors = ["primary", "secondary", "tertiary", "success", "warning", "danger"];
  public tags = [];
  pageOnBind() {
    this._page.loadingShow();
    this._http.postForToaken(
      this.model.apiUrlDetail,
      { 'id': this.model.id },
      (res: any) => {
        if (res !== null) {
          var attr = res["Attributes"];
          this.model.info.gender = attr["mcs_gender@OData.Community.Display.V1.FormattedValue"];
          this.model.info.mobile = attr["mcs_phone"];
          this.model.info.mail = attr["mcs_email"];
          this.model.info.username = attr["mcs_nickname"];
          this.model.info.province = attr["_mcs_province_value@OData.Community.Display.V1.FormattedValue"];
          this.model.info.city = attr["_mcs_city_value@OData.Community.Display.V1.FormattedValue"];
          this.model.info.area = attr["_mcs_area_value@OData.Community.Display.V1.FormattedValue"];
        }
        else {
          this._page.alert("消息提示", "用户信息加载异常");
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "用户信息加载异常");
        this._page.loadingHide();
      }
    );

  }

  pageUserTags() {
    this._http.postForToaken(
      this.model.apiUrltags,
      { 'id': this.model.id },
      (res: any) => {
        if (res !== null) {
          var data = res.tags;
          var index = 0;
          for (let i = 0; i < data.length; i++) {
            var attr = data[i]["Attributes"];
            var obj = {};
            obj["name"] = attr["mcs_name"];
            index = i > 6 ? 1 : i;
            obj["color"] = this.colors[index];
            this.tags.push(obj);
          }
        }
      }
    )
  }
  saveOnClick() {
    this._page.goto("/personalcenter/userinfo/edit");
  }
}
