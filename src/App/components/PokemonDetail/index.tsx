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
  AbilityWrapper,
  MoveWrapper,
} from "./styles";
import PokemonStats from "../PokemonStats";
import PokemonAbility from "../PokemonAbility";
import PokemonMove from "../PokemonMove";

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
          <PokemonStats stats={pokemon.stats} />
          <AbilityWrapper>
            {pokemon.abilities.map(({ ability: { name }, is_hidden }) => (
              <PokemonAbility key={name} name={name} is_hidden={is_hidden} />
            ))}
          </AbilityWrapper>
          <MoveWrapper>
            {pokemon.moves
              .filter(({ version_group_details }) => {
                const { move_learn_method } = version_group_details[
                  version_group_details.length - 1
                ];
                return move_learn_method.name === "level-up";
              })
              .sort((a, b) => {
                const aLevel =
                  a.version_group_details[a.version_group_details.length - 1]
                    .level_learned_at;
                const bLevel =
                  b.version_group_details[b.version_group_details.length - 1]
                    .level_learned_at;
                return aLevel - bLevel;
              })
              .map(({ move: { name }, version_group_details }) => {
                const {
                  level_learned_at,
                  move_learn_method,
                } = version_group_details[version_group_details.length - 1];

                return (
                  <PokemonMove
                    key={name}
                    name={name}
                    learnLevel={level_learned_at}
                    learnMethod={move_learn_method.name}
                  />
                );
              })}
          </MoveWrapper>
        </Visual>
      ),
    [pokemon, closePokemonDetail, handleOnLoad]
  );

  if (pokemonID > 0)
    return (
      <Container
        animate={imageLoaded}
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
        animate={true}
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
