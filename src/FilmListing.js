import React, {useState} from 'react';
import Film from './Film';

const FilmListing = ( {originalFilms}) => {

let [films, setFilms] = useState(originalFilms);

console.log('films', films);

function myFunc(film, index)
{
    return <Film film={film} /> 
}

const ourFilms = films.map(myFunc);

return(
<div className="film-list">
          <h1 className="section-title">FILMS</h1>

            {ourFilms}
          
        </div>

);

};



export default FilmListing;