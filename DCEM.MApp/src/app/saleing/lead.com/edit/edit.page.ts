import { Component, OnInit } from '@angular/core';
import { DCore_Page, DCore_Http, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { ModalController, NavController } from '@ionic/angular';
import { SelectSysareaComponent } from 'app/saleing/saleing.ser/components/select-sysarea/select-sysarea.component';
import { OptionSetService } from '../../saleing.ser/optionset.service';
@Component({
    selector: 'app-edit',
    templateUrl: './edit.page.html',
    styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

    constructor(
        public _modalCtrl: ModalController,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _valid: DCore_Valid,
        private _userinfo: Storage_LoginInfo,
        private _optionset: OptionSetService,
    ) {
    }

    public model: any = {
        apiUrl: '/api/Originalclue/create',
        //国家默认中国
        countryId: "7E83801C-795B-E911-A824-B53F780FAC1C",
        level: null,//行政区域级别 0:全球、1:国家、2:省、3:市、4:地区
        scoreoption: [],
        genderoption: [],
        leadoriginoption: [],
        ChoiceTag: [],//选择的客户标签id集合
        info: {
            username: "",
            mobile: "",
            clues: -1,
            gender: 1,
            mail: "",
            province: "",
            provincename: "",
            city: "",
            cityname: "",
            area: "",
            areaname: "",
            score: -1,
            describe: "",
            userid: this._userinfo.GetSystemUserId(),
            dealerid: "3EFBFFF6-EF1A-E911-A821-A4A314186A20",//this._userinfo.GetDealerid()
        }
    }
    public CustomerTagModel: any = {
        apiCustomerTagUrl: "/api/Originalclue/GetCustomerTagList",
        CustomerTags: [],//{"name":"","value":"","customcolor":""}
        CustomColor: ["primary", "secondary", "tertiary", "success", "warning", "danger", "medium", "dark"],

    }
    ngOnInit() {
        this.model.scoreoption = this._optionset.Get("lead_mcs_accountpoints");
        this.model.genderoption = this._optionset.Get("lead_mcs_gender");
        this.model.leadoriginoption = this._optionset.Get("lead_mcs_leadorigin");
        this.getcustomertag();
    }

    //客户标签点击事件
    checkClick(event) {
        var checkstatus = event.detail.checked;
        var id = event.detail.value;
        if (checkstatus) {
            var index = this.model.ChoiceTag.indexOf(id);
            if (index < 0) {
                this.model.ChoiceTag.push(id);
            }
        }
        else {
            var index = this.model.ChoiceTag.indexOf(id);
            this.model.ChoiceTag.splice(index, 1)
        }
    }

    //获取客户标签
    async getcustomertag() {
        this._http.post(
            this.CustomerTagModel.apiCustomerTagUrl,
            { "UserId": this._userinfo.GetSystemUserId() },
            (res: any) => {
                var colorindex = 0;
                var data = res.customerlabels;
                for (var i in data) {
                    var attr = data[i]["Attributes"];
                    var obj = {};
                    obj["name"] = attr["mcs_name"];
                    obj["value"] = attr["mcs_tagid"];
                    if (colorindex == this.CustomerTagModel.CustomColor.length - 1) {
                        colorindex = 0;
                    }
                    obj["customcolor"] = this.CustomerTagModel.CustomColor[colorindex];
                    colorindex++;
                    this.CustomerTagModel.CustomerTags.push(obj);

                }
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
                    this.model.info.province = data.id;
                    this.model.info.provincename = data.name;
                }
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
                    this.model.province = data.id;
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
                'pid': this.model.info.province,
                'level': this.model.level,
            }
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
            if (data != null && typeof data != "undefined") {
                console.log(data);
                if (data.id != "undefined") {
                    this.model.info.city = data.id;
                    this.model.info.cityname = data.name;
                }
                //重置省市区
                if (this.model.cityId != data.id) {
                    //区名称
                    this.model.info.areaname = "--";
                    //区ID
                    this.model.info.area = "";
                    this.model.info.city = data.id;
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
                'pid': this.model.info.city,
                'level': this.model.level,
            }
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
            if (data != null && typeof data != "undefined") {
                console.log(data);
                if (data.id != "undefined") {
                    this.model.info.area = data.id;
                    this.model.info.areaname = data.name;
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
        if (this.model.info.province != "") {
            this.cityModal()
        }
    }

    //触发区事件
    districtOnClick() {
        if (this.model.info.city != "") {
            this.districtModal()
        }
    } 
    //保存
    saveOnClick() {
        if (this.model.info.username == "") {
            this._page.alert("消息提示", "请输入用户姓名");
            return;
        }
        if (this.model.info.mobile == "") {
            this._page.alert("消息提示", "请输入用户手机号");
            return;
        }
        if (!this._valid.isPhone(this.model.info.mobile)) {
            this._page.alert("消息提示", "请输入正确格式的手机号");
            return;
        }
        if (this.model.info.clues == -1) {
            this._page.alert("消息提示", "请选择线索来源");
            return;
        }
        if (this.model.info.score == -1) {
            this._page.alert("消息提示", "请选择评分");
            return;
        } 
        var tagName=this.model.info.describe+"，客户标签：";
        for (var i in this.model.ChoiceTag) { 
            var tagid=this.model.ChoiceTag[i];
            for (var x in this.CustomerTagModel.CustomerTags) { 
                var id=this.CustomerTagModel.CustomerTags[x]["value"];
                var name=this.CustomerTagModel.CustomerTags[x]["name"];
                if(id==tagid)
                {
                    tagName+=name+",";
                    break;
                }
            }
        }
        this.model.info.describe=tagName; 
        this._page.loadingShow();
        this._http.post(
            this.model.apiUrl,
            this.model.info,
            (res: any) => {
                if (res.Results !== null) {
                    this._page.alert("消息提示", "创建留资记录成功", () => {
                        this._page.goto("/saleing/lead/list");
                    });
                }
                else {
                    this._page.alert("消息提示", "创建留资记录失败");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "创建留资记录失败");
                this._page.loadingHide();
            }
        );

    }
}
