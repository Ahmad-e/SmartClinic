import React from 'react';
import { Table, Button } from 'antd';
import {  EditOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';


const App = (props) => {
  const { t } = useTranslation();

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 6,
      },
    },
    {
      title: t('First_name'),
      dataIndex: 'firstname',
      sorter: {
        compare: (a, b) => a.firstname.localeCompare(b.firstname),
        multiple: 5,
      },
    },
    {
      title: t("Last_name"),
      dataIndex: 'lastname',
      sorter: {
        compare: (a, b) => a.lastname.localeCompare(b.lastname),
        multiple: 5,
      },
    },
    {
      title: t('email'),
      dataIndex: 'email',
      sorter: {
        compare: (a, b) => a.email.localeCompare(b.email),
        multiple: 4,
      },
    },
    {
      title: t('Address'),
      dataIndex: 'address',
      sorter: {
        compare: (a, b) => a.address.localeCompare(b.address),
        multiple: 3,
      },
    },
    {
      title: t('Birthdate'),
      dataIndex: 'birthdate',
      sorter: {
        compare: (a, b) => new Date(a.birthdate) - new Date(b.birthdate),
        multiple: 2,
      },
    },
    {
      title: t('phone_no'),
      dataIndex: 'phonenumber',
      sorter: {
        compare: (a, b) => a.phonenumber - b.phonenumber,
        multiple: 1,
      },
    },
    {
      title: t('Action'),
      key: 'action',
      render: (text, record) => (
        <Button onClick={() => { props.onOpenDialog(record) }}  color="primary" variant="text"  icon={<EditOutlined  style={{ fontSize: '20px'  }}  />} shape="circle" >
          
        </Button>
      ),
    },
  ];
  
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };


  return(
  <Table columns={columns} dataSource={props.data} onChange={onChange} />
)
};

export default App;