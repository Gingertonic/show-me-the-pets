import React from 'react';

const Nav = props => {
  return (
    <div id="navbar">
      <div className="nav-link" onClick={() => props.fetchAnimalType('Dog')}>See Dogs</div>
      <div className="nav-link" onClick={() => props.fetchAnimalType('Cat')}>See Cats</div>
      <div className="nav-link" onClick={() => props.fetchAnimalType('Rabbit')}>See Bunnies</div>
      <div className="nav-link" onClick={() => props.fetchAnimalType('')}>See Dogs, Cats & Bunnies!</div>
    </div>
  )
}

export default Nav
