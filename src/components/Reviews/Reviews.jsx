import { useParams } from 'react-router-dom';
import { fetchReviews } from 'components/fetchFunc/fetchFunc';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    try {
      fetchReviews(movieId).then(data => setReviews(data));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return reviews.length ? (
    <ul>
      {reviews.map(({ id, content, author }) => (
        <li key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <div>We don't have any reviews for this movie</div>
  );
};

export default Reviews;

Reviews.propTypes = {
  movieId: PropTypes.number,
  id: PropTypes.number,
  fetchReviews: PropTypes.func,
  content: PropTypes.string,
  author: PropTypes.string,
};
