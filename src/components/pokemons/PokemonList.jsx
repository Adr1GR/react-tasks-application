import React from 'react'
import PokemonCard from './PokemonCard'

function PokemonList({data}) {
  return (
    data.map( p => 
        <PokemonCard id={p.id} pokemon={p}/>
    )
  )
}

export default PokemonList