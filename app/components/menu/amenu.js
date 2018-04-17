import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu} from 'antd';
const SubMenu = Menu.SubMenu;
import './amenu.less';

export default class AMenu extends Component {
  constructor(props) {
    super(props);
  }
  /**
   * 当前被点击按钮
   */
  handleClick = (e) => {
    console.log('click ', e);
  }
  render() {
    const { menu, mode, theme } = this.props;
    const loop = (data) => data.map((item, index) => {
      if (item.children&&item.children.length>0) {
        return <SubMenu key={item.key} title={[item.img?<img src={item.img} key="img"/>:<span key="icon"><i className={'fa fa-' + item.icon} /></span>,<span key="title">{item.title}</span>]}>
          {loop(item.children)}
        </SubMenu>;
      }
      return <Menu.Item key={item.key}>
        {item.img?<img src={item.img}/>:<span key="icon"><i className={'fa fa-' + item.icon} /></span>}
        <span>{item.title}</span>
      </Menu.Item>;
    });

    // console.log('_____',loop(menu));
    return (
      <Menu className="amenu"
        onClick={this.handleClick}
        style={{
          maxWidth: (mode==='horizontal')?'100%':'280px',
          width:'100%',
        }}
        theme={theme || 'light'}
        mode={mode || 'inline'}
      >
        {loop(menu)}
      </Menu>);
  }
}
AMenu.PropTypes = {
  menu: PropTypes.array.isRequired,
};
AMenu.defaultProps = {
  menu: [{
    key: 'sub1',
    title: '标题一',
    icon: 'list',
    children: [{
      key: 'sub11',
      title: '标题11',
      icon: '',
      url: '1',
    }, {
      key: 'sub12',
      title: '标题12 ',
      icon: '',
      url: '2',
      children: [{
        key: 'sub121',
        title: '标题121',
        url: '123',
        icon: '',
      }],
    }],
  }, {
    key: 'sub2',
    title: '标题二',
    icon: 'book',
    url: '3',
    children:[{
      key: 'sub21',
      title: '标题21',
      url: '123',
      icon: '',
    },{ 
      key: 'sub22',
      title: '标题22',
      url: '123',
      icon: '',
    }],
  },{
    key: 'sub3',
    title: '标题三',
    icon: 'book',
    url: '3',
  }],
};