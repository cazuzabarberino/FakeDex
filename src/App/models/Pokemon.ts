export default interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    front_female: null | string;
    front_shiny: string;
    front_shiny_female: null | string;
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
  abilities: Array<{
    ability: { name: string };
    is_hidden: boolean;
  }>;
}
