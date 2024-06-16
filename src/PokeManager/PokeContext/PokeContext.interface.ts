import {
  IPokemon,
  IPokemonType,
} from "../../Services/PokeService/PokeService.interface";

export interface IPokeState {
  pokemons: IPokemon[];

  currentPage: number;
  itemsPerPage: number;

  types: IPokemonType[];
  selectedType: IPokemonType | undefined;

  searchKey: string | undefined;
  totalItems: number;

  isLoading: boolean;
}

export enum PokeActionsEnum {
  SET_POKEMONS = "SET_POKEMONS",
  SET_TYPES = "SET_TYPES",
  SET_SEARCH_KEY = "SET_SEARCH_KEY",
  SET_SELECTED_TYPE = "SET_SELECTED_TYPE",
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_ITEMS_PER_PAGE = "SET_ITEMS_PER_PAGE",
  SET_TOTAL_ITEMS = "SET_TOTAL_ITEMS",
}

export type PokeAction =
  | {
      type: PokeActionsEnum.SET_POKEMONS;
      payload: {
        pokemons: IPokemon[];
      };
    }
  | {
      type: PokeActionsEnum.SET_TYPES;
      payload: {
        types: IPokemonType[];
      };
    }
  | {
      type: PokeActionsEnum.SET_SEARCH_KEY;
      payload: {
        searchKey: string | undefined;
      };
    }
  | {
      type: PokeActionsEnum.SET_SELECTED_TYPE;
      payload: {
        selectedType: IPokemonType | undefined;
      };
    }
  | {
      type: PokeActionsEnum.SET_CURRENT_PAGE;
      payload: {
        currentPage: number;
      };
    }
  | {
      type: PokeActionsEnum.SET_ITEMS_PER_PAGE;
      payload: {
        itemsPerPage: number;
      };
    }
  | {
      type: PokeActionsEnum.SET_IS_LOADING;
      payload: {
        isLoading: boolean;
      };
    }
  | {
      type: PokeActionsEnum.SET_TOTAL_ITEMS;
      payload: {
        totalItems: number;
      };
    };

export type PokeDispatch = ((action: PokeAction) => void) | undefined;

export interface IPokeProviderProps {
  children: React.ReactNode;
}

export type IPokeProviderValue = {
  state: IPokeState;
  setSearchKey: (searchKey: string | undefined) => void;
  // TODO : select multiple types?
  setSelectedType: (selectedType: IPokemonType | undefined) => void;
  setCurrentPage: (currentPage: number) => void;
  setItemsPerPage: (itemsPerPage: number) => void;
};
