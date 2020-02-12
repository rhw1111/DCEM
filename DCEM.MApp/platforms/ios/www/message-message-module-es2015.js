(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["message-message-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/home.com/message/message.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/home.com/message/message.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>消息列表</ion-title>\n    <!-- <ion-nav-buttons side=\"right\"> \n        <button ng-click=\"openNewChat()\"></button> \n      </ion-nav-buttons> -->\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar placeholder=\"快速查找\" (keyup)=\"search()\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list ng-if=\"activities\">\n    <ion-item-sliding *ngFor=\"let room of activities;let key=index\">\n      <ion-item (click)=\"toRoomMessage(room)\">\n        <ion-badge slot=\"start\" *ngIf=\"room.unreadcount>0\" color=\"danger\">{{room.unreadcount}}</ion-badge>\n        <ion-avatar size=\"large\" slot=\"start\">\n            <img src=\"{{room.thumbnail}}\">\n        </ion-avatar>\n        <ion-label>\n          <h2>{{room.title}}</h2>\n          <p>{{room.latest_chat}}</p>\n        </ion-label>\n        <ion-note slot=\"end\">\n          {{room.activeTime}}\n        </ion-note>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" expandable ng-click=\"remove(room)\">\n          删除\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <!--show when there is no activity-->\n  <div *ngIf=\"!activities\">\n    <div style=\"height: 60px\"></div>\n    <div class=\"text-center\" style=\"padding: 45px\">\n      <h2 class=\"grey\"> Recent </h2>\n      <div style=\"height: 10px\"></div>\n      <h4 class=\"grey\">Once you start chatting, all your messages will be here.</h4>\n      <div style=\"height: 20px\"></div> <button class=\"button button-outline\" ng-click=\"openNewChat()\">New\n        Message</button>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/serving/home.com/message/message.module.ts":
/*!************************************************************!*\
  !*** ./src/app/serving/home.com/message/message.module.ts ***!
  \************************************************************/
/*! exports provided: MessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.page */ "./src/app/serving/home.com/message/message.page.ts");







const routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]
    }
];
let MessagePageModule = class MessagePageModule {
};
MessagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]]
    })
], MessagePageModule);



/***/ }),

/***/ "./src/app/serving/home.com/message/message.page.scss":
/*!************************************************************!*\
  !*** ./src/app/serving/home.com/message/message.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  height: 50px;\n  width: 50px;\n}\n\nion-item h2 {\n  display: inline-block;\n  font-family: Lato, \"Helvetica Neue\", \"Roboto\", \"Segoe UI\", sans-serif;\n  font-weight: 400;\n  line-height: 1.2;\n  font-size: 14px;\n}\n\nion-item P {\n  font-size: 12px;\n}\n\nion-item ion-badge {\n  position: absolute;\n  left: 45px;\n  width: 25px;\n  top: 0px;\n}\n\nion-item ion-note {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0YvRENFTS9EQ0VNLk1BcHAvc3JjL2FwcC9zZXJ2aW5nL2hvbWUuY29tL21lc3NhZ2UvbWVzc2FnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlcnZpbmcvaG9tZS5jb20vbWVzc2FnZS9tZXNzYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0k7RUFDSSxxQkFBQTtFQUNBLHFFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNBUjs7QURFSTtFQUNJLGVBQUE7QUNBUjs7QURFSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDQVI7O0FERUk7RUFDSSxlQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aW5nL2hvbWUuY29tL21lc3NhZ2UvbWVzc2FnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1hdmF0YXJ7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xufVxuaW9uLWl0ZW17XG4gICAgaDJ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIFB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgaW9uLWJhZGdle1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDQ1cHg7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICB0b3A6IDBweDtcbiAgICB9XG4gICAgaW9uLW5vdGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG59XG4iLCJpb24tYXZhdGFyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuaW9uLWl0ZW0gaDIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiUm9ib3RvXCIsIFwiU2Vnb2UgVUlcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWl0ZW0gUCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmlvbi1pdGVtIGlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIHRvcDogMHB4O1xufVxuaW9uLWl0ZW0gaW9uLW5vdGUge1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/serving/home.com/message/message.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/serving/home.com/message/message.page.ts ***!
  \**********************************************************/
/*! exports provided: MessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePage", function() { return MessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MessagePage = class MessagePage {
    constructor(router) {
        this.router = router;
        this.activities = [
            {
                id: 1,
                thumbnail: "assets/img/userhead/thumbnail03.jpg",
                roomType: "group",
                title: "系统管理员",
                activeTime: "2019-12-18",
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
                activeTime: "2019-12-17",
                latest_chat: "你好，最近怎么样？",
                unreadcount: 0,
                chatList: []
            },
            {
                id: 3,
                thumbnail: "assets/img/userhead/user01.jpg",
                roomType: "fb_friend",
                title: "朋友B",
                activeTime: "2019-11-11",
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
                activeTime: "2019-11-11",
                latest_chat: "暂无消息",
                unreadcount: 0,
                chatList: []
            },
            {
                id: 5,
                thumbnail: "assets/img/userhead/user03.jpg",
                roomType: "fb_friend",
                title: "销售顾问A",
                activeTime: "2019-10-02",
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
MessagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message',
        template: __webpack_require__(/*! raw-loader!./message.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/home.com/message/message.page.html"),
        styles: [__webpack_require__(/*! ./message.page.scss */ "./src/app/serving/home.com/message/message.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MessagePage);



/***/ })

}]);
//# sourceMappingURL=message-message-module-es2015.js.map