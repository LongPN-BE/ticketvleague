import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";



function Typography() {
  return (
    <>
      <Container fluid>


        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                {/* <Card.Title as="h4" style={{textalign:"center"}}>Lich thi dau</Card.Title> */}
                <h3 style={{ color: "red", fontWeight: "bold" }}>
                  Lich thi dau
                </h3>

                <p className="text-danger" style={{ fontSize: "20px" }}>
                  <a href="#" style={{ marginLeft: "1175px", color: "black" }}>
                    Add new <i className="nc-icon nc-simple-add" style={{ marginLeft: "1200px", color: "black", fontSize: "30px" }}></i>
                  </a>
                </p>
                <form>
                  <select style={{ fontSize: "20px" }}>
                    <option value="Ford">Vong 1</option>
                    <option value="Volvo">Vong 2</option>
                    <option value="Fiat">Vong 3</option>
                  </select>
                </form>

              </Card.Header>
              <Card.Body>
                <div className="typography-line">
                  <h1>
                    <span>Header 1</span>
                    The Life of Light Bootstrap Dashboard React
                  </h1>
                </div>
                <div className="typography-line">
                  <h2>
                    <span>Header 2</span>
                    The Life of Light Bootstrap Dashboard React
                  </h2>
                </div>
                <div className="typography-line">
                  <h3>
                    <span style={{ fontSize: "20px" , fontFamily:"Arial, Helvetica, sans-seri"}}>
                      Time:
                      <br></br>
                      <br></br>
                      Day: 31/05/2022
                    </span>
                    Ho Chi Minh Club VS Ha Noi Club
                    <small style={{ marginLeft: "40px" }}>Thong Nhat Stadium</small>

                  </h3>

                </div>
                <div className="typography-line">

                </div>
                <div className="typography-line">
                  <h5>
                    <span>Header 5</span>
                    The Life of Light Bootstrap Dashboard React
                  </h5>
                </div>
                <div className="typography-line">
                  <h6>
                    <span>Header 6</span>
                    The Life of Light Bootstrap Dashboard React
                  </h6>
                </div>
                <div className="typography-line">
                  <p>
                    <span>Paragraph</span>I will be the leader of a company that
                    ends up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus. I think
                    that’s a responsibility that I have, to push possibilities,
                    to show people, this is the level that things could be at.
                  </p>
                </div>
                <div className="typography-line">
                  <span>Quote</span>
                  <blockquote>
                    <p className="blockquote blockquote-primary">
                      "I will be the leader of a company that ends up being
                      worth billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus. I think that’s a
                      responsibility that I have, to push possibilities, to show
                      people, this is the level that things could be at."{" "}
                      <br></br>
                      <br></br>
                      <small>- Noaa</small>
                    </p>
                  </blockquote>
                </div>
                <div className="typography-line">
                  <span>Muted Text</span>
                  <p className="text-muted">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Primary Text</span>
                  <p className="text-primary">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Info Text</span>
                  <p className="text-info">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Success Text</span>
                  <p className="text-success">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Warning Text</span>
                  <p className="text-warning">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Danger Text</span>
                  <p className="text-danger">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <h2>
                    <span>Small Tag</span>
                    Header with small subtitle <br></br>

                  </h2>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Typography;
