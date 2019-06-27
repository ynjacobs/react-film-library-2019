import React from 'react';
const FilmPoster = ({poster_path}) => {
    let postUrl = `https://image.tmdb.org/t/p/w780/${poster_path}`;
    return(
        <figure className="film-poster">
                <img src={postUrl} alt="" />
            </figure>

    )
}


export default FilmPoster