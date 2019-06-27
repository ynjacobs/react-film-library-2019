import React from 'react';
import FilmPoster from './FilmPoster';

const Film = ({film}) => {
/**
 * 
 *  "id": 346364,
          "title": "It",
          "poster_path": "/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
          "backdrop_path": "/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg",
          "overview": "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
          "release_date": "2017-09-05"
 */
    let {id, title, poster_path, _, overview, release_date} = film;

const zYear = new Date(release_date).getFullYear();

    return (
        <div className="film-row">
            <FilmPoster poster_path={poster_path}/>
            <div className="film-summary">
                <h1>{title}</h1>
                <p>{zYear}</p>
            </div>
        </div>
    );
};

export default Film;

