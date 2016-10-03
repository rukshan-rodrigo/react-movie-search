import axios from 'axios';
const API_KEY = 'b900f0b3511d4762e074c557dc494d17';
const ROOT_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US`;

export const FETCH_MOVIE = 'FETCH_MOVIE';

export function fetchMovie(movie) {
  const url = `${ROOT_URL}&query=${movie}`;
  const request = axios.get(url);

  return {
    type: FETCH_MOVIE,
    payload: request
  };
}