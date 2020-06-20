import axios from "axios";
import Pokemon from "../models/Pokemon";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export async function getPokemonData(id: number): Promise<Pokemon> {
  try {
    const response = await api.get<Pokemon>(`/pokemon/${id}`);

    return response.data;
  } catch (err) {
    alert("Could not fetch pokemon " + id);
    return {} as Pokemon;
  }
}
