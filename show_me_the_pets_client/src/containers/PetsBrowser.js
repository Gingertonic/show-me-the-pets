import React, { Component } from 'react';
import Nav from '../components/Nav'
import PetRow from '../components/PetRow'
import Location from '../components/Location'
import Breed from '../components/Breed'
import SearchResults from '../components/SearchResults'
import Search from '../containers/Search'

export default class PetsBrowser extends Component {
  constructor(props){
    super(props)
    this.state = {
      pets: [],
      view: "Search"
    }
  }

  componentDidMount = () => {
    this.fetchAnimalType('dogs')
  }


  fetchAnimalType = animalType => {
      fetch(`http://localhost:3000/pets/${animalType}`)
        .then(resp => resp.json())
        .then(pets => this.setState({ pets }))
  }

  switchView = view => {
    this.setState({ view })
  }

  routeInnerView = () => {
    let view;
    switch(this.state.view){
      case "SearchResults": view = <SearchResults />; break;
      case "Breed": view = <Breed />; break;
      case "Location": view = <Location />; break;
      default: return null;
    }
    return view
  }

  render = () => {
    const renderPets = this.state.pets.map(pet => <PetRow pet={pet}/>)
    return (
      <div id="browser">
        <Nav switchView={this.switchView} fetchDogs={this.fetchDogs} fetchCats={this.fetchDogs}/>
        <Search switchView={this.switchView}/>
        {this.routeInnerView()}
        <table>
          <tr><th>Name</th><th>Type</th><th>Color</th><th>Breed</th></tr>
          {renderPets}
        </table>
      </div>
    )
  }
}
