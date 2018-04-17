import React, { Component } from 'react';
import {
  Switch as YSwitch,
} from 'yrui';

export default class Switch extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      value: props.isOn,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOn!==this.props.isOn){
      this.setState({
        value:nextProps.isOn,
      });
    }
  }
  
  handleChange=(e)=>{
    this.setState({
      value:e,
    });
  }
  render() {
    const {textType, onText, offText, disabled} = this.props;
    const value=this.state.value;
    return (
      <YSwitch 
        onText={textType==='icon'?<i className={`fa fa-${onText}`} />:onText} 
        offText={textType==='icon'?<i className={`fa fa-${offText}`} />:offText}
        value={value}
        change={this.handleChange}
        disabled={disabled}/>
    );
  }
}
