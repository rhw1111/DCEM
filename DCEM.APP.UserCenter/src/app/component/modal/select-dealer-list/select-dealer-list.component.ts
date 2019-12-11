import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-dealer-list',
  templateUrl: './select-dealer-list.component.html',
  styleUrls: ['./select-dealer-list.component.scss'],
})
export class SelectDealerListComponent implements OnInit {

  constructor() { }
  public model: any = {
    apiUrl: "/api/delivery/getlist",
    deliverystatusOptions: [],
    search: {
      pageindex: 1,
      pagesize: 10,
      searchkey: "",
      deliverystatus: "-1",  
    },
    deliverys: [],
    isending: false
  }
  ngOnInit() {}

}
