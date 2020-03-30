import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: "",
    };
  }

  search = (query) => {
    giphy("v4M0aDfmfszIrbk66LUbzxSwwa6DmlSg").search({
      q: query,
      rating: 'g',
      limit: '10',
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  };

  selection = (id) => {
    this.setState({
      selectedGif: id
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selection} />
        </div>
      </div>
    );
  }
}

export default App;
