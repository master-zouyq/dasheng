import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { RouteComponentProps } from 'react-router';
import Iconfont from '@/components/IconFont';
import styles from './index.less';
import lsm from '@/assets/imgs/lsm.png';

const { Header, Sider, Content, Footer } = Layout;

const BasicLayout: React.FC<RouteComponentProps> = props => {
  useEffect(() => {}, []);
  return (
    <Layout className={styles.root}>
      <Header className={styles.header}>
        <span></span>
        <Menu className={styles.menu} mode="horizontal">
          <Menu.Item key="1">首页</Menu.Item>
          <Menu.Item key="2">框架学习</Menu.Item>
          <Menu.Item key="3">小游戏</Menu.Item>
          <Menu.Item key="4">样式模版</Menu.Item>
          <Menu.Item key="5">算法学习</Menu.Item>
          <Menu.Item key="5">移动端</Menu.Item>
          <Menu.Item key="6">问题纪录</Menu.Item>
          <Menu.Item key="7">测试</Menu.Item>
        </Menu>
        <div className={styles['info-container']}>
          <img src={lsm} alt="lsm" className={styles['logo-info']} />
          <span className={styles['user-name']}>邹亚晴</span>
        </div>
      </Header>
      <Content className={styles.content}>{props.children}</Content>
      <Footer className={styles.foot}>
        <Iconfont type="iconqq" className={styles['font-style']} />
        <Iconfont type="iconwe-chat" className={styles['font-style']} />
      </Footer>
    </Layout>
  );
};

export default BasicLayout;
