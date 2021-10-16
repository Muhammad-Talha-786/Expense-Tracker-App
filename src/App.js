import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Left from "./Components/Left";
import Right from "./Components/Right";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          {/* Left Section ----> Navigation Bar */}
          <Col md={2}>
            <Left />
          </Col>

          {/* Right Section ----> Expense Tracker UI */}
          <Col md={10} style={{ backgroundColor: "#EEF2FF", height: "100vh" }}>
            <Right />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
