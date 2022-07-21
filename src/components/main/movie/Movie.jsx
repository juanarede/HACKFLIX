//import movies from '../../../../services/movies.json'
import "./movie.css";
import { Col } from "react-bootstrap";
import ModalMovie from "../ModalMovie";
import { useState } from "react";


const Movie = ({ movie }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { poster_path  } = movie;
  const posterpath = "https://image.tmdb.org/t/p/original" + poster_path;

  
  
  
  return (
   <>
   
   
   
    <Col md={3} >
      <div className="container">
        <div className="row">
          
          <div className="moviesposter">
            <img
              className="item"
              onClick={setShow}
              
              src={posterpath}
              alt="movie-poster"
            />
            </div>
          
        </div>
      </div>
      <ModalMovie show={show} handleClose={handleClose} movie={movie} />
    </Col> 
    </>
    );
};

export default Movie;
