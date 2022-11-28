import { useParams } from 'react-router-dom';
import { fetchReviews } from 'components/fetchFunc/fetchFunc';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    try {
      setStatus('pending');
      fetchReviews(movieId).then(data => {
        setReviews(data);
        setStatus('success');
      });
    } catch (error) {
      setStatus('error');
      console.log(error);
    }
  }, [movieId]);

  return (
    <>
      {status === 'pending' && <Loader />}

      {status === 'error' && (
        <div>We don't have any reviews for this movie</div>
      )}

      {status === 'success' && (
        <ul>
          {reviews.map(({ id, content, author }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
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
