import Pagination from "../../common/Pagination/Pagination";
import { usePokeContext } from "../PokeContext/PokeContext";
import PokeItem from "./PokeItem";

import "./PokeList.css";

const PokeList: React.FC = () => {
  const { state, setCurrentPage } = usePokeContext();

  return (
    <>
      <div className="poke-container overflow-y-auto">
        <ul role="list" className="divide-y divide-gray-100 ">
          {state.pokemons.map((pokemon) => (
            <li
              key={pokemon.name}
              className="flex justify-between gap-x-6 py-1 content-center cursor-pointer"
            >
              <PokeItem pokemon={pokemon} />
            </li>
          ))}
        </ul>
      </div>

      <Pagination
        currentPage={state.currentPage}
        itemsPerPage={state.itemsPerPage}
        totalItems={state.totalItems}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default PokeList;
