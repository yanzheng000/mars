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
                  <FormItem label="集群名称" required={false} labelCol={labelCol_4219} wrapperCol={wrapperCol_4220}>
                    <Input width={200} placeholder="" type="text"/>
                </FormItem>
                    <FormItem label="项目ID" required={false} labelCol={labelCol_4226} wrapperCol={wrapperCol_4227}>
                      <Select options={options_4228} width={200}>
                        <SelectOption value="平台组">平台组</SelectOption>
                        <SelectOption value="产品设计部">产品设计部</SelectOption>
                        <SelectOption value="应用开发部">应用开发部</SelectOption>
                      </Select>
                    </FormItem>
                </Form>
              </Col>
                        <Col span={6}>
                          <Form size="default">
                            <FormItem label="环境" required={false} labelCol={labelCol_4236} wrapperCol={wrapperCol_4237}>
                              <Select options={options_4238} width={200}>
                                <SelectOption value="选项1">选项1</SelectOption>
                                <SelectOption value="选项2">选项2</SelectOption>
                                <SelectOption value="选项3">选项3</SelectOption>
                              </Select>
                            </FormItem>
                                <FormItem label="" required={true} labelCol={labelCol_4245} wrapperCol={wrapperCol_4246}>
                                  <Button children="查询" type="primary"/>
                                <Button children="重置" type=""/>
                              </FormItem>
                          </Form>
                        </Col>
            </Row>
                                  <Row>
                                    <Col span={12}>
                                      <Ybutton outline={false} size="md" color="info" icon="plus" text="新增集群"/>
                                    <Atable hasOper={true} pagination={true} size="default" columns={columns_4259} hasSelect={false} bordered={true} align="center" operation={operation_4263} dataSource={dataSource_4264}/>
                                  </Col>
                                  </Row>
          
      </div>
    }
}

const labelCol_4219 = {"span":8};
const wrapperCol_4220 = {"span":8};
const labelCol_4226 = {"span":8};
const wrapperCol_4227 = {"span":8};
const options_4228 = [{"value":"平台组"},{"value":"产品设计部"},{"value":"应用开发部"}];
const labelCol_4236 = {"span":8};
const wrapperCol_4237 = {"span":8};
const options_4238 = [{"value":"选项1"},{"value":"选项2"},{"value":"选项3"}];
const labelCol_4245 = {"span":8};
const wrapperCol_4246 = {"span":8};
const columns_4259 = [{"dataIndex":"name","title":"序号"},{"dataIndex":"age","title":"集群名称"},{"dataIndex":"address","title":"环境"},{"dataIndex":"b65fdf2f-3f50-42b4-a56c-ad6f35020404","title":"项目ID"},{"dataIndex":"5a4114e0-fe52-41c3-964d-f94fb65fd0df","title":"创建时间"},{"dataIndex":"008f68fa-4305-4836-b34a-da723765231b","title":"最后更新时间"}];
const operation_4263 = {"margin":"ms","size":"md","data":[{"outline":true,"color":"info","icon":"","id":"backbtn","text":"编辑"}]};
const dataSource_4264 = [{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"SmartMS","address":"DEV","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"黄俊","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"01","key":"1","age":"default","008f68fa-4305-4836-b34a-da723765231b":"2018-01-18 13:00:00"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"MSI","address":"DEV","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"张东升","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"02","key":"2","age":"MESH","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"MSI","address":"DEV","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"张东升","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"03","key":"15790206-73ee-4d13-a179-afc5b67e0a88","age":"MESH","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"MSI","address":"FAT","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"游启江","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"04","key":"b9d44787-f0cc-4567-a092-fb910d42218c","age":"MESH","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"MSI","address":"FAT","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"姚雪春","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"05","key":"c4a6075c-b0f0-4e1f-b666-d7dbfb916233","age":"MESH","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00"}];

export default Index;