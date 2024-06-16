import React, { useCallback, useEffect } from "react";
import { PokeReducer } from "./PokeProvider.actions";
import {
  IPokeProviderProps,
  IPokeProviderValue,
  PokeActionsEnum,
} from "./PokeContext.interface";
import {
  DEFAULT_ITEMS_PER_PAGE,
  DEFAULT_PAGE,
  PokeContext,
  initialPokeState,
} from "./PokeContext";
import toast from "react-hot-toast";
import { IPokemon } from "../../Services/PokeService/PokeService.interface";
import { PokeService } from "../../Services/PokeService/PokeService";
import { debounce } from "lodash";

function PokeProvider({ children }: IPokeProviderProps) {
  const [state, dispatch] = React.useReducer(PokeReducer, initialPokeState);

  useEffect(() => {
    loadTypes();
  }, []);

  useEffect(() => {
    loadPokemons(state.searchKey, state.selectedType);
  }, [state.currentPage, state.selectedType, state.searchKey]);

  const loadPokemonData = async () => {
    try {
      const { pokemons, count } = await PokeService.getPokemons(
        state.currentPage,
        state.itemsPerPage
      );

      setPokemons(pokemons);
      setTotalItems(count);
      setItemsPerPage(DEFAULT_ITEMS_PER_PAGE);
    } catch (error) {
      toast.error("Error fetching pokemons!");
    }
  };

  const filterPokemons = async () => {
    try {
      const { pokemons, count } = await PokeService.getPokemonsByNameAndType(
        state.searchKey,
        state.selectedType
      );

      setPokemons(pokemons);
      setTotalItems(count);
      setItemsPerPage(count);
    } catch (error) {
      toast.error("Error fetching pokemons!");
    }
  };

  const loadTypesData = async () => {
    try {
      const { types, count } = await PokeService.listTypes();

      setTypes(types);
      setTotalItems(count);
    } catch (error) {
      toast.error("Error fetching pokemons!");
    }
  };

  const debouncedLoadPokemonData = debounce(loadPokemonData, 1000);
  const debouncedFilterPokemons = debounce(filterPokemons, 1000);

  const loadPokemons = (
    searchKey: string | undefined,
    selectedType: string | undefined
  ) => {
    setIsLoading(true);
    setCurrentPage(DEFAULT_PAGE);

    if (!searchKey && !selectedType) {
      debouncedLoadPokemonData();
    } else {
      debouncedFilterPokemons();
    }
  };

  const loadTypes = () => {
    setIsLoading(true);
    loadTypesData();
  };

  const setIsLoading = useCallback(
    (isLoading: boolean) => {
      dispatch({
        type: PokeActionsEnum.SET_IS_LOADING,
        payload: { isLoading },
      });
    },
    [dispatch]
  );

  const setPokemons = useCallback(
    (pokemons: IPokemon[]) => {
      dispatch({
        type: PokeActionsEnum.SET_POKEMONS,
        payload: { pokemons },
      });
    },
    [dispatch]
  );

  const setTypes = useCallback(
    (types: string[]) => {
      dispatch({
        type: PokeActionsEnum.SET_TYPES,
        payload: { types },
      });
    },
    [dispatch]
  );

  const setSelectedType = useCallback(
    (selectedType: string | undefined) => {
      dispatch({
        type: PokeActionsEnum.SET_SELECTED_TYPE,
        payload: { selectedType },
      });
    },
    [dispatch]
  );

  const setCurrentPage = useCallback(
    (currentPage: number) => {
      dispatch({
        type: PokeActionsEnum.SET_CURRENT_PAGE,
        payload: { currentPage },
      });
    },
    [dispatch]
  );

  const setItemsPerPage = useCallback(
    (itemsPerPage: number) => {
      dispatch({
        type: PokeActionsEnum.SET_ITEMS_PER_PAGE,
        payload: { itemsPerPage },
      });
    },
    [dispatch]
  );

  const setTotalItems = useCallback(
    (totalItems: number) => {
      dispatch({
        type: PokeActionsEnum.SET_TOTAL_ITEMS,
        payload: { totalItems },
      });
    },
    [dispatch]
  );

  const setSearchKey = useCallback(
    (searchKey: string | undefined) => {
      dispatch({
        type: PokeActionsEnum.SET_SEARCH_KEY,
        payload: { searchKey },
      });
    },
    [dispatch]
  );

  const setSelectedPokemon = useCallback(
    (selectedPokemon: IPokemon | undefined) => {
      dispatch({
        type: PokeActionsEnum.SET_SELECTED_POKEMON,
        payload: { selectedPokemon },
      });
    },
    [dispatch]
  );

  const setShowDetails = useCallback(
    (showDetails: boolean) => {
      dispatch({
        type: PokeActionsEnum.SET_SHOW_DETAILS,
        payload: { showDetails },
      });
    },
    [dispatch]
  );

  const value: IPokeProviderValue = {
    state,
    setItemsPerPage,
    setSelectedType,
    setCurrentPage,
    setSearchKey,
    setSelectedPokemon,
    setShowDetails,
  };

  return <PokeContext.Provider value={value}>{children}</PokeContext.Provider>;
}

export default PokeProvider;
