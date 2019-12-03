import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
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
    private _page: DCore_Page
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

    this._page.goto("/base/uc/login");
    
  }

  clearCache(){
    this.mod.CacheSize=0;
  }

  renderHeader(){
    return '退出后不会删除任何历史数据'
  }

}
