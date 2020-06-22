export default interface Ability {
  name: string;
  id: string;
  effect_entries: Array<{
    short_effect: string;
    language: {
      name: string;
    };
  }>;
}
