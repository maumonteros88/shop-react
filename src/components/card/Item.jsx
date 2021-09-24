import { Card, Image, Rate } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import React from "react";

const { Meta } = Card;

const Item = ({ product, isLoading }) => {
  let history = useHistory();
  const handleDetail = (id) => {
    history.push(`/detalles/${id}`);
  };
  return (
    <Card
      loading={isLoading}
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
        <SearchOutlined style={{ fontSize: "26px" }} onClick={()=>handleDetail(product.id)} />,
      ]}>
      <Meta title={product.title} description={`Precio: $${product.price}`} />
      <Rate allowHalf  disabled value={product.rating.rate} />
    </Card>
  );
};

export default Item;
