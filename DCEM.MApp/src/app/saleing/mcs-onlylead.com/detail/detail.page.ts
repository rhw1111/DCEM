import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { OptionSetService } from '../../../base/base.ser/optionset.service';
import sd from 'silly-datetime';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
    public tab: any = "infolist";
    mod = {
        apiUrlInfo: '/api/only-lead/GetOnlyLeadDetail', //唯一线索基本信息
        apiUrlList1: '/api/only-lead/GetLogCallList',//logcall
        apiUrlList2: '/api/only-lead/GetActivityList',//培育任务
        data: {
            mcs_onlyleadid: null,
            mcs_name: "",
            mcs_mobilephone: "",
            mcs_leadorigin: "",
            mcs_gender: "",
            mcs_emailaddress1: "",
            mcs_accountpoints: "",
            mcs_provinceid: "",
            mcs_cityid: "",
            mcs_districtid: "",
            mcs_mainowner: "",
            mcs_usecarprovince: "",
            mcs_usecarcity: ""
        },

        systemUserId: "",//当前用户id

        //联络记录参数
        datalist: [],
        isending: false,//是否加载完成
        params: {
            mcs_onlyleadid: "",
            Sort: '',
            PageSize: 10,
            PageIndex: 1,
            UserId: ""
        },

        //培育任务参数
        datalist2: [],
        isending2: false,//是否加载完成
        params2: {
            mcs_onlyleadid: "",
            Sort: '',
            PageSize: 10,
            PageIndex: 1,
            UserId: ""
        }
    };
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private activeRoute: ActivatedRoute,
        private _logininfo: Storage_LoginInfo,
        private optionset: OptionSetService,
        private menuController: MenuController,
    ) { }

    ngOnInit() {
        //debugger;
        this.mod.datalist = [];
        this.mod.datalist2 = [];

        this.activeRoute.queryParams.subscribe((params: Params) => {

            if (params['id'] != null && params['id'] != undefined) {

                this.mod.data.mcs_onlyleadid = params['id'];

                if (params['source'] != null && params['source'] != undefined && params['source'] == 2) {
                    this.pageOnLogCalllist();
                    this.tab = "Linklist";
                }
                else {

                    this.pageOnBind();
                }

            }


        });

        this.mod.systemUserId = this._logininfo.GetSystemUserId();
    }

    //每次页面加载
    ionViewWillEnter() {
        this.menuController.enable(true);
    }


    //加载唯一线索基本信息
    pageOnBind() {
        //debugger;
        this._page.loadingShow();
        this._http.get(
            this.mod.apiUrlInfo,
            {
                params: {
                    entityid: this.mod.data.mcs_onlyleadid,
                }
            },
            (res: any) => {
                //debugger;
                if (res !== null) {
                    console.log(res["Attributes"]);
                    this.mod.data.mcs_name = res["Attributes"]["mcs_name"]; //姓名
                    this.mod.data.mcs_mobilephone = res["Attributes"]["mcs_mobilephone"]; //手机
                    this.mod.data.mcs_leadorigin = this.optionset.GetOptionSetNameByValue("mcs_leadorigin", res["Attributes"]["mcs_leadorigin"]);//线索来源          
                    this.mod.data.mcs_gender = this.optionset.GetOptionSetNameByValue("mcs_gender", res["Attributes"]["mcs_gender"]);
                    this.mod.data.mcs_emailaddress1 = res["Attributes"]["mcs_emailaddress1"]; //邮箱
                    this.mod.data.mcs_accountpoints = res["Attributes"]["mcs_accountpoints"]; //评分
                    this.mod.data.mcs_provinceid = res["Attributes"]["_mcs_provinceid_value@OData.Community.Display.V1.FormattedValue"];//省
                    this.mod.data.mcs_cityid = res["Attributes"]["_mcs_cityid_value@OData.Community.Display.V1.FormattedValue"]; //市
                    this.mod.data.mcs_districtid = res["Attributes"]["_mcs_districtid_value@OData.Community.Display.V1.FormattedValue"];//区

                    this.mod.data.mcs_usecarprovince = res["Attributes"]["mcs_usecarprovince"];//用车省份
                    this.mod.data.mcs_usecarcity = res["Attributes"]["mcs_usecarcity"];//用车城市

                    //this.mod.data.serviceproxy["arrivalon"] = res["Serviceproxy"]["Attributes"]["mcs_arrivalon@OData.Community.Display.V1.FormattedValue"];

                }

                else {
                    this._page.alert("消息提示", "基础数据加载异常");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );
    }

    //加载联络记录(logcall)列表
    pageOnLogCalllist() {

        this.mod.params.mcs_onlyleadid = this.mod.data.mcs_onlyleadid;
        this.mod.params.UserId = this.mod.systemUserId;

        this.mod.datalist = [];
        // debugger;
        this._page.loadingShow();
        this._http.postForToaken(
            this.mod.apiUrlList1,
            this.mod.params,
            (res: any) => {
                // debugger;
                if (res !== null) {
                    if (res.Results !== null) {
                        for (var key in res.Results) {
                            var obj = {};
                            obj["mcs_fullname"] = res.Results[key]["Attributes"]["mcs_fullname"];
                            obj["mcs_visittime"] = res.Results[key]["Attributes"]["mcs_visittime"];
                            obj["mcs_content"] = res.Results[key]["Attributes"]["mcs_content"];
                            obj["mcs_results"] = res.Results[key]["Attributes"]["mcs_results"];
                            obj["mcs_logcallid"] = res.Results[key]["Attributes"]["mcs_logcallid"];
                            this.mod.datalist.push(obj);
                        }
                        //console.log(res);
                    }  //判断是否有新数据
                    if (res.Results.length < this.mod.params.PageIndex) {
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

    //加载培育任务列表
    pageOnActivitylist() {

        this.mod.params2.mcs_onlyleadid = this.mod.data.mcs_onlyleadid;
        this.mod.params2.UserId = this.mod.systemUserId;

        this.mod.datalist2 = [];
        this._page.loadingShow();
        this._http.postForToaken(
            this.mod.apiUrlList2,
            this.mod.params2,
            (res: any) => {
                // debugger;
                if (res !== null) {
                    if (res.Results !== null) {
                        for (var key in res.Results) {
                            var obj = {};
                            obj["mcs_thisfollowupcontent"] = res.Results[key]["Attributes"]["mcs_thisfollowupcontent"];
                            obj["createdon"] = res.Results[key]["Attributes"]["createdon"];
                            obj["mcs_activitystatus"] = this.optionset.GetOptionSetNameByValue("mcs_activitystatus", res.Results[key]["Attributes"]["mcs_activitystatus"]);
                            obj["mcs_importantlevel"] = this.optionset.GetOptionSetNameByValue("mcs_importantlevel", res.Results[key]["Attributes"]["mcs_importantlevel"]);
                            obj["mcs_activityid"] = res.Results[key]["Attributes"]["mcs_activityid"];
                            this.mod.datalist2.push(obj);
                        }
                        //console.log(res);
                    }  //判断是否有新数据
                    if (res.Results.length < this.mod.params2.PageIndex) {
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

    //logcall加载下一页
    doNextLoadingLog() {
        this.mod.params.PageIndex++;
        this.pageOnLogCalllist();
    }

    //下拉刷新log
    /* doRefreshLog() {
        this.mod.datalist = [];
        this.mod.page = 1;
        this.mod.isending = false;
        this.pageOnLogCalllist();
    } */

    //培育任务加载下一页
    doNextLoadingAc() {
        this.mod.params2.PageIndex++;
        this.pageOnActivitylist();
    }

    //下拉刷新培育任务
    /* doRefreshAc() {
        this.mod.datalist2 = [];
        this.mod.page2 = 1;
        this.mod.isending2 = false;
        this.pageOnActivitylist();
    }
     */

    FormatToDateTime(date) {
        if (date != null && date != undefined) {
            return sd.format(date, 'YYYY-MM-DD');
        }
        else {
            return '';
        }
    }

}
