import React from 'react';
import { Layout, Menu } from 'antd';
import { RouteComponentProps } from 'react-router';

const { Header, Sider, Content, Footer } = Layout;

const BasicLayout: React.FC<RouteComponentProps> = props => {
  return (
    <Layout>
      <Sider>
        <div>MasterZyq</div>
        <Menu>
          <Menu.Item key="1">首页</Menu.Item>
          <Menu.Item key="2">tool</Menu.Item>
          <Menu.Item key="3">学习</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header>header</Header>
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
