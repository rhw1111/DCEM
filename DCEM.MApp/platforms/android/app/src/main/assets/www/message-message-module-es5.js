(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["message-message-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/serving/home.com/message/message.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/serving/home.com/message/message.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"返回\" defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>消息列表</ion-title>\r\n    <!-- <ion-nav-buttons side=\"right\"> \r\n        <button ng-click=\"openNewChat()\"></button> \r\n      </ion-nav-buttons> -->\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar placeholder=\"快速查找\" (keyup)=\"search()\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list ng-if=\"activities\">\r\n    <ion-item-sliding *ngFor=\"let room of activities;let key=index\">\r\n      <ion-item (click)=\"toRoomMessage(room)\">\r\n        <ion-avatar size=\"large\" slot=\"start\">\r\n            <img src=\"{{room.thumbnail}}\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>{{room.title}}</h2>\r\n          <p>{{room.latest_chat}}</p>\r\n        </ion-label>\r\n        <ion-note slot=\"end\">\r\n          {{room.activeTime}}\r\n        </ion-note>\r\n        <ion-badge *ngIf=\"room.unreadcount>0\" slot=\"end\" color=\"danger\">{{room.unreadcount}}</ion-badge>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"danger\" expandable ng-click=\"remove(room)\">\r\n          Delete\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n  <!--show when there is no activity-->\r\n  <div *ngIf=\"!activities\">\r\n    <div style=\"height: 60px\"></div>\r\n    <div class=\"text-center\" style=\"padding: 45px\">\r\n      <h2 class=\"grey\"> Recent </h2>\r\n      <div style=\"height: 10px\"></div>\r\n      <h4 class=\"grey\">Once you start chatting, all your messages will be here.</h4>\r\n      <div style=\"height: 20px\"></div> <button class=\"button button-outline\" ng-click=\"openNewChat()\">New\r\n        Message</button>\r\n    </div>\r\n  </div>\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.page */ "./src/app/serving/home.com/message/message.page.ts");







var routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]
    }
];
var MessagePageModule = /** @class */ (function () {
    function MessagePageModule() {
    }
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
    return MessagePageModule;
}());



/***/ }),

/***/ "./src/app/serving/home.com/message/message.page.scss":
/*!************************************************************!*\
  !*** ./src/app/serving/home.com/message/message.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  display: inline-block;\n  font-family: Lato, \"Helvetica Neue\", \"Roboto\", \"Segoe UI\", sans-serif;\n  font-weight: 700;\n  line-height: 1.2;\n  font-size: 18px; }\n\nion-avatar {\n  height: 50px;\n  width: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmluZy9ob21lLmNvbS9tZXNzYWdlL0U6XFxBcHBQcm9qZWN0XFxEQ0VNXFxEQ0VNLk1BcHAvc3JjXFxhcHBcXHNlcnZpbmdcXGhvbWUuY29tXFxtZXNzYWdlXFxtZXNzYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQjtFQUNyQixxRUFBcUU7RUFDckUsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlcnZpbmcvaG9tZS5jb20vbWVzc2FnZS9tZXNzYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJSb2JvdG9cIiwgXCJTZWdvZSBVSVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuaW9uLWF2YXRhcntcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MessagePage = /** @class */ (function () {
    function MessagePage(router) {
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
    MessagePage.prototype.ngOnInit = function () {
    };
    MessagePage.prototype.search = function () {
    };
    MessagePage.prototype.remove = function (obj) {
    };
    MessagePage.prototype.openNewChat = function () {
    };
    MessagePage.prototype.toRoomMessage = function (room) {
        this.router.navigate(['/base/message/room'], {
            queryParams: {
                msg: JSON.stringify(room)
            }
        });
    };
    MessagePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    MessagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! raw-loader!./message.page.html */ "./node_modules/raw-loader/index.js!./src/app/serving/home.com/message/message.page.html"),
            styles: [__webpack_require__(/*! ./message.page.scss */ "./src/app/serving/home.com/message/message.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MessagePage);
    return MessagePage;
}());



/***/ })

}]);
//# sourceMappingURL=message-message-module-es5.js.map