import React from 'react';
import { Outlet, useNavigate, useLocation, Link } from 'react-router-dom'

import 'antd/dist/antd.css';
import './index.scss';
import { Layout, Menu, Breadcrumb } from 'antd';
import { PieChartOutlined, UserSwitchOutlined, AppstoreOutlined, CommentOutlined } from '@ant-design/icons';
import { ControlOutlined, QrcodeOutlined, SearchOutlined } from '@ant-design/icons';
import WithAuth from '../../components/WithAuth';
import MyLink from '../../components/MyLink';
import useClock from '../../hooks/useClock';

const { Header, Content, Sider } = Layout;

/* 菜单项定义 */
const items2 = [
  { icon: PieChartOutlined, label: "数据看板", key: "/admin/dashboard" },
  { icon: UserSwitchOutlined, label: "用户管理", key: "/admin/users" },
  {
    icon: AppstoreOutlined, label: "内容管理", children: [
      {
        key: "/admin/channels",
        label: "频道管理",
        icon: <ControlOutlined />
      },
      {
        key: "/admin/goods",
        label: "商品管理",
        icon: <QrcodeOutlined />
      },
      {
        key: "/admin/hotwords",
        label: "热词管理",
        icon: <SearchOutlined />
      },
    ]
  },
  { icon: CommentOutlined, label: "消息管理", key: "/admin/messages" },
].map(({ icon, label, children, key }, index) => {
  return {
    key,
    icon: React.createElement(icon),
    label,
    children,
  };
});

let navigate;
const onMenuClick = ({ key }) => {
  console.log("onMenuClick", key);
  navigate(key)
}

const links = [
  { text: "axios", href: "/demos/ajax" },
  { text: "antd", href: "https://ant-design.gitee.io/" },
  { text: "管理端", href: "https://gitee.com/steveouyang/jdzb_manage_react_2113" },
  { text: "服务端", href: "https://gitee.com/steveouyang/jdzb_server_koa2" },
]

/* 组件JSX */
const App = ({ username, doLogout }) => {
  navigate = useNavigate();
  const location = useLocation()

  const time = useClock()

  return (
    <Layout>

      <Header className="header">
        <img src="/logo.png" alt="logo" id='logo' style={{ width: 40, marginRight: 10 }} />

        <>{
          links.map(
            item => (
              <MyLink key={item.href} className='friendLinks' to={item.href}>{item.text}</MyLink>
            )
          )
        }</>


        {/* 自定义钟表 */}
        <div style={{ display: "inlineBlock", float: "right" }}>
          {time}
        </div>

        <div style={{ display: "inlineBlock", float: "right", margin: "0 10px" }}>
          欢迎回来: {username}
          <a onClick={doLogout} style={{ marginLeft: 5 }}>登出</a>
        </div>

      </Header>

      <Layout>

        <Sider width={200} className="site-layout-background">

          <Menu
            mode="inline"
            defaultSelectedKeys={['/admin/dashboard']}
            defaultOpenKeys={['/admin/dashboard']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
            onClick={onMenuClick}
            selectedKeys={[location.pathname]}
          />

        </Sider>

        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >

          <Content
            className="site-layout-background"
            style={{
              padding: 10,
              margin: "20px 0 0 0",
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>

        </Layout>

      </Layout>

    </Layout>
  );
}

/* 带有登录守卫功能的高阶App组件 */
export default WithAuth(App)
