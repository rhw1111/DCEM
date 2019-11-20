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
        getApiUrl: '/api/drive-record/GetDetail',//�Գ��Լ������ַ
        postApiUrl: '/Api/drive-record/AddOrEdit',//�Գ��Լݱ༭��ַ
        carModelApiUrl: '/Api/Vehowner/GetCarmodelList',//�Լݳ��͵�ַ
        //driveCarApiUrl: '/api/drive-record/QueryDriveCarList',//�Լݳ���
        reservationApiUrl: '/Api/drive-record/QueryReservationList',//ԤԼʱ�ε�ַ
        postData: {},
        driveRecord: {},
        driveRecordId: null,//��ǰ��¼id
        businesstypeoption: [],//ҵ������
        carmodeloption: [],//�Լݳ���
        drivetimeoption:[]//ԤԼʱ��
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
            //�༭��ԤԼ������
            if (params['id'] != null && params['id'] != undefined) {
                this.model.driveRecordId = params['id'];
                this.pageOnBind(this.model.driveRecordId);
            }

            //ҵ������
            this.model.businesstypeoption = this._optionset.Get("mcs_drivebusinesstype");
        });
    }

    //�༭������
    public pageOnBind(id) {

    }

    //��ȡ�Լݳ���
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
                    this._page.alert("��Ϣ��ʾ", "�Լݳ������ݼ����쳣");
                }
            },
            (err: any) => {
                this._page.alert("��Ϣ��ʾ", "�Լݳ������ݼ����쳣");
            }
        );
    }

    //�Լ�ԤԼʱ��
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
                    this._page.alert("��Ϣ��ʾ", "�Լݳ������ݼ����쳣");
                }
            },
            (err: any) => {
                this._page.alert("��Ϣ��ʾ", "�Լݳ������ݼ����쳣");
            }
        );
    }






}
