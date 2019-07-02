import React, {useState} from 'react';
import Film from './Film';
import TMDB from './TMDB';
import Nav from './Nav';



const FilmDetails = ({film}) => {
  console.log('film',film);

  // let rd = '';
  let filmDetails;

  let backdropUrl;
  let posterUrl;
  let filmTitle;
  let filmTagline;
  let overview;


  if (film)
  {

console.log('I am hereeeeeee!');

    backdropUrl = `https://image.tmdb.org/t/p/w1280/${film.backdrop_path}`;
    posterUrl = `https://image.tmdb.org/t/p/w780/${film.poster_path}`;
    filmTitle = film.title;
    filmTagline = film.tagline;
    overview  = film.overview;

    filmDetails = (
      <div className="film-detail is-hydrated">
        <figure className="film-backdrop">
          <img src={backdropUrl} alt="" />
          <h1 className="film-title">{filmTitle}</h1>
        </figure>

        <div className="film-meta">
          <h2 className="film-tagline">{filmTagline}</h2>
          <p className="film-detail-overview">
            <img src={posterUrl} className="film-detail-poster" alt={filmTitle} />
            {overview}
          </p>
        </div>
      </div>

    );
    // overview = film.overview;
    // rd = film.release_date;
  }else{
    filmDetails = (
      <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
          <div className="film-detail">
            <p>
              <i className="material-icons">subscriptions</i>
              <span>No film selected</span>
            </p>
          </div>

          {/* <p>{overview}</p>
          <h2>{rd}</h2> */}

        </div>
    );
  }

  

  return (
    <div className="film-details">
      <h1 className="section-title">Details</h1>
      {filmDetails}
    </div>
  )
// const {_, __,___,____, overview, rd} = film;
};



export default FilmDetails;