import { Col, Container, Image, Modal, Row } from "react-bootstrap";
import "./modal.css";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';




function ModalMovie({ show, handleClose, movie }) {
  const { poster_path } = movie;
  const posterpath = "https://image.tmdb.org/t/p/original" + poster_path;


  
  return (
    <Container>
    <Modal style={{borderRadius:"8px"}} show={show} onHide={handleClose}>
      <div className="bgcolorModal">
        <Modal.Header closeButton>
          <Modal.Title className="text-light text-fluid">
            {movie.original_title}
          </Modal.Title>
        </Modal.Header>
        <Container>
          <Row>
            <Col xs={4} >
              <Image className="posterModal" src={posterpath} alt="" fluid />
            </Col>
            <Col xs={8} >
              <Modal.Body className="text-light text-fluid text-start">
                {movie.overview}{" "}
                <p className="ratingMovie">Rating:{movie.vote_average} ⭐</p>
                <NavLink to={`/movie/${movie.id}`} ><button className="btn-viewmore">More Details</button></NavLink>
              
              </Modal.Body>
            </Col>
          </Row>
        </Container>
      </div>

    </Modal>
    </Container>
  );
}

export default ModalMovie;