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
      p.name.match(new RegExp(`^${queries.name}`, "i")) &&
      p.color.match(new RegExp(queries.color, "i")) &&
      p.breed.match(new RegExp(queries.breed, "i")) &&
      p.address.match(new RegExp(queries.address, "i")) &&
      p.gender.match(new RegExp(queries.gender))
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
          <thead>
            <tr>
              <th className="th-name">Name</th>
              <th className="th-type">Type</th>
              <th className="th-color">Color</th>
              <th className="th-breed">Breed</th>
              <th className="th-gender">Gender</th>
              <th className="th-address">Address</th>
            </tr>
          </thead>
          <tbody>{renderPets}</tbody>
        </table>
      </div>
    )
  }
}
