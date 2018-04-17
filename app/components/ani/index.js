/**
 * 提供多项可复用的动画效果
 * 使用简单，增加对应class名即可
 * 参考网址：https://themes.webinane.com/wp/personal/
 */
import React, { Component } from 'react';
import './index.less';
import {Progress} from '../index';

export default class Css extends Component {
  state={
    index:0,
  };
  render() {
    const prefixCls = 'feu-ani';
    return (
      <div className={prefixCls}>
        <h3>第一篇（4个动画效果）</h3>
        <span className={`${prefixCls}-one`}>title1
          <i className="fa fa-home"/>
        </span>
        <Progress ref="pro"/>
        {/* <ul>
          {
            arr1.map( (v,k)=><li key={v} className={`${prefixCls}`}>
              <a>
                {v}
                <i className="fa fa-home"/>
              </a>
              <div className="feu-menu-content"/>
            </li> )
          }
        </ul> */}
      </div>
    );
  }
}

// const arr1=['title1','title2','title3'];
