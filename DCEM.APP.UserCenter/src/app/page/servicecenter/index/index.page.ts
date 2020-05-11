import { Component, ViewChild, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData } from 'app/component/typescript/dcem.core';


@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
})
export class IndexPage {
    public model: any = {
        search: {
            apiUrl: "api/product/All",
            mode: "-1",
            price: "-1",
            opack: "-1",
            pageSize: 4,//页数
            page: 1,//分页
            mcstype: 10//精品
        },
        datalist: [],//数据集合
        isending: false,//是否加载完成
    }
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _valid: DCore_Valid,
        private _shareData: DCore_ShareData
    ) { }

    public shareData = {
        page: {
            icolist: [
                {
                    title: "快速订购",
                    svg: "../assets/svg/servicecenter/index/gc.svg",
                    link: "/carcenter/carstore/index",
                    mcstype: 0,
                },
                {
                    title: "体验中心",
                    svg: "../assets/svg/servicecenter/index/tyzc.svg",
                    link: "/servicecenter/dealer/list",
                    mcstype: 0,
                },
                // {
                //     title: "金融服务",
                //     svg: "../assets/svg/servicecenter/index/jrfw.svg",
                //     link: "#",
                //     mcstype: 0,
                // },
                // {
                //     title: "车险服务",
                //     svg: "../assets/svg/servicecenter/index/cxfw.svg",
                //     link: "#",
                //     mcstype: 0,
                // },
                // {
                //     title: "流量服务",
                //     svg: "../assets/svg/servicecenter/index/llfw.svg",
                //     link: "#",
                //     mcstype: 0,
                // },
                // {
                //     title: "违章代缴",
                //     svg: "../assets/svg/servicecenter/index/wzdj.svg",
                //     link: "#",
                //     mcstype: 0,
                // },
                {
                    title: "BMI测试",
                    svg: "../assets/svg/servicecenter/index/yywb.svg",
                    link: "/servicecenter/reservation/edit",
                    mcstype: 0,
                },
                // {
                //     title: "道路救援",
                //     svg: "../assets/svg/servicecenter/index/dljy.svg",
                //     link: "#",
                //     mcstype: 0,
                // },
                // {
                //     title: "停车服务",
                //     svg: "../assets/svg/servicecenter/index/tcff.svg",
                //     link: "#",
                //     mcstype: 0,
                // },
                {
                    title: "在线客服",
                    svg: "../assets/svg/servicecenter/index/zxkf.svg",
                    link: "#",
                    mcstype: 0,
                },
                // {
                //     title: "车辆施工",
                //     svg: "../assets/svg/servicecenter/index/clsg.svg",
                //     link: "/servicecenter/boutique/list",
                //     mcstype: 8,
                // },
                {
                    title: "业务办理",
                    svg: "../assets/svg/servicecenter/index/ywbl.svg",
                    link: "/servicecenter/boutique/list",
                    mcstype: 7,
                },
                // {
                //     title: "车辆服务",
                //     svg: "../assets/svg/servicecenter/index/clfw.svg",
                //     link: "/servicecenter/boutique/list",
                //     mcstype: 11,
                // },
            ],
            advertisement: {
                imgscr: "./assets/img/jf.jpg",
                link: "#"
            }
        }
    }

    ngOnInit() {
        this.initListLoading();
    }



    ionViewWillEnter() {
        this.initPage();
    }

    public initPage() {
        this._http.get(
            "api/SysConfig/GetCepConfig",
            {
                params: {
                    key: "DCEM_ServiceCenter_Index",
                }

            },
            (res: any) => {
                if (!this._valid.isNullOrEmpty(res["mcs_val"])) {
                    this.shareData.page = $.parseJSON(res["mcs_val"]);
                }
                console.log(this.shareData.page);
            },
            (err: any) => {

                console.log(err);
            }
        );
    }


    //初始化页面数据加载
    initListLoading() {
        this._page.loadingShow();
        this.getList(null);
    }

    //获取列表数据
    getList(event) {
        this._http.postForShopping(this.model.search.apiUrl,
            {
                StartDateTime: "2019-01-01 00:00:00",
                EndDateTime: "2022-12-31 23:59:59",
                PageSize: this.model.search.pageSize,
                PageIndex: this.model.search.page,
                McsType: this.model.search.mcstype
            },
            (res: any) => {
                if (res != null && res.Datas !== null) {
                    //绑定数据
                    res.Datas.forEach(item => {
                        var imagedata = [];
                        if (item.ImageData != null || item.ImageData.length > 0) {
                            item.ImageData.forEach(temp => {
                                if (temp.Category == 2) {
                                    imagedata.push(temp);
                                }
                            });
                        }
                        item.ImageData = imagedata;
                        this.model.datalist.push(item);
                    });
                    event ? event.target.complete() : '';
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
