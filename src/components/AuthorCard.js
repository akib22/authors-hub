import { Col, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
function AuthorCard({ author, handler, isFavorite = false }) {
  const truncateStr = (str) => {
    return str.length > 75 ? `${str.slice(0, 75)}...` : str;
  };

  const variant = isFavorite ? 'danger' : 'primary';
  const btnText = isFavorite ? 'Remove Favorite' : 'Add Favorite';

  return (
    <Col className="mb-4" xs={12} sm={6} md={6} lg={4} xl={3}>
      <Card>
        <Card.Body>
          <Card.Title>{author.name}</Card.Title>
          <Card.Text className="mb-2">{truncateStr(author.bio)}</Card.Text>

          <Button variant={variant} onClick={() => handler(author)}>
            {btnText}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default AuthorCard;

AuthorCard.propTypes = {
  author: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }),
};
