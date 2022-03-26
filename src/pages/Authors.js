import { useState } from 'react';
import { Row } from 'react-bootstrap';

import AuthorCard from '../components/AuthorCard';
import Pagination from '../components/Pagination';
import useFetch from '../hooks/useFetch';

const LIMIT = 20;

function Authors() {
  const [page, setPage] = useState(1);
  const { data, error, loading } = useFetch(
    `${process.env.REACT_APP_API_URL}authors?limit=${LIMIT}&skip=${
      (page - 1) * LIMIT
    }`
  );

  if (loading || !data) {
    return <h1 className="text-center">loading</h1>;
  }

  if (error) {
    return <h1 className="text-center">Something Went wrong!</h1>;
  }

  return (
    <Row className="mt-3">
      {data?.results.map((author) => {
        return <AuthorCard key={author._id} author={author} />;
      })}

      <Pagination
        totalPage={data.totalPages}
        currentPage={page}
        handler={setPage}
      />
    </Row>
  );
}

export default Authors;
