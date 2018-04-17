import React, { Component } from 'react';
    
//声明要引入的组件
import { Form,Input,Button } from 'antd';
import { Row,Col } from 'yrui';
import { Atable } from '../components';
const FormItem = Form.Item;


//index指当前页面名称
class Index extends Component {
    constructor () {
      super();
      
    }
    render(){
      return <div style={{"padding":"10px 10px","margin":"10px 0px"}}>
        <Row>
              <Col span={6}>
                <Row>
                  <Col span={12}/>
              </Row>
                  <Form size="default">
                    <FormItem label="服务编号" required={false} labelCol={labelCol_367} wrapperCol={wrapperCol_368}>
                      <Input width={200} placeholder="" type="text"/>
                  </FormItem>
                  </Form>
              </Col>
                      <Col span={6}>
                        <Row>
                          <Col span={12}/>
                      </Row>
                          <Form size="default">
                            <FormItem label="服务名称" required={false} labelCol={labelCol_375} wrapperCol={wrapperCol_376}>
                              <Input width={200} placeholder="" type="text"/>
                          </FormItem>
                              <FormItem label="" required={true} labelCol={labelCol_382} wrapperCol={wrapperCol_383}>
                                <Button children="查询" type="primary"/>
                              <Button children="重置" type=""/>
                            </FormItem>
                          </Form>
                      </Col>
            </Row>
                                <Row>
                                  <Col span={12}>
                                    <Atable hasOper={true} pagination={true} size="default" columns={columns_391} hasSelect={false} bordered={true} align="center" operation={operation_395} dataSource={dataSource_396}/>
                                </Col>
                                </Row>
          
      </div>
    }
}

const labelCol_367 = {"span":8};
const wrapperCol_368 = {"span":8};
const labelCol_375 = {"span":8};
const wrapperCol_376 = {"span":8};
const labelCol_382 = {"span":8};
const wrapperCol_383 = {"span":8};
const columns_391 = [{"dataIndex":"name","title":"序号"},{"dataIndex":"age","title":"服务编号"},{"dataIndex":"address","title":"服务名称"},{"dataIndex":"527deb8c-35a3-400b-9279-c9374c05a12f","title":"版本号"},{"dataIndex":"bb14a5c3-96aa-4b97-8122-f3a12e843d56","title":"CPU占比"},{"dataIndex":"22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f","title":"内存占比"},{"dataIndex":"5a4114e0-fe52-41c3-964d-f94fb65fd0df","title":"添加时间"}];
const operation_395 = {"margin":"ms","size":"md","data":[{"outline":false,"color":"info","icon":"","id":"54e0d2bf-3e82-4435-a02e-fbc15099c4b4","text":"删除"}]};
const dataSource_396 = [{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"已启动","527deb8c-35a3-400b-9279-c9374c05a12f":"1.0.3","address":"lookup","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"20%","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"01","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"10%","key":"1","age":"7672bed4","008f68fa-4305-4836-b34a-da723765231b":"2018-01-18 13:00:00"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"已启动","527deb8c-35a3-400b-9279-c9374c05a12f":"1.0.4","address":"security","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"20%","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"02","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"10%","key":"2","age":"7672bed5","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"已启动","527deb8c-35a3-400b-9279-c9374c05a12f":"1.0.3","address":"mars","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"20%","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"03","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"10%","key":"15790206-73ee-4d13-a179-afc5b67e0a88","age":"7672bed6","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"已停止","527deb8c-35a3-400b-9279-c9374c05a12f":"1.0.5","address":"lookup","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"30%","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"04","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"20%","key":"b9d44787-f0cc-4567-a092-fb910d42218c","age":"7672bed7","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"已停止","527deb8c-35a3-400b-9279-c9374c05a12f":"1.0.6","address":"lookup","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"5%","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"05","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"5%","key":"0c7d93f1-80d4-4132-b017-ad4cbfa114f8","age":"7672bed8","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00"}];

export default Index;