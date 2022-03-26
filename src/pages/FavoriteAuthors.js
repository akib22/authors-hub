import { Row } from 'react-bootstrap';

import AuthorCard from '../components/AuthorCard';
import useLocalStorage from '../hooks/useLocalStorage';

function FavoriteAuthors() {
  const { favAuthors, removeFromFavorite } = useLocalStorage();
  const data = Object.values(favAuthors);

  return (
    <Row className="mt-2">
      {data.length === 0 ? (
        <h3 className="text-center">No available favorite authors to show.</h3>
      ) : (
        <>
          <h3 className="text-center">Your Favorite Authors</h3>
          {data.map((author) => {
            return (
              <AuthorCard
                key={author._id}
                author={author}
                isFavorite={true}
                handler={removeFromFavorite}
              />
            );
          })}
        </>
      )}
    </Row>
  );
}

export default FavoriteAuthors;
