import React from 'react';

const Link = props => {
  return (
    <div className="nav-link" onClick={() => props.switchView(props.to)}>{props.text}</div>
  )
}

export default Link
