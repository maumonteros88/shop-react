import { Row, Col, message, Skeleton } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "../card/Item";

const CardContainer = () => {
  const [dataproducto, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleGetProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=15"
        );
        setData(response.data);
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
    <Row gutter={[16, 16]}>
      {dataproducto.map((product) => (
        <div style={{ marginTop: 20 }}>
          <Col key={product.id}>
            <Item product={product} isLoading={isLoading} />
          </Col>
        </div>
      ))}
    </Row>
  );
};

export default CardContainer;
