import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

const Balance = () => {
  return (
    <div>
      <Container>
        <Row className="my-5 mx-auto">
          <Col className="mx-5">
            <p
              style={{
                color: "#312E81",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              Total Debit
            </p>
            <Row>
              <Col md={2}>
                <BsArrowUp color="#10B981" size="1.2rem" />
              </Col>

              <Col md={10} className="my-auto">
                <h6
                  style={{
                    color: "#10B981",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  $3000
                </h6>
              </Col>
            </Row>
          </Col>

          <Col className="mx-5">
            <p
              style={{
                color: "#312E81",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              Total Expense
            </p>
            <Row>
              <Col md={2}>
                <BsArrowDown color="#EF4444" size="1.2rem" />
              </Col>

              <Col md={10} className="my-auto">
                <h6
                  style={{
                    color: "#EF4444",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  $1500
                </h6>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Balance;
