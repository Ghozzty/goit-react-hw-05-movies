import { fetchCast } from 'components/fetchFunc/fetchFunc';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './Cast.module.css';
import placeholder from './actor-placeholder.jpg';
import PropTypes from 'prop-types';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [castArr, setCastArr] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    try {
      setStatus('pending');
      fetchCast(movieId).then(data => {
        setCastArr(data);
        setStatus('success');
      });
    } catch (error) {
      setStatus('error');
      console.log(error);
    }
  }, [movieId]);

  const baseUrlImg = 'https://image.tmdb.org/t/p/original';

  return (
    <>
      {status === 'pending' && <Loader />}

      {status === 'error' && <div>Sorry no actors information</div>}

      {status === 'success' && (
        <ul className={css.actorList}>
          {castArr.map(({ profile_path, name, character, id }) => (
            <li key={id} className={css.listIem}>
              <img
                src={profile_path ? baseUrlImg + profile_path : placeholder}
                alt="cahracter-foto"
                className={css.foto}
              />
              <p>Name: {name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;

Cast.propTypes = {
  movieId: PropTypes.number,
  id: PropTypes.number,
  fetchCast: PropTypes.func,
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
