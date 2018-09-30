import React from 'react';

import FilmCard from './film-card';

const FilmGallery = ({ type, films }) => {

  const cards = films.map(film => <FilmCard key={film.year} film={film}/>)

  return (
    <div id="film-gallery" className={type}>
      {cards}
    </div>
  );
};

export default FilmGallery;
