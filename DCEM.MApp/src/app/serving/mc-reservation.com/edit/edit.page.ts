import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SelectCustomerComponent } from 'app/serving/serving.ser/components/select-customer/select-customer.component';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { SelectAppointmentconfigComponent } from 'app/serving/serving.ser/components/select-appointmentconfig/select-appointmentconfig.component';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.page.html',
    styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

    model = {
        apiUrl: '/Api/Customer/GetCustomerInfo',
        postApiUrl: '/Api/appointment-info/AddOrEdit',
        data: {
        },
        postData: {}
    };

    //���干������
    shareData = {
        appointmentinfo: {

        }
    }

    constructor(
        public _modalCtrl: ModalController,
        public _navCtrl: NavController,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _shareData: DCore_ShareData,
        private _valid: DCore_Valid
    ) { }

    ngOnInit() {
    }

    //����ѡ��ͻ����
    async presentModal() {
        const modal = await this._modalCtrl.create({
            component: SelectCustomerComponent
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
            if (data.vehowne != null && typeof data.vehowne != "undefined") {
                console.log(data.vehowne);
                this.shareData.appointmentinfo["mcs_customerid"] = data.vehowne.vehownerid;
                this.shareData.appointmentinfo["mcs_customername"] = data.vehowne.fullname;
                this.shareData.appointmentinfo["mcs_carplate"] = data.vehowne.vehplate;
                this.shareData.appointmentinfo["mcs_customerphone"] = data.vehowne.mobilephone;
                //this.shareData.appointmentinfo["mcs_tag"] = data.vehowne.mcs_tag;
            }
        }
    }

    //����ѡ��ʱ�����
    async configPresentModal() {
        var mcs_ordertype = this.shareData.appointmentinfo["mcs_ordertype"];
        var mcs_appointmentat = this.shareData.appointmentinfo["mcs_appointmentat"];
        console.log(mcs_ordertype + " " + mcs_appointmentat);
        const modal = await this._modalCtrl.create({
            component: SelectAppointmentconfigComponent,
            componentProps: {
                'mcs_dealerid': "",
                'mcs_servetype': mcs_ordertype,
                'mcs_servedate': mcs_appointmentat
            }
        });
        // const modal = await this._modalCtrl.create({
        //    component: SelectAppointmentconfigComponent,
        //});

        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
            if (data.appointmentconfig != null && typeof data.appointmentconfig != "undefined") {
                console.log(data.appointmentconfig);
                this.shareData.appointmentinfo["mcs_appointmentconfigid"] = data.appointmentconfig.mcs_appointmentconfigid;
                this.shareData.appointmentinfo["mcs_appointmentconfigname"] = data.appointmentconfig.mcs_name;
                this.shareData.appointmentinfo["mcs_surplusnum"] = data.appointmentconfig.mcs_surplusnum;
            }
        }
    }

    //ɸѡ�ͻ�
    public customerOnClick() {
        this.presentModal();
    }

    //ѡ��ʱ��
    public appointmentconfigOnClick() {
        this.configPresentModal();
    }

    //�������
    saveOnClick() {

        this.model.postData["actioncode"] = 1;
        this.model.postData["appointmentinfo"] = this.shareData.appointmentinfo;

        //��װԤԼ��ί����
        this.model.postData["appointmentinfo"] = {};
        this.model.postData["appointmentinfo"]["customerid"] = this.shareData.appointmentinfo["customerid"];     //����VIN
        this.model.postData["serviceproxy"]["customername"] = this.shareData.appointmentinfo["customername"];     //�û���
        //this.mod.postData["serviceproxy"]["carplate"] = this.shareData.serviceproxy["carplate"];         //����
        //this.mod.postData["serviceproxy"]["customerphone"] = this.shareData.serviceproxy["customerphone"]; //�ֻ�
        //this.mod.postData["serviceproxy"]["shuttlename"] = this.shareData.serviceproxy["shuttlename"];   //������
        //this.mod.postData["serviceproxy"]["shuttlephone"] = this.shareData.serviceproxy["shuttlephone"];   //�������ֻ�
        //this.mod.postData["serviceproxy"]["inpower"] = Number(this.shareData.serviceproxy["inpower"]);                //�������
        //this.mod.postData["serviceproxy"]["oilquantity"] = Number(this.shareData.serviceproxy["oilquantity"]);        //��������
        //this.mod.postData["serviceproxy"]["mileage"] = Number(this.shareData.serviceproxy["mileage"]);                //�������
        //this.mod.postData["serviceproxy"]["arrivalon"] = this.shareData.serviceproxy["arrivalon"];                    //����ʱ��
        //this.mod.postData["serviceproxy"]["customercomment"] = this.shareData.serviceproxy["customercomment"];            //�ͻ�����


        console.log("shareData");
        console.log(this.shareData);

        console.log(this.model.postData);

        this._page.loadingShow();
        this._http.post(
            this.model.postApiUrl, this.model.postData,
            (res: any) => {
                this._page.loadingHide();
                if (res.Result == true) {
                    console.log("res");
                    console.log(res);
                    var guid = res["Data"]["Id"];
                    //this._shareData.delete(this.mod.shareDataKey);
                    this._page.goto("/serving/ri/success", { guid: guid });
                }
                else {
                    this._page.alert("��Ϣ��ʾ", "����ʧ��");
                }
            },
            (err: any) => {
                this._page.loadingHide();
                this._page.alert("��Ϣ��ʾ", "����ʧ��");
            }
        );
    }

}
