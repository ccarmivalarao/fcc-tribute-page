import React, { Component } from 'react';

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

        <TributeInfo />

        <FilmGallery type="screenplay"/>

        <FilmGallery type="short"/>

      </div>
    );
  }

}

export default App;