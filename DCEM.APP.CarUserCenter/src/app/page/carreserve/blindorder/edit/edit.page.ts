import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/component/typescript/dcem.core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';
import { Storage_LoginInfo } from '../../../../component/typescript/logininfo.storage';
import sd from 'silly-datetime';
@Component({
    selector: 'app-edit',
    templateUrl: './edit.page.html',
    styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

    model = {
        postApiUrl: 'api/lead/create',
        getApiUrl:'api/BlindOrder/QueryList',
        CarmodelUrl: 'api/basedata/GetCarmodel',
        postUserMsgUrl:'api/usermsg/AddAndEdit',
        postData: {
            mcs_fullname: "", //姓名
            mcs_mobilephone: "", //手机号
            mcs_blindordervehtype: "", // 意向车型
            mcs_order: "",//订单号     
            mcs_premiumcode: "",//预约号   
            mcs_usecarcity:"",//用车城市
            mcs_ordertime: null, // 下单时间
            mcs_optiontype: null,// 订单状态
            isChecked: false,
            mcs_userid:"",//用户ID
            mcs_orderdescription:""//预售描述
        },

        VehicletypeList: [],//车型
    }
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _valid: DCore_Valid,
        private _modalCtrl: ModalController,
        private activeRoute: ActivatedRoute,
        private _logininfo: Storage_LoginInfo,
    ) { }

    ngOnInit() {
        this.GetCarmodel(); //加载车型
    }

    ionViewWillEnter() {
        if (this._valid.isNullOrEmpty(this.model.postData.mcs_fullname)) {
            this.model.postData.mcs_fullname=this._logininfo.GetName();
        }
        if (this._valid.isNullOrEmpty(this.model.postData.mcs_mobilephone)) {
            this.model.postData.mcs_mobilephone=this._logininfo.GetPhone();
        }
        //获取预约号
        this.GetPremiumCode();
    }

    //确定预约
    Save() {

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
        if (this._valid.isNullOrEmpty(this.model.postData.mcs_blindordervehtype)) {
            errMessage += "请选择意向车型<br>";
        }
        if (errMessage !== "") {
            this._page.presentToastError(errMessage);
            return;
        }
        if (this.model.postData.isChecked == false) {

            this._page.presentToastError("请阅读并勾选《领预约号指南和协议》");
            return;
        }
      
        //用户Id
        this.model.postData.mcs_userid=this._logininfo.GetSystemUserId();
        //下单时间
        //this.model.postData.mcs_ordertime=this.FormatToDate(new Date());
        //订单状态 1：订购
        this.model.postData.mcs_optiontype=1;
        //生成订单号
        this.GetOrderCode();
        var data={};
        //姓名
        data["mcs_fullname"]= this.model.postData.mcs_fullname;
        data["mcs_mobilephone"]= this.model.postData.mcs_mobilephone;
        data["behaviorcode"]= "blind_order";
        data["mcs_blindordervehtype"]= this.model.postData.mcs_blindordervehtype;
        data["mcs_order"]= this.model.postData.mcs_order;
        data["mcs_premiumcode"]= this.model.postData.mcs_premiumcode;
        data["mcs_usecarcity"]= this.model.postData.mcs_usecarcity;
        data["mcs_ordertime"]= new Date();//this.model.postData.mcs_ordertime;
        data["mcs_optiontype"]= this.model.postData.mcs_optiontype;
        data["mediacode"]="app";
        data["terminalcode"]="mobilephone";
        data["mcs_channel"]=2;
        data["mcs_leadorigin"]=1;
        data["mcs_orderdescription"]=this.model.postData.mcs_orderdescription;
        data["mcs_userid"]=this.model.postData.mcs_userid;

        this._page.loadingShow();
        this._http.post(
            this.model.postApiUrl,
            data,
            (res: any) => {
                this._page.loadingHide();
                if (res.Result == true) {
                    this.DoUserMsg();
                    this._page.goto("/carreserve/blindorder/success",{order:this.model.postData.mcs_order,premiumcode:this.model.postData.mcs_premiumcode});
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

    //添加用户消息
    DoUserMsg(){
        var MsgData={};
        MsgData["mcs_name"]="领预约号"
        MsgData["mcs_user"]=this._logininfo.GetSystemUserId();
        MsgData["mcs_content"]='尊敬的'+this.model.postData.mcs_fullname+':您领取的预约号为：'+this.model.postData.mcs_premiumcode;
        MsgData["mcs_type"]=2;
        MsgData["mcs_readstatus"]=0;
      
        this._http.post(
            this.model.postUserMsgUrl,
            MsgData,
            (res: any) => {
                if (res.Result == true) {
                    console.log(res.Description);
                }
                else {
                    this._page.alert("消息提示", res.Description);
                }
            },
            (err: any) => {
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

    CheckData() {
        var errMessage = "";
        if (this._valid.isNullOrEmpty(this.model.postData.mcs_blindordervehtype)) {
            errMessage += "请先选择意向车型<br>";
        }
        if (errMessage !== "") {
            this._page.presentToastError(errMessage);
            return;
        }

    }

    //生成预约号
    GetPremiumCode() {
        this._http.post(this.model.getApiUrl,
            {
                params: {
                    pageSize: 10,
                    page: 1
                }
            },
            (res: any) => {
                if (res.Results !== null&&res.Results.Count!=0) {
                    //绑定数据(倒序查询预约号，取最大的预约号)
                    this.model.postData.mcs_premiumcode=res.Results[0]["Attributes"]["mcs_premiumcode"];
                    var premiumcode=(Number)(this.model.postData.mcs_premiumcode)+1;
                    var code=premiumcode.toString();
                    if(code.length<4){
                        for(var i=0;i<(4-code.length);i++){
                            code="0"+code;
                            }
                        }
                        this.model.postData.mcs_premiumcode= code; 
                    }
                if(res.Results.Count==0){
                    this.model.postData.mcs_premiumcode='0001'
                }

            }
        );

    }

    //生成订单号
    GetOrderCode(){
        var date=new Date();
        if (date != null && date != undefined) {
           this.model.postData.mcs_order= "RO"+ sd.format(date, 'YYYYMMDDHHmmss');
          }
    }

    //日期格式
    FormatToDate(date) {
        if (date != null && date != undefined) {
        return sd.format(date, 'YYYY-MM-DD HH:mm:ss');
        }
        else {
        return '';
        }
    }

}
