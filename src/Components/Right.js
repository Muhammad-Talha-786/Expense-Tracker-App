import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import Balance from "./Balance";
import Graph from "./Graph";
import Transactions from "./Transactions";

const Right = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={8}>
            <Header />
            <hr/>
            <Balance />
            <Transactions/>
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
