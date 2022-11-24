import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchByQuery } from 'components/fetchFunc/fetchFunc';
import { useEffect } from 'react';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchquery] = useState(
    () => searchParams.get('qwery') || ''
  );
  const [queryArr, setQueryArr] = useState([]);

  const { pathname, search } = useLocation();
  const from = `${pathname}${search}`;

  useEffect(() => {
    if (!searchQuery) {
      setSearchParams({});
      return;
    }
    fetchByQuery(searchQuery).then(data => setQueryArr(data.data.results));
    setSearchquery('');
  }, []);

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
      if (data.status !== 200 || !data.data.total_results) {
        setSearchParams({});
        return console.log('ouuch');
      }

      setQueryArr(data.data.results);
    });
    setSearchParams({ qwery: searchQuery });
    setSearchquery('');
    e.target.reset();
  };

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            value={searchQuery}
            onChange={handleQueryChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </header>
      {queryArr.length ? (
        <ul>
          {queryArr.map(({ id, title, original_name }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: from }}>
                {title || original_name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>set query</div>
      )}
    </>
  );
};
export default Movies;
