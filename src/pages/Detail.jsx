import { Col, Row, Image, message, Skeleton, Divider } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Detail = () => {
  const [dataProducto, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  console.log(dataProducto);
  useEffect(() => {
    const handleGetProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=15"
        );
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
        <Skeleton avatar paragraph={{ rows: 4 }} />
      </Row>
    );

  return (
    <Row justify="center">
      <Col span={24} lg={{ span: 12 }}>
        <div>
          <Image
            style={{ objectFit: "scale-down", alignItems: "center" }}
            width={600}
            height={600}
            src={dataProducto[0]?.image}
          />
        </div>
      </Col>
      <Col span={24} lg={{ span: 12 }}>
        <div>
          <h1>{dataProducto[0]?.title}</h1>
          <Divider/>
          <h3>{dataProducto[0]?.description}</h3>
        </div>
      </Col>
    </Row>
  );
};

export default Detail;
