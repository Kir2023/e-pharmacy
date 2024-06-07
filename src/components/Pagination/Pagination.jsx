/* eslint-disable react/prop-types */
import { PaginationContainer, PageDot } from "./Pagination.styled";

const Pagination = ({ totalItems, itemsPerPage, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map((number) => (
        <PageDot
          key={number}
          className={currentPage === number ? "active" : ""}
          onClick={() => paginate(number)}
        />
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
