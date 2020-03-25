import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  render () {
    const gifs = [
     { id: 'tE4wZNmBLzpPa'},
      {id: 'l4pTmhlcbSrr5DgOI'}];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="tE4wZNmBLzpPa"/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
