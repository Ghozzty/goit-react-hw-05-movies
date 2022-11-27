import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchByQuery } from 'components/fetchFunc/fetchFunc';
import { useEffect } from 'react';
import css from './Movies.module.css';
import PropTypes from 'prop-types';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchquery] = useState('');
  const [queryArr, setQueryArr] = useState([]);

  const { pathname, search } = useLocation();
  const from = `${pathname}${search}`;

  const hasQuery = searchParams.get('qwery');

  useEffect(() => {
    if (hasQuery) {
      fetchByQuery(hasQuery).then(data => setQueryArr(data.results));
    }
  }, [hasQuery]);

  const handleQueryChange = e => {
    const query = e.currentTarget.value.toLowerCase();
    setSearchquery(query);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      e.target.reset();
      return;
    }

    fetchByQuery(searchQuery).then(data => {
      if (!data.total_results) {
        setSearchParams({});
        return console.log('ouuch');
      }

      setQueryArr(data.results);
      setSearchParams({ qwery: searchQuery });
    });

    setSearchquery('');
    e.target.reset();
  };

  return (
    <>
      <section className={css.form}>
        <form onSubmit={handleSubmit}>
          <input
            value={searchQuery}
            onChange={handleQueryChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
            className={css.input}
          />
          <button type="submit" className={css.btn}>
            <span>Search</span>
          </button>
        </form>
      </section>
      {queryArr.length ? (
        <ul>
          {queryArr.map(({ id, title, original_name }) => (
            <li key={id} className={css.linkItem}>
              <Link to={`/movies/${id}`} state={{ from: from }}>
                {title || original_name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div></div>
      )}
    </>
  );
};
export default Movies;

Movies.propTypes = {
  fetchByQuery: PropTypes.func,
  queryArr: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      title: PropTypes.string,
      original_name: PropTypes.string,
    })
  ),
};
