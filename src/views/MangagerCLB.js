import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  return (
    <>
      <Container fluid>

        <Row>


          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">V-league 2022</Card.Title>
                <p className="card-category" style={{color:"red", fontWeight:"bold"}}>
                  LIST CLUB
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Stadium</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">Logo</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Ho Chi Minh</td>
                      <td>Thong Nhat</td>
                      <td>Thành phố Hồ Chí Minh</td>
                      <td><img src="https://upload.wikimedia.org/wikipedia/vi/thumb/f/f8/Hcmcfc-logo.png/400px-Hcmcfc-logo.png" width="50" height="50"></img></td>
                      <td>
                        <Button
                          className="btn-simple btn-link p-1"
                          type="button"
                          variant="info"
                        >
                          <i className="fas fa-edit"></i>

                        </Button>

                        <Button
                          className="btn-simple btn-link p-1"
                          type="button"
                          variant="danger"
                        >
                          <i className="fas fa-times"></i>
                        </Button>
                      </td>
                    </tr>

                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4" style={{color:"red", fontWeight:"bold"}}>Stadium</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">Capacity</th>
                      <th className="border-0">Updated</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Thong Nhat</td>
                      <td>Quận 10, Thành phố Hồ Chí Minh</td>
                      <td>Ho Chi Minh Club</td>
                      <td>
                        <Button
                          className="btn-simple btn-link p-1"
                          type="button"
                          variant="info"
                        >
                          <i className="fas fa-edit"></i>
                        </Button>

                        <Button
                          className="btn-simple btn-link p-1"
                          type="button"
                          variant="danger"
                        >
                          <i className="fas fa-times"></i>
                        </Button>
                      </td>
                    </tr>


                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </>

  );
}

export default TableList;
