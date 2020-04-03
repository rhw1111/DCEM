import { Component, ViewChild } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/component/typescript/dcem.core';
import { IonSlides, IonSlide,ModalController } from '@ionic/angular';
import * as $ from 'jquery';
import sd from 'silly-datetime';
import { Storage_LoginInfo } from '../../../component/typescript/logininfo.storage';
import { LoginComponent } from '../../../component/modal/login/login.component'


@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
})
export class IndexPage {

    @ViewChild('mainSlide', null) mainSlide: IonSlides;

    //数据对象
    model = {
        contentManagementApiUrl: 'api/ContentManagement/GetContentList',

        index: 0,
        isAllActivities: false,
        activitiesList: [],
        activityParams: {
            Type: 1,
            PageSize: 5,
            PageIndex: 1,
            //MaxPageIndex: 0
        },

        isAllNews: false,
        newsList: [],
        newsParams: {
            Type: 2,
            PageSize: 5,
            PageIndex: 1,
            //MaxPageIndex: 0
        },
        //问答
        questionsList:[
            {
                Title:"关于营养均横调养有没有更好的调配秘方？",
                ShortTitle:"营养专家",
                UserName:"马小红",
                UserHeader:"/assets/img/community/index/kbl/h1.jpg",
                ImageUrl:"",
                Description:"5个紫薯煮熟去皮，4个压成紫薯泥，加入2勺香草口味蛋白混合饮料，用紫薯泥包裹低脂奶酪块，搓成若干小球。另1个紫薯切块，将其余食材加入搅拌机，低速搅拌2-3分钟。将奶昔淋在先前制作的紫薯球上，即可享用",
                CreateTime:"2020-1-23 12:23:12"
            },
            {
                Title:"香蕉圣女果奶昔制作方法如何？",
                ShortTitle:"营养专家",
                UserName:"王金华",
                UserHeader:"/assets/img/community/index/kbl/h2.jpg",
                ImageUrl:"",
                Description:"2勺 蛋白混合饮料（香草口味，约25克）1杯 脱脂牛奶（约240毫升）6颗 圣女果1根 小香蕉",
                CreateTime:"2020-1-13 17:34:52"
            },
            {
                Title:"酸奶牛油果奶昔制作方法？",
                ShortTitle:"营养专家",
                UserName:"高亢先生",
                UserHeader:"/assets/img/community/index/kbl/h3.jpg",
                ImageUrl:"",
                Description:"2勺 蛋白混合饮料（香草口味，约25克）1勺 普莱乐奶昔伴侣（约10.6克）小杯 脱脂酸奶（约150毫升）1/4个 牛油果（约25克）",
                CreateTime:"2019-12-23 08:13:22"
            },
            {
                Title:"酸奶牛油果奶昔制作方法？",
                ShortTitle:"营养专家",
                UserName:"马小红",
                UserHeader:"/assets/img/community/index/kbl/h1.jpg",
                ImageUrl:"",
                Description:"将南瓜煮熟捞出，将所有食材加入搅拌机，低速搅拌2-3分钟，直至顺滑。",
                CreateTime:"2019-11-08 15:11:21"
            },
            {
                Title:"酸奶牛油果奶昔制作方法？",
                ShortTitle:"营养专家",
                UserName:"默~",
                UserHeader:"/assets/img/community/index/kbl/h4.jpg",
                ImageUrl:"",
                Description:"2勺 蛋白混合饮料（香草口味，约25克）1勺 普莱乐奶昔伴侣（约10.6克）小杯 脱脂酸奶（约150毫升）1/4个 牛油果（约25克）",
                CreateTime:"2019-10-15 10:04:40"
            },
            {
                Title:"酸奶牛油果奶昔制作方法？",
                ShortTitle:"营养专家",
                UserName:"王金华",
                UserHeader:"/assets/img/community/index/kbl/h2.jpg",
                ImageUrl:"",
                Description:"1勺 蛋白混合饮料（香草口味，约12.5克） 1勺 蛋白混合饮料（草莓口味，约12.5克）2勺 营养蛋白粉（约20克）1杯 水（约240毫升）15克 干枸杞4块 冰块",
                CreateTime:"2019-09-05 21:11:03"
            }
        ],
        //社区活动
        communityActivityList:[
            {
                Title:"香蕉火龙果香草奶昔制作方法",
                ShortTitle:"营养专家",
                UserName:"马小红",
                UserHeader:"/assets/img/community/index/kbl/h1.jpg",
                ImageUrl:"./assets/img/community/index/kbl/1.jpg",
                ReadCount:100,
                CreateTime:"2019-21-23 12:23:12",
                TimeSpan:"10小时前"
            },
            {
                Title:"玉米菠菜奶昔制作方法",
                ShortTitle:"营养专家",
                UserName:"王金华",
                UserHeader:"/assets/img/community/index/kbl/h2.jpg",
                ImageUrl:"./assets/img/community/index/kbl/2.jpg",
                ReadCount:234,
                CreateTime:"2019-21-23 12:23:12",
                TimeSpan:"15小时前"
            },
            {
                Title:"香蕉南瓜高蛋白奶昔制作方法",
                ShortTitle:"营养专家",
                UserName:"高亢先生",
                UserHeader:"/assets/img/community/index/kbl/h3.jpg",
                ImageUrl:"./assets/img/community/index/kbl/3.jpg",
                ReadCount:311,
                CreateTime:"2019-21-23 12:23:12",
                TimeSpan:"18小时前"
            }
            ,
            {
                Title:"雪梨蜜枣奶昔制作方法",
                ShortTitle:"营养专家",
                UserName:"默~",
                UserHeader:"/assets/img/community/index/kbl/h4.jpg",
                ImageUrl:"./assets/img/community/index/kbl/4.jpg",
                ReadCount:311,
                CreateTime:"2019-21-23 12:23:12",
                TimeSpan:"24小时前"
            }
        ]
    }

    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private modalCtrl: ModalController,
        public _logininfo: Storage_LoginInfo,
    ) { }

    ngOnInit() {
        this.init();
    }

    init() {
        //切换事件tab
        var that: IndexPage = this;
        $(".dm-top-nav-tag").find("div").click(function () {
            var index = $(this).parent().index();
            that.mainSlide.slideTo(index);
        })
    }

    tagChange(index) {
        this.model.index = index;
        $(".dm-top-nav-tag").find("div").attr("class", "dm-top-nav-tag-text");
        $(".dm-top-nav-tag").find("div").eq(index).addClass("selected");
        this.ShowAction(null, false);
    }

    //切换事件slides
    async slideChange(event) {
        let index: number = await this.mainSlide.getActiveIndex();
        this.tagChange(index);
    }

    //下拉刷新
    // DoRefresh(event) {
    //     this.model.params.PageIndex = 1;
    //     this.model.isAllData = false;
    //     this.ShowAction(event);
    // }

    //加载下一页
    DoLoading(event) {
        this.ShowAction(event, true);
    }

    //根据首页index不同触发不同列表事件
    //为了保证点击tab能重刷数据，故采用以下改动
    ShowAction(event, isNextPage) {
        switch (this.model.index) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                if (isNextPage) {
                    // if (this.model.activityParams.MaxPageIndex > 0) {
                    //     this.model.activityParams.PageIndex = this.model.activityParams.MaxPageIndex;
                    // } else {
                    this.model.activityParams.PageIndex++;
                    //}
                } else {
                    this.model.isAllActivities = false;
                    this.model.activitiesList = [];
                    this.model.activityParams.PageIndex = 1;
                    //this.model.activityParams.MaxPageIndex = 0;
                }
                this.ShowAcitivities(event);
                break;
            case 3:
                if (isNextPage) {
                    // if (this.model.newsParams.MaxPageIndex > 0) {
                    //     this.model.newsParams.PageIndex = this.model.newsParams.MaxPageIndex;
                    // } else {
                    this.model.newsParams.PageIndex++;
                    //}
                } else {
                    this.model.isAllNews = false;
                    this.model.newsList = [];
                    this.model.newsParams.PageIndex = 1;
                    //this.model.newsParams.MaxPageIndex = 0;
                }
                this.ShowNews(event);
                break;
        }
    }

    //显示活动列表页面
    ShowAcitivities(event) {
        this._page.loadingShow();
        this._http.post(
            this.model.contentManagementApiUrl,
            this.model.activityParams,
            (res: any) => {
                if (res !== null && res.ErrorMessage == null) {
                    if (res.ContentList != null) {
                        var prePath = res.PicPathPre;
                        res.ContentList.forEach(content => {
                            var item = content["Attributes"];
                            var obj = {};
                            obj["Id"] = item["mcs_activitycontentsid"];
                            switch (item["mcs_contentstatus"]) {
                                case 1:
                                    obj["StatusLabel"] = "进行中";
                                    obj["describeLabel"] = "了解更多";
                                    break;
                                case 2:
                                    obj["StatusLabel"] = "已结束";
                                    obj["describeLabel"] = "精彩回顾";
                                    break;
                                default:
                                    obj["StatusLabel"] = "未开始";
                                    obj["describeLabel"] = "敬请期待";
                                    break;
                            }
                            obj["Title"] = item["mcs_name"];
                            obj["Time"] = item["mcs_activitytime"];
                            obj["Address"] = item["mcs_activityaddress"];
                            // obj["PicPath"] = "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3682338120,1128590170&fm=26&gp=0.jpg";
                            obj["PicPath"] = prePath + item["mcs_thumbnail"];
                            this.model.activitiesList.push(obj);
                        });
                        event ? event.target.complete() : '';
                        //判断是否有新数据
                        if (res.ContentList.length < this.model.activityParams.PageSize) {
                            //为了保证点击tab能重刷数据，故采用以下改动
                            //event ? event.target.disabled = true : "";
                            //this.model.activityParams.MaxPageIndex = this.model.activityParams.PageIndex + 1;
                            this.model.isAllActivities = true;
                        }
                    } else {
                        this.model.isAllActivities = true;
                    }
                }
                else {
                    console.log(res);
                    this._page.alert("消息提示", "活动内容加载异常");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                console.log(err);
                this._page.alert("消息提示", "活动内容加载异常");
                this._page.loadingHide();
            }
        );
        this._page.loadingHide();
    }

    //显示资讯列表页面
    ShowNews(event) {
        this._page.loadingShow();
        this._http.post(
            this.model.contentManagementApiUrl,
            this.model.newsParams,
            (res: any) => {
                if (res !== null && res.ErrorMessage == null) {
                    if (res.ContentList != null) {
                        var prePath = res.PicPathPre;
                        res.ContentList.forEach(content => {
                            var item = content["Attributes"];
                            var obj = {};
                            obj["Id"] = item["mcs_newscontentsid"];
                            obj["Title"] = item["mcs_name"];
                            obj["Summury"] = item["mcs_description"];
                            obj["PicPath"] = prePath + item["mcs_thumbnail"];
                            this.model.newsList.push(obj);
                        });
                        event ? event.target.complete() : '';
                        //判断是否有新数据
                        if (res.ContentList.length < this.model.newsParams.PageSize) {
                            //为了保证点击tab能重刷数据，故采用以下改动
                            //event ? event.target.disabled = true : "";
                            //this.model.newsParams.MaxPageIndex = this.model.newsParams.PageIndex + 1;
                            this.model.isAllNews = true;
                        }
                    } else {
                        this.model.isAllNews = true;
                    }
                }
                else {
                    console.log(res);
                    this._page.alert("消息提示", "新闻资讯加载异常");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                console.log(err);
                this._page.alert("消息提示", "新闻资讯加载异常");
                this._page.loadingHide();
            }
        );
        this._page.loadingHide();
    }

    //日期格式
    FormatToDate(date) {
        if (date != null && date != undefined) {
            return sd.format(date, 'YYYY-MM-DD');
        }
        else {
            return '';
        }
    }

    //日期时间格式
    FormatToDateTime(date) {
        if (date != null && date != undefined) {
            return sd.format(date, 'YYYY-MM-DD HH:mm');
        }
        else {
            return '';
        }
    }

    //空值显示格式
    ShowEmptyValue(data) {
        if (data == "" || data == null || data == undefined) {
            return "--";
        } else {
            return data;
        }
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
