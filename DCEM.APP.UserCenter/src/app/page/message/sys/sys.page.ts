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
      thumbnail:"assets/img/ioc-message.png",
      roomType:"group",//group,ms_friend,fb_friend
      title:"系统管理员",
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
      thumbnail:"assets/img/ioc-notice.png",
      roomType:"ms_friend",//group,ms_friend,fb_friend
      title:"我的朋友A",
      activeTime:"11-27",
      latest_chat:"你好，最近怎么样？",
      unreadcount:0,//未读信息
      chatList:[]
    },
    {
      id:3,
      thumbnail:"assets/img/ioc-notice.png",
      roomType:"fb_friend",//group,ms_friend,fb_friend
      title:"朋友B",
      activeTime:"11-25",
      latest_chat:"你好，最近怎么样？",
      unreadcount:0,//未读信息
      chatList:[
        {
          userId: 3,
          user: {
            face: "assets/img/userhead/user01.jpg",
            friendType: "Messenger",//Messenger,facebook
          },
          chatText: "你好，最近怎么样？",
        },
        {
          userId: 1,
          user: {
            face: "assets/img/head_default.jpg",
            friendType: "facebook",//Messenger,facebook
          },
          chatText: "还好",
        }
      ]
    },
    {
      id:4,
      thumbnail:"assets/img/ioc-notice.png",
      roomType:"fb_friend",//group,ms_friend,fb_friend
      title:"张小明",
      activeTime:"11-24",
      latest_chat:"暂无消息",
      unreadcount:0,//未读信息
      chatList:[]
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
