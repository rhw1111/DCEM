import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { OptionSetService } from '../../saleing.ser/optionset.service';

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
        drivetimeoption:[]//预约时段
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

            //业务类型
            this.model.businesstypeoption = this._optionset.Get("mcs_drivebusinesstype");
        });
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






}
