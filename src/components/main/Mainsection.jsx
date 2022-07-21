import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./movie/Movie";
import InfiniteScroll from "react-infinite-scroll-component";

import { Rating } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

import "./mainsection.css";

import img1 from "../../assets/img/batman.jpg";
import img2 from "../../assets/img/Morbius.jpg";

import img4 from "../../assets/img/secretof.jpg";
import img5 from "../../assets/img/theexorcism.webp";

const Mainsection = () => {
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState(0);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [pageScroll, setPageScroll] = useState(1);
  //const filteredMovies = movies
  //.filter((movie) => Math.floor(movie.vote_average /2) +1 >= rating )

  useEffect(() => {
    const getMovies = async (page) => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=b71b2ef22c774be6c3d58ec28ed5c4ec&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
      );
      setMovies((prevState) => [...prevState, ...response.data.results]);
    };
    getMovies(pageScroll);
  }, [pageScroll]);

  useEffect(() => {
    if (rating === 0) return setFilteredMovies([...movies]);

    setFilteredMovies(
      movies.filter((movie) => Math.floor(movie.vote_average / 2) + 1 >= rating)
    );
  }, [rating, movies]);

  return (
    <>
      <Carousel>
        <Carousel.Item className="movie-container">
          <img
            className="d-block w-100 gradient-custom movie-container img-fluid"
            src={img1}
            alt="First slide"
          />

          <Carousel.Caption>
            <Container>
              <Row>
                <Col xs={12} lg={6} className=" text-start pb-5">
                  <h2 className="title-color">Batman(2022)</h2>
                  <hr className="bg-light" />
                  <p className="text-fluid d-none d-md-block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </p>

                  <button
                    type="button"
                    class="btn btn-outline-light col-md-4 col-12"
                  >
                    View More <i class="bi bi-plus-lg"></i>
                  </button>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="movie-container">
          <Image
            className="d-block w-100 gradient-custom movie-container img-fluid"
            src={img2}
            alt="Second slide"
            fluid
          />

          <Carousel.Caption>
            <Container>
              <Row>
                <Col xs={12} lg={6} className=" text-start pb-5">
                  <h2 className="title-color">Morbius</h2>
                  <hr className="bg-light" />
                  <p className="text-fluid d-none d-md-block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </p>
                  <button
                    type="button"
                    class="btn btn-outline-light col-md-4 col-12"
                  >
                    View More <i class="bi bi-plus-lg"></i>
                  </button>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="movie-container">
          <Image
            className="d-block w-100 gradient-custom movie-container img-fluid"
            src={img4}
            alt="First slide"
            fluid
          />
          <Carousel.Caption>
            <Container>
              <Row>
                <Col xs={12} lg={6} className=" text-start pb-5">
                  <h2 className="title-color ">Fantastic Animals:</h2>
                  <h4 className="title-color">The secrets of dumbledore</h4>
                  <hr className="bg-light" />
                  <p className="text-fluid d-none d-md-block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </p>
                  <button
                    type="button"
                    class="btn btn-outline-light col-md-4 col-12"
                  >
                    View More <i class="bi bi-plus-lg"></i>
                  </button>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="movie-container">
          <Image
            className="d-block w-100 gradient-custom movie-container img-fluid"
            src={img5}
            alt="First slide"
            fluid
          />
          <Carousel.Caption>
            <Container>
              <Row>
                <Col xs={12} lg={6} className="text-start pb-5">
                  <h2 className="title-color">The Exorcism of God</h2>
                  <hr className="bg-light" />
                  <p className="text-fluid d-none d-md-block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </p>

                  <button
                    type="button"
                    class="btn btn-outline-light col-md-4 col-12"
                  >
                    View More <i class="bi bi-plus-lg"></i>
                  </button>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newRating) => {
          setRating(newRating);
        }}
      />
      <InfiniteScroll
        dataLength={filteredMovies.length}
        next={() => setPageScroll(pageScroll + 1)} //pasar a siguiente pagina
        scrollThreshold={0.95}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <Container>
          <Row md={4}>
            {filteredMovies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </Row>
        </Container>
      </InfiniteScroll>
    </>
  );
};

export default Mainsection;
