import React, { Component } from 'react';
    
//声明要引入的组件
import { Form,Input,Select,Button } from 'antd';
import { Row,Col,Button as Ybutton } from 'yrui';
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
                  <FormItem label="应用编号" required={false} labelCol={labelCol_4086} wrapperCol={wrapperCol_4087}>
                    <Input placeholder="" type="text" width={200}/>
                </FormItem>
                    <FormItem label="部门" required={false} labelCol={labelCol_4093} wrapperCol={wrapperCol_4094}>
                      <Select options={options_4095} width={200}>
                        <SelectOption value="平台组">平台组</SelectOption>
                        <SelectOption value="产品设计部">产品设计部</SelectOption>
                        <SelectOption value="应用开发部">应用开发部</SelectOption>
                      </Select>
                    </FormItem>
                </Form>
              </Col>
                        <Col span={6}>
                          <Form size="default">
                            <FormItem label="应用名称" required={false} labelCol={labelCol_4103} wrapperCol={wrapperCol_4104}>
                              <Input placeholder="" type="text" width={200}/>
                          </FormItem>
                              <FormItem label="" required={true} labelCol={labelCol_4110} wrapperCol={wrapperCol_4111}>
                                <Button type="primary" children="查询"/>
                              <Button type="" children="重置"/>
                            </FormItem>
                          </Form>
                        </Col>
            </Row>
                                <Row>
                                  <Col span={12}>
                                    <Ybutton text="创建应用" icon="plus" outline={false} size="md" color="info"/>
                                  <Atable size="default" bordered={true} align="center" pagination={true} hasSelect={false} hasOper={true} operation={operation_4127} columns={columns_4128} dataSource={dataSource_4129}/>
                                </Col>
                                </Row>
          
      </div>
    }
}

const labelCol_4086 = {"span":8};
const wrapperCol_4087 = {"span":8};
const labelCol_4093 = {"span":8};
const wrapperCol_4094 = {"span":8};
const options_4095 = [{"value":"平台组"},{"value":"产品设计部"},{"value":"应用开发部"}];
const labelCol_4103 = {"span":8};
const wrapperCol_4104 = {"span":8};
const labelCol_4110 = {"span":8};
const wrapperCol_4111 = {"span":8};
const operation_4127 = {"margin":"ms","size":"md","data":[{"id":"backbtn","text":"编辑","icon":"","outline":true,"color":"info"},{"id":"7aaac450-cd26-47f7-a2c3-24d4f12e85a9","text":"节点管理","icon":"","color":"info","outline":false},{"id":"1abaf49d-4a8f-4717-9bb9-65dfae472386","text":"服务管理","icon":"","color":"success","outline":false},{"id":"b0d35ee8-d288-40e0-ab44-f6acb1973cfe","text":"接口管理","icon":"","color":"warning","outline":false}]};
const columns_4128 = [{"title":"序号","dataIndex":"name"},{"title":"应用编号","dataIndex":"address"},{"title":"应用名称","dataIndex":"age"},{"title":"部门","dataIndex":"b65fdf2f-3f50-42b4-a56c-ad6f35020404"},{"title":"应用负责人","dataIndex":"bb14a5c3-96aa-4b97-8122-f3a12e843d56"},{"title":"创建时间","dataIndex":"5a4114e0-fe52-41c3-964d-f94fb65fd0df"},{"title":"最后更新时间","dataIndex":"008f68fa-4305-4836-b34a-da723765231b"}];
const dataSource_4129 = [{"key":"1","name":"01","age":"微服务平台","address":"SmartMS","b65fdf2f-3f50-42b4-a56c-ad6f35020404":"平台组","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"黄俊","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","008f68fa-4305-4836-b34a-da723765231b":"2018-01-18 13:00:00"},{"key":"2","name":"02","age":"微服务商城","address":"MSI","b65fdf2f-3f50-42b4-a56c-ad6f35020404":"平台组","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"张东升","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00"},{"key":"15790206-73ee-4d13-a179-afc5b67e0a88","name":"03","age":"微服务商城","address":"MSI","b65fdf2f-3f50-42b4-a56c-ad6f35020404":"平台组","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"张东升","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00"},{"key":"b9d44787-f0cc-4567-a092-fb910d42218c","name":"04","age":"微服务商城","address":"MSI","b65fdf2f-3f50-42b4-a56c-ad6f35020404":"产品设计部","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"游启江","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00"},{"key":"c4a6075c-b0f0-4e1f-b666-d7dbfb916233","name":"05","age":"微服务商城","address":"MSI","b65fdf2f-3f50-42b4-a56c-ad6f35020404":"产品设计部","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"姚雪春","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00"}];

export default Index;