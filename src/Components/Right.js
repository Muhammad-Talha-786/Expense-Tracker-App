import React from 'react';
import { Container, Navbar, Button, Row, Col } from "react-bootstrap";

const Right = () => {
    return (
      <div>
        <Navbar variant="dark">
          <Container className="my-2">
            <p
              style={{
                color: "#8B5CF6",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
              className="my-auto"
            >
              Dashboard
            </p>
            <Button style={{ backgroundColor: "#8B5CF6" }}>
              {" "}
              + New Expense
            </Button>
          </Container>
        </Navbar>
      </div>
    );
}

export default Right;
