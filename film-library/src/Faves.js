import React from 'react';
import TMDB from './TMDB'

const Faves  = ({onFaveToggle}) => {
    const handleClick = (event) => {
        event.stopPropagation();
        console.log('Fave was clicked');
        onFaveToggle()
        
    }
    return (
        <div className='film-row-fave add_to_queue' onClick={handleClick}>
                <p className="material-icons"> add_to_que</p>
        </div>
    )
}

export default Faves