import React, { Component } from 'react';
import Nav from '../components/Nav'
import Pet from '../components/Pet'
import SearchResults from '../components/SearchResults'
import Search from '../containers/Search'

export default class PetsBrowser extends Component {
  constructor(props){
    super(props)
    this.state = {
      pets: [],
      view: "search",
      results: []
    }
  }

  componentDidMount = () => {
    this.fetchPets()
  }

  fetchPets = animalType => {
      fetch(`http://localhost:3002/pets/`)
        .then(resp => resp.json())
        .then(pets => this.setState({ pets }))
  }

  filterPetsByType = animalType => {
    const results = this.state.pets.filter(p => p.animal_type.match(new RegExp(animalType)))
    this.setState({ results, view: 'search' })
  }

  filterByMultiQuery = async queries => {
    await this.populateResults()
    const results = this.state.results.filter(p =>
      p.name.match(new RegExp(`^${queries.name}`, "i")) &&
      p.color.match(new RegExp(queries.color, "i")) &&
      p.breed.match(new RegExp(queries.breed, "i")) &&
      p.address.match(new RegExp(queries.address, "i")) &&
      p.gender.match(new RegExp(queries.gender))
    )
    this.setState({ results })
  }

  populateResults = () => {
    return (this.state.results.length === 0) ? this.filterPetsByType("") : null
  }

  showPet = petId => {
    const pet = this.state.pets.find(p => p.animal_id === petId)
    this.setState({selectedPet: pet, view: 'showPet'})
  }

  switchView = view => {
    this.setState({ view })
  }

  renderView = () =>{
    switch(this.state.view){
      case "search": return <SearchResults results={this.state.results} showPet={this.showPet}/>;
      case "showPet": return <Pet pet={this.state.selectedPet} switchView={this.switchView}/>
      default: return <SearchResults results={this.state.results} showPet={this.showPet}/>
    }
  }


  render = () => {
    return (
      <div id="browser">
        <Nav fetchAnimalType={this.filterPetsByType}/>
        <Search pets={this.state.pets} fetchResults={this.filterByMultiQuery}/>
        {this.renderView()}
      </div>
    )
  }
}
