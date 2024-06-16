export interface IDropdownProps {
  label: string;
  selectedKey: string | undefined;
  options: string[];
  setSelectedOption: (selectedOption: string | undefined) => void;
}

export const ALL_OPTION = "All";
