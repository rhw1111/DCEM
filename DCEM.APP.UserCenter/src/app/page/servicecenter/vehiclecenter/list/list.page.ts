import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../../app/component/typescript/dcem.core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public model: any = {
    search:{
      apiUrl:"api/product/All",
      mode:"-1",
      price:"-1",
      opack:"-1",
      pageSize: 10,//页数
      page: 1,//分页
    },
    datalist:[],//数据集合
    isending: false,//是否加载完成
  }
  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,

  ) { }

  ngOnInit() {
    this.initListLoading();
  }
    //下拉刷新
doRefresh(event) {
  this.model.datalist = [];
  this.model.search.page = 1;
  this.model.isending = false;
  this.getList(event);
}
  //加载下一页
doLoading(event) {
  this.model.search.page++;
  this.getList(event);
}
//初始化页面数据加载
initListLoading(){
  this._page.loadingShow();
  this.getList(null);
}

   //获取列表数据
 getList(event) { 
   this._http.postForShopping(this.model.search.apiUrl,
     {
      StartDateTime: "2019-01-01 00:00:00",
      EndDateTime: "2019-12-31 23:59:59",
      PageSize: this.model.search.pageSize,
      PageIndex: this.model.search.page
     },
     (res: any) => {
       console.log(res);
        //debugger;
         if (res!=null && res.Datas !== null) {
             //绑定数据
             res.Datas.forEach(item => {                          
                 this.model.datalist.push(item);
             });

             event ? event.target.complete() : '';
             //判断是否有新数据
             if (res.Datas.length < this.model.search.pageSize) {
                 event ? event.target.disabled = true : "";
                 this.model.isending = true;
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

}
