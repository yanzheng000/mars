/**
 * autor 郑素素
 * 文本框，常用于标题
 * 可设置字体大小，加粗，增加链接功能，可选择链接的跳转方式，提供几种常见颜色，可在前后位置增加图片或icon
 */

import React, { Component } from 'react';
import './index.less';

export default class Textbox extends Component {

  render() {
    const {prefixCls, text, textSize, bold, href, newWindow, color, unifiedConfig, align, beforeImg,beforeIco, beforeSize, afterImg, afterIco, afterSize} = this.props;
    const textStyle={
      fontSize:textSize+'px',
      fontWeight:bold?600:400,
      lineHeight:textSize+'px',
    };
    const fBeforeSize = unifiedConfig?textSize:beforeSize;
    const fAfterSize = unifiedConfig?textSize:afterSize;
    return (
      <p className={`${prefixCls} ${prefixCls}-${color}${!unifiedConfig?` ${prefixCls}-${align}`:''}`}>
        {
          beforeImg?<img src={beforeImg} alt="beforeimg" style={{height:fBeforeSize}} className="before"/>:beforeIco?<i className={`before fa fa-${beforeIco}`} style={{fontSize:fBeforeSize}}/>:null
        }
        <a className={`${prefixCls}-a`} style={textStyle} href={href?href:'javascript:void(0);'} target={newWindow?'_target':'_self'}>{text}</a>
        {
          afterImg?<img src={afterImg} alt="afterimg" style={{height:fAfterSize}} className="after"/>:afterIco?<i className={`after fa fa-${afterIco}`} style={{fontSize:fAfterSize}}/>:null
        }
      </p>
    );
  }
}

Textbox.defaultProps={
  prefixCls:'feu-textbox',
};
