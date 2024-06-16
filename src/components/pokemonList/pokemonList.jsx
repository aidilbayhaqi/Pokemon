import React, { useState } from 'react'
import pokemonJson from '../../data/data.json'
import './styleList.css'
import PokemonItem from '../pokemonItem/pokemonItem'

const pokemonList = () => {
    const [pokemons]=useState(pokemonJson)
    const [filtered, setFiltered]=useState(pokemonJson)

    const handleSearch = (e)=>{
        let search = pokemons.filter((item)=>{
            return item.name.toLowerCase().includes(e.target.value)
        })
        setFiltered(search)
    }

  return (
    <div>
        <input type="text"
        placeholder='Search Pokemon...'
        className='search'
        onChange={handleSearch} />
        <div className="list-pokemon">
            {filtered.length===0?(
                <div>Data not Found</div>
            ):(   
            filtered.map((item)=>(
            <PokemonItem key={item.id} pokemon={item}>
            </PokemonItem>
            )))}  
        </div>
    </div>
  )
}

export default pokemonList