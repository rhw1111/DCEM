import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  public activities:any=[
    {
      id:1,
      thumbnail:"assets/img/logo.png",
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
      thumbnail:"assets/img/logo.png",
      roomType:"ms_friend",//group,ms_friend,fb_friend
      title:"我的朋友A",
      activeTime:"11-27",
      latest_chat:"你好，最近怎么样？",
      unreadcount:0,//未读信息
      chatList:[]
    },
    {
      id:3,
      thumbnail:"assets/img/logo.png",
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
      thumbnail:"assets/img/logo.png",
      roomType:"fb_friend",//group,ms_friend,fb_friend
      title:"张小明",
      activeTime:"11-24",
      latest_chat:"暂无消息",
      unreadcount:0,//未读信息
      chatList:[]
    },
    {
      id:5,
      thumbnail:"assets/img/logo.png",
      roomType:"fb_friend",//group,ms_friend,fb_friend
      title:"销售顾问A",
      activeTime:"11-23",
      latest_chat:"可有很强的购车意愿。",
      unreadcount:5,//未读信息
      chatList:[
        {
          userId: 1,
          user: {
            face: "assets/img/logo.png",
            friendType: "Messenger",//Messenger,facebook
          },
          chatText: "可有很强的购车意愿。",
        },
        {
          userId: 1,
          user: {
            face: "assets/img/userhead/user03.jpg",
            friendType: "Messenger",//Messenger,facebook
          },
          chatText: "推荐购买S01车型",
        },
        {
          userId: 1,
          user: {
            face: "assets/img/userhead/user03.jpg",
            friendType: "Messenger",//Messenger,facebook
          },
          chatText: "推荐购买S01车型",
        },
        {
          userId: 1,
          user: {
            face: "assets/img/userhead/user03.jpg",
            friendType: "Messenger",//Messenger,facebook
          },
          chatText: "推荐购买S01车型",
        },
        {
          userId: 1,
          user: {
            face: "assets/img/userhead/user03.jpg",
            friendType: "Messenger",//Messenger,facebook
          },
          chatText: "推荐购买S01车型",
        }
      ]
    }
  ];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  toRoomMessage(room){
    this.router.navigate(['/message/room'], {
      queryParams: {
        msg: JSON.stringify(room)
      }
    });
  }
}
