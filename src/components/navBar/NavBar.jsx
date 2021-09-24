import React from "react";
import { Layout, Menu, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { UseCart } from "../../provider/CardProvider";
import RoutesNavBar from "./routes/RoutesNavBar";

const { Header, Content, Footer } = Layout;

const NavBar = () => {
  const { cart } = UseCart();
  return (
    <>
      <Layout  className="layout">
        <Header style={{backgroundColor:"#56C3E1"}}>
          <div className="logo" />
          <Menu  style={{backgroundColor:"#56C3E1"}} mode="horizontal">
            <Menu.Item  key="home">
              <Link to="/" >Home</Link>
            </Menu.Item>
            <Menu.Item key="productos">
              <Link to="/productos" >Productos</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about" >Quienes somos</Link>
            </Menu.Item>
            <Menu.Item key="shop">
              <Link to="/carrito">
                <Badge count={cart ? cart.length : null}>
                  <ShoppingCartOutlined
                    style={{ fontSize: "20px" }}
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
