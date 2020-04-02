import React, { Component } from 'react';

class Gif extends Component {
  selected = () => {
    this.props.selectGif(this.props.id);
  }

  render () {
    const src = `https://media2.giphy.com/media/${ this.props.id }/giphy.gif`;

    if (!this.props.id) {
      return <h2>✨ Search for a gif and click on it ✨ </h2>;
    }
    return (
      <img src={src} alt="" className="gif" onClick={ this.selected } />
    );
  }
}

export default Gif;
