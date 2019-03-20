import React from 'react'

const Pet = ({ pet }) => {
  return(
    <tr>
      <td class="select-pet" onClick={() => this.showPet(pet.id)}>{pet.name}</td>
      <td>{pet.animal_type}</td>
      <td>{pet.color}</td>
      <td>{pet.breed}</td>
      <td>{pet.gender[0]}</td>
      <td>{pet.address}</td>
    </tr>
  )
}
export default Pet
