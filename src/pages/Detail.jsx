import { ShoppingOutlined } from "@ant-design/icons";
import {
  Col,
  Row,
  Image,
  message,
  Skeleton,
  Divider,
  Button,
  Rate,
} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import ItemCounter from "../components/itemCounter/ItemCounter";
import { UseCart } from "../provider/CardProvider";

const Detail = () => {
  const [dataProducto, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  
  const { AddToCart } = UseCart();

  const { id } = useParams();
  let history = useHistory();

  const handleAgregar = () => {
    if (counter < dataProducto[0]?.rating.count) {
      const value = counter + 1;
      setCounter(value);
    } else {
      message.warning("ha llegado al maximo stock");
    }
  };
  const handleQuitar = () => {
    if (counter > 0) {
      const value = counter - 1;
      setCounter(value);
    }
  };

  const handleAdd = () => {
    const dataToSend = { ...dataProducto[0], amount: counter };
    AddToCart(dataToSend);
    message.success("Producto agregado", 3);
    history.push("/carrito");
  };

  useEffect(() => {
    const handleGetProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        const takeResponse = response.data;
        const filterProduct = takeResponse.filter(
          (product) => product.id === parseInt(id)
        );
        setData(filterProduct);
      } catch (error) {
        message.error("Error al consultar productos");
      } finally {
        setIsLoading(false);
      }
    };
    handleGetProducts();
  }, []);

  if (isLoading)
    return (
      <Row justify="center">
        <Col span={24}>
          <div style={{ height: "100", marginTop: 50 }}>
            <Skeleton avatar paragraph={{ rows: 15 }} />
          </div>
        </Col>
      </Row>
    );

  return (
    <Row justify="center">
      <Col span={24} lg={{ span: 12 }}>
        <div style={{ marginTop: 20 }}>
          <Image
            style={{ objectFit: "scale-down", alignItems: "center" }}
            width={600}
            height={600}
            src={dataProducto[0]?.image}
          />
        </div>
      </Col>
      <Col span={24} lg={{ span: 12 }}>
        <div style={{ marginTop: 20 }}>
          <h1>{dataProducto[0]?.title}</h1>
          <Divider />
          <h3>{dataProducto[0]?.description}</h3>
          <Divider />
          <h3>{`Precio: $${dataProducto[0]?.price}`}</h3>
          <h3>{`Cantidad: ${counter}`}</h3>
          <h3>{`Stock: ${dataProducto[0]?.rating.count}`}</h3>
          <Rate allowHalf defaultValue={dataProducto[0]?.rating.rate} />
          <Divider />
          <ItemCounter
            handleAgregar={handleAgregar}
            handleQuitar={handleQuitar}
          />
          <div style={{ marginTop: 50, alignItems: "center" }}>
            {counter !== 0 && (
              <Button
                icon={<ShoppingOutlined />}
                type="primary"
                onClick={handleAdd}>
                Agregar al carrito
              </Button>
            )}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Detail;
