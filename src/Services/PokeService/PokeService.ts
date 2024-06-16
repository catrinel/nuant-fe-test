import { Pokemon, PokemonClient } from "pokenode-ts";
import toast from "react-hot-toast";
import { mapPokemons } from "./PokeMapper";
import { IPokemon } from "./PokeService.interface";

const listPokemons = async (
  page: number,
  itemsPerPage: number
): Promise<{ pokemonNames: string[]; count: number }> => {
  const api = new PokemonClient();

  return await api
    .listPokemons(page * itemsPerPage, itemsPerPage)
    .then((data) => {
      return {
        pokemonNames: data?.results?.map((item) => item.name) || [],
        count: data.count,
      };
    });
};

const listPokemonsByName = async (nameKeyword: string) => {
  const api = new PokemonClient();

  return await api.getPokemonByName(nameKeyword).then((data) => {
    console.log(data);
    return data;
  });
};

const getPokemons = async (
  page: number,
  itemsPerPage: number
): Promise<{ pokemons: IPokemon[]; count: number }> => {
  try {
    const { pokemonNames, count } = await listPokemons(page, itemsPerPage);

    const data = await Promise.allSettled(
      pokemonNames.map((pokemonName) => listPokemonsByName(pokemonName))
    );

    const pokemonDTOs = data.map((dataItem) =>
      dataItem.status === "fulfilled" ? dataItem.value : undefined
    );

    const pokemons = mapPokemons(
      pokemonDTOs.filter((pokeDTO) => pokeDTO !== undefined) as Pokemon[]
    );

    return { pokemons, count };
  } catch (error) {
    toast.error("Error fetching pokemons!");
    return { pokemons: [], count: 0 };
  }
};

export const PokeService = {
  getPokemons,
};
