import React, { Component } from 'react';
import FeuCarousel from './index';
import {
  observer,
} from 'mobx-react';
@observer
export default class CslWrapper extends Component {
  render() {
    return (
      <FeuCarousel {...this.props}>
        {
          this.props.imgs.map( (v,k)=>
          <div key={k}>
            <img src={v} alt={v}/>
          </div>)
        }
      </FeuCarousel>
    );
  }
}
