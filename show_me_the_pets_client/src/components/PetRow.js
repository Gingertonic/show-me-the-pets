import React from 'react'

const PetRow = ({ pet, showPet }) => {
  return(
    <tr>
      <td className="select-pet" onClick={() => showPet(pet.animal_id)}>{pet.name}</td>
      <td>{pet.animal_type}</td>
      <td>{pet.color}</td>
      <td>{pet.breed}</td>
      <td>{pet.gender[0]}</td>
      <td>{pet.address}</td>
    </tr>
  )
}
export default PetRow
