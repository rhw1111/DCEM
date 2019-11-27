import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
@Component({
  selector: 'app-systemsetup',
  templateUrl: './systemsetup.page.html',
  styleUrls: ['./systemsetup.page.scss'],
})
export class SystemsetupPage implements OnInit {

  constructor(
    private _page: DCore_Page
  ) { }

  ngOnInit() {
  }

  public logout() {

    this._page.goto("/base/uc/login");
    
  }

}
