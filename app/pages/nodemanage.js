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
                  <FormItem label="节点编号" required={false} labelCol={labelCol_4558} wrapperCol={wrapperCol_4559}>
                    <Input width={200} placeholder="" type="text"/>
                </FormItem>
                    <FormItem label="地址" required={false} labelCol={labelCol_4565} wrapperCol={wrapperCol_4566}>
                      <Input placeholder="" type="text" width={200}/>
                  </FormItem>
                </Form>
              </Col>
                      <Col span={6}>
                        <Form size="default">
                          <FormItem label="节点名称" required={false} labelCol={labelCol_4573} wrapperCol={wrapperCol_4574}>
                            <Input width={200} placeholder="" type="text"/>
                        </FormItem>
                            <FormItem label="状态" required={false} labelCol={labelCol_4580} wrapperCol={wrapperCol_4581}>
                              <Select options={options_4582} width={200}>
                                <SelectOption value="选项1">选项1</SelectOption>
                                <SelectOption value="选项2">选项2</SelectOption>
                                <SelectOption value="选项3">选项3</SelectOption>
                              </Select>
                            </FormItem>
                                <FormItem label="" required={true} labelCol={labelCol_4589} wrapperCol={wrapperCol_4590}>
                                  <Button children="查询" type="primary"/>
                                <Button children="重置" type=""/>
                              </FormItem>
                        </Form>
                      </Col>
            </Row>
                                  <Row>
                                    <Col span={12}>
                                      <Ybutton outline={false} size="md" color="info" icon="plus" text="挂载节点"/>
                                    <Atable hasOper={true} pagination={true} size="default" columns={columns_4603} hasSelect={false} bordered={true} align="center" operation={operation_4607} dataSource={dataSource_4608}/>
                                  </Col>
                                  </Row>
          
      </div>
    }
}

const labelCol_4558 = {"span":8};
const wrapperCol_4559 = {"span":8};
const labelCol_4565 = {"span":8};
const wrapperCol_4566 = {"span":8};
const labelCol_4573 = {"span":8};
const wrapperCol_4574 = {"span":8};
const labelCol_4580 = {"span":8};
const wrapperCol_4581 = {"span":8};
const options_4582 = [{"value":"选项1"},{"value":"选项2"},{"value":"选项3"}];
const labelCol_4589 = {"span":8};
const wrapperCol_4590 = {"span":8};
const columns_4603 = [{"dataIndex":"name","title":"序号"},{"dataIndex":"age","title":"节点编号"},{"dataIndex":"address","title":"节点名称"},{"dataIndex":"b65fdf2f-3f50-42b4-a56c-ad6f35020404","title":"地址"},{"title":"状态","dataIndex":"22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f"},{"dataIndex":"5a4114e0-fe52-41c3-964d-f94fb65fd0df","title":"创建时间"},{"dataIndex":"008f68fa-4305-4836-b34a-da723765231b","title":"最后更新时间"}];
const operation_4607 = {"margin":"ms","size":"md","data":[{"outline":true,"color":"info","icon":"","id":"backbtn","text":"编辑"},{"id":"54e0d2bf-3e82-4435-a02e-fbc15099c4b4","text":"服务监控","icon":"","color":"info","outline":false}]};
const dataSource_4608 = [{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"10.110.200.26","address":"swarm26.skyinno.com","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"4646","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"01","key":"1","age":"7672bed4","008f68fa-4305-4836-b34a-da723765231b":"2018-01-18 13:00:00","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"正常"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"10.110.200.27","address":"swarm27.skyinno.com","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"4646","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"02","key":"2","age":"7672bed5","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"正常"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"10.110.200.28","address":"swarm28.skyinno.com","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"4646","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"03","key":"15790206-73ee-4d13-a179-afc5b67e0a88","age":"7672bed6","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"正常"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"10.110.200.29","address":"swarm29.skyinno.com","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"4646","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"04","key":"b9d44787-f0cc-4567-a092-fb910d42218c","age":"7672bed7","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"停用"}];

export default Index;