import { useState } from 'react';

const usePagination = (initialPage: number = 1) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);
  const setPage = (page: number) => setCurrentPage(page);

  return { currentPage, nextPage, prevPage, setPage };
};

export default usePagination;
