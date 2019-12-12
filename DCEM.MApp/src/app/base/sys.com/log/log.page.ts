import { Component, OnInit } from '@angular/core';
import { DCore_Log, LogModel } from 'app/base/base.ser/Dcem.core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.page.html',
  styleUrls: ['./log.page.scss'],
})
export class LogPage implements OnInit {

  public loglist:any=[];
  constructor(
    private _log:DCore_Log,
    private router:Router
  ) { }

  ngOnInit() {
    this.loglist= this._log.GetList();
  }

  clear(){
    this._log.Clear();
    this.loglist=[];
  }

  toLogInfo(log){
    this.router.navigate(['/base/sys/loginfo'], {
      queryParams: {
        log: JSON.stringify(log)
      }
    });
  }

}
