import React, { Component } from 'react';
    
//声明要引入的组件
import { Form,Input,Select,Button } from 'antd';
import { Row,Col } from 'yrui';
import { Atable } from '../components';
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
                <Form size="default">
                  <FormItem label="服务编号" required={false} labelCol={labelCol_4379} wrapperCol={wrapperCol_4380}>
                    <Input width={200} placeholder="" type="text"/>
                </FormItem>
                    <FormItem label="所属行业" required={false} labelCol={labelCol_4386} wrapperCol={wrapperCol_4387}>
                      <Select options={options_4388} width={200}>
                        <SelectOption value="选项1">选项1</SelectOption>
                        <SelectOption value="选项2">选项2</SelectOption>
                        <SelectOption value="选项3">选项3</SelectOption>
                      </Select>
                    </FormItem>
                </Form>
              </Col>
                        <Col span={6}>
                          <Form size="default">
                            <FormItem label="服务名称" required={false} labelCol={labelCol_4396} wrapperCol={wrapperCol_4397}>
                              <Input width={200} placeholder="" type="text"/>
                          </FormItem>
                              <FormItem label="状态" required={false} labelCol={labelCol_4403} wrapperCol={wrapperCol_4404}>
                                <Select options={options_4405} width={200}>
                                  <SelectOption value="选项1">选项1</SelectOption>
                                  <SelectOption value="选项2">选项2</SelectOption>
                                  <SelectOption value="选项3">选项3</SelectOption>
                                </Select>
                              </FormItem>
                                  <FormItem label="" required={true} labelCol={labelCol_4412} wrapperCol={wrapperCol_4413}>
                                    <Button children="查询" type="primary"/>
                                  <Button children="重置" type=""/>
                                </FormItem>
                          </Form>
                        </Col>
            </Row>
                                    <Row>
                                      <Col span={12}>
                                        <Atable hasOper={true} pagination={true} size="default" columns={columns_4421} hasSelect={false} bordered={true} align="center" operation={operation_4425} dataSource={dataSource_4426}/>
                                    </Col>
                                    </Row>
          
      </div>
    }
}

const labelCol_4379 = {"span":8};
const wrapperCol_4380 = {"span":8};
const labelCol_4386 = {"span":8};
const wrapperCol_4387 = {"span":8};
const options_4388 = [{"value":"选项1"},{"value":"选项2"},{"value":"选项3"}];
const labelCol_4396 = {"span":8};
const wrapperCol_4397 = {"span":8};
const labelCol_4403 = {"span":8};
const wrapperCol_4404 = {"span":8};
const options_4405 = [{"value":"选项1"},{"value":"选项2"},{"value":"选项3"}];
const labelCol_4412 = {"span":8};
const wrapperCol_4413 = {"span":8};
const columns_4421 = [{"dataIndex":"name","title":"序号"},{"dataIndex":"age","title":"服务编号"},{"dataIndex":"address","title":"服务名称"},{"title":"所属行业","dataIndex":"1dad5df0-f476-4e01-85ad-e0bd2f0ab3b7"},{"title":"端口","dataIndex":"5cdf9f2d-5f31-4c5e-82ec-d032c4956932"},{"title":"版本号","dataIndex":"6f3aa5d0-7944-47a4-9f30-c9541cb03947"},{"dataIndex":"b65fdf2f-3f50-42b4-a56c-ad6f35020404","title":"状态"},{"dataIndex":"5a4114e0-fe52-41c3-964d-f94fb65fd0df","title":"创建时间"},{"dataIndex":"008f68fa-4305-4836-b34a-da723765231b","title":"最后更新时间"}];
const operation_4425 = {"margin":"ms","size":"md","data":[{"outline":false,"color":"info","icon":"","id":"54e0d2bf-3e82-4435-a02e-fbc15099c4b4","text":"创建副本"}]};
const dataSource_4426 = [{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"已启动","527deb8c-35a3-400b-9279-c9374c05a12f":"公有","address":"lookup","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"20%","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"01","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"10%","key":"1","age":"7672bed4","008f68fa-4305-4836-b34a-da723765231b":"2018-01-18 13:00:00","6316d63e-5188-48cf-8029-8e182fd166e9":"10.110.200.26","5cdf9f2d-5f31-4c5e-82ec-d032c4956932":"4646","916c161b-e25f-4283-9e14-166a203af369":"---","0876358c-85f4-4039-9fec-f87a16b80b7d":"---","6f3aa5d0-7944-47a4-9f30-c9541cb03947":"2.0.3","1dad5df0-f476-4e01-85ad-e0bd2f0ab3b7":"医疗"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"已启动","527deb8c-35a3-400b-9279-c9374c05a12f":"公有","address":"security","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"20%","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"02","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"10%","key":"2","age":"7672bed5","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","6316d63e-5188-48cf-8029-8e182fd166e9":"10.110.200.27","5cdf9f2d-5f31-4c5e-82ec-d032c4956932":"4646","916c161b-e25f-4283-9e14-166a203af369":"---","0876358c-85f4-4039-9fec-f87a16b80b7d":"---","6f3aa5d0-7944-47a4-9f30-c9541cb03947":"2.0.5","1dad5df0-f476-4e01-85ad-e0bd2f0ab3b7":"医疗"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"已启动","527deb8c-35a3-400b-9279-c9374c05a12f":"公有","address":"mars","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"20%","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"03","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"10%","key":"15790206-73ee-4d13-a179-afc5b67e0a88","age":"7672bed6","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","6316d63e-5188-48cf-8029-8e182fd166e9":"10.110.200.27","5cdf9f2d-5f31-4c5e-82ec-d032c4956932":"4646","916c161b-e25f-4283-9e14-166a203af369":"---","0876358c-85f4-4039-9fec-f87a16b80b7d":"---","6f3aa5d0-7944-47a4-9f30-c9541cb03947":"2.1.3","1dad5df0-f476-4e01-85ad-e0bd2f0ab3b7":"政府"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"已停止","527deb8c-35a3-400b-9279-c9374c05a12f":"公有","address":"lookup","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"--","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"04","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"--","key":"b9d44787-f0cc-4567-a092-fb910d42218c","age":"7672bed7","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","6316d63e-5188-48cf-8029-8e182fd166e9":"10.110.200.28","5cdf9f2d-5f31-4c5e-82ec-d032c4956932":"4646","916c161b-e25f-4283-9e14-166a203af369":"---","0876358c-85f4-4039-9fec-f87a16b80b7d":"---","6f3aa5d0-7944-47a4-9f30-c9541cb03947":"2.0.6","1dad5df0-f476-4e01-85ad-e0bd2f0ab3b7":"政府"}];

export default Index;