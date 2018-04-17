import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Progress as AntProgress, Button} from 'antd';
const ButtonGroup = Button.Group;
import './index.less';

export default class Progress extends Component {
  state = {
    percent: this.props.percent,
    controlStep: this.props.controlStep,
  }
  componentWillReceiveProps = (nextProps) => {
    if(nextProps.percent !== this.props.percent){
      this.setState({ percent:nextProps.percent });
    }
    if(nextProps.controlStep !== this.props.controlStep){
      this.setState({ controlStep:nextProps.controlStep });
    }
  }
  
  increase = () => {
    let percent = Number(this.state.percent) + Number(this.props.controlStep);
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  }
  decline = () => {
    let percent = Number(this.state.percent) - Number(this.props.controlStep);
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  }
  render() {
    const {title, titleSize, titlePosition, type , status, showInfo, strokeWidth, width, gapDegree, gapPosition} = this.props;
    const domTitle = <p style={{fontSize:titleSize+'px'}} className="feu-progress-title">{title}</p>;
    return (
      <div className="feu-progress">
        {titlePosition==='top'&&domTitle}
        <AntProgress type={type} status={status} showInfo={showInfo} strokeWidth={strokeWidth} width={width} gapDegree={gapDegree} gapPosition={gapPosition} percent={this.state.percent} />
        {this.props.control && <ButtonGroup style={{marginLeft:'10px'}}>
          <Button onClick={this.decline} icon="minus" />
          <Button onClick={this.increase} icon="plus" />
        </ButtonGroup>}
        {titlePosition==='bottom'&&domTitle}
      </div>
    );
  }
}
Progress.defaultProps={
  percent:10,
  controlStep:10,
};
Progress.propTypes = {
  percent:PropTypes.number,
  controlStep:PropTypes.number,
};
