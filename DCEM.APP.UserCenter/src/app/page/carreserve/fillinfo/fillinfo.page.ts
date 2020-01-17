import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../app/component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fillinfo',
  templateUrl: './fillinfo.page.html',
  styleUrls: ['./fillinfo.page.scss'],
})
export class FillinfoPage implements OnInit {
    public model: any = {
        search: {
            apiUrl: "api/product/Detail",
        },
        title: "完善预定信息",
        datadetail: {}
    };
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,
    ) { }

  ngOnInit() {
  }

}
