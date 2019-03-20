import React from 'react';
import PetRow from './PetRow'

const SearchResults = props => {
  const renderPets = props.results.map(pet => <PetRow pet={pet} showPet={props.showPet}/>)
  return (
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
  )
}

export default SearchResults
