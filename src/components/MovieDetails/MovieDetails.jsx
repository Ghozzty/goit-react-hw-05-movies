import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { fetchMovieById } from '../fetchFunc/fetchFunc';
//
import css from './MovieDetails.module.css';
import placeholder from './placeholder3.jpg';
import noInfo from './no-info.jpg';

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
      <Link to={from}>Back</Link>
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
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </main>
  ) : (
    <>
      <Link to={from}>Back</Link>
      <div>Sorry, no info</div>
      <img src={noInfo} alt="placeholder" width={500} />
    </>
  );
};

export default MovieDetails;
