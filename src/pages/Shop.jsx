import React from "react";
import { Card, Col, Row, Image } from "antd";
import { UseCart } from "../provider/CardProvider";
import Item from "../components/card/Item";
import { DeleteOutlined } from "@ant-design/icons";

const { Meta } = Card;

const Shop = () => {
  const { cart, CalculatePrice, removeItemFromArr } = UseCart();

  const handleDelete = (id) => {
    removeItemFromArr(id);
  };
  return (
    <Row gutter={[16, 16]}>
      <Col span={24} lg={{ span: 24 }}>
        <div style={{ marginTop: 20 }}>
          <h1>{`Total del carrito: $${CalculatePrice().toFixed(2)} `}</h1>
        </div>
      </Col>
      {cart.map((product) => (
        <div style={{ marginTop: 20 }}>
          <Col key={product.id}>
            <Card
              style={{ width: 300 }}
              cover={
                <Image
                  style={{ objectFit: "cover", alignItems: "center" }}
                  width={300}
                  height={300}
                  preview={{ mask: "Agrandar imagen" }}
                  src={product.image}
                />
              }
              actions={[
                <DeleteOutlined
                  style={{ fontSize: "26px", color: "red" }}
                  onClick={() => handleDelete(product.id)}
                />,
              ]}>
              <Meta
                title={product.title}
                description={`Precio: ${product.price}`}
              />
              <p>{`Cantidad: ${product.amount}`}</p>

              <p>{`Total: ${(product.amount * product.price).toFixed(2)}`}</p>
            </Card>
          </Col>
        </div>
      ))}
    </Row>
  );
};

export default Shop;
