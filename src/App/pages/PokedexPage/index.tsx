import React, { useMemo } from "react";
import PokemonCard from "../../components/PokemonCard";
import { PokemonCardContainer, Container } from "./styles";
import Header from "../../components/Header";

export default () => {
  const PokemonCards = useMemo(() => {
    const cards = [];
    for (let i = 1; i <= 151; i++)
      cards.push(<PokemonCard key={i} pokemonId={i} />);
    return cards;
  }, []);

  return (
    <Container>
      <Header />
      <PokemonCardContainer>{PokemonCards}</PokemonCardContainer>
    </Container>
  );
};
