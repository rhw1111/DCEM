import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../app/component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
    public model: any = {
        search: {
            apiUrl: "api/product/Detail",
        },
        title: "立即预定",
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
