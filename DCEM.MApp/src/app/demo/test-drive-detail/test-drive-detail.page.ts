import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-test-drive-detail',
  templateUrl: './test-drive-detail.page.html',
  styleUrls: ['./test-drive-detail.page.scss'],
})
export class TestDriveDetailPage implements OnInit {

  public DetailItem:any;
  constructor(public activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      if(params['Item']!=null && params['Item']!=undefined){
        this.DetailItem=JSON.parse(params['Item']);
      }
    });
  }

  ngOnInit() {
    
  }

}
