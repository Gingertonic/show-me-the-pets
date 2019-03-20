import React from 'react';
import Link from './Link'

const Nav = props => {
  return (
    <div id="navbar">
      <Link to={"Location"} switchView={props.switchView} text={"See all by Location"}/>
      <Link to={"Breed"} switchView={props.switchView} text={"See all by Breed"} />
      <Link to={"Dogs"} switchView={props.switchView} action={props.fetchDogs} text={"See all Dogs"} />
      <Link to={"Cats"} switchView={props.switchView} action={props.fetchCats} text={"See all Cats"} />
    </div>
  )
}

export default Nav
