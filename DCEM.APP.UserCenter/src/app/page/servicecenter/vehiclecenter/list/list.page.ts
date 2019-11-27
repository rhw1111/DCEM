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
      mode:"-1",
      price:"-1",
      opack:"-1"
    }
  }
  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,

  ) { }

  ngOnInit() {
  }

}
