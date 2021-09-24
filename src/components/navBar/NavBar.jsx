import React from "react";
import { Layout, Menu, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import RoutesNavBar from "./routes/RoutesNavBar";

const { Header, Content, Footer } = Layout;

const NavBar = () => {
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">Quienes somos</Link>
            </Menu.Item>
            <Menu.Item key="shop">
              <Link to="/carrito">
                <Badge count={5}>
                  <ShoppingCartOutlined
                    style={{ fontSize: "20px", color: "white" }}
                  />
                </Badge>
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <RoutesNavBar />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Design ©2021 Created by Mauricio Monteros
        </Footer>
      </Layout>
    </>
  );
};

export default NavBar;
