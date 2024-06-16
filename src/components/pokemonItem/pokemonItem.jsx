import React from 'react'
import { colours } from '../../data/colour'
import '../pokemonItem/styleItem.css'

const pokemonItem = ({pokemon}) => {
  return (
    <div className="pokemon-card" style={{ backgroundColor: `${pokemon.color}` }}>
      <img src={pokemon.imageUrl} alt="" width={250} />
      <h1>{pokemon.name}</h1>

      <div className="types-container">
        {pokemon.types.map((item, index) => (
          <span
            key={index}
            className="type-badge"
            style={{
              backgroundColor: colours[item.toLowerCase()],
            }}
          >
            {item}
          </span>
        ))}
      </div>

      <p className='description'>{pokemon.description}</p>
    </div>
  );
}

export default pokemonItem