import React, { Component } from 'react';
import { tools } from 'yrui';
import {Row, Col} from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
const $emitter = tools.$emitter;
export default class FormItem extends Component {
  state = {
  }
  static defaultProps = {
    prefixCls: 'feu-form',
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    labelCol: PropTypes.object,
    wrapperCol: PropTypes.object,
    className: PropTypes.string,
    id: PropTypes.string,
    children: PropTypes.node,
  };
  labelClickHandler = (pId, value) => {
    if(!this.props.editable){
      return;
    }
    
    const comp= this.props.props;
    const data = {
      comp,
      pId,
      index: null,
      sonData:this.props.sonData,
      formId:this.props.compId,
      itemName:'formItem',
    };
    $emitter.dispatch('configItem', data);
  }
  renderLabel() {
    const { prefixCls, label, labelCol, pId, required, editable } = this.props;
    const labelColClassName = classNames({
      [`${prefixCls}-item-label`]:true,
      ['formitem-clicked']: editable,
    });
    const labelClassName = classNames({
      [`${prefixCls}-item-required`]: required,
    });
    let labelChildren = label;
    if (typeof label === 'string' && label.trim() !== '') {
      labelChildren = label.replace(/[：|:]\s*$/, '');//将label中的：或者:替换成''
    }
    return label ? (
      <Col {...labelCol} key="label">
        <div className={labelColClassName} onClick={this.labelClickHandler.bind(this, pId, labelChildren)}>
          <label
            htmlFor={`names-${pId}`}
            className={labelClassName}
            title={typeof label === 'string' ? label : ''}
          >
            {labelChildren}
          </label>
        </div>
      </Col>
    ) : null;
  }
  renderWrapper(children) {
    const { prefixCls, wrapperCol } = this.props;
    const className = classNames(
      `${prefixCls}-item-control-wrapper`,
      wrapperCol && wrapperCol.className,
    );
    return (
      <Col {...wrapperCol} key="wrapper">
        <div className={className}>
          <div className={`${prefixCls}-item-control`}>
            {children}
          </div>
        </div>
      </Col>
    );
  }
  getRender = () => {
    return [this.renderLabel(),
      this.renderWrapper(
        this.props.children,
      )];
  }
  render() {
    const props = this.props;
    const { prefixCls, className, style } = props;
    let itemClassName = {
      [`${prefixCls}-item`]: true,
      ['antd-form-item']: true,
      [`${className}`]: !!className,
    };
    // const children = React.Children.map(props.children, function (child) {
    //   if (child && typeof child.type === 'function' && !child.props.size) {
    //     return React.cloneElement(child);//可以给子元素添加新属性
    //   }
    // });

    return (
      <Row className={classNames(itemClassName)} style={style}>
        {
          this.getRender()
        }
      </Row>
    );
  }
}