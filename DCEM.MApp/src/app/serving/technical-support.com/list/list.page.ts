import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../base/base.ser/http-service.service';
import { Dcem } from 'app/base/base.ser/Dcem.core';
import sd from 'silly-datetime';
import { debug } from 'util';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  private model:any = {
    name:'technicalsupportlist',//模块实体名称
    apiUrl: '/api/tech-support/GetList',//请求地址
    seachkey:'',//搜索关键字
    orderstatus:0,//订单状态
    data: [],//列表数据
    pageSize:10,//页数
    page:1,//分页
    sort:'mcs_supportorderid desc',//排序的参数
    isending:false,//是否加载完成
    nodata:false
  };

  constructor(
      private _http: Dcem.Core.Http,
      private _page: Dcem.Core.Page,
      private httpService:HttpService) {
  }

  ngOnInit() {
    this.model.page=1;
    var cachedata=this.httpService.GetDataCache(this.model.name);
    if(cachedata==""){
      this.getList(null);
    }
    else{
      this.model.data=JSON.parse(cachedata);
    }
  }

  //搜索方法
  search(event){
   var keyCode= event?event.keyCode:"";
   if(keyCode==13){
    this.model.data=[];
    this.model.page=1;
    this.model.isending=false;
    this.getList(null);
   }
  }

  //下拉刷新
  doRefresh(event){
    this.model.data=[];
    this.model.page=1;
    this.model.isending=false;
    this.getList(event);
  }
  //加载下一页
  doLoading(event){
    this.model.page++;
    this.getList(event);
  }
  //切换tab
  selectTab(status){
    this.model.data=[];
    this.model.page=1;
    this.model.isending=false;
    if(status!="" && status!=undefined){
      this.model.orderstatus=status;
    }
    else{
      this.model.orderstatus=0;
    }
    this.getList(null);
  }
  //获取列表数据
  getList(event){
    this._page.loadingShow();
      this._http.get(this.model.apiUrl,
        {
          params:{
            orderstatus:this.model.orderstatus,
            seachkey: this.model.seachkey,
            sort: this.model.sort,
            pageSize: this.model.pageSize,
            page: this.model.page
          }
        },
        (res: any) => {
          if (res.Results !== null) {
            //绑定数据
            res.Results.forEach(item => {
              var value = item["Attributes"];
              this.model.data.push({
                "Id": value.mcs_supportorderid,
                "mcs_name": value.mcs_name,
                "mcs_repairdate": value.mcs_repairdate,
                "mcs_orderstatus": value.mcs_orderstatus,
                "mcs_title": value.mcs_title
              });
            });
            //设置数据存储到本地
            if (this.model.page == 1) {
              this.httpService.SetDataCache(this.model.name, JSON.stringify(this.model.data).toString());
            }
            event?event.target.complete():'';
            //判断是否有新数据
            if (res.Results.length < 2) {
              event ? event.target.disabled = true : "";
              this.model.isending = true;
            }
            this._page.loadingHide();
            if(this.model.data.length==0){
              this.model.nodata=true;
            }
            else{
              this.model.nodata=false;
            }
          }
          else {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
          }
        },
        (err: any) => {
          this._page.alert("消息提示", "数据加载异常");
          this._page.loadingHide();
        }
      );
  }

  FormatToDate(date){
    if(date!=null && date!=undefined){
      return sd.format(date, 'YYYY-MM-DD');
    }
    else{
      return '';
    }
  }

  FormatToDateTime(date){
    if(date!=null && date!=undefined){
      return sd.format(date, 'YYYY-MM-DD hh:mm:ss');
    }
    else{
      return '';
    }
  }
}
