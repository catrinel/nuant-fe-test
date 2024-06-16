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

const listTypes = async (): Promise<{ types: string[]; count: number }> => {
  const api = new PokemonClient();

  return await api.listTypes().then((data) => {
    return {
      types: data?.results?.map((item) => item.name) || [],
      count: data.count,
    };
  });
};

const getPokemonsByType = async (
  type: string
): Promise<{ pokemons: string[]; count: number }> => {
  const api = new PokemonClient();

  return await api.getTypeByName(type).then((data) => {
    return {
      pokemons: data.pokemon.map((item) => item.pokemon.name),
      count: data.pokemon.length,
    };
  });
};

const getPokemonsByName = async (
  nameKeyword: string
): Promise<{ pokemons: string[]; count: number }> => {
  const api = new PokemonClient();

  return await api
    .getPokemonByName(nameKeyword.toLowerCase())
    .then((data) => {
      console.log("by name", data);
      return {
        pokemons: [data.name],
        count: 1,
      };
    })
    .catch(() => {
      return {
        pokemons: [],
        count: 0,
      };
    });
};

const listPokemonsByName = async (nameKeyword: string): Promise<Pokemon> => {
  const api = new PokemonClient();

  return await api.getPokemonByName(nameKeyword.toLowerCase()).then((data) => {
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

const findIntersection = (
  name: string | undefined,
  byName: string[],
  type: string | undefined,
  byType: string[]
): string[] => {
  if (!name) {
    return byType;
  }

  if (!type) {
    return byName;
  }

  return byName.filter((name) => byType.includes(name));
};

const getPokemonsByNameAndType = async (
  name: string | undefined,
  type: string | undefined
): Promise<{ pokemons: IPokemon[]; count: number }> => {
  if (!name && !type) {
    return Promise.resolve({ pokemons: [], count: 0 });
  }

  try {
    let pokemonsByName;
    let pokemonsByType;

    if (name) {
      pokemonsByName = await getPokemonsByName(name);
    }

    if (type) {
      pokemonsByType = await getPokemonsByType(type);
    }

    const pokemonNames = findIntersection(
      name,
      pokemonsByName?.pokemons || [],
      type,
      pokemonsByType?.pokemons || []
    );

    const data = await Promise.allSettled(
      pokemonNames.map((pokemonName) => listPokemonsByName(pokemonName))
    );

    const pokemonDTOs = data.map((dataItem) =>
      dataItem.status === "fulfilled" ? dataItem.value : undefined
    );

    const pokemons = mapPokemons(
      pokemonDTOs.filter((pokeDTO) => pokeDTO !== undefined) as Pokemon[]
    );

    return { pokemons, count: pokemons.length };
  } catch (error) {
    toast.error("Error fetching pokemons!");
    return { pokemons: [], count: 0 };
  }
};

export const PokeService = {
  getPokemons,
  listTypes,
  getPokemonsByNameAndType,
};
