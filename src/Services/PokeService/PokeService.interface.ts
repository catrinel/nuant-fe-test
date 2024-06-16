import { PokemonSprites } from "pokenode-ts";

export interface IPokemon {
  imageUrl: string;
  name: string;
  height: number;
  weight: number;
  baseExperience: number;
  isDefault: boolean;
  sprites: PokemonSprites;
  types: IPokemonType[];
  abilities: IPokemonAbility[];
  moves: string[];
}

export interface IPokemonType {
  slot: number;
  name: string;
}


export interface IPokemonAbility {
  name: string;
  isHidden: boolean;
  slot: number;
}

