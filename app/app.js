import * as React from 'react';


import { Router } from 'yrui';
/* 
import { sidebarMenu } from './models/routers'; */



import 'font-awesome/css/font-awesome.css';
import 'yrui/lib/yrui.css';
import 'styles/reset.less';
import 'styles/config.less';
import { appinit } from './model';
const app = {
  brand: {
    title: 'Phoenix',//
    subtitle: 'UI',//
    logo: require('./styles/images/usr.jpg'),//
  },
  navbar: {
    dropList: null,//头部菜单
    showSearchbar: true,//显示搜索框
    showRightTogbar: true,//显示右侧面板切换按钮
    login: null,//用户登录信息
    click: (v) => { console.log(v); },//点击头部菜单事件
    listClick: (v) => { console.log(v); },//点击头部dropdown子菜单事件
  },
  sidebar: {
    projectList: null,//菜单项目列表，可忽略
    showSidebarTitle: false,//显示侧边栏标题
    userInfo: null,//用户信息
  },
  rightbar:null,// <Rightbar/>,//右侧边栏component
  main: {
    showPagehead: false,//显示main头部
    showPagetitle: false,//显示头部标题
  },
  footer: '<p>版权所有 &copy; 2017-2020 Phoenix 团队</p>',//底部栏component
  // routers: sidebarMenu,//侧边栏，路由
  routeAnimate: 'scale',//路由切换动画,设置为'no'取消动画效果
  scroll: false,//自定义主页滚动条，默认不使用
  sidebarScroll: true,//自定义侧边栏滚动条，默认使用
  browserRouter: false,//是否使用真实路径
  horizontal: false,//是否为水平菜单栏
  ...appinit,
};


export default class App extends React.Component {

  render() {

    return (
      <Router {...app} />
    );
  }
}