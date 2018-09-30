import React, { Component } from 'react';

import Data from '../libs/content';
import TributeInfo from './tribute-info';
import FilmGallery from './film-gallery';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div id="main">

        <h1 id="title">Wes Anderson</h1>

        <TributeInfo info={Data.info}/>

        <FilmGallery type="earlies" films={Data.earlyFilms}/>

        <FilmGallery type="late" films={Data.lateFilms}/>

      </div>
    );
  }

}

export default App;