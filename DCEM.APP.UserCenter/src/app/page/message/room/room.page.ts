import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {
  @ViewChild(IonContent, null) ionContent: IonContent;
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;

  public websocket:any = null;
  public websocketAddress = 'ws://'

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
    //判断当前浏览器是否支持WebSocket
    if('WebSocket' in window){
      this.websocket = new WebSocket(this.websocketAddress);

        //连接发生错误的回调方法
      this.websocket.onerror = function () {
        //notificationReminder("error");
      };

      //连接成功建立的回调方法
      this.websocket.onopen = function (event) {
        console.log("链接成功"+event);
      }

      //接收到消息的回调方法
      this.websocket.onmessage = function (event) {
        //$scope.notificationReminder(event.data);
        alert(event.data);
      }

      //连接关闭的回调方法
      this.websocket.onclose = function () {
        //notificationReminder("close");
      }

      //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
      // window.onbeforeunload = function () {
      //   this.websocket.close();
      // }
    }
    else{
      alert('Not support websocket')
    }
  }
  //关闭聊天
  closeWebSocket() {
    if(this.websocket!=null){
      this.websocket.close();
    }
  }

  //发送消息  
  sendChat() {
    this.websocket.send("UserId:123");

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



 

 

