import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const AddTransaction = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Transaction
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Transaction Category</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter the title of transaction."
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Transaction Amount</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter the transaction amount."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="text-center mx-auto">
          <Button style={{ backgroundColor: "#8B5CF6" }} onClick={props.onHide}>
            Add Transaction
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddTransaction;
