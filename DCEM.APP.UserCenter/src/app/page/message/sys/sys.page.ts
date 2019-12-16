import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sys',
  templateUrl: './sys.page.html',
  styleUrls: ['./sys.page.scss'],
})
export class SysPage implements OnInit {

  public notices:any=[
    {
      id:1,
      thumbnail:"assets/img/ioc-notice.png",
      roomType:"group",//group,ms_friend,fb_friend
      title:"通知",
      activeTime:"11-29",
      latest_chat:"本周官方举办活动！",
      unreadcount:1,//未读信息
      chatList:[
        {
          userId: 1,
          user: {
            face: "assets/img/logo.png",
              friendType: "Messenger",//Messenger,facebook
          },
          chatText: "本周官方举办活动！",
        }
      ]
    },
    {
      id:2,
      thumbnail:"assets/img/ioc-message.png",
      roomType:"ms_friend",//group,ms_friend,fb_friend
      title:"互动",
      activeTime:"11-27",
      latest_chat:"小小俊，关注了你",
      unreadcount:0,//未读信息
      chatList:[]
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
