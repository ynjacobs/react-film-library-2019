import React from 'react';

const Faves  = ({onFavClick}) => {
    
    const handleClick = (event) => {
        event.stopPropagation();
        console.log('Fave was clicked');
        
        onFavClick()
        
    }
    
    return (
        <div className='film-row-fave add_to_queue' >
               <p className="material-icons" onClick={handleClick} > + </p>               
        </div>
    )
}

export default Faves;