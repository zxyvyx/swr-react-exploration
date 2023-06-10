import { useEffect, useState } from 'react';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages = 1,
  onPageChange = () => {},
}: PaginationProps) {
  const [listPages, setListPages] = useState<number[]>([]);

  useEffect(() => {
    const list = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i += 1) {
        list.push(i);
      }
    } else if (currentPage > 2 && currentPage < totalPages) {
      list.push(currentPage - 1);
      list.push(currentPage);
      list.push(currentPage + 1);
    } else if (currentPage <= 3) {
      list.push(1);
      list.push(2);
      list.push(3);
    } else if (currentPage >= totalPages - 2) {
      list.push(totalPages - 2);
      list.push(totalPages - 1);
      list.push(totalPages);
    }
    setListPages(list);
  }, [currentPage, totalPages]);

  const handleGoToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleGoToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleGoToSpecificPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const paginationDisabledStyle =
    'disabled:border-transparent disabled:hover:border-transparent disabled:text-gray-300 disabled:hover:text-gray-300 disabled:cursor-default';
  const paginationActiveStyle = `${paginationDisabledStyle} border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium`;
  const paginationNormalStyle = `${paginationDisabledStyle} border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium`;

  return (
    <nav className='border-t border-gray-200 px-4 flex items-center justify-between sm:px-0'>
      <div className='-mt-px w-0 flex-1 flex'>
        <button
          type='button'
          disabled={currentPage === 1}
          className='border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 disabled:hover:text-gray-500 disabled:hover:border-transparent'
          onClick={handleGoToPreviousPage}
        >
          <MdOutlineChevronLeft
            className='mr-3 h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
          Previous
        </button>
      </div>
      <div className='hidden md:-mt-px md:flex'>
        {listPages.map((page) => (
          <button
            type='button'
            key={`pagination-${page}`}
            onClick={() => handleGoToSpecificPage(page)}
            className={`${
              page === currentPage
                ? paginationActiveStyle
                : paginationNormalStyle
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <div className='-mt-px w-0 flex-1 flex justify-end'>
        <button
          type='button'
          disabled={currentPage === totalPages}
          className='border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 disabled:hover:text-gray-500 disabled:hover:border-transparent'
          onClick={handleGoToNextPage}
        >
          Next
          <MdOutlineChevronRight
            className='ml-3 h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
        </button>
      </div>
    </nav>
  );
}
