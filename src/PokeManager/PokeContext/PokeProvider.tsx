import React, { useCallback, useEffect } from "react";
import { PokeReducer } from "./PokeProvider.actions";
import {
  IPokeProviderProps,
  IPokeProviderValue,
  PokeActionsEnum,
} from "./PokeContext.interface";
import { PokeContext, initialPokeState } from "./PokeContext";
import toast from "react-hot-toast";
import {
  IPokemon,
  IPokemonType,
} from "../../Services/PokeService/PokeService.interface";
import { PokeService } from "../../Services/PokeService/PokeService";

function PokeProvider({ children }: IPokeProviderProps) {
  const [state, dispatch] = React.useReducer(PokeReducer, initialPokeState);

  useEffect(() => {
    loadPokemons();
  }, [state.currentPage]);

  const loadData = async () => {
    try {
      const { pokemons, count } = await PokeService.getPokemons(
        state.currentPage,
        state.itemsPerPage
      );

      setPokemons(pokemons);
      setTotalItems(count);
    } catch (error) {
      toast.error("Error fetching pokemons!");
    }
  };

  const loadPokemons = () => {
    setIsLoading(true);
    loadData();
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
    (types: IPokemonType[]) => {
      dispatch({
        type: PokeActionsEnum.SET_TYPES,
        payload: { types },
      });
    },
    [dispatch]
  );

  const setSelectedType = useCallback(
    (selectedType: IPokemonType | undefined) => {
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

  const value: IPokeProviderValue = {
    state,
    setItemsPerPage,
    setSelectedType,
    setCurrentPage,
    setSearchKey,
  };

  return <PokeContext.Provider value={value}>{children}</PokeContext.Provider>;
}

export default PokeProvider;
