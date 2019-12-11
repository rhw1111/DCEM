import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-loginfo',
  templateUrl: './loginfo.page.html',
  styleUrls: ['./loginfo.page.scss'],
})
export class LoginfoPage implements OnInit {

  public logModel:any;
  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      if (params['log'] != null && params['log'] != undefined) {
        this.logModel=JSON.parse(params['log']);
      }
    });
  }

  ngOnInit() {
  }

}
