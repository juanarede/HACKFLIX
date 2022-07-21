import React from "react";
import "./contact.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import imgContact from "../../assets/img/moviecontact.jpg";
import { Figure, Image } from "react-bootstrap";

function Contact() {
  return (
    <>
      <div className="container">
        <h2 className="contact-title">CONTACT</h2>
        <hr className="bg-light" />
      </div>

      <Container>
        <Row className="pt-5 text-start text-light">
          <Col xs={12} lg={5} style={{paddingBottom:"2rem"}}>
            <Form>
              <Row>
                <Col xs={12} lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Name" />
                  </Form.Group>
                </Col>
                <Col xs={12} lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>LastName</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your LastName"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your Email" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button variant="danger" type="submit">
                Submit
              </Button>
            </Form>
          </Col>

          <Col xs={12} lg={7} >
            <Image className=" imgcontact" src={imgContact} alt=""  fluid/>

            <p className="text-start  mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make . Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make .
            </p>
            <hr className=" bg-light" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
