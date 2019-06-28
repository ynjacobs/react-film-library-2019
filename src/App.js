import React, { Component , useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

const App = () => {

let [faves, setFaves] = useState([]);
let [detailedFilm, setDetailedFilm] = useState();

//TMDB.films

const onFavClick = (film) => {

const favCopy = faves.slice();
const filmIndex = faves.indexOf(film);

if(faves.includes(film)){
  
console.log('remove', film);
favCopy.splice(filmIndex, 1)
  setFaves(favCopy);


}
else
{
console.log('add', film);
setFaves([...faves, film]);
}

  };


  const handleDetails = (film) => {
    console.log('handle details:', film.overview);
    setDetailedFilm(film);
    
}

  // const originalFilms = TMDB.films;

    return (
      <main className="film-library">
      <FilmListing faves={faves} onFavClick={onFavClick} handleDetails={handleDetails} />

        <FilmDetails film={detailedFilm} />
      </main>
    );
  }


export default App;
