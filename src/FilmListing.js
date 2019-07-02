import React, { useState} from 'react';
import Film from './Film';
import TMDB from './TMDB';
import Nav from './Nav';


const FilmListing = ( {faves, onFavClick, handleDetails}) => {

let originalFilms = TMDB.films;
let [films, setFilms] = useState(originalFilms);

// console.log('films', films);

const handleFilter = (keyword) => {

if(keyword === 'all')
{
console.log('show all films');
setFilms(originalFilms);
}
else
{
    console.log('show only favs');
    setFilms(faves);
}

};


function myFunc(film, index)
{
    return <Film key={film.id} film={film} onFavClick={onFavClick} 
    handleFilter={handleFilter}  handleDetails={handleDetails} /> 
}

const ourFilms = films.map(myFunc) ;

return (
    <div className="film-details">
        <h1>Films</h1>
        <Nav handleFilter={handleFilter} />
        
        {ourFilms}
        
    </div>
)


};



export default FilmListing;