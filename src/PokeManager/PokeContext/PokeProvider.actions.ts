import {
  IPokeState,
  PokeAction,
  PokeActionsEnum,
} from "./PokeContext.interface";

export function PokeReducer(state: IPokeState, action: PokeAction): IPokeState {
  switch (action.type) {
    case PokeActionsEnum.SET_POKEMONS: {
      return {
        ...state,
        pokemons: structuredClone(action.payload.pokemons),
      };
    }
    case PokeActionsEnum.SET_TYPES: {
      return {
        ...state,
        types: structuredClone(action.payload.types),
      };
    }
    case PokeActionsEnum.SET_SELECTED_TYPE: {
      return {
        ...state,
        selectedType: structuredClone(action.payload.selectedType),
      };
    }
    case PokeActionsEnum.SET_SEARCH_KEY: {
      return {
        ...state,
        searchKey: action.payload.searchKey,
      };
    }
    case PokeActionsEnum.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload.currentPage,
      };
    }
    case PokeActionsEnum.SET_ITEMS_PER_PAGE: {
      return {
        ...state,
        itemsPerPage: action.payload.itemsPerPage,
      };
    }
    case PokeActionsEnum.SET_TOTAL_ITEMS: {
      return {
        ...state,
        totalItems: action.payload.totalItems,
      };
    }
    case PokeActionsEnum.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    }
    case PokeActionsEnum.SET_SELECTED_POKEMON: {
      return {
        ...state,
        selectedPokemon: structuredClone(action.payload.selectedPokemon),
      };
    }
    case PokeActionsEnum.SET_SHOW_DETAILS: {
      return {
        ...state,
        showDetails: action.payload.showDetails,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${(action as PokeAction).type}`);
    }
  }
}
