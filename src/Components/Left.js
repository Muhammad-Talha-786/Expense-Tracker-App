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
          color: "#fff",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        E<SiExpertsexchange color="#fff" size="4.5rem" className="my-5" />
        pense
      </div>

      <Container>
        <Row className="my-4">
          <Col md={3} className="my-auto">
            <MdOutlineDashboard color="#fff" size="1.5rem" />
          </Col>

          <Col md={9} className="my-auto">
            <h6
              className="my-auto"
              style={{
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Dashboard
            </h6>
          </Col>
        </Row>

        <Row className="my-4">
          <Col md={3} className="my-auto">
            <AiOutlineNodeExpand color= "#fff" size="1.5rem" />
          </Col>

          <Col md={9} className="my-auto">
            <h6
              className="my-auto"
              style={{
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Transits
            </h6>
          </Col>
        </Row>

        <Row className="my-4">
          <Col md={3} className="my-auto">
            <IoReceipt color="#fff" size="1.5rem" />
          </Col>

          <Col md={9} className="my-auto">
            <h6
              className="my-auto"
              style={{
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Invoices
            </h6>
          </Col>
        </Row>

        <Row className="my-4">
          <Col md={3} className="my-auto">
            <BsPersonLinesFill color="#fff" size="1.5rem" />
          </Col>

          <Col md={9} className="my-auto">
            <h6
              className="my-auto"
              style={{
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Clients
            </h6>
          </Col>
        </Row>

        <Row className="my-4">
          <Col md={3} className="my-auto">
            <AiTwotoneExperiment color="#fff" size="1.5rem" />
          </Col>

          <Col md={9} className="my-auto">
            <h6
              className="my-auto"
              style={{
                color: "#fff",
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
