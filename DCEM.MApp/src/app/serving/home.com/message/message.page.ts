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
      latest_chat:"安全库存预警：S513(瑞驰）已经触发安全库阀值，请增加此车型库存量。",
      unreadcount:1,//未读信息
      chatList:[
        {
          userId: 1,
          user: {
            face: "assets/img/userhead/thumbnail03.jpg",
            friendType: "Messenger",//Messenger,facebook
          },
          chatText: "安全库存预警：S513(瑞驰）已经触发安全库阀值，请增加此车型库存量。",
        }
      ]
    },
    // {
    //   id:1,
    //   thumbnail:"assets/img/userhead/thumbnail03.jpg",
    //   roomType:"group",//group,ms_friend,fb_friend
    //   title:"系统管理员",
    //   activeTime:"2019-12-18",
    //   latest_chat:"本周官方举办活动！",
    //   unreadcount:1,//未读信息
    //   chatList:[
    //     {
    //       userId: 1,
    //       user: {
    //         face: "assets/img/userhead/thumbnail03.jpg",
    //         friendType: "Messenger",//Messenger,facebook
    //       },
    //       chatText: "本周官方举办活动！",
    //     }
    //   ]
    // },
    {
      id:2,
      thumbnail:"assets/img/userhead/thumbnail01.jpg",
      roomType:"ms_friend",//group,ms_friend,fb_friend
      title:"马晓丽",
      activeTime:"2019-12-17",
      latest_chat:"你好，暂时没有，不过你可以关注APP活动发布信息。",
      unreadcount:0,//未读信息
      chatList:[
        {
          userId: 2,
          user: {
            face: "assets/img/userhead/thumbnail01.jpg",
            friendType: "Messenger",
          },
          chatText: "你好，最近怎么样？",
        },
        {
          userId: 1,
          user: {
            face: "assets/img/userhead.png",
            friendType: "facebook",
          },
          chatText: "你好，暂时没有，不过你可以关注APP活动发布信息。",
        }
      ]
    },
    {
      id:3,
      thumbnail:"assets/img/userhead/user01.jpg",
      roomType:"fb_friend",//group,ms_friend,fb_friend
      title:"王小贵",
      activeTime:"2019-11-11",
      latest_chat:"罗经理，我这块SF05的轮胎备件到货了吗？",
      unreadcount:0,//未读信息
      chatList:[
        {
          userId: 3,
          user: {
            face: "assets/img/userhead/user01.jpg",
            friendType: "Messenger",//Messenger,facebook
          },
          chatText: "罗经理，我这块SF05的轮胎备件到货了吗？",
        },
        {
          userId: 1,
          user: {
            face: "assets/img/userhead.png",
            friendType: "facebook",//Messenger,facebook
          },
          chatText: "最快本周末到，请耐心等待，放心到了我会通知你的。",
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
      title:"销售顾问",
      activeTime:"2019-10-02",
      latest_chat:"小罗，帮忙跟进一下周先生那个客户，他成交意向很高的。",
      unreadcount:5,//未读信息
      chatList:[
        {
          userId: 1,
          user: {
            face: "assets/img/userhead/user03.jpg",
            friendType: "Messenger",//Messenger,facebook
          },
          chatText: "你哪有多少轮胎备件库存？",
        },
        {
          userId: 1,
          user: {
            face: "assets/img/userhead/user03.jpg",
            friendType: "Messenger",//Messenger,facebook
          },
          chatText: "如果不够需要及时采购了",
        },
        {
          userId: 1,
          user: {
            face: "assets/img/userhead/user03.jpg",
            friendType: "Messenger",//Messenger,facebook
          },
          chatText: "最近主机那边到了一批货，需要及时采购了",
        },
        {
          userId: 1,
          user: {
            face: "assets/img/userhead/user03.jpg",
            friendType: "Messenger",//Messenger,facebook
          },
          chatText: "我这周忙其他事，这个事就交给你了。",
        },
        {
          userId: 1,
          user: {
            face: "assets/img/userhead/user03.jpg",
            friendType: "Messenger",//Messenger,facebook
          },
          chatText: "小罗，帮忙跟进一下周先生那个客户，他成交意向很高的。",
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
