import React from "react";

function PokemonCard({ pokemon }) {
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <h3>{pokemon.type}</h3>
      <img src={pokemon.img} alt={pokemon.name} />
    </div>
  );
}

export default PokemonCard;