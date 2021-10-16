import React from "react";
import Header from "./Header";
import Balance from "./Balance";
import Graph from "./Graph";
import { Col, Container, Row } from "react-bootstrap";

const Right = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={8}>
            <Header />
            <Balance />
          </Col>
          <Col md={4}>
            <Graph />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Right;
