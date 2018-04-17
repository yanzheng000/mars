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
                <Form className="feu-default-form">
                  <FormItem label="集群名称" required={false} labelCol={labelCol_4} wrapperCol={wrapperCol_5}>
                    <div className="formitem-compitem" style={style_7}>
                      <Input width={200} placeholder="" type="text"/>
                  </div>
                  </FormItem>
                      <FormItem label="项目ID" required={false} labelCol={labelCol_13} wrapperCol={wrapperCol_14}>
                        <div className="formitem-compitem" style={style_16}>
                          <Select options={options_17} width={200}>
                            <SelectOption value="平台组">平台组</SelectOption>
                            <SelectOption value="产品设计部">产品设计部</SelectOption>
                            <SelectOption value="应用开发部">应用开发部</SelectOption>
                          </Select>
                        </div>
                      </FormItem>
                </Form>
              </Col>
                            <Col span={6}>
                              <Form className="feu-default-form">
                                <FormItem label="环境" required={false} labelCol={labelCol_25} wrapperCol={wrapperCol_26}>
                                  <div className="formitem-compitem" style={style_28}>
                                    <Select options={options_29} width={200}>
                                      <SelectOption value="选项1">选项1</SelectOption>
                                      <SelectOption value="选项2">选项2</SelectOption>
                                      <SelectOption value="选项3">选项3</SelectOption>
                                    </Select>
                                  </div>
                                </FormItem>
                                      <FormItem label="" required={true} wrapperCol={wrapperCol_36}>
                                        <div className="formitem-compitem" style={style_38}>
                                          <Button children="查询" type="primary"/>
                                      </div>
                                          <div className="formitem-compitem" style={style_42}>
                                            <Button children="重置" type=""/>
                                        </div>
                                      </FormItem>
                              </Form>
                            </Col>
            </Row>
                                            <Row>
                                              <Col span={12}>
                                                <Ybutton outline={false} size="md" color="info" icon="plus" text="新增集群"/>
                                              <Atable hasOper={true} pagination={true} size="default" columns={columns_53} hasSelect={false} bordered={true} align="center" operation={operation_57} dataSource={dataSource_58}/>
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
const options_17 = [{"value":"平台组"},{"value":"产品设计部"},{"value":"应用开发部"}];
const labelCol_25 = {"span":8};
const wrapperCol_26 = {"span":16};
const style_28 = {"width":200};
const options_29 = [{"value":"选项1"},{"value":"选项2"},{"value":"选项3"}];
const wrapperCol_36 = {"offset":8,"span":16};
const style_38 = {};
const style_42 = {};
const columns_53 = [{"dataIndex":"name","title":"序号"},{"dataIndex":"age","title":"集群名称"},{"dataIndex":"address","title":"环境"},{"dataIndex":"b65fdf2f-3f50-42b4-a56c-ad6f35020404","title":"项目ID"},{"dataIndex":"5a4114e0-fe52-41c3-964d-f94fb65fd0df","title":"创建时间"},{"dataIndex":"008f68fa-4305-4836-b34a-da723765231b","title":"最后更新时间"}];
const operation_57 = {"margin":"ms","size":"md","data":[{"outline":true,"color":"info","icon":"","id":"backbtn","text":"编辑"}]};
const dataSource_58 = [{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"SmartMS","address":"DEV","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"黄俊","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"01","key":"1","age":"default","008f68fa-4305-4836-b34a-da723765231b":"2018-01-18 13:00:00"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"MSI","address":"DEV","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"张东升","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"02","key":"2","age":"MESH","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"MSI","address":"DEV","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"张东升","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"03","key":"15790206-73ee-4d13-a179-afc5b67e0a88","age":"MESH","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"MSI","address":"FAT","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"游启江","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"04","key":"b9d44787-f0cc-4567-a092-fb910d42218c","age":"MESH","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"MSI","address":"FAT","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"姚雪春","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"05","key":"c4a6075c-b0f0-4e1f-b666-d7dbfb916233","age":"MESH","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00"}];

export default Index;