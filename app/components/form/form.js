import React, { Component } from 'react';
import FormItem from './formitem';
import { tools } from 'yrui';
import { Input, Button, Select, Radio, Checkbox } from 'antd';
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const Option = Select.Option;
const { TextArea } = Input;
import {DatePicker, AreaPicker} from '../index';
import './form.less';
const $emitter = tools.$emitter;
import {observer} from 'mobx-react';
import moment from 'moment';
const dateFormat = 'YYYY/MM/DD', monthFormat = 'YYYY/MM', timeFormat = 'YYYY-MM-DD HH:mm:ss';
let STRING_TO_CLASS;

@observer
export default class Form extends Component {
  state = {
  }
  renderFormItem() {//生成FormItem
    let _dc = this.props.sonData;
    return _dc.map((v, k) => {
      const { label } = v.props, pId = k, vComps = v.comps;
      let layout = label ? formItemLayout : formItemLayout2;//label是否为空决定布局
      return (label || vComps.length>0) ? <FormItem props={v.props} {...v.props} pId={k}{...this.props.data} sonData={this.props.sonData} {...layout} key={pId} compId={this.props.compId} editable={this.props.editable}>
        {
          vComps.map((comp, index) => {
            // console.log('mapComp: ', comp);
            return this.renderItemComp(comp, pId, index);})
        }
      </FormItem> : null;
    }
    );
  }
  renderItemComp(comp, pId, index) {//生成FormItem的右边部分
    let tag = comp.compType.toLowerCase();
    let classType = this.stringToClassType(tag);
    if (classType) {
      let props = JSON.parse(JSON.stringify(comp));
      //转化 或 去除不必要的props参数（这些参数被转化为children或者是compType）
      props = this.purifyProps(tag, props, comp);
      let divProps = {
        style:comp.width?{
          width:comp.width+'px',
        }:{},
        key:pId + index,
      };
      if(this.props.editable){
        divProps.className = 'formitem-compitem formitem-clicked';
        divProps.onClick = this.compClickHandler.bind(this, comp, pId, index);//给formConfig传递配置需要的参数
        props.onChange = this.changeValue.bind(this, comp);//保存表单组件的编辑值
      }else{
        divProps.className = 'formitem-compitem';
      }
      
      if(comp.compType==='INPUT' && comp.type==='TextArea'){
        divProps.className += divProps.className+' textarea-item';
        return React.createElement('div',divProps, <TextArea rows={4} {...props}/>); 
      }else{
        return React.createElement('div',divProps, React.createElement(classType, props));
      }
    }
    return null;
  }
  purifyProps(tag, props) {
    let format = '', tempDefaultValue = '';
    switch (tag) {
    case 'select':
      props.children = props.options.map(v => <Option value={v.value} key={v.value}>{v.value}</Option>);
      delete props.options;
      break;
    case 'button':
      delete props.defaultValue;
      break;
    case 'datepicker':
    //处理时间选择器的格式
      format = props.type==='month'?monthFormat:(props.showTime?timeFormat:dateFormat);
      tempDefaultValue = props.defaultValue;
      if(props.isRange && tempDefaultValue instanceof Array && tempDefaultValue[0]){
        props.defaultValue = [ moment(tempDefaultValue[0], format), moment(tempDefaultValue[1], format) ];
      }else  if(!props.isRange && typeof(tempDefaultValue)==='string' && tempDefaultValue){
        props.defaultValue = moment(tempDefaultValue, format);
      }else{
        delete props.defaultValue;
      }
      break;
    default:
      break;
    }

    delete props.compType;
    delete props.code;
    return props;
  }
  compClickHandler = (comp, pId, index) => {//将被点击的组件数据 以其父级id 传给外部
    $emitter.dispatch('configItem', {
      comp,
      pId,
      index,
      sonData:this.props.sonData,
      formId:this.props.compId,
      itemName:'formItem',
    });
  }
  changeValue(_comp, e, dataString){
    if(_comp.compType === 'DatePicker'){
      _comp.defaultValue = dataString;
    }else if(e.target){
      _comp.defaultValue = e.target.value;
    }else{
      _comp.defaultValue = e;
    }
    // input e.target.value
    // radioGroup e.target.value
    // checkboxGroup e.target.value √
    // select e √
    // datePicker e  √ 
    // areaPicker e √
  }
  stringToClassType(str) {
    if (STRING_TO_CLASS == null) {
      STRING_TO_CLASS = new Object();
      STRING_TO_CLASS['input'] = Input;
      STRING_TO_CLASS['radiogroup'] = RadioGroup;
      STRING_TO_CLASS['checkboxgroup'] = CheckboxGroup;
      STRING_TO_CLASS['select'] = Select;
      STRING_TO_CLASS['button'] = Button;
      STRING_TO_CLASS['areapicker'] = AreaPicker;
      STRING_TO_CLASS['datepicker'] = DatePicker;
    }
    return STRING_TO_CLASS[str];
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className={`feu-form feu-${this.props.data.size}-form`}>
        {this.renderFormItem()}
      </form>
    );
  }
}
const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const formItemLayout2 = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
