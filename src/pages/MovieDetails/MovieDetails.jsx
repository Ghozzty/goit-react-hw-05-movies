import { useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { fetchMovieById } from '../../components/fetchFunc/fetchFunc';
//
import css from './MovieDetails.module.css';
import placeholder from './placeholder.jpg';
import noInfo from './no-info.jpg';
import PropTypes from 'prop-types';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [currentMovie, setCurrentMovie] = useState([]);
  const [answer, setAnswer] = useState(false);
  const location = useLocation();
  //
  const { state } = location;
  const from = state?.from ?? '/';

  useEffect(() => {
    try {
      fetchMovieById(movieId).then(data => {
        if (!data) {
          return;
        }
        setAnswer(true);
        setCurrentMovie(data?.data);
      });
    } catch (error) {
      console.log(error);
      setCurrentMovie(null);
    }
  }, [movieId]);

  const baseUrlImg = 'https://image.tmdb.org/t/p/original';
  const { genres, poster_path, title, vote_average, overview, release_date } =
    currentMovie;

  return answer ? (
    <main className={css.wrapper}>
      <Link to={from} className={css.backBtn}>
        Back
      </Link>
      <div className={css.filmWrapper}>
        <img
          src={poster_path ? baseUrlImg + poster_path : placeholder}
          alt="poster"
          width={300}
        />
        <div>
          <h1>
            {title} ({release_date.split('-')[0]})
          </h1>
          <p>User score: {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres
              ? genres.map(({ id, name }) => <li key={id}>{name}</li>)
              : 'Sorry, no genres info'}
          </ul>
        </div>
      </div>
      <section>
        <h3>Additional information</h3>
        <ul className={css.linkList}>
          <li>
            <Link to="cast" state={{ ...state }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ ...state }}>
              Reviews
            </Link>
          </li>
        </ul>
      </section>
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  ) : (
    <div className={css.placeholder}>
      <Link to={from} className={css.backBtn}>
        Back
      </Link>
      <div>Sorry, no info</div>
      <img src={noInfo} alt="placeholder" width={500} />
    </div>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  fetchMovieById: PropTypes.func,
  currentMovie: PropTypes.arrayOf(
    PropTypes.exact({
      movieId: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
      release_date: PropTypes.string,
      overview: PropTypes.string,
    })
  ),
  genres: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};
