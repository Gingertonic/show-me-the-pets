import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    nameInput: "",
    colorInput: "",
    breedInput: "",
    addressInput: "",
    genderInput: ""
  }

  // getSuggestions = value => {
  //   const inputValue = value.trim().toLowerCase();
  //   const inputLength = inputValue.length;
  //
  //   return inputLength === 0 ? [] : this.props.pets.filter(pet =>
  //     pet.name.toLowerCase().slice(0, inputLength) === inputValue
  //   );
  // };

  handleInputChange = async e => {
    await this.updateState(e)
    this.searchBy()
  }

  updateState = e => {
    const key = e.target.id
    this.setState({[key]: e.target.value})
  }

  searchBy = () => {
    const queries = {
      name: this.state.nameInput,
      color: this.state.colorInput,
      breed: this.state.breedInput,
      address: this.state.addressInput,
      gender: this.state.genderInput
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
        <select id="genderInput" onChange={this.handleInputChange}>
         <option value="M">Male</option>
         <option value="F">Female</option>
         <option value="N">Neuter</option>
         <option value="S">Spayed</option>
        </select>
        <input type="text" id="addressInput" placeholder="Address" onChange={this.handleInputChange} value={this.state.addressInput} />
      </div>
    )
  }
}
