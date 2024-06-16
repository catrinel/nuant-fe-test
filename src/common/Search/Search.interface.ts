export interface ISearchProps {
  label: string;
  searchKey: string | undefined;
  onSearchKeyChange: (searchKey: string) => void;
}
