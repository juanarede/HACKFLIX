import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./searchmovie.css"
import {  Row } from "react-bootstrap";


import Movie from "./Movie";

function Searchmovie() {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const handleChange = (newValue) => {
    setSearchInput(newValue);
  };

  useEffect(() => {
    const getTitle = async (title) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=d67bcd3a3d8923f77b47e3deeec6712b&query=${title}&page=1`
        );
        setMovies(response.data.results);
      } catch (error) {}
    };

    getTitle(searchInput);
    console.log(movies);
  }, [searchInput]);

  //if (searchInput.length === 0) return <CircularProgress />;
  return (
    <div className="container">
      <div className="SearchMovie">
        <input
          className="input-search"
          type="text"
          id="input-search"
          onChange={(event) => handleChange(event.target.value)}
        />
        <label class="search" for="input-search"></label>
        <p className="letresearch">SEARCH MOVIE</p>
      </div>

      <Row md={4}>
        {movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </Row>
    </div>
  );
}

export default Searchmovie;
