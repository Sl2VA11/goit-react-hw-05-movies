import axios from 'axios';

const API_KEY = '1b50ba0e0b99203af5e26bdcee6d2298';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function getTrendingMovie() {
  const response = await axios
    .get(BASE_URL + 'movie/popular', {
      params: {
        api_key: API_KEY,
      },
    })
    .catch(function (error) {
      console.log(error);
      return `No results`;
    });

  return response.data.results;
}

export async function getMovieDetails(id) {
  console.log(id);
  const response = await axios
    .get(BASE_URL + `/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .catch(function (error) {
      console.log(error);
      return `No results`;
    });

  return response.data;
}

export async function getMovieCredits(id) {
  console.log(id);
  const response = await axios
    .get(BASE_URL + `/movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    })
    .catch(() => error => {
      console.log(error);
      return `No results`;
    });

  return response.data.cast;
}

export async function getMovieReviews(id) {
  console.log(id);
  const response = await axios
    .get(BASE_URL + `/movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    })
    .catch(() => error => {
      console.log(error);
      return `No results`;
    });

  return response.data.results;
}

export async function getSearchMovie(query) {
  console.log(query);
  const response = await axios
    .get(BASE_URL + `search/movie`, {
      params: {
        api_key: API_KEY,
        query,
      },
    })

    .catch(() => error => {
      console.log(error);
      return `No results`;
    });
 
  return response.data.results
}
