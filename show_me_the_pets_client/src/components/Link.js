import React from 'react';

const Link = props => {
  return (
    <div className="nav-link" onClick={() => props.action()}>{props.text}</div>
  )
}

export default Link
