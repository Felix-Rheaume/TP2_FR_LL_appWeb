import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ContainerBase extends React.Component {
  render() {
    return (
      <Container>
        <Row className='justify-content-md-center'>
          <Col className='col-lg-10 col'>{this.props.children}</Col>
        </Row>
      </Container>
    );
  }
}

export default ContainerBase;
