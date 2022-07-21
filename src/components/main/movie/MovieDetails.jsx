import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import "./movieDetail.css"
import { Col, Container, Image, Row } from "react-bootstrap";


function MovieDetails() {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const { poster_path, backdrop_path, original_title,overview, vote_average, release_date,runtime  } = movie;
  const posterpath = "https://image.tmdb.org/t/p/original" + poster_path;

  useEffect(() => {
    const getMovies = async (id) => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b71b2ef22c774be6c3d58ec28ed5c4ec`
      );
      setMovie(response.data);
    };
    getMovies(params.id);
  }, []);

  const backdroppath = "https://image.tmdb.org/t/p/original" + backdrop_path;

  return (
    <div>
    <div className="details-container">
     <img className="movie-detailsimg movie-container" src={backdroppath} alt=""></img>
     </div>

    <Container> 
      <Row className="detailss" >
      <Col xs={12} lg={6}>
        <Image className="poster-moviee" src={posterpath} alt="" fluid/>

      </Col>
      <Col style={{paddingTop:"2rem"}} xs={12} lg={5}>
      <h3 className="title-movieoriginal text-start">{original_title}</h3>
      <hr className="bg-light"/>
      <p className="ratingdate text-start">Rating: {vote_average}⭐|{runtime}min  {release_date}</p>
      <p className="detail-movies text-start">{overview}</p>
      <p className="text-start" ><button className="btn-viewmore ">Watch Movie</button></p>
      
       
      

      </Col>

      </Row>
      </Container>
    </div>
  );
}



export default MovieDetails;
