import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiExpertsexchange } from "react-icons/si";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineNodeExpand, AiTwotoneExperiment } from "react-icons/ai";
import { IoReceipt } from "react-icons/io5";
import { BsPersonLinesFill } from "react-icons/bs";

const Left = () => {
  return (
    <>
      <div
        className="text-center"
        style={{
          color: "#3730A3",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        E<SiExpertsexchange color="#6366F1" size="4.5rem" className="my-5" />
        pense
      </div>

      <Container>
        <Row className="my-4">
          <Col md={3} className="my-auto">
            <MdOutlineDashboard color="#3730A3" size="1.5rem" />
          </Col>

          <Col md={9} className="my-auto">
            <h6
              className="my-auto"
              style={{
                color: "#3730A3",
                fontWeight: "bold",
              }}
            >
              Dashboard
            </h6>
          </Col>
        </Row>

        <Row className="my-4">
          <Col md={3} className="my-auto">
            <AiOutlineNodeExpand color="#818CF8" size="1.5rem" />
          </Col>

          <Col md={9} className="my-auto">
            <h6
              className="my-auto"
              style={{
                color: "#818CF8",
                fontWeight: "bold",
              }}
            >
              Expenses
            </h6>
          </Col>
        </Row>

        <Row className="my-4">
          <Col md={3} className="my-auto">
            <IoReceipt color="#818CF8" size="1.5rem" />
          </Col>

          <Col md={9} className="my-auto">
            <h6
              className="my-auto"
              style={{
                color: "#818CF8",
                fontWeight: "bold",
              }}
            >
              Invoices
            </h6>
          </Col>
        </Row>

        <Row className="my-4">
          <Col md={3} className="my-auto">
            <BsPersonLinesFill color="#818CF8" size="1.5rem" />
          </Col>

          <Col md={9} className="my-auto">
            <h6
              className="my-auto"
              style={{
                color: "#818CF8",
                fontWeight: "bold",
              }}
            >
              Clients
            </h6>
          </Col>
        </Row>

        <Row className="my-4">
          <Col md={3} className="my-auto">
            <AiTwotoneExperiment color="#818CF8" size="1.5rem" />
          </Col>

          <Col md={9} className="my-auto">
            <h6
              className="my-auto"
              style={{
                color: "#818CF8",
                fontWeight: "bold",
              }}
            >
              Projects
            </h6>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Left;
