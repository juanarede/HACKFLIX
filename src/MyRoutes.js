import { Routes, Route } from 'react-router-dom'
import MovieDetails from './components/main/movie/MovieDetails'

import Contact from './components/header/Contact'
import About from   './components/header/About'
import Mainsection from './components/main/Mainsection'
import NoFound from './components/NoFound'
import Searchmovie from './components/main/movie/Searchmovie'
import Pelicula from './components/main/Pelicula'



function MyRoutes() {
  return (
    <Routes>
     
      <Route path="/" element={ <Mainsection /> } />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/pelicula/:id" element={<Pelicula />} />
      <Route path="/search" element={<Searchmovie/>}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<NoFound/>} />
    </Routes>
  );
}
export default MyRoutes;

