import React from "react";

export default function CardDetailsPokemon({ CardPokemon }) {
  return (
    <div>
      <ul>
        <h4>{CardPokemon.id}</h4>
        <li>{CardPokemon.name}</li>
        <img src={CardPokemon.sprites.front_default} alt="" />
        <p>
          {CardPokemon.types.map((elt) => {
            return elt.type.name;
          })}
        </p>
        <p>
          {CardPokemon.game_indices.map((game) => {
            return <li key={game.version.name}>{game.version.name}</li>;
          })}
        </p>
      </ul>
    </div>
  );
}
