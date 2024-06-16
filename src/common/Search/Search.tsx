import { ISearchProps } from "./Search.interface";

const Search: React.FC<ISearchProps> = ({
  label,
  searchKey,
  onSearchKeyChange,
}) => {
  return (
    <div className="flex justify-center">
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900 content-center pr-1"
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="search"
          value={searchKey}
          onChange={(e) => onSearchKeyChange(e.target?.value)}
          id="price"
          className="block w-full bg-white rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-700 sm:text-sm sm:leading-6"
          placeholder="bulbasaur"
        />
      </div>
    </div>
  );
};

export default Search;
