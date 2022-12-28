import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Objectives',
  },
  {
    key: '2',
    label: 'Functions',
  },
  {
    key: '3',
    label: (
      <Link to="/governingBody">
        Governing Body
      </Link>
    ),
  },
  {
    key: '4',
    label:'Recents Updates',
    children: [
      {
        key: '4-1',
        label: 'Application Form For Deputation posts of ITDA',
      },
      {
        key: '4-2',
        label: 'DARC Training Calendar',
      },
      {
        key: '4-3',
        label: 'eBook on 75 Digital Transformation'
      }
    ],
  },
  {
    key: '5',
    label: 'Projects',
  },
  {
    key: '6',
    label: 'Gallery',
  }
];

const DropDownAbout: React.FC = () => (
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        About Us
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default DropDownAbout;