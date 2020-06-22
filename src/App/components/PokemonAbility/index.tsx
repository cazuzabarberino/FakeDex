import React, { useEffect, useState, useMemo } from "react";
import { Container } from "./styles";
import { getAbilitydata } from "../../services/pokeApi";
import Ability from "../../models/Ability";
import Capitalize from "../../services/Capitalize";

interface Props {
  name: string;
  is_hidden: boolean;
}

export default ({ is_hidden, name }: Props) => {
  const [ability, setAbility] = useState<Ability | null>(null);

  useEffect(() => {
    async function getAbility() {
      const ability = await getAbilitydata(name);

      setAbility(ability);
    }
    setAbility(null);
    getAbility();
  }, [name]);

  const capitalizedName = useMemo(() => Capitalize(name), [name]);

  return (
    <Container>
      <div>
        <h4>
          {capitalizedName} {is_hidden && <span>hidden ability</span>}
        </h4>
      </div>
      <p>
        {ability &&
          ability.effect_entries.find(({ language: { name } }) => name === "en")
            ?.short_effect}
      </p>
    </Container>
  );
};
