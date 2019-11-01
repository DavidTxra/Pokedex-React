import React from 'react';

const Details = ({ pokemon }) => {
  const { id, name, type } = pokemon;

  return (
    <div>
        <h1>{id} {name}</h1>
        <p>{type}</p>
    </div>
  )
}

export default Details;