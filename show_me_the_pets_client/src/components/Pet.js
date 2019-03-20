import React, { Component } from 'react'

export default class Pet extends Component {
  render = () => {
    return(
      <div id="show-pet">
        <h1>{this.props.pet.name}</h1>
        <div className="nav-link" onClick={() => this.props.switchView('search')}>Back to Results</div>
      </div>
    )
  }
}
