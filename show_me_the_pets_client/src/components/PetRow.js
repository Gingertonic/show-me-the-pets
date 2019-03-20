import React from 'react'

const PetRow = ({ pet, showPet }) => {
  return(
    <tr onClick={() => showPet(pet.animal_id)}>
      <td className="select-pet">{pet.name}</td>
      <td>{pet.animal_type}</td>
      <td>{pet.color}</td>
      <td>{pet.breed}</td>
      <td>{pet.gender[0]}</td>
      <td>{pet.address}</td>
    </tr>
  )
}
export default PetRow
