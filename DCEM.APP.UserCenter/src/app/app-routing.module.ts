﻿import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./page/home/tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'home',  //通用目录
        children: [
            { path: 'tab', loadChildren: () => import('./page/home/tabs/tabs.module').then(m => m.TabsPageModule) },
        ]
    },
    {
        path: 'carcenter',  //汽车中心(爱车)
        children: [
            { path: 'index', loadChildren: () => import('./page/carcenter/index/index.module').then(m => m.IndexPageModule) },
        ]
    },
    {
        path: 'charging',  //充电桩
        children: [
            { path: 'index', loadChildren: () => import('./page/charging/index/index.module').then(m => m.IndexPageModule) },
        ]
    },
    {
        path: 'community',  //社区
        children: [
            { path: 'index', loadChildren: () => import('./page/community/index/index.module').then(m => m.IndexPageModule) },
        ]
    },
    {
        path: 'personalcenter',  //用户中心
        children: [
            { path: 'index', loadChildren: () => import('./page/personalcenter/index/index.module').then(m => m.IndexPageModule) },
        ]
    },
    {
        path: 'message',  //消息中心
        children: [
            { path: 'index', loadChildren: () => import('./page/message.com/index/index.module').then(m => m.IndexPageModule) },
            { path: 'room',  loadChildren: () => import('./page/message.com/room/room.module').then( m => m.RoomPageModule)},
            { path: 'sys', loadChildren: () => import('./page/message.com/sys/sys.module').then( m => m.SysPageModule) },
            { path: 'detail', loadChildren: () => import('./page/message.com/detail/detail.module').then( m => m.DetailPageModule)},
        ]
    },
    {
        path: 'servicecenter',  //服务中心
        children: [
            {
                path: 'vehiclemall',  //整车商城
                children: [
                    { path: 'list', loadChildren: () => import('./page/servicecenter/vehiclecenter/list/list.module').then(m => m.ListPageModule) },
                    { path: 'detail', loadChildren: () => import('./page/servicecenter/vehiclecenter/detail/detail.module').then(m => m.DetailPageModule) },
                ]
            },
            {
                path: 'boutique',  //精品商城
                children: [
                    { path: 'list', loadChildren: () => import('./page/servicecenter/boutique/list/list.module').then(m => m.ListPageModule) },
                    { path: 'detail', loadChildren: () => import('./page/servicecenter/boutique/detail/detail.module').then(m => m.DetailPageModule) },
                ]
            },
            {
                path: 'dealer',  //体验中心
                children: [
                    { path: 'list',    loadChildren: () => import('./page/servicecenter/dealer/list/list.module').then( m => m.ListPageModule) },
                ]
            },
            { path: 'index', loadChildren: () => import('./page/servicecenter/index/index.module').then(m => m.IndexPageModule) },
        ]
    },
    {
        path: 'testdrive',  //试乘试驾
        children: [
            { path: 'edit', loadChildren: () => import('./page/testdrive/edit/edit.module').then(m => m.EditPageModule) },
            { path: 'list', loadChildren: () => import('./page/testdrive/list/list.module').then(m => m.ListPageModule) },
        ]
    },

  {
    path: 'detail',
    loadChildren: () => import('./page/servicecenter/vehiclecenter/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./page/servicecenter/boutique/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./page/servicecenter/boutique/detail/detail.module').then(m => m.DetailPageModule)
  },
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
