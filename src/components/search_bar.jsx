import React, { Component } from 'react';

class SearchBar extends Component {

  Query = (event) =>{
    console.log(event.target.value);
  }

  render () {
    return (
      <input type="text"className="form-control form-search" onChange={this.Query}/>
    );
  }
}

export default SearchBar;
