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
      view: "Search",
      results: []
    }
  }

  componentDidMount = () => {
    this.fetchPets()
  }

  fetchPets = animalType => {
      fetch(`http://localhost:3000/pets/`)
        .then(resp => resp.json())
        .then(pets => this.setState({ pets }))
  }

  filterPetsByType = animalType => {
    const results = this.state.pets.filter(p => p.animal_type === animalType)
    debugger
    this.setState({ results })
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

  fetchSearchResults = (queries) => {
    fetch(`http://localhost:3000/pets/search/`, {
      method: "post",
      body: JSON.stringify(queries),
      headers: {'Content-Type':'application/json'}
    }).then(console.log('fetch search results'))
  }


  render = () => {
    const renderPets = this.state.results.map(pet => <PetRow pet={pet}/>)
    return (
      <div id="browser">
        <Nav switchView={this.switchView} fetchAnimalType={this.filterPetsByType}/>
        <Search switchView={this.switchView} pets={this.state.pets} fetchResults={this.filterPetsByType}/>
        {this.routeInnerView()}
        <table>
          <tr><th>Name</th><th>Type</th><th>Color</th><th>Breed</th></tr>
          {renderPets}
        </table>
      </div>
    )
  }
}
