import React, {useState} from 'react';
import FilmList from './FilmListing';
import FilmDetails from './FilmDetails'

const App = () => {
  const [faves, setFaves] = useState([])

  const onFaveToggle = (film) => {
    // console.log(film);
    const filmIndex = faves.indexOf(film);
    const favesCopy = faves.slice();
    if(faves.includes(film)){
      console.log('already inside faves list');
      // const remove = favesCopy.splice()
      favesCopy.splice(filmIndex, 1)
      setFaves(favesCopy);
      
    } else {
      console.log('lets add it in');
      // favesCopy.push(film)
      // setFaves([...favesCopy, film])
      // favesCopy.push(film)
      setFaves([...favesCopy, film])

      
    }
    console.log('faves list', faves);
    
    
  }
  return (
    <main className="film-library">

      <div className="film-list">
    <h1 className="section-title">Films</h1>
    <FilmList onFaveToggle={onFaveToggle} faves={faves}/>
      </div>

      <div className="film-details">
    <h1 className="section-title">Details</h1>
      </div>

    </main>
  );
}

export default App;
