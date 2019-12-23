import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ScSelectComponent } from 'app/serving/serving.ser/components/sc-select/sc-select.component';
import { SelectCustomerComponent } from 'app/serving/serving.ser/components/select-customer/select-customer.component';
import { SelectSystemuserComponent } from 'app/base/base.ser/components/select-systemuser/select-systemuser.component';
import { SelectMalFunctionTypeComponent } from 'app/serving/serving.ser/components/select-malfunctiontype/select.malfunctiontype.component';
import { SelectFileEditComponent } from 'app/serving/serving.ser/components/select-file-edit/select-file-edit.component';
import { MessageService } from 'app/base/base.ser/message.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.page.html',
    styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

    public model: any = {
        postApiUrl: '/api/tech-support/AddOrUpdate',
        detailApiUrl: '/api/tech-support/GetDetail',
        viewData: {
            title:'',
            mcs_serviceorderid_name: '',//服务委托书名称
            vin: '',
            mcs_customername: '',//车主姓名
            username: '',//当前登录用户
            mcs_repairnameidname: '',
            mcs_cartypeidname: ''//车型名称
        },
        postData: {
            EntityName: "mcs_supportorder",
            Id: '',//主键ID
            mcs_title: '',//主题
            mcs_repairnameid: '',//技术经理
            mcs_serviceadvisorid: '',//服务顾问
            mcs_serviceorderid: '',//服务委托书GUid
            mcs_email: '',
            mcs_phone: '',
            mcs_customerid: '',//客户-VIN
            mcs_ismodifiedparts: false,
            mcs_malfunctiontypeid: '',
            mcs_diagnosiscontent: '',//诊断描述
            mcs_malfunctioncontent: '',
            mcs_replacedparts: '',
            mcs_techqueries: '',//技师疑问
            mcs_techsystem: 0,//技术系统
            mcs_batterymodel: '',
            mcs_batteryserialnumber: '',
            mcs_carplate: '',
            mcs_customerphone: '',
            mcs_enginenumber: '',
            mcs_modifiedpartscontent: '',
            mcs_motormodel: '',//电机型号
            mcs_mileage: 0,
            mcs_repairdate: '',//维修日期
            mcs_cartypeid: '',//车型
            fileEntityArray: []
        },
        fileArray: []
    };
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _valid: DCore_Valid,
        private _userInfo: Storage_LoginInfo,
        private modalCtrl: ModalController,
        private activeRoute: ActivatedRoute,
        private menuController:MenuController) { }

    //每次页面加载
    ionViewWillEnter() {
        this.menuController.enable(true);
    }

    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params: Params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.GetDetail(params['id']);
                this.model.viewData.title=MessageService.PageTitleEditTech;
            }
            else{
                this.model.viewData.title=MessageService.PageTitleAddTech;
            }
        });
        this.model.postData.mcs_serviceadvisorid = this._userInfo.GetSystemUserId();
        this.model.viewData.username = this._userInfo.GetFirstname() + this._userInfo.GetLastname();
    }

    GetDetail(id: any) {
        this._page.loadingShow();
        this._http.get(
            this.model.detailApiUrl,
            {
                params: {
                    id: id,
                }
            },
            (res: any) => {
                if (res.TechnicalSupport != null) {
                    // //如果已提交或关闭，则无法修改，跳转至详情页面
                    // var mcs_orderstatus= res["TechnicalSupport"]["Attributes"]["mcs_orderstatus"];
                    // debugger;
                    // if(mcs_orderstatus!=null && mcs_orderstatus!=10){
                    //    this._page.alert(MessageService.AlterTitleMessage,MessageService.PageCannotEdit,()=>{
                    //        this._page.goto('app/serving/ts/detail',{"id":id});
                    //    });
                    // }
                    this.model.postData.Id = id;
                    this.model.postData.mcs_title = res["TechnicalSupport"]["Attributes"]["mcs_title"];
                    this.model.postData.mcs_serviceorderid = res["TechnicalSupport"]["Attributes"]["_mcs_serviceorderid_value"];
                    this.model.viewData.mcs_serviceorderid_name = res["TechnicalSupport"]["Attributes"]["_mcs_serviceorderid_value@OData.Community.Display.V1.FormattedValue"];
                    this.model.postData.mcs_repairnameid = res["TechnicalSupport"]["Attributes"]["_mcs_repairnameid_value"];
                    this.model.viewData.mcs_repairnameidname = res["TechnicalSupport"]["Attributes"]["_mcs_repairnameid_value@OData.Community.Display.V1.FormattedValue"];
                    this.model.postData.mcs_repairdate = res["TechnicalSupport"]["Attributes"]["mcs_repairdate@OData.Community.Display.V1.FormattedValue"];
                    this.model.postData.mcs_email = res["TechnicalSupport"]["Attributes"]["mcs_email"];
                    this.model.postData.mcs_phone = res["TechnicalSupport"]["Attributes"]["mcs_phone"];
                    this.model.postData.mcs_customername = res["TechnicalSupport"]["Attributes"]["mcs_customername"];
                    this.model.postData.mcs_customerphone = res["TechnicalSupport"]["Attributes"]["mcs_customerphone"];
                    this.model.postData.mcs_customerid = res["TechnicalSupport"]["Attributes"]["_mcs_customerid_value"];
                    this.model.viewData.vin = res["TechnicalSupport"]["Attributes"]["_mcs_customerid_value@OData.Community.Display.V1.FormattedValue"];
                    this.model.postData.mcs_carplate = res["TechnicalSupport"]["Attributes"]["mcs_carplate"];
                    this.model.postData.mcs_enginenumber = res["TechnicalSupport"]["Attributes"]["mcs_enginenumber"];
                    this.model.postData.mcs_mileage = res["TechnicalSupport"]["Attributes"]["mcs_mileage"];
                    this.model.postData.mcs_motormodel = res["TechnicalSupport"]["Attributes"]["mcs_motormodel"];
                    this.model.postData.mcs_batteryserialnumber = res["TechnicalSupport"]["Attributes"]["mcs_batteryserialnumber"];
                    this.model.postData.mcs_batterymodel = res["TechnicalSupport"]["Attributes"]["mcs_batterymodel"];
                    this.model.postData.mcs_ismodifiedparts = res["TechnicalSupport"]["Attributes"]["mcs_ismodifiedparts@OData.Community.Display.V1.FormattedValue"];
                    this.model.postData.mcs_modifiedpartscontent = res["TechnicalSupport"]["Attributes"]["mcs_modifiedpartscontent"];
                    this.model.postData.mcs_techsystem = res["TechnicalSupport"]["Attributes"]["mcs_techsystem"];
                    this.model.postData.mcs_malfunctiontypeid = res["TechnicalSupport"]["Attributes"]["_mcs_malfunctiontypeid_value"];
                    this.model.viewData.mcs_malfunctiontype_value = res["TechnicalSupport"]["Attributes"]["_mcs_malfunctiontypeid_value@OData.Community.Display.V1.FormattedValue"];
                    this.model.postData.mcs_malfunctiontypecontent = res["TechnicalSupport"]["Attributes"]["mcs_malfunctiontypecontent"];
                    this.model.postData.mcs_diagnosiscontent = res["TechnicalSupport"]["Attributes"]["mcs_diagnosiscontent"];
                    this.model.postData.mcs_replacedparts = res["TechnicalSupport"]["Attributes"]["mcs_replacedparts"];
                    this.model.postData.mcs_malfunctioncontent = res["TechnicalSupport"]["Attributes"]["mcs_malfunctioncontent"];
                    this.model.postData.mcs_cartypeid = res["TechnicalSupport"]["Attributes"]["_mcs_cartypeid_value"];
                    this.model.viewData.mcs_cartypeid_vale = res["TechnicalSupport"]["Attributes"]["_mcs_mcs_cartypeid_value@OData.Community.Display.V1.FormattedValue"];

                }
                if (res.DealerAttachment != null) {
                    this.model.fileArray = [];
                    for (let item of res.DealerAttachment) {
                        var obj = {};
                        obj["fileName"] = item["Attributes"]["mcs_filename"];
                        obj["fileSize"] = item["Attributes"]["mcs_filesize"];
                        obj["url"] = item["Attributes"]["mcs_fileurl"];
                        this.model.fileArray.push(obj);
                    }
                }

                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert(MessageService.AlterTitleMessage, MessageService.ErrorRequestException);
                this._page.loadingHide();
            }
        );
    }

    //选择服务委托书模式窗口
    async presentServiceModal() {
        const modal = await this.modalCtrl.create({
            component: ScSelectComponent
        });
        await modal.present();
        //监听销毁的事件
        const { data } = await modal.onDidDismiss();
        if (data != null && data != undefined) {
            var serviceproxymodel = data.model;
            this.model.postData.mcs_serviceorderid = data.id;
            this.model.viewData.mcs_serviceorderid_name = data.name;
            //绑定车辆信息
            if (serviceproxymodel != null && serviceproxymodel != undefined) {
                this.model.postData.mcs_customerid = serviceproxymodel._mcs_customerid_value;
                this.model.viewData.vin = data.vin;

                if (serviceproxymodel.mcs_batterymodel != undefined) {
                    this.model.postData.mcs_batterymodel = serviceproxymodel.mcs_batterymodel;
                }
                if (serviceproxymodel.mcs_motorserialnumber != undefined) {
                    this.model.postData.mcs_batteryserialnumber = serviceproxymodel.mcs_motorserialnumber;
                }
                if (serviceproxymodel.mcs_carplate != undefined) {
                    this.model.postData.mcs_carplate = serviceproxymodel.mcs_carplate;
                }
                if (serviceproxymodel.mcs_customername != undefined) {
                    this.model.viewData.mcs_customername = serviceproxymodel.mcs_customername;
                }
                if (serviceproxymodel.mcs_customerphone != undefined) {
                    this.model.postData.mcs_customerphone = serviceproxymodel.mcs_customerphone;
                }
                if (serviceproxymodel.mcs_enginennumber != undefined) {
                    this.model.postData.mcs_enginenumber = serviceproxymodel.mcs_enginennumber;
                }
                if (serviceproxymodel.mcs_modifiedpartscontent != undefined) {
                    this.model.postData.mcs_modifiedpartscontent = serviceproxymodel.mcs_modifiedpartscontent;
                }
                if (serviceproxymodel.mcs_motormodel != undefined) {
                    this.model.postData.mcs_motormodel = serviceproxymodel.mcs_motormodel;
                }
                if (serviceproxymodel.mcs_mileage != undefined) {
                    this.model.postData.mcs_mileage = serviceproxymodel.mcs_mileage;
                }
                if (serviceproxymodel.mcs_cartypeid != undefined) {
                    this.model.postData.mcs_cartypeid = serviceproxymodel.mcs_cartypeid;
                    this.model.viewData.mcs_cartypeidname = serviceproxymodel.mcs_cartypeidname;
                }
                //维修时间
                this.model.postData.mcs_repairdate=serviceproxymodel.createdon;
            }
        }
    }

    //选择附件模式窗口
    async presentFileModal() {
        var fileInputArray = [];
        //输入参数
        for (let item of this.model.fileArray) {
            var obj = {};
            obj["fileName"] = item["fileName"];
            obj["fileSize"] = item["fileSize"];
            obj["url"] = item["url"];
            fileInputArray.push(obj);
        }


        const modalWin = await this.modalCtrl.create({
            component: SelectFileEditComponent,
            componentProps: { fileArray: fileInputArray }
        });

        await modalWin.present();
        const { data } = await modalWin.onDidDismiss();
        if (data.command === 1) {
            //输出参数
            this.model.postData.fileEntityArray = [];
            this.model.fileArray = data.fileArray;
            for (let file of this.model.fileArray) {
                var obj = {};
                obj["mcs_filename"] = file["fileName"];
                obj["mcs_filesize"] = file["fileSize"];
                debugger;
                obj["mcs_fileurl"] = file["url"];
                this.model.postData.fileEntityArray.push(obj);
            }
        }
    }

    //选择客户模式窗口
    async presentCustomerModal() {
        const modal = await this.modalCtrl.create({
            component: SelectCustomerComponent
        });
        await modal.present();
        //监听销毁的事件
        const { data } = await modal.onDidDismiss();
        if (data != null && data != undefined) {
            var customerModel = data.vehowne.model;
            if (customerModel != null && customerModel != undefined) {
                this.model.postData.mcs_customerid = customerModel.mcs_vehownerid;
                this.model.viewData.vin = customerModel.mcs_name;
                if (customerModel.mcs_batterymodel != undefined) {
                    this.model.postData.mcs_batterymodel = customerModel.mcs_batterymodel;
                }
                if (customerModel.mcs_motorserialnumber != undefined) {
                    this.model.postData.mcs_batteryserialnumber = customerModel.mcs_motorserialnumber;
                }
                if (customerModel.mcs_vehplate != undefined) {
                    this.model.postData.mcs_carplate = customerModel.mcs_vehplate;
                }
                if (customerModel.mcs_fullname != undefined) {
                    this.model.postData.mcs_customername = customerModel.mcs_fullname;
                }
                if (customerModel.mcs_mobilephone != undefined) {
                    this.model.postData.mcs_customerphone = customerModel.mcs_mobilephone;
                }
                if (customerModel.mcs_enginennumber != undefined) {
                    this.model.postData.mcs_enginenumber = customerModel.mcs_enginennumber;
                }
                if (customerModel.mcs_modifiedpartscontent != undefined) {
                    this.model.postData.mcs_modifiedpartscontent = customerModel.mcs_modifiedpartscontent;
                }
                if (customerModel.mcs_motormodel != undefined) {
                    this.model.postData.mcs_motormodel = customerModel.mcs_motormodel;
                }
                if (customerModel.mcs_netmileage != undefined) {
                    this.model.postData.mcs_mileage = customerModel.mcs_netmileage;
                }
                if (customerModel.mcs_cartypeid != undefined) {
                    this.model.postData.mcs_cartypeid = customerModel.mcs_cartypeid;
                    this.model.viewData.mcs_cartypeidname = customerModel.mcs_cartypeidname;
                }
            }
        }
    }

    async presentMalFunctionTypeModal() {

        const modal = await this.modalCtrl.create({
            component: SelectMalFunctionTypeComponent
        });
        await modal.present();
        //监听销毁的事件
        const { data } = await modal.onDidDismiss();
        if (data != null && data != undefined) {
            this.model.postData.mcs_malfunctiontypeid = data.id;
            this.model.viewData.mcs_malfunctiontype_value = data.name;
        }
    }

    async presentSystemUserModal() {
        const modal = await this.modalCtrl.create({
            component: SelectSystemuserComponent
        });
        await modal.present();
        //监听销毁的事件
        const { data } = await modal.onDidDismiss();
        if (data != null && data != undefined) {
            this.model.postData.mcs_repairnameid = data.Id;
            this.model.viewData.mcs_repairnameidname = data.fullname;
        }
    }

    save() {
        if (this._valid.isNullOrEmpty(this.model.postData.mcs_title)) {
            this._page.presentToastError(MessageService.ValidTitleIsNull); 
           return ;
        }
        if (this.model.postData.mcs_techsystem<=0) {
            this._page.presentToastError(MessageService.ValidTechsystemIsNull); 
            return ;
        }
        if (this._valid.isNullOrEmpty(this.model.viewData.mcs_malfunctiontype_value)) {
            this._page.presentToastError(MessageService.ValidMalfunctiontypeIsNull); 
            return;
        }

        this._page.loadingShow();
        this._http.post(
            this.model.postApiUrl, this.model.postData,
            (res: any) => {
                this._page.loadingHide();
                this._page.goto("/serving/ts/success", { guid: res.Data.Id, no: res.Data.Attributes["mcs_name"] });
            },
            (err: any) => {
                this._page.loadingHide();
                this._page.alert(MessageService.AlterTitleMessage, MessageService.InfoSaveFailed);
            }
        );
    }

    changePhone(value) {
        // 去除空格
        if (value != null && value != "") {
            const phone = value.replace(/\s/g, '');
            const ischeck = /^(13[0-9]|14[5|7|9]|15[0|1|2|3|5|6|7|8|9]|16[6]|17[0|1|2|3|5|6|7|8]|18[0-9]|19[8|9])\d{8}$/;
            if (!ischeck.test(phone)) {
                this.model.phone = '';
            }
        }
    }

    changeEmail(value) {
        if (value != null && value != "") {
            const ischeck = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value);
            if (!ischeck) {
                this.model.email = '';
            }
        }
    }
}
