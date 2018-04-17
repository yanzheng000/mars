import React, { Component } from 'react';
import { Modal} from 'antd';
import {Button} from 'yrui';

import './modal.less';
class CModal extends Component {
  state = { visible: false};
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { title, width, text, icon, color, size, children } = this.props;
    const btnconf = { text, icon, color, size };
    return (
      <div className="amodal">
        <Button click={this.showModal} {...btnconf} />
        <Modal
          width={width+'px'}
          title={title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          maskClosable={false}
          getContainer={() => document.getElementById('modal-box')}
        >
          <div style={{minHeight:400}}>
            {children}
          </div>
        </Modal>
      </div>
    );
  }
}

export default CModal;
