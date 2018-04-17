import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './buttonGroup.less';
import {Button } from 'yrui';

class ButtonGroup extends Component {
  render() {
    const data=this.props.data.slice()||[];
    return (
      <div className="button-group">
        {data.map((s,j)=>{
          return <Button key={'btn'+j} {...s} margin={this.props.margin||''} size={this.props.size||''}/>;
        })}
      </div>
    );
  }
}
ButtonGroup.defaultProps={
  data:[{
    id: 'backbtn',
    text: '返回1',
    icon: 'edit',
    size: 'default',
    color: 'default',
  }, {
    id: 'savebtn',
    text: '保存1',
    icon: 'edit',
    size: 'default',
    color: 'success',
  }],
};
ButtonGroup.propTypes={
  data:PropTypes.array.isRequired,
};
export default ButtonGroup;