import React, { Component } from 'react';
import Nav from '../components/Nav'

export default class Search extends Component {
  state = {
    nameInput: "",
    colorInput: "",
    breedInput: "",
    locationInput: ""
  }

  // getSuggestions = value => {
  //   const inputValue = value.trim().toLowerCase();
  //   const inputLength = inputValue.length;
  //
  //   return inputLength === 0 ? [] : this.props.pets.filter(pet =>
  //     pet.name.toLowerCase().slice(0, inputLength) === inputValue
  //   );
  // };

  handleInputChange = e => {
    const key = e.target.id
    this.setState({[key]: e.target.value})
  }

  searchBy = () => {
    const queries = {
      name: this.state.nameInput,
      color: this.state.colorInput,
      breed: this.state.breedInput,
      location: this.state.locationInput
    }
    this.props.fetchResults(queries)
  }

  render = () => {
    return (
      <div id="search">
        Enter one or more search terms to find a pet!<br/>
      <input type="text" id="nameInput" placeholder="Name" onChange={this.handleInputChange} value={this.state.nameInput}/>
        <input type="text" id="colorInput" placeholder="Color" onChange={this.handleInputChange} value={this.state.colorInput}/>
        <input type="text" id="breedInput" placeholder="Breed" onChange={this.handleInputChange} value={this.state.breedInput} />
        <input type="text" id="locationInput" placeholder="Location" onChange={this.handleInputChange} value={this.state.locationInput} />
        <button onClick={this.searchBy}>Search</button>
      </div>
    )
  }
}
