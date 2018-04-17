import React, { Component } from 'react';
import { Table, Dropdown } from 'antd';
import { ButtonGroup } from '../index.js';
import './atable.less';
class ATable extends Component {
  render() {

    const columns = (this.props.columns) ? this.props.columns.slice() : [];
    const dataSource = this.props.dataSource.slice();
    const { hasOper, operation, hasSelect } = this.props;
    const curOperation = operation;
    const common = { customClass: 'ms', size: 'sm' };
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
      }),
    };
    if (curOperation && hasOper) {
      columns.push({
        title: '操作',
        dataIndex: 'myoperation',
        render: (text, records, index) => {
          return (curOperation.length > 2) ? <Dropdown overlay={<ButtonGroup data={curOperation.data.slice()} common={{ ...curOperation, block: true }} />}><a>操作</a></Dropdown> : <ButtonGroup data={curOperation.data.slice()} common={common} />;
        },
      });
    }
    const pagination = this.props.pagination || false;
    return (
      <div className={`atable ${this.props.align}`}>
        <Table  {...this.props} pagination={pagination} rowSelection={hasSelect ? rowSelection : null} columns={columns} dataSource={dataSource} />
      </div>
    );
  }
}

export default ATable;
ATable.defaultProps = {
  columns: [{ title: '示例列1', dataIndex: 'test1', key: 'test1' }, { title: '示例列2', dataIndex: 'test2', key: 'test2' }, { title: '示例列3', dataIndex: 'test3', key: 'test3' }],
  dataSource: [{ test1: '测试数据11', test2: '测试数据12', test3: '测试数据13' }, { test1: '测试数据21', test2: '测试数据22', test3: '测试数据23' }],
};
