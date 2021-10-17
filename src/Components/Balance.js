import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdAccountBalanceWallet } from "react-icons/md"; 
import { FaMoneyBillWave } from "react-icons/fa"; 
import { RiBillFill } from "react-icons/ri";

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
              Total Deposit
            </p>
            <Row>
              <Col md={2}>
                <FaMoneyBillWave color="#10B981" size="1.5rem" />
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
                <RiBillFill color="#EF4444" size="1.5rem" />
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
          <Col className="mx-5">
            <p
              style={{
                color: "#312E81",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              Current Balance
            </p>
            <Row>
              <Col md={2}>
                <MdAccountBalanceWallet color="#3B82F6" size="1.5rem" />
              </Col>

              <Col md={10} className="my-auto">
                <h6
                  style={{
                    color: "#3B82F6",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  $3000
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
