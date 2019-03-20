import React, { Component } from 'react';
import Nav from '../components/Nav'
import PetRow from '../components/PetRow'
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
      fetch(`http://localhost:3002/pets/`)
        .then(resp => resp.json())
        .then(pets => this.setState({ pets }))
  }

  filterPetsByType = animalType => {
    const results = this.state.pets.filter(p => p.animal_type.match(new RegExp(animalType)))
    this.setState({ results })
  }

  filterByMultiQuery = queries => {
    const results = this.state.pets.filter(p =>
      p.name.match(new RegExp(queries.name)) &&
      p.color.match(new RegExp(queries.color)) &&
      p.breed.match(new RegExp(queries.breed)) &&
      p.address.match(new RegExp(queries.address))
    )
    this.setState({ results })
  }


  switchView = view => {
    this.setState({ view })
  }



  render = () => {
    const renderPets = this.state.results.map(pet => <PetRow pet={pet}/>)
    return (
      <div id="browser">
        <Nav fetchAnimalType={this.filterPetsByType}/>
        <Search pets={this.state.pets} fetchResults={this.filterByMultiQuery}/>
        <table>
          <tr><th>Name</th><th>Type</th><th>Color</th><th>Breed</th><th>Address</th></tr>
          {renderPets}
        </table>
      </div>
    )
  }
}
