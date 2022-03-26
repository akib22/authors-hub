import { Pagination as BPagination } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Pagination({ totalPage, handler, currentPage }) {
  return (
    <BPagination className="d-flex align-items-center justify-content-center mb-3">
      <BPagination.First onClick={() => handler(1)} />
      <BPagination.Prev
        disabled={currentPage === 1}
        onClick={() => handler(currentPage - 1)}
      >
        Prev
      </BPagination.Prev>
      <BPagination.Next
        disabled={currentPage === totalPage}
        onClick={() => handler(currentPage + 1)}
      >
        Next
      </BPagination.Next>
      <BPagination.Last onClick={() => handler(totalPage)} />
    </BPagination>
  );
}

export default Pagination;

Pagination.propTypes = {
  totalPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
};
