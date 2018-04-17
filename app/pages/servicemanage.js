import React, { Component } from 'react';
    
//声明要引入的组件
import { Form,Input,Select,Button } from 'antd';
import { Row,Col } from 'yrui';
import { ButtonGroup,Atable } from '../components';
const FormItem = Form.Item;
const SelectOption = Select.Option;


//index指当前页面名称
class Index extends Component {
    constructor () {
      super();
      
    }
    render(){
      return <div style={{"padding":"10px 10px","margin":"10px 0px"}}>
        <Row>
              <Col span={6}>
                <Form className="feu-default-form">
                  <FormItem label="服务编号" required={false} labelCol={labelCol_4} wrapperCol={wrapperCol_5}>
                    <div className="formitem-compitem" style={style_7}>
                      <Input width={200} placeholder="" type="text"/>
                  </div>
                  </FormItem>
                      <FormItem label="所属行业" required={false} labelCol={labelCol_13} wrapperCol={wrapperCol_14}>
                        <div className="formitem-compitem" style={style_16}>
                          <Select options={options_17} width={200}>
                            <SelectOption value="选项1">选项1</SelectOption>
                            <SelectOption value="选项2">选项2</SelectOption>
                            <SelectOption value="选项3">选项3</SelectOption>
                          </Select>
                        </div>
                      </FormItem>
                            <FormItem label="状态" required={false} labelCol={labelCol_24} wrapperCol={wrapperCol_25}>
                              <div className="formitem-compitem" style={style_27}>
                                <Select options={options_28} width={200}>
                                  <SelectOption value="选项1">选项1</SelectOption>
                                  <SelectOption value="选项2">选项2</SelectOption>
                                  <SelectOption value="选项3">选项3</SelectOption>
                                </Select>
                              </div>
                            </FormItem>
                </Form>
              </Col>
                                  <Col span={6}>
                                    <Form className="feu-default-form">
                                      <FormItem label="服务名称" required={false} labelCol={labelCol_36} wrapperCol={wrapperCol_37}>
                                        <div className="formitem-compitem" style={style_39}>
                                          <Input width={200} placeholder="" type="text"/>
                                      </div>
                                      </FormItem>
                                          <FormItem label="创建类型" required={false} labelCol={labelCol_45} wrapperCol={wrapperCol_46}>
                                            <div className="formitem-compitem" style={style_48}>
                                              <Select options={options_49} width={200}>
                                                <SelectOption value="选项1">选项1</SelectOption>
                                                <SelectOption value="选项2">选项2</SelectOption>
                                                <SelectOption value="选项3">选项3</SelectOption>
                                              </Select>
                                            </div>
                                          </FormItem>
                                                <FormItem label="" required={true} wrapperCol={wrapperCol_56}>
                                                  <div className="formitem-compitem" style={style_58}>
                                                    <Button children="查询" type="primary"/>
                                                </div>
                                                    <div className="formitem-compitem" style={style_62}>
                                                      <Button children="重置" type=""/>
                                                  </div>
                                                </FormItem>
                                    </Form>
                                  </Col>
            </Row>
                                                      <Row>
                                                        <Col span={12}>
                                                          <ButtonGroup size="md" data={data_66}/>
                                                        <Atable hasOper={true} pagination={true} size="default" columns={columns_70} hasSelect={false} bordered={true} align="center" operation={operation_74} dataSource={dataSource_75}/>
                                                      </Col>
                                                      </Row>
          
      </div>
    }
}

const labelCol_4 = {"span":8};
const wrapperCol_5 = {"span":16};
const style_7 = {"width":200};
const labelCol_13 = {"span":8};
const wrapperCol_14 = {"span":16};
const style_16 = {"width":200};
const options_17 = [{"value":"选项1"},{"value":"选项2"},{"value":"选项3"}];
const labelCol_24 = {"span":8};
const wrapperCol_25 = {"span":16};
const style_27 = {"width":200};
const options_28 = [{"value":"选项1"},{"value":"选项2"},{"value":"选项3"}];
const labelCol_36 = {"span":8};
const wrapperCol_37 = {"span":16};
const style_39 = {"width":200};
const labelCol_45 = {"span":8};
const wrapperCol_46 = {"span":16};
const style_48 = {"width":200};
const options_49 = [{"value":"选项1"},{"value":"选项2"},{"value":"选项3"}];
const wrapperCol_56 = {"offset":8,"span":16};
const style_58 = {};
const style_62 = {};
const data_66 = [{"id":"backbtn","text":"创建私有服务","icon":"plus","outline":false,"color":"info"},{"id":"savebtn","text":"创建公有服务副本","icon":"file","outline":false,"color":"success"}];
const columns_70 = [{"dataIndex":"name","title":"序号"},{"dataIndex":"age","title":"服务编号"},{"dataIndex":"address","title":"服务名称"},{"title":"创建类型","dataIndex":"d33a3e8b-9345-4e31-bae7-e3c2452807d2"},{"title":"所属行业","dataIndex":"cc00d619-d796-4db0-9923-35550270a6f9"},{"dataIndex":"5cdf9f2d-5f31-4c5e-82ec-d032c4956932","title":"端口"},{"title":"版本号","dataIndex":"30c30431-e8bf-4505-b813-a1f370c29a6a"},{"dataIndex":"b65fdf2f-3f50-42b4-a56c-ad6f35020404","title":"状态"},{"dataIndex":"5a4114e0-fe52-41c3-964d-f94fb65fd0df","title":"创建时间"},{"dataIndex":"008f68fa-4305-4836-b34a-da723765231b","title":"最后更新时间"}];
const operation_74 = {"margin":"ms","size":"md","data":[{"outline":true,"color":"info","icon":"","id":"54e0d2bf-3e82-4435-a02e-fbc15099c4b4","text":"编辑"},{"id":"9a28bb1b-65bb-43e2-a89a-239f6ef01ded","text":"停止","icon":"","color":"danger","outline":true},{"id":"ea29a07a-f0c5-4916-9fda-3db06727da55","text":"查看实例","icon":"","color":"info","outline":false},{"id":"5210d07a-a267-4486-b784-3592a10dfc0a","text":"查看配置","icon":"","color":"success","outline":false},{"id":"7e34557c-688d-43ee-a65c-e972453a69ef","text":"接口管理","icon":"","color":"warning","outline":false}]};
const dataSource_75 = [{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"已启动","527deb8c-35a3-400b-9279-c9374c05a12f":"公有","address":"lookup","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"20%","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"01","6316d63e-5188-48cf-8029-8e182fd166e9":"10.110.200.26","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"10%","key":"1","age":"7672bed4","008f68fa-4305-4836-b34a-da723765231b":"2018-01-18 13:00:00","5cdf9f2d-5f31-4c5e-82ec-d032c4956932":"4646","30c30431-e8bf-4505-b813-a1f370c29a6a":"2.3.1","d33a3e8b-9345-4e31-bae7-e3c2452807d2":"私有服务","cc00d619-d796-4db0-9923-35550270a6f9":"医疗"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"已启动","527deb8c-35a3-400b-9279-c9374c05a12f":"私有","address":"security","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"20%","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"02","6316d63e-5188-48cf-8029-8e182fd166e9":"10.110.200.27","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"10%","key":"2","age":"7672bed5","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","5cdf9f2d-5f31-4c5e-82ec-d032c4956932":"4646","30c30431-e8bf-4505-b813-a1f370c29a6a":"3.4.2","d33a3e8b-9345-4e31-bae7-e3c2452807d2":"私有服务","cc00d619-d796-4db0-9923-35550270a6f9":"医疗"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"已启动","527deb8c-35a3-400b-9279-c9374c05a12f":"公有","address":"mars","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"20%","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"03","6316d63e-5188-48cf-8029-8e182fd166e9":"10.110.200.27","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"10%","key":"15790206-73ee-4d13-a179-afc5b67e0a88","age":"7672bed6","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","5cdf9f2d-5f31-4c5e-82ec-d032c4956932":"4646","30c30431-e8bf-4505-b813-a1f370c29a6a":"1.2.3","d33a3e8b-9345-4e31-bae7-e3c2452807d2":"公有服务副本","cc00d619-d796-4db0-9923-35550270a6f9":"政府"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"已停止","527deb8c-35a3-400b-9279-c9374c05a12f":"私有","address":"lookup","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"--","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"04","6316d63e-5188-48cf-8029-8e182fd166e9":"10.110.200.28","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"--","key":"b9d44787-f0cc-4567-a092-fb910d42218c","age":"7672bed7","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","5cdf9f2d-5f31-4c5e-82ec-d032c4956932":"4646","30c30431-e8bf-4505-b813-a1f370c29a6a":"2.3.1","d33a3e8b-9345-4e31-bae7-e3c2452807d2":"公有服务副本","cc00d619-d796-4db0-9923-35550270a6f9":"政府"}];

export default Index;