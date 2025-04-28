import React, { useRef, useState } from 'react';
import { SearchOutlined ,DeleteOutlined ,EditOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';

import Highlighter from 'react-highlight-words';
const data = [
  {
    id: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    actions:<span className='flex justify-evenly'>
    <Button color="danger" variant="filled" > <DeleteOutlined /> </Button>
    <Button color="primary"  variant="filled" ><EditOutlined /></Button>
</span>
  },
  {
    id: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
    actions:<span className='flex justify-evenly'>
    <Button color="danger" variant="filled" > <DeleteOutlined /> </Button>
    <Button color="primary"  variant="filled" ><EditOutlined /></Button>
</span>
  },
  {
    id: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    actions:<span className='flex justify-evenly'>
    <Button color="danger" variant="filled" > <DeleteOutlined /> </Button>
    <Button color="primary"  variant="filled" ><EditOutlined /></Button>
</span>
  },
  {
    id: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
    actions:<span className='flex justify-evenly'>
                <Button color="danger" variant="filled" > <DeleteOutlined /> </Button>
                <Button color="primary"  variant="filled" ><EditOutlined /></Button>
            </span>
  },
];
const App = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={e => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="large"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    filterDropdownProps: {
      onOpenChange(open) {
        if (open) {
          setTimeout(() => {
            var _a;
            return (_a = searchInput.current) === null || _a === void 0 ? void 0 : _a.select();
          }, 100);
        }
      },
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    Object.assign(
      { title: 'Name', dataIndex: 'name', key: 'name', width: '20%' },
      getColumnSearchProps('name'),
    ),
    Object.assign(
        { title: 'Email', dataIndex: 'id', key: 'name', width: '20%' },
        getColumnSearchProps('id'),
      ),
    Object.assign(
      { title: 'Age', dataIndex: 'age', id: 'age', width: '20%' },
      getColumnSearchProps('age'),
    ),
    Object.assign(
        { title: 'Accuont type', dataIndex: 'age', id: 'age', width: '20%' },
        getColumnSearchProps('age'),
      ),
    Object.assign(
      Object.assign(
        { title: 'Address', dataIndex: 'address', key: 'address' },
        getColumnSearchProps('address'),
      ),
      {
        sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend'],
      },

    ),
    { title: 'Actions',dataIndex: 'actions', key: 'actions', width: '20%' }
  ];
  console.log(columns)
  return <Table columns={columns} dataSource={data} />;
};
export default App;




// import React from 'react';
// import { Space, Table, Tag } from 'antd';
// const { Column, ColumnGroup } = Table;
// const data = [
//   {
//     key: '1',
//     firstName: 'John',
//     lastName: 'Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     firstName: 'Jim',
//     lastName: 'Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     firstName: 'Joe',
//     lastName: 'Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];
// const App = () => (
//   <Table dataSource={data}>
//     <ColumnGroup title="Name">
//       <Column title="First Name" dataIndex="firstName" key="firstName" />
//       <Column title="Last Name" dataIndex="lastName" key="lastName" />
//     </ColumnGroup>
//     <Column title="Age" dataIndex="age" key="age" />
//     <Column title="Address" dataIndex="address" key="address" />
//     <Column
//       title="Tags"
//       dataIndex="tags"
//       key="tags"
//       render={tags => (
//         <>
//           {tags.map(tag => {
//             let color = tag.length > 5 ? 'geekblue' : 'green';
//             if (tag === 'loser') {
//               color = 'volcano';
//             }
//             return (
//               <Tag color={color} key={tag}>
//                 {tag.toUpperCase()}
//               </Tag>
//             );
//           })}
//         </>
//       )}
//     />
//     <Column
//       title="Action"
//       key="action"
//       render={(_, record) => (
//         <Space size="middle">
//           <a>Invite {record.lastName}</a>
//           <a>Delete</a>
//         </Space>
//       )}
//     />
//   </Table>
// );
// export default App;