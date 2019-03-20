import React from 'react'

const PetRow = ({ pet }) => {
  return(
    <tr>
      <td>{pet.name}</td>
      <td>{pet.animal_type}</td>
      <td>{pet.color}</td>
      <td>{pet.breed}</td>
      <td>{pet.gender[0]}</td>
      <td>{pet.address}</td>
    </tr>
  )
}
export default PetRow
