import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

  public activities:any=[
    {
      id:1,
      thumbnail:"",
      roomType:"group",//group,ms_friend,fb_friend
      title:"",
      activeTime:"",
      latest_chat:""
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  searchModal(){

  }

  remove(){

  }
  openNewChat(){
    
  }

}
