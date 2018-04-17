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
                  <FormItem label="命名空间" required={false} labelCol={labelCol_1496} wrapperCol={wrapperCol_1497}>
                    <Input width={200} placeholder="" type="text"/>
                </FormItem>
                    <FormItem label="环境" required={false} labelCol={labelCol_1503} wrapperCol={wrapperCol_1504}>
                      <Select options={options_1505} width={200}>
                        <SelectOption value="平台组">平台组</SelectOption>
                        <SelectOption value="产品设计部">产品设计部</SelectOption>
                        <SelectOption value="应用开发部">应用开发部</SelectOption>
                      </Select>
                    </FormItem>
                </Form>
              </Col>
                        <Col span={6}>
                          <Form size="default">
                            <FormItem label="集群名称" required={false} labelCol={labelCol_1513} wrapperCol={wrapperCol_1514}>
                              <Input placeholder="" type="text" width={200}/>
                          </FormItem>
                              <FormItem label="项目ID" required={false} labelCol={labelCol_1520} wrapperCol={wrapperCol_1521}>
                                <Select options={options_1522} width={200}>
                                  <SelectOption value="选项1">选项1</SelectOption>
                                  <SelectOption value="选项2">选项2</SelectOption>
                                  <SelectOption value="选项3">选项3</SelectOption>
                                </Select>
                              </FormItem>
                                  <FormItem label="" required={true} labelCol={labelCol_1529} wrapperCol={wrapperCol_1530}>
                                    <Button children="查询" type="primary"/>
                                  <Button children="重置" type=""/>
                                </FormItem>
                          </Form>
                        </Col>
            </Row>
                                    <Row>
                                      <Col span={12}>
                                        <Ybutton outline={false} size="md" color="info" icon="plus" text="新增命名空间"/>
                                      <Atable hasOper={true} pagination={true} size="default" columns={columns_1543} hasSelect={false} bordered={true} align="center" operation={operation_1547} dataSource={dataSource_1548}/>
                                    </Col>
                                    </Row>
          
      </div>
    }
}

const labelCol_1496 = {"span":8};
const wrapperCol_1497 = {"span":8};
const labelCol_1503 = {"span":8};
const wrapperCol_1504 = {"span":8};
const options_1505 = [{"value":"平台组"},{"value":"产品设计部"},{"value":"应用开发部"}];
const labelCol_1513 = {"span":8};
const wrapperCol_1514 = {"span":8};
const labelCol_1520 = {"span":8};
const wrapperCol_1521 = {"span":8};
const options_1522 = [{"value":"选项1"},{"value":"选项2"},{"value":"选项3"}];
const labelCol_1529 = {"span":8};
const wrapperCol_1530 = {"span":8};
const columns_1543 = [{"dataIndex":"name","title":"序号"},{"title":"命名空间","dataIndex":"ddce47e0-45dd-4b8a-8b01-dff04339e842"},{"dataIndex":"age","title":"集群名称"},{"dataIndex":"address","title":"环境"},{"dataIndex":"b65fdf2f-3f50-42b4-a56c-ad6f35020404","title":"项目ID"},{"dataIndex":"5a4114e0-fe52-41c3-964d-f94fb65fd0df","title":"创建时间"},{"dataIndex":"008f68fa-4305-4836-b34a-da723765231b","title":"最后更新时间"}];
const operation_1547 = {"margin":"ms","size":"md","data":[{"outline":true,"color":"info","icon":"","id":"backbtn","text":"编辑"},{"id":"9b71a599-ba87-4abb-bc0e-6cd2e0f520e4","text":"配置管理","icon":"","color":"info","outline":false}]};
const dataSource_1548 = [{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"SmartMS","address":"DEV","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"黄俊","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"01","key":"1","age":"default","008f68fa-4305-4836-b34a-da723765231b":"2018-01-18 13:00:00","ddce47e0-45dd-4b8a-8b01-dff04339e842":"application"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"MSI","address":"DEV","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"张东升","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"02","key":"2","age":"MESH","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","ddce47e0-45dd-4b8a-8b01-dff04339e842":"auth"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"MSI","address":"DEV","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"张东升","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"03","key":"15790206-73ee-4d13-a179-afc5b67e0a88","age":"MESH","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","ddce47e0-45dd-4b8a-8b01-dff04339e842":"security"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"MSI","address":"FAT","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"游启江","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"04","key":"b9d44787-f0cc-4567-a092-fb910d42218c","age":"MESH","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","ddce47e0-45dd-4b8a-8b01-dff04339e842":"gateway"}];

export default Index;