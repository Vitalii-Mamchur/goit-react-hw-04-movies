import Axios from "axios";

const API_KEY = "5236a2719406752a49bdc856168a1fda";
const BASE_URL = "https://api.themoviedb.org/3";

export const onSearchTrending = () =>
  Axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);

export const onSearchQuery = (searchQuery) =>
  Axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US&page=1&include_adult=false`
  );

export const onSearchMovieByID = (movieId) =>
  Axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);

export const onSearchCastByID = (movieId) =>
  Axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

export const onSearchReviewsByID = (movieId) =>
  Axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
