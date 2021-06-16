import API from "../api/api";
import { FETCH_MOVIE_SEARCH } from "./types";
import _ from "lodash";


const getDetails = (movieId) => {
  const response = API.get(`?apikey=f709b47a&i=${movieId}`);
  return response;
};

export const fetchMovieSearch = (title) => async (dispatch) => {
  const response = await API.get(`?apikey=f709b47a&s=${title}`);
  Promise.all(
    _.map(response.data.Search, (movie) => {
      return getDetails(movie.imdbID);
    })
  ).then((details) => {
    if (details && details[0] && details[0].data) {
      console.log("oi");
      dispatch({
        type: FETCH_MOVIE_SEARCH,
        payload: _.map(details, detail => {return detail.data}),
      });
    }
  });
};
