import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { OptionSetService } from '../../../base/base.ser/optionset.service';
import sd from 'silly-datetime';
import { ModalController } from '@ionic/angular';
import { SelectFileEditComponent } from 'app/serving/serving.ser/components/select-file-edit/select-file-edit.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

    public tab: any = "info";
    model = {
        getApiUrl: '/api/drive-record/GetDetail',//试乘试驾详情地址
        postApiUrl: '/Api/drive-record/AddOrEdit',//试乘试驾编辑地址
        carModelApiUrl: '/Api/Vehowner/GetCarmodelList',//试驾车型地址
        driveCarApiUrl: '/api/drive-record/QueryDriveCarList',//试驾车辆
        driveRouteApiUrl: '/api/drive-record/QueryDriveRouteList',//试驾路线
        reservationApiUrl: '/Api/drive-record/QueryReservationList',//预约时段地址
        uploadUrl: '/api/attachment/add',//附件上传
        postData: {},
        driveRecord: {},
        attachment:[],
        driveRecordId: null,//当前记录id
        businessTypeOption: [],//业务类型
        carModelOption: [],//试驾车型
        driveTimeOption: [],//预约时段
        driveCarOption: [],//试驾车辆
        driveRouteOption:[],//试驾路线
        isOrderTimeChange: true,//预约日期是否改变
        isCarModelChange: true,//预约车型是否改变
        actionCode: null,//1-新增、2-编辑、3-排程、4-取消、5-开始试驾、6-结束试驾
        ifSchedule: false,//是否排程操作
        ifCancel: false,//是否取消操作
        ifSave: true,//是否新增或编辑
        ifEdit: false,//编辑
        ifHaveTime: false//是否有时段
    };

    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _valid: DCore_Valid,
        private activeRoute: ActivatedRoute,
        private modalCtrl: ModalController,
        private _optionset: OptionSetService) { }

    ngOnInit() {
  }

    ionViewWillEnter() {
        debugger;
        //预约车型
        this.CarModelOption();

        this.activeRoute.queryParams.subscribe((params: Params) => {
            //编辑绑定预约单数据
            if (params['id'] != null && params['id'] != undefined) {
                this.model.driveRecordId = params['id'];
                this.pageOnBind(this.model.driveRecordId);
                //编辑
                this.model.ifEdit = true;
            }

            //编辑绑定预约单数据
            if (params['actionCode'] != null && params['actionCode'] != undefined) {
                this.model.actionCode = params['actionCode'];
                var drivestatus = this.model.driveRecord["mcs_drivestatus"]
                if (this.model.actionCode == 3 && (drivestatus == 10 || drivestatus == 11)) {
                    this.model.ifSchedule = true;
                    this.model.ifSave = false;
                    //试驾车辆
                    this.DriveCarOption();

                    //试驾路线
                    this.DriveRouteOption();
                }
                if (this.model.actionCode == 4) {
                    this.model.ifCancel = true;
                    this.model.ifSave = false;
                }
            }

            //业务类型
            this.model.businessTypeOption = this._optionset.Get("mcs_businesstype");

        });
    }

    //试驾路线
    public DriveRouteOption() {
        this.model.driveRouteOption = [];
        this._http.getForToaken(
            this.model.driveRouteApiUrl,
            {
            },
            (res: any) => {
                if (res.Results !== null) {

                    for (var key in res.Results) {
                        var obj = {};
                        obj["model"] = res.Results[key]["Attributes"];
                        obj["value"] = res.Results[key]["Attributes"]["mcs_driverouteid"];
                        obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
                        this.model.driveRouteOption.push(obj);
                    }
                }
                else {
                    this._page.alert("消息提示", "试驾车辆数据加载异常");
                }
            },
            (err: any) => {
                this._page.alert("消息提示", "试驾车辆数据加载异常");
            }
        );
    }

    //车架车辆
    public DriveCarOption() {
        this.model.driveCarOption = [];
        this._http.getForToaken(
            this.model.driveCarApiUrl,
            {
            },
            (res: any) => {
                if (res.Results !== null) {

                    for (var key in res.Results) {
                        var obj = {};
                        obj["model"] = res.Results[key]["Attributes"];
                        obj["value"] = res.Results[key]["Attributes"]["mcs_testdrivecarid"];
                        obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
                        this.model.driveCarOption.push(obj);
                    }
                }
                else {
                    this._page.alert("消息提示", "试驾车辆数据加载异常");
                }
            },
            (err: any) => {
                this._page.alert("消息提示", "试驾车辆数据加载异常");
            }
        );
    }

    //编辑绑定数据
    public pageOnBind(id: any) {

        this._page.loadingShow();
        this._http.getForToaken(
            this.model.getApiUrl,
            {
                "id": id,
            },
            (res: any) => {
                if (res !== null) {

                    this.model.isOrderTimeChange = false;
                    this.model.isCarModelChange = false;

                    this.model.driveRecord["mcs_driverecordid"] = res["Detail"].Id;
                    this.model.driveRecord["mcs_fullname"] = res["Detail"]["Attributes"]["mcs_fullname"];
                    this.model.driveRecord["mcs_mobilephone"] = res["Detail"]["Attributes"]["mcs_mobilephone"];
                    this.model.driveRecord["mcs_carmodel"] = res["Detail"]["Attributes"]["_mcs_carmodel_value"];
                    this.model.driveRecord["mcs_businesstype"] = String(res["Detail"]["Attributes"]["mcs_businesstype"]);
                    this.model.driveRecord["mcs_ordertime"] = res["Detail"]["Attributes"]["mcs_ordertime"];
                    this.model.driveRecord["mcs_appointedrouteid"] = res["Detail"]["Attributes"]["_mcs_appointedrouteid_value"];
                    this.model.driveRecord["mcs_drivecar"] = res["Detail"]["Attributes"]["_mcs_drivecar_value"];
                    this.model.driveRecord["mcs_drivestatus"] = res["Detail"]["Attributes"]["mcs_drivestatus"];

                    var carmodel = this.model.driveRecord["mcs_carmodel"];
                    var ordertime = this.FormatToDate(this.model.driveRecord["mcs_ordertime"]);
                    //处理预约时段
                    this.DriveTimeOption(carmodel, ordertime, res["Detail"]["Attributes"]["_mcs_testdrivetime_value"]);

                    if (!this._valid.isNull(res.AttmDetail)) {
                        for (var key in res.AttmDetail) {

                            var obj = {};
                            obj["mcs_filename"] = res.AttmDetail[key]["Attributes"]["mcs_filename"];
                            obj["mcs_filetype"] = res.AttmDetail[key]["Attributes"]["mcs_filetype"];
                            obj["mcs_fileurl"] = res.AttmDetail[key]["Attributes"]["mcs_fileurl"];
                            obj["mcs_code"] = res.AttmDetail[key]["Attributes"]["mcs_code"];
                            obj["mcs_filesize"] = res.AttmDetail[key]["Attributes"]["mcs_filesize"];
                            this.model.attachment.push(obj);
                        }
                    }


                    console.log(res);
                }
                else {
                    this._page.alert("消息提示", "预约单加载异常");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );
    }

    //获取试驾车型
    public CarModelOption() {
        this.model.carModelOption = [];
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
                        this.model.carModelOption.push(obj);
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
    public DriveTimeOption(carmodelid, reservationdate,testdrivetime) {
        this.model.driveTimeOption = [];
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
                        this.model.driveTimeOption.push(obj);
                    }
                    if (testdrivetime != null) {
                        this.model.driveRecord["mcs_testdrivetime"] = testdrivetime;
                    }
                    this.model.ifHaveTime = true;
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
            var carmodel = this.model.driveRecord["mcs_carmodel"];
            var ordertime = this.FormatToDate(this.model.driveRecord["mcs_ordertime"]);
            if (carmodel != "" && ordertime != "") {
                this.model.driveTimeOption = [];
                this.model.driveRecord['mcs_testdrivetime'] = null;
                //处理预约时段
                this.DriveTimeOption(carmodel, ordertime, null);
            }
        }
        this.model.isOrderTimeChange = true;
    }

    //车型改变事件
    public CarModelChange() {
        if (this.model.isCarModelChange) {
            var carmodel = this.model.driveRecord["mcs_carmodel"];
            var ordertime = this.FormatToDate(this.model.driveRecord["mcs_ordertime"]);
            if (carmodel != "" && ordertime != "") {
                this.model.driveTimeOption = [];
                this.model.driveRecord['mcs_testdrivetime'] = null;
                //处理预约时段
                this.DriveTimeOption(carmodel, ordertime, null);
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
        //let mcs_businesstype: number = this.model.driveRecord["mcs_businesstype"];
        //this.model.postData["driveRecord"]["mcs_businesstype"] = Number(mcs_businesstype);
        //试驾状态(已提交 10、已预约 11、已排程 12、已取消 13、试驾开始 14、试驾结束  15、已反馈  16，已删除 17)
        //新增
        var mcs_drivestatus: number = this.model.driveRecord["mcs_drivestatus"];
        if (this.model.actionCode == 1) {
            mcs_drivestatus = 10;
            this.model.postData["driveRecord"]["mcs_drivestatus"] = mcs_drivestatus;
        }
        //编辑
        if (this.model.actionCode == 2) {
            this.model.postData["driveRecord"]["mcs_drivestatus"] = Number(mcs_drivestatus);
        }
        //排程
        if (this.model.actionCode == 3) {
            mcs_drivestatus = 12;
            this.model.postData["driveRecord"]["mcs_drivestatus"] = mcs_drivestatus;
        }
        //已取消
        if (this.model.actionCode == 4) {
            mcs_drivestatus = 14;
            //校验试驾取消
            if (this._valid.isNullOrEmpty(this.model.driveRecord["mcs_cancelreason"])) {
                this._page.presentToastError("请填写取消原因");
                return;
            }
            this.model.postData["driveRecord"]["mcs_drivestatus"] = mcs_drivestatus;
        }

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

    //选择附件模式窗口 
    async presentFileModal(id: any) {
        var fileInputArray = [];
        const modalWin = await this.modalCtrl.create({
            component: SelectFileEditComponent,
            componentProps: { fileArray: fileInputArray }
        });

        this._page.loadingShow();
        await modalWin.present();
        const { data } = await modalWin.onDidDismiss();
        if (data.command === 1) {
            var uploaddata = [];
            data.fileArray.forEach(element => {
                var postData = {
                    filename: "",
                    filesize: 0,
                    url: "",
                    id: "",
                    mcs_filecategory: 0,
                    mcs_partnertype: 0,
                    lookup: "",
                    attrname: "",
                    entitylookup: ""
                };
                postData.filename = element["fileName"];
                postData.filesize = parseInt(element["fileSize"]);
                postData.url = element["url"];
                postData.id = id;
                postData.mcs_filecategory = 22; //附件类型
                postData.mcs_partnertype = 19;  //合作类型
                postData.attrname = "mcs_driverecordid";
                postData.entitylookup = "mcs_driverecord";
                uploaddata.push(postData);
            });


            this._http.post(
                this.model.uploadUrl,
                uploaddata,
                (res: any) => {
                    this._page.loadingHide();
                    if (res.result == true) {
                        const that = this;
                        this._page.alert("消息提示", "操作成功", function () {
                            this._page.goto("/saleing/driverecord/edit", { id: this.model.driveRecordId});
                        });
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

}
