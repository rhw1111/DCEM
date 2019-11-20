import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { debug } from 'util';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {
  @ViewChild(IonContent, null) ionContent: IonContent;
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;

  public userHead:any="assets/img/head_default.jpg";
  public room: any = {
    chatList: []//聊天记录
  };

  public chatText: any = "";
  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      if (params['msg'] != null && params['msg'] != undefined) {
        this.room=JSON.parse(params['msg']);
      }
    });
  }

  ngOnInit() {
    
  }

  sendChat() {
    this.room.chatList.push({
      userId: 1,
      user: {
        face: this.userHead,
        friendType: "facebook",//Messenger,facebook
      },
      chatText: this.chatText
    });
    //自动回复
    this.room.chatList.push({
      userId: 2,
      user: {
        face: this.room.thumbnail,
        friendType: "Messenger",//Messenger,facebook
      },
      chatText: this.room.title+":自动回复..."
    });

    this.chatText="";

    this.ionContent.scrollToBottom();
  }

}
