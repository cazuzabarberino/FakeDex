import React, { useState, useEffect, useMemo } from "react";
import {
  Container,
  MoveInfo,
  MoveTypeContainer,
  Header,
  MoveEffect,
  MoveTypeAndBadge,
} from "./styles";
import Move from "../../models/Move";
import capitalize from "../../services/Capitalize";
import { getMoveData } from "../../services/pokeApi";
import TypeBadge from "../TypeBadge";
import colorByType from "../../global/colorByType";

interface Props {
  name: string;
  learnMethod: string;
  learnLevel: number;
}

export default ({ name, learnLevel, learnMethod }: Props) => {
  const [move, setMove] = useState<Move | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function getMove() {
      const move = await getMoveData(name);
      setMove(move);
    }

    getMove();
  }, [name]);

  const capitalizedName = useMemo(() => capitalize(name), [name]);
  const effectEntrie = useMemo(
    () =>
      move?.effect_entries
        .find(({ language: { name } }) => name === "en")
        ?.short_effect.split("$effect_chance%")
        .join(`${move.effect_chance}%`),
    [move]
  );

  return (
    <Container
      onClick={(event) => {
        setOpen((c) => !c);
        event.stopPropagation();
      }}
      open={open}
      color={move ? colorByType[move.type.name] : undefined}
    >
      <Header>
        <h4>
          Lv.{learnLevel} {capitalizedName}
        </h4>
      </Header>
      {move && (
        <>
          <MoveTypeAndBadge>
            <TypeBadge type={move.type.name} />
          </MoveTypeAndBadge>
          <MoveType type={move.damage_class.name} />
          {(move.power || move.accuracy) && (
            <MoveInfo>
              {move.power && (
                <div>
                  <p>power</p>
                  <h4>{move.power}</h4>
                </div>
              )}

              {move.accuracy && (
                <div>
                  <p>acc</p>
                  <h4>{move.accuracy}</h4>
                </div>
              )}
            </MoveInfo>
          )}
          <MoveEffect attack={!!(move.power || move.accuracy)}>
            {effectEntrie}
          </MoveEffect>
        </>
      )}
    </Container>
  );
};

interface MoveTypeProps {
  type: string;
}

function MoveType({ type }: MoveTypeProps) {
  return (
    <MoveTypeContainer>
      <p>{type}</p>
    </MoveTypeContainer>
  );
}
