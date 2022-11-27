import axios from 'axios';

const KEY = 'ce38b16e348c5ef06da5a87ddf3b3666';

export const fetchTrending = async () => {
  const response = await axios
    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`)
    .catch(err => {
      return console.log(err.message);
    });

  return response.data.results;
};

export const fetchMovieById = async id => {
  const response = await axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`)
    .catch(err => {
      return console.log(err.message);
    });

  return response;
};

export const fetchByQuery = async query => {
  const response = await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .catch(err => {
      return console.log(err.message);
    });

  return response.data;
};

export const fetchCast = async id => {
  const response = await axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
    )
    .catch(err => {
      return console.log(err.message);
    });

  return response.data.cast;
};

export const fetchReviews = async id => {
  const response = await axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
    )
    .catch(err => {
      return console.log(err.message);
    });
  return response.data.results;
};
