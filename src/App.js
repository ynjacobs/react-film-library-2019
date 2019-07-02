import React, { Component , useState } from 'react';
import axios from 'axios'
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
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    console.log(url);
    
      axios.get(url).then(response => {
          console.log(response.data) // take a look at what we get back!
          // film = response.data;
          setDetailedFilm(response.data);

      }).catch(error => {
        console.log(error);
        

      })
          // console.log('handle details:', film.overview);
          // setDetailedFilm(film);
          
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
