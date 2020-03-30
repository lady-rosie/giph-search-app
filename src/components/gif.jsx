import React, { Component } from 'react';

class Gif extends Component {

  selected = () => {
    this.props.selectGif(this.props.id);
  }

  render (){
    const src =`https://media2.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.selected} />
    );
  }
}

export default Gif;
