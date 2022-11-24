import { useState, useEffect } from 'react';
import { fetchTrending } from '../components/fetchFunc/fetchFunc';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [trending, setTranding] = useState([]);
  const { pathname, search } = useLocation();
  const from = `${pathname}${search}`;

  useEffect(() => {
    fetchTrending().then(data => setTranding(data));
  }, []);

  return (
    <main>
      <p>Trending today</p>
      <ul>
        {trending.map(({ id, title, original_name }) => (
          <li key={id}>
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
