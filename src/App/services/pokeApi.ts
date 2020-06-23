import axios from "axios";
import Pokemon from "../models/Pokemon";
import Ability from "../models/Ability";
import Move from "../models/Move";

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

export async function getMoveData(nameOrId: string | number): Promise<Move> {
  try {
    const response = await api.get<Move>(`/move/${nameOrId}`);

    return response.data;
  } catch (err) {
    alert("Coul not fetch ability " + nameOrId);
    return {} as Move;
  }
}
