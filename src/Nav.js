import React from 'react';

const Nav = ({handleFilter}) => {

const filter = (event, keyword) => {
    // event.stopPropagation();

console.log(event);
console.log(keyword);

handleFilter(keyword);
};



    return (
        <nav>
            <button onClick={(event) => { filter(event, 'all') }}>
                All
            </button>
            <button onClick={(event) => { filter(event, 'faves') }}>
                Faves
            </button>
        </nav>

    );
};

export default Nav;