export interface IPaginationProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  setCurrentPage: (pageNumber: number) => void;
}
