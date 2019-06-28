import React, {useState} from 'react';
import Film from './Film';
import TMDB from './TMDB';
import Nav from './Nav';



const FilmDetails = ({film}) => {

  let overview  = '';
  let rd = '';

  if (film)
  {
    overview = film.overview;
    rd = film.release_date;
  }

  // const {_, __,___,____, overview, rd} = film;

return(
<div className="film-details">
          <h1 className="section-title">DETAILS</h1>

          <p>{overview}</p>
          <h2>{rd}</h2>

        </div>

);

};



export default FilmDetails;