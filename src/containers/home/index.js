import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useLocation, Switch, Route, NavLink} from 'react-router-dom';
import { getText, setSidebarCollapse } from './actions';
import { Layout, Menu } from 'antd';
import './index.css';
import { useEffect, useRef } from 'react';
import routerConfig from '@/router/routerConfig';
import RouterGuard from '@/router/routerGuard';
import React from 'react'

const { Header, Content, Sider } = Layout;

function App(props) {
  // const { location } = props;
  
  const {pathname} = useLocation();
  const routeArr = routerConfig.find((route) => route.path === '/home').routes
  const t = useRef();
  t.current = props
  useEffect(() => {
    console.log(1);
    // (function test() {
    // const location = useLocation();
    if (pathname === '/test') {
      // props.getText();
      t.current.getText();
    }
    // })()
  }, [pathname]);
  const onCollapse = () => {
    props.setSidebarCollapse(!props.collapsed);
  };
  const onSideClick = e => {
    console.log(e);
    if (e.key === '/test') {
      props.getText();
    }
  }
  return (
    <Layout style={{ height: '100vh' }}>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          height: '48px',
          lineHeight: '48px',
          padding: 0,
        }}
        className="header"
      >
        <div className="logo"></div>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">nav1</Menu.Item>
          <Menu.Item key="2">nav2</Menu.Item>
          <Menu.Item key="3">nav3</Menu.Item>
        </Menu>
      </Header>
      <Layout style={{ marginTop: '48px' }}>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
          width={200}
          className="site-layout-background"
          collapsible
          collapsed={props.collapsed}
          onCollapse={onCollapse}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={[pathname]}
            style={{ height: '100%', borderRight: 0 }}
            onClick={onSideClick}
          >
            <Menu.Item key="/popular">
              <NavLink to="/home/popular" activeClassName="selected">
                Popular
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/recent">
              <NavLink to="/home/recent" activeClassName="selected">
                Recent
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/home">
              <NavLink to="/home" activeClassName="selected">
                Home
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ paddingLeft: props.collapsed ? '80px' : '200px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            
              <Switch>
                {routeArr.map((route, i) => (
                  <Route
                    key={i}
                    path={route.path}
                    render={() => {
                      return <RouterGuard {...route} />
                    }}
                  />
                ))}
              </Switch>
            
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

function mapStateToProps(state) {
  return {
    textData: state.home.text,
    collapsed: state.home.siderCollapse
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getText,
      setSidebarCollapse
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
