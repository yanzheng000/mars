import React, { Component } from 'react';
import { DatePicker as ADatePicker } from 'antd';
const { MonthPicker, RangePicker } = ADatePicker;
import PropTypes from 'prop-types';

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const timeFormat = 'YYYY-MM-DD HH:mm:ss';

export default class DatePicker extends Component {
  render() {
    const {type, isRange, showTime} = this.props;
    return (
      <div>
        {
          isRange?
          <RangePicker {...this.props} showTime={showTime} format={type==='date'? showTime ? timeFormat : dateFormat:monthFormat}/>
          :
          type==='date'?
          <ADatePicker {...this.props} showTime={showTime} format={showTime?timeFormat:dateFormat}/>
          :
          <MonthPicker {...this.props}/>
        }
        
      </div>
    );
  }
}

DatePicker.defaultProps = {
  type:'date',
  isRange:false,
  size: 'default',
  disabled: false,
  showTime:false,
};
DatePicker.propTypes = {
  type: PropTypes.oneOf(['date', 'month']),
  isRange: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'large', 'small']),
  disabled: PropTypes.bool,
  showTime:PropTypes.bool,
};