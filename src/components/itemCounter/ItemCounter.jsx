import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";

const ItemCounter = ({ handleAgregar, handleQuitar }) => {
  return (
    <Row>
      <Col>
        <Button icon={<PlusCircleOutlined style={{color:'#00AB06'}} />}onClick={handleAgregar}>Agregar</Button>
        <Button icon={<MinusCircleOutlined style={{color:'#AD2B00'}} />}onClick={handleQuitar}>Quitar</Button>
      </Col>
    </Row>
  );
};

export default ItemCounter;
