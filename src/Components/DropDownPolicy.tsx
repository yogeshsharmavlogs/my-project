import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'RTI',
  },
  {
    key: '2',
    label: 'MPR',
  },
  {
    key: '3',
    label: 'Acts & Rules',
  },
  {
    key: '4',
    label:'Agreements/MOU',
  },
  {
    key: '5',
    label: 'MOM',
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