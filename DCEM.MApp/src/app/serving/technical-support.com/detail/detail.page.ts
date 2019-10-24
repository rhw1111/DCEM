import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(public activeRoute: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((data: any) => {   
      alert(data.id);
    })
  }

}
