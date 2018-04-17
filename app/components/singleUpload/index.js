/**
 * author : 郑素素
 * 该upload仅能上传一张图片，提供删除重传，图片的大小是100kb以下，图片的类型可以是png、jpg、jpeg、ico
 * return 图片的data64流
 * 注：不需要上传图片到服务器
 */

import React from 'react';
import { Upload, Icon, message } from 'antd';
import './index.less';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default class SingleUpload extends React.Component {
  state = {
    imageUrl: this.props.imageUrl,
  };
  componentWillReceiveProps = (nextProps) => {
    if (nextProps.imageUrl !== this.props.imageUrl) {
      this.setState({ imageUrl: nextProps.imageUrl });
    }
  }
  beforeUpload = (file) => {
    const type = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/x-icon'];
    let isPic = (file.type === type[0] || file.type === type[1] || file.type === type[2] || file.type === type[3] || file.type === type[4])?true:false;
    message.config({
      top: 70,
    });
    if (!isPic) {
      message.error('请上传图片!');
    }
    const isLt100k = file.size / 1024 < 100;
    if (!isLt100k) {
      message.error('图片大小应小于100kb!');
    }
    if (isPic && isLt100k) {
      getBase64(file, imageUrl => {
        this.setState({ imageUrl });
        this.props.onChange && this.props.onChange(imageUrl);
      }
      );
    }
    return false;
  }
  onRemove = (e) => {
    e.stopPropagation();
    this.setState({ imageUrl: '' });
    this.props.onChange && this.props.onChange('');
  }
  render() {
    const imageUrl = this.state.imageUrl;
    return (
      <div className="feu-upload">
        <Upload
          className="feu-avatar-uploader"
          name="avatar"
          showUploadList={false}
          beforeUpload={this.beforeUpload}
        >
          {
            imageUrl ?
              <div className="feu-avatar-wrapper">
                <img src={imageUrl} alt="" className="feu-avatar" />
                <i className="fa fa-remove remove-ico" onClick={this.onRemove} />
              </div> :
              <Icon type="plus" className="feu-avatar-uploader-trigger" />
          }
        </Upload>

      </div>
    );
  }
}