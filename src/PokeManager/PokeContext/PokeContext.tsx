import React from "react";
import { IPokeProviderValue, IPokeState } from "./PokeContext.interface";

const EMPTY_FN = () => {};
const DEFAULT_PAGE = 0;
const DEFAULT_ITEMS_PER_PAGE = 10;

export const initialPokeState: IPokeState = {
  pokemons: [],
  types: [],
  currentPage: DEFAULT_PAGE,
  itemsPerPage: DEFAULT_ITEMS_PER_PAGE,
  searchKey: undefined,
  selectedType: undefined,
  isLoading: false,
  totalItems: 0,
  selectedPokemon: undefined,
  showDetails: false,
};

export const initialPokeProviderValue: IPokeProviderValue = {
  state: initialPokeState,
  setCurrentPage: EMPTY_FN,
  setItemsPerPage: EMPTY_FN,
  setSearchKey: EMPTY_FN,
  setSelectedType: EMPTY_FN,
  setSelectedPokemon: EMPTY_FN,
  setShowDetails: EMPTY_FN,
};

export const PokeContext = React.createContext<IPokeProviderValue>(
  initialPokeProviderValue
);

export const usePokeContext = () => React.useContext(PokeContext);
