import React, { useState } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import AddTransaction from './AddTransaction';

const Header = () => {

  const [modalShow, setModalShow] = useState(false);

    return (
      <div className="mt-3">
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
            <AddTransaction
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            
            <Button
              style={{ backgroundColor: "#8B5CF6" }}
              onClick={() => setModalShow(true)}
            >
              {" "}
              + New Expense
            </Button>
          </Container>
        </Navbar>
      </div>
    );
}

export default Header;
