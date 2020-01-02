import { Component, ViewChild, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData } from 'app/component/typescript/dcem.core';
import { Storage_LoginInfo } from '../../../component/typescript/logininfo.storage';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from '../../../component/modal/login/login.component'

@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
})
export class IndexPage {

    public objectKeys = Object.keys;
    //共享数据对象
    public shareData = {
        page: {
            top: {
                slides: [
                    {
                        imgscr: "../assets/img/1png.png",
                    },
                    {
                        imgscr: "../assets/img/1png.png",
                    },
                ]
            },
            middle_finance: {
                title: "一层首付开回家",
                imgscr: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3682338120,1128590170&fm=26&gp=0.jpg"
            },
            middle_equity: {
                title: "车主九大权益",
                menulist: [
                    {
                        title: "远程诊断",
                        svg: "../assets/svg/carcenter/index/yczd.svg",
                        link: "#",
                    },
                    {
                        title: "流量畅享",
                        svg: "../assets/svg/carcenter/index/llcx.svg",
                        link: "#",
                    },
                    {
                        title: "移动服务",
                        svg: "../assets/svg/carcenter/index/ydfw.svg",
                        link: "#",
                    },
                    {
                        title: "代步服务",
                        svg: "../assets/svg/carcenter/index/dbff.svg",
                        link: "#",
                    },
                    {
                        title: "免费首保",
                        svg: "../assets/svg/carcenter/index/mfsb.svg",
                        link: "#",
                    },
                    {
                        title: "无忧救援",
                        svg: "../assets/svg/carcenter/index/wyjy.svg",
                        link: "#",
                    },
                    {
                        title: "专属充电桩",
                        svg: "../assets/svg/carcenter/index/zscdz.svg",
                        link: "#",
                    },
                    {
                        title: "智能理赔",
                        svg: "../assets/svg/carcenter/index/znlp.svg",
                        link: "#",
                    },
                    {
                        title: "违章查询",
                        svg: "../assets/svg/carcenter/index/wzcx.svg",
                        link: "#",
                    }
                ],
                button: {
                    text: "查看权益说明",
                    link: "#",
                }
            },
            middle_charging: {
                title: "充电服务",
                subtitle: "提供多种充电方式，满足城市通勤与远途出行",
                imgscr: "/assets/img/tyzx.jpg",
                menulist: [
                    {
                        title: "充电与安全",
                        svg: "../assets/svg/carcenter/index/ccyaq.svg",
                        link: "#",
                    },
                    {
                        title: "解密超充站",
                        svg: "../assets/svg/carcenter/index/jmccz.svg",
                        link: "#",
                    },
                    {
                        title: "家用充电桩",
                        svg: "../assets/svg/carcenter/index/jycdz.svg",
                        link: "#",
                    }
                ],
            },
            middle_trialrun: {
                title: "试驾评测",
                link: "#",
                list: [
                    {
                        title: "20款G3智能进化大盘点",
                        source: "网易汽车",
                        imgscr: "/assets/img/tyzx.jpg",
                        link: "#",
                    },
                    {
                        title: "除了续航提示，20款G3还有啥亮点?!!",
                        source: "网易汽车",
                        imgscr: "/assets/img/tyzx.jpg",
                        link: "#",
                    },
                    {
                        title: "20款G3智能进化大盘点",
                        source: "网易汽车",
                        imgscr: "/assets/img/tyzx.jpg",
                        link: "#",
                    },
                    {
                        title: "20款G3智能进化大盘点Demo",
                        source: "网易汽车",
                        imgscr: "/assets/img/tyzx.jpg",
                        link: "/home/demo/index",
                    },
                ],
            },
            middle_withinreach: {
                title: "智能触手可及",
                slides: [
                    {
                        imgscr: "../assets/img/2.jpg",
                        link: "#",
                    },
                    {
                        imgscr: "../assets/img/2.jpg",
                        link: "#",
                    },
                ],
            },
            bottom: {
                imgscr: "/assets/img/aboutus.png",
                link: "#",
            }
        }
    }
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _valid: DCore_Valid,
        private _shareData: DCore_ShareData,
        private modalCtrl: ModalController,
        public _logininfo: Storage_LoginInfo,
    ) { }


    ngOnInit() {

    }

    ionViewWillEnter() {
        this.initPage();
    }


    public initPage() {

        this._http.get(
            "api/SysConfig/GetCepConfig",
            {
                params: {
                    key: "DCEM_CarCenter_Index",
                }

            },
            (res: any) => {
                if (!this._valid.isNullOrEmpty(res["mcs_val"])) {
                    //console.log(res["mcs_val"]);
                    this.shareData.page = $.parseJSON(res["mcs_val"]);
                    //console.log("ok");
                }

            },
            (err: any) => {

                console.log(err);
            }
        );
    }


     //检查是否登陆 然后跳转
     async checkLoginAndTurn(url)
     {
         if (this._logininfo.GetNickName()!=null) { 
             this._page.goto(url);
         } else {
             const modal = await this.modalCtrl.create({
                 component: LoginComponent,
                 componentProps: {
                     'status': 1//登录页面状态 
                 }
             });
             await modal.present();
             //监听销毁的事件
             const { data } = await modal.onDidDismiss(); 
         } 
     }
}
