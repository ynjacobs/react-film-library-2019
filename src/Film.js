import React from 'react';
import FilmPoster from './FilmPoster';
import Faves from './Faves';

const Film = ({film, onFavClick, handleDetails}) => {

    let {id, title, poster_path, _, overview, release_date} = film;

const zYear = new Date(release_date).getFullYear();


// const handleIntDetails = (film) => {
//     handleDetails(film);  
// };


    return (
        <div className="film-row" onClick={ () => handleDetails(film) } >
            <FilmPoster poster_path={poster_path}/>
            <div className="film-summary">
                <h1>{title}</h1>
                <p>{zYear}</p>
            </div>
            <Faves onFavClick={() => onFavClick(film)} />
        </div>
    );
};

export default Film;

