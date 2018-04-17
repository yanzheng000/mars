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
                <Row>
                  <Col span={12}/>
              </Row>
                  <Form size="default">
                    <FormItem label="配置编号" required={false} labelCol={labelCol_6629} wrapperCol={wrapperCol_6630}>
                      <Input width={200} placeholder="" type="text"/>
                  </FormItem>
                      <FormItem label="Value" required={false} labelCol={labelCol_6636} wrapperCol={wrapperCol_6637}>
                        <Select options={options_6638} width={200}>
                          <SelectOption value="选项1">选项1</SelectOption>
                          <SelectOption value="选项2">选项2</SelectOption>
                          <SelectOption value="选项3">选项3</SelectOption>
                        </Select>
                      </FormItem>
                  </Form>
              </Col>
                          <Col span={6}>
                            <Row>
                              <Col span={12}/>
                          </Row>
                              <Form size="default">
                                <FormItem label="Key" required={false} labelCol={labelCol_6646} wrapperCol={wrapperCol_6647}>
                                  <Input width={200} placeholder="" type="text"/>
                              </FormItem>
                                  <FormItem label="状态" required={false} labelCol={labelCol_6653} wrapperCol={wrapperCol_6654}>
                                    <Select options={options_6655} width={200}>
                                      <SelectOption value="选项1">选项1</SelectOption>
                                      <SelectOption value="选项2">选项2</SelectOption>
                                      <SelectOption value="选项3">选项3</SelectOption>
                                    </Select>
                                  </FormItem>
                                      <FormItem label="" required={true} labelCol={labelCol_6662} wrapperCol={wrapperCol_6663}>
                                        <Button children="查询" type="primary"/>
                                      <Button children="重置" type=""/>
                                    </FormItem>
                              </Form>
                          </Col>
            </Row>
                                        <Row>
                                          <Col span={12}>
                                            <Atable hasOper={false} pagination={true} size="default" columns={columns_6671} hasSelect={false} bordered={true} align="center" operation={operation_6675} dataSource={dataSource_6676}/>
                                        </Col>
                                        </Row>
          
      </div>
    }
}

const labelCol_6629 = {"span":8};
const wrapperCol_6630 = {"span":8};
const labelCol_6636 = {"span":8};
const wrapperCol_6637 = {"span":8};
const options_6638 = [{"value":"选项1"},{"value":"选项2"},{"value":"选项3"}];
const labelCol_6646 = {"span":8};
const wrapperCol_6647 = {"span":8};
const labelCol_6653 = {"span":8};
const wrapperCol_6654 = {"span":8};
const options_6655 = [{"value":"选项1"},{"value":"选项2"},{"value":"选项3"}];
const labelCol_6662 = {"span":8};
const wrapperCol_6663 = {"span":8};
const columns_6671 = [{"dataIndex":"name","title":"序号"},{"dataIndex":"age","title":"配置编号"},{"dataIndex":"address","title":"Key"},{"dataIndex":"527deb8c-35a3-400b-9279-c9374c05a12f","title":"Value"},{"dataIndex":"5a4114e0-fe52-41c3-964d-f94fb65fd0df","title":"创建时间"},{"dataIndex":"008f68fa-4305-4836-b34a-da723765231b","title":"最后更新时间"}];
const operation_6675 = {"margin":"ms","size":"md","data":[{"outline":true,"color":"info","icon":"","id":"54e0d2bf-3e82-4435-a02e-fbc15099c4b4","text":"编辑"},{"id":"2d846d69-0dbc-4e43-bfec-45646bda7d40","text":"删除","icon":"","color":"info","outline":false}]};
const dataSource_6676 = [{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"已启动","527deb8c-35a3-400b-9279-c9374c05a12f":"123","address":"lookup","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"20%","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"01","6316d63e-5188-48cf-8029-8e182fd166e9":"10.110.200.26","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"10%","key":"1","age":"7672bed4","008f68fa-4305-4836-b34a-da723765231b":"2018-01-18 13:00:00","5cdf9f2d-5f31-4c5e-82ec-d032c4956932":"4646","997c19d4-3070-4275-be93-e127af8a0529":"未生效"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"已启动","527deb8c-35a3-400b-9279-c9374c05a12f":"456","address":"security","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"20%","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"02","6316d63e-5188-48cf-8029-8e182fd166e9":"10.110.200.27","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"10%","key":"2","age":"7672bed5","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","5cdf9f2d-5f31-4c5e-82ec-d032c4956932":"4646","997c19d4-3070-4275-be93-e127af8a0529":"未生效"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"已启动","527deb8c-35a3-400b-9279-c9374c05a12f":"789","address":"mars","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"20%","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"03","6316d63e-5188-48cf-8029-8e182fd166e9":"10.110.200.27","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"10%","key":"15790206-73ee-4d13-a179-afc5b67e0a88","age":"7672bed6","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","5cdf9f2d-5f31-4c5e-82ec-d032c4956932":"4646","997c19d4-3070-4275-be93-e127af8a0529":"已生效"},{"b65fdf2f-3f50-42b4-a56c-ad6f35020404":"已停止","527deb8c-35a3-400b-9279-c9374c05a12f":"amd","address":"lookup","bb14a5c3-96aa-4b97-8122-f3a12e843d56":"--","5a4114e0-fe52-41c3-964d-f94fb65fd0df":"2017-12-10 13:00:00","name":"04","6316d63e-5188-48cf-8029-8e182fd166e9":"10.110.200.28","22e0d6ce-5ade-4bfb-82cc-9b94367f3b3f":"--","key":"b9d44787-f0cc-4567-a092-fb910d42218c","age":"7672bed7","008f68fa-4305-4836-b34a-da723765231b":"2017-01-18 13:00:00","5cdf9f2d-5f31-4c5e-82ec-d032c4956932":"4646","997c19d4-3070-4275-be93-e127af8a0529":"已生效"}];

export default Index;