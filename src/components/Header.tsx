import { Layout, Menu, Dropdown, Avatar } from 'antd';
import type { MenuProps } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const items1: MenuProps['items'] = [
    {
        key: '1',
        label: `首页`,
    },
    {
        key: '2',
        label: `博客分类`
    },
    {
        key: '3',
        label: `博客管理`
    }
];
const items: MenuProps['items'] = [
    {
        key: '1',
        label: 'admin'
    },
    {
        key: '2',
        danger: true,
        label: '退出',
    },
];
export default function Headers() {
    return (
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items1} />

            <div style={{ float: 'right' }}>
                <span style={{ marginRight: '15px' }}>
                    欢迎admin回来
                </span>
                <Dropdown menu={{ items }}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Dropdown>
            </div>
        </Header>
    )
}
