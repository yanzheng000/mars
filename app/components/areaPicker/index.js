import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Cascader as ACascader, Select} from 'antd';
import {china, world} from './area';
const Option = Select.Option;

export default class AreaPicker extends Component {
  loop(_data){
    return _data.map( (v,k)=>{
      if(v.sub && v.sub.length>0){
        return {
          value: v.name,
          label: v.name,
          children: this.loop(v.sub),
        };
      }else{
        return {
          value: v.name,
          label: v.name,
        };
      }  
    });
  }
  getSelect(_data){
    return _data.map(v=><Option value={v} key={v}>{v}</Option>);
  }
  render() {
    const {type} = this.props;
    return (
      <div>
        {type==='china'?
          <ACascader {...this.props} options={this.loop(china)} placeholder="请选择"/>
          :
          <Select {...this.props} style={{ width: 120 }} showSearch>
            {world.map(v=><Option value={v} key={v}>{v}</Option>)}
          </Select>
        }
        </div>
    );
  }
}

AreaPicker.defaultProps = {
  type:'china',
  size: 'default',
  disabled: false,
};
AreaPicker.propTypes = {
  type: PropTypes.oneOf(['china', 'world']),
  size: PropTypes.oneOf(['default', 'large', 'small']),
  disabled: PropTypes.bool,
};