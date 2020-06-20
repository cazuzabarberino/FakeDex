import React, { useEffect, useRef, useState, useCallback } from "react";
import Pokemon from "../../models/Pokemon";
import { getPokemonData } from "../../services/pokeApi";
import TypeBadge from "../TypeBadge";
import { BadgeWrapper, CardHeader, Container, Visual } from "./styles";
import { useDetailedView } from "../../Providers/DetailedView";

interface Props {
  pokemonId: number;
}

export default ({ pokemonId }: Props) => {
  const [loading, setLoading] = useState(true);
  const pokemonRef = useRef({} as Pokemon);
  const containerRef = useRef<HTMLDivElement>(null);
  const { toggleDetailedView } = useDetailedView();

  useEffect(() => {
    async function getPokemon() {
      pokemonRef.current = await getPokemonData(pokemonId);

      setLoading(false);
    }

    getPokemon();
  }, [pokemonId]);

  const openPokemonDetail = useCallback(() => {
    toggleDetailedView(
      pokemonId,
      pokemonRef.current,
      containerRef.current?.getBoundingClientRect()
    );
  }, [pokemonId, toggleDetailedView]);

  return (
    <Container ref={containerRef}>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <Visual onClick={openPokemonDetail}>
          <CardHeader
            types={pokemonRef.current.types.map(({ type: { name } }) => name)}
          >
            <h2>{pokemonRef.current.name.toUpperCase()}</h2>
          </CardHeader>
          <img
            src={pokemonRef.current.sprites.front_default}
            alt={pokemonRef.current.name + " sprite"}
          />
          <BadgeWrapper>
            {pokemonRef.current.types.map(({ type: { name } }) => (
              <TypeBadge key={name} type={name} />
            ))}
          </BadgeWrapper>
        </Visual>
      )}
    </Container>
  );
};
