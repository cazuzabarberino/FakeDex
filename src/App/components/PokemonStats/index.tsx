import React from "react";
import { Container, StatValue } from "./styles";

interface Props {
  stats: Array<{
    base_stat: number;
  }>;
}

const statName: string[] = [
  "Hp",
  "Attack",
  "Defense",
  "Sp. Atk",
  "Sp. Def",
  "Speed",
];

export default ({ stats }: Props) => {
  return (
    <Container>
      {stats.map(({ base_stat }, i) => (
        <div>
          <p>{statName[i]}</p> :{" "}
          <StatValue statValue={base_stat}>
            {base_stat}
            <div>{base_stat}</div>
          </StatValue>
        </div>
      ))}
    </Container>
  );
};
