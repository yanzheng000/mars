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
                    <FormItem label="节点编号" required={false} labelCol={labelCol_4445} wrapperCol={wrapperCol_4446}>
                      <Input width={200} placeholder="" type="text"/>
                  </FormItem>
                      <FormItem label="地址" required={false} labelCol={labelCol_4452} wrapperCol={wrapperCol_4453}>
                        <Input width={200} placeholder="" type="text"/>
                    </FormItem>
                  </Form>
              </Col>
                        <Col span={6}>
                          <Row>
                            <Col span={12}/>
                        </Row>
                            <Form size="default">
                              <FormItem label="节点名称" required={false} labelCol={labelCol_4460} wrapperCol={wrapperCol_4461}>
                                <Input width={200} placeholder="" type="text"/>
                            </FormItem>
                                <FormItem label="" required={true} labelCol={labelCol_4467} wrapperCol={wrapperCol_4468}>
                                  <Button children="查询" type="primary"/>
                                <Button children="重置" type=""/>
                              </FormItem>
                            </Form>
                        </Col>
            </Row>
                                  <Row>
                                    <Col span={12}>
                                      <Atable hasOper={false} pagination={true} size="default" columns={columns_4476} hasSelect={false} bordered={true} align="center" operation={operation_4480} dataSource={dataSource_4481}/>
                                  </Col>
                                  </Row>
          
      </div>
    }
}

const labelCol_4445 = {"span":8};
const wrapperCol_4446 = {"span":8};
const labelCol_4452 = {"span":8};
const wrapperCol_4453 = {"span":8};
const labelCol_4460 = {"span":8};
const wrapperCol_4461 = {"span":8};
const labelCol_4467 = {"span":8};
const wrapperCol_4468 = {"span":8};
const columns_4476 = [{"dataIndex":"name","title":"序号"},{"dataIndex":"age","title":"节点编号"},{"dataIndex":"address","title":"节点名称"},{"dataIndex":"b65fdf2f-3f50-42b4-a56c-ad6f35020404","title":"地址"},{"dataIndex":"bb14a5c3-96aa-4b97-8122-f3a12e843d56","title":"端口"},{"title":"CPU占比","dataIndex":"d434d890-fcba-48ce-a65d-0a4f1169665b"},{"dataIndex":"22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f","title":"内存占比"},{"dataIndex":"5a4114e0-fe52-41c3-964d-f94fb65fd0df","title":"添加时间"}];
const operation_4480 = {"margin":"ms","size":"md","data":[]};
const dataSource_4481 = [{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"10.110.200.26","address":"swarm26.skyinno.com","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"4646","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"01","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"20%","key":"1","age":"7672bed4","008f68fa-4305-4836-b34a-da723765231b":"2018-01-18 13:00:00","d434d890-fcba-48ce-a65d-0a4f1169665b":"20%"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"10.110.200.27","address":"swarm27.skyinno.com","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"4646","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"02","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"20%","key":"2","age":"7672bed5","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","d434d890-fcba-48ce-a65d-0a4f1169665b":"20%"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"10.110.200.28","address":"swarm28.skyinno.com","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"4646","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"03","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"20%","key":"15790206-73ee-4d13-a179-afc5b67e0a88","age":"7672bed6","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","d434d890-fcba-48ce-a65d-0a4f1169665b":"20%"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"10.110.200.29","address":"swarm29.skyinno.com","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"4646","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"04","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"20%","key":"b9d44787-f0cc-4567-a092-fb910d42218c","age":"7672bed7","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","d434d890-fcba-48ce-a65d-0a4f1169665b":"20%"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"10.110.200.29","address":"swarm29.skyinno.com","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"4646","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"05","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"20%","key":"eb3219a0-a170-493e-a558-9f480823bc41","age":"7672bed8","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","d434d890-fcba-48ce-a65d-0a4f1169665b":"20%"}];

export default Index;