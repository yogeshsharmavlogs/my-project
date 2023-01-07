import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';

const items: MenuProps['items'] = [
  {
    key: '0',
    label: (
         <Link to="/policy">Policy</Link>
    ),
  },
  {
    key: '1',
    label: (
        <Link to="/rti">RTI</Link>
    ),
  },
  {
    key: '2',
    label: (
        <Link to="/mpr"> MPR </Link>
    ),
  },
  {
    key: '3',
    label: (
         <Link to="/actRules">Acts & Rules</Link>
    ),
  },
  {
    key: '4',
    label: (
        <Link to="/agreement">Agreements/MOU</Link>
    ),
  },
  {
    key: '5',
    label: (
         <Link to="/mom">MOM</Link>
    ),
  },
];

const DropDownPolicy: React.FC = () => (
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Policy & Guidelines
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default DropDownPolicy;