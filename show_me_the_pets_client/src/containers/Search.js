import React, { Component } from 'react';
import Nav from '../components/Nav'

export default class Search extends Component {
  render = () => {
    return (
      <div id="search">
        Enter one or more search terms to find a pet!<br/>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Color" />
        <input type="text" placeholder="Breed" />
        <input type="text" placeholder="Location" />
        <button>Search</button>
      </div>
    )
  }
}
