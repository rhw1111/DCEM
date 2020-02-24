import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_ShareData } from '../../../../app/component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Storage_LoginInfo } from '../../../component/typescript/logininfo.storage';
import { SelectSysareaComponent } from '../../../component/modal/select-sysarea/select-sysarea.component'
import { LoginComponent } from '../../../component/modal/login/login.component'
import * as $ from 'jquery';

@Component({
    selector: 'app-fillinfo',
    templateUrl: './fillinfo.page.html',
    styleUrls: ['./fillinfo.page.scss'],
})
export class FillinfoPage implements OnInit {
    public model: any = {
        search: {
            apiUrl: "api/BlindOrder/QueryList",
        },
        title: "完善预定信息",
        datas: {},
        fullname: this._logininfo.GetName(),
        mobile: this._logininfo.GetPhone(),
        blindorder: "",//预约号
        showblindorder:"",//用于前台显示
        id: this._logininfo.GetSystemUserId(),
        countryId: "DD0D2AE0-E414-EA11-B394-86D989685D12",//UAT:"7E83801C-795B-E911-A824-B53F780FAC1C",
        level: 2,//行政区域级别 0:全球、1:国家、2:省、3:市、4:地区
        genderoption: [],
        info: {
            username: "",
            mobile: "",
            clues: "",
            gender: "3",
            mail: "",
            province: "",
            provincename: "重庆市",
            city: "",
            cityname: "重庆市-市辖区",
            area: "",
            areaname: "",
            describe: ""
        },
        shareDataKey: "smallbooking",
    };
    constructor(
        private _logininfo: Storage_LoginInfo,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _modalCtrl: ModalController,
        private routerinfo: ActivatedRoute,
        private _shareData: DCore_ShareData
    ) { }

    ngOnInit() {
        //获取参数
        var datastr = this.routerinfo.snapshot.queryParams["params"];
        this.model.datas = JSON.parse(datastr);
    }
    ionViewWillEnter() {
        //this.initListLoading();
    }
    //初始化页面数据加载
    initListLoading() {
        this._page.loadingShow();
        this.getblindorder(null, this._logininfo.GetPhone());
    }
    //检查是否登陆 然后跳转
    async checkLoginAndTurn(url) {
        if ($("#blindorder").val() == "") {
            if (this._logininfo.GetNickName() != null) {
                //this._page.goto(url);
            } else {
                const modal = await this._modalCtrl.create({
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
    

    //获取预约号数据
    getblindorder(event, mobile) {
        this.model.blindorder = "";
        var request = {
            "mcs_mobilephone": mobile,
            "mcs_premiumcodestatus":0
        };
        this._http.postForToaken(this.model.search.apiUrl,
            request,
            (res: any) => {
                if (res != null && res.Results.length > 0) {
                    this.model.blindorder = res.Results[0].Attributes.mcs_name;
                    this.model.showblindorder = "您的预约号：" + res.Results[0].Attributes.mcs_premiumcode;
                    $("#blindorder").attr("style", "");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );
    }

    //焦点事件
    onchange(event, t) {
        var _that = event.target;
        this.validation(_that, t,true);
    }
    //验证
    validation(target, t,flag) {
        var text = $(target).val().toString();
        if (t == 1) {
            if (text) {
                this.hideValidate(target);
            } else {
                this.showValidate(target);
            }
        } else if (t == 2) {
            var regexp = /^1[3456789]\d{9}$/;
            if (!(regexp.test(text))) {
                this.showValidate(target);
            } else {
                this.hideValidate(target);
                if (flag) {
                    this.getblindorder(null, text);
                }
                
            }
        }
    }
    //验证通过
    hideValidate(target) {
        $(target).removeClass("is-danger");
        $(target).next("span").children("svg").hide();
    }
    //验证不通过
    showValidate(target) {
        $(target).addClass("is-danger");
        $(target).next("span").children("svg").show();
    }
    //选择性别
    chooseGender(event) {
        var _that = $(event.target);
        if (!_that.parent().hasClass("active")) {
            _that.parent().siblings("div.label-radio").removeClass("active");
            _that.parent().addClass("active");
        }
    }
    //重新预定
    GoBack() {
        this._page.goBack();
    }
    //确认订单
    BtnSave() {
        this.validation("#fullname", 1,true);
        this.validation("#mobile", 2,false);
        if ($("#fullname").hasClass("is-danger") || $("#mobile").hasClass("is-danger")) {
            return false;
        }
        var gender = 0;
        $("div.label-radio").each(function (i, item) {
            if ($(item).hasClass("active")) {
                gender = parseInt($(item).children("input").val().toString());
            }
        });
        var province = $("#province").val();
        var city = $("#city").val();
        if (!province) {
            $("#province").attr("style", "border-color:red;")
            return false;
        }
        if (!city || city == "--") {
            $("#city").attr("style", "border-color:red;")
            return false;
        }
        var blindorder = $("#blindorder").val();
        if (!blindorder) {
            $("#blindorder").attr("style", "border-color:red;")
            return false;
        }
        this.model.datas.request.PremiumCode =blindorder;
        this.model.datas.request.FullName = $("#fullname").val();
        this.model.datas.request.MobilePhone = $("#mobile").val();
        this.model.datas.request.Gender = gender;
        this.model.datas.request.CityOnCard = province;
        this.model.datas.request.ProvinceOnCard = city;
        this.model.datas.request.UserId = this._logininfo.GetSystemUserId();
        this._shareData.set(this.model.shareDataKey, this.model.datas);
        //this._page.goto("/carreserve/confirm", { params: JSON.stringify(this.model.datas) });
        this._page.goto("/carreserve/confirm");
    }
    //获取省组件
    async provinceModal() {
        this.model.level = 2;
        const modal = await this._modalCtrl.create({
            component: SelectSysareaComponent,
            componentProps: {
                'pid': this.model.countryId,
                'level': this.model.level,
            }
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
            if (data != null && typeof data != "undefined") {
                //重置省市区
                if (this.model.info.province != data.id) {
                    //城市名称
                    this.model.info.cityname = "--";
                    //城市ID
                    this.model.info.city = "";
                    //区名称
                    this.model.info.areaname = "--";
                    //区ID
                    this.model.info.area = "";
                    this.model.info.province = data.id;
                    this.model.info.provincename = data.name;
                    $("#province").attr("style", "")
                }
            } else {
                $("#province").attr("style", "border-color:red;")
            }
        } else {
            $("#province").attr("style", "border-color:red;")
        }
    }

    //获取市组件
    async cityModal() {
        this.model.level = 3;
        const modal = await this._modalCtrl.create({
            component: SelectSysareaComponent,
            componentProps: {
                'pid': this.model.info.province,
                'level': this.model.level,
            }
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
            if (data != null && typeof data != "undefined") {
                //重置省市区
                if (this.model.info.city != data.id) {
                    //区名称
                    this.model.info.areaname = "--";
                    //区ID
                    this.model.info.area = "";
                    this.model.info.city = data.id;
                    this.model.info.cityname = data.name;
                    $("#city").attr("style", "")
                }
            } else {
                $("#city").attr("style", "border-color:red;")
            }
        } else {
            $("#city").attr("style", "border-color:red;")
        }
    }
    //触发省事件
    provinceOnClick() {
        this.provinceModal()
    }

    //触发市事件
    cityOnClick() {
        if (this.model.info.province != "") {
            this.cityModal()
        }
    }
}
