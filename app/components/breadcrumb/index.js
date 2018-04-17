import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.less';

export default class Breadcrumb extends Component {
  render() {
    const {prefixCls, data, separator} = this.props;
    return (
      <div className={prefixCls}>
        {
          data.map( (v,k)=><span key={k}>
            {
              v.href?<span>
                <a href={v.href} target="_blank" className={`${prefixCls}-link`}>
                  {v.img && <img src={v.img} alt={v.text}/>}
                  {!v.img &&v.icon && <i className={`fa fa-${v.icon}`}/>}
                  {v.text}
                </a>
              </span>
              :
              <span className={`${prefixCls}-nolink`}>
                {v.img && <img src={v.img} alt={v.text}/>}
                {!v.img &&v.icon && <i className={`fa fa-${v.icon}`}/>}
                {v.text}
              </span>
            }
            <span className={`${prefixCls}-separator`}>{separator}</span>
            </span>)
        }
      </div>
    );
  }
}
Breadcrumb.defaultProps = {
  prefixCls: 'feu-breadcrumb',
  separator:'/',
};

Breadcrumb.propTypes = {
  prefixCls: PropTypes.string,
  separator: PropTypes.string,
};

