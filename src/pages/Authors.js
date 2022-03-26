import { useState } from 'react';
import { Row } from 'react-bootstrap';

import AuthorCard from '../components/AuthorCard';
import Pagination from '../components/Pagination';
import useFetch from '../hooks/useFetch';
import useLocalStorage from '../hooks/useLocalStorage';

const LIMIT = 20;

function Authors() {
  const [page, setPage] = useState(1);
  const { data, error, loading } = useFetch(
    `${process.env.REACT_APP_API_URL}authors?limit=${LIMIT}&skip=${
      (page - 1) * LIMIT
    }`
  );

  const { addToFavorite, favAuthors, removeFromFavorite } = useLocalStorage();

  if (loading || !data) {
    return <h1 className="text-center">loading</h1>;
  }

  if (error) {
    return <h1 className="text-center">Something Went wrong!</h1>;
  }

  return (
    <Row className="mt-2">
      {data?.results.length === 0 ? (
        <h3 className="text-center">No available authors to show.</h3>
      ) : (
        <>
          <h3 className="text-center">All authors</h3>
          {data?.results.map((author) => {
            const isFavoriteAuthor = !!favAuthors[author._id];

            return (
              <AuthorCard
                key={author._id}
                author={author}
                isFavorite={isFavoriteAuthor}
                handler={isFavoriteAuthor ? removeFromFavorite : addToFavorite}
              />
            );
          })}

          <Pagination
            totalPage={data.totalPages}
            currentPage={page}
            handler={setPage}
          />
        </>
      )}
    </Row>
  );
}

export default Authors;
