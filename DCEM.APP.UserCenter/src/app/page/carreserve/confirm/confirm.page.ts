import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../app/component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {
    public model: any = {
        search: {
            apiUrl: "api/product/Detail",
        },
        title: "确认订单信息",
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
