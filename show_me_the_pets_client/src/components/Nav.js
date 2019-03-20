import React from 'react';
import Link from './Link'

const Nav = props => {
  return (
    <div id="navbar">
      <Link to={"Location"} switchView={props.switchView} text={"See all by Location"}/>
      <Link to={"Breed"} switchView={props.switchView} text={"See all by Breed"} />
      <div className="nav-link" onClick={() => props.fetchAnimalType('dogs')}>See all Dogs</div>
      <div className="nav-link" onClick={() => props.fetchAnimalType('cats')}>See all Cats</div>
    </div>
  )
}

export default Nav
