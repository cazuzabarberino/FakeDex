import axios from "axios";
import Pokemon from "../models/Pokemon";
import Ability from "../models/Ability";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export async function getPokemonData(
  idOrName: number | string
): Promise<Pokemon> {
  try {
    const response = await api.get<Pokemon>(`/pokemon/${idOrName}`);

    return response.data;
  } catch (err) {
    alert("Could not fetch pokemon " + idOrName);
    return {} as Pokemon;
  }
}

export async function getAbilitydata(
  nameOrId: string | number
): Promise<Ability> {
  try {
    const response = await api.get<Ability>(`/ability/${nameOrId}`);

    return response.data;
  } catch (err) {
    alert("Coul not fetch ability " + nameOrId);
    return {} as Ability;
  }
}
