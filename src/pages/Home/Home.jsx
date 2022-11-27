import { useState, useEffect } from 'react';
import { fetchTrending } from '../../components/fetchFunc/fetchFunc';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [trending, setTranding] = useState([]);
  const { pathname, search } = useLocation();
  const from = `${pathname}${search}`;

  useEffect(() => {
    fetchTrending().then(data => setTranding(data));
  }, []);

  return (
    <main>
      <h1 className={css.title}>Trending today</h1>
      <ul className={css.trendList}>
        {trending.map(({ id, title, original_name }) => (
          <li key={id} className={css.trendItem}>
            <Link to={`/movies/${id}`} state={{ from: from }}>
              {title || original_name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
