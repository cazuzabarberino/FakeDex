import React, { useState, useEffect, useMemo } from "react";
import { Container } from "./styles";
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

  useEffect(() => {
    async function getMove() {
      const move = await getMoveData(name);
      setMove(move);
    }

    getMove();
  }, [name]);

  const capitalizedName = useMemo(() => capitalize(name), [name]);

  return (
    <Container color={move ? colorByType[move.type.name] : undefined}>
      <div>
        <h4>
          Lv.{learnLevel} {capitalizedName}
        </h4>
        {move && <TypeBadge type={move.type.name} />}
      </div>
      {move && (
        <div>
          {move.effect_entries
            .find(({ language: { name } }) => name === "en")
            ?.short_effect.replace("$effect_chance%", `${move.effect_chance}%`)}
        </div>
      )}
    </Container>
  );
};
