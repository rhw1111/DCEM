import { Component, OnInit, ViewChild } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OptionSetService } from '../../../base/base.ser/optionset.service';
import { SelectFileEditComponent } from 'app/serving/serving.ser/components/select-file-edit/select-file-edit.component';
import { ModalController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {


  public tab: any = "info";
  mod = {
    apiUrl: '/api/vehnetwork/getdetail',
    overUrl: '/api/vehnetwork/updateover',
    updatecard: '/api/vehnetwork/updatecard',
    uploadUrl: '/api/attachment/add',
    idcardUrl:"api/ocr/IdCard",//身份证识别地址
    invoiceUrl:"api/ocr/Invoice",//发票识别地址
    data: {
      detail: [],//开票明细
      cardNodetail: [],//身份附件列表
      invoicedetail: []//开票附件明细
    }
  };

  objectKeys = Object.keys;

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private _valid: DCore_Valid,
    private modalCtrl: ModalController,
    private _activeRoute: ActivatedRoute,
    private menuController: MenuController,
    private _optionset: OptionSetService
  ) {

  }


  //IonSegment

  ngOnInit() {
    this._activeRoute.queryParams.subscribe((params: Params) => {
      if (params['id'] != null && params['id'] != undefined) {
        this.pageOnBind(params['id']);
      }
    });
  }

  //每次页面加载
  ionViewWillEnter() {
    this.menuController.enable(true);
  }


  //选择附件模式窗口  1身份证，2开票附件
  async presentFileModal(id: any, type: any) {
    var fileInputArray = [];
    const modalWin = await this.modalCtrl.create({
      component: SelectFileEditComponent,
      componentProps: { fileArray: fileInputArray }
    });

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
        if (type == 1) {
          postData.mcs_filecategory = 3; //身份证附件
          postData.mcs_partnertype = 3;  //开通车联网记录
          postData.attrname = "mcs_vehnetwork";
          postData.entitylookup = "mcs_vehnetwork";
        } else {
          postData.mcs_filecategory = 4; //开票附件
          postData.mcs_partnertype = 3;  //开通车联网记录
          postData.attrname = "mcs_vehnetwork";
          postData.entitylookup = "mcs_vehnetwork";
        }
        uploaddata.push(postData);
      });


      

      //获取上传后的文件地址
      if(uploaddata!=null && uploaddata.length>0){


   


          var imageUrl=uploaddata[uploaddata.length-1]["url"];
          var json={};
          var url="";
          if(imageUrl!=""){
            //身份证识别
            if(type==1){
              json={
                //FileUrl:"https://subcrmdevinapi.sokon.com/vi/test/身份证-正面.jpg",
                FileUrl:imageUrl,
                Type:1
              }
              url=this.mod.idcardUrl;
            }
            //发票识别
            else{
              json={
                //FileUrl:"https://subcrmdevinapi.sokon.com/vi/test/电子发票2.jpg"
                FileUrl:imageUrl
              }
              url=this.mod.invoiceUrl;
            }

            this._page.loadingShow();
            this._http.postOcr(
              url,
              json,
              (res: any) => {
                this._page.loadingHide();
                  console.log(res);
                  if(res!=null && res.Code=="000"){
                    var item=res.Data;
                    var msg="";
                    var tit="";
                    var updateJson={
                      id:this.mod.data.detail["id"],
                      name:"",
                      sex:"",
                      idcard:"",
                      idaddress:"",
                      fpname:"",
                      fpnumber:"",
                      time:""

                    }
                    if(type==1){
                      if(item["姓名"]!=""){
                        msg+="姓名："+item["姓名"]+"<br/>";
                        msg+="性别："+item["性别"]+"<br/>";
                        msg+="身份证号码："+item["公民身份号码"]+"<br/>";
                        msg+="地址："+item["住址"]+"<br/>";

                        updateJson.name=item["姓名"];
                        updateJson.sex=item["性别"];
                        updateJson.idcard=item["公民身份号码"];
                        updateJson.idaddress=item["住址"];
                      }
                      tit="身份证信息";

                    }
                    else{
                      if(item["发票号码"]!="" && item["发票名称"]!=""){
                        msg+="开票名称："+item["购方名称"]+"<br/>";
                        msg+="发票号码："+item["发票号码"]+"<br/>";
                        msg+="开票日期："+item["开票日期"]+"<br/>";

                        updateJson.fpname=item["购方名称"];
                        updateJson.fpnumber=item["发票号码"];
                        updateJson.time=item["开票日期"];


                      }
                      tit="发票信息";
                    }

                    var view=this;
                    if(msg!=""){
                      this._page.alertCancel(tit,msg+"<b class='titAlter'>点击确定后，将自动更新到基础信息中</b>",function(){
                        //确定
                        //修改身份证、发票信息
                        view.updateCard(updateJson);
                        //添加附件记录
                        view.addFile(uploaddata);

                      },function(){
                        //取消

                      });
                    }
                    else{
                      this._page.alert("消息提示","未能识别到"+tit,function(){
                        view.addFile(uploaddata);
                      })
                      
                    }
                    

                  }
                  else {
                    this._page.alert("消息提示", res.Message);
                  }
              },
              (err: any) => {
                  var tit=type==1?"身份证信息":"发票信息";
                  this._page.loadingHide();
                  console.log(err);
                  this._page.alert("消息提示", tit+"识别错误");
                  //this._page.loadingHide();
              }
          );



          }
      }

      return false;
  
    }
  }
 
 updateCard(json){
  this._http.post(
    this.mod.updatecard,
    json,
    (res: any) => {
      this._page.loadingHide();
    },
    (err: any) => {
    }
  );

 }

  addFile(json){
    console.log(json); 
      this._http.post(
        this.mod.uploadUrl,
        json,
        (res: any) => {
          this._page.loadingHide();
          debugger;
          if (res.result == true) {
            const that = this;
            this._page.alert("消息提示", "操作成功", function () {
              that._page.goBack();
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
 
  //完成交车
  postover() {

    this._page.confirm("确认提示", "您确认交车完成吗？",
      () => {
        this._http.get(
          this.mod.overUrl,
          {
            params: {
              id: this.mod.data.detail["id"]
            }
          },
          (res: any) => {
            this._page.loadingHide();
            if (res.Result == true) {
              const that = this;
              this._page.alert("消息提示", "操作成功", function () {
                that._page.goBack();
              });
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
    )

  }

  pageOnBind(id: any) {
    this.mod.data.detail["id"] = id;
    this._page.loadingShow();
    this._http.get(
      this.mod.apiUrl,
      {
        params: {
          id: id,
        }
      },
      (res: any) => {
        if (!this._valid.isNull(res["Detail"])) {
          this.mod.data.detail["mcs_vin"] = res["Detail"]["Attributes"]["mcs_vin"];
          this.mod.data.detail["mcs_vehdelivery"] = res["Detail"]["Attributes"]["mcs_vehdelivery"];
          this.mod.data.detail["mcs_invoicename"] = res["Detail"]["Attributes"]["mcs_invoicename"];
          this.mod.data.detail["mcs_vehorder"] = res["Detail"]["Attributes"]["mcs_vehorder"];
          this.mod.data.detail["mcs_invoicephone"] = res["Detail"]["Attributes"]["mcs_invoicephone"];
          this.mod.data.detail["mcs_invoiceidcode"] = res["Detail"]["Attributes"]["mcs_invoiceidcode"];
          this.mod.data.detail["mcs_invoiceidtype"] = this._optionset.GetOptionSetNameByValue("mcs_invoiceidtype", res["Detail"]["Attributes"]["mcs_invoiceidtype"]);
          this.mod.data.detail["mcs_carproperty"] = this._optionset.GetOptionSetNameByValue("mcs_carproperty", res["Detail"]["Attributes"]["mcs_carproperty"]);
          this.mod.data.detail["mcs_caruse"] = res["Detail"]["Attributes"]["mcs_caruse"];
          this.mod.data.detail["mcs_remark"] = res["Detail"]["Attributes"]["mcs_remark"];
          this.mod.data.detail["mcs_code"] = res["Detail"]["Attributes"]["mcs_code"];
          this.mod.data.detail["createdon"] = res["Detail"]["Attributes"]["createdon"];
          this.mod.data.detail["mcs_invoiceon"] = res["Detail"]["Attributes"]["mcs_invoiceon"];
          this.mod.data.detail["mcs_opencardtime"] = res["Detail"]["Attributes"]["mcs_opencardtime"];
          this.mod.data.detail["mcs_deliveryon"] = res["Detail"]["Attributes"]["mcs_deliveryon"];
          this.mod.data.detail["rostatus"] = this._optionset.GetOptionSetNameByValue("mcs_rostatus", res["Detail"]["Attributes"]["rostatus"]);
          this.mod.data.detail["contactphone"] = res["Detail"]["Attributes"]["contactphone"];
          this.mod.data.detail["contactname"] = res["Detail"]["Attributes"]["contactname"];
          this.mod.data.detail["idcard"] = res["Detail"]["Attributes"]["idcard"];
          this.mod.data.detail["orderon"] = res["Detail"]["Attributes"]["orderon"];
          this.mod.data.detail["vehordercode"] = res["Detail"]["Attributes"]["vehordercode"];
          this.mod.data.detail["vehordercode"] = res["Detail"]["Attributes"]["vehordercode"];
          this.mod.data.detail["vinname"] = res["Detail"]["Attributes"]["vinname"];
          this.mod.data.detail["vehdeliverycode"] = res["Detail"]["Attributes"]["vehdeliverycode"];
          this.mod.data.detail["deliverystatus"] = this._optionset.GetOptionSetNameByValue("mcs_deliverystatus", res["Detail"]["Attributes"]["deliverystatus"]);
          this.mod.data.detail["carusename"] = res["Detail"]["Attributes"]["carusename"];
          this.mod.data.detail["mcs_tservicestatus"] = res["Detail"]["Attributes"]["mcs_tservicestatus"];


        }
        if (!this._valid.isNull(res.CardNoDetail)) {
          for (var key in res.CardNoDetail) {
            var obj = {};
            obj["mcs_filename"] = res.CardNoDetail[key]["Attributes"]["mcs_filename"];
            obj["mcs_filetype"] = res.CardNoDetail[key]["Attributes"]["mcs_filetype"];
            obj["mcs_fileurl"] = res.CardNoDetail[key]["Attributes"]["mcs_fileurl"];
            obj["mcs_code"] = res.CardNoDetail[key]["Attributes"]["mcs_code"];
            obj["mcs_filesize"] = res.CardNoDetail[key]["Attributes"]["mcs_filesize"];
            this.mod.data.cardNodetail.push(obj);
          }
        }
        if (!this._valid.isNull(res.InvoiceDetail)) {
          for (var key in res.InvoiceDetail) {
            var obj = {};
            obj["mcs_filename"] = res.InvoiceDetail[key]["Attributes"]["mcs_filename"];
            obj["mcs_filetype"] = res.InvoiceDetail[key]["Attributes"]["mcs_filetype"];
            obj["mcs_fileurl"] = res.InvoiceDetail[key]["Attributes"]["mcs_fileurl"];
            obj["mcs_code"] = res.InvoiceDetail[key]["Attributes"]["mcs_code"];
            obj["mcs_filesize"] = res.InvoiceDetail[key]["Attributes"]["mcs_filesize"];
            this.mod.data.invoicedetail.push(obj);
          }
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "数据加载异常");
        this._page.loadingHide();
      }
    );
  }

}
