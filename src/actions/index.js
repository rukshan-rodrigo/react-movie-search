import axios from 'axios';
const API_KEY = '91BC9BD792328B6D242DAF52C1E2CC69';
const ROOT_URL = `http://api.cinemalytics.in/v2/movie/title/?auth_token=${API_KEY}`;

export const FETCH_MOVIE = 'FETCH_MOVIE';

export function fetchMovie(movie) {
  const url = `${ROOT_URL}&value=${movie}`;
  const request = axios.get(url);

  return {
    type: FETCH_MOVIE,
    payload: request
  };
}