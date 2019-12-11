import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page,DCore_Log,LogModel } from 'app/base/base.ser/Dcem.core';
import { MessageService } from 'app/base/base.ser/message.service';
import { Dateformat } from 'app/base/base.ser/dateformat';

@Component({
  selector: 'app-systemsetup',
  templateUrl: './systemsetup.page.html',
  styleUrls: ['./systemsetup.page.scss'],
})
export class SystemsetupPage implements OnInit {

  state = {
    modal1: false
  };

  public mod:any={
    CacheSize:13.5,//缓存大小
  };

  constructor(
    private _page: DCore_Page,
    private _http:DCore_Http,
    private _log:DCore_Log,
    private _dateformat:Dateformat
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.state.modal1 = false;
  }

  showModal() {
    this.state.modal1 = true;
  }

  public logout() {
    this._log.WriteInfoLog(MessageService.InfoLoginOut);
    this._http.loginout();
  }

  clearCache(){
    this.mod.CacheSize=0;
  }

  renderHeader(){
    return MessageService.InfoLoginOutAlter;
  }

}
