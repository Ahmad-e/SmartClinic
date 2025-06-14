import React from 'react';
import { Table, Button } from 'antd';
import {  EditOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';


const App = (props) => {
  const { t } = useTranslation();

  const columns = [
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
      title: t('phone_no'),
      dataIndex: 'phonenumber',
      sorter: {
        compare: (a, b) => a.phonenumber - b.phonenumber,
        multiple: 1,
      },
    },
    {
      title: t('visite_date'),
      dataIndex: 'visite_date',
      sorter: {
        compare: (a, b) => a.visite_date - b.visite_date,
        multiple: 1,
      },
    },
    {
      title: t('notes'),
      dataIndex: 'notes',
      sorter: {
        compare: (a, b) => a.notes - b.notes,
        multiple: 1,
      },
    }
  ];
  
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };


  return(
  <Table columns={columns} dataSource={props.visits} onChange={onChange} />
)
};

export default App;