import React from "react";
import Pokemon from "../../models/Pokemon";
import { Container, BadgeWrapper, CardHeader } from "./styles";
import TypeBadge from "../TypeBadge";

const pokemon: Pokemon = {
  id: 6,
  name: "charizard",
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    front_female: null,
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
    front_shiny_female: null,
  },
  types: ["fire", "flying"],
};

export default () => {
  return (
    <Container>
      <CardHeader types={pokemon.types}>
        {/* <h3>{pokemon.id}</h3> */}
        <h2>{pokemon.name.toUpperCase()}</h2>
      </CardHeader>
      <img src={pokemon.sprites.front_default} alt={pokemon.name + " sprite"} />
      <BadgeWrapper>
        {pokemon.types.map((type) => (
          <TypeBadge key={type} type={type} />
        ))}
      </BadgeWrapper>
    </Container>
  );
};
