import React, { useCallback, useEffect, useState, useMemo } from "react";
import Pokemon from "../../models/Pokemon";
import { useDetailedView } from "../../Providers/DetailedView";
import TypeBadge from "../TypeBadge";
import {
  BadgeWrapper,
  CardHeader,
  Container,
  Visual,
  ReverseContainer,
} from "./styles";

interface Props {
  pokemonID: number;
  initialRect: DOMRect;
  pokemonData: Pokemon | null;
}

export default ({ pokemonID, initialRect, pokemonData }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const { toggleDetailedView } = useDetailedView();
  const [animatonEnded, setAnimatonEnded] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (pokemonData) setPokemon(pokemonData);
  }, [pokemonData]);

  const closePokemonDetail = useCallback(() => {
    setAnimatonEnded(false);
    setImageLoaded(false);
    toggleDetailedView(0, pokemonData, initialRect);
  }, [pokemonData, toggleDetailedView, initialRect]);

  const handleOnLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const content = useMemo(
    () =>
      pokemon && (
        <Visual onClick={closePokemonDetail}>
          <CardHeader types={pokemon.types.map(({ type: { name } }) => name)}>
            <h2>{pokemon.name.toUpperCase()}</h2>
          </CardHeader>
          <img
            src={pokemon.sprites.front_default}
            onLoad={handleOnLoad}
            alt={pokemon.name + " sprite"}
          />
          <BadgeWrapper>
            {pokemon.types.map(({ type: { name } }) => (
              <TypeBadge key={name} type={name} />
            ))}
          </BadgeWrapper>
        </Visual>
      ),
    [pokemon, closePokemonDetail, handleOnLoad]
  );

  if (pokemonID > 0)
    return (
      <Container
        x={initialRect.x}
        y={initialRect.y}
        width={initialRect.width}
        height={initialRect.height}
      >
        {content}
      </Container>
    );
  else
    return (
      <ReverseContainer
        animatonEnded={animatonEnded}
        x={initialRect.x}
        y={initialRect.y}
        width={initialRect.width}
        height={initialRect.height}
        onAnimationEnd={() => setAnimatonEnded(true)}
      >
        {content}
      </ReverseContainer>
    );
};
