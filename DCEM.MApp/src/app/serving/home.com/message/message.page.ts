import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  public activities:any=[
    {
      id:1,
      thumbnail:"assets/img/userhead/thumbnail03.jpg",
      roomType:"group",//group,ms_friend,fb_friend
      title:"系统管理员",
      activeTime:"2019-12-18",
      latest_chat:"本周官方举办活动！",
      unreadcount:1,//未读信息
      chatList:[
        {
          userId: 1,
          user: {
            face: "assets/img/userhead/thumbnail03.jpg",
            friendType: "Messenger",//Messenger,facebook
          },
          chatText: "本周官方举办活动！",
        }
      ]
    },
    {
      id:2,
      thumbnail:"assets/img/userhead/thumbnail01.jpg",
      roomType:"ms_friend",//group,ms_friend,fb_friend
      title:"我的朋友A",
      activeTime:"2019-12-17",
      latest_chat:"你好，最近怎么样？",
      unreadcount:0,//未读信息
      chatList:[]
    },
    {
      id:3,
      thumbnail:"assets/img/userhead/user01.jpg",
      roomType:"fb_friend",//group,ms_friend,fb_friend
      title:"朋友B",
      activeTime:"2019-11-11",
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
      thumbnail:"assets/img/userhead/user02.jpg",
      roomType:"fb_friend",//group,ms_friend,fb_friend
      title:"张小明",
      activeTime:"2019-11-11",
      latest_chat:"暂无消息",
      unreadcount:0,//未读信息
      chatList:[]
    },
    {
      id:5,
      thumbnail:"assets/img/userhead/user03.jpg",
      roomType:"fb_friend",//group,ms_friend,fb_friend
      title:"销售顾问A",
      activeTime:"2019-10-02",
      latest_chat:"可有很强的购车意愿。",
      unreadcount:5,//未读信息
      chatList:[
        {
          userId: 1,
          user: {
            face: "assets/img/userhead/user03.jpg",
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

  search(){

  }

  remove(obj:any){

  }
  openNewChat(){
    
  }
  toRoomMessage(room){
    this.router.navigate(['/base/message/room'], {
      queryParams: {
        msg: JSON.stringify(room)
      }
    });
  }
}
