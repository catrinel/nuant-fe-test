import { Pokemon, PokemonAbility, PokemonMove, PokemonType } from "pokenode-ts";
import {
  IPokemon,
  IPokemonAbility,
  IPokemonType,
} from "./PokeService.interface";

const mapAbilities = (abilitiesDTO: PokemonAbility[]): IPokemonAbility[] =>
  abilitiesDTO.map((abilityDTO) => ({
    name: abilityDTO.ability.name,
    slot: abilityDTO.slot,
    isHidden: abilityDTO.is_hidden,
  }));

const mapTypes = (typesDTO: PokemonType[]): IPokemonType[] =>
  typesDTO.map((typeDTO) => ({
    name: typeDTO.type.name,
    slot: typeDTO.slot,
  }));

const mapMoves = (movesDTO: PokemonMove[]): string[] =>
  movesDTO.map((moveDTO) => moveDTO.move.name);

const mapDefautlImageUrl = (pokeDTO: Pokemon): string =>
  pokeDTO.sprites.front_default || "N/A";

export const mapPokemons = (pokeDTOs: Pokemon[]): IPokemon[] =>
  pokeDTOs.map((pokeDTO) => ({
    ...pokeDTO,
    isDefault: pokeDTO.is_default,
    baseExperience: pokeDTO.base_experience,
    imageUrl: mapDefautlImageUrl(pokeDTO),
    abilities: mapAbilities(pokeDTO.abilities),
    types: mapTypes(pokeDTO.types),
    moves: mapMoves(pokeDTO.moves),
  }));
