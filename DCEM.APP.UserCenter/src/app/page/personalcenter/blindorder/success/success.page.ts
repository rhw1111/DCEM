import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {
  model = {
    ordercode: "",
    premiumcode:""
  };
  constructor(
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      if (params['order'] != null && params['order'] != undefined) {
        this.model.ordercode = params['order'];
      }
      if (params['premiumcode'] != null && params['premiumcode'] != undefined) {
        this.model.premiumcode = params['premiumcode'];
      }
    });
  }
}
