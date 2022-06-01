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
                  LIST USER
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Username</th>
                      <th className="border-0">First name</th>
                      <th className="border-0">Last name</th>
                      <th className="border-0">Phone</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>MinhTQ</td>
                      <td>Minh</td>
                      <td>Tham Quang</td>
                      <td>0123456789</td>
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
