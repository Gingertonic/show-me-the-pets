import React from 'react';
import Link from './Link'

const Nav = props => {
  return (
    <div id="navbar">
      <div className="nav-link" onClick={() => props.fetchAnimalType('dogs')}>See all Dogs</div>
      <div className="nav-link" onClick={() => props.fetchAnimalType('cats')}>See all Cats</div>
    </div>
  )
}

export default Nav
