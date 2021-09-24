import { Card, Image } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Meta } = Card;

const Item = ({ product, isLoading }) => {
  const handleDetail = () => {};
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
        <SearchOutlined style={{ fontSize: "26px" }} onClick={handleDetail} />,
      ]}>
      <Meta title={product.title} description={`Precio: ${product.price}`} />
    </Card>
  );
};

export default Item;
