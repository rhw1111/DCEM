import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  mod = {
    apiUrlInfo: '/api/only-lead/only-lead', //唯一线索基本信息
    apiUrlList1: '/api/appointment-info/GetLog',//联络记录
    apiUrlList2: '/api/appointment-info/GetLog',//培育任务
    data: {
        mcs_name:"",
        mcs_mobilephone: "",
        mcs_leadorigin: "",
        mcs_gender: "",
        mcs_emailaddress1: "",
        mcs_accountpoints:"",
        mcs_provinceid: "",
        mcs_cityid: "",
        mcs_districtid: "",
        mcs_mainowner: "",
        mcs_usecarprovince: "",
        mcs_usecarcity: ""      
    },

    //联络记录参数
    datalist: [],
    pageSize: 10,//页数
    page: 1,//分页
    sort: '',//排序的参数
    isending: false,//是否加载完成

    //培育任务参数
    datalist2: [],
    pageSize2: 10,//页数
    page2: 1,//分页
    sort2: '',//排序的参数
    isending2: false,//是否加载完成
};
constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private activeRoute: ActivatedRoute
) {

}

ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
        if (params['id'] != null && params['id'] != undefined) {
            this.pageOnBind(params['id']);
        }
    });
}

//加载唯一线索基本信息
pageOnBind(id: any) {
    this._page.loadingShow();
    this._http.get(
        this.mod.apiUrlInfo,
        {
            params: {
                guid: id,
            }
        },
        (res: any) => {
            debugger;
            if (res !== null) {
                console.log(res["Attributes"]);
                this.mod.data.mcs_name = res["Attributes"]["mcs_name"]; //姓名
                this.mod.data.mcs_mobilephone = res["Attributes"]["mcs_mobilephone"]; //手机
                this.mod.data.mcs_leadorigin = res["Attributes"]["mcs_leadorigin"]; //线索来源
                this.mod.data.mcs_gender= res["Attributes"]["mcs_gender"];  //称呼
                this.mod.data.mcs_emailaddress1 = res["mcs_emailaddress1"]; //邮箱
                this.mod.data.mcs_accountpoints= res["Attributes"]["mcs_accountpoints"]; //评分
                this.mod.data.mcs_provinceid = res["Attributes"]["mcs_provinceid"];//省
                this.mod.data.mcs_cityid = res["Attributes"]["mcs_cityid"]; //市
                this.mod.data.mcs_districtid= res["Attributes"]["mcs_districtid"];//区
                this.mod.data.mcs_mainowner = res["Attributes"]["mcs_mainowner"]; //接待专员
                this.mod.data.mcs_usecarprovince = res["Attributes"]["mcs_usecarprovince"];//用车省份
                this.mod.data.mcs_usecarcity= res["Attributes"]["mcs_usecarcity"];//用车城市
   
                //this.mod.data.serviceproxy["arrivalon"] = res["Serviceproxy"]["Attributes"]["mcs_arrivalon@OData.Community.Display.V1.FormattedValue"];
             
            }

            else {
                this._page.alert("消息提示", "基础数据加载异常");
            }
            this._page.loadingHide();
            this.pageOnLogCalllist(id);
            this.pageOnActivitylist(id);
        },
        (err: any) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        }
    );
}

//加载联络记录
pageOnLogCalllist(id: any) {
    this._page.loadingShow();
    this._http.get(
        this.mod.apiUrlList1,
        {
            params: {
                entityid: id,
                sort: this.mod.sort,
                pageSize: this.mod.pageSize,
                page: this.mod.page
            }
        },
        (res: any) => {
            debugger;
            if (res !== null) {
                if (res.Results !== null) {
                    for (var key in res.Results) {
                        var obj = {};
                        obj["createdby"] = res.Results[key]["Attributes"]["systemuser_x002e_fullname"];
                        obj["mcs_remark"] = res.Results[key]["Attributes"]["mcs_remark"];
                        obj["createdon"] = res.Results[key]["Attributes"]["createdon"];
                        this.mod.datalist.push(obj);
                    }
                    //console.log(res);
                }  //判断是否有新数据
                if (res.Results.length == 0) {
                    this.mod.isending = true;
                }
            }
            else {
                this._page.alert("消息提示", "联络记录加载异常");
            }
            this._page.loadingHide();
        },
        (err: any) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        }
    );

}

//加载培育任务
pageOnActivitylist(id: any) {
    this._page.loadingShow();
    this._http.get(
        this.mod.apiUrlList2,
        {
            params: {
                entityid: id,
                sort: this.mod.sort2,
                pageSize: this.mod.pageSize2,
                page: this.mod.page2
            }
        },
        (res: any) => {
            debugger;
            if (res !== null) {
                if (res.Results !== null) {
                    for (var key in res.Results) {
                        var obj = {};
                        obj["createdby"] = res.Results[key]["Attributes"]["systemuser_x002e_fullname"];
                        obj["mcs_remark"] = res.Results[key]["Attributes"]["mcs_remark"];
                        obj["createdon"] = res.Results[key]["Attributes"]["createdon"];
                        this.mod.datalist2.push(obj);
                    }
                    //console.log(res);
                }  //判断是否有新数据
                if (res.Results.length == 0) {
                    this.mod.isending2 = true;
                }
            }
            else {
                this._page.alert("消息提示", "联络记录加载异常");
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
