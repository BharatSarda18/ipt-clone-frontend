import { Table } from 'antd';
const TableLayout = ({columns=[],data=[],handleTableChange=()=>{},total=100,pagination={'current':1,'pageSize':1}}) => {
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={{
                current: pagination.current,
                pageSize: pagination.pageSize,
                total: total,
                showSizeChanger: true,
                pageSizeOptions: ['10', '20', '30'],
            }}
            onChange={handleTableChange} // Handling pagination changes
        />
    )
}

export default TableLayout
