import React, { Component } from 'react';
import { Dropdown,Menu, Icon, Button } from 'antd';
import './dropdown.less';
import {
  observer,
} from 'mobx-react';
@observer
class ADropdown extends Component {

  render() {
    /**
     * 触发方式,菜单弹出位置
     */
    const { text,trigger, placement, menulist, type } = this.props;
    /* const kmenu = menulist.map((s, v) => {
      return <li key={v} onClick={() =>  window.open(s.url,s.newwindow ?'_blank':'_self')}>
        {(s.icon) && <span><i className={'fa fa-' + s.icon} /></span>} 
        <span>{s.title}</span>
      </li>;
    }); */
    const menu = (
      <Menu className="feu-dropdown-menu">
      {
        menulist.map((s, v) => {
          return <Menu.Item key={v}><span key={v} onClick={() =>  window.open(s.url,s.newwindow ?'_blank':'_self')}>
          {(s.icon) && <span style={{marginRight:5}}><i className={'fa fa-' + s.icon} /></span>} 
          <span>{s.title}</span>
        </span></Menu.Item>;
        })
      }
      </Menu>
    );
    return (
      <div>
        <Dropdown key={'1'} overlay={menu} trigger={[trigger]} placement={placement} 
          getPopupContainer={() => document.getElementById('exportcanvas')}>
          {(type==='text')?<a style={{ color: '#000',margin:'10px 0px',padding:'0px 10px',display:'inline-block' }} href="#">
            {text||'Click me'} <Icon type="down" />
          </a>:<Button style={{ margin:'10px 0px' }}>
           {text||'Click me'} <Icon type="down" />
          </Button>
          }
        </Dropdown>
      </div>
    );
  }
}

export default ADropdown;

ADropdown.defaultProps = {
  trigger: 'click',
  type:'text',//'button’
  placement: 'bottomLeft',
  menulist: [{ title: '菜单一', icon: 'ra', url: 'https://www.baidu.com', newwindow: true }, { title: '菜单一', icon: 'ra', url: 'xxx' }, { title: '菜单一', icon: 'ra', url: 'xxx' }, { title: '菜单一', icon: 'ra', url: 'xxx' }],
};
