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
                  <a href="#" style={{ color: "black" }}>
                    Add new
                  </a>
                </p>
                <form>
                  <select style={{ fontSize: "20px", borderStyle: "hidden", borderWidth: "5px" }}>
                    <option value="Ford">Vong 1</option>
                    <option value="Volvo">Vong 2</option>
                    <option value="Fiat">Vong 3</option>
                  </select>
                </form>

              </Card.Header>
              <Card.Body>

                <div class="typo-line">
                  <p class="category">
                    Time:
                    <hr/>
                    Day: 31/05/2022
                  </p>
                  <div class="row">
                    <div class="col-md-6">
                      <h3>Ho Chi Minh Club VS Ha Noi Club</h3>
                      <hr></hr>
                      <blockquote>
                        <p>Thong Nhat Stadium</p>
                      </blockquote>
                    </div>
                    <div class="col-md-6">
                      <h3>Luong ve</h3>
                      <blockquote>
                        <p>200/<cite card-title="Source card-title"> 500</cite>
                          <i className="nc-icon nc-align-center" style={{ marginLeft: "200px", color: "black", fontSize: "20px" }}>View detail</i>
                        </p>
                      </blockquote>
                    </div>

                  </div>
                </div>
                <div className="typography-line">
                  <h3>
                    <span style={{ fontSize: "20px", fontFamily: "Arial, Helvetica, sans-seri" }}>
                      Time:
                      <br></br>
                      <hr />
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
                  <blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    </p>
                    <small>Steve Jobs, CEO Apple</small>
                  </blockquote>
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

                <div class="typo-line">
                  <p class="category">Blockquotes</p>
                  <div class="row"><div class="col-md-6">
                    <h5>Default Blockquote</h5>
                    <blockquote>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    </blockquote></div>
                    <div class="col-md-6">
                      <h5>Blockquote with Citation</h5>
                      <blockquote>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <small>Someone famous in
                          <cite card-title="Source card-title"> Source card-title
                          </cite>
                        </small>
                      </blockquote>
                    </div>
                  </div>
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
