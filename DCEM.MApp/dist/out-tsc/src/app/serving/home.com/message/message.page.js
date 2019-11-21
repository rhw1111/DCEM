import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
let MessagePage = class MessagePage {
    constructor(router) {
        this.router = router;
        this.activities = [
            {
                id: 1,
                thumbnail: "assets/img/userhead/thumbnail03.jpg",
                roomType: "group",
                title: "系统管理员",
                activeTime: "最新消息",
                latest_chat: "本周官方举办活动！",
                unreadcount: 1,
                chatList: [
                    {
                        userId: 1,
                        user: {
                            face: "assets/img/userhead/thumbnail03.jpg",
                            friendType: "Messenger",
                        },
                        chatText: "本周官方举办活动！",
                    }
                ]
            },
            {
                id: 2,
                thumbnail: "assets/img/userhead/thumbnail01.jpg",
                roomType: "ms_friend",
                title: "我的朋友A",
                activeTime: "昨日消息",
                latest_chat: "你好，最近怎么样？",
                unreadcount: 0,
                chatList: []
            },
            {
                id: 3,
                thumbnail: "assets/img/userhead/user01.jpg",
                roomType: "fb_friend",
                title: "朋友B",
                activeTime: "3天前消息",
                latest_chat: "你好，最近怎么样？",
                unreadcount: 0,
                chatList: [
                    {
                        userId: 3,
                        user: {
                            face: "assets/img/userhead/user01.jpg",
                            friendType: "Messenger",
                        },
                        chatText: "你好，最近怎么样？",
                    },
                    {
                        userId: 1,
                        user: {
                            face: "assets/img/head_default.jpg",
                            friendType: "facebook",
                        },
                        chatText: "还好",
                    }
                ]
            },
            {
                id: 4,
                thumbnail: "assets/img/userhead/user02.jpg",
                roomType: "fb_friend",
                title: "张小明",
                activeTime: "暂无消息",
                latest_chat: "暂无消息",
                unreadcount: 0,
                chatList: []
            },
            {
                id: 5,
                thumbnail: "assets/img/userhead/user03.jpg",
                roomType: "fb_friend",
                title: "销售顾问A",
                activeTime: "消息未读",
                latest_chat: "可有很强的购车意愿。",
                unreadcount: 5,
                chatList: [
                    {
                        userId: 1,
                        user: {
                            face: "assets/img/userhead/user03.jpg",
                            friendType: "Messenger",
                        },
                        chatText: "可有很强的购车意愿。",
                    },
                    {
                        userId: 1,
                        user: {
                            face: "assets/img/userhead/user03.jpg",
                            friendType: "Messenger",
                        },
                        chatText: "推荐购买S01车型",
                    },
                    {
                        userId: 1,
                        user: {
                            face: "assets/img/userhead/user03.jpg",
                            friendType: "Messenger",
                        },
                        chatText: "推荐购买S01车型",
                    },
                    {
                        userId: 1,
                        user: {
                            face: "assets/img/userhead/user03.jpg",
                            friendType: "Messenger",
                        },
                        chatText: "推荐购买S01车型",
                    },
                    {
                        userId: 1,
                        user: {
                            face: "assets/img/userhead/user03.jpg",
                            friendType: "Messenger",
                        },
                        chatText: "推荐购买S01车型",
                    }
                ]
            }
        ];
    }
    ngOnInit() {
    }
    search() {
    }
    remove(obj) {
    }
    openNewChat() {
    }
    toRoomMessage(room) {
        this.router.navigate(['/base/message/room'], {
            queryParams: {
                msg: JSON.stringify(room)
            }
        });
    }
};
MessagePage = tslib_1.__decorate([
    Component({
        selector: 'app-message',
        templateUrl: './message.page.html',
        styleUrls: ['./message.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], MessagePage);
export { MessagePage };
//# sourceMappingURL=message.page.js.map