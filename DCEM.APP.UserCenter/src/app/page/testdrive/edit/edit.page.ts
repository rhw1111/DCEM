import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/component/typescript/dcem.core';
import { ModalController } from '@ionic/angular';
// import { SelectDealerComponent } from "app/component/modal/select-dealer/select-dealer.component";
import { ActivatedRoute, Params } from '@angular/router';
import { SelectDealerListComponent } from "app/component/modal/select-dealer-list/select-dealer-list.component"
@Component({
    selector: 'app-edit',
    templateUrl: './edit.page.html',
    styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

    model = {
        postApiUrl: 'api/testdrive/CreateTestDrive',
        detailApiUrl: 'api/testdrive/GetDriveRecordList',
        CarmodelUrl: 'api/basedata/GetCarmodel',
        TimeIntervalUrl: 'api/basedata/QueryReservationconfig',
        postData: {
            mcs_driverecordid: "", //主键Id
            mcs_fullname: "", //姓名
            mcs_mobilephone: "", //手机号
            mcs_carmodel: "", // 预约车型id
            mcs_businesstype: "",//业务类型
            mcs_dealerid: "",//试驾地点     
            mcs_dealername: "",//试驾地点名称   
            mcs_ordertime: "", // 预约时间
            mcs_testdrivetime: "",// 预约时段
            mcs_drivestatus: "", //状态
            isChecked: false
        },

        VehicletypeList: [],//车型
        TestDrivetimeList: []//预约时段

    }
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _valid: DCore_Valid,
        private _modalCtrl: ModalController,
        private activeRoute: ActivatedRoute
    ) { }

    ngOnInit() {

        this.GetCarmodel(); //加载车型

        this.activeRoute.queryParams.subscribe((params: Params) => {

            //编辑的时候
            if (params['id'] != null && params['id'] != undefined) { 
                this.model.postData.mcs_driverecordid = params['id'];
                this.pageOnBind(params['id']);
            }

            //从体验中心 进入的时候
            if(params['dealerid'] != null && params['dealerid'] != undefined)
            {
                this.model.postData.mcs_dealername = params['dealername'];
                this.model.postData.mcs_dealerid = params['dealerid'];
            }      
        });
    }

    //选择试驾地点模式窗口
    async selectDealerModal() {

        const modal = await this._modalCtrl.create({
            component: SelectDealerListComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != undefined) {
            if (data != null && typeof data != undefined) {
                if (data.id != null) {
                    this.model.postData.mcs_dealername = data.name;
                    this.model.postData.mcs_dealerid = data.id;
                }
            }
        }

        //加载预约时段
        this.GetTimeInterval("");


    }


    //根据主键查询预约
    pageOnBind(id: any) {
        //debugger;
        this._page.loadingShow();
        this._http.post(
            this.model.detailApiUrl,
            this.model.postData,
            (res: any) => {
                //debugger;
                if (res !== null) {
                    if (res.Results !== null) {
                        this.model.postData.mcs_fullname = res.Results[0]["Attributes"]["mcs_fullname"];
                        this.model.postData.mcs_mobilephone = res.Results[0]["Attributes"]["mcs_mobilephone"];
                        this.model.postData.mcs_carmodel = res.Results[0]["Attributes"]["_mcs_carmodel_value"];
                        this.model.postData.mcs_businesstype = String(res.Results[0]["Attributes"]["mcs_businesstype"]);
                        this.model.postData.mcs_dealerid = res.Results[0]["Attributes"]["_mcs_dealerid_value"];
                        this.model.postData.mcs_dealername = res.Results[0]["Attributes"]["mcs_dealer3.mcs_name"];
                        this.model.postData.mcs_ordertime = res.Results[0]["Attributes"]["mcs_ordertime"];
                        //  this.model.postData.mcs_testdrivetime = res.Results[0]["Attributes"]["_mcs_testdrivetime_value"];    
                        this.model.postData.mcs_drivestatus = res.Results[0]["Attributes"]["mcs_drivestatus"];

                        //加载预约时段
                        this.GetTimeInterval(res.Results[0]["Attributes"]["_mcs_testdrivetime_value"]);


                    }
                    else {
                        this._page.alert("消息提示", "数据加载异常");

                    }
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

    //确定预约
    SureDrive() {

        //debugger;
        var errMessage = "";
        if (this._valid.isNullOrEmpty(this.model.postData.mcs_fullname)) {
            errMessage += "请输入姓名<br>";
        }
        if (this._valid.isNullOrEmpty(this.model.postData.mcs_mobilephone)) {
            errMessage += "请输入手机号<br>";
        }
        //校验手机格式
        if (!this._valid.isPhone(this.model.postData.mcs_mobilephone)) {
            errMessage += "手机号格式错误<br>";
        }
        if (this._valid.isNullOrEmpty(this.model.postData.mcs_carmodel)) {
            errMessage += "请选择预约车型<br>";
        }
        if (this._valid.isNullOrEmpty(this.model.postData.mcs_businesstype)) {
            errMessage += "请选择业务类型<br>";
        }
        if (this._valid.isNullOrEmpty(this.model.postData.mcs_dealerid)) {
            errMessage += "请选择试乘试驾地点<br>";
        }
        if (this._valid.isNullOrEmpty(this.model.postData.mcs_ordertime)) {
            errMessage += "请选择预约时间<br>";
        }
        if (this._valid.isNullOrEmpty(this.model.postData.mcs_testdrivetime)) {
            errMessage += "请选择预约时段<br>";
        }
        if (errMessage !== "") {
            this._page.presentToastError(errMessage);
            return;
        }

        if (this.model.postData.isChecked == false) {

            this._page.presentToastError("请阅读并勾选《试乘试驾指南和协议》");
            return;
        }

        this._page.loadingShow();
        this._http.post(
            this.model.postApiUrl,
            this.model.postData,
            (res: any) => {
                // debugger;
                this._page.loadingHide();
                if (res.Result == true) {
                    console.log(res);
                    this._page.goto("/testdrive/success");
                }
                else {
                    this._page.alert("消息提示", res.Description);
                }
            },
            (err: any) => {
                this._page.loadingHide();
                this._page.alert("消息提示", "操作失败");
            }
        );

    }


    //获取预约车型
    GetCarmodel() {
        this._http.get(this.model.CarmodelUrl,
            {
                params: {
                    pageSize: 30,
                    page: 1
                }
            },
            (res: any) => {
                // debugger;
                if (res.Results !== null) {
                    //绑定数据
                    res.Results.forEach(item => {
                        var obj = {};
                        obj["mcs_carmodelid"] = item["Attributes"].mcs_carmodelid;
                        obj["mcs_name"] = item["Attributes"].mcs_name;
                        this.model.VehicletypeList.push(obj);
                    });

                }
            }
        );
    }


    //获取预约时段
    public GetTimeInterval(testdrivetime) {
        //debugger;
        if (!this._valid.isNullOrEmpty(this.model.postData.mcs_carmodel) && !this._valid.isNullOrEmpty(this.model.postData.mcs_dealerid) && !this._valid.isNullOrEmpty(this.model.postData.mcs_ordertime)) {
            this._http.get(this.model.TimeIntervalUrl,
                {
                    params: {
                        pageSize: 50,
                        page: 1,
                        carmodel: this.model.postData.mcs_carmodel,
                        dealerid: this.model.postData.mcs_dealerid,
                        mcs_ordertime: this.model.postData.mcs_ordertime
                    }
                },
                (res: any) => {
                    //debugger;
                    if (res.Results !== null) {
                        //绑定数据
                        res.Results.forEach(item => {
                            var obj = {};
                            obj["mcs_reservationconfigurationid"] = item["Attributes"].mcs_reservationconfigurationid;
                            obj["mcs_name"] = item["Attributes"].mcs_name;
                            this.model.TestDrivetimeList.push(obj);

                        });
                        if (!this._valid.isNullOrEmpty(testdrivetime)) {
                            this.model.postData.mcs_testdrivetime = testdrivetime;
                        }

                    }
                    else {
                        this._page.alert("消息提示", "预约时段加载异常");
                    }

                },
                (err: any) => {
                    this._page.alert("消息提示", "预约时段加载异常");

                }
            );
        }
    }

    CheckData() {
        var errMessage = "";

        if (this._valid.isNullOrEmpty(this.model.postData.mcs_carmodel)) {
            errMessage += "请先选择试驾车型<br>";
        }
        if (this._valid.isNullOrEmpty(this.model.postData.mcs_dealerid)) {
            errMessage += "请先选择试驾地点<br>";
        }

        if (this._valid.isNullOrEmpty(this.model.postData.mcs_ordertime)) {
            errMessage += "请先选择预约时间<br>";
        }

        if (errMessage !== "") {
            this._page.presentToastError(errMessage);
            return;
        }

    }

}
