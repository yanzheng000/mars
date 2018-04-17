import React, { Component } from 'react';

export default class DangerousHtml extends Component {
  state={
    content:this.props.initContent,
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.initContent !== this.props.initContent){
      this.setState({ content:nextProps.initContent });
    }
  }
  render() {
    return (
      <div
          dangerouslySetInnerHTML={{
            __html: this.state.content,
          }}/>
    );
  }
}
