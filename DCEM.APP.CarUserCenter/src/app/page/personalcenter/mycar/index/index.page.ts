import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData } from 'app/component/typescript/dcem.core';
import { Storage_LoginInfo } from 'app/component/typescript/logininfo.storage';
@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {


    public mod: any = {
        apiUrl: 'api/uc-usercarinfo/querylist',
        data: []
    };

    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _valid: DCore_Valid,
        private _shareData: DCore_ShareData,
        private _storage_LoginInfo: Storage_LoginInfo,
    ) { }

    ngOnInit() {
        this.init();
    }


    init() {
        this._page.loadingShow();
        this._http.get(
            this.mod.apiUrl,
            {
                params: {
                    mcs_userid: this._storage_LoginInfo.GetSystemUserId()
                }
            },
            (res: any) => {
                if (!this._valid.isNull(res.Results)) {

                    for (var key in res.Results) {
                        var obj = res.Results[key]["Attributes"];
                        if (Number(key) % 2 === 0) {
                            obj["imgscr"] = "/assets/img/personalcenter/mycar/index/ck1.png";
                        }
                        else {
                            obj["imgscr"] = "/assets/img/personalcenter/mycar/index/ck2.png";
                        }
                        this.mod.data.push(obj);
                    }
                }
                else {
                    this._page.alert("消息提示", "数据加载异常");
                }
                this._page.loadingHide();
                console.log(this.mod.data);
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );
    }

}
