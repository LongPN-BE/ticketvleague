import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function MatchProfile() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Vòng Đấu</label>
                        <select name="rounds" id="rounds">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Time Start</label>
                        <Form.Control
                          defaultValue="3 Jun 2022, 02:02:36"
                          placeholder="Start time"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Time End</label>
                        <Form.Control
                          defaultValue="3 Jun 2022, 02:02:36"
                          placeholder="End time"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Đội 1</label>
                        <Form.Control
                          defaultValue="Ho Chi Minh Club"
                          placeholder="NameClub01"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      -
                    </Col>
                    <Col className="pl-1" md="5">
                      <Form.Group>
                        <label>Đội 2</label>
                        <Form.Control
                          defaultValue="Ha Noi Club"
                          placeholder="NameClub02"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Stadium</label>
                        <Form.Control
                          defaultValue="Thong Nhat Stadium"
                          placeholder="Stadium"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <Form.Group>
                        <label>Lượng vé</label>
                        <blockquote>
                          <p>200/<cite card-title="Source card-title"> 500</cite>
                          </p>
                        </blockquote>
                      </Form.Group>
                    </Col>
                    <Col md="6">
                      Active 
                      <Form.Control
                      type="checkbox"></Form.Control>
                    </Col>
                  </Row>

                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={
                    require("assets/img/photo-1431578500526-4d9613015464.jpeg")
                      .default
                  }
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg").default}
                    ></img>
                    <h5 className="title">Mike Andrew</h5>
                  </a>
                  <p className="description">michael24</p>
                </div>
                <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}
export default MatchProfile;