import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../base/base.ser/http-service.service';
import sd from 'silly-datetime';
import { debug } from 'util';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  private dataList:any=[];//列表数据
  public page:any=1;  //分页
  public sort:any='';     //排序的参数
  constructor(private httpService:HttpService) { }

  ngOnInit() {
    this.getList(null);
  }

  search(name){
    this.getList(null);
  }

  getList(event){
    var api='/api/tech-support/GetList';
    //this.httpService.ClearDataCache("technicalsupportlist")
    var cachedata=this.httpService.GetDataCache("technicalsupportlist");
    console.log("cachedata:"+cachedata);
    if(cachedata==""){
      var response=this.httpService.getForToaken(api,null);
      response.subscribe((res)=>{
        this.dataList=res.data;
        console.log("stringify:"+JSON.stringify(res.data));
        this.page++;
        event?event.target.complete():'';
        //判断是否有新数据
        if(res.data.length<10){
          event?event.target.disabled=true:"";
        }
        //设置数据存储到本地
        this.httpService.SetDataCache("technicalsupportlist",JSON.stringify(res.data).toString());
      });
    }
    else{
      this.dataList=JSON.parse(cachedata);
    }    
    
    // this.httpService.ajaxGet(api).then((response:any)=>{
    //   debugger;
    //   console.log(response);
    //   this.dataList=this.dataList.concat(response.result);

    //   this.page++;
    //   event?event.target.complete():'';
    //   //判断是否有新数据
    //   if(response.result.length<10){
    //     event?event.target.disabled=true:"";
    //   }
    // })
  }

  FormatToDate(date){
    return sd.format(date, 'YYYY-MM-DD');
  }

  FormatToDateTime(date){
    return sd.format(date, 'YYYY-MM-DD hh:mm:ss');
  }
}
