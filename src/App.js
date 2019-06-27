import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

const App = () => {

  const originalFilms = TMDB.films;
    return (
      <main className="film-library">
      <FilmListing originalFilms={originalFilms} />

        <FilmDetails originalFilms={originalFilms} />
      </main>
    );
  }


export default App;
