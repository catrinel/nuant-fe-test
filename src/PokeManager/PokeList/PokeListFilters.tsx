import Dropdown from "../../common/Dropdown/Dropdown";
import { ALL_OPTION } from "../../common/Dropdown/IDropdown.interface";
import Search from "../../common/Search/Search";
import { usePokeContext } from "../PokeContext/PokeContext";

const PokeListFilters: React.FC = () => {
  const { state, setSelectedType, setSearchKey } = usePokeContext();

  return (
    <div className="flex justify-between pb-1">
      <Search
        label="Search pokemons by name"
        searchKey={state.searchKey}
        onSearchKeyChange={setSearchKey}
      />

      <Dropdown
        label="Filter by type"
        selectedKey={state.selectedType || ALL_OPTION}
        options={state.types}
        setSelectedOption={setSelectedType}
      />
    </div>
  );
};

export default PokeListFilters;
