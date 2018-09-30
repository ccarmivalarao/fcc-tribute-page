import React from 'react';

const FilmCard = ({film}) => (
  <a href={film.url} target="_blank" id="tribute-link" className="card">

    <div id="img-div">
      <img src={film.img} alt="film-poster" id="image"/>

      <div id="img-caption">
        {film.year}
      </div>
    </div>

  </a>
);

export default FilmCard;