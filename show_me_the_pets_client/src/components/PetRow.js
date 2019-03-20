import React from 'react'

const PetRow = ({ pet }) => {
  return(
    <tr>
      <td>{pet.name}</td>
      <td>{pet.animal_type}</td>
      <td>{pet.color}</td>
      <td>{pet.breed}</td>
    </tr>
  )
}

export default PetRow
