import React, { Component } from 'react'

export default class Pet extends Component {
  state = {}

  getName = () => {
    return (this.props.pet.name !== "") ? `Meet ${this.props.pet.name}` : `I don't have a name yet!`
  }

  getColor = () => {
    return (this.props.pet.color !== "Unknown") ? this.props.pet.color : null;
  }

  componentDidMount = () => {
    this.getBreedCode()
  }

  getBreedCode = () => {
    const breedSubString = this.props.pet.breed.substring(0, 2)
    const animal = this.props.pet.animal_type.toLowerCase()
    const key = animal === 'dog' ? "829327e3-a467-4ed9-9002-383fe3df486c" : "36ff3545-500e-4d64-bcf7-4003b02f18df"
    fetch(`https://api.the${animal}api.com/v1/breeds/search?q=${breedSubString}`, {
      headers: {"x-api-key": key}
    })
      .then(resp => resp.json())
      .then(breed => this.getImage(breed[0].id, animal, key))
  }

  getImage = (breedCode, animal, key) => {
    fetch(`https://api.the${animal}api.com/v1/images/search?breed_ids=${breedCode}&limit=1&api_key=36ff3545-500e-4d64-bcf7-4003b02f18df`, {
      headers: {"x-api-key": key}
    })
      .then(resp => resp.json())
      .then(results => this.setState({image: results[0].url}))
  }

  renderImage = () => {
    return (this.state.image) ? <img className="pet-pic" src={this.state.image} alt="pet pic"/> : null;
  }

  render = () => {
    return(
      <div id="show-pet">
        <h1>{this.getName()}</h1>
        {this.renderImage()}
        <p>{this.props.pet.gender}, {this.getColor()} {this.props.pet.breed}</p>
        <p>{this.props.pet.address}</p>
        <div className="nav-link" onClick={() => this.props.switchView('search')}>Back to Results</div>
      </div>
    )
  }
}
