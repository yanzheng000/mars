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
                <Form size="default">
                  <FormItem label="接口编号" required={false} labelCol={labelCol_474} wrapperCol={wrapperCol_475}>
                    <Input width={200} placeholder="" type="text"/>
                </FormItem>
                    <FormItem label="接口类型" required={false} labelCol={labelCol_481} wrapperCol={wrapperCol_482}>
                      <Select options={options_483} width={200}>
                        <SelectOption value="选项1">选项1</SelectOption>
                        <SelectOption value="选项2">选项2</SelectOption>
                        <SelectOption value="选项3">选项3</SelectOption>
                      </Select>
                    </FormItem>
                </Form>
              </Col>
                        <Col span={6}>
                          <Form size="default">
                            <FormItem label="接口名称" required={false} labelCol={labelCol_491} wrapperCol={wrapperCol_492}>
                              <Input width={200} placeholder="" type="text"/>
                          </FormItem>
                              <FormItem label="" required={true} labelCol={labelCol_498} wrapperCol={wrapperCol_499}>
                                <Button children="查询" type="primary"/>
                              <Button children="重置" type=""/>
                            </FormItem>
                          </Form>
                        </Col>
            </Row>
                                <Row>
                                  <Col span={12}>
                                    <ButtonGroup size="md" data={data_505}/>
                                  <Atable hasOper={true} pagination={true} size="default" columns={columns_509} hasSelect={false} bordered={true} align="center" operation={operation_513} dataSource={dataSource_514}/>
                                </Col>
                                </Row>
          
      </div>
    }
}

const labelCol_474 = {"span":8};
const wrapperCol_475 = {"span":8};
const labelCol_481 = {"span":8};
const wrapperCol_482 = {"span":8};
const options_483 = [{"value":"选项1"},{"value":"选项2"},{"value":"选项3"}];
const labelCol_491 = {"span":8};
const wrapperCol_492 = {"span":8};
const labelCol_498 = {"span":8};
const wrapperCol_499 = {"span":8};
const data_505 = [{"outline":false,"color":"info","icon":"plus","id":"backbtn","text":"导入接口"}];
const columns_509 = [{"dataIndex":"name","title":"序号"},{"dataIndex":"age","title":"接口编号"},{"dataIndex":"address","title":"接口名称"},{"title":"接口类型","dataIndex":"1d431cdf-44d0-4c5e-bc09-c047bd81e120"},{"dataIndex":"527deb8c-35a3-400b-9279-c9374c05a12f","title":"路径"},{"dataIndex":"5a4114e0-fe52-41c3-964d-f94fb65fd0df","title":"创建时间"},{"dataIndex":"008f68fa-4305-4836-b34a-da723765231b","title":"最后更新时间"}];
const operation_513 = {"margin":"ms","size":"md","data":[{"outline":true,"color":"info","icon":"","id":"54e0d2bf-3e82-4435-a02e-fbc15099c4b4","text":"编辑"},{"outline":false,"color":"info","icon":"","id":"9a28bb1b-65bb-43e2-a89a-239f6ef01ded","text":"查看"}]};
const dataSource_514 = [{"address":"login","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"20%","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"10%","5cdf9f2d-5f31-4c5e-82ec-d032c4956932":"4646","b65fdf2f-3f50-42b4-a56c-ad6f35020404":"已启动","527deb8c-35a3-400b-9279-c9374c05a12f":"/security/login ","30c30431-e8bf-4505-b813-a1f370c29a6a":"2.3.1","name":"01","6316d63e-5188-48cf-8029-8e182fd166e9":"10.110.200.26","key":"1","age":"7672bed4","008f68fa-4305-4836-b34a-da723765231b":"2018-01-18 13:00:00","1d431cdf-44d0-4c5e-bc09-c047bd81e120":"GET"},{"address":"logout","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"20%","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"10%","5cdf9f2d-5f31-4c5e-82ec-d032c4956932":"4646","b65fdf2f-3f50-42b4-a56c-ad6f35020404":"已启动","527deb8c-35a3-400b-9279-c9374c05a12f":"/security/logout","30c30431-e8bf-4505-b813-a1f370c29a6a":"3.4.2","name":"02","6316d63e-5188-48cf-8029-8e182fd166e9":"10.110.200.27","key":"2","age":"7672bed5","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","1d431cdf-44d0-4c5e-bc09-c047bd81e120":"PUT"},{"address":"user","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"20%","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"10%","5cdf9f2d-5f31-4c5e-82ec-d032c4956932":"4646","b65fdf2f-3f50-42b4-a56c-ad6f35020404":"已启动","527deb8c-35a3-400b-9279-c9374c05a12f":"/security/user","30c30431-e8bf-4505-b813-a1f370c29a6a":"1.2.3","name":"03","6316d63e-5188-48cf-8029-8e182fd166e9":"10.110.200.27","key":"15790206-73ee-4d13-a179-afc5b67e0a88","age":"7672bed6","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","1d431cdf-44d0-4c5e-bc09-c047bd81e120":"DELETE"},{"address":"lookup","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"--","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"--","5cdf9f2d-5f31-4c5e-82ec-d032c4956932":"4646","b65fdf2f-3f50-42b4-a56c-ad6f35020404":"已停止","527deb8c-35a3-400b-9279-c9374c05a12f":"/security/lookup","30c30431-e8bf-4505-b813-a1f370c29a6a":"2.3.1","name":"04","6316d63e-5188-48cf-8029-8e182fd166e9":"10.110.200.28","key":"b9d44787-f0cc-4567-a092-fb910d42218c","age":"7672bed7","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","1d431cdf-44d0-4c5e-bc09-c047bd81e120":"POST"}];

export default Index;