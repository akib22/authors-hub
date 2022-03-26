import { Row } from 'react-bootstrap';

import AuthorCard from '../components/AuthorCard';
import useFetch from '../hooks/useFetch';

function Authors() {
  const { data, error, loading } = useFetch(
    `${process.env.REACT_APP_API_URL}authors?limit=20`
  );

  if (loading) {
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
    </Row>
  );
}

export default Authors;
