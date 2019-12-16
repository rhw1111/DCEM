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
                    title: "购车",
                    svg: "../assets/svg/servicecenter/index/gc.svg",
                    link: "/carcenter/carstore/index",
                },
                {
                    title: "体验中心",
                    svg: "../assets/svg/servicecenter/index/tyzc.svg",
                    link: "/servicecenter/dealer/list",
                },
                {
                    title: "金融服务",
                    svg: "../assets/svg/servicecenter/index/jrfw.svg",
                    link: "#",
                },
                {
                    title: "车险服务",
                    svg: "../assets/svg/servicecenter/index/cxfw.svg",
                    link: "#",
                },
                {
                    title: "流量服务",
                    svg: "../assets/svg/servicecenter/index/llfw.svg",
                    link: "#",
                },
                {
                    title: "违章代缴",
                    svg: "../assets/svg/servicecenter/index/wzdj.svg",
                    link: "#",
                },
                {
                    title: "预约维保",
                    svg: "../assets/svg/servicecenter/index/yywb.svg",
                    link: "/servicecenter/reservation/edit",
                },
                {
                    title: "道路救援",
                    svg: "../assets/svg/servicecenter/index/dljy.svg",
                    link: "#",
                },
                {
                    title: "停车服务",
                    svg: "../assets/svg/servicecenter/index/tcff.svg",
                    link: "#",
                },
                {
                    title: "在线客服",
                    svg: "../assets/svg/servicecenter/index/zxkf.svg",
                    link: "#",
                },
            ],
            advertisement: {
                imgscr: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574598586463&di=af0381a4c02b55fac4744bd1b758e453&imgtype=0&src=http%3A%2F%2Fpic.0513.org%2Fforum%2F201404%2F11%2F153229a7zhbii1115rtwkn.jpg",
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
        console.log(JSON.stringify(this.shareData.page));
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
                EndDateTime: "2019-12-31 23:59:59",
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
