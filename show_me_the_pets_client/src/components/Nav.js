import React from 'react';

const Nav = props => {
  return (
    <div id="navbar">
      <div className="nav-link" onClick={() => props.fetchAnimalType('Dog')}>See Dogs</div>
      <div className="nav-link" onClick={() => props.fetchAnimalType('')}>See Cats & Dogs</div>
      <div className="nav-link" onClick={() => props.fetchAnimalType('Cat')}>See Cats</div>
    </div>
  )
}

export default Nav
