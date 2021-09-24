import { Card } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Meta } = Card;
const Item = () => {
  const handleDetail = () => {};
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SearchOutlined style={{ fontSize: "26px" }} onClick={handleDetail} />,
      ]}>
      <Meta title="Card title" description="Precio:" />
    </Card>
  );
};

export default Item;
