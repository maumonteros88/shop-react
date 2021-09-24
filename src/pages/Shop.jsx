import React, { useEffect } from "react";
import {
  Card,
  Col,
  Row,
  Image,
  Button,
  notification,
  Popconfirm,
  message,
} from "antd";
import { UseCart } from "../provider/CardProvider";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";

const { Meta } = Card;

const Shop = () => {
  const { cart, CalculatePrice, removeItemFromArr, deleteAllCart } = UseCart();

  let history = useHistory();

  const handleDelete = (id) => {
    removeItemFromArr(id);
  };

  useEffect(() => {
    if (cart.length === 0) {
      history.push("/");
    }
  }, [cart, history]);

  const handleDeleteAll = (key) => {
    deleteAllCart();
    notification.close(key);
  };

  const handleSendMessage = () => {
    message.info("El carrito no se borrara");
  };

  const openNotification = () => {
    const key = "open";
    const btn = (
      <Button
        danger
        type="primary"
        size="small"
        onClick={() => handleDeleteAll(key)}>
        Confirmar
      </Button>
    );
    notification.open({
      message: "Esta seguro de borrar?",
      description:
        "Recuerde que si confirma, se eliminara todos los productos que selecciono",
      btn,
      key,
      onClose: handleSendMessage,
    });
  };
  return (
    <Row gutter={[16, 16]}>
      <Col span={24} lg={{ span: 24 }}>
        <Row justify="end">
          <Button
            icon={<ShoppingCartOutlined />}
            onClick={openNotification}
            danger
            type="primary">
            Borrar todo el carrito
          </Button>
        </Row>
        <div style={{ marginTop: 20 }}>
          <h1>{`Total del carrito: $${CalculatePrice().toFixed(2)} `}</h1>
        </div>
      </Col>
      {cart.map((product) => (
        <div key={product.id} style={{ marginTop: 20 }}>
          <Col>
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
                <>
                  <Popconfirm
                    title="Esta seguro que desea borrar este producto?"
                    onConfirm={() => handleDelete(product.id)}
                    okText="Si"
                    cancelText="No">
                    <DeleteOutlined
                      style={{ fontSize: "26px", color: "red" }}
                    />
                  </Popconfirm>
                </>,
              ]}>
              <Meta title={product.title} />
              <p>{`Precio: $${product.price}`}</p>
              <p>{`Cantidad: ${product.amount}`}</p>
              <p>{`Total: $${(product.amount * product.price).toFixed(2)}`}</p>
            </Card>
          </Col>
        </div>
      ))}
    </Row>
  );
};

export default Shop;
