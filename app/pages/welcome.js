import React, { Component } from 'react';
import  './styles/welcome.less';
const catalog = require('./imgs/catalog.png');
class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <h2>
          欢迎使用图腾（totem）!
        </h2>
        <h2>1. 使用说明</h2>
        <h3>1.1 项目目录简介</h3>
        <img src={catalog} style={{width:320}}/>
        <p>
        主要介绍app文件夹的内容。
          <ul>
            <li>components
            <p>组件库</p>
            </li>
            <li>pages
            <p>页面组件</p>
            </li>
            <li>model.js
            <p>框架及路由配置文件</p>
            </li>
          </ul>
        </p>
        <h3>1.2 如何添加新页面？</h3>
        <ul>
          <li>step1：创建添加页面文件（建议pages文件夹）
          </li>
          <li>step2：在model文件中添加页面路由
          <p>路由在model文件中appinit对象的routers中添加，例如：<br/>
            <code> 
              {'import Welcome from "./pages/welcome";'}
              <br/>
              {'export const appinit={'}
              <br />
              {'...'}
              <br />
              &nbsp;{'routers: [{'}
              <br/>
              &nbsp;&nbsp;{'url: "/",'}
              <br/>
              &nbsp;&nbsp;{'title: "welcome",'}
              <br/>
              &nbsp;&nbsp;{'leftIcon: "",'}
              <br/>
              &nbsp;&nbsp;{'noMenu: false,'}
              <br/>
              &nbsp;&nbsp;{'component: Welcome,'}
              <br/>
              {'}],'}
              <br />
            </code>
          </p>
          </li>
        </ul>
        <h2>2. 问题反馈</h2>
        <p>如果使用遇到问题，请发邮件至：(姚雪春)
        xcyao5728@fiberhome.com</p>
      </div>
    );
  }
}

export default Welcome;
