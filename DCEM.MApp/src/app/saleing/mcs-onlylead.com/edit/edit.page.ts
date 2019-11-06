import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SelectSysareaComponent } from 'app/saleing/saleing.ser/components/select-sysarea/select-sysarea.component';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import sd from 'silly-datetime';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

    model = {
        apiUrl: '/api/only-lead/GetOnlyLeadDetail',//获取唯一线索数据地址
        postApiUrl: '/Api/only-lead/AddOrEdit',//编辑唯一线索数据
        postData: {},//编辑请求对象
        systemUserId: "",//当前用户id
        dealerId: "",//当前厅店id
        onlyLeadId: null,//当前记录id
        countryId: "",//国家ID
        provinceId: "",//省份ID
        cityId: "",//市ID
        districtId: "",//区ID
        level: null//行政区域级别 0:全球、1:国家、2:省、3:市、4:地区
    };
    //页面绑定对象
    onlylead = {
    };

    constructor(
        public _modalCtrl: ModalController,
        public _navCtrl: NavController,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _logininfo: Storage_LoginInfo,
        private activeRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params: Params) => {
            if (params['id'] != null && params['id'] != undefined) {
                console.log("记录Id:" + this.model.onlyLeadId);
                this.model.onlyLeadId = params['id'];
                this.pageOnBind(this.model.onlyLeadId);
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
                    this.onlylead["mcs_leadorigin"] = res["Attributes"]["mcs_leadorigin"];
                    //电话
                    this.onlylead["mcs_mobilephone"] = res["Attributes"]["mcs_mobilephone"];
                    //性别
                    this.onlylead["mcs_gender"] = res["Attributes"]["mcs_gender"];
                    //邮箱
                    this.onlylead["mcs_emailaddress1"] = res["Attributes"]["mcs_emailaddress1"];
                    //评分
                    this.onlylead["mcs_accountpoints"] = res["Attributes"]["mcs_accountpoints"];
                    //用车省份
                    this.onlylead["mcs_usecarprovince"] = res["Attributes"]["mcs_usecarprovince"];
                    //用车城市
                    this.onlylead["mcs_usecarcity"] = res["Attributes"]["mcs_usecarcity"];
                    //省份名称
                    this.onlylead["provincename"] = res["Attributes"]["_mcs_provinceid_value@OData.Community.Display.V1.FormattedValue"];
                    //省份ID
                    this.model.provinceId = res["Attributes"]["_mcs_provinceid_value"];
                    //城市名称
                    this.onlylead["cityname"] = res["Attributes"]["_mcs_cityid_value@OData.Community.Display.V1.FormattedValue"];
                    //城市ID
                    this.model.cityId = res["Attributes"]["_mcs_cityid_value"];
                    //区名称
                    this.onlylead["districtname"] = res["Attributes"]["_mcs_districtid_value@OData.Community.Display.V1.FormattedValue"];
                    //区ID
                    this.model.districtId = res["Attributes"]["_mcs_districtid_value"];
                    console.log(res);
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
                if (data.id != "undefined") {
                    this.onlylead["provinceid"] = data.id;
                    this.onlylead["provincename"] = data.name;
                }
                //重置省市区
                if (this.model.provinceId!=data.id) {
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
                if (data.id != "undefined") {
                    this.onlylead["cityid"] = data.id;
                    this.onlylead["cityname"] = data.name;
                }
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
                if (data.id != "undefined") {
                    this.onlylead["districtid"] = data.id;
                    this.onlylead["districtname"] = data.name;
                }
            }
        }
    }

    //触发省事件
    provinceOnClick()
    {
        this.provinceModal()
    }

    //触发市事件
    cityOnClick() {
        this.cityModal()
    }

    //触发区事件
    districtOnClick() {
        this.districtModal()
    }

    //保存
    saveOnClick() {

    }

}
