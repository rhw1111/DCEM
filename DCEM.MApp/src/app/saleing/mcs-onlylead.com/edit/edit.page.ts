import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SelectSysareaComponent } from 'app/saleing/saleing.ser/components/select-sysarea/select-sysarea.component';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import sd from 'silly-datetime';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { OptionSetService } from '../../../base/base.ser/optionset.service';
 
@Component({
    selector: 'app-edit',
    templateUrl: './edit.page.html',
    styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

    model = {
        apiUrl: '/api/only-lead/GetOnlyLeadDetail',//获取唯一线索数据地址
        postApiUrl: '/api/only-lead/Edit',//编辑唯一线索数据
        postData: {},//编辑请求对象
        systemUserId: "",//当前用户id
        dealerId: "",//当前厅店id
        onlyLeadId: null,//当前记录id
        countryId: "",//国家ID
        provinceId: "",//省份ID
        cityId: "",//市ID
        districtId: "",//区ID
        level: null,//行政区域级别 0:全球、1:国家、2:省、3:市、4:地区
        scoreoption: [],//评分选项集
        genderoption: [],//性别选项集
        leadoriginoption: []//线索来源选项集

    };
    //页面绑定对象
    onlylead={
    };

    constructor(
        public _modalCtrl: ModalController,
        public _navCtrl: NavController,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _logininfo: Storage_LoginInfo,
        private activeRoute: ActivatedRoute,
        private _optionset: OptionSetService,
        private _valid: DCore_Valid
    ) { }

    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params: Params) => {
            if (params['onlyleadid'] != null && params['onlyleadid'] != undefined) {
                console.log("记录Id:" + this.model.onlyLeadId);
                this.model.onlyLeadId = params['onlyleadid'];
                this.pageOnBind(this.model.onlyLeadId);

                this.model.scoreoption = this._optionset.Get("lead_mcs_accountpoints");
                this.model.genderoption = this._optionset.Get("lead_mcs_gender");
                this.model.leadoriginoption = this._optionset.Get("lead_mcs_leadorigin");

                //this.model.systemUserId = this._logininfo.GetSystemUserId();
            }
        });
    }

    //绑定数据
    pageOnBind(id) {
        //debugger;
        this._page.loadingShow();
        this._http.get(
            this.model.apiUrl,
            {
                params: {
                    entityid: id,
                }
            },
            (res: any) => {
                if (res !== null) {
                    //ID
                    this.onlylead["mcs_onlyleadid"] = res.Id;
                    //姓名
                    this.onlylead["mcs_name"] = res["Attributes"]["mcs_name"];
                    //线索来源
                    this.onlylead["mcs_leadorigin"] = String(res["Attributes"]["mcs_leadorigin"]);
                    //电话
                    this.onlylead["mcs_mobilephone"] = res["Attributes"]["mcs_mobilephone"];
                    //性别
                    this.onlylead["mcs_gender"] = String(res["Attributes"]["mcs_gender"]);
                    //邮箱
                    this.onlylead["mcs_emailaddress1"] = res["Attributes"]["mcs_emailaddress1"];
                    //评分
                    this.onlylead["mcs_accountpoints"] = String(res["Attributes"]["mcs_accountpoints"]);
                    //用车省份
                    this.onlylead["mcs_usecarprovince"] = res["Attributes"]["mcs_usecarprovince"];
                    //用车城市
                    this.onlylead["mcs_usecarcity"] = res["Attributes"]["mcs_usecarcity"];
                    //省份名称
                    this.onlylead["provincename"] = res["Attributes"]["_mcs_provinceid_value@OData.Community.Display.V1.FormattedValue"];
                    //省份ID
                    this.model.provinceId = res["Attributes"]["_mcs_provinceid_value"];
                    this.onlylead["mcs_provinceid"]=res["Attributes"]["_mcs_provinceid_value"];
                    //城市名称
                    this.onlylead["cityname"] = res["Attributes"]["_mcs_cityid_value@OData.Community.Display.V1.FormattedValue"];
                    //城市ID
                    this.model.cityId = res["Attributes"]["_mcs_cityid_value"];
                    this.onlylead["mcs_cityid"] = res["Attributes"]["_mcs_cityid_value"];
                    //区名称
                    this.onlylead["districtname"] = res["Attributes"]["_mcs_districtid_value@OData.Community.Display.V1.FormattedValue"];
                    //区ID
                    this.model.districtId = res["Attributes"]["_mcs_districtid_value"];
                    this.onlylead["mcs_districtid"] = res["Attributes"]["_mcs_districtid_value"];
                    console.log(res);
                    console.log(this.onlylead);
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

    //获取省组件
    async provinceModal() {
        this.model.countryId = "7E83801C-795B-E911-A824-B53F780FAC1C";
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
                console.log(data);
                if (data.id !=undefined) {
                    this.onlylead["provinceid"] = data.id;
                    this.onlylead["provincename"] = data.name;
                    //重置省市区
                    if (this.model.provinceId != data.id) {
                        //城市名称
                        this.onlylead["cityname"] = "--";
                        //城市ID
                        this.model.cityId = "";
                        //区名称
                        this.onlylead["districtname"] = "--";
                        //区ID
                        this.model.districtId = "";
                        this.model.provinceId = data.id;
                    }
                }
                
            }
        }
    }

    //获取市组件
    async cityModal() {
        this.model.level = 3;
        const modal = await this._modalCtrl.create({
            component: SelectSysareaComponent,
            componentProps: {
                'pid': this.model.provinceId,
                'level': this.model.level,
            }
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
            if (data != null && typeof data != "undefined") {
                console.log(data);
                if (data.id != undefined) {
                    this.onlylead["cityid"] = data.id;
                    this.onlylead["cityname"] = data.name;

                    //重置省市区
                    if (this.model.cityId != data.id) {
                        //区名称
                        this.onlylead["districtname"] = "--";
                        //区ID
                        this.model.districtId = "";
                        this.model.cityId = data.id;
                    }
                }
            }
        }
    }

    //获取区组件
    async districtModal() {
        this.model.level = 4;
        const modal = await this._modalCtrl.create({
            component: SelectSysareaComponent,
            componentProps: {
                'pid': this.model.cityId,
                'level': this.model.level,
            }
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
            if (data != null && typeof data != "undefined") {
                console.log(data);
                if (data.id !=undefined) {
                    this.onlylead["districtid"] = data.id;
                    this.onlylead["districtname"] = data.name;
                }
            }
        }
    }

    //触发省事件
    provinceOnClick() {
        this.provinceModal()
    }

    //触发市事件
    cityOnClick() {
        if (this.model.provinceId != "") {
            this.cityModal()
        }
    }

    //触发区事件
    districtOnClick() {
        debugger;
        if (this.model.cityId != "") {
            this.districtModal()
        }
    }

    //保存
    saveOnClick() {
        //表单校验
        if (this._valid.isNullOrEmpty(this.onlylead["mcs_name"])) {
            this._page.presentToastError("姓名必填");
            return;
        }
        if (this._valid.isNullOrEmpty(this.onlylead["mcs_mobilephone"])) {
            this._page.presentToastError("手机号必填");
            return;
        }
        if (!this._valid.isPhone(this.onlylead["mcs_mobilephone"])) {
            this._page.presentToastError("手机号格式错误");
            return;
        }
        if (this._valid.isNullOrEmpty(this.onlylead["mcs_leadorigin"])) {
            this._page.presentToastError("请选择线索来源");
            return;
        }
        if (this._valid.isNullOrEmpty(this.onlylead["mcs_gender"])) {
            this._page.presentToastError("请选择称呼");
            return;
        }
        if (this._valid.isNullOrEmpty(this.onlylead["mcs_accountpoints"])) {
            this._page.presentToastError("请选择评分");
            return;
        }
        if (this._valid.isNullOrEmpty(this.onlylead["provincename"])) {
            this._page.presentToastError("请选择省份");
            return;
        }
        if (this._valid.isNullOrEmpty(this.onlylead["cityname"])) {
            this._page.presentToastError("请选择市");
            return;
        }
        if (this._valid.isNullOrEmpty(this.onlylead["districtname"])) {
            this._page.presentToastError("请选择区");
            return;
        }
        //this.onlylead["systemuserid"] = this.model.systemUserId;

        //this.model.postData["actioncode"] = 1;
        this.model.postData["onlylead"] = this.onlylead;
        this.model.postData["onlylead"]["mcs_leadorigin"] = Number(this.onlylead["mcs_leadorigin"]);
        this.model.postData["onlylead"]["mcs_gender"] = Number(this.onlylead["mcs_gender"]);
        this.model.postData["onlylead"]["mcs_accountpoints"] = Number(this.onlylead["mcs_accountpoints"]);
        this._page.loadingShow();
        console.log(this.model.postData);
        this._http.postForToaken(
            this.model.postApiUrl,
            this.model.postData,
            (res: any) => {
                debugger;
                if (res !== null) {
                    var guid = res["Data"]["Id"];
                    this._page.goto("/saleing/onlylead/success", { guid: guid });
                }
                else {
                    this._page.alert("消息提示", "编辑记录失败");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "编辑记录失败");
                this._page.loadingHide();
            }
        );
    }

}
