import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { IPaginationProps } from "./Pagination.interface";

export default function Pagination(props: IPaginationProps) {
  const currentItemCount = props.currentPage * props.itemsPerPage + 1;
  const totalPages = Math.ceil(props.totalItems / props.itemsPerPage);

  return (
    <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{currentItemCount}</span> to{" "}
            <span className="font-medium">
              {currentItemCount + props.itemsPerPage - 1}
            </span>{" "}
            of <span className="font-medium">{props.totalItems}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              onClick={() => props.setCurrentPage(props.currentPage - 1)}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>

            <a
              href="#"
              onClick={() => props.setCurrentPage(0)}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                props.currentPage === 0
                  ? "bg-teal-700 text-white"
                  : "text-gray-900"
              } ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
            >
              1
            </a>
            <a
              href="#"
              onClick={() => props.setCurrentPage(1)}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                props.currentPage === 1
                  ? "bg-teal-700 text-white"
                  : "text-gray-900"
              } ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
            >
              2
            </a>
            <a
              href="#"
              onClick={() => props.setCurrentPage(2)}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                props.currentPage === 2
                  ? "bg-teal-700 text-white"
                  : "text-gray-900"
              } ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
            >
              3
            </a>

            {props.currentPage > 4 && (
              <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                ...
              </span>
            )}
            {props.currentPage > 3 && (
              <a
                href="#"
                onClick={() => props.setCurrentPage(props.currentPage - 1)}
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                {props.currentPage}
              </a>
            )}

            {props.currentPage > 2 && props.currentPage < totalPages - 1 && (
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold bg-teal-700 text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                {props.currentPage + 1}
              </a>
            )}

            {props.currentPage > 1 && props.currentPage < totalPages - 2 && (
              <a
                onClick={() => props.setCurrentPage(props.currentPage + 1)}
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                {props.currentPage + 2}
              </a>
            )}

            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              onClick={() => props.setCurrentPage(totalPages - 1)}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                props.currentPage === totalPages - 1
                  ? "bg-teal-700 text-white"
                  : "text-gray-900"
              } ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
            >
              {totalPages}
            </a>
            <a
              href="#"
              onClick={() => props.setCurrentPage(props.currentPage + 1)}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
