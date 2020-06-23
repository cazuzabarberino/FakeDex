export default interface Move {
  name: string;
  accuracy: number;
  power: number;
  damage_class: {
    name: string;
  };
  effect_entries: Array<{
    short_effect: string;
    language: {
      name: string;
    };
  }>;
  type: {
    name: string;
  };
  effect_chance: number;
}
