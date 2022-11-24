import { useParams } from 'react-router-dom';
import { fetchReviews } from 'components/fetchFunc/fetchFunc';
import { useState, useEffect } from 'react';

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
