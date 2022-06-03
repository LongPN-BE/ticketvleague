import React from "react";

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


function Login() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="8">
                        <Card>

                            <Card.Header>
                                <Card.Title as="h4" style={{}}>Sign in</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="5">
                                            <Form.Group>
                                                <label>Username</label>
                                                <Form.Control
                                                    defaultValue="MinhTQ "
                                                    disabled
                                                    placeholder="Company"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="px-1" md="3">
                                            <Form.Group>
                                                <label>Password</label>
                                                <Form.Control
                                                    defaultValue="*******"
                                                    placeholder="Username"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="5">
                                            <Form.Group>
                                                <label>Conrim password</label>
                                                <Form.Control
                                                    defaultValue="MinhTQ "
                                                    placeholder="Company"
                                                    type="password"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>First Name</label>
                                                <Form.Control
                                                    defaultValue="Minh"
                                                    placeholder="Company"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Last Name</label>
                                                <Form.Control
                                                    defaultValue="Tham Quang"
                                                    placeholder="Last Name"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <Form.Group>
                                                <label>Phone</label>
                                                <Form.Control
                                                    cols="80"
                                                    defaultValue="0123456789"
                                                    placeholder="Here can be your description"
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Button
                                        className="btn-fill pull-right"
                                        type="submit"
                                        variant="info"
                                    >
                                        Sign in
                                    </Button>
                                    <div className="clearfix"></div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="4">

                        <Card className="card-user">
                            
                            <Card.Header>
                                <Card.Title as="h4" style={{ textAlign: "center" }}>Login</Card.Title>
                            </Card.Header>
                            <div className="button-container mr-auto ml-auto">
                                <Button
                                    className="btn-simple btn-icon"
                                    href="#pablo"
                                    variant="link"
                                >
                                    <i className="fab fa-google-plus-square"> </i> Sign with google
                                </Button>
                            </div>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="5" >
                                            <Form.Group>
                                                <label>Username</label>
                                                <Form.Control
                                                    defaultValue="MinhTQ "
                                                    placeholder="Company"
                                                    type="text"
                                                    style={{ width: "300px" }}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="5">
                                            <Form.Group>
                                                <label>Password</label>
                                                <Form.Control
                                                    defaultValue="*******"
                                                    placeholder="Username"
                                                    type="password"
                                                    style={{ width: "300px" }}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Button
                                        className="btn-fill pull-right"
                                        type="submit"
                                        variant="info"
                                    >
                                        Login
                                    </Button>
                                </Form>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Login;