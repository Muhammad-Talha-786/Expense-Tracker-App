import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const TransactionList = () => {
  return (
    <div style={{ height: "280px", overflow: "auto" }}>
      <Container>
        <Row
          className="mx-auto pt-3 mt-3 text-center"
          style={{
            borderLeft: "solid",
            borderBottom: "solid",
            borderRadius: "30px",
            borderColor: "#10B981",
            borderWidth: "0.1rem",
          }}
        >
          <Col md={3}>
            <p
              className="my-auto"
              style={{
                color: "#312E81",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              Income
            </p>
          </Col>
          <Col md={6}>
            <p
              className="pt-1"
              style={{
                color: "#312E81",
                fontSize: "0.5rem",
              }}
            >
              Monthly Salary
            </p>
          </Col>
          <Col md={3}>
            <p
              style={{
                color: "#312E81",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              $30000
            </p>
          </Col>
        </Row>

        {/* Testing Transactions Lists */}

        <Row
          className="mx-auto pt-3 mt-3 text-center"
          style={{
            borderLeft: "solid",
            borderBottom: "solid",
            borderRadius: "30px",
            borderColor: "#EF4444",
            borderWidth: "0.1rem",
          }}
        >
          <Col md={3}>
            <p
              className="my-auto"
              style={{
                color: "#312E81",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              Grocery
            </p>
          </Col>
          <Col md={6}>
            <p
              className="pt-1"
              style={{
                color: "#312E81",
                fontSize: "0.5rem",
              }}
            >
              Rice, Wheat, Pulses, Vegetables etc
            </p>
          </Col>
          <Col md={3}>
            <p
              style={{
                color: "#312E81",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              $1200
            </p>
          </Col>
        </Row>
        <Row
          className="mx-auto pt-3 mt-3 text-center"
          style={{
            borderLeft: "solid",
            borderBottom: "solid",
            borderRadius: "30px",
            borderColor: "#EF4444",
            borderWidth: "0.1rem",
          }}
        >
          <Col md={3}>
            <p
              className="my-auto"
              style={{
                color: "#312E81",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              Grocery
            </p>
          </Col>
          <Col md={6}>
            <p
              className="pt-1"
              style={{
                color: "#312E81",
                fontSize: "0.5rem",
              }}
            >
              Rice, Wheat, Pulses, Vegetables etc
            </p>
          </Col>
          <Col md={3}>
            <p
              style={{
                color: "#312E81",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              $1200
            </p>
          </Col>
        </Row>
        <Row
          className="mx-auto pt-3 mt-3 text-center"
          style={{
            borderLeft: "solid",
            borderBottom: "solid",
            borderRadius: "30px",
            borderColor: "#EF4444",
            borderWidth: "0.1rem",
          }}
        >
          <Col md={3}>
            <p
              className="my-auto"
              style={{
                color: "#312E81",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              Books
            </p>
          </Col>
          <Col md={6}>
            <p
              className="pt-1"
              style={{
                color: "#312E81",
                fontSize: "0.5rem",
              }}
            >
              Rice, Wheat, Pulses, Vegetables etc
            </p>
          </Col>
          <Col md={3}>
            <p
              style={{
                color: "#312E81",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              $200
            </p>
          </Col>
        </Row>
        <Row
          className="mx-auto pt-3 mt-3 text-center"
          style={{
            borderLeft: "solid",
            borderBottom: "solid",
            borderRadius: "30px",
            borderColor: "#EF4444",
            borderWidth: "0.1rem",
          }}
        >
          <Col md={3}>
            <p
              className="my-auto"
              style={{
                color: "#312E81",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              Bills
            </p>
          </Col>
          <Col md={6}>
            <p
              className="pt-1"
              style={{
                color: "#312E81",
                fontSize: "0.5rem",
              }}
            >
              Rice, Wheat, Pulses, Vegetables etc
            </p>
          </Col>
          <Col md={3}>
            <p
              style={{
                color: "#312E81",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              $100
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TransactionList;
