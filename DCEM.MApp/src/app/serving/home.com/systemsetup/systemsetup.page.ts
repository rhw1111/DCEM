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

  renderHeader(){
    return '退出后不会删除任何历史数据'
  }

}
