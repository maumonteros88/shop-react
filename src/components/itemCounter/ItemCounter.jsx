import { Button, Col, Row } from "antd";
import React from "react";

const ItemCounter = ({ handleAgregar, handleQuitar }) => {
  return (
    <Row>
      <Col>
        <Button onClick={handleAgregar}>Agregar</Button>
        <Button onClick={handleQuitar}>Quitar</Button>
      </Col>
    </Row>
  );
};

export default ItemCounter;
