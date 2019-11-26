import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
