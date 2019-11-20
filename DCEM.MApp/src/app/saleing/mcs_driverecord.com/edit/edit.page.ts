import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { OptionSetService } from '../../saleing.ser/optionset.service';
import sd from 'silly-datetime';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

    model = {
        getApiUrl: '/api/drive-record/GetDetail',//试乘试驾详情地址
        postApiUrl: '/Api/drive-record/AddOrEdit',//试乘试驾编辑地址
        carModelApiUrl: '/Api/Vehowner/GetCarmodelList',//试驾车型地址
        //driveCarApiUrl: '/api/drive-record/QueryDriveCarList',//试驾车辆
        reservationApiUrl: '/Api/drive-record/QueryReservationList',//预约时段地址
        postData: {},
        driveRecord: {},
        driveRecordId: null,//当前记录id
        businesstypeoption: [],//业务类型
        carmodeloption: [],//试驾车型
        drivetimeoption: [],//预约时段
        isOrderTimeChange: true,//预约日期是否改变
        isCarModelChange: true//预约车型是否改变
    };

    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _valid: DCore_Valid,
        private activeRoute: ActivatedRoute,
        private _optionset: OptionSetService) { }

    ngOnInit() {
  }

    ionViewWillEnter() {
        this.activeRoute.queryParams.subscribe((params: Params) => {
            //编辑绑定预约单数据
            if (params['id'] != null && params['id'] != undefined) {
                this.model.driveRecordId = params['id'];
                this.pageOnBind(this.model.driveRecordId);
            }
        });

        //业务类型
        this.model.businesstypeoption = this._optionset.Get("mcs_drivebusinesstype");
        //预约车型
        this.CarModelOption();
    }

    //编辑绑定数据
    public pageOnBind(id) {

    }

    //获取试驾车型
    public CarModelOption() {
        this.model.carmodeloption = [];
        this._http.getForToaken(
            this.model.carModelApiUrl,
            {
            },
            (res: any) => {
                if (res.Results !== null) {

                    for (var key in res.Results) {
                        var obj = {};
                        obj["model"] = res.Results[key]["Attributes"];
                        obj["value"] = res.Results[key]["Attributes"]["mcs_carmodelid"];
                        obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
                        this.model.carmodeloption.push(obj);
                    }
                }
                else {
                    this._page.alert("消息提示", "试驾车型数据加载异常");
                }
            },
            (err: any) => {
                this._page.alert("消息提示", "试驾车型数据加载异常");
            }
        );
    }

    //试驾预约时段
    public DriveTimeOption(carmodelid, reservationdate) {
        this.model.drivetimeoption = [];
        this._http.getForToaken(
            this.model.reservationApiUrl,
            {
                "CarModelId": carmodelid,
                "ReservationDate": reservationdate
            },
            (res: any) => {
                if (res.Results !== null) {

                    for (var key in res.Results) {
                        var obj = {};
                        obj["model"] = res.Results[key]["Attributes"];
                        obj["value"] = res.Results[key]["Attributes"]["mcs_reservationconfigurationid"];
                        obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
                        this.model.drivetimeoption.push(obj);
                    }
                }
                else {
                    this._page.alert("消息提示", "试驾车型数据加载异常");
                }
            },
            (err: any) => {
                this._page.alert("消息提示", "试驾车型数据加载异常");
            }
        );
    }

    //预约时间改变事件
    public OrderTimeChange() {
        if (this.model.isOrderTimeChange) {
            var date = new Date();
            if (this.FormatToDate(date) > this.FormatToDate(this.model.driveRecord['mcs_ordertime'])) {
                this._page.presentToastError("预约日期必须大于当天日期");
            }
            this.model.drivetimeoption = [];
            this.model.driveRecord['mcs_testdrivetime'] = null;
            var carmodel = this.model.driveRecord["mcs_carmodel"];
            var ordertime = this.FormatToDate(this.model.driveRecord["mcs_ordertime"]);
            if (carmodel != "" && ordertime != "") {
                //处理预约时段
                this.DriveTimeOption(carmodel, ordertime);
            }
        }
        this.model.isOrderTimeChange = true;
    }

    //车型改变事件
    public CarModelChange() {
        if (this.model.isCarModelChange) {
            this.model.drivetimeoption = [];
            this.model.driveRecord['mcs_testdrivetime'] = null;
            var carmodel = this.model.driveRecord["mcs_carmodel"];
            var ordertime = this.FormatToDate(this.model.driveRecord["mcs_ordertime"]);
            if (carmodel != "" && ordertime != "") {
                //处理预约时段
                this.DriveTimeOption(carmodel, ordertime);
            }
        }
        this.model.isCarModelChange = true;
    }

    //日期格式
    public FormatToDate(date) {
        if (date != null && date != undefined) {
            return sd.format(date, 'YYYY-MM-DD');
        }
        else {
            return '';
        }
    }

    //保存
    public saveOnClick() {
        //校验姓名
        if (this._valid.isNullOrEmpty(this.model.driveRecord["mcs_fullname"])) {
            this._page.presentToastError("请输入姓名");
            return;
        }
        //校验手机号
        if (this._valid.isNullOrEmpty(this.model.driveRecord["mcs_mobilephone"])) {
            this._page.presentToastError("请输入手机号");
            return;
        }
        //校验手机格式
        if (!this._valid.isPhone(this.model.driveRecord["mcs_mobilephone"])) {
            this._page.presentToastError("手机号格式错误");
            return;
        }
        //校验业务类型
        if (this._valid.isNullOrEmpty(this.model.driveRecord["mcs_businesstype"])) {
            this._page.presentToastError("请选择业务类型");
            return;
        }
        //校验试驾车型
        if (this._valid.isNullOrEmpty(this.model.driveRecord["mcs_carmodel"])) {
            this._page.presentToastError("请选择试驾车型");
            return;
        }
        //校验预约日期
        if (this._valid.isNullOrEmpty(this.model.driveRecord["mcs_ordertime"])) {
            this._page.presentToastError("请选择预约日期");
            return;
        }
        //校验试驾预约时段
        if (this._valid.isNullOrEmpty(this.model.driveRecord["mcs_testdrivetime"])) {
            this._page.presentToastError("请选择试驾预约时段");
            return;
        }

        this.model.postData["driveRecord"] = this.model.driveRecord;
        this.model.postData["driveRecord"]["mcs_businesstype"] = Number(this.model.driveRecord["mcs_businesstype"]);

        this._page.loadingShow();
        this._http.postForToaken(
            this.model.postApiUrl, this.model.postData,
            (res: any) => {
                this._page.loadingHide();
                if (res.Result == true) {
                    console.log("res");
                    console.log(res);
                    var guid = res["Data"]["Id"];
                    this._page.goto("/saleing/driverecord/success", { guid: guid });
                }
                else {
                    this._page.alert("消息提示", "操作失败");
                }
            },
            (err: any) => {
                this._page.loadingHide();
                this._page.alert("消息提示", "操作失败");
            }
        );
    }
}
