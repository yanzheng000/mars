import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import E from 'wangeditor';
import './index.less';

export default class Editor extends Component {
  state = {
    editorContent: this.props.initContent,
  };
  componentDidMount() {
    const elem = this.refs.editorElem;
    this.editor = new E(elem);
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    this.editor.customConfig.onchange = html => {
      this.setState({
        editorContent: html,
      });
      this.props.onChange && this.props.onChange(html);
    };

    this.editor.customConfig.zIndex = 5;
    // 下面二者用其一
    this.editor.customConfig.uploadImgShowBase64 = true;
    // this.editor.customConfig.uploadImgServer = '/upload';
    this.editor.create();
    this.editor.$textElem.attr('contenteditable', !!this.props.editable);
    this.editor.txt.html(this.props.initContent);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.editable !== this.props.editable){
      this.setState({ editable:nextProps.editable });
    }
    if(nextProps.initContent !== this.props.initContent){
      this.setState({ editorContent:nextProps.initContent });
      this.editor.txt.html(nextProps.initContent);
    }
  }
  render() {
    const {width, height, editable} = this.props;
    
    const style = {
      width:width+'%',
      height:height?height:'auto',
    };
    const className = classnames('feu-editor',{
      ['feu-editor-disabled']:!editable,
    });
    return (
      <div className={className} style={style}>
        <div ref="editorElem" style={{textAlign: 'left'}}/>
      </div>
    );
  }
}

Editor.defaultProps={
  editable:true,
  initContent:'',
};
Editor.PropTypes={
  editable:PropTypes.bool,
  initContent:PropTypes.node,
  width:PropTypes.number,
  height:PropTypes.number,
};
