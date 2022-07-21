import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import catpng from "../assets/img/cat_512.png"

import "./nofound.css"

function NoFound() {
  return (
    <>
    <Container style={{paddingTop:"10rem"}} >
      <Row>
        <Col xs={12} lg={6}>
            
            <h1 className='numberfour' style={{color:"white"}}>404</h1>
            <h1 className='notfound' style={{color:"white"}}>Not Found</h1>
        </Col>
        <Col   lg={6}>
        <img className='catpngfound d-none d-md-block' src={catpng} alt=""/>
        </Col>
      </Row>
    </Container>
    </>
   
  )
}

export default NoFound